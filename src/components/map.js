import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { markerStyle } from './marker_style';

const Marker = () => <div><img style={markerStyle} src="http://maps.google.com/mapfiles/ms/icons/red-dot.png"></img></div>;
export default class Map extends Component {
  static defaultProps = {
    center: { lat: 37.7900, lng: -122.406 },
    zoom: 16,
    options: {
      scrollwheel: false,
      zoomControl: false
    }
  }
render() {
  console.log(this.props);
  const Markers = this.props.markers.map((marker, index) => (
    <Marker
      // required props
      key={marker.name}
      lat={marker.the_geom.coordinates[1]}
      lng={marker.the_geom.coordinates[0]}
      marker={marker} />
  ));
    return (
      <div id="map" className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }
          options={ this.props.options }>
          {Markers}
        </GoogleMapReact>
      </div>
    )
  }
}
