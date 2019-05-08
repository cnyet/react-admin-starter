import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
  render() {
    const { content } = this.props;
    return (
      <li
        onDoubleClick={this.handleClick}>
        {content}
      </li>
    )
  }
}

TodoItem.propTypes = {
  test: PropTypes.number,
  content: PropTypes.string.isRequired,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

TodoItem.defaultProps = {
  test: 123
}

export default TodoItem;
