import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  &.active{
    color: #ea6f5a;
  }
  &.left{
    float: left;
  }
  &.right{
    float: right;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  margin-left: 20px;
  &.focused{
    .search-btn{
      background-color: #969696;
      border-radius: 15px;
      color: #fff;
    }
    .input{
      width: 240px;
    }
  }
  .search-btn{
    position: absolute;
    top: 15px;
    right: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    padding: 0!important;
    color: #969696;
    text-align: center;
  }
`;

export const SerarchInfo = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  margin-top: 9px;
  width: 250px;
  left: 0;
  top: 100%;
  border-radius: 4px;
  .search-trending-header {
    padding: 10px 15px;
    height: 20px;
    span {
      float: left;
      font-size: 14px;
      color: #969696;
    }
    a {
      float: right;
      font-size: 13px;
      color: #969696;
      background-color: transparent;
      border-width: 0;
      padding: 0;
      text-decoration: none;
    }
  }
  .search-trending-tag-wrap {
    padding: 0 15px 20px;
    li {
      margin-right: 10px;
      display: inline-block;
      line-height: 28px;
      span{
        padding: 2px 6px;
        font-size: 12px;
        color: #787878;
        border: 1px solid #ddd;
        border-radius: 3px;
      }
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 120px;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  margin-top: 9px;
  padding-left: 15px;
  padding-right: 30px;
  border-radius: 19px;
  outline: none;
  border: 1px solid #eee;
  border-radius: 19px;
  background: #eee;
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 120px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;

export const Button = styled.button`
  width: 80px;
  height: 38px;
  text-align: center;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  &.focus{
    color: #fff;
    background-color: #ea6f5a;
  }
`;