import React from "react";
import styles from "./ContactMeComponent.module.scss";
import IdBadgeComponent from "../IdBadgeComponent/IdBadgeComponent";
type Props = {};

const ContactMeComponent = (props: Props) => {
  const handleLink = (social: string) => {
    if (social === "insta") {
      window.open("https://www.instagram.com/hackernaman/", "_blank");
    } else if (social === "linkedIn") {
      window.open("https://www.linkedin.com/in/namanajmera/", "_blank");
    } else {
      window.open("https://github.com/namanajmera", "_blank");
    }
  };

  const handleMail = (email: string) => {
    const subject = "Contact Me";
    const body = `Can you share me the ideas of projects.`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleCall = (phoneNumber: number) => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };
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
              <span
                className={styles["value"]}
                onClick={() => handleMail("cool.naman.ajmera@gmail.com")}
              >
                {"'cool.naman.ajmera@gmail.com,'"}
              </span>
            </p>
            <p className={styles["key-value"]}>
              <span className={styles["key"]}>{"phone: "}</span>
              <span
                className={styles["value"]}
                onClick={() => handleCall(8696696426)}
              >
                {"+91-8696696426,"}
              </span>
            </p>
            <p>
              <span className={styles["curly"]}>{"},"}</span>
            </p>
          </div>
          <div className={styles["socialMedia"]}>
            <p>
              <span className={styles["obj"]}>{".socialMedia"}</span>
              <span className={styles["curly"]}>{" {"}</span>
            </p>
            <p className={styles["key-value"]}>
              <span className={styles["key"]}>{"instagram: "}</span>
              <span
                className={styles["value"]}
                onClick={() => handleLink("insta")}
              >
                {" '@hackerNaman',"}
              </span>
            </p>
            <p className={styles["key-value"]}>
              <span className={styles["key"]}>{"github: "}</span>
              <span
                className={styles["value"]}
                onClick={() => handleLink("github")}
              >
                {" '@namanAjmera',"}
              </span>
            </p>
            <p className={styles["key-value"]}>
              <span className={styles["key"]}>{"linkedIn: "}</span>
              <span
                className={styles["value"]}
                onClick={() => handleLink("linkedIn")}
              >
                {" '@namanAjmera',"}
              </span>
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
