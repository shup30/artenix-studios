import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import logo from "../images/logo.png";

export default class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark trn sticky-nav" id="tra-nav">
        <div className="container">
          <div
            className="navbar-brand"
            onContextMenu={(e) => e.preventDefault()}
          >
            <Link to="/">
              <img className="artenix-logo" src={logo} alt="artenix-logo" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav artenix-navbar mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <section id="social-icons">
              <ul className="navbar-nav ml-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    <FaFacebook />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <FaTwitter />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <FaPinterest />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </nav>
    );
  }
}
