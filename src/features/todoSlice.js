import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, message: "hello world" }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        message: action.payload,
      };
    //   let newar = [];
    //   newar.push(state.todos)
    //   newar.push(todo)
    //   return {
    //     todos :newar
    // }
      state.todos.push(todo);

    },
    removeTodo: (state, action) => {

      state.todos = state.todos.filter((todo) => (todo.id !== action.payload));
      
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { id: todo.id, message: action.payload.text }
          : todo
      );
      
    },
  },
});

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer
