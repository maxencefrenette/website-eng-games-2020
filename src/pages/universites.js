import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const UniversitesPage = props => {
  const { data } = props;
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  const universities = [
    ["concordia", "Université Concordia"],
    ["epm", "École polytechnique de Montréal"],
    ["ets", "École de technologie supérieure"],
    ["itr", "Université du Québec à Trois-Rivières"],
    ["laval", "Université Laval"],
    ["mcgill", "Université McGill"],
    ["sherbrooke", "Université de Sherbrooke"],
    ["uqac", "Université du Québec à Chicoutimi"],
    ["uqar", "Université du Québec à Rimouski"],
    ["uqat", "Université du Québec en Abitibi-Témiscamingue"],
    ["uqottawa", "Université du Québec en Outaouais & Université d'Ottawa"]
  ];

  return <React.Fragment>
      <ThemeContext.Consumer>
        {theme => <Article theme={theme}>
            <header>
              <Headline title="Universités" theme={theme} />
            </header>
            <div className="container">
              {universities.map(uni => <div className="university" key={uni[0]}>
                  <Img fixed={data[uni[0]].fixed} />
                  <div className="description">{uni[1]}</div>
                </div>)}
            </div>
          </Article>}
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
          margin-left: 100px;
          margin-bottom: 50px;

          &:nth-child(4n + 1) {
            margin-left: 0;
          }
        }

        .description {
          text-align: center;
          font-size: 18px;
        }`}</style>
    </React.Fragment>;
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

    concordia: imageSharp(fluid: { originalName: { regex: "/concordia/" } }) {
      ...universityImage
    }
    epm: imageSharp(fluid: { originalName: { regex: "/epm/" } }) {
      ...universityImage
    }
    ets: imageSharp(fluid: { originalName: { regex: "/ets/" } }) {
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
