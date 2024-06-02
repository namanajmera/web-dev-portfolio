import React, { useState } from "react";
import styles from "./SelfComponent.module.scss";
import IdBadgeComponent from "../IdBadgeComponent/IdBadgeComponent";
import {
  reactJs,
  vuejs,
  c,
  css,
  html,
  java,
  javascript,
  mysql,
  python,
  typescript,
} from "../../assets/images";

type Props = {};

const SelfComponent = (props: Props) => {
  const [skillsData] = useState([
    {
      id: "1",
      name: "React Js",
      imgUrl: reactJs,
      altText: "reactjs",
    },
    {
      id: "2",
      name: "Vue Js",
      imgUrl: vuejs,
      altText: "vuejs",
    },
    {
      id: "3",
      name: "Javascript",
      imgUrl: javascript,
      altText: "javascript",
    },
    {
      id: "4",
      name: "Typescript",
      imgUrl: typescript,
      altText: "typescript",
    },
    {
      id: "5",
      name: "Java",
      imgUrl: java,
      altText: "java",
    },
    {
      id: "6",
      name: "HTML",
      imgUrl: html,
      altText: "html",
    },
    {
      id: "7",
      name: "CSS",
      imgUrl: css,
      altText: "css",
    },
    {
      id: "8",
      name: "Python",
      imgUrl: python,
      altText: "python",
    },
    {
      id: "9",
      name: "C/C++",
      imgUrl: c,
      altText: "c/c++",
    },
    {
      id: "10",
      name: "My SQL",
      imgUrl: mysql,
      altText: "mysql",
    },
  ]);
  return (
    <div className={styles["contact-container"]}>
      <div className={styles["top-container"]}>
        <IdBadgeComponent />
      </div>
      <div className={styles["skills-container"]}>
        {skillsData &&
          skillsData.map((skillsData) => (
            <div className={styles["skill"]} key={skillsData.id}>
              <img src={skillsData.imgUrl} alt={skillsData.altText} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SelfComponent;
