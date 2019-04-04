import PropTypes from "prop-types";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { ScreenWidthContext, FontLoadedContext } from "../../layouts";
import Menu from "../Menu";
import { graphql } from "gatsby";
import LLink from "../LLink";

class Header extends React.Component {
  state = {
    fixed: false
  };

  visibilitySensorChange = val => {
    if (val) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  };

  getHeaderSize = () => {
    const fixed = this.state.fixed ? "fixed" : "";
    const homepage = this.props.path === "/" ? "homepage" : "";

    return `${fixed} ${homepage} hero-menu`;
  };

  render() {
    const { data, pages, path, theme } = this.props;
    const { fixed } = this.state;

    return <React.Fragment>
        <header className={`header ${this.getHeaderSize()}`}>
          <div className="logoType">
            <div className="logo">
              <LLink to="/">
                <img src={data.logo.fixed.src} />
              </LLink>
            </div>
            <div className="type">
              <h1>Mission: Jeux de Génie 2020</h1>
              <h2>Changer le Monde</h2>
            </div>
          </div>
          <FontLoadedContext.Consumer>
            {loaded => (
              <ScreenWidthContext.Consumer>
                {width => (
                  <Menu
                    path={path}
                    fixed={fixed}
                    screenWidth={width}
                    fontLoaded={loaded}
                    pages={pages}
                    theme={theme}
                  />
                )}
              </ScreenWidthContext.Consumer>
            )}
          </FontLoadedContext.Consumer>
        </header>
        <VisibilitySensor onChange={this.visibilitySensorChange}>
          <div className="sensor" />
        </VisibilitySensor>

        {/* --- STYLES --- */}
        <style jsx>{`
          .header {
            align-items: center;
            justify-content: center;
            background-color: ${theme.color.neutral.white};
            display: flex;
            height: ${theme.header.height.default};
            position: relative;
            top: 0;
            width: 100%;
            align-items: center;

            :global(.logoType) {
              align-items: center;
              display: flex;
              flex-direction: "column";
              color: white;

              .logo {
                flex-shrink: 0;
              }
            }

            &.hero-menu {
              position: absolute;
              background-color: transparent;
              height: 100px;
            }
          }

          h1 {
            font-size: 1.35em;
            margin: 0 0 5px 0;
          }

          h2 {
            font-size: 0.8em;
            letter-spacing: 0;
            margin: 0;
          }

          .logo {
            border-radius: 65% 75%;
            // border: 1px solid #eee;
            display: inline-block;
            height: 44px;
            margin: 0 20px 0 0;
            overflow: hidden;
            width: 44px;
            transition: all 0.5s;

            .homepage & {
              height: 60px;
              width: 60px;
            }

            img {
              width: 100%;
            }
          }

          .sensor {
            display: block;
            position: absolute;
            bottom: 0;
            z-index: 1;
            left: 0;
            right: 0;
            height: 1px;
            top: ${path === "/" ? "100px" : "80px"};
          }

          @from-width tablet {.header {
              padding: 40px;

              &.homepage {
                height: 100px;
              }
            }}

          @below desktop {.header.homepage {
              .logo {
                border: none;
              }

              :global(.logoType),
              h1 {
                color: white;
              }
              h2 {
                color: #dddbda;
              }
            }}

          @from-width desktop {.header {
              align-items: center;
              background-color: white;
              display: flex;
              position: absolute;
              top: 0;
              width: 100%;
              justify-content: space-between;
              transition: padding 0.5s;

              &.fixed {
                height: 50px;
                background-color: white;
                left: 0;
                padding: 0 20px;
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1;

                h1 {
                  margin: 0 0 2px 0;
                }

                h2 {
                  display: none;
                }
              }

              &.homepage:not(.fixed) {
                :global(.logoType),
                h1 {
                  color: white;
                }
                h2 {
                  color: #dddbda;
                }
              }
            }

            .header :global(.logoType) {
              text-align: left;
              flex-direction: row;
              flex-shrink: 0;
              width: auto;
            }

            .logo {
              margin: 0 20px 0 0;

              .fixed & {
                height: 36px;
                width: 36px;
              }

              .header.homepage:not(.fixed) & {
                border: none;
              }
            }

            h2 {
              animation-duration: 0.5s;
              animation-name: h2Entry;
            }

            @keyframes h2Entry {from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }}}`}</style>
      </React.Fragment>;
  }
}

Header.propTypes = {
  path: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Header;

export const query = graphql`
  fragment Header on Query {
    logo: imageSharp(fluid: { originalName: { regex: "/logo-2020/" } }) {
      fixed(width: 60, height: 60, quality: 90, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
