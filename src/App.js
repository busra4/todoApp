import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Forms";
import TodoList from "./components/TodoList";
import Footer from "./comps/Footer";
import Forms from "./comps/Forms";
import Lists from "./comps/Lists";

function App() {
  const [todos, setTodos] = useState([]);
  const [form, setForms] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // console.log(Object.keys(todos));
  // console.log(status);
  // const deleteToDo=

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filterHandler();
  }, [todos, status]);

  return (
    <div className="todoapp">
      <Footer
        setTodos={setTodos}
        todos={todos}
        form={form}
        setForms={setForms}
      />

      <Lists
        status={status}
        key={todos.id}
        todo={todos}
        text={todos.text}
        todos={todos}
        setTodos={setTodos}
        form={form}
        setForms={setForms}
      />
      <Forms
        setTodos={setTodos}
        todos={todos}
        form={form}
        setForms={setForms}
      />
    </div>
  );
}

export default App;

/*  <Form todos={todos} setTodos={setTodos} todo={todos.todo}/>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoList
          status={status}
          key={todo.id}
          todo={todo}
          text={todo.text}
          todos={todos}
          setTodos={setTodos}
          />
          ))}
      </ul>
     
          <Footer
          status= {status}
          setStatus={setStatus}
          todos={todos}
          setTodos={setTodos}
          />*/
