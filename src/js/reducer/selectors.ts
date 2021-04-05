import {State} from "./reducer";

const getTest = (state: State):string => {
  return state.test;
};

export {getTest};
