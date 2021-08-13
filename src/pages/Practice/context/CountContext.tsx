import { createContext, useState } from "react";
import { JsxEmit } from "typescript";

type CountContextType = {
  count: number[];
  plusCount: (n: number) => void;
};

const CountContext = createContext<CountContextType>({
  count: [0],
  plusCount: () => ({}),
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const CountProvider = ({ children }: Props): JSX.Element => {
  const [count, setCount] = useState([0, 1, 2, 3]);
  const plusCount = (n: number) => {
    setCount(count.concat(n));
    console.log(count);
  };
  return (
    <CountContext.Provider value={{ count, plusCount }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
export type { CountContextType };
