import React from "react";
import Article from "../components/Article";
import MiniHero from "../components/MiniHero";
import { graphql } from "gatsby";
import styled from "styled-components";

const Centered = styled.p`
  padding: 20px 0;
  &&& {
    text-align: center;
  }
`;

const NotFoundPage = props => {
  const {
    data: { backgrounds }
  } = props;

  return (
    <>
      <MiniHero backgrounds={backgrounds}>NOT FOUND</MiniHero>
      <Article>
        <Centered>You just hit a route that doesn&#39;t exist... the sadness.</Centered>
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
