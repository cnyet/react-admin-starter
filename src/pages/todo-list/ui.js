import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import { TodoWrapper, TodoGroup } from './style';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class TodoListUI extends Component {
  render() {
    console.log(this.props);
    return (
      <TodoWrapper className="wrapper">
        <Input className="input" value={this.props.inputValue} onChange={this.props.handleChange} />
        <Button type="primary" className="btn" onClick={this.props.handleClick}>添加</Button>
        <List
          size="small"
          className="list"
          bordered
          dataSource={this.props.data}
          renderItem={
            (item, index) => <List.Item onClick={() => this.props.onDeleteItem(index)}>{item}</List.Item>
          }
        />
      </TodoWrapper>
    );
  }
}

export default TodoListUI;