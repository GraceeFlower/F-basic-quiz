import axios from "axios";

const BASIC_URL = "http://localhost:8080";
const apiUrl = document.URL.split("/").slice(3).join("/");

const getProfile = () => {
  return axios
    .get(`${BASIC_URL}/${apiUrl}`)
    .then((res) => res.data)
    .catch(() => "");
};

const getEducations = () => {
  return axios
    .get(`${BASIC_URL}/${apiUrl}/educations`)
    .then((res) => res.data)
    .catch(() => "");
};

export { BASIC_URL, getProfile, getEducations };
