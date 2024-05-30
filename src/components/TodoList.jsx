import PropTypes from "prop-types";

import Todo from "./Todo";

import "./TodoList.css";

const TodoList = ({ todos, deleteTodo, checkTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  checkTodo: PropTypes.func.isRequired,
};

export default TodoList;
