import PropTypes from "prop-types";
import React from "react";
import Article from "../components/Article";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import MiniHero from "../components/MiniHero";
import styled from "styled-components";
import Download from "../components/Download";
import theme from "../theme/theme.yaml";
import { FormattedMessage } from "react-intl";

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
  margin: -30px;
  margin-bottom: 110px;

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
            <Download url="/downloads/PLAN-DE-PARTENARIAT-JDG2020.pdf">
              Cahier de partenariats (fr)
            </Download>
            <Download url="/downloads/PARTNERSHIP-PLAN-JDG2020.pdf">
              Sponsorship Package (en)
            </Download>
          </HContainer>
          <br />
          <br />
          <Big>
            <FormattedMessage id="thank-you" />
          </Big>
        </Centered>

        <h2>
          <FormattedMessage id="official" />
        </h2>
        <LogoContainer>
          <SponsorLogo image={data.veolia.fluid} size={800} link="https://www.veolia.ca/" />
        </LogoContainer>

        <h2>
          <FormattedMessage id="host" />
        </h2>
        <LogoContainer>
          <SponsorLogo image={data.ets.fluid} size={700} link="https://www.etsmtl.ca/" />
        </LogoContainer>

        <h2>
          <FormattedMessage id="platinum" />
        </h2>
        <LogoContainer>
          <SponsorLogo image={data.aeets.fluid} size={650} link="https://aeets.com/" />
          <SponsorLogo
            image={data.addison.fluid}
            size={650}
            link="https://addison-electronique.com/"
          />
          <SponsorLogo
            image={data.rheinmetall.fluid}
            size={650}
            link="https://www.rheinmetall.ca/"
          />
        </LogoContainer>

        <h2>
          <FormattedMessage id="diamond" />
        </h2>
        <LogoContainer>
          <SponsorLogo image={data.centech.fluid} size={475} link="https://centech.co/" />
          <SponsorLogo image={data.eurovia.fluid} size={475} link="https://www.euroviaqc.ca/" />
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
          <SponsorLogo image={data.bell.fluid} size={400} />
          <SponsorLogo image={data.oiq.fluid} size={400} />
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
          <SponsorLogo image={data.demix.fluid} size={320} />
          <SponsorLogo image={data.genium360.fluid} size={320} />
          <SponsorLogo image={data.genieInc.fluid} size={320} />
          <SponsorLogo image={data.gbi.fluid} size={320} />
          <SponsorLogo image={data.alten.fluid} size={320} />
          <SponsorLogo image={data.cmai.fluid} size={320} />
          <SponsorLogo image={data.tetratech.fluid} size={320} />
        </LogoContainer>

        <h2>
          <FormattedMessage id="bronze" />
        </h2>
        <LogoContainer>
          <SponsorLogo image={data.boralex.fluid} size={190} />
          <SponsorLogo image={data.cnesst.fluid} size={190} />
          <SponsorLogo image={data.genik.fluid} size={190} />
          <SponsorLogo image={data.pajr.fluid} size={190} />
          <SponsorLogo image={data.antidote.fluid} size={190} />
          <SponsorLogo image={data.cogeco.fluid} size={190} />
          <SponsorLogo image={data.topAces.fluid} size={190} />
          <SponsorLogo image={data.foiq.fluid} size={190} />
          <SponsorLogo image={data.guru.fluid} size={190} />
          <SponsorLogo image={data.beenox.fluid} size={190} />
        </LogoContainer>
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
  fragment ImageXXXl on ImageSharp {
    fluid(maxWidth: 800, quality: 90, fit: CONTAIN, background: "white") {
      ...GatsbyImageSharpFluid
    }
  }

  fragment ImageXXl on ImageSharp {
    fluid(maxWidth: 700, quality: 90, fit: CONTAIN, background: "white") {
      ...GatsbyImageSharpFluid
    }
  }

  fragment ImageXl on ImageSharp {
    fluid(maxWidth: 650, quality: 90, fit: CONTAIN, background: "white") {
      ...GatsbyImageSharpFluid
    }
  }

  fragment ImageL on ImageSharp {
    fluid(maxWidth: 475, quality: 90, fit: CONTAIN, background: "white") {
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

    veolia: imageSharp(fixed: { originalName: { regex: "/veolia/" } }) {
      ...ImageXXXl
    }

    ets: imageSharp(fixed: { originalName: { regex: "/school-ets/" } }) {
      ...ImageXXl
    }

    # Platinium
    aeets: imageSharp(fixed: { originalName: { regex: "/aeets/" } }) {
      ...ImageXl
    }
    addison: imageSharp(fixed: { originalName: { regex: "/addison/" } }) {
      ...ImageXl
    }
    rheinmetall: imageSharp(fixed: { originalName: { regex: "/rheinmetall/" } }) {
      ...ImageXl
    }

    # Diamond
    centech: imageSharp(fixed: { originalName: { regex: "/centech/" } }) {
      ...ImageL
    }
    eurovia: imageSharp(fixed: { originalName: { regex: "/eurovia/" } }) {
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
    bell: imageSharp(fixed: { originalName: { regex: "/bell/" } }) {
      ...ImageM
    }
    oiq: imageSharp(fixed: { originalName: { regex: "/^oiq/" } }) {
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
    demix: imageSharp(fixed: { originalName: { regex: "/demix/" } }) {
      ...ImageS
    }
    genium360: imageSharp(fixed: { originalName: { regex: "/genium360/" } }) {
      ...ImageS
    }
    genieInc: imageSharp(fixed: { originalName: { regex: "/genie-inc/" } }) {
      ...ImageS
    }
    gbi: imageSharp(fixed: { originalName: { regex: "/gbi/" } }) {
      ...ImageS
    }
    alten: imageSharp(fixed: { originalName: { regex: "/alten/" } }) {
      ...ImageS
    }
    cmai: imageSharp(fixed: { originalName: { regex: "/CMAI/" } }) {
      ...ImageS
    }
    tetratech: imageSharp(fixed: { originalName: { regex: "/tetratech/" } }) {
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
    antidote: imageSharp(fluid: { originalName: { regex: "/antidote/" } }) {
      ...ImageXs
    }
    cogeco: imageSharp(fluid: { originalName: { regex: "/cogeco/" } }) {
      ...ImageXs
    }
    topAces: imageSharp(fluid: { originalName: { regex: "/top-aces/" } }) {
      ...ImageXs
    }
    foiq: imageSharp(fluid: { originalName: { regex: "/foiq/" } }) {
      ...ImageXs
    }
    guru: imageSharp(fluid: { originalName: { regex: "/guru/" } }) {
      ...ImageXs
    }
    beenox: imageSharp(fluid: { originalName: { regex: "/beenox/" } }) {
      ...ImageXs
    }
  }
`;
