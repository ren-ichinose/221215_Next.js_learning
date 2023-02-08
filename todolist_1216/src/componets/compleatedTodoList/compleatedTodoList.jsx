import { useState } from "react";
import styles from "/src/componets/compleatedTodoList/compleatedTodoList.module.css";

// 最初はLinkタグに関数を含めていたが、その関数は使うことができないので、値のみを渡し、こちらで状態管理をした。
// リンクを経由しないと、値が渡らないのが問題

const CompleatedTodoList = ({
  startedTodos,
  conmpletedTodos,
}) => {
  const [conmpletedTodosList, setConmpletedTodosList] = useState(conmpletedTodos);
  const handleDeleatBtn = (index) => {
    const result = confirm("本当に削除しますか？");
    if (result) {
      const newconmpletedTodosList = [...conmpletedTodosList];
      newconmpletedTodosList.splice(index, 1);
      setConmpletedTodosList(newconmpletedTodosList);
    }
  }
  return (
    <section className={styles.conmpletedTodosListSction}>
      {conmpletedTodosList.map((conmpletedTodo, index) => {
        return (
          <div key={index} className={styles.listItem}>
            <p className={styles.todo}>{conmpletedTodo}</p>
            <div className={styles.btnWrapper}>
              {/* <button
                className={`${styles.delete} ${styles.btn}`}
                onClick={() => {
                  handleBackBtn(index);
                }}
              >
                戻す
              </button> */}
              <button
                className={`${styles.complete} ${styles.btn}`}
                onClick={() => {
                  handleDeleatBtn(index);
                }}
              >
                削除
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CompleatedTodoList;
