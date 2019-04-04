import React from "react";
import PropTypes from "prop-types";
import "core-js/fn/array/from";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa/";
import Item from "./Item";
import Expand from "./Expand";
import LangSwitcher from "./LangSwitcher";
import styled from "styled-components";
import theme from "../../theme/theme.yaml";

const MenuStyle = styled.nav`
  align-items: center;
  background: white;
  bottom: 0;
  display: flex;
  flex-grow: 1;
  left: 0;

  padding: 0 10px;
  position: fixed;
  width: 100%;
  z-index: 1;
  transition: all 0.5s;

  .itemList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
  }

  @media ${theme.belowDesktop} {
    max-height: ${props => (props.open ? "1000px" : "50px")};

    &::after {
      position: absolute;
      content: "";
      left: 20px;
      right: 20px;
      top: 0;
      height: 1px;
      background: ${theme.colors.primary};
    }

    ${props => props.open && `padding: 20px;`} ${props => !props.fixed && `bottom: -100px;`};
  }

  @media ${theme.desktop} {
    border-top: none;
    background: transparent;
    display: flex;
    position: relative;
    justify-content: flex-end;
    padding-left: 50px;
    transition: none;
    flex-wrap: wrap;

    .itemList {
      justify-content: flex-end;
      padding: 0;
    }
  }
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      { to: "/", label: "home" },
      { to: "/competitions/", label: "competitions" },
      { to: "/espace-participants/", label: "participants" },
      { to: "/partenaires/", label: "sponsors" },
      { to: "/comite-organisateur/", label: "oc" },
      { to: "/universites/", label: "universities" },
      { to: "/contact/", label: "contact" },
      { to: "https://www.facebook.com/jeuxdegenie/", icon: FaFacebook, label: "" },
      { to: "https://www.instagram.com/jeuxdegenieduquebec/", icon: FaInstagram, label: "" },
      { to: "https://www.linkedin.com/company/jdg-qc/", icon: FaLinkedin, label: "" },
      { to: "https://twitter.com/jdgqc", icon: FaTwitter, label: "" }
    ].map((item, id) => ({ id, ...item }));

    this.itemList = React.createRef();
    this.itemRefs = this.items.map(React.createRef);
  }

  state = {
    open: false,
    visibleItems: 0
  };

  static propTypes = {
    path: PropTypes.string.isRequired,
    fixed: PropTypes.bool.isRequired,
    screenWidth: PropTypes.number.isRequired
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.path !== prevProps.path ||
      this.props.fixed !== prevProps.fixed ||
      this.props.screenWidth !== prevProps.screenWidth ||
      this.props.fontLoaded !== prevProps.fontLoaded
    ) {
      if (this.props.path !== prevProps.path) {
        this.closeMenu();
      }
      this.hideOverflowedMenuItems();
    }
  }

  hideOverflowedMenuItems = () => {
    const itemsContainer = this.itemList.current;
    const maxWidth = itemsContainer.offsetWidth;

    const menu = this.itemRefs.reduce(
      (result, item, i) => {
        item.current.classList.add("item");
        item.current.classList.remove("hideItem");

        const currentCumulativeWidth = result.cumulativeWidth + item.current.offsetWidth;
        result.cumulativeWidth = currentCumulativeWidth;

        if (!item.current.classList.contains("more") && currentCumulativeWidth > maxWidth) {
          item.current.classList.add("hideItem");
          item.current.classList.remove("item");
        } else {
          result.visibleItems = i - 1;
        }

        return result;
      },
      { visibleItems: 0, cumulativeWidth: 0 }
    );

    this.setState({ visibleItems: menu.visibleItems });
  };

  toggleMenu = e => {
    e.preventDefault();

    if (this.props.screenWidth < 1024) {
      this.renderedItems.map(item => {
        const oldClass = this.state.open ? "showItem" : "hideItem";
        const newClass = this.state.open ? "hideItem" : "showItem";

        if (item.classList.contains(oldClass)) {
          item.classList.add(newClass);
          item.classList.remove(oldClass);
        }
      });
    }

    this.setState(prevState => ({ open: !prevState.open }));
  };

  closeMenu = e => {
    //e.preventDefault();

    if (this.state.open) {
      this.setState({ open: false });
      if (this.props.screenWidth < 1024) {
        this.renderedItems.map(item => {
          if (item.classList.contains("showItem")) {
            item.classList.add("hideItem");
            item.classList.remove("item");
          }
        });
      }
    }
  };

  render() {
    const { fixed, screenWidth } = this.props;
    const { open } = this.state;

    return (
      <MenuStyle open={open} fixed={fixed} rel="js-menu">
        <ul className="itemList" ref={this.itemList}>
          {this.items.map((item, i) => (
            <Item item={item} key={item.id} fixed={fixed} ref={this.itemRefs[item.id]} />
          ))}
        </ul>
        <ul className="itemList">
          <LangSwitcher fixed={fixed} />
        </ul>
        {screenWidth < 1024 && <Expand onClick={this.toggleMenu} open={open} />}
      </MenuStyle>
    );
  }
}

export default Menu;
