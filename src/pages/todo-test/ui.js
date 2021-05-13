import React, { Component } from 'react';
import { TodoWrapper } from './style';

class TodoListItem extends Component {
  render () {
    return (
      <TodoWrapper>
        <input value={this.props.inputValue} onChange={this.props.inputChangeHandle} />
        <button className="btn" onClick={this.props.btnClickHandle}>添加</button>
        <ul className="list">
          {
            this.props.list.map((item, index) => {
              return (
                <li className="item" key={index} onClick={() => this.props.deleteHandle(index)}>{item}</li>
              );
            })
          }
        </ul>
      </TodoWrapper>
    );
  }
}

export default TodoListItem;