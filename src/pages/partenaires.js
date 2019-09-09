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

import SponsorLogo from "../components/SponsorLogo";

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
`;

const LogoContainer = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  margin-bottom: -30px;

  & > * {
    flex: 0 1 auto;
    margin: 50px;
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
  const {
    data,
    pageContext: { locale }
  } = props;
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
        <LogoContainer>
          <SponsorLogo image={data.ets.fluid} size={600} link="https://www.etsmtl.ca/" />
        </LogoContainer>

        <h2>
          <FormattedMessage id="platinum" />
        </h2>
        <LogoContainer>
          <SponsorLogo image={data.aeets.fluid} size={600} link="https://aeets.com/" />
        </LogoContainer>

        <h2>
          <FormattedMessage id="diamond" />
        </h2>
        <LogoContainer>
          <SponsorLogo image={data.centech.fluid} size={500} link="https://centech.co/" />
        </LogoContainer>

        <h2>
          <FormattedMessage id="gold" />
        </h2>
        <LogoContainer>
          <SponsorLogo image={data.sintra.fluid} size={400} />
          <SponsorLogo image={data.olympus.fluid} size={400} />
          <SponsorLogo
            image={data.riotinto.fluid}
            size={400}
            link={
              locale === "fr"
                ? "http://www.riotinto.com/canada-10512-fr.aspx"
                : "http://www.riotinto.com/canada"
            }
          />
        </LogoContainer>

        <h2>
          <FormattedMessage id="silver" />
        </h2>
        <LogoContainer>
          <SponsorLogo image={data.hatch.fluid} size={320} />
          <SponsorLogo image={data.criq.fluid} size={320} />
          <SponsorLogo image={data.laporte.fluid} size={320} />
          <SponsorLogo image={data.pmi.fluid} size={320} />
          <SponsorLogo image={data.giro.fluid} size={320} />
        </LogoContainer>

        <h2>
          <FormattedMessage id="bronze" />
        </h2>
        <LogoContainer>
          <SponsorLogo image={data.boralex.fluid} size={190} />
          <SponsorLogo image={data.cnesst.fluid} size={190} />
          <SponsorLogo image={data.genik.fluid} size={190} />
          <SponsorLogo image={data.pajr.fluid} size={190} />
        </LogoContainer>

        {/* <h2><FormattedMessage id="supporter" /></h2> */}

        {/* <h2>
          <FormattedMessage id="logistic" />
        </h2>
        <LogoContainer>
          <SponsorLogo image={data.centreSportifEts.fluid} size={190} />
        </LogoContainer> */}
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
    fluid(maxWidth: 600, quality: 90, fit: CONTAIN, background: "white") {
      ...GatsbyImageSharpFluid
    }
  }

  fragment ImageL on ImageSharp {
    fluid(maxWidth: 500, quality: 90, fit: CONTAIN, background: "white") {
      ...GatsbyImageSharpFluid
    }
  }

  fragment ImageM on ImageSharp {
    fluid(maxWidth: 400, quality: 90, fit: CONTAIN, background: "white") {
      ...GatsbyImageSharpFluid
    }
  }

  fragment ImageS on ImageSharp {
    fluid(maxWidth: 320, quality: 90, fit: CONTAIN, background: "white") {
      ...GatsbyImageSharpFluid
    }
  }

  fragment ImageXs on ImageSharp {
    fluid(maxWidth: 190, quality: 90, fit: CONTAIN, background: "white") {
      ...GatsbyImageSharpFluid
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
    riotinto: imageSharp(fixed: { originalName: { regex: "/riotinto/" } }) {
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
    giro: imageSharp(fixed: { originalName: { regex: "/giro/" } }) {
      ...ImageS
    }

    # Bronze
    boralex: imageSharp(fluid: { originalName: { regex: "/boralex/" } }) {
      ...ImageXs
    }
    cnesst: imageSharp(fluid: { originalName: { regex: "/CNESST/" } }) {
      ...ImageXs
    }
    genik: imageSharp(fluid: { originalName: { regex: "/genik/" } }) {
      ...ImageXs
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
