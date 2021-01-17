import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID aV-jp1LLXTUff7T_1_9vLWJjkTgWmQ3jRqyj7TRQR80"
  }
});
