import React from "react";

function Skills() {
  return (
    <div>
      <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              As a self taught programmer, I have struggled and managed to
              understand the current trends in the industry. below are some of
              the skills that am competent in.
            </p>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">FRONTEND</span>
              </div>
              <div className="progress">
                <span className="skill">BACKEND</span>
              </div>
              <div className="progress">
                <span className="skill">MOBILE</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">REACTJS &amp; NextJs</span>
              </div>
              <div className="progress">
                <span className="skill">NODE &amp; NextJs</span>
              </div>
              <div className="progress">
                <span className="skill">REACT NATIVE &amp; Flutter</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
