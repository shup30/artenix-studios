import React, { Component } from "react";
import NavLink from "./NavLink";

var active = false;
var links = this.props.links.map(function (link) {
  if (link.active) {
    active = true;
  }
  return <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />;
});

export default class NavLinkDropdown extends Component {
  render() {
    return (
      <li className={"dropdown " + (active ? "active" : "")}>
        <a
          href="#"
          className="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.props.text}
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">{links}</ul>
      </li>
    );
  }
}
