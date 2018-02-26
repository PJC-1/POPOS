import React, { Component } from 'react';
import Map from './map';

class SpaceShowContentSide extends Component {
  render() {
    return (
      <div className="space-content-subdiv">
        <div className="map-container">
          <Map marker={this.props.space} style="map-space"/>
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
