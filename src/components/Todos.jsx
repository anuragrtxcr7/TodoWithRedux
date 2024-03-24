import React from 'react'
import { useSelector} from 'react-redux'
import IndividualTodo from './IndividualTodo'

function Todos() {
    const todos = useSelector(state => state.todos)

  return (
    <>
    {todos.map((todo) => <div key={todo.id}> <IndividualTodo todo = {todo}/> </div>)}
    </>
  )
}

export default Todos