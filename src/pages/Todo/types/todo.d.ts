export type Todo = {
  id: number;
  todo: string;
  checked: boolean;
};

export type TodoStorage = {
  id: number;
  todoList: Todo[];
};

export type TodoContextT = {
  todoContext: TodoStorage | null;
  updateTodoContext?: (e?: TodoStorage) => void;
};
