import React,{useContext} from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoCard(props) {
  const [todos,setTodos] = useContext(TodoContext);
  const deleteTodo = () =>{
    const newTodos = todos.filter((todo) => {
      return todo.key !== props.todos.key
    })
    setTodos(()=> newTodos)
  } 
  const completeTodo = () =>{
    const newTodos = todos.map((todo)=>{
      if(todo.key === props.todos.key){
         todo.isComplete = todo.isComplete ? false : true
      }
      return todo
    })
    setTodos(()=> newTodos)
  }
  return (
    <div className="todo__card">
      <h3 className={props.todos.isComplete ? "completed" : ""}>{props.todos.title}</h3>
      <div className="actions">
        <button onClick={deleteTodo}>Del</button>
        <button onClick={completeTodo}>Complete</button>
      </div>
    </div>
  );
}

export default TodoCard;
