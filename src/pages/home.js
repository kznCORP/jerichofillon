import React from "react";
// Import for React Routers go here.

import Tunnel from "../components/hero/tunnel/tunnel.js";
import Portfolio from "../components//hero/portfolio/portfolio.js";
import Footer from "../components/footer/footer.js";
import Header from "../components/header/header.js";

const Home = () => {
  return (
    <>
      <div className="noisyBackground">
        <Header link="Info" displayName={true} />
        <Tunnel />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
};

export default Home;
