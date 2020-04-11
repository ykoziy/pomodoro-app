import React from "react";

const Timer = ({ percent, time, type }) => {
  let offset = 564.573 * (1 - percent.toFixed(3));

  const getTime = (seconds) => {
    let min = Math.floor(seconds/60);
    let sec = seconds % 60;
    return (min < 10 ? `0${min}` : `${min}`) + ":" + (sec < 10 ? `0${sec}` : `${sec}`);
  }

  return (
      <div className="timer-container">
          <div id="timer-label">{type}</div>
        <svg className="progress-ring">
          <g className="circle">
              <circle className="lower-layer" r="90" cx="100" cy="100"/>
              <circle className="progress-bar shadow" r="90" cx="100" cy="100" style = {{strokeDashoffset: `${offset}`}}/>
          </g>
          <foreignObject className="text" x="0%" y="0%" width="100%" height="100%">
              <div id="time-left">{getTime(time)}</div>
          </foreignObject>
        </svg>
      </div>
  );
}

export default Timer;
