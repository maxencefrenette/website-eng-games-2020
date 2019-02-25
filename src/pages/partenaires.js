import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import MiniHero from "../components/MiniHero"

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
            <h1>Partenaire Officiel</h1>
            <p>
              <Img fixed={data.officiel.fixed} />
            </p>
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
    fixed(width: 600, quality: 90) {
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

    officiel: imageSharp(fixed: { originalName: { regex: "/logo-ets/" } }) {
      ...ImageXl
    }
  }
`;
