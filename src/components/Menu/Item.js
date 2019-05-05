import React from "react";
import PropTypes from "prop-types";
import LLink from "../LLink";
import { FormattedMessage } from "react-intl";
import { Link } from "gatsby";
import theme from "../../theme/theme.yaml";
import styled from "styled-components";
import A from "../A";

const ItemStyles = styled.li`
  font-family: ${theme.font.body};

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

  @media ${theme.desktop} {
    &.item {
      a {
        color: ${props => (props.fixed ? "#3e3e3c" : "white")};
        padding: 10px;
        transition: all 0.5s;
        border-radius: 5px;
      }

      a:hover {
        color: ${theme.colors.primary};
        background: rgba(255, 255, 255, 0.6);
      }

      svg {
        transition: all 0.5s;
      }

      &:hover svg {
        opacity: 1;
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
          color: ${theme.colors.primary};
        }
      }
    }
  }
`;

const Item = React.forwardRef((props, ref) => {
  const {
    item: { label, to, icon: Icon },
    noLocalize,
    onClick,
    fixed,
    hiddenItem
  } = props;

  const inner = (
    <>
      {Icon && <Icon />} {label && <FormattedMessage id={label} />}
    </>
  );

  return (
    <ItemStyles ref={ref} className={hiddenItem ? "hiddenItem" : "item"} fixed={fixed}>
      {to.match(/^http/) ? (
        <A href={to} className={hiddenItem ? "inHiddenItem" : ""} onClick={onClick} data-slug={to}>
          {inner}
        </A>
      ) : noLocalize ? (
        <Link to={to} className={hiddenItem ? "inHiddenItem" : ""} onClick={onClick} data-slug={to}>
          {inner}
        </Link>
      ) : (
        <LLink
          to={to}
          className={hiddenItem ? "inHiddenItem" : ""}
          onClick={onClick}
          data-slug={to}
        >
          {inner}
        </LLink>
      )}
    </ItemStyles>
  );
});

Item.propTypes = {
  item: PropTypes.object,
  hidden: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.func,
  fixed: PropTypes.bool.isRequired
};

export default Item;
