import React from "react";

const BreakPane = ({breakLen, handleAdjustBreak}) => {
    return(
        <div className="break-pane">
            <div id="break-label">Break Length</div>
            <div className="adjust">
                <button id="break-decrement" onClick={handleAdjustBreak}>-</button>
                <div id="break-length">{breakLen}</div>
                <button id="break-increment"  onClick={handleAdjustBreak}>+</button>
            </div>
        </div>
    );
}

export default BreakPane;
