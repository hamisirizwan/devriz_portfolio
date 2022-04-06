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
              Rizwan Hamisi aka Devriz is a self taught FullStack Web and
              Mobile Developer based in the coastal city of Mombasa, Kenya.
              With almost 3 years of experience in both Frontend and Backend web
              development, I can literally build Web Applications with the
              current trending Javascript Frontend and Backend tools. I have
              built several websites as a Freelancer and now set for a fulltime
              Software Development Career.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img src={aboutimg} className="img-fluid" alt />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>FullStack Web &amp; MOBILE Developer</h3>
              <p className="font-italic">
              Rizwan Hamisi is fueled by his passion for understanding the nuances of cross-cultural technologies.He considers himself a ‘forever student,’ eager to both build on his technological foundations in Technology and stay in tune with the latest technological advancement through continued coursework and professional development.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Name:</strong> Ridhwan Hamisi
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
                      <strong>City:</strong> Mombasa, KENYA
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Nationality:</strong> Kenyan
                    </li>

                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Email:</strong> devriz2030@gmail.com
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Github:</strong>{" "}
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
