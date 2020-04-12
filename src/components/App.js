import React from "react";
import './App.scss';

import Timer from "../containers/Timer.js";
import Controls from "../containers/Controls.js";
import BreakPane from "../containers/BreakPane.js";
import SessionPane from "../containers/SessionPane.js";

const App = () => (
  <React.Fragment>
    <h1>Pomodoro Clock</h1>
    <div className="pomodoro-clock">
      <Timer />
      <Controls>
        <BreakPane />
        <SessionPane />
      </Controls>
    </div>
  </React.Fragment>
);

export default App;
