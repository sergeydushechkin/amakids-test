import {Dispatch} from "redux";

interface Action {
  type: string;
  payload: string;
}

interface State {
  test: string;
}

const initialState:State = {
  test: ``
};

const ActionType = {
  TEST: `TEST`,
};

const ActionCreator = {
  loadCars: (data: string):Action => ({
    type: ActionType.TEST,
    payload: data,
  }),
};

const reducer = (state = initialState, action: Action):State => {
  switch (action.type) {
    case ActionType.TEST:
      return Object.assign({}, state, {test: action.payload});
      break;
  }

  return state;
};

export {reducer, ActionCreator, ActionType, State};
