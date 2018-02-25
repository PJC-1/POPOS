import React, { Component } from 'react';
import SpaceShowHeader from './space_show_header';
import SpaceShowContentSide from './space_show_content_side';
import SpaceShowContentMain from './space_show_content_main';

class SpaceShowDetail extends Component {
  render() {
    return (
      <div className="space-wrapper">
        <SpaceShowHeader space={this.props.space}/>
        <div className="space-container">
          <div className="space-content-side">
            <SpaceShowContentSide space={this.props.space}/>
          </div>
          <div className="space-content">
            <SpaceShowContentMain space={this.props.space}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SpaceShowDetail;
