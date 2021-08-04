export type Todo = {
  id: number;
  todo: string;
  checked: boolean;
};

export type TodoStorage = {
  id: number;
  todoList: todo[];
};
