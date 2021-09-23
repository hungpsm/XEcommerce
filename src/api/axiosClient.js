import axios from "axios";
import queryString from "query-string";

// declare axiosClient to create API portal for server connection
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// interceptors that describe how to config request parameters such as Headers with Token
axiosClient.interceptors.request.use(async (config) => {
  // const token = await getFirebaseToken();
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
});

// interceptors that describe how to config response as a result from server
// as normal, we just need response.data from server and try binding this.
// hence, response.data from server.

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
