import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo != item));
  }

  function handleClick(item) {
    setTodos(
      todos.map((todo) =>
        todo.name === item.name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const isDone = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={isDone} onClick={() => handleClick(item)}>
          {" "}
          {item.name}
        </span>

        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item)}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
