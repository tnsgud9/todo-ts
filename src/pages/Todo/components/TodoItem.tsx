import React, { useContext, useEffect, useState } from "react";
import { Todo } from "../types/todo";
import styled from "styled-components";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ id, todo, checked }: Todo) => {
  const todoContext = useContext(TodoContext);
  const [checkState, setCheckState] = useState(checked);

  const todoDoneChangeHandler = () => {
    setCheckState(!checked);
    todoContext.action.checkTodo(id, !checked);
    //TODO : 변경시 localStorage update
  };
  const todoRemoveHandler = () => {
    todoContext.action.deleteTodo(id);
  };
  //display: ${(props) => (props.todoRemove ? "none" : "block")};
  const Container = styled.div<{ todoDone: boolean }>`
    text-decoration: ${(props) => (props.todoDone ? "line-through" : "none")};
  `;

  return (
    <Container todoDone={checkState} id={"todo-" + id.toString()}>
      <input
        type="checkbox"
        onChange={todoDoneChangeHandler}
        checked={checkState}
      />
      {todo}
      <button onClick={todoRemoveHandler}>remove</button>
    </Container>
  );
};

export default TodoItem;
