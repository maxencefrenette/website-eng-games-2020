import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";

const EspaceParticipantsPage = props => {
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
              <Headline title="Espace Participants" theme={theme} />
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet velit nec
              mi tincidunt aliquet. Fusce id neque congue, pellentesque nulla vel, sagittis eros.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Mauris quis faucibus enim. Donec tempus sem eu lectus condimentum, non
              maximus felis posuere. Praesent non arcu ac dolor mattis accumsan. Nunc accumsan ut
              eros non volutpat. Suspendisse potenti. In ultricies libero eget magna facilisis, in
              gravida nisl lobortis. Aliquam felis mauris, molestie eget pharetra in, dignissim
              sit amet eros. Phasellus sed justo ut urna molestie tempor at vitae enim.
            </p>
          </Article>}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
    </React.Fragment>;
};

EspaceParticipantsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default EspaceParticipantsPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query EspaceParticipantsQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
