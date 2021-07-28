import React from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
const Todo = () => {
  return (
    <div>
      <h1>ToDo List</h1>
      <TodoCreate />
      <TodoList />
    </div>
  );
};

export default Todo;
