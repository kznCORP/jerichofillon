import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  const headerLink = props.link;
  const displayName = props.displayName;
  let hideName;
  let path;

  if (!displayName) {
    hideName = "hidden";
  }

  if (headerLink === "Info") {
    path = "/info";
  } else {
    path = "/";
  }

  return (
    <header id="header">
      <div className="headerNameWrapper">
        <h6 className={hideName} id="headerName">
          Jericho Fillon
        </h6>
        <h6 className={hideName} id="headerPronoun">
          he/him
        </h6>
      </div>

      <NavLink to={path} id="headerInfoLink">
        <div className="headerInfo">
          <h4 id="headerInfo">{headerLink}</h4>
          <span id="plus">+</span>
        </div>
      </NavLink>
    </header>
  );
};

export default Header;
