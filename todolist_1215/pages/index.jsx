import { useState } from "react";
import Head from "next/head";
import Header from "components/header/header";
import Layout from "components/layout/layout";
import CompletedTasks from "components/completedTasks/completedTasks";
import StartedTasks from "components/startedTasks/startedTasks";
import AddTask from "components/addTask/addTask";

export default function Home() {
  const [startedTasks, setStartedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addStartedTask = (newStartedTask) => {
    const newStartedTasks = [...startedTasks, newStartedTask];
    setStartedTasks(newStartedTasks);
  };

  const startedTaskDelete = (index) => {
    alert("本当に削除しますか？");
    const newStartedTasks = [...startedTasks];
    newStartedTasks.splice(index, 1);
    setStartedTasks(newStartedTasks);
  };

  const startedTaskCompleted = (index) => {
    alert("タスクを完了しますか？");
    const newStartedTasks = [...startedTasks];
    newStartedTasks.splice(index, 1);
    const newCompletedTasks = [...completedTasks, startedTasks[index]];
    setStartedTasks(newStartedTasks);
    setCompletedTasks(newCompletedTasks);
  };

  const CompletedTaskBack = (index) => {
    alert("タスクを戻しますか？");
    const newStartedTasks = [...startedTasks, completedTasks[index]];
    const newCompletedTasks = [...completedTasks]
    newCompletedTasks.splice(index,1);
    setStartedTasks(newStartedTasks);
    setCompletedTasks(newCompletedTasks);
  }


  return (
    <>
      <Head>
        <title>ToDoリスト</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout>
        <AddTask startedTasks={addStartedTask} />
        <StartedTasks
          startedTasks={startedTasks}
          startedTaskDelete={startedTaskDelete}
          startedTaskCompleted={startedTaskCompleted}
        />
        <CompletedTasks completedTasks={completedTasks} CompletedTaskBack={CompletedTaskBack}/>
      </Layout>
    </>
  );
}
