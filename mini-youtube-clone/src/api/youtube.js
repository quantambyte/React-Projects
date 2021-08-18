import axios from 'axios';

// api key
const API_KEY =
  'AIzaSyCt3GDqOaTQu_DLM8ZxbE7EU6YgNx6xCXM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: API_KEY,
  },
});
