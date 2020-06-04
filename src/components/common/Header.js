import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.headerStyle}>
      <div className={classes.navStyle}>
        <div className="logo">
          <NavLink to="/" exact>
            <h1>__1981__</h1>
          </NavLink>
        </div>
        {" | "}
        <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
