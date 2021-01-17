import axios from 'axios';

const KEY = 'AIzaSyBsO1-aflc--Kuqeb4bv64rQ-sb65MsVOE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    type: 'video',
    videoEmbeddable: true,
    part: 'snippet'
  }
});
