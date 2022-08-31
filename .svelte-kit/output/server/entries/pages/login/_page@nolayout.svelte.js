import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDSux33iJAZsssEo2Za7As_eGGEThwXQZo",
  authDomain: "thinksolve-app.firebaseapp.com",
  projectId: "thinksolve-app",
  storageBucket: "thinksolve-app.appspot.com",
  messagingSenderId: "490986955869",
  appId: "1:490986955869:web:433c6f7b31865fed5099b4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
getFirestore(app);
const _page_nolayout_svelte_svelte_type_style_lang = "";
const css = {
  code: "#flyingEmoji.svelte-1mhl4m5.svelte-1mhl4m5{display:flex;justify-content:center;align-items:center;-webkit-animation:svelte-1mhl4m5-xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1) ;animation:svelte-1mhl4m5-xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1) }#flyingEmoji.svelte-1mhl4m5.svelte-1mhl4m5::after{content:'\u{1F6F8}';display:block;width:1px;height:1px;border-radius:20px;-webkit-animation:svelte-1mhl4m5-yAxis 3s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);animation:svelte-1mhl4m5-yAxis 3s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64)}@-webkit-keyframes svelte-1mhl4m5-yAxis{80%{-webkit-animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);transform:translateY(-100px) rotate(360deg) scale(2)}}@keyframes svelte-1mhl4m5-yAxis{80%{-webkit-animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);transform:translateY(-100px) rotate(360deg) scale(2)}}@-webkit-keyframes svelte-1mhl4m5-xAxis{20%{-webkit-animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);transform:translateX(200px)}}@keyframes svelte-1mhl4m5-xAxis{20%{-webkit-animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);transform:translateX(200px)}}@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');:root{--transition-effect:ease-in fadeIn 0.6s}@-webkit-keyframes svelte-1mhl4m5-fadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-1mhl4m5-fadeIn{from{opacity:0}to{opacity:1}}#logInDiv.svelte-1mhl4m5.svelte-1mhl4m5{animation:var(--transition-effect);-moz-animation:var(--transition-effect);-o-animation:var(--transition-effect);-ms-animation:var(--transition-effect);-webkit-animation:var(--transition-effect)}.loginLogoutDivs.svelte-1mhl4m5.svelte-1mhl4m5{margin:0px auto;margin-top:50px;width:25vw;min-width:280px;padding:20px;font-family:'Nunito', sans-serif;font-weight:400}.loginLogoutDivs.svelte-1mhl4m5 input.svelte-1mhl4m5,button.svelte-1mhl4m5.svelte-1mhl4m5{box-sizing:border-box;width:100%;border-radius:2px;padding:15px;outline:none;margin-bottom:15px;font-family:'Nunito', sans-serif;font-weight:400;font-size:16px;transition:0.15s;-moz-transition:0.15s;-webkit-transition:0.15s}.loginLogoutDivs.svelte-1mhl4m5 input.svelte-1mhl4m5{background:#fff;border:1px solid #ccc}#googleBtn.svelte-1mhl4m5.svelte-1mhl4m5{background:#4285f4;border:1px solid #4285f4}#googleBtn.svelte-1mhl4m5.svelte-1mhl4m5:hover{color:#4285f4;background:#fff;border:1px solid #4285f4}.loginLogoutDivs.svelte-1mhl4m5 button.svelte-1mhl4m5{background:black;color:#fff;border:1px solid black}.loginLogoutDivs.svelte-1mhl4m5 input.svelte-1mhl4m5:hover{border:1px solid #999}.loginLogoutDivs.svelte-1mhl4m5 button.svelte-1mhl4m5:hover{color:black;background:#fff;border:1px solid black}.loginLogoutDivs.svelte-1mhl4m5 input.svelte-1mhl4m5:focus{background:rgba(255, 255, 255, 0.5) }.centering.svelte-1mhl4m5.svelte-1mhl4m5{display:flex;justify-content:center;align-items:center}",
  map: null
};
const Page_nolayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let emailFieldValue;
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    signInWithEmailLink(auth, email, window.location.href).then((result) => {
      window.localStorage.removeItem("emailForSignIn");
      console.log("signInWithEmailLink then caught");
    }).catch((error) => {
      console.log("signInWithEmailLink error caught");
    });
  }
  $$result.css.add(css);
  return `<main><video autoplay loop muted playsinline controlslist="${"nodownload"}" src="${"/login-bg-video-blurred.mp4"}" style="${"min-height: 100vh; max-height: 100vh; min-width: 100vw; max-width: 100vw; position: absolute; z-index: -1; top: 0; left: 0; margin: 0; padding: 0; filter: blur(10px); "}"></video>

    
   
    <div class="${"loginLogoutDivs svelte-1mhl4m5"}" id="${"logInDiv"}" style="${"display: block; "}"><br>
        <br>
        <button id="${"googleBtn"}" class="${"svelte-1mhl4m5"}">Sign-in with Google</button>
        <br>
        <br>

        <div id="${"emailSectionHover"}"><button id="${"passwordlessLoginBtn"}" class="${"svelte-1mhl4m5"}">Sign-in via link</button>


            <input id="${"emailField"}" type="${"email"}" placeholder="${"email"}" class="${"svelte-1mhl4m5"}"${add_attribute("value", emailFieldValue, 0)}>


            <span id="${"emailStatusMessage"}" class="${"centering  svelte-1mhl4m5"}" style="${"display:none"}"></span>
            <span id="${"flyingEmoji"}" style="${"display:none"}" class="${"svelte-1mhl4m5"}"></span></div></div>


    <div class="${"loginLogoutDivs svelte-1mhl4m5"}" id="${"logOutDiv"}" style="${"display: none"}"><h2 class="${"centering svelte-1mhl4m5"}" id="${"loginWelcomeText"}">Welcome User </h2>
        <h3 class="${"centering svelte-1mhl4m5"}">Redirecting to your page in </h3>
        <h3 class="${"centering svelte-1mhl4m5"}" style="${"font-size: 30px;"}" id="${"redirectMessage"}">\u230A\u03C0\u230B</h3>

        <button id="${"logoutBtn"}" class="${"svelte-1mhl4m5"}">Logout</button></div>

</main>`;
});
export {
  Page_nolayout as default
};
