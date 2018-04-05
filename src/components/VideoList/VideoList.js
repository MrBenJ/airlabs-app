import React, { Component } from 'react';
import { connect } from 'react-redux';

import Video from './Video';
import style from './style';
class VideoList extends Component {
  render() {
    return (
      <div className={style}>
        {this.props.videos.map( data => <Video key={data.uri} data={data} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { videos } = state;
  return {
    videos
  };
}

export default connect(mapStateToProps)(VideoList);
