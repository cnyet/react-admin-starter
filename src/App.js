import React, { Component } from 'react'; 
import { Provider } from 'react-redux';  //react-redux 模块可以更方便使用redux，Provider下面的字组件都可以共用store
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import { GlobalStyle } from './style';
import { IconFontGlobal } from './statics/iconfont/iconfont';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Todo from './pages/todo';
// import TodoList from './pages/todo-list';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <IconFontGlobal />
        <Provider store={store}>   
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path="/todo" exact component={Todo}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </Provider>
    );
  }
}