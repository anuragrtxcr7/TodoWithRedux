import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from "../features/todoSlice";

import IndividualTodo from './IndividualTodo'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

  return (
    <>
    {todos.map((todo) => <div key={todo.id}> <IndividualTodo todo = {todo}/> </div>)}
    </>
  )
}

export default Todos