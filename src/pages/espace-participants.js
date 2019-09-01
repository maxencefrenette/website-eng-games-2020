import PropTypes from "prop-types";
import React from "react";
import Article from "../components/Article";
import Seo from "../components/Seo";
import Download from "../components/Download";
import MiniHero from "../components/MiniHero";
import styled from "styled-components";
import { graphql } from "gatsby";
import { FormattedMessage } from "react-intl";

const Section = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const HContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const EspaceParticipantsPage = props => {
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
        <FormattedMessage id="participants" />
      </MiniHero>
      <Article>
        <Section>
          <FormattedMessage id="participants-text" />
        </Section>
        <Section>
          <h3>
            <FormattedMessage id="cahier-participant-titre" />
          </h3>
          {/* <HContainer>
            <Download url = "/downloads/cahier-deleguees.pdf">
              Cahier des délégué·e·s (fr)
            </Download>
            <Download url = "/downloads/delegates-handbook.pdf">
              Delegates' handbook (en)
            </Download>
          </HContainer> */}
          <HContainer>
            <Download>
              Cahier des délégué·e·s (fr)
              <br />
              (À venir)
            </Download>
            <Download>
              Delegates' handbook (en)
              <br />
              (Coming soon)
            </Download>
          </HContainer>
          <h3>
            <FormattedMessage id="cahier-competition-titre" />
          </h3>
          {/* <HContainer>
            <Download url = "/downloads/cahier-competitions.pdf">
              Cahier de compétitions (fr)
            </Download>
            <Download url = "/downloads/competitions-package.pdf">
              Competitions package (en)
            </Download>
          </HContainer> */}
          <HContainer>
            <Download>
              Cahier de compétitions (fr)
              <br />
              (À venir)
            </Download>
            <Download>
              Competitions package (en)
              <br />
              (Coming soon)
            </Download>
          </HContainer>
          <h3>
            <FormattedMessage id="cahier-entrepreneuriat-titre" />
          </h3>
          {/* <HContainer>
            <Download url = "/downloads/cahier-entrepreneuriat.pdf">
              Cahier entrepreneuriat (fr)
            </Download>
            <Download url = "/downloads/entrepreneurship-package.pdf">
              Entrepreneurship competition package (en)
            </Download>
          </HContainer> */}
          <HContainer>
            <Download>
              Cahier entrepreneuriat (fr)
              <br />
              (À venir)
            </Download>
            <Download>
              Entrepreneurship competition package (en)
              <br />
              (Coming soon)
            </Download>
          </HContainer>
          <h3>
            <FormattedMessage id="cahier-machine-titre" />
          </h3>
          <HContainer>
            <Download url="/downloads/cahier-de-construction.pdf">
              Cahier de construction (fr)
            </Download>
            <Download url="/downloads/construction-specifications.pdf">
              Construction specifications (en)
            </Download>
          </HContainer>
          {/* <HContainer>
            <Download>
              Cahier de construction (fr)
              <br />
              (À venir)
            </Download>
            <Download>
              Construction specifications (en)
              <br />
              (Coming soon)
            </Download>
          </HContainer> */}
          {/* <HContainer>
            <Download url = "/downloads/cahier-machine.pdf">
              Cahier du défi (fr)
            </Download>
            <Download url = "/downloads/machine-handbook.pdf">
              Competition handbook (en)
            </Download>
          </HContainer> */}
          <HContainer>
            <Download>
              Cahier du défi (fr)
              <br />
              (À venir)
            </Download>
            <Download>
              Competition handbook (en)
              <br />
              (Coming soon)
            </Download>
          </HContainer>
        </Section>
      </Article>
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
    backgrounds: imageSharp(fluid: { originalName: { regex: "/participants-edited/" } }) {
      ...MiniHero
    }
  }
`;
