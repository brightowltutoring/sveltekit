import { d as derived, w as writable } from "./index2.js";
import "./index.js";
const isLoggedIn = writable(false);
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
const lessThan768 = derived(innerWidth, ($innerWidth) => $innerWidth < 768);
const navLoginClicked = writable(false);
const routes = writable({
  home: {
    name: "Home",
    href: "/",
    title: "Thinksolve.io \u{1F4AB}",
    isCurrent: false
  },
  plans: {
    name: "Plans",
    href: "/plans",
    title: "Plans \u{1F34E}",
    isCurrent: false
  },
  schools: {
    name: "Schools",
    href: "/schools",
    title: "Schools \u{1F4DA}",
    isCurrent: false
  },
  screenshare: {
    name: "Screenshare",
    href: "/screenshare",
    title: "Screenshare \u{1F5A5}",
    isCurrent: false
  },
  login: {
    name: "Login",
    href: "/login",
    title: "Login \u{1F680}",
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
  },
  mathjax: {
    name: "mathjax",
    href: "/mathjax",
    title: "mathjax",
    isCurrent: false
  },
  katex: {
    name: "katex",
    href: "/katex",
    title: "katex",
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
  isDarkMode as b,
  instDeltaY as c,
  dark_lightened as d,
  lessThan768 as e,
  routes as f,
  scrollYMax as g,
  innerWidth as h,
  isLoggedIn as i,
  light_darkened as l,
  navLoginClicked as n,
  redirectAfterLoginTimeOut as r,
  scrollY as s,
  windowInnerHeight as w
};
