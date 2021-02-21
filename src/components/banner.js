import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import img from "./img";

export default class banner extends Component {
  render() {
    {
      img.map(({ id, src }) => console.log(src));
    }
    return (
      <div onContextMenu={(e) => e.preventDefault()}>
        <Carousel className="car">
          {img.map(({ id, src }) => (
            <Carousel.Item interval={5000}>
              <img
                key={id}
                src={process.env.PUBLIC_URL + src}
                className="banner-image"
              />
              <Carousel.Caption>
                <h1 className="banner-text">
                  {" "}
                  Game <span className="art">Art </span> Studio
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}
