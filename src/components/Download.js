import PropTypes from "prop-types";
import React from "react";
import { FaFileAlt } from "react-icons/fa/";
import styled from "styled-components";
import theme from "../theme/theme.yaml";
import config from "../../content/meta/config";

const padding = 20;

const Container = styled.div`
  flex: 0 1 400px;
  box-sizing: border-box;
  padding: 10px;
`;

const DownloadLink = styled.a`
  box-sizing: border-box;
  padding: ${padding}px;
  border-radius: 5px;
  border-color: ${props => (props.active ? "lightblue" : "lightgray")};
  border-width: 2px;
  border-style: solid;

  &:hover {
    border-color: ${props => (props.active ? "darkblue" : "lightgray")};
  }

  display: flex;
  height: ${2 * padding + 28}px;
  align-items: center;

  &&& {
    font-size: 20px;
    font-weight: normal;
    text-decoration: none;
    color: ${theme.colors.primary};
  }
`;

const Name = styled.span`
  margin-left: 8px;
`;

const Download = props => {
  const { url, children } = props;

  return (
    <Container>
      <DownloadLink href={url ? `${config.pathPrefix || ""}${url}` : undefined} active={!!url}>
        <FaFileAlt />
        <Name>{children}</Name>
      </DownloadLink>
    </Container>
  );
};

Download.propTypes = {
  url: PropTypes.string
};

export default Download;
