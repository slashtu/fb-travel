import React, { Component, PureComponent } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';

import style from './Header.css'

export default class Header extends PureComponent {
  render() {
    console.log('render')
    return (
      <AppBar className={style.appbar}>
        <a href="/home">React Toolbox Docs</a>
      </AppBar>
    );
  }
}
