import React from "react";
import PropTypes from "prop-types";
import LLink from "../LLink";
import { FormattedMessage } from "react-intl";
import { Link } from "gatsby";
import theme2 from "../../theme/theme2.yaml";
import styled from "styled-components";

const ItemStyles = styled.li`
  font-family: ${theme2.font.body};

  &.item,
  .showItem {
    background: transparent;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    a {
      padding: 10px;
      display: flex;
      align-items: center;
    }

    svg {
      opacity: 1;
    }
  }

  .itemList &.hideItem {
    display: none;
  }

  @media ${theme2.desktop} {
    &.item {
      a {
        color: ${props => (props.fixed ? "#3e3e3c" : "white")}
        padding: 10px;
        transition: all 0.5s;
        border-radius: 5px;
      }

      a:hover {
        color: ${theme2.colors.primary};
        background: color(white alpha(-60%));
      }

      svg {
        transition: all 0.5s;
      }

      &:hover svg {
        /* fill: ${theme2.colors.primary}; */
        opacity: 1;

        .hero & svg {
          fill: green;
        }
      }
    }

    .showItem {
      display: none;
    }

    .hiddenItem {
      text-align: left;
      padding: 5px;

      & a.inHiddenItem {
        color: #3e3e3c;
        &:hover {
          color: ${theme2.colors.primary};
        }
      }
    }
  }
`;

const Item = props => {
  const {
    item: { label, to, icon: Icon },
    noLocalize,
    onClick,
    fixed
  } = props;

  const inner = (
    <>
      {Icon && <Icon />} {label && <FormattedMessage id={label} />}
    </>
  );

  return (
    <ItemStyles className={"hiddenItem" in props ? "hiddenItem" : "item"} fixed={fixed}>
      {to.match(/^http/) ? (
        <a
          href={to}
          className={"hiddenItem" in props ? "inHiddenItem" : ""}
          onClick={onClick}
          data-slug={to}
        >
          {inner}
        </a>
      ) : noLocalize ? (
        <Link
          to={to}
          className={"hiddenItem" in props ? "inHiddenItem" : ""}
          onClick={onClick}
          data-slug={to}
        >
          {inner}
        </Link>
      ) : (
        <LLink
          to={to}
          className={"hiddenItem" in props ? "inHiddenItem" : ""}
          onClick={onClick}
          data-slug={to}
        >
          {inner}
        </LLink>
      )}
    </ItemStyles>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  hidden: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.func,
  theme: PropTypes.object.isRequired,
  fixed: PropTypes.bool.isRequired
};

export default Item;
