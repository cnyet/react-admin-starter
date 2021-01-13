import styled from 'styled-components';

export const AsideWrapper = styled.aside`
  width: 240px;
  background-color: #001529;
  transition: width 0.3s ease;
  .logo-wrapper{
    height: 32px;
    text-align: center;
    margin: 16px;
    .link{
      width: 100%;
      height: 100%;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
      display: inline-block;
      line-height: 32px;
      background-color: rgba(200, 200, 200, .3);
    }
  }
  &.collapsed{
    width: 80px;
  }
  .menu-vertical{

  }
`;

export const HeaderWrapprt = styled.header`
  position: relative;
  height: 64px;
  overflow: hidden;
  color: #606266;
  font-weight: bold;
  background-color: #ffffff;
  box-shadow: 2px 2px 8px #DCDFE6;
  z-index: 1;
  .trigger{
    float: left;
    width: 68px;
    height: 64px;
    font-size: 20px;
    line-height: 20px;
    padding: 22px 24px;
    cursor: pointer;
    vertical-align: middle;
    transition: color .3s;
    &:hover {
      color: $nav-active-color;
    }
  }
  .header-left{
    float: left;
    line-height: 34px;
    padding: 15px 0;
  }
  .header-right{
    line-height: 34px;
    padding: 0 15px;
    float: right;
    .dropdown-link{
      display: inline-block;
    }
    .avatar{
      margin: 12px 0;
      width: 40px;
      height: 40px;
      outline: none;
      cursor: pointer;
      background-color: $img-bg-color;
      vertical-align: middle;
      border: none;
    }
  }
`;