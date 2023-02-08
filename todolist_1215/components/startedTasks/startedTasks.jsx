import React from "react";
import Button from "components/button/button";
import DeleteButton from "components/button/DeleteButton";
import styles from "components/startedTasks/startedTasks.module.css";
import { useState } from "react";

const StartedTask = ({startedTasks,startedTaskDelete,startedTaskCompleted}) => {
  
// 最初、このコンポーネントに下記の関数を記述していた
// →大元のコンポーネントに全てまとめて、その関数を引数で受けとてって、そのまま使用
  // const onClickDelete = (index) => {
  //   alert("本当に削除しますか？");
  //   startedTaskDelete(index);
  // }

  // const onClickCompleted = (index) => {
  //   alert("タスクを完了しますか？");
  //   startedTaskCompleted(index);
  // }

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.title}>未完了のタスク</h2>
        <ul>
          {startedTasks.map((startedTask,index) => {
            return (
              <li key={startedTask}>
                <p className={styles.itemText}>{startedTask}</p>
                <div className={styles.btnWrapper}>
                  <Button text={"完了"} onClick={()=> {startedTaskCompleted(index)}}/>
                  <DeleteButton text={"削除"} onClick={()=> {startedTaskDelete(index)}}/>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default StartedTask;
