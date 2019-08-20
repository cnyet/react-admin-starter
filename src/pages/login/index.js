import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { LoginWrapper } from './style';

class Login extends PureComponent {
  render() {
    const { loginState }  = this.props;
    if (!loginState) {
      return (
        <LoginWrapper>
          <div className="login-group">
            <input className="login-input" placeholder="用户名" ref={(input) => {this.account = input}} />
            <input className="login-input password" placeholder="密码" type="password" 
              ref={(input) => {this.password = input}} /> 
          </div>
          <button className="login-submit" onClick={() => {this.props.login(this.account, this.password)}}>登录</button>
        </LoginWrapper>
      )
    } else {
      return (
        <Redirect to="/" />
      )
    }
    
  }
}

const mapState = (state) => {
  return {
     loginState: state.getIn(['login', 'login']) 
  };
};

const mapDispatch = (dispatch) => {
  return {
    login(account, password) {
      console.log(account.value, password.value);
      if (account.value && password.value) {
        dispatch(actionCreators.loginAction);
      } 
    }
  };
};

export default connect(mapState, mapDispatch)(Login);