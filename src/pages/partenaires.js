import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import { graphql } from "gatsby";

const PartenairesPage = props => {
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
              <Headline title="Partenaires" theme={theme} />
            </header>
            <p>
              Logos des partenaires !
            </p>
          </Article>}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
    </React.Fragment>;
};

PartenairesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default PartenairesPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query PartenairesQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
