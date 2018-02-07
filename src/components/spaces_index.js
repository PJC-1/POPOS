import React, { Component } from 'react';
import axios from 'axios';
import SpaceList from './space_list';

class SpacesIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: []
    };

    this.fetchSpaces();
  }

  fetchSpaces() {
    axios.get("https://data.sfgov.org/resource/3ub7-d4yy.json")
    .then(res => {
      console.log(res.data);
      this.setState({ spaces: res.data })
    })
    .catch(err => console.log(err))
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
