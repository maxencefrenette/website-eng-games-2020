import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

const MiniHero = props => {
  const { backgrounds, theme, children } = props;

  return (
    <React.Fragment>
      <section className="mini-hero">
        <h1>{children}</h1>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .mini-hero {
          align-items: center;
          background: ${theme.hero.background};
          background-image: url(${backgrounds.mobile.src});
          background-size: cover;
          background-position: center center;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 300px;
          height: 300px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        .mini-hero h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }

          & > small {
            font-size: 0.7em;
          }
        }

        @from-width tablet {
          .mini-hero {
            background-image: url(${backgrounds.tablet.src});
            h1 {
              max-width: 90%;
              font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
            }
          }
        }

        @from-width desktop {
          .mini-hero {
            background-image: url(${backgrounds.desktop.src});
            h1 {
              max-width: 80%;
              font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

MiniHero.propTypes = {
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export const query = graphql`
  fragment MiniHero on ImageSharp {
    desktop: resize(
      width: 1200
      height: 300
      quality: 90
      cropFocus: CENTER
      duotone: { highlight: "#EF9D4F", shadow: "#502F69" }
    ) {
      src
    }

    tablet: resize(
      width: 800
      height: 300
      quality: 90
      cropFocus: CENTER
      duotone: { highlight: "#EF9D4F", shadow: "#502F69" }
    ) {
      src
    }

    mobile: resize(
      width: 450
      height: 300
      quality: 90
      cropFocus: CENTER
      duotone: { highlight: "#EF9D4F", shadow: "#502F69" }
    ) {
      src
    }
  }
`;

export default MiniHero;
