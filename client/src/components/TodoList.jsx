import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import Spinner from "./Spinner";

const todos = ["first, second, third"];

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const url = "http://localhost:3030/jsonstore/todos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsPending(false);
        setTodos(Object.values(data));
      })
      .catch((err) => console.log(err.message));
  }, []);

  if (isPending) {
    return <Spinner />;
  }

  const statusChangeHandler = (todoId) => {
    // setTodos((oldTodos) => {
    //   const updatedTodo = oldTodos.find((todo) => todo._id === todoId);
    //   if (updatedTodo) {
    //     updatedTodo.isCompleted = !updatedTodo.isCompleted;
    //   }
    //   return [...oldTodos];
    // });

    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo._id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

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
              _id={todo._id}
              text={todo.text}
              isCompleted={todo.isCompleted}
              onStatusChange={statusChangeHandler}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
