import axios from "axios";

const BASIC_URL = "http://localhost:8080";

const getProfile = (apiURL) => {
  return axios
    .get(`${BASIC_URL}/${apiURL}`)
    .then((res) => res.data)
    .catch((err) => err);
};

export { BASIC_URL, getProfile };
