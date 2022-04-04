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
          <h1 style={{ color: "black", fontWeight: "bolder" }}>
            RIZWAN HAMISI
          </h1>
          <h2 style={{ color: "black", textAlign: "center" }}>
            I'm a professional software developer based Mombasa, Kenya
          </h2>
          <a className="btn-about">About Me</a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
