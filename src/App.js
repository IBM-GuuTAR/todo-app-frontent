import { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch todos");
        return res.json();
      })
      .then((data) => setTodos(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

    // try {
    console.log(todos[5].title);
    // } catch (e) {
    //   console.error(e);
    // }
  }, []);

  console.log(todos);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <p>Todo Application</p>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>
            {todo.id}. {todo.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
