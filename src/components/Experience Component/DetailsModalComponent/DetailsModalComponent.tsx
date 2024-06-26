import React from "react";
import styles from "./DetailsModalComponent.module.scss";

type Props = {
  modalData?: any;
};

const DetailsModalComponent = ({ modalData }: Props) => {
  return (
    <div className={styles["experience-container"]}>
      <div className={styles["job"]}>
        <img src={modalData.imgUrl} alt={modalData.title} />
        <div className={styles["job-details"]}>
          <h2>{modalData.title}</h2>
          <p>{modalData.exp}</p>
          <p>Noida, Uttar Pradesh, India</p>
        </div>
      </div>

      {modalData.expsDetails.map((position: any, index: number) => (
        <div className={styles["position"]} key={index}>
          <h3>{position.title}</h3>
          <p>{position.type}</p>
          <p>
            {position.startMonth +
              ", " +
              position.startYear +
              " - " +
              position.endMonth +
              ", " +
              position.endYear}
          </p>
          <p>{position.details}</p>
          {position.skills && position.skills.length > 0 && (
            <p>
              <strong>Skills:</strong> {position.skills.join(", ")}
            </p>
          )}
          {position.responsibilities && (
            <ul>
              {position.responsibilities.map((item: any, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default DetailsModalComponent;
