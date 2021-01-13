import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import stores from '../common/store';
import { handleCollapse } from '../common/store/actionCreators';
import { HeaderWrapprt } from './style.js';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import avatar from '../../assets/images/woman.png';

const menu = (
  <Menu>
    <Menu.Item key="0">个人中心</Menu.Item>
    <Menu.Item key="1">退出登录</Menu.Item>
  </Menu>
);

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = stores.getState();
    this.handleToggle = this.handleToggle.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }
  handleStoreChange () {
    this.setState(stores.getState());
  }
  handleToggle () {
    const collapsed = this.state.collapsed;
    const action = handleCollapse(!collapsed);
    stores.dispatch(action);
  }
  componentDidMount () {
     // 订阅store
     stores.subscribe(this.handleStoreChange);
  }
  render () {
    return (
      <HeaderWrapprt>
        <span className="trigger" onClick={this.handleToggle}>
          { this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
        </span>
        <span className="header-left">首页</span>
        <div className="header-right">
          <Dropdown overlay={menu}>
            <a className="dropdown-link" onClick={e => e.preventDefault()}>
              <img className="avatar" src={avatar} />
            </a>
          </Dropdown>
        </div>
      </HeaderWrapprt>
    )
  }
}

export default Header;