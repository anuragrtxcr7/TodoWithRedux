import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todoSlice";

export const store = configureStore({
  /* configured a store where all the reducers will be stored */
  reducer: todoSlice /* specified the reducer to the store */,
});
