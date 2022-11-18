import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";

import Home from "./pages/home";
import About from "./pages/about";

import LoadingScreen from "./components/Loading/loading";

const App = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    let timerId = null;

    if (loading) {
      timerId = setInterval(() => {
        setCountDown((count) => {
          if (count < 100) {
            count += 4;
          }
          return count;
        });
      }, 100);
    }

    setTimeout(() => {
      setLoading(false);
      //Stops memory leaks
      clearInterval(timerId);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen count={countDown} />
      ) : (
        <>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<About />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
