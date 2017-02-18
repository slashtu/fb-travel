import React, { PureComponent, PropTypes } from 'react';
import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';
// import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';
// import moment from 'moment';
// import AddIcon from 'imgs/svg/add.svg';
import css from './TableItem.css';

class LogItem extends PureComponent {

  state = {
    showDetail: false
  };

  detailHandler = () => {
    this.setState({ showDetail: !this.state.showDetail });
  }

  renderLine = () => {
    const columns = this.props.columns.map((column) => {
      return <span key={column.key}>{this.props.item[column.key]}</span>;
    })
    return columns;
  }

  renderDetail = () => {
    const detailColumns = this.props.detailColumns.map((column) => {
      return (
        <div key={column.key}>
          <span>{column.key}</span>
          <span>{this.props.item[column.key]}</span>
        </div> 
      )
    })
    return detailColumns;
  }

  render() {
    return (
      <div className={css.TableItem} onClick={this.detailHandler}>
        <div className={css.Line}>
          {this.renderLine()}
        </div>
        <VelocityTransitionGroup
          enter={{ animation: 'slideDown', duration: '160' }}
          leave={{ animation: 'slideUp', duration: '160' }}
        >
          {(this.state.showDetail) ? <div className={css.Detail}> 
                                      {this.renderDetail()}
                                     </div> : undefined}
        </VelocityTransitionGroup>
      </div>
    );
  }
}

export default LogItem;
