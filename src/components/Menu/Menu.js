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
  flex-wrap: wrap;

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

    ${props => props.open && `padding: 20px 0;`} ${props => !props.fixed && `bottom: -100px;`};
  }

  @media ${theme.desktop} {
    border-top: none;
    background: transparent;
    display: flex;
    position: relative;
    justify-content: flex-end;
    padding-left: 50px;
    transition: none;

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
      { to: "/delegations/", label: "delegations" },
      { to: "/contact/", label: "contact" },
      {
        to: "https://www.facebook.com/jeuxdegenie/",
        icon: FaFacebook,
        label: "",
        secondRow: true
      },
      {
        to: "https://www.instagram.com/jeuxdegenieduquebec/",
        icon: FaInstagram,
        label: "",
        secondRow: true
      },
      {
        to: "https://www.linkedin.com/company/jdg-qc/",
        icon: FaLinkedin,
        label: "",
        secondRow: true
      }
    ].map((item, id) => ({ id, overflow: false, ...item }));

    this.itemList = React.createRef();
    this.itemRefs = this.items.map(React.createRef);
  }

  state = {
    open: false
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
        if (!item.current) {
          return result;
        }

        const currentCumulativeWidth = result.cumulativeWidth + item.current.offsetWidth;
        result.cumulativeWidth = currentCumulativeWidth;

        if (currentCumulativeWidth > maxWidth) {
          this.items[i].overflow = true;
        } else {
          this.items[i].overflow = false;
        }

        return result;
      },
      { cumulativeWidth: 0 }
    );
  };

  toggleMenu = e => {
    e.preventDefault();

    // if (this.props.screenWidth < 1024) {
    //   this.renderedItems.map(item => {
    //     const oldClass = this.state.open ? "showItem" : "hideItem";
    //     const newClass = this.state.open ? "hideItem" : "showItem";

    //     if (item.classList.contains(oldClass)) {
    //       item.classList.add(newClass);
    //       item.classList.remove(oldClass);
    //     }
    //   });
    // }

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
    const showSecondRow = open || screenWidth >= 1024;

    return (
      <MenuStyle open={open} fixed={fixed}>
        <ul className="itemList" ref={this.itemList}>
          {this.items.map(
            (item, i) =>
              !item.secondRow &&
              !item.overflow && (
                <Item item={item} key={item.id} fixed={fixed} ref={this.itemRefs[item.id]} />
              )
          )}
        </ul>
        {showSecondRow && (
          <ul className="itemList">
            {this.items.map(
              (item, i) =>
                (item.secondRow || item.overflow) && (
                  <Item item={item} key={item.id} fixed={fixed} ref={this.itemRefs[item.id]} />
                )
            )}
            <LangSwitcher fixed={fixed} />
          </ul>
        )}
        {screenWidth < 1024 && <Expand onClick={this.toggleMenu} open={open} />}
      </MenuStyle>
    );
  }
}

export default Menu;
