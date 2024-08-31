import { modeTypes } from "../types";

const changeMode = (mode) => {
  return {
    type: modeTypes.changeMode,
    payload: mode,
  };
};

export default changeMode;
