import React from "react";
import Skills from "./Skills";
import aboutimg from "../images/hero_bg.jpeg";

function About() {
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p>
              Rizwan Hamisi alas devriz is a self taught fullstack web and
              mobile app developer based in the coastal city of Mombasa, Kenya.
              With almost 3 years of experience in frondend and backend web
              development, I can literary build web applications with the
              current trending javascript frontend and backend tools. I have
              build several websites as a freelancer and now set for a fulltime
              software development career
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img src={aboutimg} className="img-fluid" alt />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>fullstack &amp; WEB/MOBILE Developer</h3>
              <p className="font-italic">
                Below is a small biograph of myself. i can describe myself as
                young, competent and energetic person who is ready to learn and
                adapt to changes in the industry
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Birthday:</strong> 13 August 1998
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Website:</strong>
                      <a href=" https://devriz.herokuapp.com" target="_blank">
                        devriz.co.ke
                      </a>
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Phone:</strong> +254768793923
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>City:</strong> City : Mombasa, KENYA
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Age:</strong> 24
                    </li>

                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Email:</strong> devriz2030@gmail.com
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>github:</strong>{" "}
                      <a href="https://github.com/hamisirizwan" target="_blank">
                        https://github.com/hamisirizwan
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </div>
  );
}

export default About;
