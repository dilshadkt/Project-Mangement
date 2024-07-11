import axios from "axios";

const instance = axios.create({
  baseURL: "https://airbnb-api-7y1p.onrender.com",
  // baseURL: "http://localhost:8080",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
