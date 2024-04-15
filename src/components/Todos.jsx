import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import IndividualTodo from "./IndividualTodo";

function Todos() {
  const todos = useSelector(
    (state) => state.todos
  ); /* extracted all todos in state from the redux store */

  useEffect(() => {
    /* everytime todos change setting them to local storage */
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <br />
      {todos.map((todo /* mapped through all the todos */) => (
        <div key={todo.id}>
          {" "}
          <IndividualTodo todo={todo} />{" "}
        </div>
      ))}
    </>
  );
}

export default Todos;
