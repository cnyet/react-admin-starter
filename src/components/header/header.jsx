import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
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
        <header></header>
        <div className="content">
          <h1>hello world {this.props.name}</h1>
          <h2>It is { this.state.date.toLocaleTimeString() }</h2>
          <button onClick={(e)=>this.preventPop("tom", e)}>点击</button>
        </div>
      </div>
    )
  }
}