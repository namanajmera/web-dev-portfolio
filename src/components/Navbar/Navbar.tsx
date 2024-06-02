import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const { pathname } = useLocation();
  const [navbarContent] = useState([
    {
      id: 1,
      name: "_Hello",
      path: "/",
    },
    {
      id: 2,
      name: "_experience",
      path: "/experience",
    },
    /* {
      id: 3,
      name: "_projects",
      path: "/project",
    }, */
    {
      id: 4,
      name: "_about-me",
      path: "/about",
    },
    {
      id: 5,
      name: "_contact-me",
      path: "/contact",
    },
  ]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
      <div className={styles["hamburger"]} onClick={toggleMobileMenu}>
        &#9776;
      </div>
      <div
        className={`${styles["right-side"]} ${
          isMobileMenuOpen ? styles["open"] : ""
        }`}
      >
        {navbarContent &&
          navbarContent.map((nav) => (
            <Link
              key={nav.id}
              to={nav.path}
              className={`${styles["text"]} ${
                pathname === nav.path && "active-tab"
              }`}
              onClick={toggleMobileMenu}
            >
              {nav.name}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;
