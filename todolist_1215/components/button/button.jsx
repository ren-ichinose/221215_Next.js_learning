import React from 'react';
import styles from "components/button/button.module.css";

const Button = ({text,onClick}) => {
  return (
    <button className={styles.btn} onClick={onClick}>{text}</button>
  )
}

export default Button