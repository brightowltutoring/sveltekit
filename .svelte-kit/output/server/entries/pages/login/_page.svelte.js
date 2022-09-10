import { c as create_ssr_component, a as subscribe, h as add_attribute } from "../../../chunks/index.js";
import { r as redirectAfterLoginTimeOut, b as redirectSetInterval, e as isLoggedIn } from "../../../chunks/store.js";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import "../../../chunks/index2.js";
const FIREBASE_apiKey = "AIzaSyDSux33iJAZsssEo2Za7As_eGGEThwXQZo";
const FIREBASE_authDomain = "thinksolve-app.firebaseapp.com";
const FIREBASE_projectId = "thinksolve-app";
const FIREBASE_storageBucket = "thinksolve-app.appspot.com";
const FIREBASE_messagingSenderId = "490986955869";
const FIREBASE_appId = "1:490986955869:web:433c6f7b31865fed5099b4";
const firebaseConfig = {
  apiKey: FIREBASE_apiKey,
  authDomain: FIREBASE_authDomain,
  projectId: FIREBASE_projectId,
  storageBucket: FIREBASE_storageBucket,
  messagingSenderId: FIREBASE_messagingSenderId,
  appId: FIREBASE_appId
};
const app = initializeApp(firebaseConfig);
getAuth(app);
getFirestore(app);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#flyingEmoji.svelte-m7g9u3.svelte-m7g9u3{display:flex;justify-content:center;align-items:center;-webkit-animation:svelte-m7g9u3-xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1) ;animation:svelte-m7g9u3-xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1) }#flyingEmoji.svelte-m7g9u3.svelte-m7g9u3::after{content:'\u{1F6F8}';display:block;width:1px;height:1px;border-radius:20px;-webkit-animation:svelte-m7g9u3-yAxis 3s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);animation:svelte-m7g9u3-yAxis 3s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64)}@-webkit-keyframes svelte-m7g9u3-yAxis{80%{-webkit-animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);transform:translateY(-100px) rotate(360deg) scale(2)}}@keyframes svelte-m7g9u3-yAxis{80%{-webkit-animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);transform:translateY(-100px) rotate(360deg) scale(2)}}@-webkit-keyframes svelte-m7g9u3-xAxis{20%{-webkit-animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);transform:translateX(200px)}}@keyframes svelte-m7g9u3-xAxis{20%{-webkit-animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);transform:translateX(200px)}}@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');:root{--transition-effect:ease-in fadeIn 0.6s}@-webkit-keyframes svelte-m7g9u3-fadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-m7g9u3-fadeIn{from{opacity:0}to{opacity:1}}#logInDiv.svelte-m7g9u3.svelte-m7g9u3{animation:var(--transition-effect);-moz-animation:var(--transition-effect);-o-animation:var(--transition-effect);-ms-animation:var(--transition-effect);-webkit-animation:var(--transition-effect)}.loginLogoutDivs.svelte-m7g9u3.svelte-m7g9u3{margin:0px auto;margin-top:50px;width:25vw;min-width:280px;padding:20px;font-family:'Nunito', sans-serif;font-weight:400}.loginLogoutDivs.svelte-m7g9u3 input.svelte-m7g9u3,button.svelte-m7g9u3.svelte-m7g9u3{box-sizing:border-box;width:100%;border-radius:2px;padding:15px;outline:none;margin-bottom:15px;font-family:'Nunito', sans-serif;font-weight:400;font-size:16px;transition:0.15s;-moz-transition:0.15s;-webkit-transition:0.15s}.loginLogoutDivs.svelte-m7g9u3 input.svelte-m7g9u3{background:#fff;border:1px solid #ccc}#googleBtn.svelte-m7g9u3.svelte-m7g9u3{background:#4285f4;border:1px solid #4285f4}#googleBtn.svelte-m7g9u3.svelte-m7g9u3:hover{color:#4285f4;background:#fff;border:1px solid #4285f4}.loginLogoutDivs.svelte-m7g9u3 button.svelte-m7g9u3{background:black;color:#fff;border:1px solid black}.loginLogoutDivs.svelte-m7g9u3 input.svelte-m7g9u3:hover{border:1px solid #999}.loginLogoutDivs.svelte-m7g9u3 button.svelte-m7g9u3:hover{color:black;background:#fff;border:1px solid black}.loginLogoutDivs.svelte-m7g9u3 input.svelte-m7g9u3:focus{background:rgba(255, 255, 255, 0.5) }.centering.svelte-m7g9u3.svelte-m7g9u3{display:flex;justify-content:center;align-items:center}",
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
  return `<main><video autoplay loop muted playsinline controlslist="${"nodownload"}" src="${"/login-bg-video-blurred.mp4"}" style="${"min-height: 90vh; max-height: 90vh; min-width: 100vw; max-width: 100vw; position: absolute; z-index: -1; top: 0; left: 0; margin: 0; padding: 0; filter: blur(10px); "}"></video>


    
   
    <div class="${"loginLogoutDivs  svelte-m7g9u3"}" id="${"logInDiv"}" style="${"display: block; "}"><br>
        <br>
        
            <button id="${"googleBtn"}" class="${"svelte-m7g9u3"}">Sign-in with Google</button>
        <br>
        <br>


        <button id="${"passwordlessLoginBtn"}" class="${"svelte-m7g9u3"}">Sign-in via link</button>
        
        <input id="${"emailField"}" type="${"email"}" placeholder="${"email"}" class="${"svelte-m7g9u3"}"${add_attribute("value", emailFieldValue, 0)}>


        <span id="${"emailStatusMessage"}" class="${"centering  svelte-m7g9u3"}" style="${"display:none"}"></span>
        <span id="${"flyingEmoji"}" style="${"display:none"}" class="${"svelte-m7g9u3"}"></span></div>


    <div class="${"loginLogoutDivs svelte-m7g9u3"}" id="${"logOutDiv"}" style="${"display: none"}"><h2 class="${"centering svelte-m7g9u3"}" id="${"loginWelcomeText"}">Welcome User </h2>
        <h3 class="${"centering svelte-m7g9u3"}">Redirecting to your page in </h3>
        <h3 class="${"centering svelte-m7g9u3"}" style="${"font-size: 30px;"}" id="${"redirectMessage"}">\u230A\u03C0\u230B</h3>

        <button id="${"logoutBtn"}" class="${"svelte-m7g9u3"}">Logout</button></div>

</main>`;
});
export {
  Page as default
};
