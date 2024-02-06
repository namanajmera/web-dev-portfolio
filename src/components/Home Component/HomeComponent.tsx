import React, { useState } from "react";
import styles from "./HomeComponent.module.scss";
import { big_land_computer } from "../../assets/images";

type Props = {};

const HomeComponent = (props: Props) => {
    const [profileVisit] = useState([
        {
          id: 1,
          title: "githubLink",
          link: "https://github.com/namanAjmera",
          userName: "@namanAjmera",
        },
        {
          id: 2,
          title: "linkedIn",
          link: "https://www.linkedin.com/in/namanajmera",
          userName: "@namanajmera",
        },
        {
          id: 3,
          title: "leetCode",
          link: "https://leetcode.com/namanAjmera",
          userName: "@namanAjmera",
        },
      ]);
  return (
    <div className={styles['home-container']}>
      <div className={styles["left-side"]}>
      <div className={styles["selfIntroduction"]}>
          <span className={styles["initial"]}>{"Hi all. I am"}</span>
          <span className={styles["selfName"]}>{"Naman Ajmera"}</span>
          <span className={styles["about-me-title"]}>
            &gt;{"  Full Stack Developer"}
          </span>
        </div>
        <div className={styles["contactLinks"]}>
          {profileVisit &&
            profileVisit.map((ele, index) => (
              <p className={styles["declarationForm"]}>
                <span className={styles["dataType"]}> {"const"} </span>
                <span className={styles["variableName"]}> {ele.title} </span>
                <span className={styles["assignmentOperator"]}> {"="} </span>
                {'"'}
                <a
                  href={ele.link}
                  target="_blank"
                  className={styles["value"]}
                  rel="noreferrer"
                >
                  {ele.userName}
                </a>
                {'"'}
              </p>
            ))}
        </div>
      </div>
      <div className={styles["right-side"]}>
        <img className={styles["big_land_computer"]} src={big_land_computer} alt="" />
      </div>
    </div>
  );
};

export default HomeComponent;
