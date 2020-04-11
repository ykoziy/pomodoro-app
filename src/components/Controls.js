import React from "react";

const Controls = ({children, currentState, handleStartClick, handleStopClick, handleResetClick}) => {
    return (
        <div className="controls-container">
            {children}
            <div className="button-controls">
                {currentState === "stop" && <button id="start_stop" onClick={handleStartClick}>START</button>}
                {currentState === "run" && <button id="start_stop" className="active" onClick={handleStopClick}>STOP</button>}
                <button id="reset" onClick={handleResetClick}>RESET</button>
            </div>
        </div>
    );
}

export default Controls;
