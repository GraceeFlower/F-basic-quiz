import "./style/index.scss";
import { getProfile } from "./script/askForData";
import defaultAvatar from "./static/default-avatar.jpg";

const profileAvatar = document.getElementsByClassName("profile-avatar")[0];
const profileDetail = document.getElementsByClassName("profile-detail")[0];
const apiUrl = document.URL.split("/").slice(3).join("/");

const initProfile = (user) => {
  profileAvatar.src = user.avatar ? user.avatar : defaultAvatar;
  profileDetail.innerText = `MY NAME IS ${user.name ? user.name : "GRACE"} ${
    user.age ? user.age : 18
  }YO AND THIS IS MY RESUME/CV`;
};

getProfile(apiUrl).then((user) => initProfile(user));
