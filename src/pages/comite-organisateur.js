import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Img from "gatsby-image";
import MiniHero from "../components/MiniHero";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MembreCO = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 50px;
  margin-bottom: 25px;
  max-width: 250px;

  &:nth-child(10n) {
    margin-left: 25px;
  }
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
    ["anneSo", "Anne-Sophie Lachapelle", "president"],
    ["jeremie", "Jérémie Lesuise", "vp-sponsorship"],
    ["alyssa", "Alyssa Bouchenak", "vp-comm"],
    ["francois", "François Pelletier", "vp-competitions"],
    ["sacha", "Sacha Terral", "vp-logistics"],
    ["celia", "Célia-Nour Mahrour-Venturelli", "vp-finances"],
    ["gabriel", "Gabriel Lévesque", "vp-machine"],
    ["iman", "Iman Hassanein", "vp-social"],
    ["marc", "Marc Antoine Dumont", "vp-dd"],
    ["marieAude", "Marie-Aude Ardizzon", "vp-support"]
  ];

  return (
    <>
      <ThemeContext.Consumer>
        {theme => (
          <>
            <MiniHero backgrounds={backgrounds} theme={theme} />
            <Article theme={theme}>
              <header>
                <h1>
                  <FormattedMessage id="oc" />
                </h1>
              </header>

              <Container>
                {CO.map(membreCO => (
                  <MembreCO key={membreCO[0]}>
                    <Img fixed={data[membreCO[0]].fixed} />
                    <Description>
                      <p className="name">{membreCO[1]}</p>
                      <hr />
                      <p className="role">
                        <FormattedMessage id={membreCO[2]} />
                      </p>
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
    fixed(width: 250, height: 250, quality: 90, cropFocus: NORTH) {
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

    backgrounds: imageSharp(fluid: { originalName: { regex: "/group-smile-cropped/" } }) {
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

    iman: imageSharp(fluid: { originalName: { regex: "/iman/" } }) {
      ...squareImage
    }

    marc: imageSharp(fluid: { originalName: { regex: "/marc/" } }) {
      ...squareImage
    }

    marieAude: imageSharp(fluid: { originalName: { regex: "/marie-aude/" } }) {
      ...squareImage
    }
  }
`;
