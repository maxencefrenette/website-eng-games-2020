import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import MiniHero from "../components/MiniHero";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import A from "../components/A";

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
`;

const University = styled.div`
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
  .description {
    text-align: center;
    font-size: 18px;
  }
`;

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
    ["concordia", "https://www.facebook.com/ConcordiaEngineeringGames/"],
    ["epm", "http://www.jdg.aep.polymtl.ca/"],
    ["ets", "https://jdgets.com/"],
    ["itr", "https://www.facebook.com/JDGUQTR/"],
    ["laval", "http://www.jdglaval.com/"],
    ["mcgill", "http://enggames.mcgilleus.ca/"],
    ["sherbrooke", "https://jdgsherbrooke.com/"],
    ["uqac", "http://aeg.uqac.ca/jdguqac/"],
    ["uqar"],
    ["uqat"],
    ["uqottawa", "http://uqottawa.ca/"]
  ];

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <>
            <MiniHero backgrounds={backgrounds} theme={theme}>
              <FormattedMessage id="delegations" />
            </MiniHero>
            <Article>
              <Container>
                {universities.map(uni => (
                  <University key={uni[0]}>
                    {uni[1] ? (
                      <A href={uni[1]}>
                        <Img fixed={data[uni[0]].fixed} />
                      </A>
                    ) : (
                      <Img fixed={data[uni[0]].fixed} />
                    )}
                    <div className="description">
                      <FormattedMessage id={uni[0]} />
                    </div>
                  </University>
                ))}
              </Container>
            </Article>
          </>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
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
