import React from "react";
import { useState } from "react";
import styles from "components/addTask/addTask.module.css";
import Input from "components/input/input";
import InputButton from "components/button/InputButton";

const AddTask = ({startedTasks}) => {
  const [taskText, seTtaskText] = useState("");
  const onChangeTaskText = (e) => {
    seTtaskText(e.target.value);
  };
  const onClickAdd = () => {
    if(taskText === "") return;
    startedTasks(taskText)
    seTtaskText("")
  }

  return (
    <section className={styles.section}>
      <Input
        value={taskText}
        type={"text"}
        placeholder={"タスクの追加"}
        onChange={onChangeTaskText}
      />
      <InputButton text={"追加"} onClick={onClickAdd}/>
    </section>
  );
};

export default AddTask;
