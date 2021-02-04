import React, { Component } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import logo from "../images/logo.png"

export default class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="artenix-logo" src={logo} alt="artenix-logo" />
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="navbar-nav icon-navbar ml-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <FaFacebook />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaPinterest />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
