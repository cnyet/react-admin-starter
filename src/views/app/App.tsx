import * as React from 'react';
import './App.scss';
import Nav from '../../components/nav/nav';
import Header from '../../components/header/header';
import Home from '../../components/home/home';
import logo from '../../assets/images/logo.svg';
import Footer from '../../components/footer/footer';

class App extends React.Component {
  public render() {
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
      <div className="App">
        <header className="App-header">
          <div className="header-wrap">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="App-title">React</span>
          </div>
        <Nav groups={list} />
        </header>
        <Home compiler="typescript" framework="React" />
        <Header name="组件" />
        <Footer />
      </div>
    );
  }
}

export default App;
