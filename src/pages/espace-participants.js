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
          <HContainer>
            <Download url="/downloads/cahier-mission-V1.pdf">Cahier de mission (fr)</Download>
            <Download url="/downloads/mission-handbook-V1.pdf">Mission handbook (en)</Download>
          </HContainer>
          {/* <HContainer>
            <Download>
              Cahier de mission (fr)
              <br />
              (À venir)
            </Download>
            <Download>
              Mission handbook (en)
              <br />
              (Coming soon)
            </Download>
          </HContainer>*/}
          <h3>
            <FormattedMessage id="cahier-competition-titre" />
          </h3>
          <HContainer>
            <Download url="/downloads/cahier-competitions-V1.pdf">
              Cahier de Compétitions (FR)
            </Download>
            <Download url="/downloads/competitions-handbook-V1.pdf">
              Competition Handbook (EN)
            </Download>
          </HContainer>
          <h3>
            <FormattedMessage id="cahier-entrepreneuriat-titre" />
          </h3>
          <HContainer>
            <Download url="/downloads/Cahier-Entrepreneuriat-V3.pdf">
              Cahier entrepreneuriat (FR)
            </Download>
            <Download url="/downloads/Entrepreneurship-Challenge-V3.pdf">
              Entrepreneurship competition package (EN)
            </Download>
          </HContainer>
          <h3>
            <FormattedMessage id="cahier-machine-titre" />
          </h3>
          <HContainer>
            <Download url="/downloads/Cahier de construction_2019-12-29.pdf">
              Cahier de construction (FR)
            </Download>
            <Download url="/downloads/Construction specification_2019-12-29.pdf">
              Construction specifications (EN)
            </Download>
          </HContainer>
          <HContainer>
            <Download url="/downloads/Cahier machine_2019-12-29.pdf">Cahier du défi (FR)</Download>
            <Download url="/downloads/Machine Handbook_2019-12-29.pdf">
              Competition handbook (EN)
            </Download>
          </HContainer>
          <h3>
            <FormattedMessage id="politique-titre" />
          </h3>
          <HContainer>
            <Download url="/downloads/politique-FR.pdf">
              Politique de discipline CRÉIQ (FR)
            </Download>
            <Download url="/downloads/politique-EN.pdf">QCESO Discipline Policy (EN)</Download>
          </HContainer>
          <h3>
            <FormattedMessage id="formulaire-titre" />
          </h3>
          <HContainer>
            <Download
              url="https://docs.google.com/forms/d/e/1FAIpQLSeaEdWKqvLb1h0Gr60jTJEd5MJwZTx9Y7lirZ0r9NCBtd_kdQ/viewform"
              external={true}
            >
              Formulaire de plainte / Complaint Form
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
