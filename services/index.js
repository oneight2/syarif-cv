import axios, { AxiosRequestConfig } from "axios";

const CallAPI = async ({ url, method, data }) => {
  let headers = {};

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);
  return response.data;
};

export default CallAPI;
