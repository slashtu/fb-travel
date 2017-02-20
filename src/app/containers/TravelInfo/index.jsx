import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from 'components/Layout'
import Map from 'components/Map';
import Table from 'components/Table';

import css from './TravelInfo.css';

const { Content, Header, Row } = Layout;

const columns = [{
  title: 'Place',
  key: 'place',
}, {
  title: 'Date',
  key: 'date',
}];

const detailColumns = [
  {
    title: 'country',
    key: 'country',
  }, 
  {
    title: 'city',
    key: 'city',
  },
  {
    title: 'street',
    key: 'street',
  }
];

class TravelInfo extends Component {

  render() {
    const { taggedPlaces } = this.props

    console.table(taggedPlaces)

    const places = taggedPlaces.data.map((item, index) => {
      const date = new Date(item.created_time);
      return {
        index: index,
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
          <Table isLoading={taggedPlaces.isLoading} columns={columns} detailColumns={detailColumns} source={places} />
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