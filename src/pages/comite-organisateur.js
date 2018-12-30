import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Img from "gatsby-image";

const ComiteOrganisateurPage = props => {
  const { data } = props;
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  const CO = [
    ["anneSo", "Anne-Sophie Lachapelle", "Présidente"],
    ["anneSo", "Anne-Sophie Lachapelle", "Présidente"],
    ["anneSo", "Anne-Sophie Lachapelle", "Présidente"],
    ["anneSo", "Anne-Sophie Lachapelle", "Présidente"],
    ["anneSo", "Anne-Sophie Lachapelle", "Présidente"]
  ];

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="Comité Organisateur" theme={theme} />
            </header>

            <div className="container">
              {CO.map(membreCO => (
                <div className="membre-co" key={membreCO[0]}>
                  <Img fixed={data[membreCO[0]].fixed} />
                  <p>
                    {membreCO[1]}, {membreCO[2]}
                  </p>
                </div>
              ))}
            </div>
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
        }

        .membre-co {
          margin: 20px;
        }
      `}</style>
    </React.Fragment>
  );
};

ComiteOrganisateurPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ComiteOrganisateurPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  fragment squareImage on ImageSharp {
    fixed(width: 300, height: 300, quality: 90, cropFocus: CENTER) {
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
  }
`;
