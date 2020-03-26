import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './components';
import TodoUI from './components/ui';

export const {Provider, Consumer} = React.createContext('hello');

class TodoTest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider value='green'>
        <TodoItem children="children"/>
      </Provider>
    );
  }
}

export default TodoTest;