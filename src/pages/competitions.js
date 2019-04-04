import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import MiniHero from "../components/MiniHero";
import Carousel from "../components/Carousel";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import theme from "../theme/theme.yaml";

const FloatRight = styled.div`
  float: right;
  margin-top: 5px;
  margin-left: ${theme.space.default};
`;

const FloatLeft = styled.div`
  float: left;
  margin-top: 5px;
  margin-right: ${theme.space.default};
`;

const CompetitionsPage = props => {
  const { data } = props;
  const {
    site: {
      siteMetadata: { facebook }
    },
    backgrounds
  } = data;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <>
            <MiniHero backgrounds={backgrounds} theme={theme} />
            <Article>
              <h1>
                <FormattedMessage id="competitions" />
              </h1>

              <p>
                <FormattedMessage id="competitions-text" />
              </p>

              <h2>
                <FormattedMessage id="machine" />
              </h2>
              <p>
                <FloatRight>
                  <Carousel>{[data.machine1, data.machine2]}</Carousel>
                </FloatRight>
                <FormattedMessage id="machine-text" />
              </p>

              <h2>
                <FormattedMessage id="entrepreneurship" />
              </h2>
              <p>
                <FloatLeft>
                  <Carousel>{[data.entr1]}</Carousel>
                </FloatLeft>
                <FormattedMessage id="entrepreneurship-text" />
              </p>

              <h2>
                <FormattedMessage id="academic" />
              </h2>
              <p>
                <FloatRight>
                  <Carousel>{[data.acad1, data.acad2]}</Carousel>
                </FloatRight>
                <FormattedMessage id="academic-text" />
              </p>

              <h2>
                <FormattedMessage id="sports" />
              </h2>
              <p>
                <FloatLeft>
                  <Carousel>{[data.acad1, data.acad2]}</Carousel>
                </FloatLeft>
                <FormattedMessage id="sports-text" />
              </p>

              <h2>
                <FormattedMessage id="cultural" />
              </h2>
              <p>
                <FloatRight>
                  <Carousel>{[data.culturelle1]}</Carousel>
                </FloatRight>
                <FormattedMessage id="cultural-text" />
              </p>
            </Article>
          </>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
    </React.Fragment>
  );
};

CompetitionsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default CompetitionsPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  fragment CarouselImage on ImageSharp {
    fixed(width: 500, quality: 90) {
      ...GatsbyImageSharpFixed
    }
  }

  query CompetitionsQuery {
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

    machine1: imageSharp(fluid: { originalName: { regex: "/machine1/" } }) {
      ...CarouselImage
    }
    machine2: imageSharp(fluid: { originalName: { regex: "/machine2/" } }) {
      ...CarouselImage
    }
    machine3: imageSharp(fluid: { originalName: { regex: "/machine3/" } }) {
      ...CarouselImage
    }
    machine4: imageSharp(fluid: { originalName: { regex: "/machine4/" } }) {
      ...CarouselImage
    }
    machine5: imageSharp(fluid: { originalName: { regex: "/machine5/" } }) {
      ...CarouselImage
    }

    entr1: imageSharp(fluid: { originalName: { regex: "/machine1/" } }) {
      ...CarouselImage
    }

    acad1: imageSharp(fluid: { originalName: { regex: "/acad1/" } }) {
      ...CarouselImage
    }
    acad2: imageSharp(fluid: { originalName: { regex: "/acad2/" } }) {
      ...CarouselImage
    }

    sports1: imageSharp(fluid: { originalName: { regex: "/sports1/" } }) {
      ...CarouselImage
    }
    sports2: imageSharp(fluid: { originalName: { regex: "/sports2/" } }) {
      ...CarouselImage
    }
    sports3: imageSharp(fluid: { originalName: { regex: "/sports3/" } }) {
      ...CarouselImage
    }

    culturelle1: imageSharp(fluid: { originalName: { regex: "/machine1/" } }) {
      ...CarouselImage
    }
  }
`;
