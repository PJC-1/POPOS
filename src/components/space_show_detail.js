import React, { Component } from 'react';

class SpaceShowDetail extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="header-title">{this.props.space[0].name}</h1>
          <p>{this.props.space[0].popos_addr}</p>
        </header>
        <div className="space-container">          
          <div className="space-content">
            <div className="space-content-sub">
              <div className="space-description">
                <p className="description">{this.props.space[0].descriptio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpaceShowDetail;
