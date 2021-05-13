import React, { Component } from 'react';
import TodoListItem from './ui';
import store from './store';
import { getInputChangeValue } from './store/actionCreators';

class TodoTest extends Component {
  constructor (props) {
    super();
    this.state = store.getState();
    this.inputChangeHandle = this.inputChangeHandle.bind(this);
    this.btnClickHandle = this.btnClickHandle.bind(this);
    this.deleteHandle = this.deleteHandle.bind(this);
    this.storeChangeHandle = this.storeChangeHandle.bind(this);
    store.subscribe(this.storeChangeHandle)
  }
  storeChangeHandle () {
    this.setState(store.getState());
  }
  inputChangeHandle (e) {
    const action = getInputChangeValue(e.target.value);
    store.dispatch(action);
  }
  btnClickHandle () {
    const value = this.state.inputValue;
    const list = [...this.state.list];
    list.push(value);
    this.setState({
      list: list,
      inputValue: ''
    })
  }
  deleteHandle (key) {
    const list = [...this.state.list];
    list.splice(key, 1);
    this.setState({
      list: list
    })
  }
  render () {
    return (
      <TodoListItem
        inputValue={this.state.inputValue}
        list={this.state.list}
        inputChangeHandle={this.inputChangeHandle}
        btnClickHandle={this.btnClickHandle}
        deleteHandle={this.deleteHandle}
      />
    );
  }
}

export default TodoTest;