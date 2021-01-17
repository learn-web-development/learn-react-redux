import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {

  renderVideoItems() {
    return this.props.videos.map(
      (video, index) => <VideoItem key={ video.id.videoId } onClick={() => this.props.onVideoSelection(index)} video={video}></VideoItem>
    );
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        { this.renderVideoItems() }
      </div>
    )
  }
}

export default VideoList;
