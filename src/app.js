import "./style/index.scss";
import { getProfile, getEducations } from "./script/askForData";
import defaultAvatar from "./static/default-avatar.jpg";

const profileAvatar = document.getElementsByClassName("profile-avatar")[0];
const profileDetail = document.getElementsByClassName("profile-detail")[0];
const educationDetail = document.getElementsByClassName("edu-detail")[0];

const initProfile = (user) => {
  profileAvatar.src = user.avatar ? user.avatar : defaultAvatar;
  profileDetail.innerText = `MY NAME IS ${user.name ? user.name : "GRACE"} ${
    user.age ? user.age : 18
  }YO AND THIS IS MY RESUME/CV`;
};

const initEducation = (educations) => {
  educations.reduce((pre, cur, index) => {
    educationDetail.innerHTML += `<li class="education" id=${index}>
       <aside class="edu-year">${cur.year}</aside>
       <article class="edu-content">
         <h3 class="edu-title">${cur.title}</h3>
         <p class="edu-description">${cur.description}</p>
       </article>
     </li>`;
    return pre;
  }, "");
};

getProfile().then((user) => initProfile(user));
getEducations().then((educations) => initEducation(educations));
