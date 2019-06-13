import React, { Component, Fragment } from 'react'; 
import { Provider } from 'react-redux';  //react-redux 模块可以更方便使用redux，Provider下面的字组件都可以共用store
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import { GlobalStyle } from './style';
import { IconFontGlobal } from './statics/iconfont/iconfont';
import Home from './pages/home';
import Detail from './pages/detail';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconFontGlobal />
        <Provider store={store}>   
          <div>
            <Header />
            <BrowserRouter>
              <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' exact component={Detail}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </Fragment>
    );
  }
}