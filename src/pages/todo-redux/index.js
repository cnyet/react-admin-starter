import React from 'react';
import TodoUI from './ui';
import store from './store';
import { getInputChangeValue } from './store/actionCreators';

class TodoRedux extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    this.onClickHandle = this.onClickHandle.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onDeleteHandle = this.onDeleteHandle.bind(this);
    this.storeChangeHandle = this.storeChangeHandle.bind(this);
    store.subscribe(this.storeChangeHandle)
  }
  storeChangeHandle() {
    this.setState(store.getState())
  }
  onChangeHandle(e) {
    const action = getInputChangeValue(e.target.value);
    store.dispatch(action);
  }
  onClickHandle() {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    })
  }
  onDeleteHandle(key) {
    const newList = [...this.state.list];
    newList.splice(key, 1);
    this.setState({
      list: newList
    })
  }
  render() {
    return (
      <TodoUI
        text={this.state.btnText}
        inputValue={this.state.inputValue}
        list={this.state.list}
        clickHandle={this.onClickHandle}
        changeHandle={this.onChangeHandle}
        deleteHandle={this.onDeleteHandle}
      />
    );
  }
}

export default TodoRedux;