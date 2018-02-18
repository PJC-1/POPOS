import React, { Component } from 'react';

class SpaceShowDetail extends Component {
  render() {
    return (
      <div className="space-wrapper">
        <header>
          <h1 className="header-title">{this.props.space.name}</h1>
          <p>{this.props.space.popos_addr}</p>
        </header>
        <div className="space-container">
          <div className="space-content-side">
            <div>
              <div className="space-side-div-two">
                <div className="space-detail-one">
                  {this.props.space.hours ? (
                    <p>{this.props.space.hours}</p>
                  ) : (
                    <p>{this.props.space.hours_type}</p>
                  )}
                </div>
                <div className="space-detail-two">
                  {this.props.space.type}
                </div>
              </div>
            </div>
          </div>
          <div className="space-content">
            <div className="space-content-sub">
              <div className="space-description">
                <p className="description">{this.props.space.descriptio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpaceShowDetail;
