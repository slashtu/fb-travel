import React, { Component, PureComponent } from 'react';

import { 
  flow, 
  countBy as countBy_fp, 
  map as map_fp, 
  mapValues as mapValues_fp,
} from 'lodash/fp';

import countries from 'i18n-iso-countries';

import css from './Map'

console.log("Taiwan => " + countries.getAlpha3Code('Taiwan', 'en'));

export default class Map extends PureComponent {

  componentDidMount() {
    this.map =  new Datamap({
      element: document.getElementById("map"),
      projection: 'mercator',
      fills: {
        defaultFill: "#ABDDA4",
        authorHasTraveledTo: "#fa0fa0"
      },
      data: {
        // USA: { fillKey: "authorHasTraveledTo" },
        // JPN: { fillKey: "authorHasTraveledTo" },
        // ITA: { fillKey: "authorHasTraveledTo" },
        // CRI: { fillKey: "authorHasTraveledTo" },
        // KOR: { fillKey: "authorHasTraveledTo" },
        // DEU: { fillKey: "authorHasTraveledTo" },
      }
    });
  }

  updateMapColor = ( config ) => {

    if(!this.map) return;
    
    this.map.updateChoropleth(
      // {
      //   USA: colors(Math.random() * 10),
      //   RUS: colors(Math.random() * 100),
      //   AUS: { fillKey: 'authorHasTraveledTo' },
      //   BRA: colors(Math.random() * 50),
      //   CAN: colors(Math.random() * 50),
      //   ZAF: colors(Math.random() * 50),
      //   IND: colors(Math.random() * 50),
      // }

      config
    );
  }

  render() {
    const { source } = this.props;
  
    const places = flow(
      map_fp(
        (place) => { 
          return { country: countries.getAlpha3Code(place.place.location.country, 'en')}; 
        }
      ),
      countBy_fp('country'),
      mapValues_fp(() => { return { fillKey: "authorHasTraveledTo" }}),
    )(source);

    this.updateMapColor( places );

    return (
      <div id={'map'} className={css.Map}></div>
    );
  }
}
