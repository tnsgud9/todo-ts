import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoConsumer, TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const todoContext = useContext(TodoContext);
  const todoList = todoContext.state.todoContext.todoList.map(
    ({ id, todo, checked }) => (
      <TodoItem id={id} todo={todo} checked={checked} />
    )
  );
  return <>{todoList}</>;
};

export default TodoList;
