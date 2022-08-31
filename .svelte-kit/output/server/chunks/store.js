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
const bgColour = {
  home: `bg-gradient-to-t from-[#f7f7f8]  to-[rgba(89,208,174,1)]`,
  plans: `bg-gradient-to-t from-[#f7f7f8]  to-[rgba(89,208,174,1)]`,
  login: `bg-gradient-to-t from-[#f7f7f8]  to-[rgba(89,208,174,1)]`,
  etc: `bg-gradient-to-t from-[#f7f7f8]  to-[rgba(89,208,174,1)]`
};
export {
  isXs as a,
  instDeltaY as b,
  scrollYMax as c,
  innerWidth as d,
  inTransition as e,
  fractionScroll as f,
  bgColour as g,
  isLoggedIn as i,
  lastScrollY as l,
  scrollY as s,
  windowInnerHeight as w
};
