import React, { Component, Fragment } from 'react';
import TodoListUI from './TodoListUI';
import store from '../../store';

export default  class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickItem = this.handleClickItem.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleClick() {
    const action = {
      type: 'add_todo_item',
      value: this.state.inputValue
    }
    store.dispatch(action);
  }
  handleClickItem(index) {
    const action = {
      type: 'delete_todo_item',
      index
    }
    store.dispatch(action);
  }
  render() {
    return (
      <TodoListUI
        inputValue = {this.state.inputValue}
        dataSource = {this.state.list}
        handleInputChange = {this.handleInputChange}
        handleClick = {this.handleClick}
        handleClickItem = {this.handleClickItem} />
    );
  }
}
