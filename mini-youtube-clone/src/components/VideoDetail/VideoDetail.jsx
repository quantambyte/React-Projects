import React from 'react';

// css
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
  // if no video
  if (!video) {
    return (
      <div>
        <h2>
          Enter Keywords in SearchBar and Click on
          Video
        </h2>
      </div>
    );
  }

  //   if there is video
  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div className='video'>
        <iframe
          src={videoSource}
          allowFullScreen
          title='Video Player'
          frameborder='0'
        />

        <h2>{video.snippet.title}</h2>

        <p>{video.snippet.description}</p>
      </div>
    </>
  );
};

export default VideoDetail;
