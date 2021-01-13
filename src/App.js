import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './views/common/Header';
import Aside from './views/common/Aside';
import Home from './views/home';
import Todo from './views/todo';
import Dashboard from './views/dashboard';
import BaseForm from './views/form/BaseForm';
import { FluidContainer, MainWrapper, ArticleWrapper } from './style';

class App extends Component {
  render () {
    return (
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
    )
  }
};

export default App;