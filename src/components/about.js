import React, { Component } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import vision from "../images/vision.png";
import mission from "../images/mission.png";
import philosophy from "../images/philosophy.png";
import values from "../images/values.png";

export default function About() {
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
            <div className="col-md-2">
              <h3 className="service-title">
                About <span className="orange-color"> Us </span>
              </h3>
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

        <section className="about-page-1">
          <div className="container services-box mt-5">
            <div className="row">
              <div className="col">
                <h5>Artenix Studios</h5>
                <p>Apostle in art outsourcing business for last seven years.</p>
                <p>
                  Over the years we have consistently delivered high quality,
                  compatitively priced, efficient and communicative gaming
                  solutions.
                </p>
                <p>
                  Our artist summounts all challenges to produce the best
                  quality game art outsourcing work within the given deadline.
                </p>
                <h5>WHAT MAKES ARTENIX STUDIOS STAND OUT IN THE CROWD</h5>
                <p>
                  1) Deadicated team with hands on experience to handle any of
                  your gaming assignments dilligently.
                </p>
                <p>
                  2) We meet all your stringent quality standards pertaining to
                  game design and development
                </p>
                <p>
                  3) Art Enix Studios serves the most intriguing and versitle
                  form of art on the palette. Be it concept art, 2D and 3D art
                  service, game art and game development, we have tried to live
                  to the clients expectations.
                </p>
                <p>
                  Delivery on Time- We cross all hurdles relentlessly to deliver
                  all your assignments in time and meet your deadlines.
                </p>
                <h5>KEY FEATURES OF ORGANIZATION AND PERSONNEL</h5>
                <p>
                  Artist working in Art Enix Studios is having a traditional art
                  degree (GD ART, BACHELOR Of Fine Art, Commercial Art Degree.)
                  Also we do have hands on working experiences of various AAA
                  game titles.{" "}
                </p>
                <p>
                  Provide and design solutions according to client rquirement.
                  We never compromise on our internal quality standard of
                  checking a product. Client satisfication is our motto.
                </p>
                <p>
                  Intellectual property of project remains confidential and
                  secure and is having equal importance as we give final
                  delivery of product.
                </p>
                <p>
                  Our Team compromise of dexterious professionals who assist us
                  in every stage of our business. The professionals working with
                  us are well aware of the latest technologies and developments.
                  Morever, we also organize special training sessions for our
                  experts, so as to make them abreast with the prevailing market
                  standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page-2">
          {" "}
          <div className="container mt-5">
            <div className="row mt-5">
              <div className="col-md-3 about-box">
                <div className="row justify-content-center">
                  <h4>VISION</h4>
                </div>
                <div className="row justify-content-center mt-5">
                  {" "}
                  <img className="about-icon" src={vision} />
                </div>
                <div className="row mt-5">
                  <p>
                    Over The Years we have significantly focused on designing
                    high quality games and developing them, we wish to augment
                    these services manifold to serve a bigger fraternity of game
                    developers in India and several other continents and
                    countries across the Globe.
                  </p>
                </div>
              </div>

              <div className="col-md-3 about-box">
                <div className="row justify-content-center">
                  <h4>MISSION</h4>
                </div>
                <div className="row justify-content-center mt-5">
                  {" "}
                  <img className="about-icon" src={mission} />
                </div>
                <div className="row mt-5">
                  <p>
                    We propose to integrate best of the resources avillable to
                    deliver quality gaming solutions and that too at
                  </p>
                </div>
              </div>

              <div className="col-md-3 about-box">
                <div className="row justify-content-center">
                  <h4>OUR PHILOSOPHY</h4>
                </div>
                <div className="row justify-content-center mt-5">
                  {" "}
                  <img className="about-icon" src={philosophy} />
                </div>
                <div className="row mt-5">
                  <p>
                    Art Enix Studios belives in continuous improvement process.
                    This has enabled it to maintain its cutting edge position on
                    process and pipeline development.
                  </p>
                </div>
              </div>

              <div className="col-md-3 about-box">
                <div className="row justify-content-center">
                  <h4>VALUES</h4>
                </div>
                <div className="row justify-content-center mt-5">
                  {" "}
                  <img className="about-icon" src={values} />
                </div>
                <div className="row mt-5">
                  <p>
                    We see ourseleves to be Top notch gaming service provider
                    globally and also an innovator in the field of gaming and
                    animation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
