import React, { Component } from 'react';
import bd from '../../assets/images/bg.jpg';
import './index.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      password: '',
      selectValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.changePwd = this.changePwd.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  changePwd(event) {
    this.setState({
      password: event.target.value
    });
  }
  handleSelect(event) {
    this.setState({
      selectValue: event.target.value
    });
  }
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <div className="login-wrapper">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label className="login-label">
            <span>用户名: </span>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label className="login-label">
            <span>密  码: </span>
            <input type="password" value={this.state.password} onChange={this.changePwd} />
          </label>
          <select className="login-label" value={this.state.selectValue} onChange={this.handleSelect}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <input className="form-btn" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
};
