import React, { Component } from "react";

import Timer from "./Timer.js";
import Controls from "../containers/Controls.js";
import BreakPane from "./BreakPane.js";
import SessionPane from "./SessionPane.js";

class PomodoroClock extends Component {
  constructor(props) {
    super(props);
    this.barRef = React.createRef();
    this.state = {
        breakLen: 5,
        sessionLen: 25,
        time: 1500,
        startTime: 1500,
        type: "Session",
        currentState: "stop"
    }
  }

  countDown = () => {
      let secs = this.state.time;
      if(secs === 0) {
          this.audio.play();
          if(this.state.type === "Session") {
              this.setState({
                  time: this.state.breakLen*60,
                  startTime: this.state.breakLen*60,
                  type: "Break",
              });
          } else {
              this.setState({
                  time: this.state.sessionLen*60,
                  startTime: this.state.sessionLen*60,
                  type: "Session",
              });
          }
      } else {
          this.setState({
              time: secs -= 1
          });
      }
  }

  handleStartClick = (event) => {
      this.setState({
          currentState: "run",
      });
      this.timer = setInterval(this.countDown, 1000);
  }

  handleStopClick = (event) => {
      clearInterval(this.timer)
      this.setState({
          currentState: "stop"
      });
  }

  handleResetClick = (event) => {
      clearInterval(this.timer)
      this.setState({
          breakLen: 5,
          sessionLen: 25,
          time: 1500,
          startTime: 1500,
          type: "Session",
          currentState: "stop"
      });
      this.audio.pause();
      this.audio.currentTime = 0;
  }

  handleAdjustBreak = (event) => {
      if(this.state.currentState === "run") {
          return;
      }
      let currId = event.currentTarget.id;
      let currbreakLen = this.state.breakLen;
      if(currId.includes("increment") && (currbreakLen < 60)) {
          currbreakLen += 1;
      } else if(currId.includes("decrement") && (currbreakLen > 1)){
          currbreakLen -= 1;
      }
      this.setState({
          breakLen: currbreakLen
      });

  }

  handleAdjustSession = (event) => {
      if(this.state.currentState === "run") {
          return;
      }
      let currId = event.currentTarget.id;
      let currSessionLen = this.state.sessionLen;
      if(currId.includes("increment") && (currSessionLen < 60)) {
          currSessionLen += 1;
      } else if(currId.includes("decrement") && (currSessionLen > 1)){
          currSessionLen -= 1;
      }
      this.setState({
          sessionLen: currSessionLen,
          time: currSessionLen*60,
          startTime: currSessionLen*60,
      });
  }

  render() {
    return(
      <React.Fragment>
          <div className="pomodoro-clock">
              <Timer percent={this.state.time/this.state.startTime} time={this.state.time} type={this.state.type} currentState={this.state.currentState}/>
              <Controls>
                  <BreakPane breakLen={this.state.breakLen} handleAdjustBreak={this.handleAdjustBreak}/>
                  <SessionPane sessionLen={this.state.sessionLen} handleAdjustSession={this.handleAdjustSession}/>
              </Controls>
          </div>
          <audio id="beep" ref={audio => this.audio = audio} preload="auto" src="https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Alarm%20Sounds/137[kb]alarm-synth-verb-hit.wav.mp3" />
      </React.Fragment>
    );
  }
}

export default PomodoroClock;
