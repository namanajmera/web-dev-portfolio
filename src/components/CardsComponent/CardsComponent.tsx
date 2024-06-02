import React, { useRef, useState, ReactElement } from "react";
import styles from "./CardsComponent.module.scss";
import Modal from "../commonComponent/Modal/Modal";

type Props = {
  cardsDetails: any;
  children: ReactElement | ReactElement[];
};

const CardsComponent = ({ cardsDetails, children }: Props) => {
  const [showModal, setShowModal] = useState<number | null>(null);
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

  const handleShowModal = (index: number | null) => {
    setShowModal(index);
  };

  return (
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
        {cardsDetails &&
          cardsDetails.map((card: any, index: number) => (
            <div className={styles["card-details"]} key={index}>
              <span className={styles["exps-count"]}>
                Experience {index + 1}
              </span>
              <div className={styles["card"]}>
                <img src={card.imgUrl} alt="" className={styles["expImg"]} />
                <div className={styles["tech-used"]}>
                  {card &&
                    card.techUsed.length &&
                    card.techUsed.map((tech: string, ind: number) => (
                      <img
                        key={ind}
                        src={tech}
                        alt=""
                        className={styles["techImg"]}
                      />
                    ))}
                </div>
                <div className={styles["title"]}>{card.title}</div>
                <button
                  className={styles["btn"]}
                  onClick={() => handleShowModal(index)}
                >
                  View Details
                </button>
                {showModal === index && (
                  <Modal
                    handleShowModal={() => handleShowModal(null)}
                    modalData={card}
                  >
                    {children}
                  </Modal>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardsComponent;
