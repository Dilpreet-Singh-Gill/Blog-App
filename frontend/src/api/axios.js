import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // your Express base URL
  // timeout: 10000, // optional, 10 sec timeout
});

// 🔥 Automatically attach token before each request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔥 Handle global responses, e.g. auto-logout on 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized. Logging out...");
      localStorage.removeItem("token");
      window.location = "/login"; // or use navigate if inside a React component
    }
    return Promise.reject(error);
  }
);

export default api;
