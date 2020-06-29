import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Ey8yfhhlQa5qn6y3b6QBiVJlyjzNzn2euAN7kad52Vo",
  },
});
