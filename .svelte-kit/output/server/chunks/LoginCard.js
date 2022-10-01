import { c as create_ssr_component, a as subscribe, e as escape, j as add_attribute } from "./index.js";
import { n as navLoginClicked, r as redirectAfterLoginTimeOut, a as redirectSetInterval, d as isLoggedIn, i as isDarkMode, g as dark_lightened, h as light_darkened } from "./store.js";
import "./firebase.js";
import "firebase/firestore/lite";
import "firebase/auth";
const LoginCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cardColor;
  let $$unsubscribe_navLoginClicked;
  let $$unsubscribe_redirectAfterLoginTimeOut;
  let $$unsubscribe_redirectSetInterval;
  let $$unsubscribe_isLoggedIn;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_navLoginClicked = subscribe(navLoginClicked, (value) => value);
  $$unsubscribe_redirectAfterLoginTimeOut = subscribe(redirectAfterLoginTimeOut, (value) => value);
  $$unsubscribe_redirectSetInterval = subscribe(redirectSetInterval, (value) => value);
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let emailFieldValue = "";
  cardColor = $isDarkMode ? dark_lightened : light_darkened;
  $$unsubscribe_navLoginClicked();
  $$unsubscribe_redirectAfterLoginTimeOut();
  $$unsubscribe_redirectSetInterval();
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_isDarkMode();
  return `<div class="${"hover:scale-[102%] font-Poppins shadow-md " + escape($isDarkMode ? "hover:shadow-xl " : "hover:shadow-lg", true) + " rounded-xl mx-auto w-1/3 min-w-fit p-10 m-1 text-center duration-300 group"}"${add_attribute("style", `background:${cardColor}`, 0)}><div class="${"logInDiv"}"><div class="${"bg-[#4285f4] hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-90" : "group-hover:bg-opacity-90",
    true
  ) + " text-xl text-white"}">
      <ul class="${"flex justify-center items-center gap-5"}">
        <li>
          <svg height="${"24"}" width="${"24"}" viewBox="${"0 0 210 210"}"><path fill="${"white"}" d="${"M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40\nc-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105\nS0,162.897,0,105z"}"></path></svg>

          </li>
        <li>Sign-in with Google</li></ul></div>

    <p class="${"py-5"}">or</p>
    <div id="${"passwordlessLoginBtn"}" class="${"bg-red-400 hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-80" : "group-hover:bg-opacity-80",
    true
  ) + " text-xl text-white"}"><ul class="${"flex justify-center items-center gap-5"}">
        <li><svg height="${"24"}" width="${"24"}" viewBox="${"0 0 485 485"}"><path fill="${"white"}" d="${"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5\ns25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485c32.731,0,64.491-6.414,94.397-19.063l-11.688-27.63\nC299.022,449.384,271.194,455,242.5,455C125.327,455,30,359.673,30,242.5S125.327,30,242.5,30S455,125.327,455,242.5\nc0,51.323-31.534,74.699-60.834,74.699c-29.299,0-60.833-23.375-60.833-74.699c0-50.086-40.747-90.833-90.833-90.833\ns-90.833,40.748-90.833,90.833s40.747,90.833,90.833,90.833c29.655,0,56.034-14.286,72.622-36.335\nc4.248,8.577,9.594,16.336,16.04,23.113c16.613,17.468,38.988,27.087,63.004,27.087c24.017,0,46.392-9.62,63.005-27.087\nC475.377,300.97,485,274.132,485,242.5C485,177.726,459.775,116.829,413.974,71.026z M242.5,303.333\nc-33.543,0-60.833-27.29-60.833-60.833s27.29-60.833,60.833-60.833s60.833,27.29,60.833,60.833S276.043,303.333,242.5,303.333z"}"></path></svg></li>
        <li>Sign-in with Link</li></ul></div>

    <input class="${"text-center p-3 mt-3 w-full"}" id="${"emailField"}" type="${"email"}" placeholder="${"email"}"${add_attribute("value", emailFieldValue, 0)}>
    <span id="${"emailStatusMessage"}"></span></div>

  <div class="${"logOutDiv"}" style="${"display:none"}"><p id="${"loginWelcomeText"}">Welcome User</p>
    <p>Redirecting to your page in</p>
    <p style="${"font-size: 30px;"}" id="${"redirectMessage"}">\u230A\u03C0\u230B</p>
    <button id="${"logoutBtn"}">Logout</button></div></div>`;
});
export {
  LoginCard as L
};
