import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stores from '../../stores';
import './style.js';
import { handleButtonClick, handleDeleteItem, getInputChangeValue }  from '../../stores/actionCreators';

class Todo extends Component {
  constructor (props) {
    super(props);
    const storeData = stores.getState();
    this.state = {
      title: props.title,
      ...storeData
    };
    this.onClickHandle = this.onClickHandle.bind(this);
    this.onChangehandle = this.onChangehandle.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }
  handleStoreChange () {
    const storeData = stores.getState();
    this.setState({
      title: this.state.title,
      ...storeData
    });
  }
  onClickHandle () {
    const action = handleButtonClick(this.state.inputValue);
    stores.dispatch(action);
  }
  onChangehandle (e) {
    const action = getInputChangeValue(e.target.value);
    stores.dispatch(action);
  }
  onDeleteHandle (key) {
    const action = handleDeleteItem(key);
    stores.dispatch(action);
  }
  componentDidMount () {
    // 订阅store
    stores.subscribe(this.handleStoreChange);
  }
  render () {
    const { list } = this.state;
    return (
      <div className="Todo-container">
        <div className="Todo-box">
          <input className="Todo-input" value={this.state.inputValue} onChange={this.onChangehandle} />
          <button className="Todo-btn" onClick={this.onClickHandle}>Add</button>
          <ul className="Todo-group">
            {
              list.map((item, index) => 
                <li key={index} className="Todo-item" onClick={this.onDeleteHandle.bind(this, index)}>{item}</li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

// 声明 Props 的数据类型
Todo.propTypes = {
  title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};
// 定义 Props 的默认值
Todo.defaultProps = {
  title: 'Todo List'
};

export default Todo;