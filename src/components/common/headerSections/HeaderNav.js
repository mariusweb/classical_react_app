import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Header.module.css";
import Dropdown from "./drop_down/Dropdown";
import dropdownData from "./drop_down/dropdownItem.json";

const HeaderNav = () => {
  // const newDropdown = dropdownData.map((data) => {
  //   return <Dropdown title="Work" key={data.id} item={data} multiSelect />;
  // });

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
      {/* {newDropdown} */}
      <Dropdown title="Work" item={dropdownData} multiSelect />
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
