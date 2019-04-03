import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const Footer = props => {
  const { theme } = props;

  return <React.Fragment>
      <footer className="footer">
        <ul>
          <li>
            <FormattedMessage id="theme" />: <a href="https://github.com/greglobinski/gatsby-starter-hero-blog">
              gatsby-starter-hero-blog
            </a>
          </li>
          <li>
            <a href="https://www.creiq.qc.ca/">
              <FormattedMessage id="creiq" />
            </a>
          </li>
          <li>
          <a href="https://cqi-qec.qc.ca"><FormattedMessage id="cqi" /></a>
          </li>
          <li>
            <a href="https://www.facebook.com/jeuxdegenie/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/jeuxdegenieduquebec/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/jdg-qc/">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/jdgqc">Twitter</a>
          </li>
        </ul>
      </footer>

      {/* --- STYLES --- */}
      <style jsx>{`
        .footer {
          background: ${theme.color.neutral.white};
          padding: ${theme.space.inset.default};
          padding-top: 0;
          padding-bottom: 120px;

          :global(ul) {
            list-style: none;
            text-align: center;
            padding: 0;

            :global(li) {
              color: ${theme.color.neutral.gray.g};
              font-size: ${theme.font.size.xxs};
              padding: ${theme.space.xxs} ${theme.space.s};
              position: relative;
              display: inline-block;

              &::after {
                content: "•";
                position: absolute;
                right: ${`calc(${theme.space.xs} * -1)`};
              }
              &:last-child::after {
                content: "";
              }
            }
          }
        }

        @from-width desktop {.footer {
            padding: 0 1em 1.5em;
          }}`}</style>
    </React.Fragment>;
};

Footer.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Footer;
