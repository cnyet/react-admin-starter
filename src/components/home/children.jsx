import React, { Component } from 'react';

export default class Children extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className={'children'+this.props.color}>
        <div className="child-left">
          {this.props.left}
        </div>
        <div className="child-right">
          {this.props.right}
        </div>
      </div>
    )
  }
}
