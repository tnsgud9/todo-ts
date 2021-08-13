import React, { useContext, useRef, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoCreate = () => {
  const todoContext = useContext(TodoContext);
  const [state, setState] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const stateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const KeyEventHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      console.log("ENTER PRESSED");
      TodoAdd();
    }
  };
  const TodoAdd = () => {
    if (state == "") {
      inputRef.current?.focus();
      return;
    }
    todoContext.action.addTodo(state);
    setState("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={stateChange}
        onKeyDown={KeyEventHandler}
        value={state}
        ref={inputRef}
        placeholder="할일을 적어주세요."
      />
      <button onClick={TodoAdd}>Create</button>
    </div>
  );
};

export default TodoCreate;
