import React from 'react';
import './nav.scss';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello world.</h1>
        <h2>It is {this.props.data.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
