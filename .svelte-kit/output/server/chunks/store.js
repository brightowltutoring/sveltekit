import { d as derived, w as writable } from "./index2.js";
import "./index.js";
function elasticOut(t) {
  return Math.sin(-13 * (t + 1) * Math.PI / 2) * Math.pow(2, -10 * t) + 1;
}
function customFade(node, { easing = elasticOut, duration = 3e3 }) {
  return {
    easing,
    duration,
    css: (t, u) => ` opacity: ${0.8 * u + t};
        filter: hue-rotate(${0.15 * u}turn) 
                blur(${u}px);
      `
  };
}
const isLoggedIn = writable(false);
const lastScrollY = writable(0);
const scrollY = writable(0);
const startScrollY = derived(scrollY, ($scrollY, set) => {
  setTimeout(() => {
    set($scrollY);
  }, 50);
});
const instDeltaY = derived([scrollY, startScrollY], ([$scrollY, $startScrollY]) => {
  return $scrollY - $startScrollY;
});
const scrollYMax = writable(0);
derived([scrollY, scrollYMax], ([$scrollY, $scrollYMax]) => {
  return 1 - $scrollY / $scrollYMax;
});
const windowInnerHeight = writable(0);
const innerWidth = writable(0);
const burgerBreakPoint = derived(innerWidth, ($innerWidth) => $innerWidth < 768);
derived(burgerBreakPoint, ($burgerBreakPoint) => $burgerBreakPoint ? customFade : () => {
});
derived(burgerBreakPoint, ($burgerBreakPoint) => $burgerBreakPoint ? customFade : () => {
});
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
    isCurrent: false
  },
  plans: {
    name: "Plans",
    href: "/plans",
    title: "Plans",
    isCurrent: false
  },
  math: {
    name: "math",
    href: "/math",
    title: "math",
    isCurrent: false
  },
  schools: {
    name: "schools",
    href: "/schools",
    title: "Schools \u{1F4DA}",
    isCurrent: false
  },
  jitsi: {
    name: "jitsi",
    href: "/jitsi",
    title: "jitsi \u{1F680}",
    isCurrent: false
  },
  physics: {
    name: "physics",
    href: "/physics",
    title: "physics \u{1F680}",
    isCurrent: false
  }
});
const isDarkMode = writable(false);
const redirectAfterLoginTimeOut = writable("");
const redirectSetInterval = writable("");
const light_darkened = "rgb(242,247,250)";
const light_darkened_half = "pink";
const dark_lightened = "rgb(38, 35, 51)";
const dark_lightened_half = "#8f86b8";
derived(isDarkMode, ($isDarkMode, set) => {
  $isDarkMode ? set(dark_lightened_half) : set(light_darkened_half);
});
export {
  redirectSetInterval as a,
  burgerBreakPoint as b,
  instDeltaY as c,
  routes as d,
  isLoggedIn as e,
  scrollYMax as f,
  innerWidth as g,
  dark_lightened as h,
  isDarkMode as i,
  light_darkened as j,
  lastScrollY as l,
  redirectAfterLoginTimeOut as r,
  scrollY as s,
  windowInnerHeight as w
};
