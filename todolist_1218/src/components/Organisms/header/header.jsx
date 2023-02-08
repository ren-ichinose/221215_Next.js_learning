import Styles from "/src/components/Organisms/header/header.module.css"


const Header = () => {
  return (
    <header className={Styles.header}>
        <h1>Todo List</h1>
    </header>
  );
}

export default Header;