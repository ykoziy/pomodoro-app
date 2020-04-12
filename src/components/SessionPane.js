import React from "react";
import { connect } from 'react-redux';
import { adjustSessionLength } from '../actions'

const SessionPane = ({sessionLen, currentState, adjustSessionLength}) => {

    const onClickAdjust = (event) => {
      if(currentState === "run") {
          return;
      }
      let currId = event.currentTarget.id;
      let currSessionLen = sessionLen;
      if(currId.includes("increment") && (currSessionLen < 60)) {
          currSessionLen += 1;
      } else if(currId.includes("decrement") && (currSessionLen > 1)){
          currSessionLen -= 1;
      }
      adjustSessionLength(currSessionLen);
    }

    return(
        <div className="session-pane">
            <div id="session-label">Session Length</div>
            <div className="adjust">
              <button id="session-decrement" onClick={onClickAdjust}>-</button>
              <div id="session-length">{sessionLen}</div>
              <button id="session-increment" onClick={onClickAdjust}>+</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    sessionLen: state.sessionLen,
    currentState: state.currentState
});

const mapDispatchToProps = (dispatch) => ({
  adjustSessionLength: (sessionLen) => dispatch(adjustSessionLength(sessionLen))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionPane);
