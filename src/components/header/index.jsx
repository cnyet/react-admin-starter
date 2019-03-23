import React, { Component } from 'react';
import Nav from './nav';
import logo from '../../assets/images/logo.svg';
import './index.scss';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
  }
  render(){
    const list = [{
      title: '文档'
    }, {
      title: '教程'
    }, {
      title: '社区'
    }, {
      title: '博客'
    }];
    return (
      <header className="App-header">
        <div className="header-wrap">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-title">React</span>
        </div>
      <Nav groups={list} />
      <a className="login-link" href="javascript:;">登录</a>
      </header>
    )
  }
}
