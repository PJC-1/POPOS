import React, { Component } from 'react';
import axios from 'axios';
import SpaceList from './space_list';
import Map from './map';

class SpacesIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: null,
      styleID: 'map',
      zoom: 15,
      center: [37.7865, -122.406]
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

  // I believe that SpaceList should receive the onMouseLeave and onMouseMove functions that will animate the markers.

  render() {
    if (!this.state.spaces) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <SpaceList spaces={this.state.spaces}/>
        <Map markers={this.state.spaces} style={this.state.styleID} center={this.state.center} zoom={this.state.zoom}/>
      </div>
    );
  }
}

export default SpacesIndex;
