import React, { Component } from "react";
import { connect } from 'react-redux';
import { switchState, pressReset, setIntervalID, switchType, tickTime } from '../actions';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  countDown = () => {
    const {time, sessionType, switchType, tickTime} = this.props;
    if (time === 0) {
      switchType(sessionType);
    } else {
      tickTime();
    }
  }

  handleClick = () => {
    const {currentState, switchState, setIntervalID, intervalID} = this.props;
    if (currentState === "run") {
      switchState("stop");
      clearInterval(intervalID);
      setIntervalID(undefined);
    } else {
      switchState("run");
      let timer = setInterval(this.countDown, 1000);
      setIntervalID(timer);
    }
  }

  render() {
    const {children, currentState, pressReset} = this.props;
    return (
        <div className="controls-container">
            {children}
            <div className="button-controls">
                {currentState === "stop" && <button id="start_stop" onClick={this.handleClick}>START</button>}
                {currentState === "run" && <button id="start_stop" className="active" onClick={this.handleClick}>STOP</button>}
                <button id="reset" onClick={pressReset}>RESET</button>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
    currentState: state.currentState,
    sessionType: state.sessionType,
    intervalID: state.intervalID,
    time: state.time
});

const mapDispatchToProps = (dispatch) => ({
  switchState: (state) => dispatch(switchState(state)),
  pressReset: () => dispatch(pressReset()),
  setIntervalID: (intervalID) => dispatch(setIntervalID(intervalID)),
  switchType: (sessionType) => dispatch(switchType(sessionType)),
  tickTime: () => dispatch(tickTime())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls);
