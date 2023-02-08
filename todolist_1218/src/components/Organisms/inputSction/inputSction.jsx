import { useState } from "react";
import Styles from "/src/components/Organisms/inputSction/inputSction.module.css";
import Input from "src/components/Atoms/input/input";
import Container from "src/components/Atoms/layout/container/container";

const InputSction = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState({ key: "", title: "", done: "" });
  const [converting, setConverting] = useState("");
  const getKey = new Date();
  const handleInput = (e) => {
    setTodo({
      key: getKey,
      title: e.target.value,
      done: false,
    });
  };
  const keyHndle = (e) => {
    if (e.key === "Enter" && !converting) {
      if (todo.title === "") {
        return;
      }
      const newTodos = [...todos, todo];
      setTodos(newTodos);
      setTodo({ key: "", title: "", done: "" });
    }
  };
  const inputStyle = {
    width: "100%",
    height: "55px",
  };
  const isConverting = (e) => {
    setConverting(true);
  };
  const isConverted = (e) => {
    setConverting(false);
  };
  const inputProps = {
    placeholder: "Enter to add",
    value: todo.title,
    onChange: handleInput,
    onKeyDown: keyHndle,
    onCompositionStart: isConverting,
    onCompositionEnd: isConverted,
    style: inputStyle,
  };
  return (
    <section className={Styles.inputSction}>
      <Container>
        <div className={Styles.inputInner}>
          <Input inputProps={inputProps} />
        </div>
      </Container>
    </section>
  );
};

export default InputSction;

// 元々はpropsとして、下記のように渡していた。
// inputStyle={inputStyle}
// width={"100%"}
// height={"55px"}
// value={todo.title}
// onChange={handleInput}
// onKeyDown={keyHndle}
// onCompositionStart={(e) => {
//   setConverting(true);
// }}
// onCompositionEnd={(e) => {
//   setConverting(false);
// }}
