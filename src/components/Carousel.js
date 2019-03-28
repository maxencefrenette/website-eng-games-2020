import React from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
`;

export default function Carousel({ children }) {
  return (
    <Container>
      <Slider width={500} adaptiveHeight={true} autoplay={true} easing="ease">
        {children.map(imgData => <Img fixed={imgData.fixed} />)}
      </Slider>
    </Container>
  );
}
