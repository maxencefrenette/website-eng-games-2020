import React from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  width: 500px;
  max-width: 100%;
`;

export default function Carousel({ children }) {
  return (
    <StyledSlider adaptiveHeight={false} autoplay={true} autoplaySpeed={5000} easing="ease">
      {children.map((imgData, i) => (
        <Img key={i} fluid={imgData.fluid} />
      ))}
    </StyledSlider>
  );
}
