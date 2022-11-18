import React from "react";

import duneJpg from "../images/dune.jpeg";
import duneMobile from "../images/dune-mobile.jpeg";

import Info from "../components/About/info/info.js";
import Dune from "../components/About/dune/dune.js";
import Header from "../components/Header/header.js";
import Footer from "../components/Footer/footer.js";

const About = () => {
  return (
    <>
      <Header link="Work" title="JF" />
      <Dune
        src={duneJpg}
        mobile={duneMobile}
        fallback={duneMobile}
        alt="One of many experiences; Dune."
        className="dune"
      />
      <Info />
      <Footer />
    </>
  );
};

export default About;
