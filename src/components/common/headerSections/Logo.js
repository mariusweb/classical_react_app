import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Header.module.css";

const Logo = () => {
  return (
    <NavLink to="/" exact className={styles.logoLink}>
      <h1>_1981_</h1>
    </NavLink>
  );
};

export default Logo;
