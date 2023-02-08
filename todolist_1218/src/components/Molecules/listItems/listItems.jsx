import CheckBox from "src/components/Atoms/checkBox/checkBox";
import Styles from "/src/components/Molecules/listItems/listItems.module.css";

const ListItems = ({ todos, setTodos, filter}) => {
  const handleChange = (e) => {
    const newTodos = todos.map((todo) => {
      if (todo.key == e.target.value) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const displayItems = todos.filter((todo) => {
    if(filter === "All") return true;
    if(filter === "Todo") return !todo.done;
    if(filter === "Done") return todo.done;
  })
  return (
    <ul>
      {displayItems.map((todo) => {
        const checkBoxStyle = { 
          width: "20px", height: "20px" 
        };
        const checkBoxProps = {
          style: checkBoxStyle,
          onChange: handleChange,
          name: "key",
          value: todo.key,
        };
        return (
          <li key={todo.key}>
            <label className={Styles.listItem}>
              <CheckBox checkBoxProps={checkBoxProps} />
              <p
                className={
                  todo.done && filter === "All" ? Styles.listItemTextGray : Styles.listItemText
                }
              >
                {todo.title}
              </p>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItems;

// 元々はpropsとして、下記のように渡していた。
// checkBoxStyle={checkBoxStyle}
// checkBoxName={"key"}
// checkBoxValue={todo.key}
// onChange={handleChange}
