import React from "react";
import "./styles/style.css";

import InputBox from "./components/InputBox";
import TodoContainer from "./components/TodoContainer";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="app">
        
        <InputBox />
        <TodoContainer />
      </div>
    </TodoProvider>
  );
}

export default App;
