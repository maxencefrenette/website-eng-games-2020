import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import theme from "../theme/theme.yaml";
import A from "../components/A";

const FooterStyle = styled.footer`
  padding: 20px;
  padding-top: 0;
  padding-bottom: 120px;

  & > ul {
    list-style: none;
    text-align: center;
    padding: 0;

    & > li {
      color: #969492;
      font-size: 0.8em;
      padding: 2px 10px;
      position: relative;
      display: inline-block;

      &::after {
        content: "•";
        position: absolute;
        right: -5px;
      }
      &:last-child::after {
        content: "";
      }
    }
  }

  @media ${theme.desktop} {
    padding: 0 1em 1.5em;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <ul>
        <li>
          <FormattedMessage id="theme" />:{" "}
          <A href="https://github.com/greglobinski/gatsby-starter-hero-blog">
            gatsby-starter-hero-blog
          </A>
        </li>
        <li>
          <A href="https://www.creiq.qc.ca/">
            <FormattedMessage id="creiq" />
          </A>
        </li>
        <li>
          <A href="https://cqi-qec.qc.ca">
            <FormattedMessage id="cqi" />
          </A>
        </li>
        <li>
          <A href="https://www.facebook.com/jeuxdegenie/">Facebook</A>
        </li>
        <li>
          <A href="https://www.instagram.com/jeuxdegenieduquebec/">Instagram</A>
        </li>
        <li>
          <A href="https://www.linkedin.com/company/jdg-qc/">LinkedIn</A>
        </li>
        <li>
          <A href="https://twitter.com/jdgqc">Twitter</A>
        </li>
      </ul>
    </FooterStyle>
  );
};

Footer.propTypes = {
  html: PropTypes.string
};

export default Footer;
