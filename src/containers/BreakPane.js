import React from "react";
import { connect } from 'react-redux';
import { adjustBreakLength } from '../actions'

const BreakPane = ({breakLen, currentState, adjustBreakLength}) => {
  
    const onClickAdjust = (event) => {
      if(currentState === "run") {
          return;
      }
      const currId = event.currentTarget.id;
      let currbreakLen = breakLen;
      if(currId.includes("increment") && (currbreakLen < 60)) {
          currbreakLen += 1;
      } else if(currId.includes("decrement") && (currbreakLen > 1)){
          currbreakLen -= 1;
      }
      adjustBreakLength(currbreakLen);
    }

    return(
        <div className="break-pane">
            <div id="break-label">Break Length</div>
            <div className="adjust">
                <button id="break-decrement" onClick={onClickAdjust}>-</button>
                <div id="break-length">{breakLen}</div>
                <button id="break-increment"  onClick={onClickAdjust}>+</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    breakLen: state.breakLen,
    currentState: state.currentState
});

const mapDispatchToProps = (dispatch) => ({
  adjustBreakLength: (breakLen) => dispatch(adjustBreakLength(breakLen))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BreakPane);
