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
    ["anneSo", "Alyssa Bouchenak", "VP Communications"],
    ["anneSo", "Jasmine Dufort", "VP Finances"],
    ["anneSo", "Iman Hassanein", "VP Affaires Sociales"],
    ["anneSo", "Jérémie Lesuise", "VP Partenariats"],
    ["anneSo", "Gabriel Lévesque", "VP Machine"],
    ["anneSo", "François Pelletier", "VP Compétitions"],
    ["anneSo", "Sacha Terral", "VP Logistique"],
    ["anneSo", "Marie-Aude Ardizzon", "Conseillère à la production"]
  ];

  return (
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
  );
};

ComiteOrganisateurPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ComiteOrganisateurPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  fragment squareImage on ImageSharp {
    fixed(width: 350, height: 350, quality: 90, cropFocus: CENTER) {
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

    anneSo: imageSharp(fluid: { originalName: { regex: "/cat/" } }) {
      ...squareImage
    }

    backgrounds: imageSharp(fluid: { originalName: { regex: "/volley/" } }) {
      ...MiniHero
    }
  }
`;
