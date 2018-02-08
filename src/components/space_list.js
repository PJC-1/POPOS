import React from 'react';
import SpaceListItem from './space_list_item';

const SpaceList = props => {
  console.log(props.spaces);

  return (
    <div>
      <SpaceListItem />
    </div>
  );
}

export default SpaceList;
