import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4000"
    : "https://deka-naturals-express.vercel.app";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export default axios;
