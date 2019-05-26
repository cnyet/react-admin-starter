import React, { Component } from 'react';
import TemperatureInput from './temperature.jsx';
import PropTypes from 'prop-types';
import Children from './children.jsx';
import TodoList from './todolist.jsx';
import './index.css';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      date: new Date(),
      temperature: '',
      scale: 'c'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  //组件挂载
  componentDidMount(){
    this.timerId = setInterval(()=>{
      this.tick()
    }, 1000);
  }
  //组件卸载
  componentWillUnmount(){
    clearInterval(this.timerId);
  }
  handleClick(){
    this.setState(prevState =>({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  tick(){
    this.setState({
      date: new Date()
    })
  }
  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature
    });
  }
  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature
    });
  }
  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
    return (
      <div className="contianer">
        <div className="content">
          <h1 className={this.state.isToggleOn ? 'default' : 'hidden'}>hello world {this.props.name}</h1>
          <h2>It is { this.state.date.toLocaleTimeString() }</h2>
          <button onClick={this.handleClick}>{this.state.isToggleOn ? '点击隐藏' : '点击显示'}</button>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
          <Children color="blue" left="Welcome" right="React" />
          <TodoList />
        </div>
      </div>
    )
  }
}

//类型检查
Home.propTypes = {
  name: PropTypes.string
}
