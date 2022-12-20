import React, { useState } from "react";

import Header from "../layouts/header/header.js";
import Portfolio from "../components/portfolio/portfolio.js";
import Menu from "../layouts/menu/menu.js";

import { projectData } from "../components/portfolio/data";

const Work = () => {
  const [data] = useState(projectData);

  return (
    <>
      <Header />
      <Portfolio data={data} />
      <Menu />
    </>
  );
};

export default Work;
