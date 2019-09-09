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
  display: flex;
  flex-wrap: wrap;
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
          <HContainer>
            <Download url="/downloads/Partenariat-JDG2020.pdf">
              Cahier de partenariats (fr)
            </Download>
            <Download url="/downloads/Partnership-JDG2020.pdf">Sponsorship Package (en)</Download>
          </HContainer>
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
            <Img
              style={{ maxWidth: "100%" }}
              imgStyle={{ objectFit: "contain" }}
              fixed={data.ets.fixed}
            />
          </A>
        </Centered>

        <h2>
          <FormattedMessage id="platinum" />
        </h2>
        <Centered>
          <A href="https://aeets.com/">
            <Img
              style={{ maxWidth: "100%" }}
              imgStyle={{ objectFit: "contain" }}
              fixed={data.aeets.fixed}
            />
          </A>
        </Centered>

        <h2>
          <FormattedMessage id="diamond" />
        </h2>
        <Centered>
          <A href="https://centech.co/">
            <Img
              style={{ maxWidth: "100%" }}
              imgStyle={{ objectFit: "contain" }}
              fixed={data.centech.fixed}
            />
          </A>
        </Centered>

        <h2>
          <FormattedMessage id="gold" />
        </h2>
        <Centered>
          <Img
            style={{ maxWidth: "100%" }}
            imgStyle={{ objectFit: "contain" }}
            fixed={data.sintra.fixed}
          />
          <br />
          <br />
          <br />
          <br />
          <Img
            style={{ maxWidth: "100%" }}
            imgStyle={{ objectFit: "contain" }}
            fixed={data.olympus.fixed}
          />
        </Centered>

        <h2>
          <FormattedMessage id="silver" />
        </h2>
        <Centered>
          <Img
            style={{ maxWidth: "100%" }}
            imgStyle={{ objectFit: "contain" }}
            fixed={data.hatch.fixed}
          />
          <br />
          <br />
          <br />
          <br />
          <Img
            style={{ maxWidth: "100%" }}
            imgStyle={{ objectFit: "contain" }}
            fixed={data.criq.fixed}
          />
          <br />
          <br />
          <br />
          <br />
          <Img
            style={{ maxWidth: "100%" }}
            imgStyle={{ objectFit: "contain" }}
            fixed={data.laporte.fixed}
          />
          <br />
          <br />
          <br />
          <br />
          <Img
            style={{ maxWidth: "100%" }}
            imgStyle={{ objectFit: "contain" }}
            fixed={data.pmi.fixed}
          />
        </Centered>

        <h2>
          <FormattedMessage id="bronze" />
        </h2>
        <Centered>
          <Img
            style={{ maxWidth: "100%" }}
            imgStyle={{ objectFit: "contain" }}
            fixed={data.boralex.fixed}
          />
          <br />
          <br />
          <br />
          <Img
            style={{ maxWidth: "100%" }}
            imgStyle={{ objectFit: "contain" }}
            fixed={data.cnesst.fixed}
          />
          <br />
          <br />
          <br />
          <Img
            style={{ maxWidth: "100%" }}
            imgStyle={{ objectFit: "contain" }}
            fixed={data.genik.fixed}
          />
          <br />
          <br />
          <br />
          <Img
            style={{ maxWidth: "100%" }}
            imgStyle={{ objectFit: "contain" }}
            fixed={data.pajr.fixed}
          />
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
    fixed(width: 600, quality: 90) {
      ...GatsbyImageSharpFixed
    }
  }

  fragment ImageL on ImageSharp {
    fixed(width: 500, quality: 90) {
      ...GatsbyImageSharpFixed
    }
  }

  fragment ImageM on ImageSharp {
    fixed(width: 400, quality: 90) {
      ...GatsbyImageSharpFixed
    }
  }

  fragment ImageS on ImageSharp {
    fixed(width: 320, quality: 90) {
      ...GatsbyImageSharpFixed
    }
  }

  fragment ImageSWide on ImageSharp {
    fixed(width: 390, quality: 90) {
      ...GatsbyImageSharpFixed
    }
  }

  fragment ImageXsWide on ImageSharp {
    fixed(width: 250, quality: 90) {
      ...GatsbyImageSharpFixed
    }
  }

  fragment ImageXs on ImageSharp {
    fixed(width: 190, quality: 90) {
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

    # Diamond
    centech: imageSharp(fixed: { originalName: { regex: "/centech/" } }) {
      ...ImageL
    }

    # Gold
    sintra: imageSharp(fixed: { originalName: { regex: "/sintra/" } }) {
      ...ImageM
    }
    olympus: imageSharp(fixed: { originalName: { regex: "/olympus/" } }) {
      ...ImageM
    }

    # Silver
    hatch: imageSharp(fixed: { originalName: { regex: "/hatch/" } }) {
      ...ImageS
    }
    criq: imageSharp(fixed: { originalName: { regex: "/criq/" } }) {
      ...ImageS
    }
    laporte: imageSharp(fixed: { originalName: { regex: "/laporte/" } }) {
      ...ImageS
    }
    pmi: imageSharp(fixed: { originalName: { regex: "/pmi/" } }) {
      ...ImageS
    }

    # Bronze
    boralex: imageSharp(fluid: { originalName: { regex: "/boralex/" } }) {
      ...ImageXsWide
    }
    cnesst: imageSharp(fluid: { originalName: { regex: "/CNESST/" } }) {
      ...ImageXs
    }
    genik: imageSharp(fluid: { originalName: { regex: "/genik/" } }) {
      ...ImageXsWide
    }
    pajr: imageSharp(fluid: { originalName: { regex: "/pajr/" } }) {
      ...ImageXs
    }

    # Logistic
    centreSportifEts: imageSharp(fluid: { originalName: { regex: "/centre-sportif-ets/" } }) {
      ...ImageXs
    }
  }
`;
