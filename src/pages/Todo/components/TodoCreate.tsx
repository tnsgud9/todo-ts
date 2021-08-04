import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoCreate = () => {
  const [state, setState] = useState("");
  const stateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const KeyEventHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "enter") {
      //TODO : create TodoItem;
    }
  };
  return (
    <div>
      <input type="text" onChange={stateChange} onKeyDown={KeyEventHandler} />{" "}
      <button>Create</button>
    </div>
  );
};

export default TodoCreate;
