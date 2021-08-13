import { createContext, MouseEventHandler, useContext, useState } from "react";
import { CountContext } from "../context/CountContext";

const CountCreate = () => {
  const context = useContext(CountContext);
  const [state, setState] = useState(0);
  return (
    <>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setState(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          context.plusCount(state);
        }}
      >
        submit
      </button>
    </>
  );
};
export default CountCreate;
