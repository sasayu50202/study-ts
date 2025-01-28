import { NextPage } from "next";
import { ChangeEventHandler, useState } from "react";
type Todo = {
  id: number;
  label: string;
  isDone: boolean;
};
const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
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

  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
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
            <ListItem todo={todo} toggle={toggle} />
          </li>
        ))}
      </ul>
    </div>
  );
};
type listTodo = {
  todo: Todo;
  toggle: ChangeEventHandler<HTMLInputElement>;
};

const ListItem = ({ todo, toggle }: listTodo) => {
  return (
    <label>
      <input
        type="checkbox"
        value={todo.id}
        checked={todo.isDone}
        onChange={toggle}
      />
      <span>{todo.label}</span>
    </label>
  );
};
export default Home;
