import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";
import { updateTodo } from "../features/todoSlice";

function IndividualTodo({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState();
  const [newMessage, setNewMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setNewMessage(todo.message);
    setIsTodoEditable(false);
  }, [todo]);

  return (
    <div
      className=" flex flex-wrap justify-center items-center px-3 rounded"
      key={todo.id}
    >
      <div className="mx-5 flex justify-center">
        <input
          className="bg-slate-800 text-white px-2 rounded-xl p-2"
          value={newMessage}
          disabled={isTodoEditable === false}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        />
      </div>
      <div className="text-white flex flex-wrap justify-end p-1">
        <button
          className="text-white bg-red-500 border-2 gg1 items-center border-slate-900 py-1 px-4 m-2 focus:outline-none hover:bg-red-600 rounded text-md"
          onClick={() => {
            dispatch(removeTodo(todo.id));
          }}
        >
          <i class="fa fa-trash"></i>
        </button>
        <button
          onClick={(e) => setIsTodoEditable(true)}
          className="text-white bg-red-500 border-2 gg2 items-center border-slate-900 py-1 px-3 m-2 focus:outline-none hover:bg-red-600 rounded text-md"
          hidden={isTodoEditable}
        >
          <i class="fa fa-edit"></i>
        </button>
        <button
          onClick={(e) => {
            setIsTodoEditable(false);
            dispatch(updateTodo({ id: todo.id, text: newMessage }));
          }}
          className="text-white bg-red-500 border-2 items-center gg3 border-slate-900 py-1 px-4 m-2 focus:outline-none hover:bg-red-600 rounded text-md"
          hidden={!isTodoEditable}
        >
          <i class="fa fa-save"></i>
        </button>
      </div>
    </div>
  );
}

export default IndividualTodo;
