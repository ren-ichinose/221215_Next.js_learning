import styles from "components/header/header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>My Todo List</h1>
      </header>
    </>
  );
};

export default Header;
