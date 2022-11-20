import React, { useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { gsap } from "gsap";

import "./App.css";

import Home from "./pages/home";
import About from "./pages/about";

import LoadingScreen from "./components/Loading/loading";

const App = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [countDown, setCountDown] = useState(0);

  // The useEffect Hook allows you to perform side effects in your components.
  // Some examples of side effects are: fetching data, directly updating the DOM, and timers.
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
      clearInterval(timerId);

      console.log("Loading finished.");
    }, 4000);
  }, []);

  // After DOM has been rendered
  useLayoutEffect(() => {
    console.log("Run animations.");
    // Using Learn GSAP in 23m by WDS, you can pass objects inside gsap.to(); - Video: 16:58 / 23:21
    // For example; 
    // 
    // const obj = { x: 0 }
    // gsap.to(obj, { x : 100, duration: 4, onUpdate() => console.log(obj.x)})
    // 
    // console will print from 0 to 100;
  });

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
