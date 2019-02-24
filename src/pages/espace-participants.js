import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import Download from "../components/Download";
import MiniHero from "../components/MiniHero";
import styled from "styled-components";
import { graphql } from "gatsby";

const Section = styled.div`
  margin-bottom: 10px;
`;

const HContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const EspaceParticipantsPage = props => {
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      },
      bgDesktop: {
        resize: { src: desktop }
      },
      bgTablet: {
        resize: { src: tablet }
      },
      bgMobile: {
        resize: { src: mobile }
      }
    }
  } = props;

  const backgrounds = {
    desktop,
    tablet,
    mobile
  };

  return (
    <>
      <ThemeContext.Consumer>
        {theme => <MiniHero backgrounds={backgrounds} theme={theme} />}
      </ThemeContext.Consumer>
      <hr />
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="Espace Paaaaarticipants" theme={theme} />
            </header>
            <Section>
              Vous trouverez ici toutes les informations dont vous aurez besoin pour participer aux
              Jeux de génie 2020.
            </Section>
            <Section>
              <HContainer>
                <Download url="/downloads/placeholder.txt">Cahier du participant (fr)</Download>
                <Download url="/downloads/placeholder.txt">
                  Participant&#39;s handbook (en)
                </Download>
              </HContainer>
              <HContainer>
                <Download>Cahier de délégation (fr)</Download>
                <Download>{"Delegation's package (en)"}</Download>
              </HContainer>
              <HContainer>
                <Download>Cahier de compétitions (fr)</Download>
                <Download>Competition handbook (en)</Download>
              </HContainer>
              <HContainer>
                <Download>Cahier de la machine robotique (fr)</Download>
                <Download>{"Machine package (en)"}</Download>
              </HContainer>
            </Section>
          </Article>
        )}
      </ThemeContext.Consumer>
      <Seo facebook={facebook} />
    </>
  );
};

EspaceParticipantsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default EspaceParticipantsPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query EspaceParticipantsQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/volley/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/volley/" } }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/volley/" } }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;
