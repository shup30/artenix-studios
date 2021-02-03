import React, { Component } from "react";

export default class contact extends Component {
  render() {
    return (
      <div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-2">
              <h3 className="service-title">Get In Touch</h3>
            </div>
            <div className="col">
              <hr />
            </div>
          </div>
        </div>

        <div className="container contact-box mt-5">
          <form>
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 mt-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="mb-3 mt-3">
              <label for="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                aria-label="With textarea"
                id="message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-button mt-5">
              Send Your Request
            </button>
          </form>
        </div>
      </div>
    );
  }
}
