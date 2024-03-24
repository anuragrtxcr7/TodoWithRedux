
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <h1 className='text-5xl'>Todo List</h1>
      <AddTodo/>
      <br />
      <Todos/>
    </>
  )
}

export default App
