import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import theme from "../theme/theme.yaml";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { ScreenWidthContext } from "../layouts";

const HeroContainer = styled.section`
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
  padding-bottom: calc(8vh + 20px);

  @media ${theme.tablet} {
    background-image: url(${props => props.backgrounds.tablet});
  }

  @media ${theme.desktop} {
    background-image: url(${props => props.backgrounds.desktop});
  }
`;

const Header = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 15px;

  @media ${theme.tablet} {
    margin-bottom: 20px;
  }

  @media ${theme.desktop} {
    margin-bottom: 30px;
  }
`;

const Line = styled.span`
  font-size: calc(${props => props.ratio} * 30px);

  @media ${theme.tablet} {
    font-size: calc(${props => props.ratio} * 40px);
  }

  @media ${theme.desktop} {
    font-size: calc(${props => props.ratio} * 60px);
  }

  @media (min-height: 800px) {
    @media ${theme.tablet} {
      font-size: calc(${props => props.ratio} * 60px);
    }

    @media ${theme.desktop} {
      font-size: calc(${props => props.ratio} * 95px);
    }
  }
`;

const LineUppercase = styled(props => <Line {...props} />)`
  text-transform: uppercase;
`;

const LogoContainer = styled.div`
  display: none;

  @media (min-height: 550px) {
    display: block;
    width: 150px;
    height: 150px;
  }

  @media (min-height: 800px) {
    display: block;
    width: 240px;
    height: 240px;
  }
`;

const Hero = props => {
  const { data, backgrounds } = props;

  return (
    <HeroContainer backgrounds={backgrounds}>
      <Header>
        <Line ratio={0.45}>
          <FormattedMessage id="30th-edition" />
        </Line>
        <br />
        <LineUppercase ratio={1}>
          <FormattedMessage id="jdg" />
        </LineUppercase>
        <br />
        <Line ratio={2.2}>2020</Line>
      </Header>
      <LogoContainer>
        <Img fluid={data.logoHero.fluid} />
      </LogoContainer>
    </HeroContainer>
  );
};

Hero.propTypes = {
  backgrounds: PropTypes.object.isRequired
};

export default Hero;

export const query = graphql`
  fragment Hero on Query {
    logoHero: imageSharp(fluid: { originalName: { regex: "/logo-2020/" } }) {
      fluid(maxWidth: 200, quality: 90, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }

    bgDesktop: imageSharp(fluid: { originalName: { regex: "/montreal-edited/" } }) {
      resize(width: 1920, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/montreal-edited/" } }) {
      resize(width: 1280, height: 384, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/montreal-edited/" } }) {
      resize(width: 600, height: 300, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;
