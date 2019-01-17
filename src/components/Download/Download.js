import PropTypes from "prop-types";
import React from "react";
import { FaFileAlt } from "react-icons/fa/";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  padding: 5px;
`;

const DownloadLink = styled.a`
  box-sizing: border-box;
  padding: 13px;
  border-radius: 5px;
  border: 2px solid lightblue;

  &:hover {
    border-color: darkblue;
  }

  display: flex;
  height: 50px;
  width: 350px;
  align-items: center;

  font-size: 20px;
`;

const Name = styled.span`
    margin-left: 8px;
`;

const Download = props => {
  const { url, children } = props;

  return (
    <Container>
      <DownloadLink href={url}>
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
