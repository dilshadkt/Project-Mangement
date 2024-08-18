import axios from "axios";

// Create an Axios instance
const instance = axios.create({
  baseURL: "https://project-management-tk72.onrender.com/api/",
  // baseURL: `http://localhost:8080/api/`  ,
  withCredentials: true,
});

// Interceptor to handle any additional configurations
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["X-auth-token"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
