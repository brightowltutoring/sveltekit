import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, d as add_attribute, h as set_store_value } from "./index.js";
import { a as app } from "./firebase.js";
import { i as isDarkMode, s as showLoginModal, b as isLoggedIn, e as elementColor } from "./store.js";
import "firebase/auth";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const IconTwitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<svg width="${"32px"}" height="${"32px"}" viewBox="${"0 0 32 32"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill="${"white"}" d="${"M16 7.151l3.302-4.036c0 0 5.656 0.12 11.292 2.74-1.443 2.182-4.307 3.25-4.307 3.25-0.193-1.917-1.536-2.385-5.807-2.385l-4.479 25.281-4.51-25.286c-4.24 0-5.583 0.469-5.776 2.385 0 0-2.865-1.057-4.307-3.24 5.635-2.62 11.292-2.74 11.292-2.74l3.302 4.031h-0.005zM16 1.953c4.552-0.042 9.766 0.703 15.104 3.036 0.714-1.292 0.896-1.859 0.896-1.859-5.833-2.313-11.297-3.109-16-3.13-4.703 0.021-10.167 0.813-16 3.13 0 0 0.26 0.703 0.896 1.865 5.339-2.344 10.552-3.083 15.104-3.047z"}"></path></svg>`;
});
const TwitterLoginButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_isDarkMode();
  return `<signin-button class="${"group bg-[#1d9bf0] hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-90" : "group-hover:bg-opacity-90",
    true
  ) + " text-white flex justify-center items-center gap-5"}"><span class="${"group-hover:scale-[1.15] duration-500"}">${validate_component(IconTwitter, "IconTwitter").$$render($$result, {}, {}, {})}</span>
  
  <span>Sign-in with Twitter</span></signin-button>`;
});
const IconGoogle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg height="${"24"}" width="${"24"}" viewBox="${"0 0 210 210"}"><path fill="${"white"}" d="${"M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40\nc-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105\nS0,162.897,0,105z"}"></path></svg>`;
});
const GoogleLoginButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_isDarkMode();
  return `<signin-button class="${"group mb-6 bg-[#4285f4] hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-90" : "group-hover:bg-opacity-90",
    true
  ) + " text-white flex justify-center items-center gap-5"}"><span class="${"group-hover:scale-[1.15] duration-500"}">${validate_component(IconGoogle, "IconGoogle").$$render($$result, {}, {}, {})}
    </span>
  
  <span>Sign-in with Google</span></signin-button>`;
});
const IconEmail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg height="${"24"}" width="${"24"}" viewBox="${"0 0 485 485"}"><path fill="${"white"}" d="${"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5\ns25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485c32.731,0,64.491-6.414,94.397-19.063l-11.688-27.63\nC299.022,449.384,271.194,455,242.5,455C125.327,455,30,359.673,30,242.5S125.327,30,242.5,30S455,125.327,455,242.5\nc0,51.323-31.534,74.699-60.834,74.699c-29.299,0-60.833-23.375-60.833-74.699c0-50.086-40.747-90.833-90.833-90.833\ns-90.833,40.748-90.833,90.833s40.747,90.833,90.833,90.833c29.655,0,56.034-14.286,72.622-36.335\nc4.248,8.577,9.594,16.336,16.04,23.113c16.613,17.468,38.988,27.087,63.004,27.087c24.017,0,46.392-9.62,63.005-27.087\nC475.377,300.97,485,274.132,485,242.5C485,177.726,459.775,116.829,413.974,71.026z M242.5,303.333\nc-33.543,0-60.833-27.29-60.833-60.833s27.29-60.833,60.833-60.833s60.833,27.29,60.833,60.833S276.043,303.333,242.5,303.333z"}"></path></svg>`;
});
const MagicLinkSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shortPing;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let emptyEmailInputAnimated;
  let magicLinkBtn;
  let emailField;
  let emailFieldValue = "";
  let magicLinkInputVisible = globalThis.magicLinkInputVisible;
  shortPing = emptyEmailInputAnimated;
  $$unsubscribe_isDarkMode();
  return `<signin-button class="${"group bg-emerald-500 hover:scale-[1.01] hover:shadow-md duration-200 rounded-md p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-80" : "group-hover:bg-opacity-80",
    true
  ) + " text-white flex justify-center items-center gap-5"}"${add_attribute("this", magicLinkBtn, 0)}><span class="${"group-hover:scale-[1.15] duration-500"}">${validate_component(IconEmail, "IconEmail").$$render($$result, {}, {}, {})}</span>
  
  <span>Get Magic Link</span></signin-button>

${magicLinkInputVisible ? `<input class="${"text-center p-3 mt-3 w-full " + escape(shortPing, true) + " focus:outline-none"}" type="${"email"}" placeholder="${"email"}"${add_attribute("this", emailField, 0)}${add_attribute("value", emailFieldValue, 0)}>` : ``}

<span id="${"emailStatusMessage"}"></span>`;
});
const IconPhone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<svg class="${"-rotate-90"}" width="${"24px"}" height="${"24px"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"white"}"><path fill="${"white"}" d="${"M23 12.5 20.5 15l-3-2V8.842C15.976 8.337 14.146 8 12 8c-2.145 0-3.976.337-5.5.842V13l-3 2L1 12.5c.665-.997 2.479-2.657 5.5-3.658C8.024 8.337 9.855 8 12 8c2.146 0 3.976.337 5.5.842 3.021 1 4.835 2.66 5.5 3.658z"}"></path><path stroke="${"white"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17.5 8.842C15.976 8.337 14.146 8 12 8c-2.145 0-3.976.337-5.5.842m11 0c3.021 1 4.835 2.66 5.5 3.658L20.5 15l-3-2V8.842zm-11 0c-3.021 1-4.835 2.66-5.5 3.658L3.5 15l3-2V8.842z"}"></path></svg>`;
});
const PhoneAuthSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shortPing;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let countryCode = "+1";
  let emptyPhoneInputAnimated;
  let sendPhoneCodeBtn;
  let phoneField;
  let phoneFieldValue = "";
  let phoneInputVisible = globalThis.phoneInputVisible;
  shortPing = emptyPhoneInputAnimated;
  $$unsubscribe_isDarkMode();
  return `
${`<div class="${"w-full group bg-rose-400 hover:scale-[1.01] hover:shadow-md duration-200 rounded-md p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-80" : "group-hover:bg-opacity-80",
    true
  ) + " text-white flex justify-center items-center gap-5"}"${add_attribute("this", sendPhoneCodeBtn, 0)}><span class="${"group-hover:scale-[1.15] duration-500"}">${validate_component(IconPhone, "IconPhone").$$render($$result, {}, {}, {})}</span>
    
    <span>Get SMS Code</span></div>

  <div class="${"grid grid-cols-6 w-full text-black"}">${phoneInputVisible ? `<input class="${"col-span-1 text-center p-3 mt-3 focus:outline-none border-r-2"}"${add_attribute("value", countryCode, 0)}>
      <input class="${"col-span-5 text-center p-3 mt-3 focus:outline-none " + escape(shortPing, true)}" type="${"phone"}" placeholder="${"phone"}"${add_attribute("this", phoneField, 0)}${add_attribute("value", phoneFieldValue, 0)}>` : ``}</div>`}

<div id="${"recaptcha-container"}"></div>
<div id="${"phoneStatusMessage"}" class="${"p-3 font-Poppins " + escape($isDarkMode ? "text-lime-100" : "text-rose-600", true)}"></div>

${``}`;
});
const LoginCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showLoginModal, $$unsubscribe_showLoginModal;
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  let $elementColor, $$unsubscribe_elementColor;
  $$unsubscribe_showLoginModal = subscribe(showLoginModal, (value) => $showLoginModal = value);
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_elementColor = subscribe(elementColor, (value) => $elementColor = value);
  let { noTransition = false } = $$props;
  let loginWelcomeText;
  let loggedInEmail;
  let redirectAfterLoginTimeOut;
  let redirectSetInterval;
  function redirectLogic(userRedirectUrl = "/login") {
    let redirectTimeInMS = 3e3;
    let seconds = parseInt(redirectTimeInMS / 1e3);
    redirectSetInterval = setInterval(
      () => {
        if (seconds > 0) {
          seconds += -1;
          document.getElementById("timeLeft").innerHTML = ` ${seconds}`;
        }
      },
      1e3
    );
    redirectAfterLoginTimeOut = setTimeout(
      () => {
        set_store_value(showLoginModal, $showLoginModal = false, $showLoginModal);
        document.getElementById("timeLeft").innerHTML = 3;
        goto(userRedirectUrl);
      },
      redirectTimeInMS
    );
  }
  async function showLoginModalRedirect(userEmail) {
    let redirectUrlFromLS = localStorage.getItem("redirectUrlFromLS");
    console.log("redirectUrlFromLS", redirectUrlFromLS);
    if (redirectUrlFromLS) {
      redirectLogic(redirectUrlFromLS);
    } else {
      const { getFirestore, collection, getDocs } = await import("firebase/firestore/lite");
      const db = getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "email"));
      const querySnapshotSize = querySnapshot.size;
      const docs = querySnapshot.docs;
      for (const i in docs) {
        const doc = docs[i];
        if (userEmail === doc.id) {
          localStorage.setItem("redirectUrlFromLS", doc.data().redirectUrl);
          redirectUrlFromLS = localStorage.getItem("redirectUrlFromLS");
          redirectLogic(redirectUrlFromLS);
          return;
        }
        if (parseInt(i) === querySnapshotSize - 1) {
          localStorage.setItem("redirectUrlFromLS", "/");
          redirectUrlFromLS = localStorage.getItem("redirectUrlFromLS");
          redirectLogic(redirectUrlFromLS);
        }
      }
    }
  }
  if ($$props.noTransition === void 0 && $$bindings.noTransition && noTransition !== void 0)
    $$bindings.noTransition(noTransition);
  {
    if (!$showLoginModal) {
      clearInterval(redirectSetInterval);
      clearTimeout(redirectAfterLoginTimeOut);
    }
  }
  {
    if ($showLoginModal && $isLoggedIn) {
      showLoginModalRedirect(loggedInEmail);
    }
  }
  $$unsubscribe_showLoginModal();
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_isDarkMode();
  $$unsubscribe_elementColor();
  return `${!$isLoggedIn ? `<login-card class="${"block relative text-xl hover:scale-[1.01] font-Poppins shadow-md " + escape($isDarkMode ? "hover:shadow-xl " : "hover:shadow-lg", true) + " rounded-2xl hover:rounded-3xl mx-auto py-10 px-5 sm:p-10 text-center duration-300 w-11/12 sm:w-[500px]"}"${add_attribute("style", `background:${$elementColor}`, 0)}>

      ${`${validate_component(MagicLinkSection, "MagicLinkSection").$$render($$result, {}, {}, {})}
        <p class="${"py-3"}"></p>
        ${validate_component(PhoneAuthSection, "PhoneAuthSection").$$render($$result, {}, {}, {})}`}

      

      ${validate_component(GoogleLoginButton, "GoogleLoginButton").$$render($$result, {}, {}, {})}
      ${validate_component(TwitterLoginButton, "TwitterLoginButton").$$render($$result, {}, {}, {})}</login-card>` : ``}

${$isLoggedIn ? `<logout-card class="${"relative block hover:scale-[1.01] font-Poppins shadow-md " + escape($isDarkMode ? "hover:shadow-xl " : "hover:shadow-lg", true) + " rounded-2xl hover:rounded-3xl mx-auto py-5 px-3 sm:p-7 text-center duration-300 w-11/12 sm:w-[500px]"}"${add_attribute("style", `background:${$elementColor}`, 0)}><p${add_attribute("this", loginWelcomeText, 0)}>Welcome User</p>

      
      <div>Redirecting to your page in
        <div style="${"font-size: 30px;"}" id="${"timeLeft"}">\u230A\u03C0\u230B</div></div>

      
      <button>Logout</button></logout-card>` : ``}`;
});
export {
  LoginCard as L
};
