import PropTypes from "prop-types";
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { getScreenWidth, timeoutThrottlerHandler } from "../utils/helpers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import I18n from "../components/I18n";
import theme from "../theme/theme.yaml";
import styled, { createGlobalStyle } from "styled-components";

export const ScreenWidthContext = React.createContext(0);
export const FontLoadedContext = React.createContext(false);

const GlobalStyle = createGlobalStyle`
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
    background-color: #ccc;
    font-family: ${theme.font.body};
    font-weight: ${theme.font.bodyWeight};

    & b {
      font-weight: bold;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.font.heading};
    font-weight: ${theme.font.headingWeight};
  }

  h1,
  h2,
  h3 {
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
  a {
    text-decoration: none;
    color: #666;
  }
  main {
    width: auto;
    display: block;
  }
`;

const Main = styled.main`
  min-height: 80vh;
`;

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      screenWidth: 0,
      headerMinimized: false
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

          return (
            <FontLoadedContext.Provider value={this.state.font400loaded}>
              <ScreenWidthContext.Provider value={this.state.screenWidth}>
                <I18n locale={locale}>
                  <React.Fragment>
                    <GlobalStyle />
                    <Header
                      path={this.props.location.pathname}
                      theme={this.state.theme}
                      data={data}
                    />
                    <Main>{children}</Main>
                    <Footer theme={this.state.theme} />
                  </React.Fragment>
                </I18n>
              </ScreenWidthContext.Provider>
            </FontLoadedContext.Provider>
          );
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
