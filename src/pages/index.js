import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import Article from "../components/Article";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { FacebookProvider, Page } from "react-facebook";
import styled from "styled-components";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import theme from "../theme/theme.yaml";
import { FaRecycle, FaChild, FaCog } from "react-icons/fa";
import Img from "gatsby-image";

const SponsorMessageContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 20px;

  & > div {
    max-width: 200px;
    margin-right: 30px;
  }

  & > p {
    flex: 0 1 600px;
    margin: 0;
  }
`;

const PillarContainer = styled.div`
  margin-top: 10px;

  @media ${theme.desktop} {
    display: flex;
    justify-content: center;
  }
`;

const Pillar = styled.div`
  text-align: center;

  @media ${theme.desktop} {
    flex: 1 0 0;
    margin: 0 25px;
  }

  & > svg {
    font-size: 100px;
    fill: ${theme.colors.primary};
    margin-bottom: 20px;
  }

  & p {
    text-align: center;
  }
`;

const Centered = styled.div`
  width: 500px;
  margin: 20px auto;
`;

const Sides = styled.div`
  @media ${theme.desktop} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Left = styled.div`
  @media ${theme.desktop} {
    flex: 1 0 500px;
    margin-right: ${theme.space.default};
  }
`;

const Right = styled.div`
  display: none;

  @media ${theme.tablet} {
    display: block;
  }

  @media ${theme.desktop} {
    flex: 0 0 auto;
  }
`;

class IndexPage extends React.Component {
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
        <Hero backgrounds={backgrounds} data={data} />

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
          <h2>
            <FormattedMessage id="sponsor-messages" />
          </h2>
          <SponsorMessageContainer>
            <div>
              <Img fixed={data.veolia.fixed} />
            </div>
            <p>
              <FormattedHTMLMessage id="sponsor-message-1" />
            </p>
          </SponsorMessageContainer>
          <SponsorMessageContainer>
            <div>
              <Img fixed={data.rheinmetall.fixed} />
            </div>
            <p>
              <FormattedHTMLMessage id="sponsor-message-3" />
            </p>
          </SponsorMessageContainer>
          <SponsorMessageContainer>
            <div>
              <Img fixed={data.aeets.fixed} />
            </div>
            <p>
              <FormattedHTMLMessage id="sponsor-message-3" />
            </p>
          </SponsorMessageContainer>
          <Sides>
            <Left>
              <h2>
                <FormattedMessage id="history" />
              </h2>
              <p>
                <FormattedMessage id="history-text" />
              </p>
              <h2>
                <FormattedMessage id="mission-2020" />
              </h2>
              <p>
                <FormattedHTMLMessage id="mission-2020-text-1" />
              </p>
              <p>
                <FormattedMessage id="mission-2020-text-2" />
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

    ...Hero

    veolia: imageSharp(fixed: { originalName: { regex: "/veolia/" } }) {
      fixed(width: 200, height: 49, quality: 90, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed
      }
    }
    rheinmetall: imageSharp(fixed: { originalName: { regex: "/rheinmetall/" } }) {
      fixed(width: 200, height: 60, quality: 90, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed
      }
    }
    aeets: imageSharp(fixed: { originalName: { regex: "/aeets/" } }) {
      fixed(width: 200, height: 83, quality: 90, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
