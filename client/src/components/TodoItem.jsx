import styles from "./TodoItem.module.css";

export default function TodoItem({ _id, text, isCompleted, onStatusChange }) {
  const classNames = [styles.todo];
  if (isCompleted) {
    classNames.push(styles["is-completed"]);
  }
  return (
    <>
      <tr className={classNames.join(" ")}>
        <td>{text}</td>
        <td>{isCompleted ? "Complete" : "Incomplete"}</td>
        <td className="todo-action">
          <button className="btn todo-btn" onClick={(e) => onStatusChange(_id)}>
            Change status
          </button>
        </td>
      </tr>
    </>
  );
}

/* <!-- Todo item Incomplete--> */

// <tr className="todo">
//   <td>Vacuum floor</td>
//   <td>Incomplete</td>
//   <td className="todo-action">
//     <button className="btn todo-btn">Change status</button>
//   </td>
// </tr>
