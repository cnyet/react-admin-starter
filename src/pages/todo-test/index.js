import React, { Component } from 'react';
import TodoListItem from './ui';
import store from './store';
import { initListData, getInputChangeValue, buttonClickHandle, deleteItemHandle } from './store/actionCreators';

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
    const action = buttonClickHandle();
    store.dispatch(action);
  }
  deleteHandle (key) {
    const action = deleteItemHandle(key);
    store.dispatch(action);
  }
  componentDidMount () {
    const action = initListData();
    store.dispatch(action);
  }
  render () {
    return (
      <TodoListItem
        inputValue={this.state.inputValue}
        btnText={this.state.btnText}
        list={this.state.list}
        inputChangeHandle={this.inputChangeHandle}
        btnClickHandle={this.btnClickHandle}
        deleteHandle={this.deleteHandle}
      />
    );
  }
}

export default TodoTest;