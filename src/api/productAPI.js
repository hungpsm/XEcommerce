import axiosClient from "./axiosClient";

// axios API. You can input arrays of REST API at here
const productAPI = {
  getAll: (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

// after that, export identified API as a service to reuse
export default productAPI;
