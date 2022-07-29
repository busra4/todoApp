import React from "react";

function Lists({ todos, setTodos, todo, setForms, form }) {
  const isCompleted = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
    setForms(
      form.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const removeTask = (index) => {
    const newTasks = [...todos];
    newTasks.splice(index, 1);
    setTodos(newTasks);
    setForms(newTasks);
  };

  const toggleTask = (id) => {
    const newTasks = [...todos];
    if (newTasks[id].completed) {
      newTasks[id].completed = false;
    } else {
      newTasks[id].completed = true;
    }
    setTodos(newTasks);
    setForms(newTasks);
    console.log("deneme");
  };

  return (
    <div className="main">
      <ul className="todo-list">
        {todos.map((item, idx) => (
          <li key={idx} className={item.completed ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={() => {
                  isCompleted();
                  toggleTask(idx);
                }}
              />
              <label>{item.text}</label>
              <button
                id={todo.id}
                className="destroy"
                onClick={() => removeTask(idx)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lists;

/* 
        <li key={todo.id} className={todo.completed ? "completed": "" } > 
         <div className='view' > 
          <input type="checkbox" className='toggle' onClick={isCompleted}  />
         <label  > {todo.text} </label> 
         <button className='destroy' onClick={deleteItem}></button>
          </div>


          onClick={isCompleted}

          onClick={() => toggleTask(idx)}
        </li>*/
