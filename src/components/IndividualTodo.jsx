import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkTodo, removeTodo } from "../features/todoSlice";
import { updateTodo } from "../features/todoSlice";

function IndividualTodo({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState();
  const [isChecked, setIsChecked] = useState();

  const [newMessage, setNewMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    /* Whenever todos change, changing settings to current todo */
    setNewMessage(todo.message);
    setIsTodoEditable(false);
    setIsChecked(todo.checked);
  }, [todo]);

  return (
    <li
      className=" flex flex-wrap justify-center items-center px-3 rounded"
      key={todo.id}
    >
      <div className="mx-5 flex justify-center">
        <input /* input checkbox */
          type="checkbox"
          className="px-2 mr-5 w-7 "
          checked={isChecked}
          onChange={(e) => {
            dispatch(checkTodo(todo.id));
          }}
          disabled={
            isTodoEditable
          } /* will be disabled whenever we are editing a todo */
        />
        <input /* input text in each todo*/
          className="bg-slate-800 text-white px-3 rounded p-2 border-2 border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 leading-8 transition-colors duration-200 ease-in-out"
          style={
            isChecked /* will be striken through whenever checkbox is checked */
              ? {
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                  textDecorationThickness: "5px",
                  textDecorationStyle: "double",
                }
              : null
          }
          value={newMessage}
          disabled={
            isTodoEditable === false
          } /* will be disabled whenever we are not editing a todo */
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        />
      </div>
      <div className="text-white flex flex-wrap justify-end p-1 mr-14">
        <button /* Delete Button */
          className="text-white bg-red-500 border-2 gg1 items-center border-slate-900 py-1 px-4 m-2 focus:outline-none hover:bg-red-600 rounded text-md"
          onClick={() => {
            dispatch(removeTodo(todo.id));
          }}
        >
          <i className="fa fa-trash"></i>
        </button>
        <button /* Edit Button */
          onClick={(e) => setIsTodoEditable(true)}
          className="text-white bg-red-500 border-2 gg2 items-center border-slate-900 py-1 px-3 m-2 focus:outline-none hover:bg-red-600 rounded text-md"
          hidden={
            isChecked || isTodoEditable
          } /* will be hidden when todo is either checked or is editable */
        >
          <i className="fa fa-edit"></i>
        </button>
        <button /* Save Button */
          onClick={(e) => {
            setIsTodoEditable(false);
            dispatch(updateTodo({ id: todo.id, text: newMessage }));
          }}
          className="text-white bg-red-500 border-2 items-center gg3 border-slate-900 py-1 px-4 m-2 focus:outline-none hover:bg-red-600 rounded text-md"
          hidden={!isTodoEditable}
          disabled={
            newMessage.trim() === ""
          } /* will npt be save if trying an empty string */
        >
          <i className="fa fa-save"></i>
        </button>
      </div>
    </li>
  );
}

export default IndividualTodo;
