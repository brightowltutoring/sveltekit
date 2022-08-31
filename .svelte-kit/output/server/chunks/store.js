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
const homeColor = `from-[rgba(34,156,121,0.8)]`;
const aboutColor = `from-[rgba(34,156,121,0.8)]`;
const loginColor = `from-[rgba(34,156,121,0.8)]`;
const plansColor = `from-[rgba(34,156,121,0.8)]`;
const bgColour = {
  home: `bg-gradient-to-b ${homeColor} via-[rgba(89,208,174,1)]`,
  about: `bg-gradient-to-b ${aboutColor} via-[rgba(89,208,174,1)]`,
  login: `bg-gradient-to-b ${loginColor} via-[rgba(89,208,174,1)]`,
  plans: `bg-gradient-to-b ${plansColor} via-[rgba(89,208,174,1)]`
};
export {
  instDeltaY as a,
  scrollYMax as b,
  innerWidth as c,
  bgColour as d,
  inTransition as e,
  fractionScroll as f,
  isXs as i,
  lastScrollY as l,
  scrollY as s,
  windowInnerHeight as w
};
