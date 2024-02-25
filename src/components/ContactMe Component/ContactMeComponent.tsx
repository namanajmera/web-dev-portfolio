import React from "react";
import styles from "./ContactMeComponent.module.scss";
import IdBadgeComponent from "../IdBadgeComponent/IdBadgeComponent";
type Props = {};

const ContactMeComponent = (props: Props) => {
  return (
    <div className={styles["contact-container"]}>
      <div className={styles["top-container"]}>
        <IdBadgeComponent />
      </div>
      <div className={styles["bottom-container"]}>
        <div className={styles["left"]}>
          <div className={styles["contactMe"]}>
            <p>
              <span className={styles["obj"]}>{".contactMe"}</span>
              <span className={styles["curly"]}>{" {"}</span>
            </p>
            <p className={styles["key-value"]}>
              <span className={styles["key"]}>{"email: "}</span>
              <span className={styles["value"]}>
                {"'cool.naman.ajmera@gmail.com;'"}
              </span>
            </p>
            <p className={styles["key-value"]}>
              <span className={styles["key"]}>{"phone: "}</span>
              <span className={styles["value"]}>{"+91-8696696426;"}</span>
            </p>
            <p>
              <span className={styles["curly"]}>{"}"}</span>
            </p>
          </div>
          <div className={styles["socialMedia"]}>
            <p>
              <span className={styles["obj"]}>{".socialMedia"}</span>
              <span className={styles["curly"]}>{" {"}</span>
            </p>
            <p className={styles["key-value"]}>
              <span className={styles["key"]}>{"instagram: "}</span>
              <span className={styles["value"]}>{" '@hackerNaman';"}</span>
            </p>
            <p className={styles["key-value"]}>
              <span className={styles["key"]}>{"github: "}</span>
              <span className={styles["value"]}>{" '@namanAjmera';"}</span>
            </p>
            <p className={styles["key-value"]}>
              <span className={styles["key"]}>{"linkedIn: "}</span>
              <span className={styles["value"]}>{" '@namanAjmera';"}</span>
            </p>
            <p>
              <span className={styles["curly"]}>{"}"}</span>
            </p>
          </div>
        </div>
        <div className={styles["center"]}></div>
        <div className={styles["right"]}>
          <div className={styles["thanks"]}>
            <p> {"Thank You ✌️"} </p>
            <span>{"Programming my tech career like I always wanted."}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeComponent;
