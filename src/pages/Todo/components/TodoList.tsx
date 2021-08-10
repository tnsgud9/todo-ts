import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoConsumer, TodoContext } from "../context/TodoContext";

const TodoList = React.memo(() => {
  const todoContext = useContext(TodoContext);
  const { state } = useContext(TodoContext);
  console.log("TODOLIST", todoContext);
  return <div>{state.todoContext.id}</div>;
  return (
    <>
      <TodoConsumer>
        {(value) =>
          value.state.todoContext.todoList.map(({ id, todo, checked }) => {
            return <TodoItem id={id} todo={todo} checked={checked} />;
          })
        }
      </TodoConsumer>
      <hr />
      {todoContext.state.todoContext.id}
      <div>
        {todoContext.state.todoContext.todoList.map(({ id, todo, checked }) => {
          return <TodoItem id={id} todo={todo} checked={checked} />;
        })}
      </div>
    </>
  );
});

export default TodoList;
