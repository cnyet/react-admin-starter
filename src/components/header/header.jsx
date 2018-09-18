import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5],
      date: new Date(),
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this)
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
    return (
      <div className="contianer">
        <div className="content">
          <h1 className={this.state.isToggleOn ? "default" : "hidden"}>hello world {this.props.name}</h1>
          <h2>It is { this.state.date.toLocaleTimeString() }</h2>
          <button onClick={this.handleClick}>{this.state.isToggleOn ? "点击隐藏" : "点击显示"}</button>
          <NumberList numbers={this.state.numbers} />
        </div>
      </div>
    )
  }
}

export function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map(item=>
    <li key={item.toString()}>
      第{item}个元素
    </li>
  )
  return (
    <ul className="group">{listItems}</ul>
  )
}