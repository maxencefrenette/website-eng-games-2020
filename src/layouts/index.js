import PropTypes from "prop-types";
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { getScreenWidth, timeoutThrottlerHandler } from "../utils/helpers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import I18n from "../components/I18n";
import theme from "../theme/theme2.yaml";

export const ThemeContext = React.createContext(null);
export const ScreenWidthContext = React.createContext(0);
export const FontLoadedContext = React.createContext(false);

import themeObjectFromYaml from "../theme/theme.yaml";

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      screenWidth: 0,
      headerMinimized: false,
      theme: themeObjectFromYaml
    };
  }

  timeouts = {};

  componentDidMount() {
    this.setState({
      screenWidth: getScreenWidth()
    });
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.resizeThrottler, false);
    }
  }

  resizeThrottler = () => {
    return timeoutThrottlerHandler(this.timeouts, "resize", 100, this.resizeHandler);
  };

  resizeHandler = () => {
    this.setState({ screenWidth: getScreenWidth() });
  };

  isHomePage = () => {
    if (this.props.location.pathname === "/") {
      return true;
    }

    return false;
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutgQuery {
            ...Header
          }
        `}
        render={data => {
          const {
            children,
            pageContext: { locale }
          } = this.props;

          return <ThemeContext.Provider value={this.state.theme}>
              <FontLoadedContext.Provider value={this.state.font400loaded}>
                <ScreenWidthContext.Provider value={this.state.screenWidth}>
                  <I18n locale={locale}>
                    <React.Fragment>
                      <Header path={this.props.location.pathname} theme={this.state.theme} data={data} />
                      <main>{children}</main>
                      <Footer theme={this.state.theme} />

                      {/* --- STYLES --- */}
                      <style jsx>{`
                        main {
                          min-height: 80vh;
                        }`}</style>
                      <style jsx global>{`
                        html {
                          box-sizing: border-box;
                        }
                        *,
                        *:after,
                        *:before {
                          box-sizing: inherit;
                          margin: 0;
                          padding: 0;
                        }
                        body {
                          font-family: ${theme.font.body};
                          font-size: ${theme.font.bodyWeight};
                        }

                        h1,
                        h2,
                        h3,
                        h4,
                        h5,
                        h6 {
                          font-family: ${theme.font.heading};
                          font-size: ${theme.font.headingWeight};
                        }

                        h1,
                        h2,
                        h3 {
                          font-weight: ${this.state.font600loaded ? 600 : 400};
                          line-height: 1.1;
                          letter-spacing: -0.03em;
                          margin: 0;
                        }
                        h1 {
                          letter-spacing: -0.04em;
                        }
                        p {
                          margin: 0;
                        }
                        strong {
                          font-weight: ${this.state.font600loaded ? 600 : 400};
                        }
                        a {
                          text-decoration: none;
                          color: #666;
                        }
                        main {
                          width: auto;
                          display: block;
                        }`}</style>
                    </React.Fragment>
                  </I18n>
                </ScreenWidthContext.Provider>
              </FontLoadedContext.Provider>
            </ThemeContext.Provider>;
        }}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;
