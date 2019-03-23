import * as React from 'react';
import Header from '../../components/header';
import Home from '../../components/home';
import Footer from '../../components/footer';
import './App.scss';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header name="组件" />
        <Home compiler="typescript" framework="React" />
        <Footer />
      </div>
    );
  }
}

export default App;
