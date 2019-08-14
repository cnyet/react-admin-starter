import styled from 'styled-components';

export const LoginWrapper = styled.div`
  width: 400px;
  margin: 100px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  line-height: 30px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  .login-group{
    margin: 10px auto;
    display: block;
    text-align: center;
  }
  .login-input{
    width: 300px;
    height: 50px;
    font-size: 16px;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
  }
  .password{
    border-top: 0;
  }
  .login-submit{
    margin: 20px auto;
    width: 350px;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
  }
`;