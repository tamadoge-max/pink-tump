import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";

// Create an instance of axios with default configuration
const api: AxiosInstance = axios.create({
  baseURL: "./api",
  timeout: 10000, // 10 seconds
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
});

// Add a request interceptor to handle authentication
api.interceptors.request.use(
  (config) => {
    // You can add your authentication logic here, such as adding a token to the request headers
    // Example:
    const token = localStorage.getItem("token");

    if (token && token !== `undefined`) {
      const decoded_token = jwtDecode(token)?.exp;
      const today = new Date();
      if (decoded_token && today.getTime() <= decoded_token * 1000)
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle error globally
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (
        error.code === `401` ||
        //@ts-ignore
        error.response.data?.status === 401 ||
        error.response?.status === 401
      ) {
        console.error(`Authentication failed: 401`);
        localStorage.removeItem(`token`);
        localStorage.removeItem(`user`);
        if (window.location.pathname !== `/`) {
          window.location.href =
            window.location.protocol + "//" + window.location.host;
        }
      }

      console.log("Response error:", error.response.data);
      console.log("Status code:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.log("Request error:", error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.log("Request setup error:", error?.message);
    }
    return Promise.reject(error);
  }
);

export default api;
