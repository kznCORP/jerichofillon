import React from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";

import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <div className="noisyBackground"></div>
      <HashRouter basename="/">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
