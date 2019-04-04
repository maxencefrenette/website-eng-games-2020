import { FaAngleDown } from "react-icons/fa/";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import theme from "../../theme/theme.yaml";

const Button = styled.button`
  cursor: pointer;
  background: white;
  border: 1px solid ${theme.colors.secondary};
  border-radius: 5px 5px 0 0;
  border-bottom: none;
  position: absolute;
  left: 50%;
  top: -35px;
  width: 60px;
  height: 36px;
  overflow: hidden;
  z-index: 1;
  transform: translateX(-50%);

  &:focus {
    outline: none;

    svg {
      fill: ${theme.colors.secondary};
    }
  }

  svg {
    transition: all 0.5s;
    transform: ${props => (props.opened ? `rotateZ(0deg)` : `rotateZ(180deg)`)};
    fill: ${theme.colors.secondary};
  }
`;

const Expand = props => {
  const { onClick, open } = props;

  return (
    <Button className="more" to="#" onClick={onClick} opened={open} aria-label="expand">
      <FaAngleDown size={30} />
    </Button>
  );
};

Expand.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool.isRequired
};

export default Expand;
