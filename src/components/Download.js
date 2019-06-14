import PropTypes from "prop-types";
import React from "react";
import { FaFileAlt } from "react-icons/fa/";
import styled from "styled-components";
import config from "../../content/meta/config";
import Button from "@material/react-button";
import "@material/react-button/dist/button.css";

const Container = styled.div`
  flex: 0 1 400px;
  box-sizing: border-box;
  padding: 10px;
`;

const DownloadButton = styled(Button)`
  &&& {
    width: 100%;
    height: 70px;
    font-size: 16px;
    font-weight: normal;
    text-decoration: none;
  }
`;

const Name = styled.span`
  margin-left: 8px;
`;

const Download = props => {
  const { url, children } = props;

  return (
    <Container>
      <DownloadButton
        raised
        href={url ? `${config.pathPrefix || ""}${url}` : undefined}
        disabled={!url}
      >
        <FaFileAlt />
        <Name>{children}</Name>
      </DownloadButton>
    </Container>
  );
};

Download.propTypes = {
  url: PropTypes.string
};

export default Download;
