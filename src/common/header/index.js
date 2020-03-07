import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SerarchInfo,
  SearchHeader,
  SearchHeaderLeft,
  SearchHeaderRight,
  SearchBody,
  SearchBodyItem,
  NavSearch,
  Addition,
  Button
} from './style';

/**
 * Header组件
 * 当组件只有一个render函数时可作为无状态组件
 * 无状态组件执行效率更高
 */
class Header extends PureComponent {
  getListArea() {
    const { focused, mouseIn, list, page, totalPage, handleChangePage, handleMouseEnter, handleMouseLeave } = this.props;
    const newList = list.toJS();
    let pageList = [];
    if (newList.length) {
      for(let i = (page - 1) * 10; i < page*10; i++) {
        if (newList[i]) {
          pageList.push(<SearchBodyItem key={newList[i]}>{newList[i]}</SearchBodyItem>);
        }
      }
    }
    if(focused || mouseIn) {
      return (
        <SerarchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchHeader>
            <SearchHeaderLeft>热门搜索</SearchHeaderLeft>
            <SearchHeaderRight
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe606;</i>
              <span>换一批</span>
            </SearchHeaderRight>
          </SearchHeader>
          <SearchBody>
            { pageList }
          </SearchBody>
        </SerarchInfo>
      )
    }else{
      return null;
    }
  }

  render() {
    const { focused, page, handleInputFocus, handleInputBlur, list, loginStatus }  = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载</NavItem>
          {
            loginStatus ? 
            <NavItem className="right" onClick={this.props.logout}>退出</NavItem> : 
            <Link to="/login">
              <NavItem className="right">登录</NavItem> 
            </Link>
          }
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper className={focused ? 'focused' : ''}>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide">
              <NavSearch 
                className="input"
                onFocus={ () => handleInputFocus(page, list)}
                onBlur={handleInputBlur}>
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
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    list: state.getIn(['header', 'list']),
    loginStatus: state.getIn(['login', 'login'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(page, list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList(page));
      } 
      dispatch(actionCreators.focusAction);
    },
    handleInputBlur() {
      dispatch(actionCreators.blurAction);
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnterAction);
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeaveAction);
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePageAction(page + 1));
      } else {
        dispatch(actionCreators.changePageAction(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logoutAction);
    }
  }
};

// react-redux的connect方法将子组件与redux连接，返回一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Header);