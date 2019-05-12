import React from "react";
import styled from "styled-components";
import theme from "../theme/theme.yaml";

const Styles = styled.article`
  margin: 0 auto;

  @media ${theme.tablet} {
    padding-bottom: 20px;
    max-width: ${theme.maxWidth.tablet};
  }

  @media ${theme.desktop} {
    padding-bottom: 40px;
    max-width: ${theme.maxWidth.desktop};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
    text-align: center;

    &::before {
      content: "";
      clear: both;
      display: table;
    }
  }

  h1 {
    font-size: 2.2em;
    margin: 0 0 0.5em;
    animation-name: headlineEntry;
    animation-duration: 1s;

    // span {
    //   font-weight: normal;
    //   display: block;
    //   font-size: 0.5em;
    //   letter-spacing: 0;
    //   margin: 0 0 5px 0;
    // }

    svg {
      height: 0.75em;
      fill: ${theme.colors.primary};
    }
  }

  @keyframes headlineEntry {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }

  @media ${theme.tablet} {
    h1 {
      font-size: ${`calc(2.2em * 1.2)`};
    }
  }

  @media ${theme.desktop} {
    h1 {
      font-size: ${`calc(2.2em * 1.4)`};
    }
  }

  animation-name: bodytextEntry;
  animation-duration: 1s;

  @keyframes bodytextEntry {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h2,
  h3 {
    margin: 1.7em 0 0.5em;
  }

  h2 {
    font-size: 2.2em;
    line-height: 1.2;
  }

  h3 {
    font-size: 1.35em;
    line-height: 1.3;
  }

  p {
    font-size: 1.1em;
    line-height: 1.6;
    margin: 0 0 1.5em;
    text-align: justify;
  }
  ul {
    list-style: circle;
    margin: 0 0 1.5em;
    padding: 0 0 0 1.5em;
  }
  li {
    margin: 0.7em 0;
    line-height: 1.5;
  }
  a {
    font-weight: 600;
    color: ${theme.colors.primary};
  }
  a.gatsby-resp-image-link {
    border: 0;
    display: block;
    margin: 2.5em 0;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #ecebea;
  }
  code.language-text {
    background: #ecebea;
    text-shadow: none;
    color: inherit;
    padding: 0.1em 0.3em 0.2em;
    border-radius: 0.1em;
  }
`;

const Paper = styled.div`
  padding: 32px;
  margin-top: -100px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: white;
`;

const Article = ({ children }) => {
  return (
    <Styles>
      <Paper>{children}</Paper>
    </Styles>
  );
};

export default Article;
