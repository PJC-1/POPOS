import React, { Component } from 'react';
import SpaceShowHeader from './space_show_header';
import SpaceShowContentSide from './space_show_content_side';

class SpaceShowDetail extends Component {
  render() {
    return (
      <div className="space-wrapper">
        <SpaceShowHeader space={this.props.space}/>
        <div className="space-container">
          <SpaceShowContentSide space={this.props.space}/>
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
