import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import MiniHero from "../components/MiniHero";
import styled from "styled-components";
import Download from "../components/Download";
import theme from "../theme/theme.yaml";
import { FormattedMessage } from "react-intl";
import A from "../components/A";

const HContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Big = styled.div`
  color: ${theme.colors.primary};
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 10px;
`;

const Centered = styled.div`
  text-align: center;
`;

const SponsorshipPackageDownload = () => (
  <HContainer>
    <Download>Cahier de partenariats (fr)</Download>
    <Download>Sponsorship Package (en)</Download>
  </HContainer>
);

const PartenairesPage = props => {
  const { data } = props;
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      },
      backgrounds
    }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <>
            <MiniHero backgrounds={backgrounds} theme={theme} />
            <Article theme={theme}>
              <header>
                <h1>
                  <FormattedMessage id="sponsors" />
                </h1>
              </header>

              <SponsorshipPackageDownload />
              <br />
              <br />

              <Centered>
                <Big>
                  <FormattedMessage id="thank-you" />
                </Big>
                <p>
                  <FormattedMessage id="thank-you-text" />
                </p>
              </Centered>

              <br />
              <br />

              <h2>
                <FormattedMessage id="host" />
              </h2>
              <Centered>
                <A href="https://www.etsmtl.ca/">
                  <Img fixed={data.ets.fixed} />
                </A>
              </Centered>

              <h2>
                <FormattedMessage id="platinum" />
              </h2>
              <Centered>
                <A href="https://aeets.com/">
                  <Img fixed={data.aeets.fixed} />
                </A>
              </Centered>

              {/* <h2><FormattedMessage id="diamond" /></h2> */}

              {/* <h2><FormattedMessage id="gold" /></h2> */}

              {/* <h2><FormattedMessage id="silver" /></h2> */}

              <h2>
                <FormattedMessage id="bronze" />
              </h2>
              <Centered>
                <Img fixed={data.boralex.fixed} />
              </Centered>

              {/* <h2><FormattedMessage id="supporter" /></h2> */}

              <br />
              <br />

              <SponsorshipPackageDownload />
            </Article>
          </>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
    </React.Fragment>
  );
};

PartenairesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default PartenairesPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  fragment ImageXl on ImageSharp {
    fixed(width: 500, quality: 90) {
      ...GatsbyImageSharpFixed
    }
  }

  fragment ImageL on ImageSharp {
    fixed(width: 400, quality: 90) {
      ...GatsbyImageSharpFixed
    }
  }

  fragment ImageM on ImageSharp {
    fixed(width: 300, quality: 90) {
      ...GatsbyImageSharpFixed
    }
  }

  fragment ImageS on ImageSharp {
    fixed(width: 200, quality: 90) {
      ...GatsbyImageSharpFixed
    }
  }

  fragment ImageXs on ImageSharp {
    fixed(width: 200, quality: 90) {
      ...GatsbyImageSharpFixed
    }
  }

  query PartenairesQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }

    backgrounds: imageSharp(fluid: { originalName: { regex: "/sponsors-edited/" } }) {
      ...MiniHero
    }

    ets: imageSharp(fixed: { originalName: { regex: "/school-ets/" } }) {
      ...ImageXl
    }
    aeets: imageSharp(fixed: { originalName: { regex: "/aeets/" } }) {
      ...ImageXl
    }

    # Bronze
    boralex: imageSharp(fixed: { originalName: { regex: "/boralex/" } }) {
      ...ImageXs
    }
  }
`;
