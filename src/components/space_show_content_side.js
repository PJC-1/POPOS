import React, { Component } from 'react';

class SpaceShowContentSide extends Component {
  render() {
    return (
      <div className="space-content-side">
        <div>
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
