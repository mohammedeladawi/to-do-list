import { modeTypes } from "../types";

const initialState = {
  mode: modeTypes.add,
};

const modesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default modesReducer;
