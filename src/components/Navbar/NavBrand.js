import React, { Component } from 'react'

export default class NavBrand extends Component {
    render() {
        return (
            <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
        )
    }
}
