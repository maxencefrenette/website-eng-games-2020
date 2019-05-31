import PropTypes from "prop-types";
import React from "react";
import Article from "../components/Article";
import Seo from "../components/Seo";
import Download from "../components/Download";
import MiniHero from "../components/MiniHero";
import styled from "styled-components";
import { graphql } from "gatsby";
import { FormattedMessage } from "react-intl";
import theme from "../theme/theme.yaml";

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
          <HContainer>
            <Download>Cahier du participant (fr) (À venir)</Download>
            <Download>Participant&#39;s handbook (en) (Coming soon)</Download>
          </HContainer>
          <HContainer>
            <Download>Cahier de délégation (fr) (À venir)</Download>
            <Download>{"Delegation's package (en) (Coming soon)"}</Download>
          </HContainer>
          <HContainer>
            <Download>Cahier de compétitions (fr) (À venir)</Download>
            <Download>Competition handbook (en) (Coming soon)</Download>
          </HContainer>
          <HContainer>
            <Download>Cahier de la machine robotique (fr) (À venir)</Download>
            <Download>{"Machine package (en) (Coming soon)"}</Download>
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
