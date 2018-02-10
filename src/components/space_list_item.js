import React from 'react';

const SpaceListItem = ({ space }) => {
  let hours = space.hours;
  let desc = space.descriptio;

  if(desc) {
    desc = desc.slice(0, 50) + '...';
  }

  return (
    <li>
      <div>
        <h2>{space.name}</h2>
        <div>
          <p>{space.type}</p>
        </div>
        <div>
          {hours ? (
            <p>{hours}</p>
          ) : (
            <p>{space.hours_type}</p>
          )}
        </div>
        <p>{desc}</p>
      </div>
    </li>
  );
};

export default SpaceListItem;
