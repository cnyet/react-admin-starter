import React, { Component } from 'react';
import { TodoWrapper, TodoList } from './style';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'hello',
      list: []
    }
  }
  changeHandle(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  clickHandle() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }
  deleteHandle(index) {
    console.log(index);
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <TodoWrapper>
        <input className="todo-input" value={this.state.inputValue} onChange={this.changeHandle.bind(this)} />
        <button className="todo-btn" onClick={this.clickHandle.bind(this)}>Add</button>
        <TodoList>
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={this.deleteHandle.bind(this, index)}>{item}</li>;
            })
          }
        </TodoList>
      </TodoWrapper>
    )
  }
}

export default Todo;