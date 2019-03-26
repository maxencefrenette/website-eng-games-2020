import styled from "styled-components";
import theme from "../theme/theme2.yaml";

const Article = styled.article`
  padding: ${theme.space.default};
  margin: 0 auto;

  @media ${theme.tablet} {
    padding: ${`calc(${theme.space.default}) calc(${theme.space.default} * 2)`};
    max-width: ${theme.maxWidth.tablet};
  }

  @media ${theme.desktop} {
    padding: ${`calc(${theme.space.default} * 2 + 30px) 0 calc(${theme.space.default} * 2)`};
    max-width: ${theme.maxWidth.desktop};
  }

  h1 {
    font-size: 2.2em;
    margin: 0 0 40px 0;
    animation-name: headlineEntry;
    animation-duration: 1s;

    span {
      font-weight: normal;
      display: block;
      font-size: 0.5em;
      letter-spacing: 0;
      margin: 0 0 5px 0;
    }

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
    margin: 1.7em 0 0.8em;
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
    font-weight: bold;
    color: ${theme.colors.primary};
    text-decoration: underline;
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

export default Article;
