import React, { Component } from "react";

export default class NavLink extends Component {
  render() {
    return (
      <div>
        <li className={this.props.active ? "active" : ""}>
          <a href={this.props.linkTo}>{this.props.text}</a>
        </li>
      </div>
    );
  }
}
