import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import MiniHero from "../components/MiniHero";
import styled from "styled-components";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import theme from "../theme/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ContactInfo = styled.div`
  flex: 0 0 250px;
  margin: 0 25px;
  text-align: center;

  & > svg {
    font-size: 100px;
    fill: ${theme.colors.primary};
    margin-bottom: 20px;
  }
`;

const ContactPage = props => {
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
                <Headline title="Contact" theme={theme} />
              </header>

              <Container>
                <ContactInfo>
                  <FaEnvelope />
                  <div>
                    <a href="mailto:info@jeuxdegenie.qc.ca">info@jeuxdegenie.qc.ca</a>
                  </div>
                </ContactInfo>
                <ContactInfo>
                  <FaMapMarkerAlt />
                  <div>
                    <b>Association étudiante de l’ÉTS</b>
                    <br />
                    École de technologie supérieure<br />
                    1100, rue Notre-Dame Ouest<br />
                    Local A-1840<br />
                    Montréal (Québec) H3C 1K3<br />
                  </div>
                </ContactInfo>
              </Container>
            </Article>
          </>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
    </React.Fragment>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query ContactQuery {
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
  }
`;
