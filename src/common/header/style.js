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
  overflow: hidden;
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

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 20px;
  border-radius: 19px;
  outline: none;
  border: 1px solid #eee;
  border-radius: 19px;
  background: #eee;
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