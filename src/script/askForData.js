const BASIC_URL = "http://localhost:8080";

const getProfile = (apiURL) => {
  return fetch(`${BASIC_URL}/${apiURL}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};

export { BASIC_URL, getProfile };
