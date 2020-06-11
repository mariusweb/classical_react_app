import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Header.module.css";

const HeaderNav = () => {
  return (
    <nav className={styles.navSection}>
      <NavLink to="/" exact className={styles.navLink}>
        Home
      </NavLink>
      <NavLink to="/about" className={styles.navLink}>
        About
      </NavLink>
      <NavLink to="/work" className={styles.navLink}>
        Work
      </NavLink>
      <NavLink to="/blog" className={styles.navLink}>
        Blog
      </NavLink>
      <NavLink to="/contact" className={styles.navLink}>
        Contact
      </NavLink>
    </nav>
  );
};

export default HeaderNav;
