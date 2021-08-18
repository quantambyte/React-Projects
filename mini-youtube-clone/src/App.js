import React, { useState } from 'react';

// components
import Search from './components/Search/Search';
import VideosList from './components/VideosList/VideosList';
import VideoDetails from './components/VideoDetail/VideoDetail';

// api
import youtubeApi from './api/youtube';

const App = () => {
  // state
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] =
    useState(null);

  // handlesubmit
  const handleSubmit = async (searchTerm) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: searchTerm,
      },
    });
    setVideos(response.data.items);
  };

  // handleVideoSelection
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <Search handleSearch={handleSubmit} />
      <VideoDetails video={selectedVideo} />
      <VideosList
        handleVideoSelect={handleVideoSelect}
        videos={videos}
      />
    </>
  );
};

export default App;
