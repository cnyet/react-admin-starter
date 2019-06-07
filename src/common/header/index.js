import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SerarchInfo,
  NavSearch,
  Addition,
  Button
} from './style';

/**
 * Header组件
 * 当组件只有一个render函数时可作为无状态组件
 * 无状态组件执行效率更高
 */
class Header extends Component {
  getListArea() {
    if(this.props.focused) {
      return (
        <SerarchInfo>
          <div className="search-trending-header clearfix">
            <span>热门搜索</span> 
            <a href="javascript:;">
              <i className="iconfont ic-search-change">&#xe606;</i>换一批
            </a>
          </div>
          <ul className="search-trending-tag-wrap">
          {
            this.props.list.map(item => {
              return (
                <li key={item}>
                  <span>{item}</span>
                </li>
              )
            })
          }
          </ul>
        </SerarchInfo>
      )
    }else{
      return null;
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper className={this.props.focused ? 'focused' : ''}>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide">
              <NavSearch 
                className="input"
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <span className="search-btn">
              <i className="iconfont icon-search">&#xe611;</i>
            </span>
            {this.getListArea()}
          </SearchWrapper>
          <Addition>
            <Button>注册</Button>
            <Button className="focus"><i className="iconfont">&#xe602;</i>写文章</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.focusAction);
    },
    handleInputBlur() {
      dispatch(actionCreators.blurAction);
    }
  }
};

// react-redux的connect方法将子组件与redux连接，返回一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Header);