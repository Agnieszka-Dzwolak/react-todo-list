import PropTypes from "prop-types";

import "./Todo.css";

const Todo = ({ todo, deleteTodo, checkTodo }) => {
  return (
    <li>
      <div className={todo.completed ? "done" : "not-done"}>{todo.text}</div>
      <div>
        <button onClick={() => checkTodo(todo.id)}>
          {todo.completed ? "checked" : "check"}
        </button>
        <button className="delete" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  deleteTodo: PropTypes.func.isRequired,
  checkTodo: PropTypes.func.isRequired,
};

export default Todo;
