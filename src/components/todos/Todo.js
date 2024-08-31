import React from "react";
import FeatherIcon from "feather-icons-react";
import {
  completeTodo,
  deleteTodo,
  setActiveTodo,
} from "../../store/todos/todosActions";
import { useDispatch, useSelector } from "react-redux";
import changeMode from "../../store/modes/modesActions";
import { modeTypes } from "../../store/types";

const Todo = (props) => {
  const dispatch = useDispatch();
  let { id, title, done } = props.todo;
  const mode = useSelector((state) => state.modesState.mode);

  const handleEditTodo = (todo) => {
    dispatch(setActiveTodo(todo));
    dispatch(changeMode(modeTypes.edit));
  };
  return (
    <div className={done ? "todos-todo done" : "todos-todo "}>
      <div
        className="todos-todo_icon"
        onClick={() => dispatch(completeTodo(id))}
      >
        <FeatherIcon icon={done ? "check-circle" : "circle"} />
      </div>
      <div className="todos-todo_text"> {title} </div>
      <div className="todos-todo_cta">
        {mode !== modeTypes.edit && (
          <>
            <div
              className="todos-todo_cta-edit"
              onClick={() => handleEditTodo(props.todo)}
            >
              <FeatherIcon icon="edit" size="20" />
            </div>
            <div
              className="todos-todo_cta-delete"
              onClick={() => dispatch(deleteTodo(id))}
            >
              <FeatherIcon icon="trash-2" size="20" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
