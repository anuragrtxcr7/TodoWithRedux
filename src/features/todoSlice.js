import { createSlice, nanoid } from "@reduxjs/toolkit";

let g1;

(function getLocalStorage() {
  /* got items from localStorage */
  g1 = JSON.parse(localStorage.getItem("todos"));
})(); // IFFE --> Immediately Invoked Function Expression

const initialState = {
  todos: g1 ? g1 : [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      /* creation of individual todo function */
      const todo = {
        id: nanoid(),
        message: action.payload,
      };
      state.todos.push(
        todo
      ); /* Pushing a new todo with message = action.payload to the todos state  */
    },
    removeTodo: (state, action) => {
      /* removal of todo function */
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      ); /* filtering out all todos which dont equal the removal todo id */
    },
    updateTodo: (state, action) => {
      /* updation of todo function */
      state.todos = state.todos.map(
        (todo /* updating todo having id == id given by payload */) =>
          todo.id === action.payload.id
            ? { id: todo.id, message: action.payload.text }
            : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
