import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
// import App from './views/app/App';
import TodoList from './components/todolist';
import store from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// react-redux 模块可以更方便使用redux，Provider下面的字组件都可以共用store
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)
ReactDOM.render(
  App,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
