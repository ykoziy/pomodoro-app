import React, { Component } from "react";
import { connect } from 'react-redux';
import { switchState, pressReset } from '../actions';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const {currentState, switchState} = this.props
    if (currentState === "run") {
      switchState("stop");
    } else {
      switchState("run");
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
