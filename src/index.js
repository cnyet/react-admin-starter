import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from "./components/header/header.jsx";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header name="组件"/>, document.getElementById('root'));
registerServiceWorker();
