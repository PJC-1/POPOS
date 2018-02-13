import React from 'react';
import { Link } from 'react-router-dom';

const SpaceListItem = ({ space }) => {
  let hours = space.hours;
  let desc = space.descriptio;

  if(desc) {
    desc = desc.slice(0, 50) + '...';
  }

  return (
    <li className="space-item">
      <div className="space-item-detail">
        <h2><Link to={`/spaces/${space.name}`}>{space.name}</Link></h2>
        <div className="space-item-detail-div">
          <p>{space.popos_addr}</p>
        </div>
        <div className="space-item-detail-div">
          {hours ? (
            <p>{hours}</p>
          ) : (
            <p>{space.hours_type}</p>
          )}
        </div>
        <p className="space-item-description">{desc}</p>
      </div>
    </li>
  );
};

export default SpaceListItem;
