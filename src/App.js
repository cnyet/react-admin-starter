import React, { Component, Fragment } from 'react'; 
import { Provider } from 'react-redux';  //react-redux 模块可以更方便使用redux，Provider下面的字组件都可以共用store
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import { GlobalStyle } from './style';
import { IconFontGlobal } from './statics/iconfont/iconfont';
import Home from './pages/home';
import Detail from './pages/detail';
import Todo from './pages/todo';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconFontGlobal />
        <Provider store={store}>   
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path="/todo" exact component={Todo}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}