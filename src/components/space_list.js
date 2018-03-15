import React from 'react';
import { Link } from 'react-router-dom';
import SpaceListItem from './space_list_item';

const SpaceList = props => {
  console.log(props.spaces);

  const spaceItems = props.spaces.map(space => {
    return (
      <SpaceListItem
        key={space.name}
        space={space}
      />
    );
  });

  return (
    <div>
      <ul className="space-list">
        {spaceItems}
      </ul>
    </div>
  );
}

export default SpaceList;
