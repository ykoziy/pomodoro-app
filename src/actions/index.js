import {
  ADJUST_BREAK_LENGTH,
  ADJUST_SESSION_LENGTH,
  SWITCH_STATE,
  PRESS_RESET,
  SWITCH_TYPE,
  SET_START_TIME
} from "../constants/ActionTypes";

export const switchState = (state) => ({type: SWITCH_STATE, state});
