import { createContext, Dispatch, SetStateAction, useState } from "react";
import { TodoStorage } from "../types/todo";

type TodoContextType = {
  state: { todoContext: TodoStorage };
  action: {
    addTodo: (text: string) => void;
    deleteTodo: (id: number) => void;
    checkTodo: (id: number, check: boolean) => void;
  };
};

//#region TodoContext
const TodoContext = createContext<TodoContextType>({
  state: { todoContext: { id: 0, todoList: [] } },
  action: {
    addTodo: (text: string) => ({}),
    deleteTodo: (id: number) => ({}),
    checkTodo: (id: number, check: boolean) => ({}),
  },
});
//#endregion

//#region TodoProvider
interface Props {
  children: JSX.Element | JSX.Element[];
}
const TodoProvider = ({ children }: Props): JSX.Element => {
  console.log("TodoProvider Created.");
  const [todoContext, setTodoContext] = useState(initProviderTodoContext);
  const addTodo = (text: string): void => {
    const context = Object.assign({}, todoContext);
    context.todoList.push({
      id: context.id++,
      todo: text,
      checked: false,
    });
    localStorage.setItem("Todos", JSON.stringify(context));
    setTodoContext(context);
  };

  //TODO: Need fixed deleteTodo
  //      has trouble delete array
  const deleteTodo = (id: number): void => {
    const context = Object.assign({}, todoContext);
    context.todoList.forEach((e, i) => {
      if (e.id === id) {
        context.id--;
        context.todoList.splice(i, 1);
        localStorage.setItem("Todos", JSON.stringify(context));
        setTodoContext(context);
        return;
      }
    });
    console.log("Delete todo did not found.");
  };

  const checkTodo = (id: number, check: boolean): void => {
    const context = Object.assign({}, todoContext);
    context.todoList.forEach((e) => {
      if (e.id === id) {
        e.checked = check;
        localStorage.setItem("Todos", JSON.stringify(context));
        setTodoContext(context);
        return;
      }
    });
    console.log("Delete todo did not found.");
  };
  const value: TodoContextType = {
    state: { todoContext: todoContext },
    action: { addTodo: addTodo, deleteTodo: deleteTodo, checkTodo: checkTodo },
  };
  console.log("value", value);
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

//#region Todo Consumer
const TodoConsumer = TodoContext.Consumer;
//#endregion

//#region other
const initProviderTodoContext = (): TodoStorage => {
  const storage = localStorage.getItem("Todos");
  if (storage === null) {
    localStorage.setItem("Todos", JSON.stringify(ExampleTodoList));
    return ExampleTodoList;
  }
  return JSON.parse(storage);
}; // get Provider todoContext

const ExampleTodoList: TodoStorage = {
  id: 4,
  todoList: [
    { id: 0, todo: "Todo 1", checked: false },
    { id: 1, todo: "Todo 2", checked: false },
    { id: 2, todo: "Todo 3", checked: false },
    { id: 3, todo: "Todo 4", checked: false },
  ],
};
//#endregion

export { TodoContext, TodoProvider, TodoConsumer };
