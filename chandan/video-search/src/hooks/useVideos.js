import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([])

  const search = async (input) => {
    const response = await youtube.get('/search', {
      params: {
        q: input
      }
    });
    setVideos(response.data.items);
  }

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  return [videos, search];
}

export default useVideos;
