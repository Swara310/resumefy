import axios from "axios";

// Base URL for API calls
export const url = "http://localhost:5000";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: url,
  withCredentials: true, // Ensure credentials are included
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
