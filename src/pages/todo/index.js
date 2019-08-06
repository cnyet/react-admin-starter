import React, { Component } from 'react';
import { TodoWrapper, TodoList } from './style';

class Todo extends Component {
  render() {
    return (
      <TodoWrapper>
        <input className="todo-input" type="text" />
        <button className="todo-btn">Add</button>
        <TodoList>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </TodoList>
      </TodoWrapper>
    )
  }
}

export default Todo;