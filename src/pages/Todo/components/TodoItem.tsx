import React, { useContext, useState } from "react";
import { Todo } from "../types/todo";
import styled from "styled-components";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ id, todo, checked }: Todo) => {
  const todoContext = useContext(TodoContext);
  const [todoState, setTodoState] = useState({
    checked: checked,
    removed: false,
  });

  const todoDoneChangeHandler = () => {
    const { checked, removed } = todoState;
    setTodoState({ checked: !checked, removed: removed });
    //TODO : 변경시 localStorage update
  };
  const todoRemoveHandler = () => {
    todoContext.action.deleteTodo(id);
    //TODO: 삭제 될 때 마다 localStorage update
  };

  const Container = styled.div<{ todoRemove: boolean; todoDone: boolean }>`
    display: ${(props) => (props.todoRemove ? "none" : "block")};
    text-decoration: ${(props) => (props.todoDone ? "line-through" : "none")};
  `;

  return (
    <Container
      todoDone={todoState.checked}
      todoRemove={todoState.removed}
      id={"todo-" + id.toString()}
    >
      <input
        type="checkbox"
        onClick={todoDoneChangeHandler}
        checked={todoState.checked}
      />
      {todo}
      <button onClick={todoRemoveHandler}>remove</button>
    </Container>
  );
};

export default TodoItem;
