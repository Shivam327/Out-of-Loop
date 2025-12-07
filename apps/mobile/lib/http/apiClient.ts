import axios from "axios";
import { getApiBaseUrl } from "../config";

const apiClient = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    console.log("REQUEST", {
      method: config.method,
      url: config.baseURL + config.url,
      params: config.params,
      data: config.data,
    });
    return config;
  },
  (error) => {
    console.error("REQUEST ERROR", error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log("RESPONSE", {
      url: response.config?.url,
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.error("RESPONSE ERROR", {
      url: error.config?.url,
      status: error.response?.status,
      message: error.message,
      data: error.response?.data,
    });
    return Promise.reject(error);
  }
);

export { apiClient };

