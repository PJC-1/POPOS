import React, { Component } from 'react';
import Map from './map';

class SpaceShowContentSide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: 14,
      lat: null,
      lng: null,
      center: null
    };
  }

  componentWillMount() {
    this.setState({ lat: this.props.space.the_geom.coordinates[1], lng: this.props.space.the_geom.coordinates[0], center: [ this.props.space.the_geom.coordinates[1], this.props.space.the_geom.coordinates[0]] });
  }


  render(){
    return (
      <div className="space-content-subdiv">
        <div className="map-container">
          <Map marker={this.props.space} style="map-space" center={this.state.center} zoom={this.state.zoom}/>
          <div className="space-side-div-two">
            <div className="space-detail-one">
              {this.props.space.hours ? (
                <p>{this.props.space.hours}</p>
              ) : (
                <p>{this.props.space.hours_type}</p>
              )}
            </div>
            <div className="space-detail-two">
              {this.props.space.type}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpaceShowContentSide;
