import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class banner extends Component {
  render() {
    return (
      <div>
        <Carousel >
          <Carousel.Item>
            <img className="banner-image" src="home1.png" alt="First slide" />
            <Carousel.Caption>
              <h1 className="banner-text">
                {" "}
                Game <span className="art">Art </span> Studio
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner-image" src="home2.png" alt="Third slide" />

            <Carousel.Caption>
              <h1 className="banner-text">
                {" "}
                Game <span className="art">Art </span> Studio
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner-image" src="home3.png" alt="Third slide" />

            <Carousel.Caption>
              <h1 className="banner-text">
                {" "}
                Game <span className="art">Art </span> Studio
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner-image" src="home4.png" alt="Third slide" />

            <Carousel.Caption>
              <h1 className="banner-text">
                {" "}
                Game <span className="art">Art </span> Studio
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner-image" src="home5.png" alt="Third slide" />

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
