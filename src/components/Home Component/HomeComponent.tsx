import React, { useState } from "react";
import styles from "./HomeComponent.module.scss";
import { big_land_computer, download } from "../../assets/images";

type Props = {};

const HomeComponent = (props: Props) => {
  const [profileVisit] = useState([
    {
      id: 1,
      title: "github",
      link: "https://github.com/namanAjmera",
      userName: "@namanAjmera",
      tag: "GitHub/@namanAjmera",
    },
    {
      id: 2,
      title: "linkedIn",
      link: "https://linkedin.com/in/namanajmera",
      userName: "@namanajmera",
      tag: "LinkedIn/@namanAjmera",
    },
    {
      id: 3,
      title: "leetCode",
      link: "https://leetcode.com/namanAjmera",
      userName: "@namanAjmera",
      tag: "Leetcode/@namanAjmera",
    },
  ]);

  const downloadResume = () => {
    const aTag = document.createElement("a");
    aTag.href =
      "https://drive.google.com/file/d/1D9_jPUZdrUv_a0FwZFNlD_NCtXqbzREl/view?usp=sharing";
    aTag.target = "_blank";
    aTag.download = "Naman's Resume.pdf";
    aTag.click();
  };
  return (
    <div className={styles["home-container"]}>
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
              <p className={styles["declarationForm"]} key={index}>
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
                  {ele.tag}
                </a>
                {'"'}
              </p>
            ))}
        </div>
        <div className={styles["downloads"]}>
          <button className={styles["dwn-btn"]} onClick={downloadResume}>
            <img src={download} alt="" className={styles["dwn-img"]} />
            <span className={styles["dwn-text"]}>_resume</span>
          </button>
        </div>
      </div>
      <div className={styles["right-side"]}>
        <img
          className={styles["big_land_computer"]}
          src={big_land_computer}
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeComponent;
