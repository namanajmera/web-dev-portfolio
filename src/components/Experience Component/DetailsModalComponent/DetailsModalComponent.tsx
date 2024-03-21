import React from "react";
import styles from "./DetailsModalComponent.module.scss";

type Props = {};

const DetailsModalComponent = (props: Props) => {
  return (
    <div className={styles["details-component"]}>
      <div className={styles["top-container"]}>
        <img src="" alt="" />
        <div className="info-container">
          <span>Magic EdTech</span>
          <span>2 yrs 9 mos</span>
          <span>Noida, uttar Pradesh, India</span>
        </div>
      </div>
      <div className={styles["bottom-container"]}>
        <div className="details">
          <span className="title">Consultant</span>
          <span className="type">Full-time</span>
          <span className="dateData">Apr 2023 - Dec 2023 9 mos</span>
          <ul className="skills">
            <li>React js.</li>
            <li>Vue js</li>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
          <ul className="desc">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div className="details">
          <span className="title">Consultant</span>
          <span className="type">Full-time</span>
          <span className="dateData">Apr 2023 - Dec 2023 9 mos</span>
          <ul className="skills">
            <li>React js.</li>
            <li>Vue js</li>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
          <ul className="desc">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div className="details">
          <span className="title">Consultant</span>
          <span className="type">Full-time</span>
          <span className="dateData">Apr 2023 - Dec 2023 9 mos</span>
          <ul className="skills">
            <li>React js.</li>
            <li>Vue js</li>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
          <ul className="desc">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailsModalComponent;
