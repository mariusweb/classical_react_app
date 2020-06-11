import React from "react";
import styles from "./Header.module.css";
import "../../assets/fonts/stylesheet.css";
import Logo from "./headerSections/Logo";
import HeaderNav from "./headerSections/HeaderNav";
import SignIn from "./headerSections/SignIn";

const Header = () => {
  return (
    <header>
      <div className={styles.headStyle}>
        <div className={styles.navStyle}>
          <Logo />
          <div className={styles.headerLine}></div>
          <HeaderNav />
        </div>
        <SignIn />
      </div>
    </header>
  );
};

export default Header;
