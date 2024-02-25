import React, { useState } from "react";
import styles from "./IdBadgeComponent.module.scss";
import { Me, instagram, github, twitter } from "../../assets/images";

type Props = {};

const IdBadgeComponent = (props: Props) => {
  const [profileVisit] = useState([
    {
      id: 1,
      link: "https://www.instagram.com/hackernaman/",
      userName: "@hackernaman",
      imgUrl: instagram,
    },
    {
      id: 2,
      link: "https://github.com/namanajmera",
      userName: "@namanAjmera",
      imgUrl: github,
    },
    {
      id: 3,
      link: "https://twitter.com/hacker__Naman",
      userName: "@namanAjmera",
      imgUrl: twitter,
    },
  ]);

  const handleProfiles = (
    event: React.MouseEvent<HTMLElement>,
    profile: any
  ) => {
    event.preventDefault();
    window.open(profile.link, "_blank");
  };
  return (
    <div className={styles["badge-container"]}>
      <div className={styles["face-logo"]}>
        <span className={styles["img-container"]}>
          <img src={Me} alt="" />
        </span>
      </div>
      <div className={styles["self-tag"]}>
        <span className={styles["self"]}> @namanAjmera </span>
        <div className={styles["profile-container"]}>
          {profileVisit &&
            profileVisit.map((ele, index) => (
              <img
                src={ele.imgUrl}
                alt=""
                className={styles["profiles"]}
                onClick={(event) => handleProfiles(event, ele)}
              />
            ))}
          {/* <img src={facebook} alt="" className={styles["profiles"]} />
          <img src={github} alt="" className={styles["profiles"]} />
          <img src={twitter} alt="" className={styles["profiles"]} /> */}
        </div>
      </div>
    </div>
  );
};

export default IdBadgeComponent;
