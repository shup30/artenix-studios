import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import home1 from "../images/home1.png";
import home2 from "../images/home2.png";
import home3 from "../images/home3.png";
import home4 from "../images/home4.png";
import home5 from "../images/home5.png";

export default class banner extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img src={home1} className="banner-image" alt="First slide" />
            <Carousel.Caption>
              <h1 className="banner-text">
                {" "}
                Game <span className="art">Art </span> Studio
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img src={home2} className="banner-image" alt="second slide" />
            <Carousel.Caption>
              <h1 className="banner-text">
                {" "}
                Game <span className="art">Art </span> Studio
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img src={home3} className="banner-image" alt="First slide" />
            <Carousel.Caption>
              <h1 className="banner-text">
                {" "}
                Game <span className="art">Art </span> Studio
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img src={home4} className="banner-image" alt="First slide" />
            <Carousel.Caption>
              <h1 className="banner-text">
                {" "}
                Game <span className="art">Art </span> Studio
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img src={home5} className="banner-image" alt="First slide" />
            <Carousel.Caption>
              <h1 className="banner-text">
                {" "}
                Game <span className="art">Art </span> Studio
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
