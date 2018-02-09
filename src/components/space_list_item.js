import React from 'react';

const SpaceListItem = ({ space }) => {
  let desc = space.descriptio;
  if(desc) {
    desc = desc.slice(0, 50) + '...';
  }

  return (
    <li>
      <div>
        <h2>{space.name}</h2>
        <p>{desc}</p>
      </div>
    </li>
  );
};

export default SpaceListItem;
