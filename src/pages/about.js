import React from "react";

import duneJpg from "../images/dune.jpeg";
import duneMobile from "../images/dune-mobile.jpeg";

import Header from "../layouts/header/header.js";
import Dune from "../components/about/dune/dune.js";
import Info from "../components/about/info/info.js";
import Menu from "../layouts/menu/menu";
import Footer from "../layouts/footer/footer.js";

const About = () => {
  return (
    <>
      <Header />
      <Dune
        src={duneJpg}
        mobile={duneMobile}
        fallback={duneMobile}
        alt="One of many experiences; Dune."
        className="dune"
      />
      <Info />

      <Menu />
      <Footer />
    </>
  );
};

export default About;
