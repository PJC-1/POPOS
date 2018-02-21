import React, { Component } from 'react';
import axios from 'axios';
import SpaceList from './space_list';
import Map from './map';

class SpacesIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: null
    };
  }

  componentDidMount() {
    this.fetchSpaces();
  }

  fetchSpaces() {
    axios.get("https://data.sfgov.org/resource/3ub7-d4yy.json")
    .then(res => {
      console.log(res.data);
      this.setState({ spaces: res.data })
    })
    .catch(err => console.log(err));
  }

  render() {
    if (!this.state.spaces) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <SpaceList spaces={this.state.spaces}/>
        <Map markers={this.state.spaces}/>
      </div>
    );
  }
}

export default SpacesIndex;
