import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Input, Button, List } from 'antd';
import { TodoWrapper, TodoGroup } from './style';
import PropTypes from 'prop-types';
import stores from '../../stores';

class TodoList extends Component {
   constructor(props) {
     super(props);
     this.state = stores.getState();
     this.handleChange = this.handleChange.bind(this);
     this.handleStoreChange = this.handleStoreChange.bind(this);
     this.handleClick = this.handleClick.bind(this);
     stores.subscribe(this.handleStoreChange);
   }
   handleChange(e) {
     const action = {
       type: 'input_change_value',
       value: e.target.value
     };
     stores.dispatch(action);
   }
   handleStoreChange() {
     this.setState(stores.getState());
   }
   handleClick() {
     const action = {
       type: 'button_click',
       value: this.state.inputValue
     };
     stores.dispatch(action);
   }
   render () {
     return (
       <TodoWrapper className="wrapper">
         <Input className="input" value={this.state.inputValue} onChange={this.handleChange} />
         <Button type="primary" className="btn" onClick={this.handleClick}>添加</Button>
         <List
            size="small"
            className="list"
            bordered
            dataSource={this.state.data}
            renderItem={
              item => <List.Item>{item}</List.Item>
            }
          />
       </TodoWrapper>
     );
   }
}

export default TodoList;