import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  SearchWrapper, 
  NavSearch, 
  Addition, 
  Button 
} from './style';

/**
 * UI组件渲染页面
 * 当组件只有一个render函数时可作为无状态组件
 * 无状态组件执行效率更高
 */

const Header = (props) => {
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
        <SearchWrapper className={props.focused ? 'focused' : ''}>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide">
            <NavSearch 
              className="input"
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}>
            </NavSearch>
          </CSSTransition>
          <span className="search-btn">
            <i className="iconfont icon-search">&#xe611;</i>
          </span>
        </SearchWrapper>
        <Addition>
          <Button>注册</Button>
          <Button className="focus"><i className="iconfont">&#xe602;</i>写文章</Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.focusAction);
    },
    handleInputBlur() {
      dispatch(actionCreators.blurAction);
    }
  }
};

// react-redux的connect方法将子组件与redux连接，返回一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Header);
