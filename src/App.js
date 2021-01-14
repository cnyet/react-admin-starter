import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import Header from './components/Header';
import Aside from './components/Aside';
import Home from './views/home';
import Todo from './views/todo';
import Dashboard from './views/dashboard';
import BaseForm from './views/form/BaseForm';
import { FluidContainer, MainWrapper, ArticleWrapper } from './style';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <FluidContainer>
            <Aside />
            <MainWrapper>
              <Header />
              <ArticleWrapper>
                <Switch>
                  <Route path="/todo" component={Todo} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/form/base" component={BaseForm} />
                  <Route path="/" component={Home} />
                </Switch>
              </ArticleWrapper>
            </MainWrapper>
          </FluidContainer>
        </Router>
      </Provider>
    );
  }
};

export default App;