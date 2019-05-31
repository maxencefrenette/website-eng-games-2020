import PropTypes from "prop-types";
import React from "react";
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
  @media ${theme.tablet} {
    display: flex;
    justify-content: center;
  }
`;

const Big = styled.div`
  color: ${theme.colors.primary};
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 10px;
`;

const Centered = styled.div`
  text-align: center;

  & > a {
    &:hover {
      opacity: 0.75;
    }
  }
`;

const ThankYou = styled.p`
  max-width: 1000px;

  && {
    margin-left: auto;
    margin-right: auto;
  }
`;

const SponsorshipPackageDownload = () => (
  <HContainer>
    <Download url="/downloads/Partenariat-JDG2020.pdf">Cahier de partenariats (fr)</Download>
    <Download url="/downloads/Partnership-JDG2020.pdf">Sponsorship Package (en)</Download>
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
    <>
      <MiniHero backgrounds={backgrounds}>
        <FormattedMessage id="sponsors" />
      </MiniHero>
      <Article theme={theme}>
        <Centered>
          <ThankYou>
            <FormattedMessage id="thank-you-text" />
          </ThankYou>
          <SponsorshipPackageDownload />
          <br />
          <br />
          <Big>
            <FormattedMessage id="thank-you" />
          </Big>
        </Centered>

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

        <h2>
          <FormattedMessage id="gold" />
        </h2>
        <Centered>
          <Img fixed={data.sintra.fixed} />
        </Centered>

        {/* <h2><FormattedMessage id="silver" /></h2> */}

        <h2>
          <FormattedMessage id="bronze" />
        </h2>
        <Centered>
          <Img fixed={data.boralex.fixed} />
        </Centered>

        {/* <h2><FormattedMessage id="supporter" /></h2> */}

        {/* <h2>
          <FormattedMessage id="logistic" />
        </h2>
        <Centered>
          <Img fixed={data.centreSportifEts.fixed} />
        </Centered> */}
      </Article>
      <Seo facebook={facebook} />
    </>
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

  fragment ImageXsWide on ImageSharp {
    fixed(width: 250, quality: 90) {
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

    # Gold
    sintra: imageSharp(fixed: { originalName: { regex: "/sintra/" } }) {
      ...ImageM
    }

    # Bronze
    boralex: imageSharp(fluid: { originalName: { regex: "/boralex/" } }) {
      ...ImageXsWide
    }

    # Logistic
    centreSportifEts: imageSharp(fluid: { originalName: { regex: "/centre-sportif-ets/" } }) {
      ...ImageXs
    }
  }
`;
