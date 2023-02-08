import styles from "/src/componets/todoList/todoList.module.css";

const TodoList = ({
  startedTodos,
  setStartedTodos,
  conmpletedTodos,
  setConmpletedTodos,
}) => {
  const handleDeleatBtn = (index) => {
    const result = confirm("本当に削除しますか？");
    if (result) {
      const newstartedTodos = [...startedTodos];
      newstartedTodos.splice(index, 1);
      setStartedTodos(newstartedTodos);
    }
    return;
  };

  const handleCompletedBtn = (index) => {
    const newstartedTodos = [...startedTodos];
    newstartedTodos.splice(index, 1);
    const newconmpletedTodos = [...conmpletedTodos, startedTodos[index]];
    setStartedTodos(newstartedTodos);
    setConmpletedTodos(newconmpletedTodos);
  };

  // map関数のKeyの問題を解決する！！！
  return (
    <section className={styles.todoListSction}>
      {startedTodos.map((startedTodo, index) => {
        return (
          <div key={index} className={styles.listItem}>
            <p className={styles.todo}>{startedTodo}</p>
            <div className={styles.btnWrapper}>
              <button
                className={`${styles.delete} ${styles.btn}`}
                onClick={() => {
                  handleCompletedBtn(index);
                }}
              >
                完了
              </button>
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

export default TodoList;
