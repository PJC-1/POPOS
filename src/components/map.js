import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const Marker = ({ text }) => <div>{ text }</div>;
export default class Map extends Component {
  static defaultProps = {
    center: { lat: 37.7916, lng: -122.41509999 },
    zoom: 15
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
      text={marker.name}/>
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
