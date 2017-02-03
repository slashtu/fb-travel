import React, { Component } from 'react';
import { LHeader } from 'components/Layout'

import css from './Header.css'

export default class Header extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>Header</div>
    );
  }
}
