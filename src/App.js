import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./comps/Footer";
import Forms from "./comps/Forms";
import Lists from "./comps/Lists";

function App() {
  const [todos, setTodos] = useState([]);
  const [form, setForms] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);


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
