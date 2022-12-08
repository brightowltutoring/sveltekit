import { d as derived, w as writable } from "./index2.js";
import { c as create_ssr_component, a as subscribe, d as add_attribute, e as escape, k as get_store_value } from "./index.js";
let size$3 = 20;
const IconLogin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navIconClickedFill;
  let fillColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let { navIconClicked } = $$props;
  if ($$props.navIconClicked === void 0 && $$bindings.navIconClicked && navIconClicked !== void 0)
    $$bindings.navIconClicked(navIconClicked);
  navIconClickedFill = navIconClicked && "fill-rose-300";
  fillColor = $isDarkMode ? "white" : "black";
  $$unsubscribe_isDarkMode();
  return `<svg class="${"scale-[1.5] origin-top bg-"}"${add_attribute("width", size$3, 0)}${add_attribute("height", size$3, 0)} viewBox="${"0 0 " + escape(size$3, true) + " " + escape(size$3, true)}"><path${add_attribute("class", navIconClickedFill, 0)}${add_attribute("fill", fillColor, 0)} d="${"M14 10L8 5v3H1v4h7v3l6-5zm3 7H9v2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9v2h8v14z"}"></path></svg>`;
});
let size$2 = 489.2;
const IconPlans = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navIconClickedFill;
  let fillColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let { navIconClicked } = $$props;
  if ($$props.navIconClicked === void 0 && $$bindings.navIconClicked && navIconClicked !== void 0)
    $$bindings.navIconClicked(navIconClicked);
  navIconClickedFill = navIconClicked && "fill-rose-600";
  fillColor = $isDarkMode ? "white" : "black";
  $$unsubscribe_isDarkMode();
  return `

<svg${add_attribute("height", size$2 / 15, 0)}${add_attribute("width", size$2 / 15, 0)} viewBox="${"0 0 " + escape(size$2, true) + " " + escape(size$2, true)}"><path${add_attribute("class", navIconClickedFill, 0)}${add_attribute("fill", fillColor, 0)} d="${"M177.8,238.1c0,4.5-3.6,8.1-8.1,8.1h-30.4c-4.5,0-8.1-3.6-8.1-8.1v-30.4c0-4.5,3.6-8.1,8.1-8.1h30.4\n			c4.5,0,8.1,3.6,8.1,8.1V238.1z M241.3,207.8c0-4.5-3.6-8.1-8.1-8.1h-30.4c-4.5,0-8.1,3.6-8.1,8.1v30.4c0,4.5,3.6,8.1,8.1,8.1h30.4\n			c4.5,0,8.1-3.6,8.1-8.1V207.8z M304.8,207.8c0-4.5-3.6-8.1-8.1-8.1h-30.4c-4.5,0-8.1,3.6-8.1,8.1v30.4c0,4.5,3.6,8.1,8.1,8.1h30.4\n			c4.5,0,8.1-3.6,8.1-8.1V207.8z M177.8,269.6c0-4.5-3.6-8.1-8.1-8.1h-30.4c-4.5,0-8.1,3.6-8.1,8.1V300c0,4.5,3.6,8.1,8.1,8.1h30.4\n			c4.5,0,8.1-3.6,8.1-8.1V269.6z M241.3,269.6c0-4.5-3.6-8.1-8.1-8.1h-30.4c-4.5,0-8.1,3.6-8.1,8.1V300c0,4.5,3.6,8.1,8.1,8.1h30.4\n			c4.5,0,8.1-3.6,8.1-8.1V269.6z M296.7,261.5h-30.4c-4.5,0-8.1,3.6-8.1,8.1V300c0,4.5,3.6,8.1,8.1,8.1h30.4c4.5,0,8.1-3.6,8.1-8.1\n			v-30.4C304.8,265.1,301.2,261.5,296.7,261.5z M106.1,323.3H75.8c-4.5,0-8.1,3.6-8.1,8.1v30.4c0,4.5,3.6,8.1,8.1,8.1h30.4\n			c4.5,0,8.1-3.6,8.1-8.1v-30.4C114.3,326.9,110.6,323.3,106.1,323.3z M114.3,269.6c0-4.5-3.6-8.1-8.1-8.1H75.8\n			c-4.5,0-8.1,3.6-8.1,8.1V300c0,4.5,3.6,8.1,8.1,8.1h30.4c4.5,0,8.1-3.6,8.1-8.1V269.6z M233.2,323.3h-30.4c-4.5,0-8.1,3.6-8.1,8.1\n			v30.4c0,4.5,3.6,8.1,8.1,8.1h30.4c4.5,0,8.1-3.6,8.1-8.1v-30.4C241.3,326.9,237.7,323.3,233.2,323.3z M169.7,323.3h-30.4\n			c-4.5,0-8.1,3.6-8.1,8.1v30.4c0,4.5,3.6,8.1,8.1,8.1h30.4c4.5,0,8.1-3.6,8.1-8.1v-30.4C177.8,326.9,174.2,323.3,169.7,323.3z\n			 M360.2,246.3c4.5,0,8.1-3.6,8.1-8.1v-30.4c0-4.5-3.6-8.1-8.1-8.1h-30.4c-4.5,0-8.1,3.6-8.1,8.1v30.4c0,4.5,3.6,8.1,8.1,8.1H360.2\n			z M47.7,435.9h230.7c-3.7-11.6-5.8-24-5.9-36.8H47.7c-6,0-10.8-4.9-10.8-10.8V171h361.7v101.1c12.8,0.1,25.2,2,36.8,5.7V94.9\n			c0-26.3-21.4-47.7-47.7-47.7h-53.4V17.8c0-9.6-7.8-17.4-17.4-17.4h-27.1c-9.6,0-17.4,7.8-17.4,17.4v29.5H163V17.8\n			c0-9.6-7.8-17.4-17.4-17.4h-27.1c-9.6,0-17.4,7.8-17.4,17.4v29.5H47.7C21.4,47.3,0,68.7,0,95v293.3C0,414.5,21.4,435.9,47.7,435.9\n			z M489.2,397.7c0,50.3-40.8,91.1-91.1,91.1S307,448,307,397.7s40.8-91.1,91.1-91.1S489.2,347.4,489.2,397.7z M444.1,374.1\n			c0-2.9-1.1-5.7-3.2-7.7c-4.3-4.3-11.2-4.3-15.5,0L385.8,406l-15.2-15.2c-4.3-4.3-11.2-4.3-15.5,0c-2.1,2.1-3.2,4.8-3.2,7.7\n			c0,2.9,1.1,5.7,3.2,7.7l22.9,22.9c4.3,4.3,11.2,4.3,15.5,0l47.3-47.3C443,379.8,444.1,377,444.1,374.1z"}"></path></svg>`;
});
let size$1 = 204.376;
const IconHomework = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navIconClickedFill;
  let fillColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let { navIconClicked } = $$props;
  if ($$props.navIconClicked === void 0 && $$bindings.navIconClicked && navIconClicked !== void 0)
    $$bindings.navIconClicked(navIconClicked);
  navIconClickedFill = navIconClicked && "fill-rose-300";
  fillColor = $isDarkMode ? "white" : "black";
  $$unsubscribe_isDarkMode();
  return `

<svg${add_attribute("height", size$1 / 7, 0)}${add_attribute("width", size$1 / 7, 0)} viewBox="${"0 0 " + escape(size$1, true) + " " + escape(size$1, true)}"><path${add_attribute("class", navIconClickedFill, 0)}${add_attribute("fill", fillColor, 0)} d="${"M171.247,204.376c2.484,0,4.5-2.015,4.5-4.5V61.35h-51.744c-7.502,0-13.605-6.107-13.605-13.614V0H33.13\n	c-2.485,0-4.5,2.015-4.5,4.5v195.376c0,2.485,2.015,4.5,4.5,4.5H171.247z M74.999,94.627h79.5v10h-79.5V94.627z M74.999,119.627\n	h79.5v10h-79.5V119.627z M74.999,144.626h79.5v10h-79.5V144.626z M57.999,92.627c3.865,0,7,3.134,7,7s-3.135,7-7,7s-7-3.134-7-7\n	S54.134,92.627,57.999,92.627z M57.999,117.627c3.865,0,7,3.134,7,7s-3.135,7-7,7s-7-3.134-7-7S54.134,117.627,57.999,117.627z\n	 M57.999,142.626c3.865,0,7,3.134,7,7c0,3.866-3.135,7-7,7s-7-3.134-7-7C50.999,145.761,54.134,142.626,57.999,142.626z\n	 M120.397,47.736V10.396l43.802,40.953h-40.196C122.014,51.35,120.397,49.729,120.397,47.736z"}"></path></svg>`;
});
let size = 31.886;
const IconClassroom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navIconClickedFill;
  let fillColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let { navIconClicked } = $$props;
  if ($$props.navIconClicked === void 0 && $$bindings.navIconClicked && navIconClicked !== void 0)
    $$bindings.navIconClicked(navIconClicked);
  navIconClickedFill = navIconClicked && "fill-rose-600";
  fillColor = $isDarkMode ? "white" : "black";
  $$unsubscribe_isDarkMode();
  return `<svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="${"0 0 " + escape(size, true) + " " + escape(size, true)}"><g><path${add_attribute("class", navIconClickedFill, 0)}${add_attribute("fill", fillColor, 0)} d="${"M19.021,1.176V0L15.23,1.176H6.929v28.245h1.54V2.716h1.793L9.086,3.081v26.34l9.935,2.465V2.716h4.395v26.705h1.541V1.176\n		H19.021z M16.693,19.229c-0.5,0-0.905-0.492-0.905-1.098s0.405-1.098,0.905-1.098c0.5,0,0.905,0.49,0.905,1.098\n		C17.598,18.736,17.193,19.229,16.693,19.229z"}"></path><g><path d="${"M19.852,5.718c-1.7,0-3.083,1.384-3.083,3.084c0,1.7,1.383,3.083,3.083,3.083c1.701,0,3.084-1.383,3.084-3.083\n			C22.936,7.102,21.553,5.718,19.852,5.718z M19.852,11.606c-1.546,0-2.805-1.258-2.805-2.805c0-1.547,1.258-2.806,2.805-2.806\n			c1.548,0,2.806,1.259,2.806,2.806C22.658,10.348,21.4,11.606,19.852,11.606z"}"></path><path d="${"M18.902,6.772l-0.113-0.227l-0.125,0.063l0.115,0.228C18.818,6.813,18.861,6.792,18.902,6.772z"}"></path><path d="${"M17.599,8.849c0-0.048,0.004-0.094,0.007-0.141h-0.319v0.279h0.319C17.604,8.941,17.599,8.896,17.599,8.849z"}"></path><path d="${"M20.049,6.546v-0.32h-0.28v0.32c0.047-0.003,0.094-0.007,0.141-0.007S20.003,6.543,20.049,6.546z"}"></path><path d="${"M22.279,7.792l-0.062-0.125l-0.252,0.129c0.021,0.041,0.042,0.083,0.061,0.126L22.279,7.792z"}"></path><path d="${"M21.132,6.892c0.04,0.024,0.079,0.051,0.115,0.076l0.141-0.217L21.27,6.676L21.132,6.892z"}"></path><path d="${"M17.711,7.485l0.229,0.158c0.025-0.039,0.049-0.078,0.076-0.117L17.791,7.37L17.711,7.485z"}"></path><path d="${"M20.861,10.951l0.17,0.339l0.125-0.064l-0.168-0.334C20.945,10.913,20.902,10.932,20.861,10.951z"}"></path><path d="${"M21.734,10.261l0.295,0.205l0.078-0.115l-0.289-0.201C21.791,10.188,21.762,10.225,21.734,10.261z"}"></path><path d="${"M22.212,8.708c0.003,0.047,0.008,0.093,0.008,0.141c0,0.047-0.005,0.093-0.008,0.139h0.32v-0.28H22.212z"}"></path><path d="${"M19.769,11.15v0.32h0.28v-0.32c-0.046,0.003-0.093,0.008-0.14,0.008S19.816,11.153,19.769,11.15z"}"></path><path d="${"M18.429,11.085l0.118,0.075l0.204-0.316c-0.041-0.021-0.081-0.046-0.119-0.072L18.429,11.085z"}"></path><path d="${"M17.539,10.044l0.063,0.125l0.313-0.159c-0.023-0.04-0.047-0.081-0.067-0.122L17.539,10.044z"}"></path><polygon points="${"20.008,6.788 19.811,6.788 19.811,8.71 19.811,8.802 19.811,8.925 18.648,10.201 18.679,10.229 19.812,8.985 \n			21.311,8.985 21.311,8.71 20.008,8.71 		"}"></polygon></g></g></svg>`;
});
const isLoggedIn = writable(false);
const scrollY = writable(0);
let delayedScrollY = get_store_value(scrollY);
const instDeltaY = derived(scrollY, ($scrollY) => {
  setTimeout(() => {
    delayedScrollY = get_store_value(scrollY);
  }, 50);
  return $scrollY - delayedScrollY;
});
const innerWidth = writable(0);
const lessThan768 = derived(
  innerWidth,
  ($innerWidth) => $innerWidth < 768
);
const showLoginModal = writable(false);
const showHomeworkModal = writable(false);
const navAppClicked = writable(false);
const routes = writable({
  home: {
    name: "Home",
    href: "/",
    title: "Thinksolve.io \u{1F4AB}",
    isCurrent: false
  },
  login: {
    name: "Login",
    href: "/login",
    title: "Login \u{1F680}",
    isCurrent: false,
    icon: IconLogin
  },
  plans: {
    name: "Plans",
    href: "/plans",
    title: "Plans \u{1F4A1}",
    isCurrent: false,
    icon: IconPlans
  },
  homework: {
    name: "Homework",
    href: "/homework",
    title: "Homework \u{1F4DA}",
    isCurrent: false,
    icon: IconHomework
  },
  classroom: {
    name: "Classroom",
    href: "/classroom",
    title: "Classroom \u{1F34E}",
    isCurrent: false,
    icon: IconClassroom
  },
  stripe: {
    name: "Stripe",
    href: "/stripe",
    title: "Stripe \u{1F4B0}",
    isCurrent: false
  },
  physics: {
    name: "physics",
    href: "/physics",
    title: "physics \u{1F680}",
    isCurrent: false
  },
  math: {
    name: "math",
    href: "/math",
    title: "math",
    isCurrent: false
  }
});
const isDarkMode = writable(false);
const light_darkened = "rgb(242,247,250)";
const dark_lightened = "rgb(38, 35, 51)";
const elementColor = derived(isDarkMode, ($isDarkMode, set) => {
  $isDarkMode ? set(dark_lightened) : set(light_darkened);
});
export {
  showHomeworkModal as a,
  isLoggedIn as b,
  scrollY as c,
  instDeltaY as d,
  elementColor as e,
  isDarkMode as i,
  lessThan768 as l,
  navAppClicked as n,
  routes as r,
  showLoginModal as s
};
