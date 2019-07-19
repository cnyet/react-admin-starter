import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// progressive web application (PWA) 渐进式web应用
// 以web技术开发手机应用，当访问https的服务器时，首次访问会将网页存储在本地浏览器，下次访问更快或断网时也可显示网页
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
