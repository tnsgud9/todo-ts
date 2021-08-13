import { useEffect } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

const TodoIndex = () => {
  return (
    <>
      <TodoProvider>
        <h1>ToDo List</h1>
        <TodoCreate />
        <TodoList />
      </TodoProvider>
    </>
  );
};

export default TodoIndex;
