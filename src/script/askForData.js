import axios from "axios";

const BASIC_URL = "http://localhost:8080";

const getProfile = (apiUrl) => {
  return axios
    .get(`${BASIC_URL}/${apiUrl}`)
    .then((res) => res.data)
    .catch(() => "");
};

export { BASIC_URL, getProfile };
