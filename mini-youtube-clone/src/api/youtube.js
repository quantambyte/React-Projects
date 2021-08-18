import axios from 'axios';

// api key
const API_KEY = '';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: API_KEY,
  },
});
