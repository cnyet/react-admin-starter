import React, { Component, Fragment } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'React',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTodoList = this.addTodoList.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  addTodoList(e) {
    console.log(e);
  }
  render() {
    return (
      <Fragment>
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange} />
        <button onClick={this.addTodoList}>提交</button>
        <ul>
          <li></li>
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
