import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App';
import rootReducer from './reducers';

import * as serviceWorker from './serviceWorker';

const initialState = {
  breakLen: 5,
  sessionLen: 25,
  time: 1500,
  startTime: 1500,
  sessionType: "session",
  currentState: "stop",
  intervalID: undefined
};

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
