import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleButtonClick, handleDeleteItem, getInputChangeValue }  from './store/actionCreators';
import './style.scss';

class Todo extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="Todo-container">
        <div className="Todo-box">
          <input className="Todo-input" value={this.props.inputValue} onChange={this.props.onChangehandle} />
          <button className="Todo-btn" onClick={this.props.onClickHandle}>Add</button>
          <ul className="Todo-group">
            {
              this.props.list.map((item, index) => 
                <li key={index} className="Todo-item" onClick={this.props.onDeleteHandle.bind(this, index)}>{item}</li>
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

const mapStateToProps = (state) => {
  return {
    inputValue: state.getIn(['todo', 'inputValue']),
    list: state.getIn(['todo', 'list'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickHandle () {
      const action = handleButtonClick();
      dispatch(action);
    },
    onChangehandle (e) {
      const action = getInputChangeValue(e.target.value);
      dispatch(action);
    },
    onDeleteHandle (key) {
      const action = handleDeleteItem(key);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);