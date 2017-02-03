import React, { Component } from 'react';
import css from './Layout'

class LHeader extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={css.LHeader}>
        {children}
      </div>
    );
  }
}

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={css.Layout}>
        {children}
      </div>
    );
  }
}

class LContent extends Component {
  render() {
    console.log(css, 'css')
    const { children } = this.props;

    return (
      <div className={css.LContent}>
        {children}
      </div>
    );
  }
}

Layout.LHeader = LHeader;
Layout.LContent = LContent;

export default Layout;
