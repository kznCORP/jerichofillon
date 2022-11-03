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
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
