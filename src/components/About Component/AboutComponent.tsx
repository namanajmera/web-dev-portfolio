import React from 'react'
import styles from "./AboutComponent.module.scss";
import IdBadgeComponent from '../IdBadgeComponent/IdBadgeComponent';

type Props = {}

const AboutComponent = (props: Props) => {
  return (
    <div className={styles['about-container']}>
        <div className={styles["top-container"]}>
            <IdBadgeComponent />
        </div>
        <div className={styles["bottom-container"]}>
            {/* <span>About My Self</span> */}
        </div>
    </div>
  )
}

export default AboutComponent;