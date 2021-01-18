import axios from 'axios';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    type: 'video',
    videoEmbeddable: true,
    part: 'snippet'
  }
});
