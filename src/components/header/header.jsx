import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      temperature: '',
      scale: 'c',
      numbers: [1, 2, 3, 4, 5],
      date: new Date(),
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
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
  handleTemperatureChange(event){
    this.setState({value: event.target.value});
  }
  handleCelsiusChange(temperature){
    this.setState({scale: 'c', temperature})
  }
  handleFahrenheitChange(temperature){
    this.setState({scale: 'f', temperature})
  }
  preventPop(name, e){
    e.preventDefault();
    console.log(name);
  }
  tick(){
    this.setState({
      date: new Date()
    })
  }
  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div className='contianer'>
        <div className='content'>
          <h1 className={this.state.isToggleOn ? 'default' : 'hidden'}>hello world {this.props.name}</h1>
          <h2>It is { this.state.date.toLocaleTimeString() }</h2>
          <button onClick={this.handleClick}>{this.state.isToggleOn ? '点击隐藏' : '点击显示'}</button>
          <NumberList numbers={this.state.numbers} />
          <fieldset className='fieldset'>
            <legend>输入一个温度</legend>
            <input type='text' value={this.state.value} onChange={this.handleTemperatureChange} />
            <BoilingVerdict celsius={parseFloat(this.state.value)} />
            <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
            <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
          </fieldset>
          <WelcomeDialog />
          <ListOfTenThings />
        </div>
      </div>
    )
  }
}

function FancyBorder(props){
  return (
    <div className={'fancyBorder fancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog(){
  return (
    <FancyBorder color='blue'>
      <h1 className='dialog-title'>welcome</h1>
      <p className='dialog-content'>thank you for visiting our spacecraft.</p>
    </FancyBorder>
  )
}

function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map(item=>
    <li key={item.toString()}>
      第{item}个元素
    </li>
  )
  return (
    <ul className='group'>{listItems}</ul>
  )
}

function BoilingVerdict(args){
  if(args.celsius >= 100){
    return <p>水已经烧开了</p>
  }
  return <p>水还没烧开</p>
}

function toCelsius(fahrenheit){
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius){
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert){
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.props.onTemperatureChange(e.target.value);
  }
  render(){
    const temperature = this.props.temperature;
    let scale = '';
    if(this.props.scale === 'c'){
      scale = 'Celsius'
    }else if(this.props.scale === 'f'){
      scale = 'Fahrenheit';
    }else{
      scale = '温度';
    }
    return (
      <fieldset>
        <legend>在{scale}中输入温度：</legend>
        <input type='text' value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

function Repeat(props){
  let items = [];
  for(let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}> This is item {index} in the list.</div>}
    </Repeat>
  )
}
