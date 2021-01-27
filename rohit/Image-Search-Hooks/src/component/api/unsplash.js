import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID CHOOSE_YOUR_API_KEY",
  },
});
