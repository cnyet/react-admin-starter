import * as React from 'react';
import './App.css';
import Header from "../../components/header/header";
import Home from "../../components/home/home";
import logo from '../../assets/images/logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Home compiler="typescript" framework="react" />
        <Header name="组件" />
      </div>
    );
  }
}

export default App;
