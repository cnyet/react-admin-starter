import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import { handleCollapse } from './store/actionCreators';
import { HeaderWrapprt } from './style.js';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import avatar from '@/assets/images/woman.png';

const menu = (
  <Menu>
    <Menu.Item key="0">个人中心</Menu.Item>
    <Menu.Item key="1">退出登录</Menu.Item>
  </Menu>
);

class Header extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <HeaderWrapprt>
        <span className="trigger" onClick={this.props.handleToggle}>
          { this.props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
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

const mapStateToProps = (state) => {
  return {
    collapsed: state.getIn(['common', 'collapsed']),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggle () {
      const action = handleCollapse();
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);