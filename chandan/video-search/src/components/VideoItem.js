import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {
  const { snippet } = props.video;
  return (
    <div className="item video-item" onClick={ props.onClick }>
        <img src={snippet.thumbnails.default.url} alt={snippet.title} className="ui image"></img>
        <div className="content pointer">
          <div className="header">{snippet.title}</div>
        </div>
    </div>
  )
}

export default VideoItem;
