import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="headerNameWrapper">
        <NavLink to="/">
          <h6 id="headerName">Jericho Fillon</h6>
          <h6 id="headerDesc">Web developer + Designer</h6>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
