import { todoTypes } from "../types";

export const addTodo = (todo) => {
  return {
    type: todoTypes.addTodo,
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: todoTypes.deleteTodo,
    payload: id,
  };
};

export const completeTodo = (id) => {
  return {
    type: todoTypes.completeTodo,
    payload: id,
  };
};

export const setActiveTodo = (todo) => {
  return {
    type: todoTypes.setActive,
    payload: todo,
  };
};

export const editTodo = (title) => {
  return {
    type: todoTypes.editTodo,
    payload: title,
  };
};
