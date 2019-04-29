import React, { Component, Fragment } from 'react';
import TodoItem from './todoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'React',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTodoList = this.addTodoList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleInputChange(e) {
    // const value = e.target.value;
    const value = this.input.value;
    this.setState((prevState) => ({
      inputValue: value
    }));
  }
  addTodoList() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  }
  handleDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          index={index}
          content={item}
          deleteItem={this.handleDelete} />
      )
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="input">输入框</label>
          <input
            id="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => {this.input = input}} />
          <button onClick={this.addTodoList}>提交</button>
        </div>
          <ul>
            {this.getTodoItem()}
          </ul>
      </Fragment>
      )
  }
}

export default TodoList;
