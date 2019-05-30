import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style';

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span class="iconfont">&#xe636;</span>
          </NavItem>
          <NavSearch></NavSearch>
          <Addition>
            <Button>注册</Button>
            <Button className="focus">写文章</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}
