import { useState } from "react";
import Lists from "./Lists";

function Forms({ setTodos, todos, form, setForms }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    console.log("x");
    e.preventDefault();

    setTodos([
      ...todos,
      { text: value, completed: false, id: Math.random() * 1000 },
    ]);
    setForms([
      ...form,
      { text: value, completed: false, id: Math.random() * 1000 },
    ]);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const showAll = () => {
    console.log("todo1");

    if (form.length === 0) {
      console.log("olmadi");
    } else {
      {
        todos.map((todo) => {
          console.log(todo);
          return <div key={todos.id}>{todo.text}</div>;
        });
      }
    }

    setTodos(form);
    console.log("todo3");
  };

  const showActive = (e) => {
    e.preventDefault();
    const hellow = form.filter((todo) => todo.completed == false);
    {
      hellow.map((todo) => {
        console.log(todo);
        return <div key={todos.id}>{todo.text}</div>;
      });
    }
    setTodos(hellow);
  };

  const showCompleted = (e) => {
    e.preventDefault();
    const hello = form.filter((todo) => todo.completed == true);

    if (hello.length === 0) {
      console.log("olmadi");
    } else {
      {
        hello.map((todo) => {
          console.log(todo);
          return <div key={todos.id}>{todo}</div>;
        });
      }
    }
    setTodos(hello);
  };

  const clearCompleted = (e, index) => {
    const clear = todos.filter((item) => item.completed != true);
    setTodos(clear);
  };

  return (
    <div>
      <section className="todoapp">
        <footer className="footer">
          <span className="todo-count">
            <strong>{todos.length}</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a onClick={showAll} id="all">
                All
              </a>
            </li>
            <li>
              <a onClick={showActive} id="active">
                Active
              </a>
            </li>
            <li>
              <a onClick={showCompleted} id="completed">
                Completed
              </a>
            </li>
          </ul>

          <button onClick={clearCompleted} className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default Forms;
