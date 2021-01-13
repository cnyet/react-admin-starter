import React, { Component } from 'react';
import { Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import stores from './store';
import { getMenuList } from './store/actionCreators';
import { AsideWrapper } from './style.js';
import { Link } from "react-router-dom";
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2065110_570c4oybdlt.js'
});

class Aside extends Component {
  constructor (props) {
    super(props);
    this.state = stores.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }
  handleClick (item) {
    console.log(item);
  }
  handleStoreChange () {
    this.setState(stores.getState());
  }
  componentDidMount () {
    // 订阅store
    stores.subscribe(this.handleStoreChange);
    // 获取导航列表
    const action = getMenuList();
    stores.dispatch(action);
  }
  render () {
    const menuList = this.state.menus;
    return (
      <AsideWrapper className={this.state.collapsed ? 'collapsed':''}>
        <div className="logo-wrapper">
          <Link className="link" to="/"></Link>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          onClick={this.handleClick}>
          {
            menuList.map(item => {
              if (item.children && item.children.length) {
                return (
                  <Menu.SubMenu key={item.key} icon={<IconFont type={item.icon} />} title={item.name}>
                    {
                      item.children.map(element => {
                        return <Menu.Item key={element.key}>
                          <Link to={element.path}>{element.name}</Link>
                        </Menu.Item>;
                      })
                    }
                  </Menu.SubMenu>
                );
              } else {
                return (
                  <Menu.Item key={item.key} icon={<IconFont type={item.icon} />}>
                    <Link to={item.path}>{item.name}</Link>
                  </Menu.Item>
                );
              }
            })
          }
        </Menu>
      </AsideWrapper>
    );
  }
}

export default Aside;