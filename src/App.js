import React, { Component, Fragment } from 'react'; 
import { Provider } from 'react-redux';  //react-redux 模块可以更方便使用redux，Provider下面的字组件都可以共用store
import Header from './common/header';
import store from './store';
import { GlobalStyle } from './style';
import { IconFontGlobal } from './statics/iconfont/iconfont';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconFontGlobal />
        <Provider store={store}>      
          <Header />
        </Provider>
      </Fragment>
    );
  }
}