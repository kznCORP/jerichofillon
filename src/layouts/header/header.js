import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="headerNameWrapper">
        <Link to="/">
          <h6 id="headerName">Jericho Fillon</h6>
          <h6 id="headerDesc">Web developer + Designer</h6>
        </Link>
      </div>
    </header>
  );
};

export default Header;
