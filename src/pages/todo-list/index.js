import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stores from '../../stores';
import TodoListUI from './ui';
import { getInputChangeValue, handleButtonClick, handleDeleteItem, getListItems } from '../../stores/actionCreators';

class TodoList extends Component {
   constructor(props) {
     super(props);
     this.state = stores.getState();
     this.handleChange = this.handleChange.bind(this);
     this.handleStoreChange = this.handleStoreChange.bind(this);
     this.handleClick = this.handleClick.bind(this);
     this.onDeleteItem = this.onDeleteItem.bind(this);
     stores.subscribe(this.handleStoreChange);
   }
   handleChange(e) {
     const action = getInputChangeValue(e.target.value);
     stores.dispatch(action);
   }
   handleStoreChange() {
     this.setState(stores.getState());
   }
   handleClick() {
     const action = handleButtonClick(this.state.inputValue);
     stores.dispatch(action);
   }
   onDeleteItem(index) {
     const action = handleDeleteItem(index);
     stores.dispatch(action);
   }
   componentDidMount() {
     const action = getListItems();
     stores.dispatch(action);
   }
   shuoldComponentUpdate() {
     console.log('组件更新之前执行');
   }
   render () {
     return (
       <TodoListUI 
         inputValue={this.state.inputValue}
         data={this.state.data}
         handleChange={this.handleChange}
         handleClick={this.handleClick}
         onDeleteItem={this.onDeleteItem}
       />
     );
   }
}

export default TodoList;