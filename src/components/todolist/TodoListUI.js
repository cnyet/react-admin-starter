/**
 * UI组件渲染页面
 * 当组件只有一个render函数时可作为无状态组件
 * 无状态组件执行效率更高
 */
import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

export const TodoListUI = (props) => {
  return (
    <Fragment>
      <div className="header">
        <Input
          placeholder="Basic usage"
          className="input"
          value={props.inputValue}
          onChange={props.handleInputChange} />
        <Button type="primary" onClick={props.handleClick}>添加</Button>
      </div>
      <List
        bordered
        className="group"
        dataSource={props.dataSource}
        renderItem={
          (item, index) => (
            <List.Item onClick={() => {props.handleClickItem(index)}}>{item}</List.Item>
          )
        } />
    </Fragment>
  )
}
