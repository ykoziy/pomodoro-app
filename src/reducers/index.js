import {
  ADJUST_BREAK_LENGTH,
  ADJUST_SESSION_LENGTH,
  SWITCH_STATE,
  PRESS_RESET,
  SWITCH_TYPE,
  SET_START_TIME
} from "../constants/ActionTypes";

export default (state, action) => {
  switch(action.type) {
    case SWITCH_STATE:
      return {...state, currentState: action.currentState};
    case PRESS_RESET:
      return { breakLen: 5,
              sessionLen: 25,
              time: 1500,
              startTime: 1500,
              type: "Session",
              currentState: "stop"
            };
    default:
      return state;
  }
};
