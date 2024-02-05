import React from "react";
import styles from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const { pathname } = useLocation();
  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles["left-side"]}>
        <Link
          to={"/namanAjmera"}
          className={`${styles["text"]} ${
            pathname === "/namanAjmera" && "active-tab"
          }`}
        >
          {" "}
          &lt; namanAjmera /&gt;
        </Link>
      </div>
      <div className={styles["right-side"]}>
        <Link
          to={"/"}
          className={`${styles["text"]} ${pathname === "/" && "active-tab"}`}
        >
          _Hello
        </Link>
        <Link
          to={"/project"}
          className={`${styles["text"]} ${
            pathname === "/project" && "active-tab"
          }`}
        >
          _projects
        </Link>
        <Link
          to={"/about"}
          className={`${styles["text"]} ${
            pathname === "/about" && "active-tab"
          }`}
        >
          _about-me
        </Link>
        <Link
          to={"/contact"}
          className={`${styles["text"]} ${
            pathname === "/contact" && "active-tab"
          }`}
        >
          _contact-me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
