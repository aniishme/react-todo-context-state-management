import React, { useContext } from "react";
import TodoCard from "./TodoCard";

import { TodoContext } from "../contexts/TodoContext";

function TodoContainer() {
  const [todos] = useContext(TodoContext);

  return (
    <div className="todo__container">
      {todos
        ? todos.map((res) => {
            return <TodoCard todos={res} key={res.key} />;
          })
        : "Loading"}
    </div>
  );
}

export default TodoContainer;
