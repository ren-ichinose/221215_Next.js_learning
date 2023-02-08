import React from 'react';
import styles from "components/button/button.module.css";

const DeleteButton = ({text,onClick}) => {
  return (
    <button className={styles.deleteButton} onClick={onClick}>{text}</button>
  )
}

export default DeleteButton