import React from "react";
import SearchForm from "../SearchForm/SearchForm";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <SearchForm />
        <div className="hero-title">
          <h1>What are your favorite cuisines ?</h1>
          <h3>PERSONALIZE YOUR EXPERIENCE</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
