import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import A from "./A";

const Container = styled.div`
  width: ${props => props.size}px;

  & > a {
    display: block;
    height: 100%;
    width: 100%;

    &:hover {
      opacity: 0.75;
    }
  }
`;

const SponsorLogo = props => {
  const { image, size, link } = props;

  if (link) {
    return (
      <Container size={size}>
        <A href={link}>
          <Img fluid={image} />
        </A>
      </Container>
    );
  }

  return (
    <Container size={size}>
      <Img fluid={image} />
    </Container>
  );
};

SponsorLogo.propTypes = {
  image: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  link: PropTypes.string
};

export default SponsorLogo;
