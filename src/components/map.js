import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    new window.google.maps.Map(this.refs.map, {
      zoom: 15,
      scrollwheel: false,
      center: {
        lat: this.props.center.lat,
        lng: this.props.center.lng
    }
    });
  }
  render() {
    console.log(this.props);
    return <div id="map" ref="map"></div>;
  }
}

export default Map;
