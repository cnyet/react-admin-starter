import React, { Component } from 'react';
import Util from '../../util';
import './index.scss';

export default class Footer extends Component {
  render() {
    const localDate = Util.formatDate('2019-01-14T09:56:45.495+0000');
    return (
      <footer className="footer">
        <span>{localDate}</span>
        <h3>@copyright yate</h3>
      </footer>
    )
  }
}
