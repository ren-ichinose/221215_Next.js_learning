import Styles from "/src/components/Atoms/input/input.module.css";

const Input = ({ inputProps }) => {
  return (
    <input
      className={Styles.input}
      type="text"
      {...inputProps}
    />
  );
};

export default Input;

// 元々はporopsを受け取って、下記のように記述していた。
      // placeholder="Enter to add"
      // style={inputStyle}
      // style={{ width: width, height: height }}
      // value={value}
      // onChange={onChange}
      // onKeyDown={onKeyDown}
      // onCompositionStart={onCompositionStart}
      // onCompositionEnd={onCompositionEnd}