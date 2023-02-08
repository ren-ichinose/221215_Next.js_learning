import React from "react";
import { useState } from "react";
import Button from "components/button/button";
import styles from "components/completedTasks/completedTasks.module.css";

const CompletedTask = ({completedTasks,CompletedTaskBack}) => {

// 最初、このコンポーネントに下記の関数を記述していた
// →大元のコンポーネントに全てまとめて、その関数を引数で受けとりそのまま使用
  // const onClicBank = (index) => {
  //   alert("タスクを戻しますか？");
  //   CompletedTaskBack(index)
  // }

    return (
    <>
      <section className={styles.section}>
        <h2 className={styles.title}>完了のタスク</h2>
        <ul>
          {completedTasks.map((completedTask,index) => {
            return (
              <li key={completedTask}>
                <p className={styles.itemText}>{completedTask}</p>
                <div className={styles.btnWrapper}>
                  <Button text={"戻す"} onClick={()=> {CompletedTaskBack(index)}}/>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default CompletedTask;
