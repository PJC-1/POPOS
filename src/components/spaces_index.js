import React, { Component } from 'react';
import SpaceList from './space_list';

class SpacesIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: []
    };
  }

  render() {
    return (
      <div>
        <SpaceList />
      </div>
    );
  }
}

export default SpacesIndex;
