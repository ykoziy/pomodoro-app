import React, { Component } from "react";
import { connect } from "react-redux";

function withSessionType(WrappedComponent, sessionType) {
  class HocComponent extends Component {

    onClickAdjust = (event) => {
      if(this.props.currentState === "run") {
          return;
      }
      const currId = event.currentTarget.id;
      let currentSessionAdjust = this.props.timeDuration;
      if(currId.includes("increment") && (currentSessionAdjust < 60)) {
          currentSessionAdjust += 1;
      } else if(currId.includes("decrement") && (currentSessionAdjust > 1)){
          currentSessionAdjust -= 1;
      }
      this.props.adjustTimeDuration(currentSessionAdjust);
    }

    onInput = (event) => {
      let { value, min, max } = event.target;
      value = Math.max(Number(min), Math.min(Number(max), Number(value)));
      this.props.adjustTimeDuration(value);
    }

    render() {
      const { timeDuration } = this.props;
      return(
          <div className={`${sessionType}-pane`}>
              <div id={`${sessionType}-label`}>Session Length</div>
              <div className="adjust">
                <button id={`${sessionType}-decrement`} onClick={this.onClickAdjust}>-</button>
                <input id={`${sessionType}-length`} type="number" size="2" min="1" max="60" value={timeDuration} onChange={this.onInput}/>
                <button id={`${sessionType}-increment`} onClick={this.onClickAdjust}>+</button>
              </div>
          </div>
      );
    }
  }

  const mapStateToProps = (state) => ({
      currentState: state.currentState
  });

  return connect(
      mapStateToProps
  )(HocComponent);
}

export default withSessionType;
