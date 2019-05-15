import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import store from '../../store';
import 'antd/dist/antd.css';
import './index.css';

export default  class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    console.log(index);
    const action = {
      type: 'delete_todo_item',
      index
    }
    store.dispatch(action);
  }
  render() {
    return (
      <Fragment>
        <div className="header">
          <Input
            placeholder="Basic usage"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange} />
          <Button type="primary" onClick={this.handleClick}>添加</Button>
        </div>
        <List
          bordered
          className="group"
          dataSource={this.state.list}
          renderItem={
            (item, index) => <List.Item onClick={(e) => this.handleClickItem(index)}>{item}</List.Item>
          }/>
      </Fragment>
    )
  }
}
