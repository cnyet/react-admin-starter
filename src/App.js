import React, { Component, Fragment } from 'react'; 
import Header from './common/header';
import { GlobalStyle } from './style';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
      </Fragment>
    );
  }
}