import React from 'react'
import styles from "./ModalComponent.module.scss";

type Props = {}

const ModalComponent = (props: Props) => {
  return (
    <div className={styles['modal']}>ModalComponent</div>
  )
}

export default ModalComponent