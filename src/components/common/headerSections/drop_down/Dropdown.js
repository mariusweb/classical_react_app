import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../Header.module.css";
// import onClickOutside from "react-onclickoutside";

export const Dropdown = ({ title, item, multiSelect = false }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  const handleOnClick = (item) => {};

  return (
    <div className={styles.dropdown}>
      <div
        tabIndex={0}
        className={styles.navLink}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <p>{title}</p>
      </div>
      {open && (
        <nav>
          <NavLink to="/work">{item.title}</NavLink>
          {/* <NavLink>{}</NavLink>
          <NavLink>{}</NavLink>
          <NavLink>{}</NavLink> */}
        </nav>
      )}
    </div>
  );
};

export default Dropdown;
