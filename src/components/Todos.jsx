import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import IndividualTodo from "./IndividualTodo";

function Todos() {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          {" "}
          <IndividualTodo todo={todo} />{" "}
        </div>
      ))}
    </>
  );
}

export default Todos;
