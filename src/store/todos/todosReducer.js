import { todoTypes } from "../types";

const initLocal = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const initialState = {
  todos: initLocal,
  activeTodo: {},
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoTypes.addTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case todoTypes.deleteTodo:
      return { ...state, todos: getDeleteTodo(state.todos, action.payload) };
    case todoTypes.completeTodo:
      return { ...state, todos: getCompleteTodo(state.todos, action.payload) };
    case todoTypes.setActive:
      return { ...state, activeTodo: action.payload };
    case todoTypes.editTodo:
      return {
        ...state,
        todos: getEditedTodos(state.todos, state.activeTodo.id, action.payload),
      };
    default:
      return state;
  }
};

const getDeleteTodo = (todos, id) => {
  return todos.filter((todo) => todo.id !== id);
};

const getCompleteTodo = (todos, id) => {
  return todos.map((todo) => {
    if (todo.id === id) {
      todo.done = !todo.done;
    }
    return todo;
  });
};

const getEditedTodos = (todos, id, title) => {
  return todos.map((todo) => {
    if (todo.id === id) {
      todo.title = title;
    }
    return todo;
  });
};

export default todosReducer;
