import React from "react";

import portalJpg from "../images/portals.jpg";
import portalWebp from "../images/portals.webp";
import portalMobile from "../images/portal-mobile.jpeg";

import Header from "../layouts/header/header.js";
import Portal from "../components/portal/portal.js";
import Slogan from "../layouts/slogan/slogan";
import Menu from "../layouts/menu/menu";
import Footer from "../layouts/footer/footer.js";

const Home = () => {
  return (
    <>
      <Header />
      <Portal
        src={portalJpg}
        mobile={portalMobile}
        fallback={portalWebp}
        alt="A man entering a portal to other experiences."
        className="portal"
      />
      <Slogan />

      <Menu />

      <Footer />
    </>
  );
};

export default Home;
