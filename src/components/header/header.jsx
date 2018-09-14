import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
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
  tick(){
    this.setState({
      date: new Date()
    })
  }
  render(){
    return (
      <div>
        <h1>hello world {this.props.name}</h1>
        <h2>It is { this.state.date.toLocaleTimeString() }</h2>
      </div>
    )
  }
}