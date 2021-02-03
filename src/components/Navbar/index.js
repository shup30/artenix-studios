import React, { Component } from "react";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";


var navbar = {};
navbar.brand = { linkTo: "#", text: "React Bootstrap Navbar" };
navbar.links = [
  { linkTo: "#", text: "Link 1" },
  { linkTo: "#", text: "Link 2" },
  {
    dropdown: true,
    text: "Dropdown",
    links: [
      { linkTo: "#", text: "Dropdown Link 1" },
      { linkTo: "#", text: "Dropdown Link 2", active: true },
    ],
  },
];

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <NavBrand
                linkTo={this.props.brand.linkTo}
                text={this.props.brand.text}
              />
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <NavMenu links={this.props.links} />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
