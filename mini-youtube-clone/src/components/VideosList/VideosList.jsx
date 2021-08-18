import React from 'react';

// css
import './VideosList.css';

import VideoItem from '../VideoItem/VideoItem';

const VideosList = ({ videos, handleVideoSelect }) => {
  return (
    <div className='videos-list'>
      {videos.length > 0 ? <h1>Results</h1> : ''}
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id.videoId}
            video={video}
            handleVideoSelect={handleVideoSelect}
          />
        );
      })}
    </div>
  );
};

export default VideosList;
