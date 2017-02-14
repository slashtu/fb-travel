import React, { Component } from 'react';
import { connect } from 'react-redux';

import { renamePlaces } from 'actions'

import Layout from 'components/Layout'
import Map from 'components/Map';
import Table from 'components/Table';

import css from './TravelInfo.css';

const { Content, Header, Row } = Layout;

class TravelInfo extends Component {

  render() {
    const { taggedPlaces } = this.props
    return (
      <Row>
        <div className={css.Map}>
          <button >addslash</button>
          <Map source={taggedPlaces} />
        </div>
        <div className={css.Table}>
          <Table source={taggedPlaces} />
        </div>
      </Row>  
    );
  }
}

const mapStateToProps = state => {
  const { taggedPlaces } = state;
  return { empty: [] };
}


export default connect(
  mapStateToProps,
  {renamePlaces}
)(TravelInfo);