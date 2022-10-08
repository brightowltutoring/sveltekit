import { c as create_ssr_component, a as subscribe, d as add_attribute } from "../../../chunks/index.js";
import { r as redirectAfterLoginTimeOut, a as redirectSetInterval, i as isLoggedIn } from "../../../chunks/store.js";
import "../../../chunks/firebase.js";
import "firebase/firestore/lite";
import "firebase/auth";
import "../../../chunks/index2.js";
import "firebase/app";
import "firebase/functions";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '#flyingEmoji.svelte-1lkingg.svelte-1lkingg{display:flex;justify-content:center;align-items:center;-webkit-animation:svelte-1lkingg-xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);animation:svelte-1lkingg-xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1)}#flyingEmoji.svelte-1lkingg.svelte-1lkingg::after{content:"\u{1F6F8}";display:block;width:1px;height:1px;border-radius:20px;-webkit-animation:svelte-1lkingg-yAxis 3s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);animation:svelte-1lkingg-yAxis 3s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64)}@-webkit-keyframes svelte-1lkingg-yAxis{80%{-webkit-animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);transform:translateY(-100px) rotate(360deg) scale(2)}}@keyframes svelte-1lkingg-yAxis{80%{-webkit-animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);transform:translateY(-100px) rotate(360deg) scale(2)}}@-webkit-keyframes svelte-1lkingg-xAxis{20%{-webkit-animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);transform:translateX(200px)}}@keyframes svelte-1lkingg-xAxis{20%{-webkit-animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);transform:translateX(200px)}}@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");:root{--transition-effect:ease-in fadeIn 0.6s}@-webkit-keyframes svelte-1lkingg-fadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-1lkingg-fadeIn{from{opacity:0}to{opacity:1}}#logInDiv.svelte-1lkingg.svelte-1lkingg{animation:var(--transition-effect);-moz-animation:var(--transition-effect);-o-animation:var(--transition-effect);-ms-animation:var(--transition-effect);-webkit-animation:var(--transition-effect)}.loginLogoutDivs.svelte-1lkingg.svelte-1lkingg{margin:0px auto;width:80vw;max-width:380px;padding:20px;font-family:"Nunito", sans-serif;font-weight:400}.loginLogoutDivs.svelte-1lkingg input.svelte-1lkingg,button.svelte-1lkingg.svelte-1lkingg{box-sizing:border-box;width:100%;border-radius:2px;padding:15px;outline:none;margin-bottom:15px;font-family:"Nunito", sans-serif;font-weight:400;font-size:16px;transition:0.15s;-moz-transition:0.15s;-webkit-transition:0.15s}.loginLogoutDivs.svelte-1lkingg input.svelte-1lkingg{background:#fff;border:1px solid #ccc}#googleBtn.svelte-1lkingg.svelte-1lkingg{background:#4285f4;border:1px solid #4285f4}#googleBtn.svelte-1lkingg.svelte-1lkingg:hover{color:#4285f4;background:#fff;border:1px solid #4285f4}.loginLogoutDivs.svelte-1lkingg button.svelte-1lkingg{background:black;color:#fff;border:1px solid black}.loginLogoutDivs.svelte-1lkingg input.svelte-1lkingg:hover{border:1px solid #999}.loginLogoutDivs.svelte-1lkingg button.svelte-1lkingg:hover{color:black;background:#fff;border:1px solid black}.loginLogoutDivs.svelte-1lkingg input.svelte-1lkingg:focus{background:rgba(255, 255, 255, 0.5)}.centering.svelte-1lkingg.svelte-1lkingg{display:flex;justify-content:center;align-items:center}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_redirectAfterLoginTimeOut;
  let $$unsubscribe_redirectSetInterval;
  let $$unsubscribe_isLoggedIn;
  $$unsubscribe_redirectAfterLoginTimeOut = subscribe(redirectAfterLoginTimeOut, (value) => value);
  $$unsubscribe_redirectSetInterval = subscribe(redirectSetInterval, (value) => value);
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
  let emailFieldValue = "";
  $$result.css.add(css);
  $$unsubscribe_redirectAfterLoginTimeOut();
  $$unsubscribe_redirectSetInterval();
  $$unsubscribe_isLoggedIn();
  return `<main><div class="${"loginLogoutDivs  svelte-1lkingg"}" id="${"logInDiv"}" style="${"display: block; "}"><br>
    <br>

    <button id="${"googleBtn"}" class="${"svelte-1lkingg"}">Sign-in with Google</button>
    <br>
    <br>

    <button id="${"passwordlessLoginBtn"}" class="${"svelte-1lkingg"}">Sign-in via link</button>

    <input id="${"emailField"}" type="${"email"}" placeholder="${"email"}" class="${"svelte-1lkingg"}"${add_attribute("value", emailFieldValue, 0)}>

    <span id="${"emailStatusMessage"}" class="${"centering  svelte-1lkingg"}" style="${"display:none"}"></span>
    <span id="${"flyingEmoji"}" style="${"display:none"}" class="${"svelte-1lkingg"}"></span></div>

  <div class="${"loginLogoutDivs svelte-1lkingg"}" id="${"logOutDiv"}" style="${"display: none"}"><h2 class="${"centering svelte-1lkingg"}" id="${"loginWelcomeText"}">Welcome User</h2>
    <h3 class="${"centering svelte-1lkingg"}">Redirecting to your page in</h3>
    <h3 class="${"centering svelte-1lkingg"}" style="${"font-size: 30px;"}" id="${"redirectMessage"}">\u230A\u03C0\u230B</h3>

    <button id="${"logoutBtn"}" class="${"svelte-1lkingg"}">Logout</button></div>
</main>`;
});
export {
  Page as default
};
