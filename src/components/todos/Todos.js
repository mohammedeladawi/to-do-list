import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { modeTypes } from "../../store/types";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const allTodos = useSelector((state) => state.todosState.todos);
  const mode = useSelector((state) => state.modesState.mode);
  const activeTodo = useSelector((state) => state.todosState.activeTodo);

  useEffect(() => {
    setTodos(allTodos);
    if (mode === modeTypes.notDone) {
      setTodos((state) => {
        return state.filter((todo) => !todo.done);
      });
    } else if (mode === modeTypes.edit && activeTodo) {
      setTodos([activeTodo]);
    }
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [mode, allTodos, activeTodo]);

  return (
    <div className="todos-list">
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
      {todos.length === 0 ? (
        <h3 className="no-todos">لا يوجد مهام حالية ..</h3>
      ) : null}
    </div>
  );
};

export default Todos;
