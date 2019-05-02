import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import MiniHero from "../components/MiniHero";
import styled from "styled-components";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import theme from "../theme/theme.yaml";
import { FormattedMessage } from "react-intl";
import A from "../components/A";

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

const Address = styled.div`
  & > * {
    margin-bottom: 3px;
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
            <Article>
              <header>
                <h1>
                  <FormattedMessage id="contact" />
                </h1>
              </header>

              <Container>
                <ContactInfo>
                  <FaEnvelope />
                  <div>
                    <A href="mailto:info@jeuxdegenie.qc.ca">info@jeuxdegenie.qc.ca</A>
                  </div>
                </ContactInfo>
                <ContactInfo>
                  <FaMapMarkerAlt />
                  <Address>
                    <b>
                      <FormattedMessage id="address1" />
                    </b>
                    <br />
                    <FormattedMessage id="address2" />
                    <br />
                    <FormattedMessage id="address3" />
                    <br />
                    <FormattedMessage id="address4" />
                    <br />
                    <FormattedMessage id="address5" />
                  </Address>
                </ContactInfo>
              </Container>

              <br />
              <br />
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

    backgrounds: imageSharp(fluid: { originalName: { regex: "/contact/" } }) {
      ...MiniHero
    }
  }
`;
