import axios from "axios";

const http = axios.create({
  baseURL: "/api"
});

http.interceptors.request.use(
  async config => {
    const headers = config.headers || {};
    console.log(headers);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default http;
