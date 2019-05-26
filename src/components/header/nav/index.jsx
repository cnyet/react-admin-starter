import React, { Component } from 'react';
import './index.css';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const groups = this.props.groups;
    return (
      <nav className="nav-wrap">
        <ul>
          {
            groups.map((item, index) =>
              <li key={index}>
                <a href="javascript:;">{item.title}</a>
              </li>
            )
          }
        </ul>
      </nav>
    );
  }
}
