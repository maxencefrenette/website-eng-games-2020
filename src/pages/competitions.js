import PropTypes from "prop-types";
import React from "react";
import Article from "../components/Article";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import MiniHero from "../components/MiniHero";
import Carousel from "../components/Carousel";
import styled from "styled-components";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import theme from "../theme/theme.yaml";

const FloatRight = styled.div`
  float: right;
  margin-top: 5px;
  margin-left: ${theme.space.default};
  max-width: 100%;
`;

const FloatLeft = styled.div`
  float: left;
  margin-top: 5px;
  margin-right: ${theme.space.default};
  max-width: 100%;
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
    <>
      <MiniHero backgrounds={backgrounds}>
        <FormattedMessage id="competitions" />
      </MiniHero>
      <Article>
        <p>
          <FormattedMessage id="competitions-text" />
        </p>

        <h2>
          <FormattedMessage id="machine" />
        </h2>
        <FloatRight>
          <div>
            <Carousel>
              {[data.machine1, data.machine2, data.machine3, data.machine4, data.machine5]}
            </Carousel>
          </div>
        </FloatRight>
        <FormattedHTMLMessage id="machine-text" />

        <h2>
          <FormattedMessage id="entrepreneurship" />
        </h2>
        <FloatLeft>
          <div>
            <Carousel>
              {[data.entrep1, data.entrep2, data.entrep3, data.entrep4, data.entrep5]}
            </Carousel>
          </div>
        </FloatLeft>
        <FormattedHTMLMessage id="entrepreneurship-text" />

        <h2>
          <FormattedMessage id="academic" />
        </h2>
        <FloatRight>
          <div>
            <Carousel>
              {[data.acad1, data.acad2, data.acad3, data.acad4, data.acad5, data.acad6, data.acad7]}
            </Carousel>
          </div>
        </FloatRight>
        <FormattedHTMLMessage id="academic-text" />

        <h2>
          <FormattedMessage id="sports" />
        </h2>
        <FloatLeft>
          <div>
            <Carousel>
              {[
                data.sports1,
                data.sports2,
                data.sports3,
                data.sports4,
                data.sports5,
                data.sports6,
                data.sports7
              ]}
            </Carousel>
          </div>
        </FloatLeft>
        <FormattedHTMLMessage id="sports-text" />

        <h2>
          <FormattedMessage id="cultural" />
        </h2>
        <FloatRight>
          <div>
            <Carousel>
              {[data.debats1, data.improv1, data.debats2, data.improv2, data.debats3]}
            </Carousel>
          </div>
        </FloatRight>
        <FormattedHTMLMessage id="cultural-text" />
      </Article>
      <Seo facebook={facebook} />
    </>
  );
};

CompetitionsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default CompetitionsPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  fragment CarouselImage on ImageSharp {
    fluid(maxWidth: 500, quality: 90) {
      ...GatsbyImageSharpFluid
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

    backgrounds: imageSharp(fluid: { originalName: { regex: "/competition/" } }) {
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

    entrep1: imageSharp(fluid: { originalName: { regex: "/entrep1/" } }) {
      ...CarouselImage
    }

    entrep2: imageSharp(fluid: { originalName: { regex: "/entrep2/" } }) {
      ...CarouselImage
    }

    entrep3: imageSharp(fluid: { originalName: { regex: "/entrep3/" } }) {
      ...CarouselImage
    }

    entrep4: imageSharp(fluid: { originalName: { regex: "/entrep4/" } }) {
      ...CarouselImage
    }

    entrep5: imageSharp(fluid: { originalName: { regex: "/entrep5/" } }) {
      ...CarouselImage
    }

    acad1: imageSharp(fluid: { originalName: { regex: "/acad1/" } }) {
      ...CarouselImage
    }
    acad2: imageSharp(fluid: { originalName: { regex: "/acad2/" } }) {
      ...CarouselImage
    }
    acad3: imageSharp(fluid: { originalName: { regex: "/acad3/" } }) {
      ...CarouselImage
    }
    acad4: imageSharp(fluid: { originalName: { regex: "/acad4/" } }) {
      ...CarouselImage
    }
    acad5: imageSharp(fluid: { originalName: { regex: "/acad5/" } }) {
      ...CarouselImage
    }
    acad6: imageSharp(fluid: { originalName: { regex: "/acad6/" } }) {
      ...CarouselImage
    }
    acad7: imageSharp(fluid: { originalName: { regex: "/acad7/" } }) {
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
    sports4: imageSharp(fluid: { originalName: { regex: "/sports4/" } }) {
      ...CarouselImage
    }
    sports5: imageSharp(fluid: { originalName: { regex: "/sports5/" } }) {
      ...CarouselImage
    }
    sports6: imageSharp(fluid: { originalName: { regex: "/sports6/" } }) {
      ...CarouselImage
    }
    sports7: imageSharp(fluid: { originalName: { regex: "/sports7/" } }) {
      ...CarouselImage
    }

    debats1: imageSharp(fluid: { originalName: { regex: "/debats1/" } }) {
      ...CarouselImage
    }
    improv1: imageSharp(fluid: { originalName: { regex: "/improv1/" } }) {
      ...CarouselImage
    }
    debats2: imageSharp(fluid: { originalName: { regex: "/debats2/" } }) {
      ...CarouselImage
    }
    improv2: imageSharp(fluid: { originalName: { regex: "/improv2/" } }) {
      ...CarouselImage
    }
    debats3: imageSharp(fluid: { originalName: { regex: "/debats3/" } }) {
      ...CarouselImage
    }
  }
`;
