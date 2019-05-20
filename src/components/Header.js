import PropTypes from "prop-types";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { ScreenWidthContext, FontLoadedContext } from "../layouts";
import Menu from "./Menu";
import { graphql } from "gatsby";
import LLink from "./LLink";
import styled from "styled-components";
import theme from "../theme/theme.yaml";

const HeaderStyle = styled.div`
  .header {
    align-items: center;
    justify-content: center;
    background-color: transparent;
    display: flex;
    height: 120px;
    position: absolute;
    top: 0;
    width: 100%;
    align-items: center;

    .logoType {
      align-items: center;
      display: flex;
      flex-direction: "column";
      color: white;

      .logo {
        flex-shrink: 0;
      }
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
    display: inline-block;
    height: 44px;
    margin: 0 20px 0 0;
    overflow: hidden;
    width: 44px;
    transition: all 0.5s;

    img {
      width: 100%;
    }
  }

  .logoType {
    color: white;

    & a {
      color: white;
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
    top: 120px;
  }

  @media ${theme.tablet} {
    .header {
      padding: 40px;
    }
  }

  @media ${theme.desktop} {
    .header {
      align-items: center;
      display: flex;
      position: absolute;
      top: 0;
      width: 100%;
      justify-content: space-between;
      transition: padding 0.5s;

      &.fixed {
        height: 100px;
        background-color: white;
        left: 0;
        padding: 0 20px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;

        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12);

        .logoType {
          color: black;

          a {
            color: black;
          }
        }

        h1 {
          margin: 0 0 2px 0;
        }
      }
    }

    .header .logoType {
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
    }
  }
`;

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

    return `${fixed} ${homepage}`;
  };

  render() {
    const { data, pages, path } = this.props;
    const { fixed } = this.state;

    return (
      <HeaderStyle path={path}>
        <header className={`header hero-menu ${this.getHeaderSize()}`}>
          <div className="logoType">
            <div className="logo">
              <LLink to="/">
                <img src={data.logo.fixed.src} />
              </LLink>
            </div>
            <div className="type">
              <h1>
                <LLink to="/">Mission: Jeux de Génie 2020</LLink>
              </h1>
              <h2>
                <LLink to="/">Changer le Monde</LLink>
              </h2>
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
                  />
                )}
              </ScreenWidthContext.Consumer>
            )}
          </FontLoadedContext.Consumer>
        </header>
        <VisibilitySensor onChange={this.visibilitySensorChange}>
          <div className="sensor" />
        </VisibilitySensor>
      </HeaderStyle>
    );
  }
}

Header.propTypes = {
  path: PropTypes.string.isRequired
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
