import React from "react";

const SessionPane = ({sessionLen, handleAdjustSession}) => {
    return(
        <div className="session-pane">
            <div id="session-label">Session Length</div>
            <div className="adjust">
              <button id="session-decrement" onClick={handleAdjustSession}>-</button>
              <div id="session-length">{sessionLen}</div>
              <button id="session-increment" onClick={handleAdjustSession}>+</button>
            </div>
        </div>
    );
}

export default SessionPane;
