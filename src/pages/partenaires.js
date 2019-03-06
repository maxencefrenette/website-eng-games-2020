import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import MiniHero from "../components/MiniHero";
import styled from "styled-components";
import Download from "../components/Download";

const HContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Big = styled.div`
  color: #2a2b7a;
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
                <Headline title="Partenaires" theme={theme} />
              </header>

              <Centered>
                <Big>Merci à nos partenaires!</Big>
                <p>
                  Sans qui le succès de cet événement d’envergure ne serait possible ! Vous
                  contribuez au rayonnement de la relève en ingénierie!
                </p>
              </Centered>

              <br />
              <br />

              <SponsorshipPackageDownload />

              <br />

              <h1>Hôte</h1>
              <p>
                <Img fixed={data.ets.fixed} />
              </p>
              <h1>Platine</h1>
              <p>
                <Img fixed={data.aeets.fixed} />
              </p>

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

  query PartenairesQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }

    backgrounds: imageSharp(fluid: { originalName: { regex: "/volley/" } }) {
      ...MiniHero
    }

    ets: imageSharp(fixed: { originalName: { regex: "/school-ets/" } }) {
      ...ImageXl
    }
    aeets: imageSharp(fixed: { originalName: { regex: "/aeets/" } }) {
      ...ImageXl
    }
  }
`;
