import { useState } from "react"
import styles from "/src/componets/addTodo/addTodo.module.css"

const AddTasks = ({startedTodos,setStartedTodos}) => {
  const [todo, setTodo] = useState("")

  const handleSbumit = (e) => {
    e.preventDefault();
    if(todo === "") return;
    const newstartedTodos =[...startedTodos, todo]
    setStartedTodos(newstartedTodos);
    setTodo("");
  }
  
  const handleCange = (e) => {
    setTodo(e.target.value);
  }

  return (
    <section className={styles.addTaskSection}>
      <form className={styles.addTaskForm} onSubmit={handleSbumit}>
        <input type="text" className={styles.addTaskInput} value={todo} onChange={handleCange} />
        <button type="submit" className={styles.addTaskButton} >追加</button>
      </form>
    </section>
  )
}

export default AddTasks