import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleClick(item) {
    setTodos(todos.filter((todo) => todo != item));
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}{" "}
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleClick(item)}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
