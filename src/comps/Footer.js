import { useState } from "react";
import Lists from "./Lists";

function Footer({ setTodos, todos, form, setForms }) {
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

  const clearCompleted = () => {};

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={value}
            />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
        </section>
      </section>
    </div>
  );
}

export default Footer;
