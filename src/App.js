import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";

import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
