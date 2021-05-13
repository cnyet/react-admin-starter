import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../todoStore';
import { initListItems, getInputValue, handleChangeInput, addListItem, deleteListItem} from '../../todoStore/actionCreators';
import TodoUI from './ui';

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  deleteHandle(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
  componentDidMount() {
    const action = initListItems();
    store.dispatch(action);
  }
  render() {
    return (
      <TodoUI 
        text={12}
        maxLength={35}
        inputValue={this.props.inputValue}
        data={this.props.data}
        changeHandle={this.props.changeHandle}
        clickHandle={this.props.clickHandle}
        deleteHandle={this.props.deleteHandle} 
      />
    );
  }
}

function mapStateToProps (state) {
  return {
    inputValue: state.inputValue,
    data: state.data
  };
}

function mapDispatchToProps (dispatch) {
  return {
    changeHandle(e) {
      const action = handleChangeInput(e.target.value);
      dispatch(action);
    },
    clickHandle() {
      const action = addListItem();
      dispatch(action);
    },
    deleteHandle(index) {
      const action = deleteListItem(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
