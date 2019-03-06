import { css } from "styled-components";

const theme = {
  tablet: "(min-width: 600px)",
  desktop: "(min-width: 1024px)",
  colors: {
    primary: "#2A2B7A"
  },
  space: {
    default: "20px"
  },
  maxWidth: {
    tablet: "650px",
    desktop: "1200px"
  }
};

export default theme;

const sizes = {
  desktop: 1024,
  tablet: 600
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
