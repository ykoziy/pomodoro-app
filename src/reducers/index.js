import {
  ADJUST_BREAK_LENGTH,
  ADJUST_SESSION_LENGTH,
  SWITCH_STATE,
  PRESS_RESET,
  SET_INTERVAL_ID,
  SWITCH_TYPE,
  TICK_TIME
} from "../constants/ActionTypes";

export default (state, action) => {
  switch(action.type) {
    case SWITCH_STATE:
      return {...state, currentState: action.currentState};
    case ADJUST_BREAK_LENGTH:
      return {...state, breakLen: action.breakLen};
    case SET_INTERVAL_ID:
      return {...state, intervalID: action.intervalID}
    case TICK_TIME:
      return {...state, time: state.time - 1};
    case ADJUST_SESSION_LENGTH:
        return {...state, sessionLen: action.sessionLen,
                time: action.sessionLen*60,
                startTime: action.sessionLen*60
              };
    case SWITCH_TYPE:
      if (action.sessionType === "Session") {
        return {...state, sessionType: "Break", time: state.breakLen*60, startTime: state.breakLen*60}
      } else {
        return {...state, sessionType: "Session", time: state.sessionLen*60, startTime: state.sessionLen*60}
      }
    case PRESS_RESET:
      return { breakLen: 5,
              sessionLen: 25,
              time: 1500,
              startTime: 1500,
              sessionType: "Session",
              intervalID: undefined,
              currentState: "stop"
            };
    default:
      return state;
  }
};
