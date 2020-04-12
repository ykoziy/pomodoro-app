import {
  ADJUST_BREAK_LENGTH,
  ADJUST_SESSION_LENGTH,
  SWITCH_STATE,
  PRESS_RESET,
  SWITCH_TYPE,
  SET_START_TIME
} from "../constants/actionTypes";

export default (state, action) => {
  switch(action.type) {
    case SWITCH_STATE:
      return {...state, currentState: action.currentState};
    default:
      return state;
  }
};
