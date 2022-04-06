import React from "react";

function Hero() {
  return (
    <div>
      <section id="hero" className="d-flex align-items-left">
        <div
          className="container d-flex flex-column align-items-left"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <p class='intro' style={{fontWeight:"bold"}}>Hi, my name is</p>
          
          <h1 style={{ color: "black", fontWeight: "bolder"}}>
          Rizwan Hamisi.
          </h1>
          <h1 style={{ color: "#34b7a7",paddingTop:"10px", fontWeight: "bolder"}}>
            I build Applications for the Web.
          </h1>
          <h2 style={{ color: "black", textAlign: "left",lineHeight:"30px" }}>
I’m a Software Developer specializing in building (and occasionally designing) exceptional digital experiences
          </h2>
          <button className="btn-about"><a href="#about">Explore</a></button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
