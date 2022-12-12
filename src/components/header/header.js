import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  const headerLink = props.link;
  const headerTitle = props.title;
  let path;

  if (headerLink === "Info") {
    path = "/info";
  } else {
    path = "/";
  }

  return (
    <header id="header">
      <NavLink to="/" id="headerLink">
        <div className="headerNameWrapper">
          <h6 id="headerName">{headerTitle}</h6>
          <h6 id="headerPronoun">he/him</h6>
        </div>
      </NavLink>

      <NavLink to={path} id="headerLink">
        <div className="headerInfo">
          <h4 id="headerInfo">{headerLink}</h4>
          <span id="plus">+</span>
        </div>
      </NavLink>
    </header>
  );
};

export default Header;
