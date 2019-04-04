import React from "react";
import PropTypes from "prop-types";
import { FaArrowDown } from "react-icons/fa/";
import { FormattedMessage } from "react-intl";
import theme from "../theme/theme2.yaml";
import styled from "styled-components";

const HeroStyle = styled.section`
  align-items: center;
  background: linear-gradient(0deg, #e0306e, #6438b5);
  background-image: url(${props => props.backgrounds.mobile});
  background-size: cover;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 100vh;
  height: 100px;
  padding: 40px;
  padding-top: 100px;
  padding-bottom: 200px;

  h1 {
    text-align: center;
    font-size: ${theme.hero.size.h1.mobile};
    margin: 0 0 40px 0;
    color: white;
    line-height: 1.1;
    text-remove-gap: both 0 ${theme.font.heading};
    text-transform: uppercase;

    & > small {
      font-size: 0.7em;
    }
  }

  button {
    background: ${theme.colors.secondary};
    border: 0;
    border-radius: 50%;
    font-size: 1.35em;
    padding: 10px 20px;
    cursor: pointer;
    width: 80px;
    height: 80px;

    &:focus {
      outline-style: none;
      background: ${theme.colors.secondary};
    }

    svg {
      position: relative;
      top: 5px;
      fill: white;
      stroke-width: 40;
      stroke: white;
      animation-duration: 1s;
      animation-name: buttonIconMove;
      animation-iteration-count: infinite;
    }
  }

  @keyframes buttonIconMove {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media ${theme.tablet} {
    background-image: url(${props => props.backgrounds.tablet});

    h1 {
      max-width: 90%;
      font-size: ${theme.hero.size.h1.tablet};
    }

    button {
      font-size: 1.7em;
    }
  }

  @media ${theme.desktop} {
    background-image: url(${props => props.backgrounds.desktop});

    h1 {
      max-width: 80%;
      font-size: ${theme.hero.size.h1.desktop};
    }

    button {
      font-size: 2.2em;
    }
  }
`;

const Hero = props => {
  const { scrollToContent, backgrounds } = props;

  return (
    <HeroStyle backgrounds={backgrounds}>
      <h1>
        <FormattedMessage id="jdg" />
        <br />
        <small>
          <FormattedMessage id="tagline" />
        </small>
      </h1>
      <button onClick={scrollToContent} aria-label="scroll">
        <FaArrowDown />
      </button>
    </HeroStyle>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired
};

export default Hero;
