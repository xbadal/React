import styles from "./footer.module.css";

export default function Footer({ completedCount, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed: {completedCount}</span>
      <span className={styles.item}>Total: {totalTodos}</span>
    </div>
  );
}
