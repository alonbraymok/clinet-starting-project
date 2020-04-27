import { SET_TRAINERS } from "../actions.type/search";

export const setTrainersList = (trainers) => async (dispatch, getState) => {
  dispatch({
    type: SET_TRAINERS,
    payload: trainers,
  });
};
