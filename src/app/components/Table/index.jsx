import React, { Component, PureComponent } from 'react';

import LogItem from './LogItem';
import Loading from 'components/Loading';
import css from './Table'

export default class Table extends PureComponent {

  renderContent = ( loading = true, source ) => {
    if (loading) return <Loading />;

    const items = source.map((item, index) => {
      return <LogItem key={index} />
    });

    return items;
  }

  renderColumns = () => {
    const columns = this.props.columns.map( (column) => {
      return <span key={column.dataIndex} >{column.title}</span>
    })
    // console.log(columns)
    return columns;
  }

  render() {
    const { columns, source, isLoading } = this.props;

    // console.table(source) 

    return (
      <div className={css.LogTable}>
        <div className={css.logTitle}>
          {this.renderColumns()}
        </div>
        <div className={css.logContent}>
          {this.renderContent( false, source)}
        </div>
      </div>
    );
  }
}
