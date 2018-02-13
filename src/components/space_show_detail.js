import React, { Component } from 'react';

class SpaceShowDetail extends Component {
  render() {
    return (
      <div>
        {this.props.space[0].name}
      </div>
    );
  }
}

export default SpaceShowDetail;
