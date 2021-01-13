import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/common.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * React.StrictMode 是严格模式，一个用于标记出应用中潜在问题的工具，就像 Fragment,
 * StrictMode 不会渲染任何真实UI
 */
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();