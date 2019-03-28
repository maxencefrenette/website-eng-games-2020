import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import MiniHero from "../components/MiniHero";

const UniversitesPage = props => {
  const { data } = props;
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      },
      backgrounds
    }
  } = props;

  const universities = [
    ["concordia", "Université Concordia", "https://www.facebook.com/ConcordiaEngineeringGames/"],
    ["epm", "École polytechnique de Montréal", "http://www.jdg.aep.polymtl.ca/"],
    ["ets", "École de technologie supérieure", "https://jdgets.com/"],
    ["itr", "Université du Québec à Trois-Rivières", "https://www.facebook.com/JDGUQTR/"],
    ["laval", "Université Laval", "http://www.jdglaval.com/"],
    ["mcgill", "Université McGill", "http://enggames.mcgilleus.ca/"],
    ["sherbrooke", "Université de Sherbrooke", "https://jdgsherbrooke.com/"],
    ["uqac", "Université du Québec à Chicoutimi", "http://aeg.uqac.ca/jdguqac/"],
    ["uqar", "Université du Québec à Rimouski"],
    ["uqat", "Université du Québec en Abitibi-Témiscamingue"],
    ["uqottawa", "Université du Québec en Outaouais & Université d'Ottawa", "http://uqottawa.ca/"]
  ];

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <>
            <MiniHero backgrounds={backgrounds} theme={theme}></MiniHero>
            <Article theme={theme}>
              <header>
                <h1>Universités</h1>
              </header>
              <div className="container">
                {universities.map(uni => (
                  <div className="university" key={uni[0]}>
                    {uni[2] ? (
                      <a href={uni[2]}>
                        <Img fixed={data[uni[0]].fixed} />
                      </a>
                    ) : (
                      <Img fixed={data[uni[0]].fixed} />
                    )}
                    <div className="description">{uni[1]}</div>
                  </div>
                ))}
              </div>
            </Article>
          </>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />

      <style jsx>{`
        .container {
          width: 1000px;
          margin: 0 auto;

          display: flex;
          flex-wrap: wrap;
        }

        .university {
          width: 150px;
          margin-left: 50px;
          margin-right: 50px;
          margin-bottom: 50px;


          a {
            transition-duration: 0.3s;
            transition-timing-function: ease;

            &:hover {
              opacity: 0.75;
            }
          }
        }

        .description {
          text-align: center;
          font-size: 18px;
        }
      `}</style>
    </React.Fragment>
  );
};

UniversitesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default UniversitesPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  fragment universityImage on ImageSharp {
    fixed(width: 150, height: 150, quality: 90, cropFocus: CENTER) {
      ...GatsbyImageSharpFixed
    }
  }

  query UniversitesQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }

    backgrounds: imageSharp(fluid: { originalName: { regex: "/universities/" } }) {
      ...MiniHero
    }

    concordia: imageSharp(fluid: { originalName: { regex: "/concordia/" } }) {
      ...universityImage
    }
    epm: imageSharp(fluid: { originalName: { regex: "/epm/" } }) {
      ...universityImage
    }
    ets: imageSharp(fluid: { originalName: { regex: "/dele-ets/" } }) {
      ...universityImage
    }
    itr: imageSharp(fluid: { originalName: { regex: "/itr/" } }) {
      ...universityImage
    }
    laval: imageSharp(fluid: { originalName: { regex: "/laval/" } }) {
      ...universityImage
    }
    mcgill: imageSharp(fluid: { originalName: { regex: "/mcgill/" } }) {
      ...universityImage
    }
    sherbrooke: imageSharp(fluid: { originalName: { regex: "/sherbrooke/" } }) {
      ...universityImage
    }
    uqac: imageSharp(fluid: { originalName: { regex: "/uqac/" } }) {
      ...universityImage
    }
    uqar: imageSharp(fluid: { originalName: { regex: "/uqar/" } }) {
      ...universityImage
    }
    uqat: imageSharp(fluid: { originalName: { regex: "/uqat/" } }) {
      ...universityImage
    }
    uqottawa: imageSharp(fluid: { originalName: { regex: "/uqottawa/" } }) {
      ...universityImage
    }
  }
`;
