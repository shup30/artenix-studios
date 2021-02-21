import React, { Component } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function Contact() {
  const variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 5, y: 0 },
  };

  
  const line = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 5, x: 0 },
  };

  const { scrollYProgress } = useViewportScroll();

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 4, 0]);
  return (
    <div>
      <div className="container pt-5">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            duration: 2,
          }}
          variants={variants}
          className="row"
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.6 }}
          style={{ pathLength: scrollYProgress, x, opacity }}
        >
          {" "}
          <div className="col-md-2">
            <h3 className="service-title">Get In <span className="orange-color"> Touch </span></h3>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={line}
            className="col"
          >
            <hr className="animation-element" />
          </motion.div>
        </motion.div>
      </div>

      <div className="container contact-box mt-5">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
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
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="message" className="form-label">
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
