import React, { Component } from 'react';
import axios from 'axios';

class SpacesShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      space: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchSpace(id);
  }

  fetchSpace(id) {
    axios.get(`https://data.sfgov.org/resource/3ub7-d4yy.json?name=${id}`)
    .then(res => {
      console.log(res.data);
      this.setState({ space: res.data });
    })
    .catch(err => console.log(err));
  }

  render() {
    if (!this.state.space) {
      return <div>Loading...</div>;
    }
    return (
      <div>{this.state.space[0].name}</div>
    );
  }
}

export default SpacesShow;
