import React, { Component } from 'react';
import { List, ListItem } from 'react-toolbox';
import classnames from 'classnames';

import style from './SidebarNavigation.scss'

export default class SidebarNavigation extends Component {
  render() {
    console.log(this.props)
    return (
      <aside className={classnames(style.sidebarNavigation, { [this.props.className]: true })}>
        <List selectable ripple>
          <ListItem theme={style}
            key={'key'}
            caption={'NXGAP'}
            className={'classnames(style.item, { [style.active]: isActive })'}
            selectable
            onClick={'() => { router.push(components[key].path);}'}
          />
          <ListItem
            key={'xxx'}
            caption={'NXGOP'}
            className={'classnames(style.item, { [style.active]: isActive })'}
            selectable
            accent
            onClick={'() => { router.push(components[key].path);}'}
          />
        </List>
      </aside>
    );
  }
}
