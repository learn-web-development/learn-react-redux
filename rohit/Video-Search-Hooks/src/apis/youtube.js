import Axios from 'axios'

const KEY = "CHOOSE_YOUR_API_KEY";

export default Axios.create( {
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 10,
    key: KEY
  }
})
