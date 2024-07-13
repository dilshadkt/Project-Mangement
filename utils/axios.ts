import { API_URL } from "@/constants";
import axios from "axios";

// Create an Axios instance
const instance = axios.create({
  baseURL: "https://project-management-tk72.onrender.com/api/", // Use your production API base URL
  // baseURL: `${API_URL}`, // Use your local development API base URL
  withCredentials: true,
});

// Interceptor to handle any additional configurations
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
