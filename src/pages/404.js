import React from "react";
import Article from "../components/Article";
import MiniHero from "../components/MiniHero";
import { graphql } from "gatsby";

const NotFoundPage = props => {
  const {
    data: { backgrounds }
  } = props;

  return (
    <>
      <MiniHero backgrounds={backgrounds} />
      <Article>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Article>
    </>
  );
};

export default NotFoundPage;

export const query = graphql`
  query NotFoundPageQuery {
    backgrounds: imageSharp(fluid: { originalName: { regex: "/volley/" } }) {
      ...MiniHero
    }
  }
`;
