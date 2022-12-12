import React from "react";

import portalJpg from "../images/portals.jpg";
import portalWebp from "../images/portals.webp";
import portalMobile from "../images/portal-mobile.jpeg";

import Header from "../components/header/header.js";
import Portal from "../components/hero/portal/portal.js";
import Portfolio from "../components/hero/portfolio/portfolio.js";
import Footer from "../components/footer/footer.js";

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
