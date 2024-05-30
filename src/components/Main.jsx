import propTypes from "prop-types";
import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";

import "./Main.css";

const Main = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoData) => {
    setTodos((prev) => [todoData, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className="main-container">
      <Form addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
    </div>
  );
};

Main.propTypes = {};

export default Main;
