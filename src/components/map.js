import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { markerStyle } from './marker_style';

const Marker = ({ text }) => <div style={markerStyle}>{ text }</div>;
export default class Map extends Component {
  static defaultProps = {
    center: { lat: 37.7900, lng: -122.406 },
    zoom: 16
  }
render() {
  console.log(this.props);
  const Markers = this.props.markers.map((marker, index) => (
    <Marker
      // required props
      key={marker.name}
      lat={marker.the_geom.coordinates[1]}
      lng={marker.the_geom.coordinates[0]}
      marker={marker}
      text={index}/>
  ));
    return (
      <div id="map" className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          {Markers}
        </GoogleMapReact>
      </div>
    )
  }
}
