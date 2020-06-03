import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse'
import './index.css';
import RouterJump from './router'
import * as serviceWorker from './serviceWorker';

function setup() {
	Parse.initialize('psone')
	Parse.serverURL = 'http://106.13.63.7:10010/parse'
}

setup()

ReactDOM.render(
  <React.StrictMode>
    <RouterJump />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
