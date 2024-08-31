import modesReducer from "./modes/modesReducer";
import todosReducer from "./todos/todosReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  modesState: modesReducer,
  todosState: todosReducer,
});

export default allReducers;
