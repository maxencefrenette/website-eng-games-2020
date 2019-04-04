import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import theme from "../theme/theme.yaml";

const MiniHeroStyle = styled.section`
  align-items: center;
  background: linear-gradient(0deg, #e0306e, #6438b5);
  background-image: url(${props => props.backgrounds.mobile.src});
  background-size: cover;
  background-position: center center;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 400px;
  height: 400px;
  padding: 40px;
  padding-top: 100px;

  & h1 {
    text-align: center;
    font-size: 2.2em;
    margin: 0 0 40px 0;
    color: white;
    line-height: 1.1;
    text-remove-gap: both 0 ${theme.font.heading};
  }

  @media ${theme.tablet} {
    background-image: url(${props => props.backgrounds.tablet.src});
    & h1 {
      max-width: 90%;
      font-size: ${`calc(1.7em * 1.3)`};
    }
  }

  @media ${theme.desktop} {
    background-image: url(${props => props.backgrounds.desktop.src});
    & h1 {
      max-width: 80%;
      font-size: ${`calc(1.7em * 1.5)`};
    }
  }
`;

const MiniHero = props => {
  const { backgrounds, children } = props;

  return (
    <MiniHeroStyle backgrounds={backgrounds}>
      <h1>{children}</h1>
    </MiniHeroStyle>
  );
};

MiniHero.propTypes = {
  backgrounds: PropTypes.object.isRequired,
};

export const query = graphql`
  fragment MiniHero on ImageSharp {
    desktop: resize(
      width: 1200
      height: 400
      quality: 90
      cropFocus: CENTER
      duotone: { highlight: "#EF9D4F", shadow: "#502F69" }
    ) {
      src
    }

    tablet: resize(
      width: 800
      height: 400
      quality: 90
      cropFocus: CENTER
      duotone: { highlight: "#EF9D4F", shadow: "#502F69" }
    ) {
      src
    }

    mobile: resize(
      width: 450
      height: 400
      quality: 90
      cropFocus: CENTER
      duotone: { highlight: "#EF9D4F", shadow: "#502F69" }
    ) {
      src
    }
  }
`;

export default MiniHero;
