import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from "../index";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.context);
    return (
      <Consumer>
        {context => (
          <h1 style={{color: context}}>
            {this.props.children} {context}
          </h1>
        )}
      </Consumer>
    );
  }
}  

export default TodoItem;