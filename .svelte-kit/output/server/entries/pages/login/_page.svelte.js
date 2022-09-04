import { c as create_ssr_component, f as add_attribute } from "../../../chunks/index.js";
import "../../../chunks/firebase.js";
import "firebase/firestore/lite";
import "firebase/auth";
import "firebase/app";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#flyingEmoji.svelte-174ivch.svelte-174ivch{display:flex;justify-content:center;align-items:center;-webkit-animation:svelte-174ivch-xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1) ;animation:svelte-174ivch-xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1) }#flyingEmoji.svelte-174ivch.svelte-174ivch::after{content:'\u{1F6F8}';display:block;width:1px;height:1px;border-radius:20px;-webkit-animation:svelte-174ivch-yAxis 3s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);animation:svelte-174ivch-yAxis 3s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64)}@-webkit-keyframes svelte-174ivch-yAxis{80%{-webkit-animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);transform:translateY(-100px) rotate(360deg) scale(2)}}@keyframes svelte-174ivch-yAxis{80%{-webkit-animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);transform:translateY(-100px) rotate(360deg) scale(2)}}@-webkit-keyframes svelte-174ivch-xAxis{20%{-webkit-animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);transform:translateX(200px)}}@keyframes svelte-174ivch-xAxis{20%{-webkit-animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);transform:translateX(200px)}}@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');:root{--transition-effect:ease-in fadeIn 0.6s}@-webkit-keyframes svelte-174ivch-fadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-174ivch-fadeIn{from{opacity:0}to{opacity:1}}#logInDiv.svelte-174ivch.svelte-174ivch{animation:var(--transition-effect);-moz-animation:var(--transition-effect);-o-animation:var(--transition-effect);-ms-animation:var(--transition-effect);-webkit-animation:var(--transition-effect)}.loginLogoutDivs.svelte-174ivch.svelte-174ivch{margin:0px auto;margin-top:50px;width:25vw;min-width:280px;padding:20px;font-family:'Nunito', sans-serif;font-weight:400}.loginLogoutDivs.svelte-174ivch input.svelte-174ivch,button.svelte-174ivch.svelte-174ivch{box-sizing:border-box;width:100%;border-radius:2px;padding:15px;outline:none;margin-bottom:15px;font-family:'Nunito', sans-serif;font-weight:400;font-size:16px;transition:0.15s;-moz-transition:0.15s;-webkit-transition:0.15s}.loginLogoutDivs.svelte-174ivch input.svelte-174ivch{background:#fff;border:1px solid #ccc}#googleBtn.svelte-174ivch.svelte-174ivch{background:#4285f4;border:1px solid #4285f4}#googleBtn.svelte-174ivch.svelte-174ivch:hover{color:#4285f4;background:#fff;border:1px solid #4285f4}.loginLogoutDivs.svelte-174ivch button.svelte-174ivch{background:black;color:#fff;border:1px solid black}.loginLogoutDivs.svelte-174ivch input.svelte-174ivch:hover{border:1px solid #999}.loginLogoutDivs.svelte-174ivch button.svelte-174ivch:hover{color:black;background:#fff;border:1px solid black}.loginLogoutDivs.svelte-174ivch input.svelte-174ivch:focus{background:rgba(255, 255, 255, 0.5) }.centering.svelte-174ivch.svelte-174ivch{display:flex;justify-content:center;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let emailFieldValue = "";
  $$result.css.add(css);
  return `<main><video autoplay loop muted playsinline controlslist="${"nodownload"}" src="${"/login-bg-video-blurred.mp4"}" style="${"min-height: 100vh; max-height: 100vh; min-width: 100vw; max-width: 100vw; position: absolute; z-index: -1; top: 0; left: 0; margin: 0; padding: 0; filter: blur(10px); "}"></video>


    
   
    <div class="${"loginLogoutDivs  svelte-174ivch"}" id="${"logInDiv"}" style="${"display: block; "}"><br>
        <br>
        
            <button id="${"googleBtn"}" class="${"svelte-174ivch"}">Sign-in with Google</button>
        <br>
        <br>


        <button id="${"passwordlessLoginBtn"}" class="${"svelte-174ivch"}">Sign-in via link</button>
        
        <input id="${"emailField"}" type="${"email"}" placeholder="${"email"}" class="${"svelte-174ivch"}"${add_attribute("value", emailFieldValue, 0)}>


        <span id="${"emailStatusMessage"}" class="${"centering  svelte-174ivch"}" style="${"display:none"}"></span>
        <span id="${"flyingEmoji"}" style="${"display:none"}" class="${"svelte-174ivch"}"></span></div>


    <div class="${"loginLogoutDivs svelte-174ivch"}" id="${"logOutDiv"}" style="${"display: none"}"><h2 class="${"centering svelte-174ivch"}" id="${"loginWelcomeText"}">Welcome User </h2>
        <h3 class="${"centering svelte-174ivch"}">Redirecting to your page in </h3>
        <h3 class="${"centering svelte-174ivch"}" style="${"font-size: 30px;"}" id="${"redirectMessage"}">\u230A\u03C0\u230B</h3>

        <button id="${"logoutBtn"}" class="${"svelte-174ivch"}">Logout</button></div>

</main>`;
});
export {
  Page as default
};
