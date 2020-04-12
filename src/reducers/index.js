import {
  ADJUST_BREAK_LENGTH,
  ADJUST_SESSION_LENGTH,
  SWITCH_STATE,
  PRESS_RESET,
  SET_INTERVAL_ID,
  SWITCH_TYPE,
  SET_TIME,
  SET_START_TIME
} from "../constants/ActionTypes";

export default (state, action) => {
  switch(action.type) {
    case SWITCH_STATE:
      return {...state, currentState: action.currentState};
    case ADJUST_BREAK_LENGTH:
      return {...state, breakLen: action.breakLen};
    case SET_INTERVAL_ID:
      return {...state, intervalID: action.intervalID}
    case ADJUST_SESSION_LENGTH:
        return {...state, sessionLen: action.sessionLen,
                time: action.sessionLen*60,
                startTime: action.sessionLen*60
              };
    case SWITCH_TYPE:
      if (action.type === "Session") {
        return {...state, type: "Break", time: state.breakLen*60, startTime: state.breakLen*60}
      } else {
        return {...state, type: "Session", time: state.sessionLen*60, startTime: state.sessionLen*60}
      }
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
