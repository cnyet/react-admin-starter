import React, { useState } from 'react';
import { Input, Button, List } from 'antd';
import { TodoWrapper } from './style';

function TodoUI (props) {
  const [hidden, setHidden] = useState(true);
  console.log(hidden, setHidden);
  return (
    <TodoWrapper>
      <div>
        {hidden ? (
          <a onClick={() => setHidden(false)}> read more</a>
        ) : (
          <a onClick={() => setHidden(true)}> read less</a>
        )}
      </div>
      <Input className="todo-input" value={props.inputValue} onChange={props.changeHandle} />
      <Button type="primary" className="todo-btn" onClick={props.clickHandle}>Add</Button>
      <List
        size="small"
        className="list"
        bordered
        dataSource={props.data}
        renderItem={
          (item, index) => <List.Item onClick={() => props.deleteHandle(index)}>{item}</List.Item>
        } />
    </TodoWrapper>
  );
}

export default TodoUI;