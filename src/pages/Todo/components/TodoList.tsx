import React, { ReactElement, useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types/todo";

const TodoList = (): ReactElement => {
  const todos = [
    { id: 1, todo: "Todo 1", checked: false },
    { id: 2, todo: "Todo 2", checked: false },
    { id: 3, todo: "Todo 3", checked: false },
    { id: 4, todo: "Todo 4", checked: false },
  ];

  return (
    <div>
      {todos.map((todos) => {
        return (
          <TodoItem id={todos.id} todo={todos.todo} checked={todos.checked} />
        );
      })}
    </div>
  );
};

export default TodoList;
