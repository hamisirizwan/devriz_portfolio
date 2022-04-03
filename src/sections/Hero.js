import React from "react";

function Hero() {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container d-flex flex-column align-items-center"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <h1>RIZWAN HAMISI</h1>
          <h2>I'm a professional software developer based Mombasa, Kenya</h2>
          <a href="about.html" className="btn-about">
            About Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
