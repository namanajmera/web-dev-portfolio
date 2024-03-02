import React, { useRef, useState } from "react";
import IdBadgeComponent from "../IdBadgeComponent/IdBadgeComponent";
import styles from "./ExperienceComponent.module.scss";
import {
  magicEdtech,
  oneSilverbullet,
  reactBox,
  vue,
  nextjs,
} from "../../assets/images";

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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isMouseDown.current = true;
    startX.current = e.pageX - containerRef.current!.offsetLeft;
    scrollLeft.current = containerRef.current!.scrollLeft;
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown.current) return;

    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX.current) * 2; // Adjust the multiplier as needed

    containerRef.current!.scrollLeft = scrollLeft.current - walk;
  };

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = containerRef.current;

    if (container && e.deltaX !== undefined) {
      if (e.cancelable) {
        e.preventDefault();
      }
      container.scrollLeft += e.deltaX;
    }
  };

  return (
    <div className={styles["exp-container"]}>
      <div className={styles["top-container"]}>
        <IdBadgeComponent />
      </div>
      <div
        className={styles["bottom-container"]}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div
          className={styles["cards"]}
          ref={containerRef}
          onWheel={handleScroll}
          tabIndex={0} // Ensure the container is focusable
        >
          {expcardsDetails &&
            expcardsDetails.map((experence, index) => (
              <div className={styles["card-details"]} key={index}>
                <span className={styles["exps-count"]}>
                  Experience {index + 1}
                </span>
                <div className={styles["card"]}>
                  <img
                    src={experence.imgUrl}
                    alt=""
                    className={styles["expImg"]}
                  />
                  <div className={styles["tech-used"]}>
                    {experence &&
                      experence.techUsed.length &&
                      experence.techUsed.map((tech, ind) => (
                        <img
                          key={ind}
                          src={tech}
                          alt=""
                          className={styles["techImg"]}
                        />
                      ))}
                  </div>
                  <div className={styles["title"]}>{experence.title}</div>
                  <button className={`${styles["btn"]}`}>view-details</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
