import React, { Component } from "react";
import { connect } from 'react-redux';
import { switchState, pressReset, setIntervalID, switchType, tickTime } from '../actions';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  countDown = () => {
    const {time, sessionType, switchType, tickTime} = this.props;
    if (time === 0) {
      this.audio.currentTime= 0;
      this.audio.play();
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

  handleResetClick = () => {
    const {pressReset, intervalID} = this.props;
    this.audio.pause();
    this.audio.currentTime = 0;
    clearInterval(intervalID);
    pressReset();
  }

  render() {
    const {children, currentState} = this.props;
    return (
        <div className="controls-container">
            {children}
            <div className="button-controls">
                {currentState === "stop" && <button id="start_stop" onClick={this.handleClick}>START</button>}
                {currentState === "run" && <button id="start_stop" className="active" onClick={this.handleClick}>STOP</button>}
                <button id="reset" onClick={this.handleResetClick}>RESET</button>
            </div>
            <audio id="beep" ref={audio => this.audio = audio} preload="auto" src="https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Alarm%20Sounds/137[kb]alarm-synth-verb-hit.wav.mp3" />
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
