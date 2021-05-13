import React from 'react';
import PropTypes from 'prop-types';
import { TodoWrapper } from './style';
import { Input, Button, List } from 'antd';

function TodoUI(props) {
  return (
    <TodoWrapper>
      <Input className="todo-input" value={props.inputValue} onChange={props.changeHandle} />
      <Button className="todo-btn" type="primary" onClick={props.clickHandle}>{props.text}</Button>
      <List 
        className="todo-list"
        size="small"
        bordered
        dataSource={props.list}
        renderItem={
          (item, index) => <List.Item onClick={() => props.deleteHandle(index)}>{item}</List.Item>
        }
      />
    </TodoWrapper>
  );
}

TodoUI.prototype = {
  text: PropTypes.string,
  inputValue: PropTypes.string,
  list: PropTypes.array,
  changeHandle: PropTypes.func,
  clickHandle: PropTypes.func,
  deleteHandle: PropTypes.func
};

export default TodoUI;