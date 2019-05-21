import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

export default class TodoListUI extends Component {
  render () {
    return (
      <Fragment>
        <div className="header">
          <Input
            placeholder="Basic usage"
            className="input"
            value={this.props.inputValue}
            onChange={this.props.handleInputChange} />
          <Button type="primary" onClick={this.props.handleClick}>添加</Button>
        </div>
        <List
          bordered
          className="group"
          dataSource={this.props.dataSource}
          renderItem={
            (item, index) => (<List.Item onClick={() => {this.props.handleClickItem(index)}}>{item}</List.Item>)
          } />
      </Fragment>
    )
  }
}
