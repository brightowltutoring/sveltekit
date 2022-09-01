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
  }, 60);
});
const instDeltaY = derived([scrollY, startScrollY], ([$scrollY, $startScrollY]) => {
  return $scrollY - $startScrollY;
});
const scrollYMax = writable(0);
const fractionScroll = derived([scrollY, scrollYMax], ([$scrollY, $scrollYMax]) => {
  return 1 - $scrollY / $scrollYMax;
});
const windowInnerHeight = writable(0);
const innerWidth = writable(0);
const isXs = derived(innerWidth, ($innerWidth) => $innerWidth < 640);
const inTransition = derived(isXs, ($isXs) => $isXs ? customFade : () => {
});
derived(isXs, ($isXs) => $isXs ? customFade : () => {
});
const routes = writable({
  home: {
    name: "Home",
    href: "/",
    title: "Thinksolve.io \u{1F4AB}",
    isCurrent: false,
    btnColor: "sm:bg-[rgba(69,140,117,0.8)]",
    btnColorHover: "hover:sm:bg-[rgba(69,140,117,0.5)]",
    bgColor: `bg-gradient-to-t from-[#f7f7f8] to-[rgba(89,208,174,1)]`
  },
  etc: {
    name: "Etc",
    href: "/etc",
    title: "Etc - Thinksolve.io",
    isCurrent: false,
    btnColor: "sm:bg-[rgba(69,140,117,0.8)]",
    btnColorHover: "hover:sm:bg-[rgba(69,140,117,0.5)]",
    bgColor: `bg-gradient-to-t from-[#f7f7f8] to-[rgba(89,208,174,1)]`
  },
  plans: {
    name: "Plans",
    href: "/plans",
    title: "Plans - Thinksolve.io",
    isCurrent: false,
    btnColor: "sm:bg-[rgba(69,140,117,0.8)]",
    btnColorHover: "hover:sm:bg-[rgba(69,140,117,0.5)]",
    bgColor: `bg-gradient-to-t from-[#f7f7f8] to-[rgba(89,208,174,1)]`
  },
  login: {
    name: "Login",
    href: "/login",
    title: "Login \u{1F680}",
    isCurrent: false,
    btnColor: "sm:bg-[rgba(69,140,117,0.8)]",
    btnColorHover: "hover:sm:bg-[rgba(69,140,117,0.5)]",
    bgColor: `bg-gradient-to-t from-[#f7f7f8] to-[rgba(89,208,174,1)]`
  }
});
export {
  isXs as a,
  instDeltaY as b,
  scrollYMax as c,
  innerWidth as d,
  inTransition as e,
  fractionScroll as f,
  isLoggedIn as i,
  lastScrollY as l,
  routes as r,
  scrollY as s,
  windowInnerHeight as w
};
