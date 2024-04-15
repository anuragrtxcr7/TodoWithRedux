import { addTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input != "") {
      dispatch(
        addTodo(input)
      ); /* dispatching payload into reducers for making state change through redux */
      setInput("");
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input /* Enter a todo */
        type="text"
        className="bg-gray-800 m-1 rounded border-2 border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit" /* submit a non-empty todo */
        className="text-white bg-indigo-500 border-2 border-gray-900 m-1 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
