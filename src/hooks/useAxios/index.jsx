import axios from "axios";

export const useAxios = () => {
  return async ({ url, method = "GET", params, data, headers }) => {
    return await axios({
      url: `https://greenshopapi.rakhmatov1020.uz//api${url}`,
      method,
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
        ...params,
      },
      data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...headers,
      },
    });
  };
};
