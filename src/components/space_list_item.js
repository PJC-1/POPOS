import React from 'react';

const SpaceListItem = ({ space }) => {
  let desc = space.descriptio;
  if(desc) {
    desc = desc.slice(0, 50) + '...';
  }

  let hours = space.hours;

  return (
    <li>
      <div>
        <h2>{space.name}</h2>
        <div>
          <p>{space.type}</p>
        </div>
        {hours ? (
          <p>{space.hours}</p>
        ) : (
          <p>{space.hours_type}</p>
        )}
        <p>{desc}</p>
      </div>
    </li>
  );
};

export default SpaceListItem;
