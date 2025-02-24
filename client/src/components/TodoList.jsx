import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const todos = ["first, second, third"];

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3030/jsonstore/todos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodos(Object.values(data)))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="table-header-task">Task</th>
            <th className="table-header-status">Status</th>
            <th className="table-header-action">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoItem
              key={todo._id}
              text={todo.text}
              isCompleted={todo.isCompleted}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
