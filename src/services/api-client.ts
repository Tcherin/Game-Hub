import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0b58f6bf6e2d4dc7bd7bd1768b5afd33",
  },
});
