import React from "react";
import About from "../Components/About";
import Hero from "../Components/Hero";
import SharedProductsLinks from "../Components/SharedProductsLinks";
import SpeakersHome from "../Components/SpeakersHome";

const Home = () => {
  return (
    <div>
      <Hero />
      <SharedProductsLinks />
      <SpeakersHome />
      <About />
    </div>
  );
};

export default Home;
