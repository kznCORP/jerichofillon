import React from "react";
import { Link } from "react-router-dom";

import "./menu.css";

const Menu = () => {
  return (
    <>
      <div id="menu">
        <div className="menuContainer">
          <Link to="/">
            <h3 className="menuItem active">Home</h3>
          </Link>

          <Link to="/work">
            <h3 className="menuItem">Work</h3>
          </Link>

          <Link to='/about'>
            <h3 className="menuItem">About</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
