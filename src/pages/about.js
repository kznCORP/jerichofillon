import React from "react";
// Import for React Routers go here.

import duneJpg from "../images/dune.jpeg";
import duneMobile from "../images/dune-mobile.jpeg";

import Info from "../components/about/info/info.js";
import Dune from "../components/about/dune/dune.js";
// import Contact from "../components/about/contact/contact.js";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";

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
