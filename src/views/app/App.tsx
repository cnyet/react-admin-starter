import * as React from 'react';
import './App.scss';
import Header from '../../components/header/header';
import Home from '../../components/home/home';
import logo from '../../assets/images/logo.svg';
import Footer from '../../components/footer/footer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-wrap">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="App-title">React</span>
          </div>
          <nav className="nav-wrap">
            <ul>
              <li>
                <a href="javascript:;">文档</a>
              </li>
              <li>
                <a href="javascript:;">教程</a>
              </li>
              <li>
                <a href="javascript:;">博客</a>
              </li>
            </ul>
          </nav>
        </header>
        <Home compiler="typescript" framework="React" />
        <Header name="组件" />
        <Footer />
      </div>
    );
  }
}

export default App;
