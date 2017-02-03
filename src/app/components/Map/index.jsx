import React, { Component, PureComponent } from 'react';
import countries from 'i18n-iso-countries';
import d3 from 'd3';
import DataMap from 'datamaps';

import css from './Map'

console.log("Taiwan => " + countries.getAlpha3Code('Taiwan', 'en'));

export default class Map extends PureComponent {

  componentDidMount() {
    this.map = new DataMap({
      element: document.getElementById('map'),
      responsive: true,
      scope: 'world',
      height: 500, //if not null, datamaps will grab the height of 'element'
      width: 715,
      // setProjection: (element) => {
      //   const projection = d3.geo.mercator()
      //     .center([20, 20])
      //     .scale(element.offsetWidth / 7)
      //     .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
      //   const path = d3.geo.path()
      //     .projection(projection);

      //   return { path, projection };
      // },
      projection: 'mercator',
      fills: {
        defaultFill: 'transparent',
        orange_50: 'rgb(251,233,231)',
        orange_100: 'rgb(255,204,188)',
        orange_200: 'rgb(255,171,145)',
        orange_300: 'rgb(255,138,101)',
        orange_400: 'rgb(255,112,67)',
        orange_500: 'rgb(255,87,34)',
        orange_600: 'rgb(244,81,30)',
        orange_700: 'rgb(230,74,25)',
        orange_800: 'rgb(216,67,21)',
        orange_900: 'rgb(191,54,12)',
      },
      geographyConfig: {
        borderColor: 'grey',
        popupOnHover: false,
        highlightOnHover: false,
      },
    });

    // calculate bubble radius
    // const threats = this.calculateThreats(this.props.threat);

    // this.map.bubbles(threats, {
    //   popupOnHover: true,
    //   popupTemplate(geography, data) {
    //     return `<div class="hoverinfo"><div>Country: ${data.country}</div><div>Count: ${d3.format(',.2f')(data.count)}</div></div>`;
    //   },
    // });
    // window.addEventListener('resize', () => {
    //   this.map.resize();
    // });
  }

  render() {
    return (
      <div id={'map'} className={css.Map}></div>
    );
  }
}
