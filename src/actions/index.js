import {
  ADJUST_BREAK_LENGTH,
  ADJUST_SESSION_LENGTH,
  SWITCH_STATE,
  PRESS_RESET,
  SET_INTERVAL_ID,
  SWITCH_TYPE,
  TICK_TIME
} from "../constants/ActionTypes";

export const switchState = (currentState) => ({type: SWITCH_STATE, currentState});

export const switchType = (sessionType) => ({type: SWITCH_TYPE, sessionType});

export const pressReset = () => ({type: PRESS_RESET});

export const adjustBreakLength = (breakLen) => (
  {type: ADJUST_BREAK_LENGTH, breakLen}
);

export const adjustSessionLength = (sessionLen) => (
  {type: ADJUST_SESSION_LENGTH, sessionLen}
);

export const setIntervalID = (intervalID) => (
  {type: SET_INTERVAL_ID, intervalID}
)
