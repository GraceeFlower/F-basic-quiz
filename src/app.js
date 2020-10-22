import "./style/index.scss";
import { getProfile, getEducations } from "./script/askForData";
import defaultAvatar from "./static/default-avatar.jpg";

const profileAvatar = document.getElementsByClassName("profile-avatar")[0];
const profileDetail = document.getElementsByClassName("profile-detail")[0];
const educationDetail = document.getElementsByClassName("edu-detail")[0];

const initProfile = (user) => {
  // TODO GTB-3: * 建议用解构赋值，代码更可读
  profileAvatar.src = user.avatar ? user.avatar : defaultAvatar;
  profileDetail.innerText = `MY NAME IS ${user.name ? user.name : "GRACE"} ${
    user.age ? user.age : 18
  }YO AND THIS IS MY RESUME/CV`;
};

const initEducation = (educations) => {
  // TODO GTB-3: - reduce在这里使用不合适(不正确)
  educations.reduce((pre, cur, index) => {
    // TODO GTB-3: - 循环里面去操作dom
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

export { initProfile, initEducation };
// TODO GTB-3: * 没有分模块
// TODO GTB-4: * 有小步提交
