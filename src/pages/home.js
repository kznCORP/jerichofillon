import React from "react";

import Header from "../layouts/header/header.js";
import Slogan from "../layouts/slogan/slogan";
import Logo from "../components/logo/logo.js";
import Menu from "../layouts/menu/menu";

const Home = () => {
  return (
    <>
      <Header />
      <Slogan />
      <Logo />
      <Menu />
    </>
  );
};

export default Home;
