import React, { Component, PureComponent } from 'react';
import countries from 'i18n-iso-countries';
import MTable from 'react-toolbox/lib/table';

console.log("Taiwan => " + countries.getAlpha3Code('Taiwan', 'en'));

// import css from './Table.css'

const UserModel = {
  name: {type: String},
  date: {type: Date},
};

export default class Table extends PureComponent {
  render() {
    const places = this.props.source.map((item) => {
      const date = new Date(item.created_time);
      return {
        name: item.place.name,
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        country: item.place.location.country,
        city: item.place.location.city,
        street: item.place.location.street,
      }
    })
    return (
      <MTable
        selectable = {false}
        model={UserModel}
        source={places}
      />
    );
  }
}
