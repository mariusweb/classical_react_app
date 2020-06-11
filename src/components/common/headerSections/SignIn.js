import React from "react";
import styles from "../Header.module.css";

const SignIn = () => {
  return (
    <div className={styles.signOut}>
      <div className={styles.place}>
        <h5 className={styles.nameStyle}>
          Welcome Back, <span>JohnDoe81</span>
        </h5>
      </div>
      <div className={styles.signButton}>
        <input type="submit" value="Client Sign-Out" />
      </div>
    </div>
  );
};

export default SignIn;
