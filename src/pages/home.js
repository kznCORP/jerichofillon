import React from "react";

import portalJpg from "../images/portals.jpg";
import portalWebp from "../images/portals.webp";
import mobileJpg from "../images/mobile.jpeg";

import Portal from "../components/hero/portal/portal.js";
import Portfolio from "../components//hero/portfolio/portfolio.js";
import Footer from "../components/footer/footer.js";
import Header from "../components/header/header.js";

const Home = () => {
  return (
    <>
      <Header link="Info" title="Jericho Fillon" />
      <Portal
        src={portalJpg}
        mobile={mobileJpg}
        fallback={portalWebp}
        alt="My avatar displayed as pixel art."
        className="portal"
      />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Home;
