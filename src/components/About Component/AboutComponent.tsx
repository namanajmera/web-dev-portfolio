import React from "react";
import styles from "./AboutComponent.module.scss";
import IdBadgeComponent from "../IdBadgeComponent/IdBadgeComponent";

type Props = {};

const AboutComponent = (props: Props) => {
  /*   const numbers = Array.from({ length: 10 }, (_, index) => index + 1); */
  return (
    <div className={styles["about-container"]}>
      <div className={styles["top-container"]}>
        <IdBadgeComponent />
      </div>
      <div className={styles["bottom-container"]}>
        <div className={styles["import-statement"]}>
          <span>{"import "}</span>
          <span>{"aboutme "}</span>
          <span>{"from "}</span>
          <span>{"./protfolio"}</span>
        </div>
        {/* <div className={styles["counting"]}>
          {numbers && numbers.map((number:number) =>(
            <li className={styles["count"]}>{number}</li>
          ))}
        </div> */}
        <div className={styles["me-text"]}>
          <p>{` /* Hello there! I'm a seasoned software engineer specializing in front-end development, with a strong proficiency in Vue.js and React.js. With a solid track record of delivering top-notch solutions tailored to both client and user requirements, I thrive on tackling challenges with a creative and adaptable mindset. My problem-solving skills are complemented by a collaborative spirit, making me a dedicated team player in achieving shared objectives. I bring a wealth of experience in JavaScript, TypeScript, and state management to the table. Let's connect and explore exciting opportunities to collaborate on innovative solutions. */`}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
