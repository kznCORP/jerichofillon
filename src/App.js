import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  return (
    <div className="App">
      <div className="noisyBackground"></div>
      <Routes>
        <Route path="https://kzncorp.github.io/jerichofillon/" element={<Home />} />
        <Route path="https://kzncorp.github.io/jerichofillon/info" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

/* 
  Project Checkpoint

  1) Pages folder contains home.js and info.js
  - Each [page].js should only have components rendered
  - Abstraction, each component should only do one thing, and that's rendering one element.

  2) Installed GH pages, onto optimizing everything else.

*/
