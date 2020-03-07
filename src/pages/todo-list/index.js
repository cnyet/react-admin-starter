import React, { Component } from 'react';
import { TodoWrapper, TodoGroup } from './style';

export default class TodoList extends Component {
   constructor(props) {
     super(props);
     this.state = {
       value: 'Todo',
       list: [],
       items: {
         0: 'a',
         1: 'b',
         2: 'c',
         3: 'd'
       },
       number: 0
     };
     this.onHandleClick = this.onHandleClick.bind(this);
   }
   onHandleClick() {
     this.setState((state) => {
       return {
         list: [...state.list, state.value]
       }
     });
   }
   onChangeHandle(e) {
     this.setState({
       value: e.target.value
     });
   }
   onDeleteHandle(index) {
     const listCopy = [...this.state.list];
     listCopy.splice(index, 1);
     this.setState({
       list: listCopy
     });
   }
   render () {
     const index = this.props.data;
     let title = index < 4 ? this.state.items[index] : this.state.items[3];
     return (
       <TodoWrapper className="wrapper">
         <input className="input" value={this.state.value} onChange={this.onChangeHandle.bind(this)} />
         <button className="btn" onClick={this.onHandleClick}>添加</button>
         <TodoGroup>
           {
             this.state.list.map((item, index) => {
               return <li className="list-item" key={index} onClick={this.onDeleteHandle.bind(this, index)}>{index} - {item}</li>;
             })
           }
         </TodoGroup>
         <button className="btn" onClick={ () => this.props.onClick(++ this.state.number)}>
         { title }
         </button>
       </TodoWrapper>
     );
   }
}