import Styles from "/src/components/Atoms/layout/container/container.module.css"

// コンテナ：width100%(max800px)

const Container = ({ children, ContainerProps }) => {
  return (
    <div className={Styles.container} {...ContainerProps}>{children}</div>
  );
}

export default Container;