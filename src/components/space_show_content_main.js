import React, { Component } from 'react';

class SpaceShowContentMain extends Component {
  render() {
    return (
      <div className="space-content-sub">
        <div className="space-description">
          <p className="description">{this.props.space.descriptio}</p>
        </div>
      </div>
    );
  }
}

export default SpaceShowContentMain;
