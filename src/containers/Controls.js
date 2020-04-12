import React from "react";
import { connect } from 'react-redux'
import { switchState, pressReset } from '../actions'

const Controls = ({children, currentState, switchState, pressReset}) => {
    return (
        <div className="controls-container">
            {children}
            <div className="button-controls">
                {currentState === "stop" && <button id="start_stop" onClick={() => switchState("run")}>START</button>}
                {currentState === "run" && <button id="start_stop" className="active" onClick={() => switchState("stop")}>STOP</button>}
                <button id="reset" onClick={pressReset}>RESET</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentState: state.currentState
});

const mapDispatchToProps = (dispatch) => ({
  switchState: (state) => dispatch(switchState(state)),
  pressReset: () => dispatch(pressReset())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls);
