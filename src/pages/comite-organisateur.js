import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Img from "gatsby-image";
import MiniHero from "../components/MiniHero";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MembreCO = styled.div`
  margin-left: 75px;
  margin-bottom: 50px;

  &:nth-child(3n-2) {
    margin-left: 0;
  }
`;

const Description = styled.div`
  text-align: center;

  & .name {
    margin-top: 4px;
    font-size: 18px;
  }

  & hr {
    width: 60px;
    height: 3px;
    border: 0;
    background-color: #333;
    margin: 12px auto;
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
    ["anneSo", "Anne-Sophie Lachapelle", "Présidente"],
    ["alyssa", "Alyssa Bouchenak", "VP Communications"],
    ["celia", "Célia-Nour Mahrour-Venturelli", "VP Finances"],
    ["iman", "Iman Hassanein", "VP Affaires Sociales"],
    ["jeremie", "Jérémie Lesuise", "VP Partenariats"],
    ["gabriel", "Gabriel Lévesque", "VP Machine"],
    ["francois", "François Pelletier", "VP Compétitions"],
    ["sacha", "Sacha Terral", "VP Logistique"],
    ["marieAude", "Marie-Aude Ardizzon", "Conseillère à la production"]
  ];

  return (
    console.log(data),
    (
      <>
        <ThemeContext.Consumer>
          {theme => (
            <>
              <MiniHero backgrounds={backgrounds} theme={theme} />
              <Article theme={theme}>
                <header>
                  <Headline title="Comité Organisateur" theme={theme} />
                </header>

                <Container>
                  {CO.map(membreCO => (
                    <MembreCO key={membreCO[0]}>
                      <Img fixed={data[membreCO[0]].fixed} />
                      <Description>
                        <p className="name">{membreCO[1]}</p>
                        <hr />
                        <p className="role">{membreCO[2]}</p>
                      </Description>
                    </MembreCO>
                  ))}
                </Container>
              </Article>
            </>
          )}
        </ThemeContext.Consumer>

        <Seo facebook={facebook} />
      </>
    )
  );
};

ComiteOrganisateurPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ComiteOrganisateurPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  fragment squareImage on ImageSharp {
    fixed(width: 350, height: 350, quality: 90, cropFocus: NORTH) {
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

    backgrounds: imageSharp(fluid: { originalName: { regex: "/volley/" } }) {
      ...MiniHero
    }

    anneSo: imageSharp(fluid: { originalName: { regex: "/anne-sophie/" } }) {
      ...squareImage
    }

    alyssa: imageSharp(fluid: { originalName: { regex: "/alyssa/" } }) {
      ...squareImage
    }

    celia: imageSharp(fluid: { originalName: { regex: "/cat/" } }) {
      ...squareImage
    }

    iman: imageSharp(fluid: { originalName: { regex: "/cat/" } }) {
      ...squareImage
    }

    jeremie: imageSharp(fluid: { originalName: { regex: "/jeremie/" } }) {
      ...squareImage
    }

    gabriel: imageSharp(fluid: { originalName: { regex: "/gabriel/" } }) {
      ...squareImage
    }

    francois: imageSharp(fluid: { originalName: { regex: "/francois/" } }) {
      ...squareImage
    }

    sacha: imageSharp(fluid: { originalName: { regex: "/sacha/" } }) {
      ...squareImage
    }

    marieAude: imageSharp(fluid: { originalName: { regex: "/marie-aude/" } }) {
      ...squareImage
    }
  }
`;
