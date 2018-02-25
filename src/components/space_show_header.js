import React, { Component } from 'react';

class SpaceShowHeader extends Component {
  render() {
    return (
      <header>
        <h1 className="header-title">{this.props.space.name}</h1>
        <p>{this.props.space.popos_addr}</p>
      </header>
    );
  }
}

export default SpaceShowHeader;
