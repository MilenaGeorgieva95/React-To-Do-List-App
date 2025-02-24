import TodoList from "./TodoList";

export default function TodoContainer() {
  return (
    <section className="todo-list-container">
      <h1>Todo List</h1>

      <div className="add-btn-container">
        <button className="btn">+ Add new Todo</button>
      </div>

      <div className="table-wrapper">
        {/* <!-- Todo list table --> */}
        <TodoList />
      </div>
    </section>
  );
}
