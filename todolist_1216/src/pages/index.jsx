import { useState } from "react";
import Head from "next/head";
import Header from "src/componets/header/header";
import AddTasks from "src/componets/addTodo/addTodo";
import TodoList from "src/componets/todoList/todoList";

export default function Home() {
  const [startedTodos, setStartedTodos] = useState([]);
  const [conmpletedTodos, setConmpletedTodos] = useState([
    "React学習",
    "Next.js学習",
    "WEB技術の学習",
  ]);

  const query = {
    startedTodos: startedTodos,
    setStartedTodos: setStartedTodos,
    conmpletedTodos: conmpletedTodos,
    setConmpletedTodos: setConmpletedTodos,
  };

  return (
    <>
      <Head>
        <title>Todoリスト</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header title={"Todoリスト"} />
      <AddTasks startedTodos={startedTodos} setStartedTodos={setStartedTodos} />
      <TodoList
        startedTodos={startedTodos}
        setStartedTodos={setStartedTodos}
        conmpletedTodos={conmpletedTodos}
        setConmpletedTodos={setConmpletedTodos}
      />
      {/* Linkタグでは関数が渡せないようなので、対応方法を検討。
      また、値も保持することが出来ない */}
      {/* <Link href={{ pathname: "/conmpleted", query: query }} as="/conmpleted">
        <button>Todoリスト(完了)</button>
      </Link> */}
    </>
  );
}
