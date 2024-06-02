import React from "react";
import { SelfComponent } from "../../components";
import styles from "./SelfPage.module.scss";

type Props = {};

const SelfPage = (props: Props) => {
  return (
    <div className={styles["self-container"]}>
      <div className={`${styles.background} ${styles.top}`}></div>
      <SelfComponent />
      <div className={`${styles.background} ${styles.bottom}`}></div>
    </div>
  );
};

export default SelfPage;
