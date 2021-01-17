import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';

const App = (props) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, search] = useVideos('spacex')

  const onVideoSelection = (index) => {
    setCurrentVideo(videos[index]);
  }

  useEffect(() => {
    setCurrentVideo(videos[0]);
  }, [videos])

  return (
    <div className="ui container">
      <SearchBar onUserInput={search}></SearchBar>
      <div className="ui grid">
        <div className="eleven wide column">
          <VideoDetail video={currentVideo}></VideoDetail>
        </div>
        <div className="five wide column">
          <VideoList videos={ videos } onVideoSelection={ onVideoSelection }></VideoList>
        </div>
      </div>
    </div>
  )
}

export default App;
