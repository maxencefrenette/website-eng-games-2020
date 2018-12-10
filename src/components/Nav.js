import React from "react";
import Scrollspy from "react-scrollspy";
import Scroll from "./Scroll";

const Nav = props => (
  <nav id="nav" className={props.sticky ? "alt" : ""}>
    <Scrollspy
      items={[
        "intro",
        "history",
        "competitions",
        "participants",
        "universities",
        "sponsors",
        "committee",
      ]}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="intro">
          <a href="#">Introduction</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="history">
          <a href="#">Historique</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="competitions">
          <a href="#">Compétitions</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="participants">
          <a href="#">Espace Participants</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="universities">
          <a href="#">Universités</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="sponsors">
          <a href="#">Partenaires</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="committee">
          <a href="#">Comité Organisateur</a>
        </Scroll>
      </li>
      <li>
        <a href="https://docs.google.com/document/d/1TFRYAsCoctp9OlNEOh7bzHRyquGhnOfuI7YIJGKEHuI/edit">
          FAQ Machine
        </a>
      </li>
    </Scrollspy>
  </nav>
);

export default Nav;
