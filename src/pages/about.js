import React from "react";
// Import for React Routers go here.

import Info from "../components/about/info/info.js";
import Contact from "../components/about/contact/contact.js";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";

const About = () => {
  return (
    <>
      <Header link="Work" title="JF" />
      <section id="infoContent">
        <Info />
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default About;
