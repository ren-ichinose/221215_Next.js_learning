import React from 'react';
import styles from "components/button/button.module.css";

const InputButton = ({text,onClick}) => {
  return (
    <button className={styles.inputButton} onClick={onClick}>{text}</button>
  )
}

export default InputButton