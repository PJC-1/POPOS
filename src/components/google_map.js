
import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new window.google.maps.Map(this.refs.map, {
      zoom: 15,
      scrollwheel: false,
      center: {
        lat: 37.7916,
        lng: -122.41509999
      }
    });
  }
  render() {
    return <div id="map" ref="map"></div>;
  }
}

export default GoogleMap;
