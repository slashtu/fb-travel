import React, { PureComponent, PropTypes } from 'react';
// import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';
// import moment from 'moment';
// import AddIcon from 'imgs/svg/add.svg';
import css from './LogItem.css';

class LogItem extends PureComponent {

  render() {
    return (
      <div className={css.LogItem}>
        <span>date
        </span>
        <span>
          <div >
            <span>status</span>
          </div>
        </span>
        <span>
          <div className={css.deviceItem}>
            <span>devicefacility</span>
            <span>devices</span>
          </div>
        </span>
        <span>icon</span>
      </div>
    );
  }
}

export default LogItem;
