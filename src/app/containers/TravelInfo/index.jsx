import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from 'components/Layout'
import Map from 'components/Map';
import Table from 'components/Table';

import css from './TravelInfo.css';

const { Content, Header, Row } = Layout;

const columns = [{
  title: 'Place',
  dataIndex: 'place',
}, {
  title: 'Date',
  dataIndex: 'date',
}];

class TravelInfo extends Component {

  render() {
    const { taggedPlaces } = this.props

    // console.table(taggedPlaces)

    const places = taggedPlaces.data.map((item) => {
      const date = new Date(item.created_time);
      return {
        place: item.place.name,
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        country: item.place.location.country,
        city: item.place.location.city,
        street: item.place.location.street,
      }
    })

    return (
      <Row>
        <div className={css.Map}>
          <Map source={taggedPlaces.data} />
        </div>
        <div className={css.Table}>
          <Table isLoading={taggedPlaces.isLoading} columns={columns} source={places} />
        </div>
      </Row>  
    );
  }
}

function mapStateToProps({ taggedPlaces }) {
  return {
    taggedPlaces,
  };
}

export default connect(
  mapStateToProps,
)(TravelInfo);