import "./style/index.scss";
import { getProfile } from "./script/askForData";

const profileAvatar = document.getElementsByClassName("profile-avatar")[0];
const profileDetail = document.getElementsByClassName("profile-detail")[0];
const apiURL = document.URL.split("/").slice(3).join("/");

const initProfile = (user) => {
  profileAvatar.src = user.avatar;
  profileDetail.innerText = `MY NAME IS ${user.name} ${user.age}YO AND THIS IS MY RESUME/CV`;
};

getProfile(apiURL).then((user) => initProfile(user));
