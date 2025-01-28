import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const toggle = (e) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === Number(e.target.value)) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
    });
  };

  const input = (e) => {
    setText(e.target.value);
  };

  const add = () => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random(),
          label: text,
          isDone: false,
        },
      ];
    });
    setText("");
  };

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input type="text" value={text} onChange={input} />
        <button onClick={add}>追加</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                value={todo.id}
                checked={todo.isDone}
                onChange={toggle}
              />
              <span>{todo.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
