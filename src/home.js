import React, { Component } from "react";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";

export default class home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Navbar />
        </div>
        <div className="banner">
          <Banner />
        </div>
        <div className="page" id="about">
          <About />
        </div>
        <div className="page" id="services">
          <Services />
        </div>
        <div className="page" id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}
