import React from 'react';
import { Link } from 'react-router-dom';
import SpaceShowDetail from './space_show_detail';

const SpacesShow = props => {
  console.log(props.location.state.space);
  if (!props.location.state.space) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <Link to="/spaces" className="backLink">
        back
      </Link>
      <SpaceShowDetail space={props.location.state.space} />
    </div>
  );
}

export default SpacesShow;
