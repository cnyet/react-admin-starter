import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { createFromIconfontCN } from '@ant-design/icons';
import store from '../store';
import { getMenuList } from './store/actionCreators';
import { AsideWrapper } from './style.js';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2065110_570c4oybdlt.js'
});

class Aside extends Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    // 获取导航列表
    const action = getMenuList();
    store.dispatch(action);
  }
  render () {
    return (
      <AsideWrapper className={this.props.collapsed ? 'collapsed':''}>
        <div className="logo-wrapper">
          <Link className="link" to="/"></Link>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}>
          {
            this.props.menus.map(item => {
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

const mapStateToProps = (state) => {
  return {
    collapsed: state.getIn(['common', 'collapsed']),
    menus: state.getIn(['common', 'menus'])
  };
}

export default connect(mapStateToProps)(Aside);