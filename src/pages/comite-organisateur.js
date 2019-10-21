import PropTypes from "prop-types";
import React from "react";
import Article from "../components/Article";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Img from "gatsby-image";
import MiniHero from "../components/MiniHero";
import A from "../components/A";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { FaEnvelope } from "react-icons/fa";
import theme from "../theme/theme.yaml";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 0 auto;

  @media ${theme.desktop} {
    max-width: 1200px;
  }
`;

const MembreCO = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 50px;
  margin-bottom: 25px;
  max-width: 300px;
`;

const Description = styled.div`
  & > p {
    text-align: center;
  }

  & .name {
    margin-top: 12px;
    font-size: 18px;
  }

  & hr {
    width: 60px;
    height: 3px;
    border: 0;
    background-color: #333;
    margin: 12px auto;
  }

  & svg {
    margin-left: 5px;
    vertical-align: middle;
    fill: ${theme.colors.primary};
  }
`;

const ComiteOrganisateurPage = props => {
  const { data } = props;
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      },
      backgrounds
    }
  } = props;

  const CO = [
    [
      ["anneSo", "Anne-Sophie Lachapelle", "president", "presidence"],
      ["jeremie", "Jérémie Lesuise", "vp-sponsorship", "partenariats"],
      ["alyssa", "Alyssa Bouchenak", "vp-comm", "communications"],
      ["francois", "François Pelletier", "vp-competitions", "competitions"],
      ["sacha", "Sacha Terral", "vp-logistics", "logistique"],
      ["celia", "Célia-Nour Mahrour-Venturelli", "vp-finances", "finances"],
      ["gabriel", "Gabriel Lévesque", "vp-machine", "machine"],
      ["marcAntoine", "Marc Antoine Dumont", "vp-dd", "developpementdurable"],
      ["marieAude", "Marie-Aude Ardizzon", "vp-support"]
    ],
    [
      ["rachelle", "Rachelle Sederof", "Cheffe Marraine"],
      ["titi", "Thierry Meunier", "Chef Parrain"]
    ],
    [
      ["cedric", "Cédric Vigneault", "adj-spons"],
      ["christophe", "Christophe Duchesne", "adj-spons"],
      ["claudia", "Claudia Caouette", "adj-comm"],
      ["maxence", "Maxence Frenette", "adj-web"],
      ["mongrain", "Alexandre Mongrain", "adj-machine"]
    ]
  ];

  return (
    <>
      <MiniHero backgrounds={backgrounds}>
        <FormattedMessage id="oc" />
      </MiniHero>
      <Article theme={theme}>
        {CO.map(CoSection => (
          <Container>
            {CoSection.map(membreCO => (
              <MembreCO key={membreCO[0]}>
                <Img fixed={data[membreCO[0]].fixed} />
                <Description>
                  <p className="name">{membreCO[1]}</p>
                  <hr />
                  <p className="role">
                    <FormattedMessage id={membreCO[2]} />
                    {membreCO[3] && (
                      <A href={`mailto:${membreCO[3]}@jeuxdegenie.qc.ca`}>
                        <FaEnvelope />
                      </A>
                    )}
                  </p>
                </Description>
              </MembreCO>
            ))}
          </Container>
        ))}
      </Article>

      <Seo facebook={facebook} />
    </>
  );
};

ComiteOrganisateurPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ComiteOrganisateurPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  fragment squareImage on ImageSharp {
    fixed(width: 300, height: 300, quality: 90, cropFocus: NORTH) {
      ...GatsbyImageSharpFixed
    }
  }

  query ComiteOrganisateurQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }

    backgrounds: imageSharp(fluid: { originalName: { regex: "/group/" } }) {
      ...MiniHero
    }

    anneSo: imageSharp(fluid: { originalName: { regex: "/anne-sophie/" } }) {
      ...squareImage
    }

    jeremie: imageSharp(fluid: { originalName: { regex: "/jeremie/" } }) {
      ...squareImage
    }

    alyssa: imageSharp(fluid: { originalName: { regex: "/alyssa/" } }) {
      ...squareImage
    }

    francois: imageSharp(fluid: { originalName: { regex: "/francois/" } }) {
      ...squareImage
    }

    sacha: imageSharp(fluid: { originalName: { regex: "/sacha/" } }) {
      ...squareImage
    }

    celia: imageSharp(fluid: { originalName: { regex: "/celia/" } }) {
      ...squareImage
    }

    gabriel: imageSharp(fluid: { originalName: { regex: "/gabriel/" } }) {
      ...squareImage
    }

    marcAntoine: imageSharp(fluid: { originalName: { regex: "/marc-antoine/" } }) {
      ...squareImage
    }
    marieAude: imageSharp(fluid: { originalName: { regex: "/marie-aude/" } }) {
      ...squareImage
    }

    cedric: imageSharp(fluid: { originalName: { regex: "/cedric/" } }) {
      ...squareImage
    }
    christophe: imageSharp(fluid: { originalName: { regex: "/christophe/" } }) {
      ...squareImage
    }
    claudia: imageSharp(fluid: { originalName: { regex: "/claudia/" } }) {
      ...squareImage
    }
    maxence: imageSharp(fluid: { originalName: { regex: "/maxence/" } }) {
      ...squareImage
    }
    mongrain: imageSharp(fluid: { originalName: { regex: "/mongrain/" } }) {
      ...squareImage
    }
    rachelle: imageSharp(fluid: { originalName: { regex: "/rachelle/" } }) {
      ...squareImage
    }
    titi: imageSharp(fluid: { originalName: { regex: "/titi/" } }) {
      ...squareImage
    }
  }
`;
