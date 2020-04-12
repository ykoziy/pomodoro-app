import React from "react";
import { connect } from 'react-redux'
import { switchState } from '../actions'

const Controls = ({children, currentState, switchState, handleResetClick}) => {
    console.log(currentState);
    return (
        <div className="controls-container">
            {children}
            <div className="button-controls">
                {currentState === "stop" && <button id="start_stop" onClick={() => switchState("run")}>START</button>}
                {currentState === "run" && <button id="start_stop" className="active" onClick={() => switchState("stop")}>STOP</button>}
                <button id="reset" onClick={handleResetClick}>RESET</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentState: state.currentState
});

const mapDispatchToProps = (dispatch) => ({
  switchState: (state) => dispatch(switchState(state))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls);
