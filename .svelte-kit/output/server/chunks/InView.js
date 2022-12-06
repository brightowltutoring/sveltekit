import { b as browser } from "./environment.js";
import { c as create_ssr_component, d as add_attribute } from "./index.js";
function getOS() {
  let userAgent = browser;
  let platform = browser;
  let macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  let windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  let iosPlatforms = ["iPhone", "iPad", "iPod"];
  let os = null;
  if (macosPlatforms.includes(platform)) {
    os = "Mac OS";
  } else if (iosPlatforms.includes(platform)) {
    os = "iOS";
  } else if (windowsPlatforms.includes(platform)) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (/Linux/.test(platform)) {
    os = "Linux";
  }
  return os;
}
function isRunningStandalone() {
  return browser;
}
function cssToHead(id = "dropzoneCSS", path = "/dropzone.css") {
  if (!document.getElementById(id)) {
    const element = document.createElement("link");
    element.id = id;
    element.href = path;
    element.rel = "stylesheet";
    document.head.appendChild(element);
  }
}
function jsToHead(id = "calendlyJS", path = "external-website.com/calendly.js") {
  if (!document.getElementById(id)) {
    const element = document.createElement("script");
    element.id = id;
    element.src = path;
    element.type = "text/javascript";
    document.head.appendChild(element);
  }
}
const InView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { vanilla } = $$props;
  let { once } = $$props;
  let { onview = () => console.log("i \u2764\uFE0F slots") } = $$props;
  let container;
  let { single } = $$props;
  let { root = null } = $$props;
  let { threshold = 0 } = $$props;
  let { margin = "0px" } = $$props;
  if ($$props.vanilla === void 0 && $$bindings.vanilla && vanilla !== void 0)
    $$bindings.vanilla(vanilla);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.onview === void 0 && $$bindings.onview && onview !== void 0)
    $$bindings.onview(onview);
  if ($$props.single === void 0 && $$bindings.single && single !== void 0)
    $$bindings.single(single);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  return `


${!vanilla ? `<div${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
export {
  InView as I,
  cssToHead as c,
  getOS as g,
  isRunningStandalone as i,
  jsToHead as j
};
