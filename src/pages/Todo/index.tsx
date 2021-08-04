import React, { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import { Todo } from "./types/todo";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
const TodoIndex = () => {
  return (
    <div>
      <h1>ToDo List</h1>
      <TodoCreate />
      <TodoList />
    </div>
  );
};

export default TodoIndex;
