import React from "react";

import portalJpg from "../images/portals.jpg";
import portalWebp from "../images/portals.webp";
import portalMobile from "../images/portal-mobile.jpeg";

import Portal from "../components/Hero/Portal/portal.js";
import Portfolio from "../components/Hero/Portfolio/portfolio.js";
import Footer from "../components/Footer/footer.js";
import Header from "../components/Header/header.js";

const Home = () => {
  return (
    <>
      <Header link="Info" title="Jericho Fillon" />
      <Portal
        src={portalJpg}
        mobile={portalMobile}
        fallback={portalWebp}
        alt="A man entering a portal to other experiences."
        className="portal"
      />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Home;
