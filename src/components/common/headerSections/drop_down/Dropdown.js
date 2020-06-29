import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../Header.module.css";
import onClickOutside from "react-onclickoutside";

function Dropdown({ title, items = [], multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  const handleOnClick = (item) => {};
  const navBorderLine = {
    borderBottom: "1px #3a3a3a solid",
    boxShadow: " 0px -1px rgba(0, 0, 0, 0.98) inset",
  };

  const bottomLine = (item) => {
    if (item.bottomLine === true) {
      return navBorderLine;
    }
  };

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
        <nav className={styles.dropdownNav}>
          {items.map((item) => (
            <NavLink
              className={styles.dropdownItem}
              style={bottomLine(item)}
              to={item.path}
              key={item.id}
              onClick={() => handleOnClick(item)}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
}
const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
