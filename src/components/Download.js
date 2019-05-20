import PropTypes from "prop-types";
import React from "react";
import { FaFileAlt } from "react-icons/fa/";
import styled from "styled-components";
import theme from "../theme/theme.yaml";

const padding = 20;

const Container = styled.div`
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
  width: 400px;
  align-items: center;

  &&& {
    font-size: 20px;
    font-weight: normal;
    text-decoration: none;
    color: ${theme.colors.primary};
  }
`;

const RibbonContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: ${2 * padding + 28}px;
`;

const Ribbon = styled.div`
  // Taken from https://codepen.io/Paulie-D/pen/gpgYvZ
  margin: 0;
  padding: 0;
  background: ${theme.colors.primary};
  color: white;
  padding: 5px 0;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(20%) translateY(0%) rotate(45deg);
  transform-origin: top left;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    margin: 0 -1px; /* tweak */
    width: 100%;
    height: 100%;
    background: ${theme.colors.primary};
  }
  &:before {
    right: 100%;
  }

  &:after {
    left: 100%;
  }
`;

const Name = styled.span`
  margin-left: 8px;
`;

const Download = props => {
  const { url, children } = props;

  return (
    <Container>
      <RibbonContainer>
        <DownloadLink href={url} active={!!url}>
          <FaFileAlt />
          <Name>{children}</Name>
        </DownloadLink>
        {!url && <Ribbon>À venir</Ribbon>}
      </RibbonContainer>
    </Container>
  );
};

Download.propTypes = {
  url: PropTypes.string
};

export default Download;
