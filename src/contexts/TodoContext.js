import { createContext, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const localTodos = localStorage.getItem("todos")
  const [todos, setTodos] = useState(localTodos ? JSON.parse(localTodos) : [])
  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
