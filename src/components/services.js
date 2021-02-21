import React, { Component } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function Services() {
  const variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 5, y: 0 },
  };

  const { scrollYProgress } = useViewportScroll();

  const line = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 5, x: 0 },
  };

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
            <h3 className="service-title">Services</h3>
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

      <section className="services-page-1">
        <div className="container services-box mt-5">
          <h5>Services We Offer</h5>
          <p>
            We Offer all types of Game Art production solutions for the various
            gaming platforms. (Consoles/PC/Mobile/VR/AR).
          </p>
          <p>
            We Offer services from conceptulization to delivery of Game ready
            asset.
          </p>
          <p>
            As a game development aspect we understand combination of aesthetic
            and technical execution. We engage game artists with number of years
            of experience who understand your vision with ease.
          </p>
          <h5>2D Art Services</h5>
          <p>
            Art Enix Studios specializes in 2D Animation services like 2D
            animations, 2D concept art, Storyboard sketching, Pre-visualization,
            2D illustration services. We are experience with innovative 2D & 3D
            game art pipeline processes for handling all types of design-related
            projects.
          </p>
          <h5>3D Art Services</h5>
          <p>
            Art Enix Studios houses a talented 3D art team which specializes in
            creating high quality realastic character avatars, photorealistic
            Vechicle modeling, next generation gaming props, 3D Environments, &
            weapons.
          </p>{" "}
          <h5>Concept Art</h5>
          <p>
            Our team is expert in most creative and best quality concept art for
            video game projects. We do environment and concept art, character
            design, concept art, level concept art.
          </p>{" "}
        </div>
      </section>

      <section className="services-page-2">
        <div className="container services-box mt-5">
          <h5>Casual Art</h5>
          <p>
            Art Enix Studios has established a reputation of creating top
            quality art for casual/mobile games art assets.
          </p>
          <h5>Multiple Platforms</h5>

          <p>
            We offer all types of Game Art production for the various gaming
            platforms. (consoles/Mobile/VR/AR)
          </p>
          <h5>Service Execution</h5>
          <p>
            As a game development aspect we understand combination of aesthetic
            and technical execution. We engage game artists with number of years
            experience who understand your vision with ease{" "}
          </p>
        </div>
      </section>
    </div>
  );
}
