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
  padding-bottom: 100px;

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
  font-size: calc(${props => props.ratio} * ${theme.hero.size.h1.mobile});

  @media ${theme.tablet} {
    font-size: calc(${props => props.ratio} * ${theme.hero.size.h1.tablet});
  }

  @media ${theme.desktop} {
    font-size: calc(${props => props.ratio} * ${theme.hero.size.h1.desktop});
  }
`;

const LineUppercase = styled(Line)`
  text-transform: uppercase;
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

      <ScreenWidthContext.Consumer>
        {width => {
          if (width < 600) {
            return <Img fixed={data.logoHeroMobile.fixed} />;
          } else {
            return <Img fixed={data.logoHero.fixed} />;
          }
        }}
      </ScreenWidthContext.Consumer>
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
      fixed(width: 200, height: 200, quality: 90, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed
      }
    }
    logoHeroMobile: imageSharp(fluid: { originalName: { regex: "/logo-2020/" } }) {
      fixed(width: 150, height: 150, quality: 90, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed
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
