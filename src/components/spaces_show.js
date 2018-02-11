import React, { Component } from 'react';
import axios from 'axios';

class SpacesShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchSpaces(id);
  }

  fetchSpaces(id) {
    axios.get(`https://data.sfgov.org/resource/3ub7-d4yy.json?name=${id}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>spaces show</div>
    );
  }
}

export default SpacesShow;
