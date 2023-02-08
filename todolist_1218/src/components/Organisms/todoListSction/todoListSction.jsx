import { useState } from "react";
import Container from "src/components/Atoms/layout/container/container";
import Filter from "src/components/Molecules/filter/filter";
import ListItems from "src/components/Molecules/listItems/listItems";
import Styles from "/src/components/Organisms/todoListSction/todoListSction.module.css";

const TodoListSction = ({todos, setTodos}) => {
  const [filter, setFilter] = useState('All');
  return (
    <section className={Styles.todoListSction}>
      <Container>
        <Filter setFilter={setFilter} filter={filter}/>
        <ListItems todos={todos} setTodos={setTodos} filter={filter}/>
      </Container>
    </section>
  );
};

export default TodoListSction;
