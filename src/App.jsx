import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="backdrop-blur-md bg-white/20 rounded-2xl py-4">
        <h1 className="text-5xl font-bold font-sans text-pink-600">
          Todo List
        </h1>
        <AddTodo />{" "}
        {/* Added a addTodo component to create todos in the list */}
        <br />
        <Todos /> {/* Added all the todos in list */}
      </div>
    </>
  );
}

export default App;
