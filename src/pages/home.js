import React from "react";

import Header from "../layouts/header/header.js";
import Slogan from "../layouts/slogan/slogan";
import Logo from "../components/logo/logo.js";
import Menu from "../layouts/menu/menu";
import Footer from "../layouts/footer/footer.js";

const Home = () => {
  return (
    <>
      <Header />
      <Slogan />
      <Logo />
      <Menu />
      <Footer />
    </>
  );
};

export default Home;
