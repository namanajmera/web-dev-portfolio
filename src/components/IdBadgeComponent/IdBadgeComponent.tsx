import React from "react";
import styles from "./IdBadgeComponent.module.scss";
import { Me, instagram, facebook, github, twitter } from "../../assets/images";

type Props = {};

const IdBadgeComponent = (props: Props) => {
  return (
    <div className={styles["badge-container"]}>
      <div className={styles["face-logo"]}>
        <span className={styles["img-container"]}>
          <img src={Me} alt="" />
        </span>
      </div>
      <div className={styles["self-tag"]}>
        <span className={styles["self"]}> @NamanAjmera </span>
        <div className={styles["profile-container"]}>
          <img src={instagram} alt="" className={styles["profiles"]} />
          <img src={facebook} alt="" className={styles["profiles"]} />
          <img src={github} alt="" className={styles["profiles"]} />
          <img src={twitter} alt="" className={styles["profiles"]} />
        </div>
      </div>
    </div>
  );
};

export default IdBadgeComponent;
