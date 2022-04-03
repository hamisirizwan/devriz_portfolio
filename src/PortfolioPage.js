import React from "react";
import About from "./sections/About";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";

function PortfolioPage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
}

export default PortfolioPage;
