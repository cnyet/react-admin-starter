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
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <Fragment>
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange} />
        <button onClick={this.addTodoList}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) =>
              <li key={index} onDoubleClick={this.handleDelete.bind(this, index)}>{item}</li>
            )
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
