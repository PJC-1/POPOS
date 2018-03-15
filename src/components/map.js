import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { markerStyle } from './marker_style';
import { customMapStyle } from './customMapStyle';

const GOOGLE_MAP_API_KEY = 'AIzaSyDj7DG7DU8QGYE7KUwYkeukOIbUrWOniFE';
const Marker = () => <div><img style={markerStyle} src="http://maps.google.com/mapfiles/ms/icons/red-dot.png" alt="Map Marker"></img></div>;

const onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)

export default class Map extends Component {
  static defaultProps = {
    options: {
      scrollwheel: false,
      zoomControl: false,
      styles: customMapStyle
    }
  }

  render() {
    console.log(this.props);
    if (this.props.markers) {
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
            bootstrapURLKeys={{ key: {GOOGLE_MAP_API_KEY} }}
            defaultCenter={ this.props.center }
            defaultZoom={ this.props.zoom }
            options={ this.props.options }
            onClick={onClick}>
            {Markers}
          </GoogleMapReact>
        </div>
      )
    } else if (this.props.marker) {

      return (
        <div id={this.props.style}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: {GOOGLE_MAP_API_KEY} }}
            defaultCenter={ this.props.center }
            defaultZoom={ this.props.zoom }
            options={ this.props.options }>
            <Marker
              // required props
              key={this.props.marker.name}
              lat={this.props.marker.the_geom.coordinates[1]}
              lng={this.props.marker.the_geom.coordinates[0]}
              marker={this.props.marker} />
            </GoogleMapReact>
          </div>
        )
    }
  }
}
