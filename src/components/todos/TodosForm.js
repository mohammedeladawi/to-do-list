import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { useDispatch, useSelector } from "react-redux";
import { modeTypes } from "../../store/types";
import changeMode from "../../store/modes/modesActions";
import { addTodo, editTodo } from "../../store/todos/todosActions";

const TodosForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const mode = useSelector((state) => state.modesState.mode);
  const activeTodo = useSelector((state) => state.todosState.activeTodo);
  const dispatch = useDispatch();

  const showUncompleteHandle = () => {
    if (mode === modeTypes.notDone) {
      dispatch(changeMode(modeTypes.add));
    } else {
      dispatch(changeMode(modeTypes.notDone));
    }
  };

  useEffect(() => {
    if (mode === modeTypes.edit && activeTodo) {
      setNewTitle(activeTodo.title);
    }
  }, [mode, activeTodo]);

  const addTodoHandler = () => {
    if (mode !== modeTypes.edit) {
      const newTodo = {
        id: Date.now(),
        title: newTitle,
        done: false,
      };
      dispatch(addTodo(newTodo));
    } else {
      dispatch(editTodo(newTitle));
      dispatch(changeMode(modeTypes.add));
    }
    setNewTitle("");
  };

  let btnString = "إضافة";
  if (mode === modeTypes.edit) {
    btnString = "تعديل ..";
  }

  return (
    <div className="todos-form">
      <div
        className={
          mode === modeTypes.notDone
            ? "todos-form_icon active"
            : "todos-form_icon"
        }
        onClick={mode !== modeTypes.edit ? showUncompleteHandle : null}
      >
        <FeatherIcon icon="circle" />
      </div>
      <div className="todos-form_form">
        <input
          type="text"
          placeholder="اضف مهمة جديدة ..."
          onChange={(event) => setNewTitle(event.target.value)}
          value={newTitle}
        />
      </div>
      <div className="todos-form_submit">
        <button
          className="btn"
          onClick={addTodoHandler}
          disabled={newTitle.trim() ? false : true}
        >
          {btnString}
        </button>
      </div>
    </div>
  );
};

export default TodosForm;
