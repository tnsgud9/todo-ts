import React from "react";
import { createContext, useContext, useEffect } from "react";
import { CountContext } from "../context/CountContext";

const CountView = () => {
  const { count } = useContext(CountContext);
  useEffect(() => {
    console.log("component did mount with useEffect!");
  }, [count]);
  const countList = count.map((n: number) => <div>{n}</div>);
  return <div>{countList}</div>;
};
export default React.memo(CountView);
