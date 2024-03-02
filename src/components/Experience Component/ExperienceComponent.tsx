import React, { useState } from "react";
import IdBadgeComponent from "../IdBadgeComponent/IdBadgeComponent";
import styles from "./ExperienceComponent.module.scss";
import {
  magicEdtech,
  oneSilverbullet,
  reactBox,
  vue,
  nextjs,
} from "../../assets/images";
import CardsComponent from "../CardsComponent/CardsComponent";

type Props = {};

const ExperienceComponent = (props: Props) => {
  const [expcardsDetails] = useState([
    {
      title: "Magic EdTech",
      imgUrl: magicEdtech,
      techUsed: [reactBox, vue, nextjs],
      expsDetails: {},
    },
    {
      title: "1Silverbullet.tech",
      imgUrl: oneSilverbullet,
      techUsed: [reactBox, vue],
      expsDetails: {},
    },
  ]);

  return (
    <div className={styles["exp-container"]}>
      <div className={styles["top-container"]}>
        <IdBadgeComponent />
      </div>
      <CardsComponent cardsDetails={expcardsDetails} />
    </div>
  );
};

export default ExperienceComponent;
