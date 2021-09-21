import React, { useState, useContext,useEffect } from "react";
import axios from "axios";
import { TodoContext } from "../contexts/TodoContext";

import randomstring from "randomstring"

axios.defaults.baseURL = "http://localhost:8000/api/";

function InputBox() {
  const [todo, setTodo] = useState("");
  const [todos,setTodos] = useContext(TodoContext);
  const key = randomstring.generate(9)
  const clickHandler=()=>{
    setTodos([...todos,{title:todo,isComplete:false,key:key}],)
    setTodo("")
  }
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  return (
    <div className="input__container">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
        placeholder="Enter your todos here..."
      />
      <button className="add__button" onClick={clickHandler}>
        +
      </button>
    </div>
  );
}

export default InputBox;
