import React from "react";
import styles from "./Navbar.module.scss";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles["left-side"]}>
        <span className={styles["text"]}> &lt; namanAjmera /&gt;</span>
      </div>
      <div className={styles["right-side"]}>
        <span className={styles["text"]}>_Hello</span>
        <span className={styles["text"]}>_projects</span>
        <span className={styles["text"]}>_about-me</span>
        <span className={styles["text"]}>_contact-me</span>
      </div>
    </nav>
  );
};

export default Navbar;
