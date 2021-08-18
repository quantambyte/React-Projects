import React from 'react';

// css
import './VideoItem.css';

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div
      onClick={() => handleVideoSelect(video)}
      className='video-item item'
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />

      <h2>{video.snippet.title}</h2>
    </div>
  );
};

export default VideoItem;
