import React, { useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import gsap from "gsap";

import "./App.css";

import Home from "./pages/home";
import About from "./pages/about";

import LoadingScreen from './components/loading/loading-screen';

const App = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [countDown, setCountDown] = useState(0);

  // The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
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
      clearInterval(timerId);
      console.log("Loading finished.");
    }, 4000);
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false);
      console.log("Run useLayoutEffect");

      const timeline = gsap.timeline();
      timeline
        .from(".portalWrapper", { opacity: 0, duration: 2, ease: "circ.in" })
        .from("#header", { opacity: 0, y: 25, duration: 1.5, ease: "slow" })
        .from("#slogan", { opacity: 0, y: 25, duration: 1.5, ease: "slow" });

      document.querySelectorAll(".portfolioLinkWrapper").forEach((link, i) => {
        console.log("Run QSA");

        gsap.from(link, {
          opacity: 0,
          y: 25,
          duration: i + 0.5,
          delay: 5,
        });
      });
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
