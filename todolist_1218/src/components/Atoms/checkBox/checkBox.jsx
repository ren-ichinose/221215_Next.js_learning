import Styles from "/src/components/Atoms/checkBox/checkBox.module.css";

const CheckBox = ({ checkBoxProps }) => {
  return (
    <input
    type="checkBox"
    className={Styles.checkBox}
    {...checkBoxProps}
    />
  );
};

export default CheckBox;

// 元々は個別でpropsを受け取り、下記のようにタグの中に記述してい。
      // style={{width: width, height: height}}
      // onChange={onChange}
      // name={checkBoxName}
      // value={checkBoxValue}