import TodoItem from "./TodoItem";

const todos = ["first, second, third"];

export default function TodoList() {
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
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </tbody>
      </table>
    </>
  );
}
