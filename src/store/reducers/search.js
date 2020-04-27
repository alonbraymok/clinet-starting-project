import { SET_TRAINERS } from "../actions.type";

const INITIAL_STATE = {
  trainers: [],
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TRAINERS:
      return { ...state, trainers: action.payload };

    default:
      break;
  }
  return state;
};

export default searchReducer;
