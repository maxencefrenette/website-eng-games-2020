import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { FacebookProvider, Page } from "react-facebook";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Parallax } from "react-parallax";
import theme from "../theme/theme.yaml";
import { FaRecycle, FaChild, FaCog } from "react-icons/fa";

const PillarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Pillar = styled.div`
  flex: 0 0 250px;
  margin: 0 25px;
  text-align: center;

  & > svg {
    font-size: 100px;
    fill: ${theme.colors.primary};
    margin-bottom: 20px;
  }

  & p {
    text-align: center;
  }
`;

const PhantomHr = styled.hr`
  margin: 0;
  border: 0;
`;

const Centered = styled.div`
  width: 500px;
  margin: 20px auto;
`;

const Sides = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 1 0 500px;
  margin-right: ${theme.space.default};
`;

const Right = styled.div`
  flex: 0 0 auto;
`;

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const { data } = this.props;

    const {
      bgDesktop: {
        resize: { src: desktop }
      },
      bgTablet: {
        resize: { src: tablet }
      },
      bgMobile: {
        resize: { src: mobile }
      },
      site: {
        siteMetadata: { facebook }
      }
    } = data;

    const backgrounds = {
      desktop,
      tablet,
      mobile
    };

    return (
      <>
        <ThemeContext.Consumer>
          {theme => (
            <Hero scrollToContent={this.scrollToContent} backgrounds={backgrounds} theme={theme} />
          )}
        </ThemeContext.Consumer>

        <PhantomHr ref={this.separator} />

        <Article noPadding={true}>
          <h2>
            <FormattedMessage id="3-pillars" />
          </h2>
          <PillarContainer>
            <Pillar>
              <FaChild />
              <div>
                <h3>
                  <FormattedMessage id="pillar1" />
                </h3>
                <p>
                  <FormattedMessage id="pillar1-message" />
                </p>
              </div>
            </Pillar>
            <Pillar>
              <FaRecycle />
              <div>
                <h3>
                  <FormattedMessage id="pillar2" />
                </h3>
                <p>
                  <FormattedMessage id="pillar2-message" />
                </p>
              </div>
            </Pillar>
            <Pillar>
              <FaCog />
              <div>
                <h3>
                  <FormattedMessage id="pillar3" />
                </h3>
                <p>
                  <FormattedMessage id="pillar3-message" />
                </p>
              </div>
            </Pillar>
          </PillarContainer>
        </Article>

        <Parallax bgImage={data.parallax.resize.src} strength={-200}>
          <div style={{ height: "500px" }} />
        </Parallax>

        <Article noPadding={true}>
          <Sides>
            <Left>
              <h2>
                <FormattedMessage id="history" />
              </h2>
              <p>
                <FormattedMessage id="history-text" />
              </p>
              <h1>
                <FormattedMessage id="mission-2020" />
              </h1>
              <p>
                <FormattedMessage id="mission-2020-text" />
              </p>
            </Left>
            <Right>
              <h2>
                <FormattedMessage id="news" />
              </h2>
              <Centered>
                <FacebookProvider appId="372145173617264">
                  <Page
                    href="https://www.facebook.com/jeuxdegenie/"
                    tabs="timeline"
                    width="500"
                    height="600px"
                  />
                </FacebookProvider>
              </Centered>
            </Right>
          </Sides>
        </Article>

        <Seo facebook={facebook} />
      </>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/montreal-edited/" } }) {
      resize(width: 1920, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/montreal-edited/" } }) {
      resize(width: 1024, height: 384, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/montreal-edited/" } }) {
      resize(width: 600, height: 300, quality: 90, cropFocus: CENTER) {
        src
      }
    }

    parallax: imageSharp(fluid: { originalName: { regex: "/ets-aerial/" } }) {
      resize(width: 1920, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;
