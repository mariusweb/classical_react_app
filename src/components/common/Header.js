import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerStyle}>
      <div className={styles.headStyle}>
        <div className="logo">
          <NavLink
            to="/"
            exact
            className={`${styles.navLink} ${styles.logoLink}`}
          >
            <h1>__1981__</h1>
          </NavLink>
        </div>
        {" | "}
        <nav>
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
        <form>
          <input
            className={styles.place}
            type="search"
            name="Welcome Back"
            id=""
            placeholder="Welcome Back,"
          />
          <input type="submit" value="Client Sign-Out" />
        </form>
      </div>
    </header>
  );
};

export default Header;
