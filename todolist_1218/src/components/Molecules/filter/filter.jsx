import Styles from "/src/components/Molecules/filter/filter.module.css";

const Filter = ({ setFilter, filter }) => {
  const filterTitle = ["All", "Todo", "Done"];
  const ButtunHandle = (e) => {
    setFilter(e.target.value);
  };
  return (
    <ul className={Styles.filter}>
      {filterTitle.map((title) => {
        return (
          <li key={title}>
            <button
              className={
                title === filter ? Styles.listItemRed : Styles.listItem
              }
              value={title}
              onClick={ButtunHandle}
            >
              {title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Filter;
