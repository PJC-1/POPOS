import React from 'react';
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
      {spaceItems}
    </div>
  );
}

export default SpaceList;
