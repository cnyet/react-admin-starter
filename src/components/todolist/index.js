/**
 * 容器组件处理逻辑
 */
import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';

const TodoList = (props) => {
  const { inputValue, list, changeInputValue, addListItem } = props;
  return (
    <Fragment>
      <div className="header">
        <Input
          placeholder="Basic usage"
          className="input"
          value={inputValue}
          onChange={changeInputValue}/>
        <Button type="primary" onClick={addListItem}>添加</Button>
      </div>
      <List
        bordered
        className="group"
        dataSource={list}
        renderItem={
          (item, index) => (
            <List.Item>{item}</List.Item>
          )
        }
      />
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      };
      dispatch(action);
    },
    addListItem() {
      const action = {
        type: 'add_list_item'
      }
      dispatch(action);
    }
  }
}

// react-redux的connect方法将子组件与redux连接
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
