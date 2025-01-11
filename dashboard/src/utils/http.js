import axios from "axios";
import { getHeader } from "./header";
import { endpoints } from "./endpoints";

const API_ROOT = process.env.NEXT_PUBLIC_API_URL; // Root API URL from environment variables
const TIMEOUT = 20000; // 20 seconds timeout for requests

const http = (headerType = "json", baseURL = API_ROOT) => {
  const headers = getHeader(headerType); // Get dynamic headers based on type

  const client = axios.create({
    baseURL,
    headers,
    timeout: TIMEOUT,
  });

  // Intercept response object to handle success and error globally
  client.interceptors.response.use(handleSuccess, handleError);

  function handleSuccess(response) {
    return response;
  }

  function handleError(error) {
    const originalRequest = error.config;

    // Handle unauthorized error (401)
    if (error.response?.status === 401 && !originalRequest._retry) {
      const refreshToken =
        typeof window !== "undefined" && localStorage.getItem("refreshToken");

      if (!refreshToken) {
        // If refresh token is missing, log out the user
        localStorage.clear();
        window.location.href = "/";
        return Promise.reject(error.response?.data);
      }

      // Prevent infinite retries
      originalRequest._retry = true;

      // Refresh access token
      return axios
        .post(`${API_ROOT}${endpoints.auth.refresh}`, {
          refresh_token: refreshToken,
        })
        .then((response) => {
          const { token } = response.data;

          // Update the new token in localStorage and client headers
          localStorage.setItem("token", token);
          client.defaults.headers["Authorization"] = `Bearer ${token}`;

          // Retry the original request with the new token
          originalRequest.headers["Authorization"] = `Bearer ${token}`;
          return client(originalRequest);
        })
        .catch((refreshError) => {
          console.error("Error refreshing token:", refreshError);

          // Log out if refresh fails
          if (refreshError.response?.status === 401) {
            localStorage.clear();
            window.location.href = "/";
          }
          return Promise.reject(refreshError);
        });
    }

    // Handle forbidden access (403)
    if (error.response?.status === 403) {
      console.warn("Forbidden access:", error.response?.data?.message);
      window.location.href = "/403"; // Redirect to a forbidden page if needed
    }

    // Handle other errors
    if (error.response?.status && error.response?.status !== 500) {
      return Promise.reject(error.response?.data);
    }

    // Handle server errors (500)
    return Promise.reject(error);
  }

  // Define reusable HTTP methods
  function get(path) {
    return client.get(path).then((response) => response.data);
  }

  function post(path, payload, isFormData = false) {
    const config = isFormData
      ? { headers: { "Content-Type": "multipart/form-data" } }
      : {};
    return client.post(path, payload, config).then((response) => response.data);
  }

  function put(path, payload) {
    return client.put(path, payload).then((response) => response.data);
  }

  function patch(path, payload) {
    return client.patch(path, payload).then((response) => response.data);
  }

  function _delete(path, data) {
    const config = data ? { data } : {};
    return client.delete(path, config).then((response) => response?.data);
  }

  return {
    get,
    post,
    put,
    patch,
    delete: _delete,
  };
};

export default http;
