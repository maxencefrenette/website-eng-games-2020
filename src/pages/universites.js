import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";

const UniversitesPage = props => {
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  return <React.Fragment>
      <ThemeContext.Consumer>
        {theme => <Article theme={theme}>
            <header>
              <Headline title="Universités" theme={theme} />
            </header>
            <p>
              Grille avec les logos de toutes les délégations
            </p>
          </Article>}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
    </React.Fragment>;
};

UniversitesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default UniversitesPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query UniversitesQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
