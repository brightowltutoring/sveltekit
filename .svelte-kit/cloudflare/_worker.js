var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name4 in all)
    __defProp(target, name4, { get: all[name4], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a2, b) {
  return a2 != a2 ? b == b : a2 !== b || (a2 && typeof a2 === "object" || typeof a2 === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function set_current_component(component8) {
  current_component = component8;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component8, name4) {
  if (!component8 || !component8.$$render) {
    if (name4 === "svelte:component")
      name4 += " this={...}";
    throw new Error(`<${name4}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component8;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name4, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name4}${assignment}`;
}
function style_object_to_string(style_object) {
  return Object.keys(style_object).filter((key2) => style_object[key2]).map((key2) => `${key2}: ${style_object[key2]};`).join(" ");
}
function add_styles(style_object) {
  const styles = style_object_to_string(style_object);
  return styles ? ` style="${styles}"` : "";
}
var is_client, now, raf, tasks, current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    is_client = typeof window !== "undefined";
    now = is_client ? () => window.performance.now() : () => Date.now();
    raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
    tasks = /* @__PURE__ */ new Set();
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/index2.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
var subscriber_queue;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_chunks();
    subscriber_queue = [];
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse2;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index8 = 0;
      while (index8 < str.length) {
        var eqIdx = str.indexOf("=", index8);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index8);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index8 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index8, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index8 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name4, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name4)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name4 + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e3) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name4 = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e3) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e3
        );
      }
      var cookie2 = {
        name: name4,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie2.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie2.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie2.secure = true;
        } else if (key2 === "httponly") {
          cookie2.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie2.sameSite = value2;
        } else {
          cookie2[key2] = value2;
        }
      });
      return cookie2;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name4 = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name4 = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name: name4, value };
    }
    function parse2(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key2) {
          return key2.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie2 = parseString2(str, options);
          cookies2[cookie2.name] = cookie2;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse2;
    module.exports.parse = parse2;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/hooks.js
var hooks_exports = {};
var init_hooks = __esm({
  ".svelte-kit/output/server/chunks/hooks.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/_layout.js
var layout_exports = {};
var init_layout = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.js"() {
  }
});

// .svelte-kit/output/server/chunks/stores.js
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
var getStores, page;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      const readonly_stores = {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
      Object.defineProperties(readonly_stores, {
        preloading: {
          get() {
            console.error("stores.preloading is deprecated; use stores.navigating instead");
            return {
              subscribe: stores.navigating.subscribe
            };
          },
          enumerable: false
        },
        session: {
          get() {
            removed_session();
            return {};
          },
          enumerable: false
        }
      });
      return readonly_stores;
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/chunks/store.js
function elasticOut(t2) {
  return Math.sin(-13 * (t2 + 1) * Math.PI / 2) * Math.pow(2, -10 * t2) + 1;
}
function customFade(node, { easing = elasticOut, duration = 3e3 }) {
  return {
    easing,
    duration,
    css: (t2, u) => ` opacity: ${0.8 * u + t2};
        filter: hue-rotate(${0.15 * u}turn) 
                blur(${u}px);
      `
  };
}
var isLoggedIn, lastScrollY, scrollY, startScrollY, instDeltaY, scrollYMax, fractionScroll, windowInnerHeight, innerWidth, isXs, inTransition, routes;
var init_store = __esm({
  ".svelte-kit/output/server/chunks/store.js"() {
    init_index2();
    init_chunks();
    isLoggedIn = writable(false);
    lastScrollY = writable(0);
    scrollY = writable(0);
    startScrollY = derived(scrollY, ($scrollY, set) => {
      setTimeout(() => {
        set($scrollY);
      }, 50);
    });
    instDeltaY = derived([scrollY, startScrollY], ([$scrollY, $startScrollY]) => {
      return $scrollY - $startScrollY;
    });
    scrollYMax = writable(0);
    fractionScroll = derived([scrollY, scrollYMax], ([$scrollY, $scrollYMax]) => {
      return 1 - $scrollY / $scrollYMax;
    });
    windowInnerHeight = writable(0);
    innerWidth = writable(0);
    isXs = derived(innerWidth, ($innerWidth) => $innerWidth < 640);
    inTransition = derived(isXs, ($isXs) => $isXs ? customFade : () => {
    });
    derived(isXs, ($isXs) => $isXs ? customFade : () => {
    });
    routes = writable({
      home: {
        name: "Home",
        href: "/",
        title: "Thinksolve.io \u{1F4AB}",
        isCurrent: false,
        btnColor: "sm:bg-[rgba(69,140,117,0.8)]",
        btnColorHover: "hover:sm:bg-[rgba(69,140,117,0.5)]",
        bgColor: `bg-[rgba(89,208,174,1)]`
      },
      etc: {
        name: "Etc",
        href: "/etc",
        title: "Etc",
        isCurrent: false,
        btnColor: "sm:bg-[rgba(69,140,117,0.8)]",
        btnColorHover: "hover:sm:bg-[rgba(69,140,117,0.5)]",
        bgColor: `bg-gradient-to-t from-[#f7f7f8] to-[rgba(89,208,174,1)]`
      },
      plans: {
        name: "Plans",
        href: "/plans",
        title: "Plans",
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
  }
});

// node_modules/@firebase/util/dist/index.esm2017.js
function getUA() {
  if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
    return navigator["userAgent"];
  } else {
    return "";
  }
}
function isMobileCordova() {
  return typeof window !== "undefined" && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
function isBrowserExtension() {
  const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
  return typeof runtime === "object" && runtime.id !== void 0;
}
function isReactNative() {
  return typeof navigator === "object" && navigator["product"] === "ReactNative";
}
function isIE() {
  const ua = getUA();
  return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
}
function isIndexedDBAvailable() {
  return typeof indexedDB === "object";
}
function validateIndexedDBOpenable() {
  return new Promise((resolve2, reject) => {
    try {
      let preExist = true;
      const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
      const request = self.indexedDB.open(DB_CHECK_NAME);
      request.onsuccess = () => {
        request.result.close();
        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }
        resolve2(true);
      };
      request.onupgradeneeded = () => {
        preExist = false;
      };
      request.onerror = () => {
        var _a;
        reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
      };
    } catch (error2) {
      reject(error2);
    }
  });
}
function replaceTemplate(template2, data) {
  return template2.replace(PATTERN, (_2, key2) => {
    const value = data[key2];
    return value != null ? String(value) : `<${key2}?>`;
  });
}
function isEmpty(obj) {
  for (const key2 in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key2)) {
      return false;
    }
  }
  return true;
}
function deepEqual(a2, b) {
  if (a2 === b) {
    return true;
  }
  const aKeys = Object.keys(a2);
  const bKeys = Object.keys(b);
  for (const k of aKeys) {
    if (!bKeys.includes(k)) {
      return false;
    }
    const aProp = a2[k];
    const bProp = b[k];
    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }
  for (const k of bKeys) {
    if (!aKeys.includes(k)) {
      return false;
    }
  }
  return true;
}
function isObject(thing) {
  return thing !== null && typeof thing === "object";
}
function querystring(querystringParams) {
  const params = [];
  for (const [key2, value] of Object.entries(querystringParams)) {
    if (Array.isArray(value)) {
      value.forEach((arrayVal) => {
        params.push(encodeURIComponent(key2) + "=" + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key2) + "=" + encodeURIComponent(value));
    }
  }
  return params.length ? "&" + params.join("&") : "";
}
function querystringDecode(querystring2) {
  const obj = {};
  const tokens = querystring2.replace(/^\?/, "").split("&");
  tokens.forEach((token) => {
    if (token) {
      const [key2, value] = token.split("=");
      obj[decodeURIComponent(key2)] = decodeURIComponent(value);
    }
  });
  return obj;
}
function extractQuerystring(url) {
  const queryStart = url.indexOf("?");
  if (!queryStart) {
    return "";
  }
  const fragmentStart = url.indexOf("#", queryStart);
  return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : void 0);
}
function createSubscribe(executor, onNoObservers) {
  const proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
function implementsAnyMethods(obj, methods) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  for (const method of methods) {
    if (method in obj && typeof obj[method] === "function") {
      return true;
    }
  }
  return false;
}
function noop2() {
}
function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}
var stringToByteArray$1, byteArrayToString, base642, base64Encode, base64urlEncodeWithoutPadding, base64Decode, Deferred, ERROR_NAME, FirebaseError, ErrorFactory, PATTERN, ObserverProxy, MAX_VALUE_MILLIS;
var init_index_esm2017 = __esm({
  "node_modules/@firebase/util/dist/index.esm2017.js"() {
    stringToByteArray$1 = function(str) {
      const out = [];
      let p2 = 0;
      for (let i = 0; i < str.length; i++) {
        let c2 = str.charCodeAt(i);
        if (c2 < 128) {
          out[p2++] = c2;
        } else if (c2 < 2048) {
          out[p2++] = c2 >> 6 | 192;
          out[p2++] = c2 & 63 | 128;
        } else if ((c2 & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
          c2 = 65536 + ((c2 & 1023) << 10) + (str.charCodeAt(++i) & 1023);
          out[p2++] = c2 >> 18 | 240;
          out[p2++] = c2 >> 12 & 63 | 128;
          out[p2++] = c2 >> 6 & 63 | 128;
          out[p2++] = c2 & 63 | 128;
        } else {
          out[p2++] = c2 >> 12 | 224;
          out[p2++] = c2 >> 6 & 63 | 128;
          out[p2++] = c2 & 63 | 128;
        }
      }
      return out;
    };
    byteArrayToString = function(bytes) {
      const out = [];
      let pos = 0, c2 = 0;
      while (pos < bytes.length) {
        const c1 = bytes[pos++];
        if (c1 < 128) {
          out[c2++] = String.fromCharCode(c1);
        } else if (c1 > 191 && c1 < 224) {
          const c22 = bytes[pos++];
          out[c2++] = String.fromCharCode((c1 & 31) << 6 | c22 & 63);
        } else if (c1 > 239 && c1 < 365) {
          const c22 = bytes[pos++];
          const c3 = bytes[pos++];
          const c4 = bytes[pos++];
          const u = ((c1 & 7) << 18 | (c22 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
          out[c2++] = String.fromCharCode(55296 + (u >> 10));
          out[c2++] = String.fromCharCode(56320 + (u & 1023));
        } else {
          const c22 = bytes[pos++];
          const c3 = bytes[pos++];
          out[c2++] = String.fromCharCode((c1 & 15) << 12 | (c22 & 63) << 6 | c3 & 63);
        }
      }
      return out.join("");
    };
    base642 = {
      byteToCharMap_: null,
      charToByteMap_: null,
      byteToCharMapWebSafe_: null,
      charToByteMapWebSafe_: null,
      ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/=";
      },
      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_.";
      },
      HAS_NATIVE_SUPPORT: typeof atob === "function",
      encodeByteArray(input, webSafe) {
        if (!Array.isArray(input)) {
          throw Error("encodeByteArray takes an array as a parameter");
        }
        this.init_();
        const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        const output = [];
        for (let i = 0; i < input.length; i += 3) {
          const byte1 = input[i];
          const haveByte2 = i + 1 < input.length;
          const byte2 = haveByte2 ? input[i + 1] : 0;
          const haveByte3 = i + 2 < input.length;
          const byte3 = haveByte3 ? input[i + 2] : 0;
          const outByte1 = byte1 >> 2;
          const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
          let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
          let outByte4 = byte3 & 63;
          if (!haveByte3) {
            outByte4 = 64;
            if (!haveByte2) {
              outByte3 = 64;
            }
          }
          output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join("");
      },
      encodeString(input, webSafe) {
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
          return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
      },
      decodeString(input, webSafe) {
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
          return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
      },
      decodeStringToByteArray(input, webSafe) {
        this.init_();
        const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        const output = [];
        for (let i = 0; i < input.length; ) {
          const byte1 = charToByteMap[input.charAt(i++)];
          const haveByte2 = i < input.length;
          const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
          ++i;
          const haveByte3 = i < input.length;
          const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
          ++i;
          const haveByte4 = i < input.length;
          const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
          ++i;
          if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
            throw Error();
          }
          const outByte1 = byte1 << 2 | byte2 >> 4;
          output.push(outByte1);
          if (byte3 !== 64) {
            const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
            output.push(outByte2);
            if (byte4 !== 64) {
              const outByte3 = byte3 << 6 & 192 | byte4;
              output.push(outByte3);
            }
          }
        }
        return output;
      },
      init_() {
        if (!this.byteToCharMap_) {
          this.byteToCharMap_ = {};
          this.charToByteMap_ = {};
          this.byteToCharMapWebSafe_ = {};
          this.charToByteMapWebSafe_ = {};
          for (let i = 0; i < this.ENCODED_VALS.length; i++) {
            this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
            this.charToByteMap_[this.byteToCharMap_[i]] = i;
            this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
            this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
            if (i >= this.ENCODED_VALS_BASE.length) {
              this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
              this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
            }
          }
        }
      }
    };
    base64Encode = function(str) {
      const utf8Bytes = stringToByteArray$1(str);
      return base642.encodeByteArray(utf8Bytes, true);
    };
    base64urlEncodeWithoutPadding = function(str) {
      return base64Encode(str).replace(/\./g, "");
    };
    base64Decode = function(str) {
      try {
        return base642.decodeString(str, true);
      } catch (e3) {
        console.error("base64Decode failed: ", e3);
      }
      return null;
    };
    Deferred = class {
      constructor() {
        this.reject = () => {
        };
        this.resolve = () => {
        };
        this.promise = new Promise((resolve2, reject) => {
          this.resolve = resolve2;
          this.reject = reject;
        });
      }
      wrapCallback(callback) {
        return (error2, value) => {
          if (error2) {
            this.reject(error2);
          } else {
            this.resolve(value);
          }
          if (typeof callback === "function") {
            this.promise.catch(() => {
            });
            if (callback.length === 1) {
              callback(error2);
            } else {
              callback(error2, value);
            }
          }
        };
      }
    };
    ERROR_NAME = "FirebaseError";
    FirebaseError = class extends Error {
      constructor(code, message, customData) {
        super(message);
        this.code = code;
        this.customData = customData;
        this.name = ERROR_NAME;
        Object.setPrototypeOf(this, FirebaseError.prototype);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
      }
    };
    ErrorFactory = class {
      constructor(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
      }
      create(code, ...data) {
        const customData = data[0] || {};
        const fullCode = `${this.service}/${code}`;
        const template2 = this.errors[code];
        const message = template2 ? replaceTemplate(template2, customData) : "Error";
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error2 = new FirebaseError(fullCode, fullMessage, customData);
        return error2;
      }
    };
    PATTERN = /\{\$([^}]+)}/g;
    ObserverProxy = class {
      constructor(executor, onNoObservers) {
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        this.task.then(() => {
          executor(this);
        }).catch((e3) => {
          this.error(e3);
        });
      }
      next(value) {
        this.forEachObserver((observer) => {
          observer.next(value);
        });
      }
      error(error2) {
        this.forEachObserver((observer) => {
          observer.error(error2);
        });
        this.close(error2);
      }
      complete() {
        this.forEachObserver((observer) => {
          observer.complete();
        });
        this.close();
      }
      subscribe(nextOrObserver, error2, complete) {
        let observer;
        if (nextOrObserver === void 0 && error2 === void 0 && complete === void 0) {
          throw new Error("Missing Observer.");
        }
        if (implementsAnyMethods(nextOrObserver, [
          "next",
          "error",
          "complete"
        ])) {
          observer = nextOrObserver;
        } else {
          observer = {
            next: nextOrObserver,
            error: error2,
            complete
          };
        }
        if (observer.next === void 0) {
          observer.next = noop2;
        }
        if (observer.error === void 0) {
          observer.error = noop2;
        }
        if (observer.complete === void 0) {
          observer.complete = noop2;
        }
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        if (this.finalized) {
          this.task.then(() => {
            try {
              if (this.finalError) {
                observer.error(this.finalError);
              } else {
                observer.complete();
              }
            } catch (e3) {
            }
            return;
          });
        }
        this.observers.push(observer);
        return unsub;
      }
      unsubscribeOne(i) {
        if (this.observers === void 0 || this.observers[i] === void 0) {
          return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== void 0) {
          this.onNoObservers(this);
        }
      }
      forEachObserver(fn) {
        if (this.finalized) {
          return;
        }
        for (let i = 0; i < this.observers.length; i++) {
          this.sendOne(i, fn);
        }
      }
      sendOne(i, fn) {
        this.task.then(() => {
          if (this.observers !== void 0 && this.observers[i] !== void 0) {
            try {
              fn(this.observers[i]);
            } catch (e3) {
              if (typeof console !== "undefined" && console.error) {
                console.error(e3);
              }
            }
          }
        });
      }
      close(err) {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        if (err !== void 0) {
          this.finalError = err;
        }
        this.task.then(() => {
          this.observers = void 0;
          this.onNoObservers = void 0;
        });
      }
    };
    MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
  }
});

// node_modules/@firebase/component/dist/esm/index.esm2017.js
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
}
function isComponentEager(component8) {
  return component8.instantiationMode === "EAGER";
}
var Component, DEFAULT_ENTRY_NAME, Provider, ComponentContainer;
var init_index_esm20172 = __esm({
  "node_modules/@firebase/component/dist/esm/index.esm2017.js"() {
    init_index_esm2017();
    Component = class {
      constructor(name4, instanceFactory, type) {
        this.name = name4;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        this.serviceProps = {};
        this.instantiationMode = "LAZY";
        this.onInstanceCreated = null;
      }
      setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
      }
      setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
      }
      setServiceProps(props) {
        this.serviceProps = props;
        return this;
      }
      setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
      }
    };
    DEFAULT_ENTRY_NAME = "[DEFAULT]";
    Provider = class {
      constructor(name4, container) {
        this.name = name4;
        this.container = container;
        this.component = null;
        this.instances = /* @__PURE__ */ new Map();
        this.instancesDeferred = /* @__PURE__ */ new Map();
        this.instancesOptions = /* @__PURE__ */ new Map();
        this.onInitCallbacks = /* @__PURE__ */ new Map();
      }
      get(identifier) {
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
          const deferred = new Deferred();
          this.instancesDeferred.set(normalizedIdentifier, deferred);
          if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
            try {
              const instance = this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
              });
              if (instance) {
                deferred.resolve(instance);
              }
            } catch (e3) {
            }
          }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
      }
      getImmediate(options) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
          try {
            return this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
          } catch (e3) {
            if (optional) {
              return null;
            } else {
              throw e3;
            }
          }
        } else {
          if (optional) {
            return null;
          } else {
            throw Error(`Service ${this.name} is not available`);
          }
        }
      }
      getComponent() {
        return this.component;
      }
      setComponent(component8) {
        if (component8.name !== this.name) {
          throw Error(`Mismatching Component ${component8.name} for Provider ${this.name}.`);
        }
        if (this.component) {
          throw Error(`Component for ${this.name} has already been provided`);
        }
        this.component = component8;
        if (!this.shouldAutoInitialize()) {
          return;
        }
        if (isComponentEager(component8)) {
          try {
            this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
          } catch (e3) {
          }
        }
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
          const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
          try {
            const instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            instanceDeferred.resolve(instance);
          } catch (e3) {
          }
        }
      }
      clearInstance(identifier = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
      }
      async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
          ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
          ...services.filter((service) => "_delete" in service).map((service) => service._delete())
        ]);
      }
      isComponentSet() {
        return this.component != null;
      }
      isInitialized(identifier = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
      }
      getOptions(identifier = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {};
      }
      initialize(opts = {}) {
        const { options = {} } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
          throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        }
        if (!this.isComponentSet()) {
          throw Error(`Component ${this.name} has not been registered yet`);
        }
        const instance = this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier,
          options
        });
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
          const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
          if (normalizedIdentifier === normalizedDeferredIdentifier) {
            instanceDeferred.resolve(instance);
          }
        }
        return instance;
      }
      onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
          callback(existingInstance, normalizedIdentifier);
        }
        return () => {
          existingCallbacks.delete(callback);
        };
      }
      invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
          return;
        }
        for (const callback of callbacks) {
          try {
            callback(instance, identifier);
          } catch (_a) {
          }
        }
      }
      getOrInitializeService({ instanceIdentifier, options = {} }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
          instance = this.component.instanceFactory(this.container, {
            instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
            options
          });
          this.instances.set(instanceIdentifier, instance);
          this.instancesOptions.set(instanceIdentifier, options);
          this.invokeOnInitCallbacks(instance, instanceIdentifier);
          if (this.component.onInstanceCreated) {
            try {
              this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
            } catch (_a) {
            }
          }
        }
        return instance || null;
      }
      normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
        if (this.component) {
          return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        } else {
          return identifier;
        }
      }
      shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT";
      }
    };
    ComponentContainer = class {
      constructor(name4) {
        this.name = name4;
        this.providers = /* @__PURE__ */ new Map();
      }
      addComponent(component8) {
        const provider = this.getProvider(component8.name);
        if (provider.isComponentSet()) {
          throw new Error(`Component ${component8.name} has already been registered with ${this.name}`);
        }
        provider.setComponent(component8);
      }
      addOrOverwriteComponent(component8) {
        const provider = this.getProvider(component8.name);
        if (provider.isComponentSet()) {
          this.providers.delete(component8.name);
        }
        this.addComponent(component8);
      }
      getProvider(name4) {
        if (this.providers.has(name4)) {
          return this.providers.get(name4);
        }
        const provider = new Provider(name4, this);
        this.providers.set(name4, provider);
        return provider;
      }
      getProviders() {
        return Array.from(this.providers.values());
      }
    };
  }
});

// node_modules/@firebase/logger/dist/esm/index.esm2017.js
var instances, LogLevel, levelStringToEnum, defaultLogLevel, ConsoleMethod, defaultLogHandler, Logger;
var init_index_esm20173 = __esm({
  "node_modules/@firebase/logger/dist/esm/index.esm2017.js"() {
    instances = [];
    (function(LogLevel2) {
      LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
      LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
      LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
      LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
      LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
      LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
    })(LogLevel || (LogLevel = {}));
    levelStringToEnum = {
      "debug": LogLevel.DEBUG,
      "verbose": LogLevel.VERBOSE,
      "info": LogLevel.INFO,
      "warn": LogLevel.WARN,
      "error": LogLevel.ERROR,
      "silent": LogLevel.SILENT
    };
    defaultLogLevel = LogLevel.INFO;
    ConsoleMethod = {
      [LogLevel.DEBUG]: "log",
      [LogLevel.VERBOSE]: "log",
      [LogLevel.INFO]: "info",
      [LogLevel.WARN]: "warn",
      [LogLevel.ERROR]: "error"
    };
    defaultLogHandler = (instance, logType, ...args) => {
      if (logType < instance.logLevel) {
        return;
      }
      const now2 = new Date().toISOString();
      const method = ConsoleMethod[logType];
      if (method) {
        console[method](`[${now2}]  ${instance.name}:`, ...args);
      } else {
        throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
      }
    };
    Logger = class {
      constructor(name4) {
        this.name = name4;
        this._logLevel = defaultLogLevel;
        this._logHandler = defaultLogHandler;
        this._userLogHandler = null;
        instances.push(this);
      }
      get logLevel() {
        return this._logLevel;
      }
      set logLevel(val) {
        if (!(val in LogLevel)) {
          throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        }
        this._logLevel = val;
      }
      setLogLevel(val) {
        this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
      }
      get logHandler() {
        return this._logHandler;
      }
      set logHandler(val) {
        if (typeof val !== "function") {
          throw new TypeError("Value assigned to `logHandler` must be a function");
        }
        this._logHandler = val;
      }
      get userLogHandler() {
        return this._userLogHandler;
      }
      set userLogHandler(val) {
        this._userLogHandler = val;
      }
      debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
      }
      log(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
      }
      info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
      }
      warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
      }
      error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
      }
    };
  }
});

// node_modules/idb/build/wrap-idb-value.js
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
function promisifyRequest(request) {
  const promise = new Promise((resolve2, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error2);
    };
    const success = () => {
      resolve2(wrap(request.result));
      unlisten();
    };
    const error2 = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error2);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve2, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error2);
      tx.removeEventListener("abort", error2);
    };
    const complete = () => {
      resolve2();
      unlisten();
    };
    const error2 = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error2);
    tx.addEventListener("abort", error2);
  });
  transactionDoneMap.set(tx, done);
}
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var instanceOfAny, idbProxyableTypes, cursorAdvanceMethods, cursorRequestMap, transactionDoneMap, transactionStoreNamesMap, transformCache, reverseTransformCache, idbProxyTraps, unwrap;
var init_wrap_idb_value = __esm({
  "node_modules/idb/build/wrap-idb-value.js"() {
    instanceOfAny = (object, constructors) => constructors.some((c2) => object instanceof c2);
    cursorRequestMap = /* @__PURE__ */ new WeakMap();
    transactionDoneMap = /* @__PURE__ */ new WeakMap();
    transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
    transformCache = /* @__PURE__ */ new WeakMap();
    reverseTransformCache = /* @__PURE__ */ new WeakMap();
    idbProxyTraps = {
      get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
          if (prop === "done")
            return transactionDoneMap.get(target);
          if (prop === "objectStoreNames") {
            return target.objectStoreNames || transactionStoreNamesMap.get(target);
          }
          if (prop === "store") {
            return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
          }
        }
        return wrap(target[prop]);
      },
      set(target, prop, value) {
        target[prop] = value;
        return true;
      },
      has(target, prop) {
        if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
          return true;
        }
        return prop in target;
      }
    };
    unwrap = (value) => reverseTransformCache.get(value);
  }
});

// node_modules/idb/build/index.js
function openDB(name4, version4, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name4, version4);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction));
    });
  }
  if (blocked)
    request.addEventListener("blocked", () => blocked());
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking)
      db.addEventListener("versionchange", () => blocking());
  }).catch(() => {
  });
  return openPromise;
}
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
var readMethods, writeMethods, cachedMethods;
var init_build = __esm({
  "node_modules/idb/build/index.js"() {
    init_wrap_idb_value();
    init_wrap_idb_value();
    readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
    writeMethods = ["put", "add", "delete", "clear"];
    cachedMethods = /* @__PURE__ */ new Map();
    replaceTraps((oldTraps) => ({
      ...oldTraps,
      get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
      has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
    }));
  }
});

// node_modules/@firebase/app/dist/esm/index.esm2017.js
function isVersionServiceProvider(provider) {
  const component8 = provider.getComponent();
  return (component8 === null || component8 === void 0 ? void 0 : component8.type) === "VERSION";
}
function _addComponent(app2, component8) {
  try {
    app2.container.addComponent(component8);
  } catch (e3) {
    logger.debug(`Component ${component8.name} failed to register with FirebaseApp ${app2.name}`, e3);
  }
}
function _registerComponent(component8) {
  const componentName = component8.name;
  if (_components.has(componentName)) {
    logger.debug(`There were multiple attempts to register component ${componentName}.`);
    return false;
  }
  _components.set(componentName, component8);
  for (const app2 of _apps.values()) {
    _addComponent(app2, component8);
  }
  return true;
}
function _getProvider(app2, name4) {
  const heartbeatController = app2.container.getProvider("heartbeat").getImmediate({ optional: true });
  if (heartbeatController) {
    void heartbeatController.triggerHeartbeat();
  }
  return app2.container.getProvider(name4);
}
function initializeApp(options, rawConfig = {}) {
  if (typeof rawConfig !== "object") {
    const name5 = rawConfig;
    rawConfig = { name: name5 };
  }
  const config = Object.assign({ name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false }, rawConfig);
  const name4 = config.name;
  if (typeof name4 !== "string" || !name4) {
    throw ERROR_FACTORY.create("bad-app-name", {
      appName: String(name4)
    });
  }
  const existingApp = _apps.get(name4);
  if (existingApp) {
    if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app", { appName: name4 });
    }
  }
  const container = new ComponentContainer(name4);
  for (const component8 of _components.values()) {
    container.addComponent(component8);
  }
  const newApp = new FirebaseAppImpl(options, config, container);
  _apps.set(name4, newApp);
  return newApp;
}
function getApp(name4 = DEFAULT_ENTRY_NAME2) {
  const app2 = _apps.get(name4);
  if (!app2) {
    throw ERROR_FACTORY.create("no-app", { appName: name4 });
  }
  return app2;
}
function registerVersion(libraryKeyOrName, version4, variant) {
  var _a;
  let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
  if (variant) {
    library += `-${variant}`;
  }
  const libraryMismatch = library.match(/\s|\//);
  const versionMismatch = version4.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    const warning = [
      `Unable to register library "${library}" with version "${version4}":`
    ];
    if (libraryMismatch) {
      warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
    }
    if (libraryMismatch && versionMismatch) {
      warning.push("and");
    }
    if (versionMismatch) {
      warning.push(`version name "${version4}" contains illegal characters (whitespace or "/")`);
    }
    logger.warn(warning.join(" "));
    return;
  }
  _registerComponent(new Component(`${library}-version`, () => ({ library, version: version4 }), "VERSION"));
}
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade: (db, oldVersion) => {
        switch (oldVersion) {
          case 0:
            db.createObjectStore(STORE_NAME);
        }
      }
    }).catch((e3) => {
      throw ERROR_FACTORY.create("idb-open", {
        originalErrorMessage: e3.message
      });
    });
  }
  return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app2) {
  var _a;
  try {
    const db = await getDbPromise();
    return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app2));
  } catch (e3) {
    if (e3 instanceof FirebaseError) {
      logger.warn(e3.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-get", {
        originalErrorMessage: (_a = e3) === null || _a === void 0 ? void 0 : _a.message
      });
      logger.warn(idbGetError.message);
    }
  }
}
async function writeHeartbeatsToIndexedDB(app2, heartbeatObject) {
  var _a;
  try {
    const db = await getDbPromise();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const objectStore = tx.objectStore(STORE_NAME);
    await objectStore.put(heartbeatObject, computeKey(app2));
    return tx.done;
  } catch (e3) {
    if (e3 instanceof FirebaseError) {
      logger.warn(e3.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-set", {
        originalErrorMessage: (_a = e3) === null || _a === void 0 ? void 0 : _a.message
      });
      logger.warn(idbGetError.message);
    }
  }
}
function computeKey(app2) {
  return `${app2.name}!${app2.options.appId}`;
}
function getUTCDateString() {
  const today = new Date();
  return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
  const heartbeatsToSend = [];
  let unsentEntries = heartbeatsCache.slice();
  for (const singleDateHeartbeat of heartbeatsCache) {
    const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
    if (!heartbeatEntry) {
      heartbeatsToSend.push({
        agent: singleDateHeartbeat.agent,
        dates: [singleDateHeartbeat.date]
      });
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatsToSend.pop();
        break;
      }
    } else {
      heartbeatEntry.dates.push(singleDateHeartbeat.date);
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatEntry.dates.pop();
        break;
      }
    }
    unsentEntries = unsentEntries.slice(1);
  }
  return {
    heartbeatsToSend,
    unsentEntries
  };
}
function countBytes(heartbeatsCache) {
  return base64urlEncodeWithoutPadding(
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
  ).length;
}
function registerCoreComponents(variant) {
  _registerComponent(new Component("platform-logger", (container) => new PlatformLoggerServiceImpl(container), "PRIVATE"));
  _registerComponent(new Component("heartbeat", (container) => new HeartbeatServiceImpl(container), "PRIVATE"));
  registerVersion(name$o, version$1, variant);
  registerVersion(name$o, version$1, "esm2017");
  registerVersion("fire-js", "");
}
var PlatformLoggerServiceImpl, name$o, version$1, logger, name$n, name$m, name$l, name$k, name$j, name$i, name$h, name$g, name$f, name$e, name$d, name$c, name$b, name$a, name$9, name$8, name$7, name$6, name$5, name$4, name$3, name$2, name$1, name, version, DEFAULT_ENTRY_NAME2, PLATFORM_LOG_STRING, _apps, _components, ERRORS, ERROR_FACTORY, FirebaseAppImpl, SDK_VERSION, DB_NAME, DB_VERSION, STORE_NAME, dbPromise, MAX_HEADER_BYTES, STORED_HEARTBEAT_RETENTION_MAX_MILLIS, HeartbeatServiceImpl, HeartbeatStorageImpl;
var init_index_esm20174 = __esm({
  "node_modules/@firebase/app/dist/esm/index.esm2017.js"() {
    init_index_esm20172();
    init_index_esm20173();
    init_index_esm2017();
    init_index_esm2017();
    init_build();
    PlatformLoggerServiceImpl = class {
      constructor(container) {
        this.container = container;
      }
      getPlatformInfoString() {
        const providers = this.container.getProviders();
        return providers.map((provider) => {
          if (isVersionServiceProvider(provider)) {
            const service = provider.getImmediate();
            return `${service.library}/${service.version}`;
          } else {
            return null;
          }
        }).filter((logString) => logString).join(" ");
      }
    };
    name$o = "@firebase/app";
    version$1 = "0.7.31";
    logger = new Logger("@firebase/app");
    name$n = "@firebase/app-compat";
    name$m = "@firebase/analytics-compat";
    name$l = "@firebase/analytics";
    name$k = "@firebase/app-check-compat";
    name$j = "@firebase/app-check";
    name$i = "@firebase/auth";
    name$h = "@firebase/auth-compat";
    name$g = "@firebase/database";
    name$f = "@firebase/database-compat";
    name$e = "@firebase/functions";
    name$d = "@firebase/functions-compat";
    name$c = "@firebase/installations";
    name$b = "@firebase/installations-compat";
    name$a = "@firebase/messaging";
    name$9 = "@firebase/messaging-compat";
    name$8 = "@firebase/performance";
    name$7 = "@firebase/performance-compat";
    name$6 = "@firebase/remote-config";
    name$5 = "@firebase/remote-config-compat";
    name$4 = "@firebase/storage";
    name$3 = "@firebase/storage-compat";
    name$2 = "@firebase/firestore";
    name$1 = "@firebase/firestore-compat";
    name = "firebase";
    version = "9.9.3";
    DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
    PLATFORM_LOG_STRING = {
      [name$o]: "fire-core",
      [name$n]: "fire-core-compat",
      [name$l]: "fire-analytics",
      [name$m]: "fire-analytics-compat",
      [name$j]: "fire-app-check",
      [name$k]: "fire-app-check-compat",
      [name$i]: "fire-auth",
      [name$h]: "fire-auth-compat",
      [name$g]: "fire-rtdb",
      [name$f]: "fire-rtdb-compat",
      [name$e]: "fire-fn",
      [name$d]: "fire-fn-compat",
      [name$c]: "fire-iid",
      [name$b]: "fire-iid-compat",
      [name$a]: "fire-fcm",
      [name$9]: "fire-fcm-compat",
      [name$8]: "fire-perf",
      [name$7]: "fire-perf-compat",
      [name$6]: "fire-rc",
      [name$5]: "fire-rc-compat",
      [name$4]: "fire-gcs",
      [name$3]: "fire-gcs-compat",
      [name$2]: "fire-fst",
      [name$1]: "fire-fst-compat",
      "fire-js": "fire-js",
      [name]: "fire-js-all"
    };
    _apps = /* @__PURE__ */ new Map();
    _components = /* @__PURE__ */ new Map();
    ERRORS = {
      ["no-app"]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
      ["bad-app-name"]: "Illegal App name: '{$appName}",
      ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
      ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
      ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
      ["invalid-log-argument"]: "First argument to `onLog` must be null or a function.",
      ["idb-open"]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
      ["idb-get"]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
      ["idb-set"]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
      ["idb-delete"]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
    };
    ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
    FirebaseAppImpl = class {
      constructor(options, config, container) {
        this._isDeleted = false;
        this._options = Object.assign({}, options);
        this._config = Object.assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new Component("app", () => this, "PUBLIC"));
      }
      get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
      }
      set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
      }
      get name() {
        this.checkDestroyed();
        return this._name;
      }
      get options() {
        this.checkDestroyed();
        return this._options;
      }
      get config() {
        this.checkDestroyed();
        return this._config;
      }
      get container() {
        return this._container;
      }
      get isDeleted() {
        return this._isDeleted;
      }
      set isDeleted(val) {
        this._isDeleted = val;
      }
      checkDestroyed() {
        if (this.isDeleted) {
          throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
        }
      }
    };
    SDK_VERSION = version;
    DB_NAME = "firebase-heartbeat-database";
    DB_VERSION = 1;
    STORE_NAME = "firebase-heartbeat-store";
    dbPromise = null;
    MAX_HEADER_BYTES = 1024;
    STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
    HeartbeatServiceImpl = class {
      constructor(container) {
        this.container = container;
        this._heartbeatsCache = null;
        const app2 = this.container.getProvider("app").getImmediate();
        this._storage = new HeartbeatStorageImpl(app2);
        this._heartbeatsCachePromise = this._storage.read().then((result) => {
          this._heartbeatsCache = result;
          return result;
        });
      }
      async triggerHeartbeat() {
        const platformLogger = this.container.getProvider("platform-logger").getImmediate();
        const agent = platformLogger.getPlatformInfoString();
        const date = getUTCDateString();
        if (this._heartbeatsCache === null) {
          this._heartbeatsCache = await this._heartbeatsCachePromise;
        }
        if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
          return;
        } else {
          this._heartbeatsCache.heartbeats.push({ date, agent });
        }
        this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
          const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
          const now2 = Date.now();
          return now2 - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
        });
        return this._storage.overwrite(this._heartbeatsCache);
      }
      async getHeartbeatsHeader() {
        if (this._heartbeatsCache === null) {
          await this._heartbeatsCachePromise;
        }
        if (this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) {
          return "";
        }
        const date = getUTCDateString();
        const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
        const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
        this._heartbeatsCache.lastSentHeartbeatDate = date;
        if (unsentEntries.length > 0) {
          this._heartbeatsCache.heartbeats = unsentEntries;
          await this._storage.overwrite(this._heartbeatsCache);
        } else {
          this._heartbeatsCache.heartbeats = [];
          void this._storage.overwrite(this._heartbeatsCache);
        }
        return headerString;
      }
    };
    HeartbeatStorageImpl = class {
      constructor(app2) {
        this.app = app2;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
      }
      async runIndexedDBEnvironmentCheck() {
        if (!isIndexedDBAvailable()) {
          return false;
        } else {
          return validateIndexedDBOpenable().then(() => true).catch(() => false);
        }
      }
      async read() {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
          return { heartbeats: [] };
        } else {
          const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
          return idbHeartbeatObject || { heartbeats: [] };
        }
      }
      async overwrite(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
          return;
        } else {
          const existingHeartbeatsObject = await this.read();
          return writeHeartbeatsToIndexedDB(this.app, {
            lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
            heartbeats: heartbeatsObject.heartbeats
          });
        }
      }
      async add(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
          return;
        } else {
          const existingHeartbeatsObject = await this.read();
          return writeHeartbeatsToIndexedDB(this.app, {
            lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
            heartbeats: [
              ...existingHeartbeatsObject.heartbeats,
              ...heartbeatsObject.heartbeats
            ]
          });
        }
      }
    };
    registerCoreComponents("");
  }
});

// node_modules/firebase/app/dist/index.esm.js
var name2, version2;
var init_index_esm = __esm({
  "node_modules/firebase/app/dist/index.esm.js"() {
    init_index_esm20174();
    init_index_esm20174();
    name2 = "firebase";
    version2 = "9.9.3";
    registerVersion(name2, version2, "app");
  }
});

// node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js
function m(t2, ...e3) {
  if (d.logLevel <= LogLevel.DEBUG) {
    const n2 = e3.map(_);
    d.debug(`Firestore (${f}): ${t2}`, ...n2);
  }
}
function p(t2, ...e3) {
  if (d.logLevel <= LogLevel.ERROR) {
    const n2 = e3.map(_);
    d.error(`Firestore (${f}): ${t2}`, ...n2);
  }
}
function _(t2) {
  if ("string" == typeof t2)
    return t2;
  try {
    return e3 = t2, JSON.stringify(e3);
  } catch (e4) {
    return t2;
  }
  var e3;
}
function g(t2 = "Unexpected state") {
  const e3 = `FIRESTORE (${f}) INTERNAL ASSERTION FAILED: ` + t2;
  throw p(e3), new Error(e3);
}
function v(t2, e3) {
  t2 || g();
}
function yt(t2, e3) {
  return t2 < e3 ? -1 : t2 > e3 ? 1 : 0;
}
function ln(e3 = getApp()) {
  return _getProvider(e3, "firestore/lite").getImmediate();
}
var l, f, d, A, x, L, U, j, z, G, W, K, Q, H, lt, ft, At, Nt, Dt, xe, Fe, on, cn, an, Yn;
var init_index_browser_esm2017 = __esm({
  "node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js"() {
    init_index_esm20174();
    init_index_esm20172();
    init_index_esm20173();
    init_index_esm2017();
    l = class {
      constructor(t2) {
        this.uid = t2;
      }
      isAuthenticated() {
        return null != this.uid;
      }
      toKey() {
        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
      }
      isEqual(t2) {
        return t2.uid === this.uid;
      }
    };
    l.UNAUTHENTICATED = new l(null), l.GOOGLE_CREDENTIALS = new l("google-credentials-uid"), l.FIRST_PARTY = new l("first-party-uid"), l.MOCK_USER = new l("mock-user");
    f = "9.9.2";
    d = new Logger("@firebase/firestore");
    A = "invalid-argument";
    x = "failed-precondition";
    L = class extends FirebaseError {
      constructor(t2, e3) {
        super(t2, e3), this.code = t2, this.message = e3, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
      }
    };
    U = class {
      constructor(t2, e3) {
        this.user = e3, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${t2}`);
      }
    };
    j = class {
      getToken() {
        return Promise.resolve(null);
      }
      invalidateToken() {
      }
      start(t2, e3) {
        t2.enqueueRetryable(() => e3(l.UNAUTHENTICATED));
      }
      shutdown() {
      }
    };
    z = class {
      constructor(t2) {
        this.auth = null, t2.onInit((t3) => {
          this.auth = t3;
        });
      }
      getToken() {
        return this.auth ? this.auth.getToken().then((t2) => t2 ? (v("string" == typeof t2.accessToken), new U(t2.accessToken, new l(this.auth.getUid()))) : null) : Promise.resolve(null);
      }
      invalidateToken() {
      }
      start(t2, e3) {
      }
      shutdown() {
      }
    };
    G = class {
      constructor(t2, e3, n2) {
        this.type = "FirstParty", this.user = l.FIRST_PARTY, this.headers = /* @__PURE__ */ new Map(), this.headers.set("X-Goog-AuthUser", e3);
        const r2 = t2.auth.getAuthHeaderValueForFirstParty([]);
        r2 && this.headers.set("Authorization", r2), n2 && this.headers.set("X-Goog-Iam-Authorization-Token", n2);
      }
    };
    W = class {
      constructor(t2, e3, n2) {
        this.t = t2, this.i = e3, this.o = n2;
      }
      getToken() {
        return Promise.resolve(new G(this.t, this.i, this.o));
      }
      start(t2, e3) {
        t2.enqueueRetryable(() => e3(l.FIRST_PARTY));
      }
      shutdown() {
      }
      invalidateToken() {
      }
    };
    K = class {
      constructor(t2) {
        this.value = t2, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), t2 && t2.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
      }
    };
    Q = class {
      constructor(t2) {
        this.u = t2, this.appCheck = null, t2.onInit((t3) => {
          this.appCheck = t3;
        });
      }
      getToken() {
        return this.appCheck ? this.appCheck.getToken().then((t2) => t2 ? (v("string" == typeof t2.token), new K(t2.token)) : null) : Promise.resolve(null);
      }
      invalidateToken() {
      }
      start(t2, e3) {
      }
      shutdown() {
      }
    };
    H = class {
      constructor(t2, e3) {
        this.projectId = t2, this.database = e3 || "(default)";
      }
      static empty() {
        return new H("", "");
      }
      get isDefaultDatabase() {
        return "(default)" === this.database;
      }
      isEqual(t2) {
        return t2 instanceof H && t2.projectId === this.projectId && t2.database === this.database;
      }
    };
    (ft = lt || (lt = {}))[ft.OK = 0] = "OK", ft[ft.CANCELLED = 1] = "CANCELLED", ft[ft.UNKNOWN = 2] = "UNKNOWN", ft[ft.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", ft[ft.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ft[ft.NOT_FOUND = 5] = "NOT_FOUND", ft[ft.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ft[ft.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", ft[ft.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ft[ft.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", ft[ft.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ft[ft.ABORTED = 10] = "ABORTED", ft[ft.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ft[ft.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", ft[ft.INTERNAL = 13] = "INTERNAL", ft[ft.UNAVAILABLE = 14] = "UNAVAILABLE", ft[ft.DATA_LOSS = 15] = "DATA_LOSS";
    At = class {
      constructor(t2, e3, n2, r2, s3) {
        this.key = t2, this.value = e3, this.color = null != n2 ? n2 : At.RED, this.left = null != r2 ? r2 : At.EMPTY, this.right = null != s3 ? s3 : At.EMPTY, this.size = this.left.size + 1 + this.right.size;
      }
      copy(t2, e3, n2, r2, s3) {
        return new At(null != t2 ? t2 : this.key, null != e3 ? e3 : this.value, null != n2 ? n2 : this.color, null != r2 ? r2 : this.left, null != s3 ? s3 : this.right);
      }
      isEmpty() {
        return false;
      }
      inorderTraversal(t2) {
        return this.left.inorderTraversal(t2) || t2(this.key, this.value) || this.right.inorderTraversal(t2);
      }
      reverseTraversal(t2) {
        return this.right.reverseTraversal(t2) || t2(this.key, this.value) || this.left.reverseTraversal(t2);
      }
      min() {
        return this.left.isEmpty() ? this : this.left.min();
      }
      minKey() {
        return this.min().key;
      }
      maxKey() {
        return this.right.isEmpty() ? this.key : this.right.maxKey();
      }
      insert(t2, e3, n2) {
        let r2 = this;
        const s3 = n2(t2, r2.key);
        return r2 = s3 < 0 ? r2.copy(null, null, null, r2.left.insert(t2, e3, n2), null) : 0 === s3 ? r2.copy(null, e3, null, null, null) : r2.copy(null, null, null, null, r2.right.insert(t2, e3, n2)), r2.fixUp();
      }
      removeMin() {
        if (this.left.isEmpty())
          return At.EMPTY;
        let t2 = this;
        return t2.left.isRed() || t2.left.left.isRed() || (t2 = t2.moveRedLeft()), t2 = t2.copy(null, null, null, t2.left.removeMin(), null), t2.fixUp();
      }
      remove(t2, e3) {
        let n2, r2 = this;
        if (e3(t2, r2.key) < 0)
          r2.left.isEmpty() || r2.left.isRed() || r2.left.left.isRed() || (r2 = r2.moveRedLeft()), r2 = r2.copy(null, null, null, r2.left.remove(t2, e3), null);
        else {
          if (r2.left.isRed() && (r2 = r2.rotateRight()), r2.right.isEmpty() || r2.right.isRed() || r2.right.left.isRed() || (r2 = r2.moveRedRight()), 0 === e3(t2, r2.key)) {
            if (r2.right.isEmpty())
              return At.EMPTY;
            n2 = r2.right.min(), r2 = r2.copy(n2.key, n2.value, null, null, r2.right.removeMin());
          }
          r2 = r2.copy(null, null, null, null, r2.right.remove(t2, e3));
        }
        return r2.fixUp();
      }
      isRed() {
        return this.color;
      }
      fixUp() {
        let t2 = this;
        return t2.right.isRed() && !t2.left.isRed() && (t2 = t2.rotateLeft()), t2.left.isRed() && t2.left.left.isRed() && (t2 = t2.rotateRight()), t2.left.isRed() && t2.right.isRed() && (t2 = t2.colorFlip()), t2;
      }
      moveRedLeft() {
        let t2 = this.colorFlip();
        return t2.right.left.isRed() && (t2 = t2.copy(null, null, null, null, t2.right.rotateRight()), t2 = t2.rotateLeft(), t2 = t2.colorFlip()), t2;
      }
      moveRedRight() {
        let t2 = this.colorFlip();
        return t2.left.left.isRed() && (t2 = t2.rotateRight(), t2 = t2.colorFlip()), t2;
      }
      rotateLeft() {
        const t2 = this.copy(null, null, At.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, t2, null);
      }
      rotateRight() {
        const t2 = this.copy(null, null, At.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, t2);
      }
      colorFlip() {
        const t2 = this.left.copy(null, null, !this.left.color, null, null), e3 = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t2, e3);
      }
      checkMaxDepth() {
        const t2 = this.check();
        return Math.pow(2, t2) <= this.size + 1;
      }
      check() {
        if (this.isRed() && this.left.isRed())
          throw g();
        if (this.right.isRed())
          throw g();
        const t2 = this.left.check();
        if (t2 !== this.right.check())
          throw g();
        return t2 + (this.isRed() ? 0 : 1);
      }
    };
    At.EMPTY = null, At.RED = true, At.BLACK = false;
    At.EMPTY = new class {
      constructor() {
        this.size = 0;
      }
      get key() {
        throw g();
      }
      get value() {
        throw g();
      }
      get color() {
        throw g();
      }
      get left() {
        throw g();
      }
      get right() {
        throw g();
      }
      copy(t2, e3, n2, r2, s3) {
        return this;
      }
      insert(t2, e3, n2) {
        return new At(t2, e3);
      }
      remove(t2, e3) {
        return this;
      }
      isEmpty() {
        return true;
      }
      inorderTraversal(t2) {
        return false;
      }
      reverseTraversal(t2) {
        return false;
      }
      minKey() {
        return null;
      }
      maxKey() {
        return null;
      }
      isRed() {
        return false;
      }
      checkMaxDepth() {
        return true;
      }
      check() {
        return 0;
      }
    }();
    Nt = class {
      constructor(t2) {
        this.binaryString = t2;
      }
      static fromBase64String(t2) {
        const e3 = atob(t2);
        return new Nt(e3);
      }
      static fromUint8Array(t2) {
        const e3 = function(t3) {
          let e4 = "";
          for (let n2 = 0; n2 < t3.length; ++n2)
            e4 += String.fromCharCode(t3[n2]);
          return e4;
        }(t2);
        return new Nt(e3);
      }
      [Symbol.iterator]() {
        let t2 = 0;
        return {
          next: () => t2 < this.binaryString.length ? {
            value: this.binaryString.charCodeAt(t2++),
            done: false
          } : {
            value: void 0,
            done: true
          }
        };
      }
      toBase64() {
        return t2 = this.binaryString, btoa(t2);
        var t2;
      }
      toUint8Array() {
        return function(t2) {
          const e3 = new Uint8Array(t2.length);
          for (let n2 = 0; n2 < t2.length; n2++)
            e3[n2] = t2.charCodeAt(n2);
          return e3;
        }(this.binaryString);
      }
      approximateByteSize() {
        return 2 * this.binaryString.length;
      }
      compareTo(t2) {
        return yt(this.binaryString, t2.binaryString);
      }
      isEqual(t2) {
        return this.binaryString === t2.binaryString;
      }
    };
    Nt.EMPTY_BYTE_STRING = new Nt("");
    Dt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
    xe = (() => {
      const t2 = {
        asc: "ASCENDING",
        desc: "DESCENDING"
      };
      return t2;
    })();
    Fe = (() => {
      const t2 = {
        "<": "LESS_THAN",
        "<=": "LESS_THAN_OR_EQUAL",
        ">": "GREATER_THAN",
        ">=": "GREATER_THAN_OR_EQUAL",
        "==": "EQUAL",
        "!=": "NOT_EQUAL",
        "array-contains": "ARRAY_CONTAINS",
        in: "IN",
        "not-in": "NOT_IN",
        "array-contains-any": "ARRAY_CONTAINS_ANY"
      };
      return t2;
    })();
    on = /* @__PURE__ */ new Map();
    cn = class {
      constructor(t2) {
        var e3;
        if (void 0 === t2.host) {
          if (void 0 !== t2.ssl)
            throw new L(A, "Can't provide ssl option if host option is not set");
          this.host = "firestore.googleapis.com", this.ssl = true;
        } else
          this.host = t2.host, this.ssl = null === (e3 = t2.ssl) || void 0 === e3 || e3;
        if (this.credentials = t2.credentials, this.ignoreUndefinedProperties = !!t2.ignoreUndefinedProperties, void 0 === t2.cacheSizeBytes)
          this.cacheSizeBytes = 41943040;
        else {
          if (-1 !== t2.cacheSizeBytes && t2.cacheSizeBytes < 1048576)
            throw new L(A, "cacheSizeBytes must be at least 1048576");
          this.cacheSizeBytes = t2.cacheSizeBytes;
        }
        this.experimentalForceLongPolling = !!t2.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t2.experimentalAutoDetectLongPolling, this.useFetchStreams = !!t2.useFetchStreams, function(t3, e4, n2, r2) {
          if (true === e4 && true === r2)
            throw new L(A, `${t3} and ${n2} cannot be used together.`);
        }("experimentalForceLongPolling", t2.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t2.experimentalAutoDetectLongPolling);
      }
      isEqual(t2) {
        return this.host === t2.host && this.ssl === t2.ssl && this.credentials === t2.credentials && this.cacheSizeBytes === t2.cacheSizeBytes && this.experimentalForceLongPolling === t2.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t2.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t2.ignoreUndefinedProperties && this.useFetchStreams === t2.useFetchStreams;
      }
    };
    an = class {
      constructor(t2, e3, n2) {
        this._authCredentials = e3, this._appCheckCredentials = n2, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new cn({}), this._settingsFrozen = false, t2 instanceof H ? this._databaseId = t2 : (this._app = t2, this._databaseId = function(t3) {
          if (!Object.prototype.hasOwnProperty.apply(t3.options, ["projectId"]))
            throw new L(A, '"projectId" not provided in firebase.initializeApp.');
          return new H(t3.options.projectId);
        }(t2));
      }
      get app() {
        if (!this._app)
          throw new L(x, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this._app;
      }
      get _initialized() {
        return this._settingsFrozen;
      }
      get _terminated() {
        return void 0 !== this._terminateTask;
      }
      _setSettings(t2) {
        if (this._settingsFrozen)
          throw new L(x, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new cn(t2), void 0 !== t2.credentials && (this._authCredentials = function(t3) {
          if (!t3)
            return new j();
          switch (t3.type) {
            case "gapi":
              const e3 = t3.client;
              return v(!("object" != typeof e3 || null === e3 || !e3.auth || !e3.auth.getAuthHeaderValueForFirstParty)), new W(e3, t3.sessionIndex || "0", t3.iamToken || null);
            case "provider":
              return t3.client;
            default:
              throw new L(A, "makeAuthCredentialsProvider failed due to invalid credential type");
          }
        }(t2.credentials));
      }
      _getSettings() {
        return this._settings;
      }
      _freezeSettings() {
        return this._settingsFrozen = true, this._settings;
      }
      _delete() {
        return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
      }
      toJSON() {
        return {
          app: this._app,
          databaseId: this._databaseId,
          settings: this._settings
        };
      }
      _terminate() {
        return function(t2) {
          const e3 = on.get(t2);
          e3 && (m("ComponentProvider", "Removing Datastore"), on.delete(t2), e3.terminate());
        }(this), Promise.resolve();
      }
    };
    Yn = new RegExp("[~\\*/\\[\\]]");
    !function(t2) {
      f = t2;
    }(`${SDK_VERSION}_lite`), _registerComponent(new Component("firestore/lite", (t2, { options: e3 }) => {
      const n2 = t2.getProvider("app").getImmediate(), r2 = new an(n2, new z(t2.getProvider("auth-internal")), new Q(t2.getProvider("app-check-internal")));
      return e3 && r2._setSettings(e3), r2;
    }, "PUBLIC")), registerVersion("firestore-lite", "3.4.14", ""), registerVersion("firestore-lite", "3.4.14", "esm2017");
  }
});

// node_modules/firebase/firestore/lite/dist/index.esm.js
var init_index_esm2 = __esm({
  "node_modules/firebase/firestore/lite/dist/index.esm.js"() {
    init_index_browser_esm2017();
  }
});

// node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __classPrivateFieldIn2;
    var __createBinding2;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v2) {
          return exports2[id] = previous ? previous(id, v2) : v2;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b) {
        d2.__proto__ = b;
      } || function(d2, b) {
        for (var p2 in b)
          if (Object.prototype.hasOwnProperty.call(b, p2))
            d2[p2] = b[p2];
      };
      __extends2 = function(d2, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d2, b);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign2 = Object.assign || function(t2) {
        for (var s3, i = 1, n2 = arguments.length; i < n2; i++) {
          s3 = arguments[i];
          for (var p2 in s3)
            if (Object.prototype.hasOwnProperty.call(s3, p2))
              t2[p2] = s3[p2];
        }
        return t2;
      };
      __rest2 = function(s3, e3) {
        var t2 = {};
        for (var p2 in s3)
          if (Object.prototype.hasOwnProperty.call(s3, p2) && e3.indexOf(p2) < 0)
            t2[p2] = s3[p2];
        if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p2 = Object.getOwnPropertySymbols(s3); i < p2.length; i++) {
            if (e3.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p2[i]))
              t2[p2[i]] = s3[p2[i]];
          }
        return t2;
      };
      __decorate2 = function(decorators, target, key2, desc) {
        var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r2 = Reflect.decorate(decorators, target, key2, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d2 = decorators[i])
              r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key2, r2) : d2(target, key2)) || r2;
        return c2 > 3 && r2 && Object.defineProperty(target, key2, r2), r2;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key2) {
          decorator(target, key2, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e3) {
              reject(e3);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e3) {
              reject(e3);
            }
          }
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _2 = { label: 0, sent: function() {
          if (t2[0] & 1)
            throw t2[1];
          return t2[1];
        }, trys: [], ops: [] }, f2, y, t2, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n2) {
          return function(v2) {
            return step([n2, v2]);
          };
        }
        function step(op) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (_2)
            try {
              if (f2 = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done)
                return t2;
              if (y = 0, t2)
                op = [op[0] & 2, t2.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t2 = op;
                  break;
                case 4:
                  _2.label++;
                  return { value: op[1], done: false };
                case 5:
                  _2.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _2.ops.pop();
                  _2.trys.pop();
                  continue;
                default:
                  if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _2 = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                    _2.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _2.label < t2[1]) {
                    _2.label = t2[1];
                    t2 = op;
                    break;
                  }
                  if (t2 && _2.label < t2[2]) {
                    _2.label = t2[2];
                    _2.ops.push(op);
                    break;
                  }
                  if (t2[2])
                    _2.ops.pop();
                  _2.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _2);
            } catch (e3) {
              op = [6, e3];
              y = 0;
            } finally {
              f2 = t2 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m2, o2) {
        for (var p2 in m2)
          if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(o2, p2))
            __createBinding2(o2, m2, p2);
      };
      __createBinding2 = Object.create ? function(o2, m2, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m2, k);
        if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m2[k];
          } };
        }
        Object.defineProperty(o2, k2, desc);
      } : function(o2, m2, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o2[k2] = m2[k];
      };
      __values2 = function(o2) {
        var s3 = typeof Symbol === "function" && Symbol.iterator, m2 = s3 && o2[s3], i = 0;
        if (m2)
          return m2.call(o2);
        if (o2 && typeof o2.length === "number")
          return {
            next: function() {
              if (o2 && i >= o2.length)
                o2 = void 0;
              return { value: o2 && o2[i++], done: !o2 };
            }
          };
        throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o2, n2) {
        var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
        if (!m2)
          return o2;
        var i = m2.call(o2), r2, ar = [], e3;
        try {
          while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
            ar.push(r2.value);
        } catch (error2) {
          e3 = { error: error2 };
        } finally {
          try {
            if (r2 && !r2.done && (m2 = i["return"]))
              m2.call(i);
          } finally {
            if (e3)
              throw e3.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s3 = 0, i = 0, il = arguments.length; i < il; i++)
          s3 += arguments[i].length;
        for (var r2 = Array(s3), k = 0, i = 0; i < il; i++)
          for (var a2 = arguments[i], j2 = 0, jl = a2.length; j2 < jl; j2++, k++)
            r2[k] = a2[j2];
        return r2;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l2 = from.length, ar; i < l2; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v2) {
        return this instanceof __await2 ? (this.v = v2, this) : new __await2(v2);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g2 = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n2) {
          if (g2[n2])
            i[n2] = function(v2) {
              return new Promise(function(a2, b) {
                q.push([n2, v2, a2, b]) > 1 || resume(n2, v2);
              });
            };
        }
        function resume(n2, v2) {
          try {
            step(g2[n2](v2));
          } catch (e3) {
            settle(q[0][3], e3);
          }
        }
        function step(r2) {
          r2.value instanceof __await2 ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q[0][2], r2);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f2, v2) {
          if (f2(v2), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o2) {
        var i, p2;
        return i = {}, verb("next"), verb("throw", function(e3) {
          throw e3;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n2, f2) {
          i[n2] = o2[n2] ? function(v2) {
            return (p2 = !p2) ? { value: __await2(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
          } : f2;
        }
      };
      __asyncValues2 = function(o2) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m2 = o2[Symbol.asyncIterator], i;
        return m2 ? m2.call(o2) : (o2 = typeof __values2 === "function" ? __values2(o2) : o2[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n2) {
          i[n2] = o2[n2] && function(v2) {
            return new Promise(function(resolve2, reject) {
              v2 = o2[n2](v2), settle(resolve2, reject, v2.done, v2.value);
            });
          };
        }
        function settle(resolve2, reject, d2, v2) {
          Promise.resolve(v2).then(function(v3) {
            resolve2({ value: v3, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o2, v2) {
        Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
      } : function(o2, v2) {
        o2["default"] = v2;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f2) {
        if (kind === "a" && !f2)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f2) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f2)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
    });
  }
});

// node_modules/tslib/modules/index.js
var import_tslib, __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __createBinding, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn;
var init_modules = __esm({
  "node_modules/tslib/modules/index.js"() {
    import_tslib = __toESM(require_tslib(), 1);
    ({
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __metadata,
      __awaiter,
      __generator,
      __exportStar,
      __createBinding,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn
    } = import_tslib.default);
  }
});

// node_modules/@firebase/auth/dist/esm2017/index-90ebcfae.js
function _prodErrorMap() {
  return {
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
function _logError(msg, ...args) {
  if (logClient.logLevel <= LogLevel.ERROR) {
    logClient.error(`Auth (${SDK_VERSION}): ${msg}`, ...args);
  }
}
function _fail(authOrCode, ...rest) {
  throw createErrorInternal(authOrCode, ...rest);
}
function _createError(authOrCode, ...rest) {
  return createErrorInternal(authOrCode, ...rest);
}
function _errorWithCustomMessage(auth, code, message) {
  const errorMap = Object.assign(Object.assign({}, prodErrorMap()), { [code]: message });
  const factory = new ErrorFactory("auth", "Firebase", errorMap);
  return factory.create(code, {
    appName: auth.name
  });
}
function createErrorInternal(authOrCode, ...rest) {
  if (typeof authOrCode !== "string") {
    const code = rest[0];
    const fullParams = [...rest.slice(1)];
    if (fullParams[0]) {
      fullParams[0].appName = authOrCode.name;
    }
    return authOrCode._errorFactory.create(code, ...fullParams);
  }
  return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}
function _assert(assertion, authOrCode, ...rest) {
  if (!assertion) {
    throw createErrorInternal(authOrCode, ...rest);
  }
}
function debugFail(failure) {
  const message = `INTERNAL ASSERTION FAILED: ` + failure;
  _logError(message);
  throw new Error(message);
}
function debugAssert(assertion, message) {
  if (!assertion) {
    debugFail(message);
  }
}
function _getInstance(cls) {
  debugAssert(cls instanceof Function, "Expected a class definition");
  let instance = instanceCache.get(cls);
  if (instance) {
    debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
    return instance;
  }
  instance = new cls();
  instanceCache.set(cls, instance);
  return instance;
}
function initializeAuth(app2, deps) {
  const provider = _getProvider(app2, "auth");
  if (provider.isInitialized()) {
    const auth2 = provider.getImmediate();
    const initialOptions = provider.getOptions();
    if (deepEqual(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
      return auth2;
    } else {
      _fail(auth2, "already-initialized");
    }
  }
  const auth = provider.initialize({ options: deps });
  return auth;
}
function _initializeAuthInstance(auth, deps) {
  const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
  const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
  if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
    auth._updateErrorMap(deps.errorMap);
  }
  auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
function _getCurrentUrl() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
}
function _isHttpOrHttps() {
  return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
}
function _getCurrentScheme() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
function _isOnline() {
  if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && (_isHttpOrHttps() || isBrowserExtension() || "connection" in navigator)) {
    return navigator.onLine;
  }
  return true;
}
function _getUserLanguage() {
  if (typeof navigator === "undefined") {
    return null;
  }
  const navigatorLanguage = navigator;
  return navigatorLanguage.languages && navigatorLanguage.languages[0] || navigatorLanguage.language || null;
}
function _emulatorUrl(config, path) {
  debugAssert(config.emulator, "Emulator should always be set here");
  const { url } = config.emulator;
  if (!path) {
    return url;
  }
  return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
}
function _addTidIfNecessary(auth, request) {
  if (auth.tenantId && !request.tenantId) {
    return Object.assign(Object.assign({}, request), { tenantId: auth.tenantId });
  }
  return request;
}
async function _performApiRequest(auth, method, path, request, customErrorMap = {}) {
  return _performFetchWithErrorHandling(auth, customErrorMap, async () => {
    let body = {};
    let params = {};
    if (request) {
      if (method === "GET") {
        params = request;
      } else {
        body = {
          body: JSON.stringify(request)
        };
      }
    }
    const query = querystring(Object.assign({ key: auth.config.apiKey }, params)).slice(1);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/json";
    if (auth.languageCode) {
      headers["X-Firebase-Locale"] = auth.languageCode;
    }
    return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), Object.assign({
      method,
      headers,
      referrerPolicy: "no-referrer"
    }, body));
  });
}
async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
  auth._canInitEmulator = false;
  const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
  try {
    const networkTimeout = new NetworkTimeout(auth);
    const response = await Promise.race([
      fetchFn(),
      networkTimeout.promise
    ]);
    networkTimeout.clearNetworkTimeout();
    const json2 = await response.json();
    if ("needConfirmation" in json2) {
      throw _makeTaggedError(auth, "account-exists-with-different-credential", json2);
    }
    if (response.ok && !("errorMessage" in json2)) {
      return json2;
    } else {
      const errorMessage = response.ok ? json2.errorMessage : json2.error.message;
      const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
      if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
        throw _makeTaggedError(auth, "credential-already-in-use", json2);
      } else if (serverErrorCode === "EMAIL_EXISTS") {
        throw _makeTaggedError(auth, "email-already-in-use", json2);
      } else if (serverErrorCode === "USER_DISABLED") {
        throw _makeTaggedError(auth, "user-disabled", json2);
      }
      const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
      if (serverErrorMessage) {
        throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
      } else {
        _fail(auth, authError);
      }
    }
  } catch (e3) {
    if (e3 instanceof FirebaseError) {
      throw e3;
    }
    _fail(auth, "network-request-failed");
  }
}
async function _performSignInRequest(auth, method, path, request, customErrorMap = {}) {
  const serverResponse = await _performApiRequest(auth, method, path, request, customErrorMap);
  if ("mfaPendingCredential" in serverResponse) {
    _fail(auth, "multi-factor-auth-required", {
      _serverResponse: serverResponse
    });
  }
  return serverResponse;
}
function _getFinalTarget(auth, host, path, query) {
  const base2 = `${host}${path}?${query}`;
  if (!auth.config.emulator) {
    return `${auth.config.apiScheme}://${base2}`;
  }
  return _emulatorUrl(auth.config, base2);
}
function _makeTaggedError(auth, code, response) {
  const errorParams = {
    appName: auth.name
  };
  if (response.email) {
    errorParams.email = response.email;
  }
  if (response.phoneNumber) {
    errorParams.phoneNumber = response.phoneNumber;
  }
  const error2 = _createError(auth, code, errorParams);
  error2.customData._tokenResponse = response;
  return error2;
}
async function deleteAccount(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:delete", request);
}
async function getAccountInfo(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:lookup", request);
}
function utcTimestampToDateString(utcTimestamp) {
  if (!utcTimestamp) {
    return void 0;
  }
  try {
    const date = new Date(Number(utcTimestamp));
    if (!isNaN(date.getTime())) {
      return date.toUTCString();
    }
  } catch (e3) {
  }
  return void 0;
}
async function getIdTokenResult(user, forceRefresh = false) {
  const userInternal = getModularInstance(user);
  const token = await userInternal.getIdToken(forceRefresh);
  const claims = _parseToken(token);
  _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error");
  const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
  const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
  return {
    claims,
    token,
    authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
    issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
    expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
    signInProvider: signInProvider || null,
    signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
  };
}
function secondsStringToMilliseconds(seconds) {
  return Number(seconds) * 1e3;
}
function _parseToken(token) {
  var _a;
  const [algorithm, payload, signature] = token.split(".");
  if (algorithm === void 0 || payload === void 0 || signature === void 0) {
    _logError("JWT malformed, contained fewer than 3 sections");
    return null;
  }
  try {
    const decoded = base64Decode(payload);
    if (!decoded) {
      _logError("Failed to decode base64 JWT payload");
      return null;
    }
    return JSON.parse(decoded);
  } catch (e3) {
    _logError("Caught error parsing JWT payload as JSON", (_a = e3) === null || _a === void 0 ? void 0 : _a.toString());
    return null;
  }
}
function _tokenExpiresIn(token) {
  const parsedToken = _parseToken(token);
  _assert(parsedToken, "internal-error");
  _assert(typeof parsedToken.exp !== "undefined", "internal-error");
  _assert(typeof parsedToken.iat !== "undefined", "internal-error");
  return Number(parsedToken.exp) - Number(parsedToken.iat);
}
async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
  if (bypassAuthState) {
    return promise;
  }
  try {
    return await promise;
  } catch (e3) {
    if (e3 instanceof FirebaseError && isUserInvalidated(e3)) {
      if (user.auth.currentUser === user) {
        await user.auth.signOut();
      }
    }
    throw e3;
  }
}
function isUserInvalidated({ code }) {
  return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
}
async function _reloadWithoutSaving(user) {
  var _a;
  const auth = user.auth;
  const idToken = await user.getIdToken();
  const response = await _logoutIfInvalidated(user, getAccountInfo(auth, { idToken }));
  _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error");
  const coreAccount = response.users[0];
  user._notifyReloadListener(coreAccount);
  const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
  const providerData = mergeProviderData(user.providerData, newProviderData);
  const oldIsAnonymous = user.isAnonymous;
  const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
  const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
  const updates = {
    uid: coreAccount.localId,
    displayName: coreAccount.displayName || null,
    photoURL: coreAccount.photoUrl || null,
    email: coreAccount.email || null,
    emailVerified: coreAccount.emailVerified || false,
    phoneNumber: coreAccount.phoneNumber || null,
    tenantId: coreAccount.tenantId || null,
    providerData,
    metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
    isAnonymous
  };
  Object.assign(user, updates);
}
async function reload(user) {
  const userInternal = getModularInstance(user);
  await _reloadWithoutSaving(userInternal);
  await userInternal.auth._persistUserIfCurrent(userInternal);
  userInternal.auth._notifyListenersIfCurrent(userInternal);
}
function mergeProviderData(original, newData) {
  const deduped = original.filter((o2) => !newData.some((n2) => n2.providerId === o2.providerId));
  return [...deduped, ...newData];
}
function extractProviderData(providers) {
  return providers.map((_a) => {
    var { providerId } = _a, provider = __rest(_a, ["providerId"]);
    return {
      providerId,
      uid: provider.rawId || "",
      displayName: provider.displayName || null,
      email: provider.email || null,
      phoneNumber: provider.phoneNumber || null,
      photoURL: provider.photoUrl || null
    };
  });
}
async function requestStsToken(auth, refreshToken) {
  const response = await _performFetchWithErrorHandling(auth, {}, async () => {
    const body = querystring({
      "grant_type": "refresh_token",
      "refresh_token": refreshToken
    }).slice(1);
    const { tokenApiHost, apiKey } = auth.config;
    const url = _getFinalTarget(auth, tokenApiHost, "/v1/token", `key=${apiKey}`);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    return FetchProvider.fetch()(url, {
      method: "POST",
      headers,
      body
    });
  });
  return {
    accessToken: response.access_token,
    expiresIn: response.expires_in,
    refreshToken: response.refresh_token
  };
}
function assertStringOrUndefined(assertion, appName) {
  _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", { appName });
}
function _persistenceKeyName(key2, apiKey, appName) {
  return `${"firebase"}:${key2}:${apiKey}:${appName}`;
}
function _getBrowserName(userAgent) {
  const ua = userAgent.toLowerCase();
  if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
    return "Opera";
  } else if (_isIEMobile(ua)) {
    return "IEMobile";
  } else if (ua.includes("msie") || ua.includes("trident/")) {
    return "IE";
  } else if (ua.includes("edge/")) {
    return "Edge";
  } else if (_isFirefox(ua)) {
    return "Firefox";
  } else if (ua.includes("silk/")) {
    return "Silk";
  } else if (_isBlackBerry(ua)) {
    return "Blackberry";
  } else if (_isWebOS(ua)) {
    return "Webos";
  } else if (_isSafari(ua)) {
    return "Safari";
  } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
    return "Chrome";
  } else if (_isAndroid(ua)) {
    return "Android";
  } else {
    const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
    const matches = userAgent.match(re);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
      return matches[1];
    }
  }
  return "Other";
}
function _isFirefox(ua = getUA()) {
  return /firefox\//i.test(ua);
}
function _isSafari(userAgent = getUA()) {
  const ua = userAgent.toLowerCase();
  return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
}
function _isChromeIOS(ua = getUA()) {
  return /crios\//i.test(ua);
}
function _isIEMobile(ua = getUA()) {
  return /iemobile/i.test(ua);
}
function _isAndroid(ua = getUA()) {
  return /android/i.test(ua);
}
function _isBlackBerry(ua = getUA()) {
  return /blackberry/i.test(ua);
}
function _isWebOS(ua = getUA()) {
  return /webos/i.test(ua);
}
function _isIOS(ua = getUA()) {
  return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
}
function _isIOSStandalone(ua = getUA()) {
  var _a;
  return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}
function _isIE10() {
  return isIE() && document.documentMode === 10;
}
function _isMobileBrowser(ua = getUA()) {
  return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}
function _isIframe() {
  try {
    return !!(window && window !== window.top);
  } catch (e3) {
    return false;
  }
}
function _getClientVersion(clientPlatform, frameworks = []) {
  let reportedPlatform;
  switch (clientPlatform) {
    case "Browser":
      reportedPlatform = _getBrowserName(getUA());
      break;
    case "Worker":
      reportedPlatform = `${_getBrowserName(getUA())}-${clientPlatform}`;
      break;
    default:
      reportedPlatform = clientPlatform;
  }
  const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
  return `${reportedPlatform}/${"JsCore"}/${SDK_VERSION}/${reportedFrameworks}`;
}
function _castAuth(auth) {
  return getModularInstance(auth);
}
async function updateEmailPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function signInWithPassword(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth, request));
}
async function signInWithEmailLink$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
async function signInWithEmailLinkForLinking(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
async function signInWithIdp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth, request));
}
async function sendPhoneVerificationCode(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth, request));
}
async function signInWithPhoneNumber$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
}
async function linkWithPhoneNumber$1(auth, request) {
  const response = await _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
  if (response.temporaryProof) {
    throw _makeTaggedError(auth, "account-exists-with-different-credential", response);
  }
  return response;
}
async function verifyPhoneNumberForExisting(auth, request) {
  const apiRequest = Object.assign(Object.assign({}, request), { operation: "REAUTH" });
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
}
function parseMode(mode) {
  switch (mode) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function parseDeepLink(url) {
  const link = querystringDecode(extractQuerystring(url))["link"];
  const doubleDeepLink = link ? querystringDecode(extractQuerystring(link))["deep_link_id"] : null;
  const iOSDeepLink = querystringDecode(extractQuerystring(url))["deep_link_id"];
  const iOSDoubleDeepLink = iOSDeepLink ? querystringDecode(extractQuerystring(iOSDeepLink))["link"] : null;
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
function providerIdForResponse(response) {
  if (response.providerId) {
    return response.providerId;
  }
  if ("phoneNumber" in response) {
    return "phone";
  }
  return null;
}
function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
  const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
  return idTokenProvider.catch((error2) => {
    if (error2.code === `auth/${"multi-factor-auth-required"}`) {
      throw MultiFactorError._fromErrorAndOperation(auth, error2, operationType, user);
    }
    throw error2;
  });
}
async function _link$1(user, credential, bypassAuthState = false) {
  const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
  return UserCredentialImpl._forOperation(user, "link", response);
}
async function _reauthenticate(user, credential, bypassAuthState = false) {
  var _a;
  const { auth } = user;
  const operationType = "reauthenticate";
  try {
    const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
    _assert(response.idToken, auth, "internal-error");
    const parsed = _parseToken(response.idToken);
    _assert(parsed, auth, "internal-error");
    const { sub: localId } = parsed;
    _assert(user.uid === localId, auth, "user-mismatch");
    return UserCredentialImpl._forOperation(user, operationType, response);
  } catch (e3) {
    if (((_a = e3) === null || _a === void 0 ? void 0 : _a.code) === `auth/${"user-not-found"}`) {
      _fail(auth, "user-mismatch");
    }
    throw e3;
  }
}
async function _signInWithCredential(auth, credential, bypassAuthState = false) {
  const operationType = "signIn";
  const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
  if (!bypassAuthState) {
    await auth._updateCurrentUser(userCredential.user);
  }
  return userCredential;
}
function startEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
}
function finalizeEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
}
function _iframeCannotSyncWebStorage() {
  const ua = getUA();
  return _isSafari(ua) || _isIOS(ua);
}
function _allSettled(promises) {
  return Promise.all(promises.map(async (promise) => {
    try {
      const value = await promise;
      return {
        fulfilled: true,
        value
      };
    } catch (reason) {
      return {
        fulfilled: false,
        reason
      };
    }
  }));
}
function _generateEventId(prefix2 = "", digits = 10) {
  let random = "";
  for (let i = 0; i < digits; i++) {
    random += Math.floor(Math.random() * 10);
  }
  return prefix2 + random;
}
function _window() {
  return window;
}
function _setWindowLocation(url) {
  _window().location.href = url;
}
function _isWorker() {
  return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
}
async function _getActiveServiceWorker() {
  if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
    return null;
  }
  try {
    const registration = await navigator.serviceWorker.ready;
    return registration.active;
  } catch (_a) {
    return null;
  }
}
function _getServiceWorkerController() {
  var _a;
  return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}
function _getWorkerGlobalScope() {
  return _isWorker() ? self : null;
}
function getObjectStore(db, isReadWrite) {
  return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
}
function _deleteDatabase() {
  const request = indexedDB.deleteDatabase(DB_NAME2);
  return new DBPromise(request).toPromise();
}
function _openDatabase() {
  const request = indexedDB.open(DB_NAME2, DB_VERSION2);
  return new Promise((resolve2, reject) => {
    request.addEventListener("error", () => {
      reject(request.error);
    });
    request.addEventListener("upgradeneeded", () => {
      const db = request.result;
      try {
        db.createObjectStore(DB_OBJECTSTORE_NAME, { keyPath: DB_DATA_KEYPATH });
      } catch (e3) {
        reject(e3);
      }
    });
    request.addEventListener("success", async () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
        db.close();
        await _deleteDatabase();
        resolve2(await _openDatabase());
      } else {
        resolve2(db);
      }
    });
  });
}
async function _putObject(db, key2, value) {
  const request = getObjectStore(db, true).put({
    [DB_DATA_KEYPATH]: key2,
    value
  });
  return new DBPromise(request).toPromise();
}
async function getObject(db, key2) {
  const request = getObjectStore(db, false).get(key2);
  const data = await new DBPromise(request).toPromise();
  return data === void 0 ? null : data.value;
}
function _deleteObject(db, key2) {
  const request = getObjectStore(db, true).delete(key2);
  return new DBPromise(request).toPromise();
}
function startSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth, request));
}
function finalizeSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
}
function getScriptParentElement() {
  var _a, _b;
  return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
function _loadJS(url) {
  return new Promise((resolve2, reject) => {
    const el = document.createElement("script");
    el.setAttribute("src", url);
    el.onload = resolve2;
    el.onerror = (e3) => {
      const error2 = _createError("internal-error");
      error2.customData = e3;
      reject(error2);
    };
    el.type = "text/javascript";
    el.charset = "UTF-8";
    getScriptParentElement().appendChild(el);
  });
}
function _generateCallbackName(prefix2) {
  return `__${prefix2}${Math.floor(Math.random() * 1e6)}`;
}
async function _verifyPhoneNumber(auth, options, verifier) {
  var _a;
  const recaptchaToken = await verifier.verify();
  try {
    _assert(typeof recaptchaToken === "string", auth, "argument-error");
    _assert(verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error");
    let phoneInfoOptions;
    if (typeof options === "string") {
      phoneInfoOptions = {
        phoneNumber: options
      };
    } else {
      phoneInfoOptions = options;
    }
    if ("session" in phoneInfoOptions) {
      const session = phoneInfoOptions.session;
      if ("phoneNumber" in phoneInfoOptions) {
        _assert(session.type === "enroll", auth, "internal-error");
        const response = await startEnrollPhoneMfa(auth, {
          idToken: session.credential,
          phoneEnrollmentInfo: {
            phoneNumber: phoneInfoOptions.phoneNumber,
            recaptchaToken
          }
        });
        return response.phoneSessionInfo.sessionInfo;
      } else {
        _assert(session.type === "signin", auth, "internal-error");
        const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
        _assert(mfaEnrollmentId, auth, "missing-multi-factor-info");
        const response = await startSignInPhoneMfa(auth, {
          mfaPendingCredential: session.credential,
          mfaEnrollmentId,
          phoneSignInInfo: {
            recaptchaToken
          }
        });
        return response.phoneResponseInfo.sessionInfo;
      }
    } else {
      const { sessionInfo } = await sendPhoneVerificationCode(auth, {
        phoneNumber: phoneInfoOptions.phoneNumber,
        recaptchaToken
      });
      return sessionInfo;
    }
  } finally {
    verifier._reset();
  }
}
function _withDefaultResolver(auth, resolverOverride) {
  if (resolverOverride) {
    return _getInstance(resolverOverride);
  }
  _assert(auth._popupRedirectResolver, auth, "argument-error");
  return auth._popupRedirectResolver;
}
function _signIn(params) {
  return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}
function _reauth(params) {
  const { auth, user } = params;
  _assert(user, auth, "internal-error");
  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
  const { auth, user } = params;
  _assert(user, auth, "internal-error");
  return _link$1(user, new IdpCredential(params), params.bypassAuthState);
}
async function _getAndClearPendingRedirectStatus(resolver, auth) {
  const key2 = pendingRedirectKey(auth);
  const persistence = resolverPersistence(resolver);
  if (!await persistence._isAvailable()) {
    return false;
  }
  const hasPendingRedirect = await persistence._get(key2) === "true";
  await persistence._remove(key2);
  return hasPendingRedirect;
}
function _overrideRedirectResult(auth, result) {
  redirectOutcomeMap.set(auth._key(), result);
}
function resolverPersistence(resolver) {
  return _getInstance(resolver._redirectPersistence);
}
function pendingRedirectKey(auth) {
  return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
}
async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
  const authInternal = _castAuth(auth);
  const resolver = _withDefaultResolver(authInternal, resolverExtern);
  const action = new RedirectAction(authInternal, resolver, bypassAuthState);
  const result = await action.execute();
  if (result && !bypassAuthState) {
    delete result.user._redirectEventId;
    await authInternal._persistUserIfCurrent(result.user);
    await authInternal._setRedirectUser(null, resolverExtern);
  }
  return result;
}
function eventUid(e3) {
  return [e3.type, e3.eventId, e3.sessionId, e3.tenantId].filter((v2) => v2).join("-");
}
function isNullRedirectEvent({ type, error: error2 }) {
  return type === "unknown" && (error2 === null || error2 === void 0 ? void 0 : error2.code) === `auth/${"no-auth-event"}`;
}
function isRedirectEvent(event) {
  switch (event.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return true;
    case "unknown":
      return isNullRedirectEvent(event);
    default:
      return false;
  }
}
async function _getProjectConfig(auth, request = {}) {
  return _performApiRequest(auth, "GET", "/v1/projects", request);
}
async function _validateOrigin(auth) {
  if (auth.config.emulator) {
    return;
  }
  const { authorizedDomains } = await _getProjectConfig(auth);
  for (const domain of authorizedDomains) {
    try {
      if (matchDomain(domain)) {
        return;
      }
    } catch (_a) {
    }
  }
  _fail(auth, "unauthorized-domain");
}
function matchDomain(expected) {
  const currentUrl = _getCurrentUrl();
  const { protocol, hostname } = new URL(currentUrl);
  if (expected.startsWith("chrome-extension://")) {
    const ceUrl = new URL(expected);
    if (ceUrl.hostname === "" && hostname === "") {
      return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
    }
    return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
  }
  if (!HTTP_REGEX.test(protocol)) {
    return false;
  }
  if (IP_ADDRESS_REGEX.test(expected)) {
    return hostname === expected;
  }
  const escapedDomainPattern = expected.replace(/\./g, "\\.");
  const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
  return re.test(hostname);
}
function resetUnloadedGapiModules() {
  const beacon = _window().___jsl;
  if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
    for (const hint of Object.keys(beacon.H)) {
      beacon.H[hint].r = beacon.H[hint].r || [];
      beacon.H[hint].L = beacon.H[hint].L || [];
      beacon.H[hint].r = [...beacon.H[hint].L];
      if (beacon.CP) {
        for (let i = 0; i < beacon.CP.length; i++) {
          beacon.CP[i] = null;
        }
      }
    }
  }
}
function loadGapi(auth) {
  return new Promise((resolve2, reject) => {
    var _a, _b, _c;
    function loadGapiIframe() {
      resetUnloadedGapiModules();
      gapi.load("gapi.iframes", {
        callback: () => {
          resolve2(gapi.iframes.getContext());
        },
        ontimeout: () => {
          resetUnloadedGapiModules();
          reject(_createError(auth, "network-request-failed"));
        },
        timeout: NETWORK_TIMEOUT.get()
      });
    }
    if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
      resolve2(gapi.iframes.getContext());
    } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
      loadGapiIframe();
    } else {
      const cbName = _generateCallbackName("iframefcb");
      _window()[cbName] = () => {
        if (!!gapi.load) {
          loadGapiIframe();
        } else {
          reject(_createError(auth, "network-request-failed"));
        }
      };
      return _loadJS(`https://apis.google.com/js/api.js?onload=${cbName}`).catch((e3) => reject(e3));
    }
  }).catch((error2) => {
    cachedGApiLoader = null;
    throw error2;
  });
}
function _loadGapi(auth) {
  cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
  return cachedGApiLoader;
}
function getIframeUrl(auth) {
  const config = auth.config;
  _assert(config.authDomain, auth, "auth-domain-config-required");
  const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
  const params = {
    apiKey: config.apiKey,
    appName: auth.name,
    v: SDK_VERSION
  };
  const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
  if (eid) {
    params.eid = eid;
  }
  const frameworks = auth._getFrameworks();
  if (frameworks.length) {
    params.fw = frameworks.join(",");
  }
  return `${url}?${querystring(params).slice(1)}`;
}
async function _openIframe(auth) {
  const context = await _loadGapi(auth);
  const gapi2 = _window().gapi;
  _assert(gapi2, auth, "internal-error");
  return context.open({
    where: document.body,
    url: getIframeUrl(auth),
    messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: IFRAME_ATTRIBUTES,
    dontclear: true
  }, (iframe) => new Promise(async (resolve2, reject) => {
    await iframe.restyle({
      setHideOnLeave: false
    });
    const networkError = _createError(auth, "network-request-failed");
    const networkErrorTimer = _window().setTimeout(() => {
      reject(networkError);
    }, PING_TIMEOUT.get());
    function clearTimerAndResolve() {
      _window().clearTimeout(networkErrorTimer);
      resolve2(iframe);
    }
    iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
      reject(networkError);
    });
  }));
}
function _open(auth, url, name4, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
  const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
  const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
  let target = "";
  const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
    width: width.toString(),
    height: height.toString(),
    top,
    left
  });
  const ua = getUA().toLowerCase();
  if (name4) {
    target = _isChromeIOS(ua) ? TARGET_BLANK : name4;
  }
  if (_isFirefox(ua)) {
    url = url || FIREFOX_EMPTY_URL;
    options.scrollbars = "yes";
  }
  const optionsString = Object.entries(options).reduce((accum, [key2, value]) => `${accum}${key2}=${value},`, "");
  if (_isIOSStandalone(ua) && target !== "_self") {
    openAsNewWindowIOS(url || "", target);
    return new AuthPopup(null);
  }
  const newWin = window.open(url || "", target, optionsString);
  _assert(newWin, auth, "popup-blocked");
  try {
    newWin.focus();
  } catch (e3) {
  }
  return new AuthPopup(newWin);
}
function openAsNewWindowIOS(url, target) {
  const el = document.createElement("a");
  el.href = url;
  el.target = target;
  const click = document.createEvent("MouseEvent");
  click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  el.dispatchEvent(click);
}
function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
  _assert(auth.config.authDomain, auth, "auth-domain-config-required");
  _assert(auth.config.apiKey, auth, "invalid-api-key");
  const params = {
    apiKey: auth.config.apiKey,
    appName: auth.name,
    authType,
    redirectUrl,
    v: SDK_VERSION,
    eventId
  };
  if (provider instanceof FederatedAuthProvider) {
    provider.setDefaultLanguage(auth.languageCode);
    params.providerId = provider.providerId || "";
    if (!isEmpty(provider.getCustomParameters())) {
      params.customParameters = JSON.stringify(provider.getCustomParameters());
    }
    for (const [key2, value] of Object.entries(additionalParams || {})) {
      params[key2] = value;
    }
  }
  if (provider instanceof BaseOAuthProvider) {
    const scopes = provider.getScopes().filter((scope) => scope !== "");
    if (scopes.length > 0) {
      params.scopes = scopes.join(",");
    }
  }
  if (auth.tenantId) {
    params.tid = auth.tenantId;
  }
  const paramsDict = params;
  for (const key2 of Object.keys(paramsDict)) {
    if (paramsDict[key2] === void 0) {
      delete paramsDict[key2];
    }
  }
  return `${getHandlerBase(auth)}?${querystring(paramsDict).slice(1)}`;
}
function getHandlerBase({ config }) {
  if (!config.emulator) {
    return `https://${config.authDomain}/${WIDGET_PATH}`;
  }
  return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
function getVersionForPlatform(clientPlatform) {
  switch (clientPlatform) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return void 0;
  }
}
function registerAuth(clientPlatform) {
  _registerComponent(new Component("auth", (container, { options: deps }) => {
    const app2 = container.getProvider("app").getImmediate();
    const heartbeatServiceProvider = container.getProvider("heartbeat");
    const { apiKey, authDomain } = app2.options;
    return ((app3, heartbeatServiceProvider2) => {
      _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", { appName: app3.name });
      _assert(!(authDomain === null || authDomain === void 0 ? void 0 : authDomain.includes(":")), "argument-error", {
        appName: app3.name
      });
      const config = {
        apiKey,
        authDomain,
        clientPlatform,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: _getClientVersion(clientPlatform)
      };
      const authInstance = new AuthImpl(app3, heartbeatServiceProvider2, config);
      _initializeAuthInstance(authInstance, deps);
      return authInstance;
    })(app2, heartbeatServiceProvider);
  }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
    const authInternalProvider = container.getProvider("auth-internal");
    authInternalProvider.initialize();
  }));
  _registerComponent(new Component("auth-internal", (container) => {
    const auth = _castAuth(container.getProvider("auth").getImmediate());
    return ((auth2) => new AuthInterop(auth2))(auth);
  }, "PRIVATE").setInstantiationMode("EXPLICIT"));
  registerVersion(name3, version3, getVersionForPlatform(clientPlatform));
  registerVersion(name3, version3, "esm2017");
}
function getAuth(app2 = getApp()) {
  const provider = _getProvider(app2, "auth");
  if (provider.isInitialized()) {
    return provider.getImmediate();
  }
  return initializeAuth(app2, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: [
      indexedDBLocalPersistence,
      browserLocalPersistence,
      browserSessionPersistence
    ]
  });
}
var prodErrorMap, _DEFAULT_AUTH_ERROR_FACTORY, logClient, instanceCache, Delay, FetchProvider, SERVER_ERROR_MAP, DEFAULT_API_TIMEOUT_MS, NetworkTimeout, ProactiveRefresh, UserMetadata, StsTokenManager, UserImpl, InMemoryPersistence, inMemoryPersistence, PersistenceUserManager, AuthMiddlewareQueue, AuthImpl, Subscription, AuthCredential, EmailAuthCredential, IDP_REQUEST_URI$1, OAuthCredential, VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_, PhoneAuthCredential, ActionCodeURL, EmailAuthProvider, FederatedAuthProvider, BaseOAuthProvider, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider, UserCredentialImpl, MultiFactorError, STORAGE_AVAILABLE_KEY, BrowserPersistenceClass, _POLLING_INTERVAL_MS$1, IE10_LOCAL_STORAGE_SYNC_DELAY, BrowserLocalPersistence, browserLocalPersistence, BrowserSessionPersistence, browserSessionPersistence, Receiver, Sender, DB_NAME2, DB_VERSION2, DB_OBJECTSTORE_NAME, DB_DATA_KEYPATH, DBPromise, _POLLING_INTERVAL_MS, _TRANSACTION_RETRY_COUNT, IndexedDBLocalPersistence, indexedDBLocalPersistence, _JSLOAD_CALLBACK, NETWORK_TIMEOUT_DELAY, RECAPTCHA_VERIFIER_TYPE, PhoneAuthProvider, IdpCredential, AbstractPopupRedirectOperation, _POLL_WINDOW_CLOSE_TIMEOUT, PopupOperation, PENDING_REDIRECT_KEY, redirectOutcomeMap, RedirectAction, EVENT_DUPLICATION_CACHE_DURATION_MS, AuthEventManager, IP_ADDRESS_REGEX, HTTP_REGEX, NETWORK_TIMEOUT, cachedGApiLoader, PING_TIMEOUT, IFRAME_PATH, EMULATED_IFRAME_PATH, IFRAME_ATTRIBUTES, EID_FROM_APIHOST, BASE_POPUP_OPTIONS, DEFAULT_WIDTH, DEFAULT_HEIGHT, TARGET_BLANK, FIREFOX_EMPTY_URL, AuthPopup, WIDGET_PATH, EMULATOR_WIDGET_PATH, WEB_STORAGE_SUPPORT_KEY, BrowserPopupRedirectResolver, browserPopupRedirectResolver, MultiFactorAssertionImpl, PhoneMultiFactorAssertionImpl, PhoneMultiFactorGenerator, name3, version3, AuthInterop;
var init_index_90ebcfae = __esm({
  "node_modules/@firebase/auth/dist/esm2017/index-90ebcfae.js"() {
    init_index_esm2017();
    init_index_esm20174();
    init_modules();
    init_index_esm20173();
    init_index_esm20172();
    prodErrorMap = _prodErrorMap;
    _DEFAULT_AUTH_ERROR_FACTORY = new ErrorFactory("auth", "Firebase", _prodErrorMap());
    logClient = new Logger("@firebase/auth");
    instanceCache = /* @__PURE__ */ new Map();
    Delay = class {
      constructor(shortDelay, longDelay) {
        this.shortDelay = shortDelay;
        this.longDelay = longDelay;
        debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
        this.isMobile = isMobileCordova() || isReactNative();
      }
      get() {
        if (!_isOnline()) {
          return Math.min(5e3, this.shortDelay);
        }
        return this.isMobile ? this.longDelay : this.shortDelay;
      }
    };
    FetchProvider = class {
      static initialize(fetchImpl, headersImpl, responseImpl) {
        this.fetchImpl = fetchImpl;
        if (headersImpl) {
          this.headersImpl = headersImpl;
        }
        if (responseImpl) {
          this.responseImpl = responseImpl;
        }
      }
      static fetch() {
        if (this.fetchImpl) {
          return this.fetchImpl;
        }
        if (typeof self !== "undefined" && "fetch" in self) {
          return self.fetch;
        }
        debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
      static headers() {
        if (this.headersImpl) {
          return this.headersImpl;
        }
        if (typeof self !== "undefined" && "Headers" in self) {
          return self.Headers;
        }
        debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
      static response() {
        if (this.responseImpl) {
          return this.responseImpl;
        }
        if (typeof self !== "undefined" && "Response" in self) {
          return self.Response;
        }
        debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
    };
    SERVER_ERROR_MAP = {
      ["CREDENTIAL_MISMATCH"]: "custom-token-mismatch",
      ["MISSING_CUSTOM_TOKEN"]: "internal-error",
      ["INVALID_IDENTIFIER"]: "invalid-email",
      ["MISSING_CONTINUE_URI"]: "internal-error",
      ["INVALID_PASSWORD"]: "wrong-password",
      ["MISSING_PASSWORD"]: "internal-error",
      ["EMAIL_EXISTS"]: "email-already-in-use",
      ["PASSWORD_LOGIN_DISABLED"]: "operation-not-allowed",
      ["INVALID_IDP_RESPONSE"]: "invalid-credential",
      ["INVALID_PENDING_TOKEN"]: "invalid-credential",
      ["FEDERATED_USER_ID_ALREADY_LINKED"]: "credential-already-in-use",
      ["MISSING_REQ_TYPE"]: "internal-error",
      ["EMAIL_NOT_FOUND"]: "user-not-found",
      ["RESET_PASSWORD_EXCEED_LIMIT"]: "too-many-requests",
      ["EXPIRED_OOB_CODE"]: "expired-action-code",
      ["INVALID_OOB_CODE"]: "invalid-action-code",
      ["MISSING_OOB_CODE"]: "internal-error",
      ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]: "requires-recent-login",
      ["INVALID_ID_TOKEN"]: "invalid-user-token",
      ["TOKEN_EXPIRED"]: "user-token-expired",
      ["USER_NOT_FOUND"]: "user-token-expired",
      ["TOO_MANY_ATTEMPTS_TRY_LATER"]: "too-many-requests",
      ["INVALID_CODE"]: "invalid-verification-code",
      ["INVALID_SESSION_INFO"]: "invalid-verification-id",
      ["INVALID_TEMPORARY_PROOF"]: "invalid-credential",
      ["MISSING_SESSION_INFO"]: "missing-verification-id",
      ["SESSION_EXPIRED"]: "code-expired",
      ["MISSING_ANDROID_PACKAGE_NAME"]: "missing-android-pkg-name",
      ["UNAUTHORIZED_DOMAIN"]: "unauthorized-continue-uri",
      ["INVALID_OAUTH_CLIENT_ID"]: "invalid-oauth-client-id",
      ["ADMIN_ONLY_OPERATION"]: "admin-restricted-operation",
      ["INVALID_MFA_PENDING_CREDENTIAL"]: "invalid-multi-factor-session",
      ["MFA_ENROLLMENT_NOT_FOUND"]: "multi-factor-info-not-found",
      ["MISSING_MFA_ENROLLMENT_ID"]: "missing-multi-factor-info",
      ["MISSING_MFA_PENDING_CREDENTIAL"]: "missing-multi-factor-session",
      ["SECOND_FACTOR_EXISTS"]: "second-factor-already-in-use",
      ["SECOND_FACTOR_LIMIT_EXCEEDED"]: "maximum-second-factor-count-exceeded",
      ["BLOCKING_FUNCTION_ERROR_RESPONSE"]: "internal-error"
    };
    DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
    NetworkTimeout = class {
      constructor(auth) {
        this.auth = auth;
        this.timer = null;
        this.promise = new Promise((_2, reject) => {
          this.timer = setTimeout(() => {
            return reject(_createError(this.auth, "network-request-failed"));
          }, DEFAULT_API_TIMEOUT_MS.get());
        });
      }
      clearNetworkTimeout() {
        clearTimeout(this.timer);
      }
    };
    ProactiveRefresh = class {
      constructor(user) {
        this.user = user;
        this.isRunning = false;
        this.timerId = null;
        this.errorBackoff = 3e4;
      }
      _start() {
        if (this.isRunning) {
          return;
        }
        this.isRunning = true;
        this.schedule();
      }
      _stop() {
        if (!this.isRunning) {
          return;
        }
        this.isRunning = false;
        if (this.timerId !== null) {
          clearTimeout(this.timerId);
        }
      }
      getInterval(wasError) {
        var _a;
        if (wasError) {
          const interval = this.errorBackoff;
          this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4);
          return interval;
        } else {
          this.errorBackoff = 3e4;
          const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
          const interval = expTime - Date.now() - 3e5;
          return Math.max(0, interval);
        }
      }
      schedule(wasError = false) {
        if (!this.isRunning) {
          return;
        }
        const interval = this.getInterval(wasError);
        this.timerId = setTimeout(async () => {
          await this.iteration();
        }, interval);
      }
      async iteration() {
        var _a;
        try {
          await this.user.getIdToken(true);
        } catch (e3) {
          if (((_a = e3) === null || _a === void 0 ? void 0 : _a.code) === `auth/${"network-request-failed"}`) {
            this.schedule(true);
          }
          return;
        }
        this.schedule();
      }
    };
    UserMetadata = class {
      constructor(createdAt, lastLoginAt) {
        this.createdAt = createdAt;
        this.lastLoginAt = lastLoginAt;
        this._initializeTime();
      }
      _initializeTime() {
        this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
        this.creationTime = utcTimestampToDateString(this.createdAt);
      }
      _copy(metadata) {
        this.createdAt = metadata.createdAt;
        this.lastLoginAt = metadata.lastLoginAt;
        this._initializeTime();
      }
      toJSON() {
        return {
          createdAt: this.createdAt,
          lastLoginAt: this.lastLoginAt
        };
      }
    };
    StsTokenManager = class {
      constructor() {
        this.refreshToken = null;
        this.accessToken = null;
        this.expirationTime = null;
      }
      get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
      }
      updateFromServerResponse(response) {
        _assert(response.idToken, "internal-error");
        _assert(typeof response.idToken !== "undefined", "internal-error");
        _assert(typeof response.refreshToken !== "undefined", "internal-error");
        const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
        this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
      }
      async getToken(auth, forceRefresh = false) {
        _assert(!this.accessToken || this.refreshToken, auth, "user-token-expired");
        if (!forceRefresh && this.accessToken && !this.isExpired) {
          return this.accessToken;
        }
        if (this.refreshToken) {
          await this.refresh(auth, this.refreshToken);
          return this.accessToken;
        }
        return null;
      }
      clearRefreshToken() {
        this.refreshToken = null;
      }
      async refresh(auth, oldToken) {
        const { accessToken, refreshToken, expiresIn } = await requestStsToken(auth, oldToken);
        this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
      }
      updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
        this.refreshToken = refreshToken || null;
        this.accessToken = accessToken || null;
        this.expirationTime = Date.now() + expiresInSec * 1e3;
      }
      static fromJSON(appName, object) {
        const { refreshToken, accessToken, expirationTime } = object;
        const manager = new StsTokenManager();
        if (refreshToken) {
          _assert(typeof refreshToken === "string", "internal-error", {
            appName
          });
          manager.refreshToken = refreshToken;
        }
        if (accessToken) {
          _assert(typeof accessToken === "string", "internal-error", {
            appName
          });
          manager.accessToken = accessToken;
        }
        if (expirationTime) {
          _assert(typeof expirationTime === "number", "internal-error", {
            appName
          });
          manager.expirationTime = expirationTime;
        }
        return manager;
      }
      toJSON() {
        return {
          refreshToken: this.refreshToken,
          accessToken: this.accessToken,
          expirationTime: this.expirationTime
        };
      }
      _assign(stsTokenManager) {
        this.accessToken = stsTokenManager.accessToken;
        this.refreshToken = stsTokenManager.refreshToken;
        this.expirationTime = stsTokenManager.expirationTime;
      }
      _clone() {
        return Object.assign(new StsTokenManager(), this.toJSON());
      }
      _performRefresh() {
        return debugFail("not implemented");
      }
    };
    UserImpl = class {
      constructor(_a) {
        var { uid, auth, stsTokenManager } = _a, opt = __rest(_a, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase";
        this.proactiveRefresh = new ProactiveRefresh(this);
        this.reloadUserInfo = null;
        this.reloadListener = null;
        this.uid = uid;
        this.auth = auth;
        this.stsTokenManager = stsTokenManager;
        this.accessToken = stsTokenManager.accessToken;
        this.displayName = opt.displayName || null;
        this.email = opt.email || null;
        this.emailVerified = opt.emailVerified || false;
        this.phoneNumber = opt.phoneNumber || null;
        this.photoURL = opt.photoURL || null;
        this.isAnonymous = opt.isAnonymous || false;
        this.tenantId = opt.tenantId || null;
        this.providerData = opt.providerData ? [...opt.providerData] : [];
        this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
      }
      async getIdToken(forceRefresh) {
        const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
        _assert(accessToken, this.auth, "internal-error");
        if (this.accessToken !== accessToken) {
          this.accessToken = accessToken;
          await this.auth._persistUserIfCurrent(this);
          this.auth._notifyListenersIfCurrent(this);
        }
        return accessToken;
      }
      getIdTokenResult(forceRefresh) {
        return getIdTokenResult(this, forceRefresh);
      }
      reload() {
        return reload(this);
      }
      _assign(user) {
        if (this === user) {
          return;
        }
        _assert(this.uid === user.uid, this.auth, "internal-error");
        this.displayName = user.displayName;
        this.photoURL = user.photoURL;
        this.email = user.email;
        this.emailVerified = user.emailVerified;
        this.phoneNumber = user.phoneNumber;
        this.isAnonymous = user.isAnonymous;
        this.tenantId = user.tenantId;
        this.providerData = user.providerData.map((userInfo) => Object.assign({}, userInfo));
        this.metadata._copy(user.metadata);
        this.stsTokenManager._assign(user.stsTokenManager);
      }
      _clone(auth) {
        return new UserImpl(Object.assign(Object.assign({}, this), { auth, stsTokenManager: this.stsTokenManager._clone() }));
      }
      _onReload(callback) {
        _assert(!this.reloadListener, this.auth, "internal-error");
        this.reloadListener = callback;
        if (this.reloadUserInfo) {
          this._notifyReloadListener(this.reloadUserInfo);
          this.reloadUserInfo = null;
        }
      }
      _notifyReloadListener(userInfo) {
        if (this.reloadListener) {
          this.reloadListener(userInfo);
        } else {
          this.reloadUserInfo = userInfo;
        }
      }
      _startProactiveRefresh() {
        this.proactiveRefresh._start();
      }
      _stopProactiveRefresh() {
        this.proactiveRefresh._stop();
      }
      async _updateTokensIfNecessary(response, reload2 = false) {
        let tokensRefreshed = false;
        if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
          this.stsTokenManager.updateFromServerResponse(response);
          tokensRefreshed = true;
        }
        if (reload2) {
          await _reloadWithoutSaving(this);
        }
        await this.auth._persistUserIfCurrent(this);
        if (tokensRefreshed) {
          this.auth._notifyListenersIfCurrent(this);
        }
      }
      async delete() {
        const idToken = await this.getIdToken();
        await _logoutIfInvalidated(this, deleteAccount(this.auth, { idToken }));
        this.stsTokenManager.clearRefreshToken();
        return this.auth.signOut();
      }
      toJSON() {
        return Object.assign(Object.assign({
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((userInfo) => Object.assign({}, userInfo)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
          apiKey: this.auth.config.apiKey,
          appName: this.auth.name
        });
      }
      get refreshToken() {
        return this.stsTokenManager.refreshToken || "";
      }
      static _fromJSON(auth, object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
        const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
        const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
        const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
        const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : void 0;
        const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
        const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
        const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
        const { uid, emailVerified, isAnonymous, providerData, stsTokenManager: plainObjectTokenManager } = object;
        _assert(uid && plainObjectTokenManager, auth, "internal-error");
        const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
        _assert(typeof uid === "string", auth, "internal-error");
        assertStringOrUndefined(displayName, auth.name);
        assertStringOrUndefined(email, auth.name);
        _assert(typeof emailVerified === "boolean", auth, "internal-error");
        _assert(typeof isAnonymous === "boolean", auth, "internal-error");
        assertStringOrUndefined(phoneNumber, auth.name);
        assertStringOrUndefined(photoURL, auth.name);
        assertStringOrUndefined(tenantId, auth.name);
        assertStringOrUndefined(_redirectEventId, auth.name);
        assertStringOrUndefined(createdAt, auth.name);
        assertStringOrUndefined(lastLoginAt, auth.name);
        const user = new UserImpl({
          uid,
          auth,
          email,
          emailVerified,
          displayName,
          isAnonymous,
          photoURL,
          phoneNumber,
          tenantId,
          stsTokenManager,
          createdAt,
          lastLoginAt
        });
        if (providerData && Array.isArray(providerData)) {
          user.providerData = providerData.map((userInfo) => Object.assign({}, userInfo));
        }
        if (_redirectEventId) {
          user._redirectEventId = _redirectEventId;
        }
        return user;
      }
      static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
        const stsTokenManager = new StsTokenManager();
        stsTokenManager.updateFromServerResponse(idTokenResponse);
        const user = new UserImpl({
          uid: idTokenResponse.localId,
          auth,
          stsTokenManager,
          isAnonymous
        });
        await _reloadWithoutSaving(user);
        return user;
      }
    };
    InMemoryPersistence = class {
      constructor() {
        this.type = "NONE";
        this.storage = {};
      }
      async _isAvailable() {
        return true;
      }
      async _set(key2, value) {
        this.storage[key2] = value;
      }
      async _get(key2) {
        const value = this.storage[key2];
        return value === void 0 ? null : value;
      }
      async _remove(key2) {
        delete this.storage[key2];
      }
      _addListener(_key, _listener) {
        return;
      }
      _removeListener(_key, _listener) {
        return;
      }
    };
    InMemoryPersistence.type = "NONE";
    inMemoryPersistence = InMemoryPersistence;
    PersistenceUserManager = class {
      constructor(persistence, auth, userKey) {
        this.persistence = persistence;
        this.auth = auth;
        this.userKey = userKey;
        const { config, name: name4 } = this.auth;
        this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name4);
        this.fullPersistenceKey = _persistenceKeyName("persistence", config.apiKey, name4);
        this.boundEventHandler = auth._onStorageEvent.bind(auth);
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
      }
      setCurrentUser(user) {
        return this.persistence._set(this.fullUserKey, user.toJSON());
      }
      async getCurrentUser() {
        const blob = await this.persistence._get(this.fullUserKey);
        return blob ? UserImpl._fromJSON(this.auth, blob) : null;
      }
      removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey);
      }
      savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
      }
      async setPersistence(newPersistence) {
        if (this.persistence === newPersistence) {
          return;
        }
        const currentUser = await this.getCurrentUser();
        await this.removeCurrentUser();
        this.persistence = newPersistence;
        if (currentUser) {
          return this.setCurrentUser(currentUser);
        }
      }
      delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
      }
      static async create(auth, persistenceHierarchy, userKey = "authUser") {
        if (!persistenceHierarchy.length) {
          return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
        }
        const availablePersistences = (await Promise.all(persistenceHierarchy.map(async (persistence) => {
          if (await persistence._isAvailable()) {
            return persistence;
          }
          return void 0;
        }))).filter((persistence) => persistence);
        let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
        const key2 = _persistenceKeyName(userKey, auth.config.apiKey, auth.name);
        let userToMigrate = null;
        for (const persistence of persistenceHierarchy) {
          try {
            const blob = await persistence._get(key2);
            if (blob) {
              const user = UserImpl._fromJSON(auth, blob);
              if (persistence !== selectedPersistence) {
                userToMigrate = user;
              }
              selectedPersistence = persistence;
              break;
            }
          } catch (_a) {
          }
        }
        const migrationHierarchy = availablePersistences.filter((p2) => p2._shouldAllowMigration);
        if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
          return new PersistenceUserManager(selectedPersistence, auth, userKey);
        }
        selectedPersistence = migrationHierarchy[0];
        if (userToMigrate) {
          await selectedPersistence._set(key2, userToMigrate.toJSON());
        }
        await Promise.all(persistenceHierarchy.map(async (persistence) => {
          if (persistence !== selectedPersistence) {
            try {
              await persistence._remove(key2);
            } catch (_a) {
            }
          }
        }));
        return new PersistenceUserManager(selectedPersistence, auth, userKey);
      }
    };
    AuthMiddlewareQueue = class {
      constructor(auth) {
        this.auth = auth;
        this.queue = [];
      }
      pushCallback(callback, onAbort) {
        const wrappedCallback = (user) => new Promise((resolve2, reject) => {
          try {
            const result = callback(user);
            resolve2(result);
          } catch (e3) {
            reject(e3);
          }
        });
        wrappedCallback.onAbort = onAbort;
        this.queue.push(wrappedCallback);
        const index8 = this.queue.length - 1;
        return () => {
          this.queue[index8] = () => Promise.resolve();
        };
      }
      async runMiddleware(nextUser) {
        var _a;
        if (this.auth.currentUser === nextUser) {
          return;
        }
        const onAbortStack = [];
        try {
          for (const beforeStateCallback of this.queue) {
            await beforeStateCallback(nextUser);
            if (beforeStateCallback.onAbort) {
              onAbortStack.push(beforeStateCallback.onAbort);
            }
          }
        } catch (e3) {
          onAbortStack.reverse();
          for (const onAbort of onAbortStack) {
            try {
              onAbort();
            } catch (_2) {
            }
          }
          throw this.auth._errorFactory.create("login-blocked", { originalMessage: (_a = e3) === null || _a === void 0 ? void 0 : _a.message });
        }
      }
    };
    AuthImpl = class {
      constructor(app2, heartbeatServiceProvider, config) {
        this.app = app2;
        this.heartbeatServiceProvider = heartbeatServiceProvider;
        this.config = config;
        this.currentUser = null;
        this.emulatorConfig = null;
        this.operations = Promise.resolve();
        this.authStateSubscription = new Subscription(this);
        this.idTokenSubscription = new Subscription(this);
        this.beforeStateQueue = new AuthMiddlewareQueue(this);
        this.redirectUser = null;
        this.isProactiveRefreshEnabled = false;
        this._canInitEmulator = true;
        this._isInitialized = false;
        this._deleted = false;
        this._initializationPromise = null;
        this._popupRedirectResolver = null;
        this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
        this.lastNotifiedUid = void 0;
        this.languageCode = null;
        this.tenantId = null;
        this.settings = { appVerificationDisabledForTesting: false };
        this.frameworks = [];
        this.name = app2.name;
        this.clientVersion = config.sdkClientVersion;
      }
      _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
        if (popupRedirectResolver) {
          this._popupRedirectResolver = _getInstance(popupRedirectResolver);
        }
        this._initializationPromise = this.queue(async () => {
          var _a, _b;
          if (this._deleted) {
            return;
          }
          this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
          if (this._deleted) {
            return;
          }
          if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch (e3) {
            }
          }
          await this.initializeCurrentUser(popupRedirectResolver);
          this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
          if (this._deleted) {
            return;
          }
          this._isInitialized = true;
        });
        return this._initializationPromise;
      }
      async _onStorageEvent() {
        if (this._deleted) {
          return;
        }
        const user = await this.assertedPersistence.getCurrentUser();
        if (!this.currentUser && !user) {
          return;
        }
        if (this.currentUser && user && this.currentUser.uid === user.uid) {
          this._currentUser._assign(user);
          await this.currentUser.getIdToken();
          return;
        }
        await this._updateCurrentUser(user, true);
      }
      async initializeCurrentUser(popupRedirectResolver) {
        var _a;
        const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
        let futureCurrentUser = previouslyStoredUser;
        let needsTocheckMiddleware = false;
        if (popupRedirectResolver && this.config.authDomain) {
          await this.getOrInitRedirectPersistenceManager();
          const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
          const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
          const result = await this.tryRedirectSignIn(popupRedirectResolver);
          if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
            futureCurrentUser = result.user;
            needsTocheckMiddleware = true;
          }
        }
        if (!futureCurrentUser) {
          return this.directlySetCurrentUser(null);
        }
        if (!futureCurrentUser._redirectEventId) {
          if (needsTocheckMiddleware) {
            try {
              await this.beforeStateQueue.runMiddleware(futureCurrentUser);
            } catch (e3) {
              futureCurrentUser = previouslyStoredUser;
              this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e3));
            }
          }
          if (futureCurrentUser) {
            return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
          } else {
            return this.directlySetCurrentUser(null);
          }
        }
        _assert(this._popupRedirectResolver, this, "argument-error");
        await this.getOrInitRedirectPersistenceManager();
        if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
          return this.directlySetCurrentUser(futureCurrentUser);
        }
        return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
      }
      async tryRedirectSignIn(redirectResolver) {
        let result = null;
        try {
          result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
        } catch (e3) {
          await this._setRedirectUser(null);
        }
        return result;
      }
      async reloadAndSetCurrentUserOrClear(user) {
        var _a;
        try {
          await _reloadWithoutSaving(user);
        } catch (e3) {
          if (((_a = e3) === null || _a === void 0 ? void 0 : _a.code) !== `auth/${"network-request-failed"}`) {
            return this.directlySetCurrentUser(null);
          }
        }
        return this.directlySetCurrentUser(user);
      }
      useDeviceLanguage() {
        this.languageCode = _getUserLanguage();
      }
      async _delete() {
        this._deleted = true;
      }
      async updateCurrentUser(userExtern) {
        const user = userExtern ? getModularInstance(userExtern) : null;
        if (user) {
          _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token");
        }
        return this._updateCurrentUser(user && user._clone(this));
      }
      async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
        if (this._deleted) {
          return;
        }
        if (user) {
          _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch");
        }
        if (!skipBeforeStateCallbacks) {
          await this.beforeStateQueue.runMiddleware(user);
        }
        return this.queue(async () => {
          await this.directlySetCurrentUser(user);
          this.notifyAuthListeners();
        });
      }
      async signOut() {
        await this.beforeStateQueue.runMiddleware(null);
        if (this.redirectPersistenceManager || this._popupRedirectResolver) {
          await this._setRedirectUser(null);
        }
        return this._updateCurrentUser(null, true);
      }
      setPersistence(persistence) {
        return this.queue(async () => {
          await this.assertedPersistence.setPersistence(_getInstance(persistence));
        });
      }
      _getPersistence() {
        return this.assertedPersistence.persistence.type;
      }
      _updateErrorMap(errorMap) {
        this._errorFactory = new ErrorFactory("auth", "Firebase", errorMap());
      }
      onAuthStateChanged(nextOrObserver, error2, completed) {
        return this.registerStateListener(this.authStateSubscription, nextOrObserver, error2, completed);
      }
      beforeAuthStateChanged(callback, onAbort) {
        return this.beforeStateQueue.pushCallback(callback, onAbort);
      }
      onIdTokenChanged(nextOrObserver, error2, completed) {
        return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error2, completed);
      }
      toJSON() {
        var _a;
        return {
          apiKey: this.config.apiKey,
          authDomain: this.config.authDomain,
          appName: this.name,
          currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
        };
      }
      async _setRedirectUser(user, popupRedirectResolver) {
        const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
        return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
      }
      async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
        if (!this.redirectPersistenceManager) {
          const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
          _assert(resolver, this, "argument-error");
          this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser");
          this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
        }
        return this.redirectPersistenceManager;
      }
      async _redirectUserForId(id) {
        var _a, _b;
        if (this._isInitialized) {
          await this.queue(async () => {
          });
        }
        if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
          return this._currentUser;
        }
        if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
          return this.redirectUser;
        }
        return null;
      }
      async _persistUserIfCurrent(user) {
        if (user === this.currentUser) {
          return this.queue(async () => this.directlySetCurrentUser(user));
        }
      }
      _notifyListenersIfCurrent(user) {
        if (user === this.currentUser) {
          this.notifyAuthListeners();
        }
      }
      _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
      }
      _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = true;
        if (this.currentUser) {
          this._currentUser._startProactiveRefresh();
        }
      }
      _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = false;
        if (this.currentUser) {
          this._currentUser._stopProactiveRefresh();
        }
      }
      get _currentUser() {
        return this.currentUser;
      }
      notifyAuthListeners() {
        var _a, _b;
        if (!this._isInitialized) {
          return;
        }
        this.idTokenSubscription.next(this.currentUser);
        const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
        if (this.lastNotifiedUid !== currentUid) {
          this.lastNotifiedUid = currentUid;
          this.authStateSubscription.next(this.currentUser);
        }
      }
      registerStateListener(subscription, nextOrObserver, error2, completed) {
        if (this._deleted) {
          return () => {
          };
        }
        const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
        const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        _assert(promise, this, "internal-error");
        promise.then(() => cb(this.currentUser));
        if (typeof nextOrObserver === "function") {
          return subscription.addObserver(nextOrObserver, error2, completed);
        } else {
          return subscription.addObserver(nextOrObserver);
        }
      }
      async directlySetCurrentUser(user) {
        if (this.currentUser && this.currentUser !== user) {
          this._currentUser._stopProactiveRefresh();
          if (user && this.isProactiveRefreshEnabled) {
            user._startProactiveRefresh();
          }
        }
        this.currentUser = user;
        if (user) {
          await this.assertedPersistence.setCurrentUser(user);
        } else {
          await this.assertedPersistence.removeCurrentUser();
        }
      }
      queue(action) {
        this.operations = this.operations.then(action, action);
        return this.operations;
      }
      get assertedPersistence() {
        _assert(this.persistenceManager, this, "internal-error");
        return this.persistenceManager;
      }
      _logFramework(framework) {
        if (!framework || this.frameworks.includes(framework)) {
          return;
        }
        this.frameworks.push(framework);
        this.frameworks.sort();
        this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
      }
      _getFrameworks() {
        return this.frameworks;
      }
      async _getAdditionalHeaders() {
        var _a;
        const headers = {
          ["X-Client-Version"]: this.clientVersion
        };
        if (this.app.options.appId) {
          headers["X-Firebase-gmpid"] = this.app.options.appId;
        }
        const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
          optional: true
        })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
        if (heartbeatsHeader) {
          headers["X-Firebase-Client"] = heartbeatsHeader;
        }
        return headers;
      }
    };
    Subscription = class {
      constructor(auth) {
        this.auth = auth;
        this.observer = null;
        this.addObserver = createSubscribe((observer) => this.observer = observer);
      }
      get next() {
        _assert(this.observer, this.auth, "internal-error");
        return this.observer.next.bind(this.observer);
      }
    };
    AuthCredential = class {
      constructor(providerId, signInMethod) {
        this.providerId = providerId;
        this.signInMethod = signInMethod;
      }
      toJSON() {
        return debugFail("not implemented");
      }
      _getIdTokenResponse(_auth) {
        return debugFail("not implemented");
      }
      _linkToIdToken(_auth, _idToken) {
        return debugFail("not implemented");
      }
      _getReauthenticationResolver(_auth) {
        return debugFail("not implemented");
      }
    };
    EmailAuthCredential = class extends AuthCredential {
      constructor(_email, _password, signInMethod, _tenantId = null) {
        super("password", signInMethod);
        this._email = _email;
        this._password = _password;
        this._tenantId = _tenantId;
      }
      static _fromEmailAndPassword(email, password) {
        return new EmailAuthCredential(email, password, "password");
      }
      static _fromEmailAndCode(email, oobCode, tenantId = null) {
        return new EmailAuthCredential(email, oobCode, "emailLink", tenantId);
      }
      toJSON() {
        return {
          email: this._email,
          password: this._password,
          signInMethod: this.signInMethod,
          tenantId: this._tenantId
        };
      }
      static fromJSON(json2) {
        const obj = typeof json2 === "string" ? JSON.parse(json2) : json2;
        if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
          if (obj.signInMethod === "password") {
            return this._fromEmailAndPassword(obj.email, obj.password);
          } else if (obj.signInMethod === "emailLink") {
            return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
          }
        }
        return null;
      }
      async _getIdTokenResponse(auth) {
        switch (this.signInMethod) {
          case "password":
            return signInWithPassword(auth, {
              returnSecureToken: true,
              email: this._email,
              password: this._password
            });
          case "emailLink":
            return signInWithEmailLink$1(auth, {
              email: this._email,
              oobCode: this._password
            });
          default:
            _fail(auth, "internal-error");
        }
      }
      async _linkToIdToken(auth, idToken) {
        switch (this.signInMethod) {
          case "password":
            return updateEmailPassword(auth, {
              idToken,
              returnSecureToken: true,
              email: this._email,
              password: this._password
            });
          case "emailLink":
            return signInWithEmailLinkForLinking(auth, {
              idToken,
              email: this._email,
              oobCode: this._password
            });
          default:
            _fail(auth, "internal-error");
        }
      }
      _getReauthenticationResolver(auth) {
        return this._getIdTokenResponse(auth);
      }
    };
    IDP_REQUEST_URI$1 = "http://localhost";
    OAuthCredential = class extends AuthCredential {
      constructor() {
        super(...arguments);
        this.pendingToken = null;
      }
      static _fromParams(params) {
        const cred = new OAuthCredential(params.providerId, params.signInMethod);
        if (params.idToken || params.accessToken) {
          if (params.idToken) {
            cred.idToken = params.idToken;
          }
          if (params.accessToken) {
            cred.accessToken = params.accessToken;
          }
          if (params.nonce && !params.pendingToken) {
            cred.nonce = params.nonce;
          }
          if (params.pendingToken) {
            cred.pendingToken = params.pendingToken;
          }
        } else if (params.oauthToken && params.oauthTokenSecret) {
          cred.accessToken = params.oauthToken;
          cred.secret = params.oauthTokenSecret;
        } else {
          _fail("argument-error");
        }
        return cred;
      }
      toJSON() {
        return {
          idToken: this.idToken,
          accessToken: this.accessToken,
          secret: this.secret,
          nonce: this.nonce,
          pendingToken: this.pendingToken,
          providerId: this.providerId,
          signInMethod: this.signInMethod
        };
      }
      static fromJSON(json2) {
        const obj = typeof json2 === "string" ? JSON.parse(json2) : json2;
        const { providerId, signInMethod } = obj, rest = __rest(obj, ["providerId", "signInMethod"]);
        if (!providerId || !signInMethod) {
          return null;
        }
        const cred = new OAuthCredential(providerId, signInMethod);
        cred.idToken = rest.idToken || void 0;
        cred.accessToken = rest.accessToken || void 0;
        cred.secret = rest.secret;
        cred.nonce = rest.nonce;
        cred.pendingToken = rest.pendingToken || null;
        return cred;
      }
      _getIdTokenResponse(auth) {
        const request = this.buildRequest();
        return signInWithIdp(auth, request);
      }
      _linkToIdToken(auth, idToken) {
        const request = this.buildRequest();
        request.idToken = idToken;
        return signInWithIdp(auth, request);
      }
      _getReauthenticationResolver(auth) {
        const request = this.buildRequest();
        request.autoCreate = false;
        return signInWithIdp(auth, request);
      }
      buildRequest() {
        const request = {
          requestUri: IDP_REQUEST_URI$1,
          returnSecureToken: true
        };
        if (this.pendingToken) {
          request.pendingToken = this.pendingToken;
        } else {
          const postBody = {};
          if (this.idToken) {
            postBody["id_token"] = this.idToken;
          }
          if (this.accessToken) {
            postBody["access_token"] = this.accessToken;
          }
          if (this.secret) {
            postBody["oauth_token_secret"] = this.secret;
          }
          postBody["providerId"] = this.providerId;
          if (this.nonce && !this.pendingToken) {
            postBody["nonce"] = this.nonce;
          }
          request.postBody = querystring(postBody);
        }
        return request;
      }
    };
    VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
      ["USER_NOT_FOUND"]: "user-not-found"
    };
    PhoneAuthCredential = class extends AuthCredential {
      constructor(params) {
        super("phone", "phone");
        this.params = params;
      }
      static _fromVerification(verificationId, verificationCode) {
        return new PhoneAuthCredential({ verificationId, verificationCode });
      }
      static _fromTokenResponse(phoneNumber, temporaryProof) {
        return new PhoneAuthCredential({ phoneNumber, temporaryProof });
      }
      _getIdTokenResponse(auth) {
        return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
      }
      _linkToIdToken(auth, idToken) {
        return linkWithPhoneNumber$1(auth, Object.assign({ idToken }, this._makeVerificationRequest()));
      }
      _getReauthenticationResolver(auth) {
        return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
      }
      _makeVerificationRequest() {
        const { temporaryProof, phoneNumber, verificationId, verificationCode } = this.params;
        if (temporaryProof && phoneNumber) {
          return { temporaryProof, phoneNumber };
        }
        return {
          sessionInfo: verificationId,
          code: verificationCode
        };
      }
      toJSON() {
        const obj = {
          providerId: this.providerId
        };
        if (this.params.phoneNumber) {
          obj.phoneNumber = this.params.phoneNumber;
        }
        if (this.params.temporaryProof) {
          obj.temporaryProof = this.params.temporaryProof;
        }
        if (this.params.verificationCode) {
          obj.verificationCode = this.params.verificationCode;
        }
        if (this.params.verificationId) {
          obj.verificationId = this.params.verificationId;
        }
        return obj;
      }
      static fromJSON(json2) {
        if (typeof json2 === "string") {
          json2 = JSON.parse(json2);
        }
        const { verificationId, verificationCode, phoneNumber, temporaryProof } = json2;
        if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
          return null;
        }
        return new PhoneAuthCredential({
          verificationId,
          verificationCode,
          phoneNumber,
          temporaryProof
        });
      }
    };
    ActionCodeURL = class {
      constructor(actionLink) {
        var _a, _b, _c, _d, _e, _f;
        const searchParams = querystringDecode(extractQuerystring(actionLink));
        const apiKey = (_a = searchParams["apiKey"]) !== null && _a !== void 0 ? _a : null;
        const code = (_b = searchParams["oobCode"]) !== null && _b !== void 0 ? _b : null;
        const operation = parseMode((_c = searchParams["mode"]) !== null && _c !== void 0 ? _c : null);
        _assert(apiKey && code && operation, "argument-error");
        this.apiKey = apiKey;
        this.operation = operation;
        this.code = code;
        this.continueUrl = (_d = searchParams["continueUrl"]) !== null && _d !== void 0 ? _d : null;
        this.languageCode = (_e = searchParams["languageCode"]) !== null && _e !== void 0 ? _e : null;
        this.tenantId = (_f = searchParams["tenantId"]) !== null && _f !== void 0 ? _f : null;
      }
      static parseLink(link) {
        const actionLink = parseDeepLink(link);
        try {
          return new ActionCodeURL(actionLink);
        } catch (_a) {
          return null;
        }
      }
    };
    EmailAuthProvider = class {
      constructor() {
        this.providerId = EmailAuthProvider.PROVIDER_ID;
      }
      static credential(email, password) {
        return EmailAuthCredential._fromEmailAndPassword(email, password);
      }
      static credentialWithLink(email, emailLink) {
        const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
        _assert(actionCodeUrl, "argument-error");
        return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
      }
    };
    EmailAuthProvider.PROVIDER_ID = "password";
    EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
    EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
    FederatedAuthProvider = class {
      constructor(providerId) {
        this.providerId = providerId;
        this.defaultLanguageCode = null;
        this.customParameters = {};
      }
      setDefaultLanguage(languageCode) {
        this.defaultLanguageCode = languageCode;
      }
      setCustomParameters(customOAuthParameters) {
        this.customParameters = customOAuthParameters;
        return this;
      }
      getCustomParameters() {
        return this.customParameters;
      }
    };
    BaseOAuthProvider = class extends FederatedAuthProvider {
      constructor() {
        super(...arguments);
        this.scopes = [];
      }
      addScope(scope) {
        if (!this.scopes.includes(scope)) {
          this.scopes.push(scope);
        }
        return this;
      }
      getScopes() {
        return [...this.scopes];
      }
    };
    FacebookAuthProvider = class extends BaseOAuthProvider {
      constructor() {
        super("facebook.com");
      }
      static credential(accessToken) {
        return OAuthCredential._fromParams({
          providerId: FacebookAuthProvider.PROVIDER_ID,
          signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
          accessToken
        });
      }
      static credentialFromResult(userCredential) {
        return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
      }
      static credentialFromError(error2) {
        return FacebookAuthProvider.credentialFromTaggedObject(error2.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
          return null;
        }
        if (!tokenResponse.oauthAccessToken) {
          return null;
        }
        try {
          return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
        } catch (_a) {
          return null;
        }
      }
    };
    FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
    FacebookAuthProvider.PROVIDER_ID = "facebook.com";
    GoogleAuthProvider = class extends BaseOAuthProvider {
      constructor() {
        super("google.com");
        this.addScope("profile");
      }
      static credential(idToken, accessToken) {
        return OAuthCredential._fromParams({
          providerId: GoogleAuthProvider.PROVIDER_ID,
          signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
          idToken,
          accessToken
        });
      }
      static credentialFromResult(userCredential) {
        return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
      }
      static credentialFromError(error2) {
        return GoogleAuthProvider.credentialFromTaggedObject(error2.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse) {
          return null;
        }
        const { oauthIdToken, oauthAccessToken } = tokenResponse;
        if (!oauthIdToken && !oauthAccessToken) {
          return null;
        }
        try {
          return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
        } catch (_a) {
          return null;
        }
      }
    };
    GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
    GoogleAuthProvider.PROVIDER_ID = "google.com";
    GithubAuthProvider = class extends BaseOAuthProvider {
      constructor() {
        super("github.com");
      }
      static credential(accessToken) {
        return OAuthCredential._fromParams({
          providerId: GithubAuthProvider.PROVIDER_ID,
          signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
          accessToken
        });
      }
      static credentialFromResult(userCredential) {
        return GithubAuthProvider.credentialFromTaggedObject(userCredential);
      }
      static credentialFromError(error2) {
        return GithubAuthProvider.credentialFromTaggedObject(error2.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
          return null;
        }
        if (!tokenResponse.oauthAccessToken) {
          return null;
        }
        try {
          return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
        } catch (_a) {
          return null;
        }
      }
    };
    GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
    GithubAuthProvider.PROVIDER_ID = "github.com";
    TwitterAuthProvider = class extends BaseOAuthProvider {
      constructor() {
        super("twitter.com");
      }
      static credential(token, secret) {
        return OAuthCredential._fromParams({
          providerId: TwitterAuthProvider.PROVIDER_ID,
          signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
          oauthToken: token,
          oauthTokenSecret: secret
        });
      }
      static credentialFromResult(userCredential) {
        return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
      }
      static credentialFromError(error2) {
        return TwitterAuthProvider.credentialFromTaggedObject(error2.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse) {
          return null;
        }
        const { oauthAccessToken, oauthTokenSecret } = tokenResponse;
        if (!oauthAccessToken || !oauthTokenSecret) {
          return null;
        }
        try {
          return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
        } catch (_a) {
          return null;
        }
      }
    };
    TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
    TwitterAuthProvider.PROVIDER_ID = "twitter.com";
    UserCredentialImpl = class {
      constructor(params) {
        this.user = params.user;
        this.providerId = params.providerId;
        this._tokenResponse = params._tokenResponse;
        this.operationType = params.operationType;
      }
      static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
        const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
        const providerId = providerIdForResponse(idTokenResponse);
        const userCred = new UserCredentialImpl({
          user,
          providerId,
          _tokenResponse: idTokenResponse,
          operationType
        });
        return userCred;
      }
      static async _forOperation(user, operationType, response) {
        await user._updateTokensIfNecessary(response, true);
        const providerId = providerIdForResponse(response);
        return new UserCredentialImpl({
          user,
          providerId,
          _tokenResponse: response,
          operationType
        });
      }
    };
    MultiFactorError = class extends FirebaseError {
      constructor(auth, error2, operationType, user) {
        var _a;
        super(error2.code, error2.message);
        this.operationType = operationType;
        this.user = user;
        Object.setPrototypeOf(this, MultiFactorError.prototype);
        this.customData = {
          appName: auth.name,
          tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : void 0,
          _serverResponse: error2.customData._serverResponse,
          operationType
        };
      }
      static _fromErrorAndOperation(auth, error2, operationType, user) {
        return new MultiFactorError(auth, error2, operationType, user);
      }
    };
    STORAGE_AVAILABLE_KEY = "__sak";
    BrowserPersistenceClass = class {
      constructor(storageRetriever, type) {
        this.storageRetriever = storageRetriever;
        this.type = type;
      }
      _isAvailable() {
        try {
          if (!this.storage) {
            return Promise.resolve(false);
          }
          this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
          this.storage.removeItem(STORAGE_AVAILABLE_KEY);
          return Promise.resolve(true);
        } catch (_a) {
          return Promise.resolve(false);
        }
      }
      _set(key2, value) {
        this.storage.setItem(key2, JSON.stringify(value));
        return Promise.resolve();
      }
      _get(key2) {
        const json2 = this.storage.getItem(key2);
        return Promise.resolve(json2 ? JSON.parse(json2) : null);
      }
      _remove(key2) {
        this.storage.removeItem(key2);
        return Promise.resolve();
      }
      get storage() {
        return this.storageRetriever();
      }
    };
    _POLLING_INTERVAL_MS$1 = 1e3;
    IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
    BrowserLocalPersistence = class extends BrowserPersistenceClass {
      constructor() {
        super(() => window.localStorage, "LOCAL");
        this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
        this.listeners = {};
        this.localCache = {};
        this.pollTimer = null;
        this.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe();
        this.fallbackToPolling = _isMobileBrowser();
        this._shouldAllowMigration = true;
      }
      forAllChangedKeys(cb) {
        for (const key2 of Object.keys(this.listeners)) {
          const newValue = this.storage.getItem(key2);
          const oldValue = this.localCache[key2];
          if (newValue !== oldValue) {
            cb(key2, oldValue, newValue);
          }
        }
      }
      onStorageEvent(event, poll = false) {
        if (!event.key) {
          this.forAllChangedKeys((key3, _oldValue, newValue) => {
            this.notifyListeners(key3, newValue);
          });
          return;
        }
        const key2 = event.key;
        if (poll) {
          this.detachListener();
        } else {
          this.stopPolling();
        }
        if (this.safariLocalStorageNotSynced) {
          const storedValue2 = this.storage.getItem(key2);
          if (event.newValue !== storedValue2) {
            if (event.newValue !== null) {
              this.storage.setItem(key2, event.newValue);
            } else {
              this.storage.removeItem(key2);
            }
          } else if (this.localCache[key2] === event.newValue && !poll) {
            return;
          }
        }
        const triggerListeners = () => {
          const storedValue2 = this.storage.getItem(key2);
          if (!poll && this.localCache[key2] === storedValue2) {
            return;
          }
          this.notifyListeners(key2, storedValue2);
        };
        const storedValue = this.storage.getItem(key2);
        if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
          setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
        } else {
          triggerListeners();
        }
      }
      notifyListeners(key2, value) {
        this.localCache[key2] = value;
        const listeners = this.listeners[key2];
        if (listeners) {
          for (const listener of Array.from(listeners)) {
            listener(value ? JSON.parse(value) : value);
          }
        }
      }
      startPolling() {
        this.stopPolling();
        this.pollTimer = setInterval(() => {
          this.forAllChangedKeys((key2, oldValue, newValue) => {
            this.onStorageEvent(
              new StorageEvent("storage", {
                key: key2,
                oldValue,
                newValue
              }),
              true
            );
          });
        }, _POLLING_INTERVAL_MS$1);
      }
      stopPolling() {
        if (this.pollTimer) {
          clearInterval(this.pollTimer);
          this.pollTimer = null;
        }
      }
      attachListener() {
        window.addEventListener("storage", this.boundEventHandler);
      }
      detachListener() {
        window.removeEventListener("storage", this.boundEventHandler);
      }
      _addListener(key2, listener) {
        if (Object.keys(this.listeners).length === 0) {
          if (this.fallbackToPolling) {
            this.startPolling();
          } else {
            this.attachListener();
          }
        }
        if (!this.listeners[key2]) {
          this.listeners[key2] = /* @__PURE__ */ new Set();
          this.localCache[key2] = this.storage.getItem(key2);
        }
        this.listeners[key2].add(listener);
      }
      _removeListener(key2, listener) {
        if (this.listeners[key2]) {
          this.listeners[key2].delete(listener);
          if (this.listeners[key2].size === 0) {
            delete this.listeners[key2];
          }
        }
        if (Object.keys(this.listeners).length === 0) {
          this.detachListener();
          this.stopPolling();
        }
      }
      async _set(key2, value) {
        await super._set(key2, value);
        this.localCache[key2] = JSON.stringify(value);
      }
      async _get(key2) {
        const value = await super._get(key2);
        this.localCache[key2] = JSON.stringify(value);
        return value;
      }
      async _remove(key2) {
        await super._remove(key2);
        delete this.localCache[key2];
      }
    };
    BrowserLocalPersistence.type = "LOCAL";
    browserLocalPersistence = BrowserLocalPersistence;
    BrowserSessionPersistence = class extends BrowserPersistenceClass {
      constructor() {
        super(() => window.sessionStorage, "SESSION");
      }
      _addListener(_key, _listener) {
        return;
      }
      _removeListener(_key, _listener) {
        return;
      }
    };
    BrowserSessionPersistence.type = "SESSION";
    browserSessionPersistence = BrowserSessionPersistence;
    Receiver = class {
      constructor(eventTarget) {
        this.eventTarget = eventTarget;
        this.handlersMap = {};
        this.boundEventHandler = this.handleEvent.bind(this);
      }
      static _getInstance(eventTarget) {
        const existingInstance = this.receivers.find((receiver) => receiver.isListeningto(eventTarget));
        if (existingInstance) {
          return existingInstance;
        }
        const newInstance = new Receiver(eventTarget);
        this.receivers.push(newInstance);
        return newInstance;
      }
      isListeningto(eventTarget) {
        return this.eventTarget === eventTarget;
      }
      async handleEvent(event) {
        const messageEvent = event;
        const { eventId, eventType, data } = messageEvent.data;
        const handlers = this.handlersMap[eventType];
        if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
          return;
        }
        messageEvent.ports[0].postMessage({
          status: "ack",
          eventId,
          eventType
        });
        const promises = Array.from(handlers).map(async (handler) => handler(messageEvent.origin, data));
        const response = await _allSettled(promises);
        messageEvent.ports[0].postMessage({
          status: "done",
          eventId,
          eventType,
          response
        });
      }
      _subscribe(eventType, eventHandler) {
        if (Object.keys(this.handlersMap).length === 0) {
          this.eventTarget.addEventListener("message", this.boundEventHandler);
        }
        if (!this.handlersMap[eventType]) {
          this.handlersMap[eventType] = /* @__PURE__ */ new Set();
        }
        this.handlersMap[eventType].add(eventHandler);
      }
      _unsubscribe(eventType, eventHandler) {
        if (this.handlersMap[eventType] && eventHandler) {
          this.handlersMap[eventType].delete(eventHandler);
        }
        if (!eventHandler || this.handlersMap[eventType].size === 0) {
          delete this.handlersMap[eventType];
        }
        if (Object.keys(this.handlersMap).length === 0) {
          this.eventTarget.removeEventListener("message", this.boundEventHandler);
        }
      }
    };
    Receiver.receivers = [];
    Sender = class {
      constructor(target) {
        this.target = target;
        this.handlers = /* @__PURE__ */ new Set();
      }
      removeMessageHandler(handler) {
        if (handler.messageChannel) {
          handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
          handler.messageChannel.port1.close();
        }
        this.handlers.delete(handler);
      }
      async _send(eventType, data, timeout = 50) {
        const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
        if (!messageChannel) {
          throw new Error("connection_unavailable");
        }
        let completionTimer;
        let handler;
        return new Promise((resolve2, reject) => {
          const eventId = _generateEventId("", 20);
          messageChannel.port1.start();
          const ackTimer = setTimeout(() => {
            reject(new Error("unsupported_event"));
          }, timeout);
          handler = {
            messageChannel,
            onMessage(event) {
              const messageEvent = event;
              if (messageEvent.data.eventId !== eventId) {
                return;
              }
              switch (messageEvent.data.status) {
                case "ack":
                  clearTimeout(ackTimer);
                  completionTimer = setTimeout(() => {
                    reject(new Error("timeout"));
                  }, 3e3);
                  break;
                case "done":
                  clearTimeout(completionTimer);
                  resolve2(messageEvent.data.response);
                  break;
                default:
                  clearTimeout(ackTimer);
                  clearTimeout(completionTimer);
                  reject(new Error("invalid_response"));
                  break;
              }
            }
          };
          this.handlers.add(handler);
          messageChannel.port1.addEventListener("message", handler.onMessage);
          this.target.postMessage({
            eventType,
            eventId,
            data
          }, [messageChannel.port2]);
        }).finally(() => {
          if (handler) {
            this.removeMessageHandler(handler);
          }
        });
      }
    };
    DB_NAME2 = "firebaseLocalStorageDb";
    DB_VERSION2 = 1;
    DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
    DB_DATA_KEYPATH = "fbase_key";
    DBPromise = class {
      constructor(request) {
        this.request = request;
      }
      toPromise() {
        return new Promise((resolve2, reject) => {
          this.request.addEventListener("success", () => {
            resolve2(this.request.result);
          });
          this.request.addEventListener("error", () => {
            reject(this.request.error);
          });
        });
      }
    };
    _POLLING_INTERVAL_MS = 800;
    _TRANSACTION_RETRY_COUNT = 3;
    IndexedDBLocalPersistence = class {
      constructor() {
        this.type = "LOCAL";
        this._shouldAllowMigration = true;
        this.listeners = {};
        this.localCache = {};
        this.pollTimer = null;
        this.pendingWrites = 0;
        this.receiver = null;
        this.sender = null;
        this.serviceWorkerReceiverAvailable = false;
        this.activeServiceWorker = null;
        this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
        }, () => {
        });
      }
      async _openDb() {
        if (this.db) {
          return this.db;
        }
        this.db = await _openDatabase();
        return this.db;
      }
      async _withRetries(op) {
        let numAttempts = 0;
        while (true) {
          try {
            const db = await this._openDb();
            return await op(db);
          } catch (e3) {
            if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
              throw e3;
            }
            if (this.db) {
              this.db.close();
              this.db = void 0;
            }
          }
        }
      }
      async initializeServiceWorkerMessaging() {
        return _isWorker() ? this.initializeReceiver() : this.initializeSender();
      }
      async initializeReceiver() {
        this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
        this.receiver._subscribe("keyChanged", async (_origin, data) => {
          const keys = await this._poll();
          return {
            keyProcessed: keys.includes(data.key)
          };
        });
        this.receiver._subscribe("ping", async (_origin, _data) => {
          return ["keyChanged"];
        });
      }
      async initializeSender() {
        var _a, _b;
        this.activeServiceWorker = await _getActiveServiceWorker();
        if (!this.activeServiceWorker) {
          return;
        }
        this.sender = new Sender(this.activeServiceWorker);
        const results = await this.sender._send("ping", {}, 800);
        if (!results) {
          return;
        }
        if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"))) {
          this.serviceWorkerReceiverAvailable = true;
        }
      }
      async notifyServiceWorker(key2) {
        if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
          return;
        }
        try {
          await this.sender._send(
            "keyChanged",
            { key: key2 },
            this.serviceWorkerReceiverAvailable ? 800 : 50
          );
        } catch (_a) {
        }
      }
      async _isAvailable() {
        try {
          if (!indexedDB) {
            return false;
          }
          const db = await _openDatabase();
          await _putObject(db, STORAGE_AVAILABLE_KEY, "1");
          await _deleteObject(db, STORAGE_AVAILABLE_KEY);
          return true;
        } catch (_a) {
        }
        return false;
      }
      async _withPendingWrite(write) {
        this.pendingWrites++;
        try {
          await write();
        } finally {
          this.pendingWrites--;
        }
      }
      async _set(key2, value) {
        return this._withPendingWrite(async () => {
          await this._withRetries((db) => _putObject(db, key2, value));
          this.localCache[key2] = value;
          return this.notifyServiceWorker(key2);
        });
      }
      async _get(key2) {
        const obj = await this._withRetries((db) => getObject(db, key2));
        this.localCache[key2] = obj;
        return obj;
      }
      async _remove(key2) {
        return this._withPendingWrite(async () => {
          await this._withRetries((db) => _deleteObject(db, key2));
          delete this.localCache[key2];
          return this.notifyServiceWorker(key2);
        });
      }
      async _poll() {
        const result = await this._withRetries((db) => {
          const getAllRequest = getObjectStore(db, false).getAll();
          return new DBPromise(getAllRequest).toPromise();
        });
        if (!result) {
          return [];
        }
        if (this.pendingWrites !== 0) {
          return [];
        }
        const keys = [];
        const keysInResult = /* @__PURE__ */ new Set();
        for (const { fbase_key: key2, value } of result) {
          keysInResult.add(key2);
          if (JSON.stringify(this.localCache[key2]) !== JSON.stringify(value)) {
            this.notifyListeners(key2, value);
            keys.push(key2);
          }
        }
        for (const localKey of Object.keys(this.localCache)) {
          if (this.localCache[localKey] && !keysInResult.has(localKey)) {
            this.notifyListeners(localKey, null);
            keys.push(localKey);
          }
        }
        return keys;
      }
      notifyListeners(key2, newValue) {
        this.localCache[key2] = newValue;
        const listeners = this.listeners[key2];
        if (listeners) {
          for (const listener of Array.from(listeners)) {
            listener(newValue);
          }
        }
      }
      startPolling() {
        this.stopPolling();
        this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
      }
      stopPolling() {
        if (this.pollTimer) {
          clearInterval(this.pollTimer);
          this.pollTimer = null;
        }
      }
      _addListener(key2, listener) {
        if (Object.keys(this.listeners).length === 0) {
          this.startPolling();
        }
        if (!this.listeners[key2]) {
          this.listeners[key2] = /* @__PURE__ */ new Set();
          void this._get(key2);
        }
        this.listeners[key2].add(listener);
      }
      _removeListener(key2, listener) {
        if (this.listeners[key2]) {
          this.listeners[key2].delete(listener);
          if (this.listeners[key2].size === 0) {
            delete this.listeners[key2];
          }
        }
        if (Object.keys(this.listeners).length === 0) {
          this.stopPolling();
        }
      }
    };
    IndexedDBLocalPersistence.type = "LOCAL";
    indexedDBLocalPersistence = IndexedDBLocalPersistence;
    _JSLOAD_CALLBACK = _generateCallbackName("rcb");
    NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
    RECAPTCHA_VERIFIER_TYPE = "recaptcha";
    PhoneAuthProvider = class {
      constructor(auth) {
        this.providerId = PhoneAuthProvider.PROVIDER_ID;
        this.auth = _castAuth(auth);
      }
      verifyPhoneNumber(phoneOptions, applicationVerifier) {
        return _verifyPhoneNumber(this.auth, phoneOptions, getModularInstance(applicationVerifier));
      }
      static credential(verificationId, verificationCode) {
        return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
      }
      static credentialFromResult(userCredential) {
        const credential = userCredential;
        return PhoneAuthProvider.credentialFromTaggedObject(credential);
      }
      static credentialFromError(error2) {
        return PhoneAuthProvider.credentialFromTaggedObject(error2.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse) {
          return null;
        }
        const { phoneNumber, temporaryProof } = tokenResponse;
        if (phoneNumber && temporaryProof) {
          return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
        }
        return null;
      }
    };
    PhoneAuthProvider.PROVIDER_ID = "phone";
    PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
    IdpCredential = class extends AuthCredential {
      constructor(params) {
        super("custom", "custom");
        this.params = params;
      }
      _getIdTokenResponse(auth) {
        return signInWithIdp(auth, this._buildIdpRequest());
      }
      _linkToIdToken(auth, idToken) {
        return signInWithIdp(auth, this._buildIdpRequest(idToken));
      }
      _getReauthenticationResolver(auth) {
        return signInWithIdp(auth, this._buildIdpRequest());
      }
      _buildIdpRequest(idToken) {
        const request = {
          requestUri: this.params.requestUri,
          sessionId: this.params.sessionId,
          postBody: this.params.postBody,
          tenantId: this.params.tenantId,
          pendingToken: this.params.pendingToken,
          returnSecureToken: true,
          returnIdpCredential: true
        };
        if (idToken) {
          request.idToken = idToken;
        }
        return request;
      }
    };
    AbstractPopupRedirectOperation = class {
      constructor(auth, filter, resolver, user, bypassAuthState = false) {
        this.auth = auth;
        this.resolver = resolver;
        this.user = user;
        this.bypassAuthState = bypassAuthState;
        this.pendingPromise = null;
        this.eventManager = null;
        this.filter = Array.isArray(filter) ? filter : [filter];
      }
      execute() {
        return new Promise(async (resolve2, reject) => {
          this.pendingPromise = { resolve: resolve2, reject };
          try {
            this.eventManager = await this.resolver._initialize(this.auth);
            await this.onExecution();
            this.eventManager.registerConsumer(this);
          } catch (e3) {
            this.reject(e3);
          }
        });
      }
      async onAuthEvent(event) {
        const { urlResponse, sessionId, postBody, tenantId, error: error2, type } = event;
        if (error2) {
          this.reject(error2);
          return;
        }
        const params = {
          auth: this.auth,
          requestUri: urlResponse,
          sessionId,
          tenantId: tenantId || void 0,
          postBody: postBody || void 0,
          user: this.user,
          bypassAuthState: this.bypassAuthState
        };
        try {
          this.resolve(await this.getIdpTask(type)(params));
        } catch (e3) {
          this.reject(e3);
        }
      }
      onError(error2) {
        this.reject(error2);
      }
      getIdpTask(type) {
        switch (type) {
          case "signInViaPopup":
          case "signInViaRedirect":
            return _signIn;
          case "linkViaPopup":
          case "linkViaRedirect":
            return _link;
          case "reauthViaPopup":
          case "reauthViaRedirect":
            return _reauth;
          default:
            _fail(this.auth, "internal-error");
        }
      }
      resolve(cred) {
        debugAssert(this.pendingPromise, "Pending promise was never set");
        this.pendingPromise.resolve(cred);
        this.unregisterAndCleanUp();
      }
      reject(error2) {
        debugAssert(this.pendingPromise, "Pending promise was never set");
        this.pendingPromise.reject(error2);
        this.unregisterAndCleanUp();
      }
      unregisterAndCleanUp() {
        if (this.eventManager) {
          this.eventManager.unregisterConsumer(this);
        }
        this.pendingPromise = null;
        this.cleanUp();
      }
    };
    _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
    PopupOperation = class extends AbstractPopupRedirectOperation {
      constructor(auth, filter, provider, resolver, user) {
        super(auth, filter, resolver, user);
        this.provider = provider;
        this.authWindow = null;
        this.pollId = null;
        if (PopupOperation.currentPopupAction) {
          PopupOperation.currentPopupAction.cancel();
        }
        PopupOperation.currentPopupAction = this;
      }
      async executeNotNull() {
        const result = await this.execute();
        _assert(result, this.auth, "internal-error");
        return result;
      }
      async onExecution() {
        debugAssert(this.filter.length === 1, "Popup operations only handle one event");
        const eventId = _generateEventId();
        this.authWindow = await this.resolver._openPopup(
          this.auth,
          this.provider,
          this.filter[0],
          eventId
        );
        this.authWindow.associatedEvent = eventId;
        this.resolver._originValidation(this.auth).catch((e3) => {
          this.reject(e3);
        });
        this.resolver._isIframeWebStorageSupported(this.auth, (isSupported) => {
          if (!isSupported) {
            this.reject(_createError(this.auth, "web-storage-unsupported"));
          }
        });
        this.pollUserCancellation();
      }
      get eventId() {
        var _a;
        return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
      }
      cancel() {
        this.reject(_createError(this.auth, "cancelled-popup-request"));
      }
      cleanUp() {
        if (this.authWindow) {
          this.authWindow.close();
        }
        if (this.pollId) {
          window.clearTimeout(this.pollId);
        }
        this.authWindow = null;
        this.pollId = null;
        PopupOperation.currentPopupAction = null;
      }
      pollUserCancellation() {
        const poll = () => {
          var _a, _b;
          if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
            this.pollId = window.setTimeout(() => {
              this.pollId = null;
              this.reject(_createError(this.auth, "popup-closed-by-user"));
            }, 2e3);
            return;
          }
          this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
        };
        poll();
      }
    };
    PopupOperation.currentPopupAction = null;
    PENDING_REDIRECT_KEY = "pendingRedirect";
    redirectOutcomeMap = /* @__PURE__ */ new Map();
    RedirectAction = class extends AbstractPopupRedirectOperation {
      constructor(auth, resolver, bypassAuthState = false) {
        super(auth, [
          "signInViaRedirect",
          "linkViaRedirect",
          "reauthViaRedirect",
          "unknown"
        ], resolver, void 0, bypassAuthState);
        this.eventId = null;
      }
      async execute() {
        let readyOutcome = redirectOutcomeMap.get(this.auth._key());
        if (!readyOutcome) {
          try {
            const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
            const result = hasPendingRedirect ? await super.execute() : null;
            readyOutcome = () => Promise.resolve(result);
          } catch (e3) {
            readyOutcome = () => Promise.reject(e3);
          }
          redirectOutcomeMap.set(this.auth._key(), readyOutcome);
        }
        if (!this.bypassAuthState) {
          redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
        }
        return readyOutcome();
      }
      async onAuthEvent(event) {
        if (event.type === "signInViaRedirect") {
          return super.onAuthEvent(event);
        } else if (event.type === "unknown") {
          this.resolve(null);
          return;
        }
        if (event.eventId) {
          const user = await this.auth._redirectUserForId(event.eventId);
          if (user) {
            this.user = user;
            return super.onAuthEvent(event);
          } else {
            this.resolve(null);
          }
        }
      }
      async onExecution() {
      }
      cleanUp() {
      }
    };
    EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
    AuthEventManager = class {
      constructor(auth) {
        this.auth = auth;
        this.cachedEventUids = /* @__PURE__ */ new Set();
        this.consumers = /* @__PURE__ */ new Set();
        this.queuedRedirectEvent = null;
        this.hasHandledPotentialRedirect = false;
        this.lastProcessedEventTime = Date.now();
      }
      registerConsumer(authEventConsumer) {
        this.consumers.add(authEventConsumer);
        if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
          this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
          this.saveEventToCache(this.queuedRedirectEvent);
          this.queuedRedirectEvent = null;
        }
      }
      unregisterConsumer(authEventConsumer) {
        this.consumers.delete(authEventConsumer);
      }
      onEvent(event) {
        if (this.hasEventBeenHandled(event)) {
          return false;
        }
        let handled = false;
        this.consumers.forEach((consumer) => {
          if (this.isEventForConsumer(event, consumer)) {
            handled = true;
            this.sendToConsumer(event, consumer);
            this.saveEventToCache(event);
          }
        });
        if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
          return handled;
        }
        this.hasHandledPotentialRedirect = true;
        if (!handled) {
          this.queuedRedirectEvent = event;
          handled = true;
        }
        return handled;
      }
      sendToConsumer(event, consumer) {
        var _a;
        if (event.error && !isNullRedirectEvent(event)) {
          const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
          consumer.onError(_createError(this.auth, code));
        } else {
          consumer.onAuthEvent(event);
        }
      }
      isEventForConsumer(event, consumer) {
        const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
        return consumer.filter.includes(event.type) && eventIdMatches;
      }
      hasEventBeenHandled(event) {
        if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
          this.cachedEventUids.clear();
        }
        return this.cachedEventUids.has(eventUid(event));
      }
      saveEventToCache(event) {
        this.cachedEventUids.add(eventUid(event));
        this.lastProcessedEventTime = Date.now();
      }
    };
    IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    HTTP_REGEX = /^https?/;
    NETWORK_TIMEOUT = new Delay(3e4, 6e4);
    cachedGApiLoader = null;
    PING_TIMEOUT = new Delay(5e3, 15e3);
    IFRAME_PATH = "__/auth/iframe";
    EMULATED_IFRAME_PATH = "emulator/auth/iframe";
    IFRAME_ATTRIBUTES = {
      style: {
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px"
      },
      "aria-hidden": "true",
      tabindex: "-1"
    };
    EID_FROM_APIHOST = /* @__PURE__ */ new Map([
      ["identitytoolkit.googleapis.com", "p"],
      ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
      ["test-identitytoolkit.sandbox.googleapis.com", "t"]
    ]);
    BASE_POPUP_OPTIONS = {
      location: "yes",
      resizable: "yes",
      statusbar: "yes",
      toolbar: "no"
    };
    DEFAULT_WIDTH = 500;
    DEFAULT_HEIGHT = 600;
    TARGET_BLANK = "_blank";
    FIREFOX_EMPTY_URL = "http://localhost";
    AuthPopup = class {
      constructor(window2) {
        this.window = window2;
        this.associatedEvent = null;
      }
      close() {
        if (this.window) {
          try {
            this.window.close();
          } catch (e3) {
          }
        }
      }
    };
    WIDGET_PATH = "__/auth/handler";
    EMULATOR_WIDGET_PATH = "emulator/auth/handler";
    WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
    BrowserPopupRedirectResolver = class {
      constructor() {
        this.eventManagers = {};
        this.iframes = {};
        this.originValidationPromises = {};
        this._redirectPersistence = browserSessionPersistence;
        this._completeRedirectFn = _getRedirectResult;
        this._overrideRedirectResult = _overrideRedirectResult;
      }
      async _openPopup(auth, provider, authType, eventId) {
        var _a;
        debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
        const url = _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
        return _open(auth, url, _generateEventId());
      }
      async _openRedirect(auth, provider, authType, eventId) {
        await this._originValidation(auth);
        _setWindowLocation(_getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId));
        return new Promise(() => {
        });
      }
      _initialize(auth) {
        const key2 = auth._key();
        if (this.eventManagers[key2]) {
          const { manager, promise: promise2 } = this.eventManagers[key2];
          if (manager) {
            return Promise.resolve(manager);
          } else {
            debugAssert(promise2, "If manager is not set, promise should be");
            return promise2;
          }
        }
        const promise = this.initAndGetManager(auth);
        this.eventManagers[key2] = { promise };
        promise.catch(() => {
          delete this.eventManagers[key2];
        });
        return promise;
      }
      async initAndGetManager(auth) {
        const iframe = await _openIframe(auth);
        const manager = new AuthEventManager(auth);
        iframe.register("authEvent", (iframeEvent) => {
          _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event");
          const handled = manager.onEvent(iframeEvent.authEvent);
          return { status: handled ? "ACK" : "ERROR" };
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
        this.eventManagers[auth._key()] = { manager };
        this.iframes[auth._key()] = iframe;
        return manager;
      }
      _isIframeWebStorageSupported(auth, cb) {
        const iframe = this.iframes[auth._key()];
        iframe.send(WEB_STORAGE_SUPPORT_KEY, { type: WEB_STORAGE_SUPPORT_KEY }, (result) => {
          var _a;
          const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
          if (isSupported !== void 0) {
            cb(!!isSupported);
          }
          _fail(auth, "internal-error");
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
      }
      _originValidation(auth) {
        const key2 = auth._key();
        if (!this.originValidationPromises[key2]) {
          this.originValidationPromises[key2] = _validateOrigin(auth);
        }
        return this.originValidationPromises[key2];
      }
      get _shouldInitProactively() {
        return _isMobileBrowser() || _isSafari() || _isIOS();
      }
    };
    browserPopupRedirectResolver = BrowserPopupRedirectResolver;
    MultiFactorAssertionImpl = class {
      constructor(factorId) {
        this.factorId = factorId;
      }
      _process(auth, session, displayName) {
        switch (session.type) {
          case "enroll":
            return this._finalizeEnroll(auth, session.credential, displayName);
          case "signin":
            return this._finalizeSignIn(auth, session.credential);
          default:
            return debugFail("unexpected MultiFactorSessionType");
        }
      }
    };
    PhoneMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
      constructor(credential) {
        super("phone");
        this.credential = credential;
      }
      static _fromCredential(credential) {
        return new PhoneMultiFactorAssertionImpl(credential);
      }
      _finalizeEnroll(auth, idToken, displayName) {
        return finalizeEnrollPhoneMfa(auth, {
          idToken,
          displayName,
          phoneVerificationInfo: this.credential._makeVerificationRequest()
        });
      }
      _finalizeSignIn(auth, mfaPendingCredential) {
        return finalizeSignInPhoneMfa(auth, {
          mfaPendingCredential,
          phoneVerificationInfo: this.credential._makeVerificationRequest()
        });
      }
    };
    PhoneMultiFactorGenerator = class {
      constructor() {
      }
      static assertion(credential) {
        return PhoneMultiFactorAssertionImpl._fromCredential(credential);
      }
    };
    PhoneMultiFactorGenerator.FACTOR_ID = "phone";
    name3 = "@firebase/auth";
    version3 = "0.20.5";
    AuthInterop = class {
      constructor(auth) {
        this.auth = auth;
        this.internalListeners = /* @__PURE__ */ new Map();
      }
      getUid() {
        var _a;
        this.assertAuthConfigured();
        return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
      }
      async getToken(forceRefresh) {
        this.assertAuthConfigured();
        await this.auth._initializationPromise;
        if (!this.auth.currentUser) {
          return null;
        }
        const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
        return { accessToken };
      }
      addAuthTokenListener(listener) {
        this.assertAuthConfigured();
        if (this.internalListeners.has(listener)) {
          return;
        }
        const unsubscribe = this.auth.onIdTokenChanged((user) => {
          var _a;
          listener(((_a = user) === null || _a === void 0 ? void 0 : _a.stsTokenManager.accessToken) || null);
        });
        this.internalListeners.set(listener, unsubscribe);
        this.updateProactiveRefresh();
      }
      removeAuthTokenListener(listener) {
        this.assertAuthConfigured();
        const unsubscribe = this.internalListeners.get(listener);
        if (!unsubscribe) {
          return;
        }
        this.internalListeners.delete(listener);
        unsubscribe();
        this.updateProactiveRefresh();
      }
      assertAuthConfigured() {
        _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
      }
      updateProactiveRefresh() {
        if (this.internalListeners.size > 0) {
          this.auth._startProactiveRefresh();
        } else {
          this.auth._stopProactiveRefresh();
        }
      }
    };
    registerAuth("Browser");
  }
});

// node_modules/@firebase/auth/dist/esm2017/index.js
var init_esm2017 = __esm({
  "node_modules/@firebase/auth/dist/esm2017/index.js"() {
    init_index_90ebcfae();
    init_index_esm2017();
    init_index_esm20174();
    init_modules();
    init_index_esm20173();
    init_index_esm20172();
  }
});

// node_modules/firebase/auth/dist/index.esm.js
var init_index_esm3 = __esm({
  "node_modules/firebase/auth/dist/index.esm.js"() {
    init_esm2017();
  }
});

// .svelte-kit/output/server/chunks/firebase.js
var FIREBASE_apiKey, FIREBASE_authDomain, FIREBASE_projectId, FIREBASE_storageBucket, FIREBASE_messagingSenderId, FIREBASE_appId, firebaseConfig, app;
var init_firebase = __esm({
  ".svelte-kit/output/server/chunks/firebase.js"() {
    init_index_esm();
    init_index_esm2();
    init_index_esm3();
    FIREBASE_apiKey = "AIzaSyDSux33iJAZsssEo2Za7As_eGGEThwXQZo";
    FIREBASE_authDomain = "thinksolve-app.firebaseapp.com";
    FIREBASE_projectId = "thinksolve-app";
    FIREBASE_storageBucket = "thinksolve-app.appspot.com";
    FIREBASE_messagingSenderId = "490986955869";
    FIREBASE_appId = "1:490986955869:web:433c6f7b31865fed5099b4";
    firebaseConfig = {
      apiKey: FIREBASE_apiKey,
      authDomain: FIREBASE_authDomain,
      projectId: FIREBASE_projectId,
      storageBucket: FIREBASE_storageBucket,
      messagingSenderId: FIREBASE_messagingSenderId,
      appId: FIREBASE_appId
    };
    app = initializeApp(firebaseConfig);
    getAuth(app);
    ln(app);
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d2 = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d2) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d2) : current_value + d2;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_2, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
var PageTitle, IsLoggedIn, Navitem, hamburgerWidth, hamburgerPattyHeight, hamburgerColor, Hamburger, Navbar, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    init_stores();
    init_store();
    init_firebase();
    init_index_esm3();
    init_index2();
    init_index_esm();
    init_index_esm2();
    PageTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $routes, $$unsubscribe_routes;
      let $page, $$unsubscribe_page;
      $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_routes();
      $$unsubscribe_page();
      return `${$$result.head += `${each(Object.keys($routes), (key2) => {
        return `
        ${$page.routeId == "" ? `${$$result.title = `<title>${escape($routes.home.title)}  </title>`, ""}` : `${$page.routeId == key2 ? `${$$result.title = `<title>${escape($routes[key2].title)} </title>`, ""}` : ``}`}`;
      })}`, ""}`;
    });
    IsLoggedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_isLoggedIn;
      $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
      $$unsubscribe_isLoggedIn();
      return ``;
    });
    Navitem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_isXs;
      let $page, $$unsubscribe_page;
      $$unsubscribe_isXs = subscribe(isXs, (value) => value);
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      let { href, content, bool, mobileOpen, btnColor, btnColorHover, routes: routes2 } = $$props;
      if ($$props.href === void 0 && $$bindings.href && href !== void 0)
        $$bindings.href(href);
      if ($$props.content === void 0 && $$bindings.content && content !== void 0)
        $$bindings.content(content);
      if ($$props.bool === void 0 && $$bindings.bool && bool !== void 0)
        $$bindings.bool(bool);
      if ($$props.mobileOpen === void 0 && $$bindings.mobileOpen && mobileOpen !== void 0)
        $$bindings.mobileOpen(mobileOpen);
      if ($$props.btnColor === void 0 && $$bindings.btnColor && btnColor !== void 0)
        $$bindings.btnColor(btnColor);
      if ($$props.btnColorHover === void 0 && $$bindings.btnColorHover && btnColorHover !== void 0)
        $$bindings.btnColorHover(btnColorHover);
      if ($$props.routes === void 0 && $$bindings.routes && routes2 !== void 0)
        $$bindings.routes(routes2);
      {
        {
          for (let key2 in routes2) {
            if ($page.routeId == key2 || $page.routeId.length == 0 && key2 == "home") {
              routes2[key2].isCurrent = true;
            } else
              routes2[key2].isCurrent = false;
          }
        }
      }
      $$unsubscribe_isXs();
      $$unsubscribe_page();
      return `<a${add_attribute("href", href, 0)} class="${escape(bool && `${btnColor} sm:border-b-1 sm:text-white  sm:rounded sm:px-3 sm:py-1`, true) + " flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent " + escape(`${btnColorHover}`, true) + " sm:hover:text-white sm:hover:rounded sm:hover:py-1 sm:hover:px-3 duration-300"}">${escape(content)}</a>`;
    });
    hamburgerWidth = 35;
    hamburgerPattyHeight = 2;
    hamburgerColor = "bg-red-500";
    Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_lastScrollY;
      let $$unsubscribe_scrollY;
      $$unsubscribe_lastScrollY = subscribe(lastScrollY, (value) => value);
      $$unsubscribe_scrollY = subscribe(scrollY, (value) => value);
      let { mobileOpen } = $$props;
      let { unique } = $$props;
      const hamburgerHeight = Math.floor(0.7 * hamburgerWidth);
      const translY = Math.floor(0.5 * (hamburgerHeight - hamburgerPattyHeight));
      const angle = 45 + 1 * 90;
      if ($$props.mobileOpen === void 0 && $$bindings.mobileOpen && mobileOpen !== void 0)
        $$bindings.mobileOpen(mobileOpen);
      if ($$props.unique === void 0 && $$bindings.unique && unique !== void 0)
        $$bindings.unique(unique);
      $$unsubscribe_lastScrollY();
      $$unsubscribe_scrollY();
      return `<main>
    <hamburger-container class="${"sm:hidden fixed top-6 right-6 text-4xl z-10"}"><hamburger style="${"width: " + escape(hamburgerWidth, true) + "px; height:" + escape(hamburgerHeight, true) + "px"}" class="${"relative flex flex-col justify-between"}"><div style="${"height:" + escape(hamburgerPattyHeight, true) + "px; " + escape(mobileOpen && `transform: translateY(${translY}px) rotate(-${angle}deg)`, true)}" class="${escape(hamburgerColor, true) + " transition duration-300 rounded"}"></div>

            <div style="${"height:" + escape(hamburgerPattyHeight, true) + "px; " + escape(mobileOpen && `transform: scale(0)`, true)}" class="${escape(hamburgerColor, true) + " transition duration-300 rounded"}"></div>

            <div style="${"height:" + escape(hamburgerPattyHeight, true) + "px; " + escape(mobileOpen && `transform: translateY(-${translY}px) rotate(${angle}deg)`, true)}" class="${"" + escape(hamburgerColor, true) + " transition duration-300 rounded"}"></div></hamburger></hamburger-container> 


    
    
        

    
        </main>`;
    });
    Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let logoTextColor;
      let $routes, $$unsubscribe_routes;
      let $fractionScroll, $$unsubscribe_fractionScroll;
      let $isLoggedIn, $$unsubscribe_isLoggedIn;
      let $scrollY, $$unsubscribe_scrollY;
      let $isXs, $$unsubscribe_isXs;
      let $scaleRocket, $$unsubscribe_scaleRocket;
      $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
      $$unsubscribe_fractionScroll = subscribe(fractionScroll, (value) => $fractionScroll = value);
      $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
      $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
      $$unsubscribe_isXs = subscribe(isXs, (value) => $isXs = value);
      let scaleRocket = spring(2, { stiffness: 0.1, damping: 0.25 });
      $$unsubscribe_scaleRocket = subscribe(scaleRocket, (value) => $scaleRocket = value);
      let hueRocket = 0;
      let { mobileHamburgerClosed } = $$props;
      let mobileOpen;
      let unique;
      let hamburgerBtn;
      if ($$props.mobileHamburgerClosed === void 0 && $$bindings.mobileHamburgerClosed && mobileHamburgerClosed !== void 0)
        $$bindings.mobileHamburgerClosed(mobileHamburgerClosed);
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        {
          if ($isLoggedIn && !$isXs) {
            hueRocket = $fractionScroll * 10;
            scaleRocket.set(1 + 0.5 * Math.sin($scrollY));
          }
        }
        mobileHamburgerClosed = mobileOpen;
        {
          $isLoggedIn ? set_store_value(routes, $routes.login.name = "\u{1F680}", $routes) : set_store_value(routes, $routes.login.name = "Login", $routes);
        }
        logoTextColor = `hsl(359,100%,${100 * $fractionScroll}%)`;
        $$rendered = `${validate_component(Hamburger, "Hamburger").$$render(
          $$result,
          { hamburgerBtn, mobileOpen, unique },
          {
            mobileOpen: ($$value) => {
              mobileOpen = $$value;
              $$settled = false;
            },
            unique: ($$value) => {
              unique = $$value;
              $$settled = false;
            }
          },
          {}
        )}

<navbar class="${escape(!mobileOpen && "hidden", true) + " " + escape($scrollY > 0 && "sm:backdrop-blur-3xl", true) + " fixed sm:right-0 sm:top-0 flex justify-between items-center w-1/2 sm:w-full right-10 top-32 sm:inline-flex sm:pr-10 sm:pl-10"}"><div class="${"translate-y-[0.2rem] translate-x-3 hidden sm:block text-xl font-Poppins font-semibold pl-[5%] sm:pr-20 sm:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent"}"${add_styles({ "color": logoTextColor })}>THINKSOLVE
    </div>

 
    <nav class="${"sm:px-4"}"><ul class="${"flex flex-col sm:flex-row text-3xl sm:text-lg sm:h-[60px] sm:items-center "}"${add_styles({ "color": $isXs ? "black" : logoTextColor })}>${each(Object.keys($routes), (KEY) => {
          return `<li class="${"py-3 sm:p-1"}"${add_attribute("style", KEY == "login" && $isLoggedIn && `transform:scale(${$scaleRocket}); filter:hue-rotate(${hueRocket}turn)`, 0)}>
                        ${validate_component(Navitem, "Navitem").$$render(
            $$result,
            {
              href: $routes[KEY].href,
              content: $routes[KEY].name,
              btnColor: $routes[KEY].btnColor,
              btnColorHover: $routes[KEY].btnColorHover,
              mobileOpen,
              bool: $routes[KEY].isCurrent,
              routes: $routes
            },
            {
              mobileOpen: ($$value) => {
                mobileOpen = $$value;
                $$settled = false;
              },
              bool: ($$value) => {
                $routes[KEY].isCurrent = $$value;
                $$settled = false;
              },
              routes: ($$value) => {
                $routes = $$value;
                $$settled = false;
              }
            },
            {}
          )}
                    </li>`;
        })}
        
            </ul></nav></navbar>`;
      } while (!$$settled);
      $$unsubscribe_routes();
      $$unsubscribe_fractionScroll();
      $$unsubscribe_isLoggedIn();
      $$unsubscribe_scrollY();
      $$unsubscribe_isXs();
      $$unsubscribe_scaleRocket();
      return $$rendered;
    });
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let atMinScroll;
      let extendedShowCondition;
      let extendedHideCondition;
      let $instDeltaY, $$unsubscribe_instDeltaY;
      let $$unsubscribe_scrollYMax;
      let $scrollY, $$unsubscribe_scrollY;
      let $$unsubscribe_innerWidth;
      let $$unsubscribe_windowInnerHeight;
      $$unsubscribe_instDeltaY = subscribe(instDeltaY, (value) => $instDeltaY = value);
      $$unsubscribe_scrollYMax = subscribe(scrollYMax, (value) => value);
      $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
      $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => value);
      $$unsubscribe_windowInnerHeight = subscribe(windowInnerHeight, (value) => value);
      let mobileHamburgerClosed = true;
      const hideCondition = (delta) => delta > 60;
      const showCondition = (delta) => delta < -10;
      let snapShotDeltaY;
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        atMinScroll = $scrollY == 0;
        {
          {
            if (hideCondition($instDeltaY))
              snapShotDeltaY = $instDeltaY;
            if (showCondition($instDeltaY))
              snapShotDeltaY = $instDeltaY;
          }
        }
        extendedShowCondition = showCondition(snapShotDeltaY) || atMinScroll;
        extendedHideCondition = hideCondition(snapShotDeltaY);
        $$rendered = `
${validate_component(IsLoggedIn, "IsLoggedIn").$$render($$result, {}, {}, {})}
${validate_component(PageTitle, "PageTitle").$$render($$result, {}, {}, {})}




<div class="${escape(extendedShowCondition && "opacity-100 ", true) + " " + escape(extendedHideCondition && "opacity-0  ", true) + " duration-300"}">${validate_component(Navbar, "Navbar").$$render(
          $$result,
          { mobileHamburgerClosed },
          {
            mobileHamburgerClosed: ($$value) => {
              mobileHamburgerClosed = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>

<div class="${"sm:block " + escape(mobileHamburgerClosed && "hidden", true)}">${slots.default ? slots.default({}) : ``}</div>	










	









`;
      } while (!$$settled);
      $$unsubscribe_instDeltaY();
      $$unsubscribe_scrollYMax();
      $$unsubscribe_scrollY();
      $$unsubscribe_innerWidth();
      $$unsubscribe_windowInnerHeight();
      return $$rendered;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  shared: () => layout_exports,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout();
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-f5a45809.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-f5a45809.js", "_app/immutable/chunks/index-1f1b8166.js", "_app/immutable/chunks/stores-b913c903.js", "_app/immutable/chunks/singletons-8251c4ac.js", "_app/immutable/chunks/index-4375fd2f.js", "_app/immutable/chunks/store-1f2ed741.js", "_app/immutable/chunks/index-76e8331f.js", "_app/immutable/chunks/navigation-b6a7fdda.js", "_app/immutable/modules/pages/_layout.js-c3477997.js"];
    stylesheets = ["_app/immutable/assets/+layout-a4890b3e.css"];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_chunks();
    init_stores();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1>

<pre>${escape($page.error.message)}</pre>



${$page.error.frame ? `<pre>${escape($page.error.frame)}</pre>` : ``}
${$page.error.stack ? `<pre>${escape($page.error.stack)}</pre>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/error.svelte-a5243b14.js";
    imports2 = ["_app/immutable/components/error.svelte-a5243b14.js", "_app/immutable/chunks/index-1f1b8166.js", "_app/immutable/chunks/stores-b913c903.js", "_app/immutable/chunks/singletons-8251c4ac.js", "_app/immutable/chunks/index-4375fd2f.js"];
    stylesheets2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_layout-nolayout.svelte.js
var layout_nolayout_svelte_exports = {};
__export(layout_nolayout_svelte_exports, {
  default: () => Layout_nolayout
});
var Layout_nolayout;
var init_layout_nolayout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout-nolayout.svelte.js"() {
    init_chunks();
    Layout_nolayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${slots.default ? slots.default({}) : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, imports3, stylesheets3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_layout_nolayout_svelte(), layout_nolayout_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_layout-nolayout.svelte-e637f9f8.js";
    imports3 = ["_app/immutable/components/pages/_layout-nolayout.svelte-e637f9f8.js", "_app/immutable/chunks/index-1f1b8166.js"];
    stylesheets3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var PageTransitions, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    init_store();
    init_index2();
    PageTransitions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_windowInnerHeight;
      let $$unsubscribe_scrollYMax;
      let $$unsubscribe_inTransition;
      $$unsubscribe_windowInnerHeight = subscribe(windowInnerHeight, (value) => value);
      $$unsubscribe_scrollYMax = subscribe(scrollYMax, (value) => value);
      $$unsubscribe_inTransition = subscribe(inTransition, (value) => value);
      $$unsubscribe_windowInnerHeight();
      $$unsubscribe_scrollYMax();
      $$unsubscribe_inTransition();
      return `



<div>${slots.default ? slots.default({}) : ``}</div>`;
    });
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $routes, $$unsubscribe_routes;
      $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
      let pageColor = $routes.home.bgColor;
      $$unsubscribe_routes();
      return `
${validate_component(PageTransitions, "PageTransitions").$$render($$result, {}, {}, {
        default: () => {
          return `
    <main class="${"h-[2000px] " + escape(pageColor, true)}">
        <h1 class="${"p-24 "}">Home </h1></main>`;
        }
      })}
    `;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  file: () => file4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4
});
var index4, component4, file4, imports4, stylesheets4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    index4 = 3;
    component4 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file4 = "_app/immutable/components/pages/_page.svelte-7da46ded.js";
    imports4 = ["_app/immutable/components/pages/_page.svelte-7da46ded.js", "_app/immutable/chunks/index-1f1b8166.js", "_app/immutable/chunks/store-1f2ed741.js", "_app/immutable/chunks/index-4375fd2f.js", "_app/immutable/chunks/index-76e8331f.js"];
    stylesheets4 = [];
  }
});

// .svelte-kit/output/server/entries/pages/etc/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
var Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/etc/_page.svelte.js"() {
    init_chunks();
    init_store();
    init_index2();
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $routes, $$unsubscribe_routes;
      $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
      let pageColor = $routes.etc.bgColor;
      $$unsubscribe_routes();
      return `

<div class="${"flex justify-center items-center " + escape(pageColor, true) + " h-[400vh]"}">Etc
</div>    
  

`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  file: () => file5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5
});
var index5, component5, file5, imports5, stylesheets5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    index5 = 4;
    component5 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file5 = "_app/immutable/components/pages/etc/_page.svelte-32ced349.js";
    imports5 = ["_app/immutable/components/pages/etc/_page.svelte-32ced349.js", "_app/immutable/chunks/index-1f1b8166.js", "_app/immutable/chunks/store-1f2ed741.js", "_app/immutable/chunks/index-4375fd2f.js", "_app/immutable/chunks/index-76e8331f.js"];
    stylesheets5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/login/_page@nolayout.svelte.js
var page_nolayout_svelte_exports = {};
__export(page_nolayout_svelte_exports, {
  default: () => Page_nolayout
});
var css, Page_nolayout;
var init_page_nolayout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/login/_page@nolayout.svelte.js"() {
    init_chunks();
    init_firebase();
    init_index_esm2();
    init_index_esm3();
    init_index_esm();
    css = {
      code: "#flyingEmoji.svelte-1mhl4m5.svelte-1mhl4m5{display:flex;justify-content:center;align-items:center;-webkit-animation:svelte-1mhl4m5-xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1) ;animation:svelte-1mhl4m5-xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1) }#flyingEmoji.svelte-1mhl4m5.svelte-1mhl4m5::after{content:'\u{1F6F8}';display:block;width:1px;height:1px;border-radius:20px;-webkit-animation:svelte-1mhl4m5-yAxis 3s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);animation:svelte-1mhl4m5-yAxis 3s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64)}@-webkit-keyframes svelte-1mhl4m5-yAxis{80%{-webkit-animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);transform:translateY(-100px) rotate(360deg) scale(2)}}@keyframes svelte-1mhl4m5-yAxis{80%{-webkit-animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);transform:translateY(-100px) rotate(360deg) scale(2)}}@-webkit-keyframes svelte-1mhl4m5-xAxis{20%{-webkit-animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);transform:translateX(200px)}}@keyframes svelte-1mhl4m5-xAxis{20%{-webkit-animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);transform:translateX(200px)}}@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');:root{--transition-effect:ease-in fadeIn 0.6s}@-webkit-keyframes svelte-1mhl4m5-fadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-1mhl4m5-fadeIn{from{opacity:0}to{opacity:1}}#logInDiv.svelte-1mhl4m5.svelte-1mhl4m5{animation:var(--transition-effect);-moz-animation:var(--transition-effect);-o-animation:var(--transition-effect);-ms-animation:var(--transition-effect);-webkit-animation:var(--transition-effect)}.loginLogoutDivs.svelte-1mhl4m5.svelte-1mhl4m5{margin:0px auto;margin-top:50px;width:25vw;min-width:280px;padding:20px;font-family:'Nunito', sans-serif;font-weight:400}.loginLogoutDivs.svelte-1mhl4m5 input.svelte-1mhl4m5,button.svelte-1mhl4m5.svelte-1mhl4m5{box-sizing:border-box;width:100%;border-radius:2px;padding:15px;outline:none;margin-bottom:15px;font-family:'Nunito', sans-serif;font-weight:400;font-size:16px;transition:0.15s;-moz-transition:0.15s;-webkit-transition:0.15s}.loginLogoutDivs.svelte-1mhl4m5 input.svelte-1mhl4m5{background:#fff;border:1px solid #ccc}#googleBtn.svelte-1mhl4m5.svelte-1mhl4m5{background:#4285f4;border:1px solid #4285f4}#googleBtn.svelte-1mhl4m5.svelte-1mhl4m5:hover{color:#4285f4;background:#fff;border:1px solid #4285f4}.loginLogoutDivs.svelte-1mhl4m5 button.svelte-1mhl4m5{background:black;color:#fff;border:1px solid black}.loginLogoutDivs.svelte-1mhl4m5 input.svelte-1mhl4m5:hover{border:1px solid #999}.loginLogoutDivs.svelte-1mhl4m5 button.svelte-1mhl4m5:hover{color:black;background:#fff;border:1px solid black}.loginLogoutDivs.svelte-1mhl4m5 input.svelte-1mhl4m5:focus{background:rgba(255, 255, 255, 0.5) }.centering.svelte-1mhl4m5.svelte-1mhl4m5{display:flex;justify-content:center;align-items:center}",
      map: null
    };
    Page_nolayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let emailFieldValue = "";
      $$result.css.add(css);
      return `<main><video autoplay loop muted playsinline controlslist="${"nodownload"}" src="${"/login-bg-video-blurred.mp4"}" style="${"min-height: 100vh; max-height: 100vh; min-width: 100vw; max-width: 100vw; position: absolute; z-index: -1; top: 0; left: 0; margin: 0; padding: 0; filter: blur(10px); "}"></video>

    
   
    <div class="${"loginLogoutDivs svelte-1mhl4m5"}" id="${"logInDiv"}" style="${"display: block; "}"><br>
        <br>
        
            <button id="${"googleBtn"}" class="${"svelte-1mhl4m5"}">Sign-in with Google</button>
        <br>
        <br>


        <button id="${"passwordlessLoginBtn"}" class="${"svelte-1mhl4m5"}">Sign-in via link</button>
        
        <input id="${"emailField"}" type="${"email"}" placeholder="${"email"}" class="${"svelte-1mhl4m5"}"${add_attribute("value", emailFieldValue, 0)}>


        <span id="${"emailStatusMessage"}" class="${"centering  svelte-1mhl4m5"}" style="${"display:none"}"></span>
        <span id="${"flyingEmoji"}" style="${"display:none"}" class="${"svelte-1mhl4m5"}"></span></div>


    <div class="${"loginLogoutDivs svelte-1mhl4m5"}" id="${"logOutDiv"}" style="${"display: none"}"><h2 class="${"centering svelte-1mhl4m5"}" id="${"loginWelcomeText"}">Welcome User </h2>
        <h3 class="${"centering svelte-1mhl4m5"}">Redirecting to your page in </h3>
        <h3 class="${"centering svelte-1mhl4m5"}" style="${"font-size: 30px;"}" id="${"redirectMessage"}">\u230A\u03C0\u230B</h3>

        <button id="${"logoutBtn"}" class="${"svelte-1mhl4m5"}">Logout</button></div>

</main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  file: () => file6,
  imports: () => imports6,
  index: () => index6,
  stylesheets: () => stylesheets6
});
var index6, component6, file6, imports6, stylesheets6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    index6 = 5;
    component6 = async () => (await Promise.resolve().then(() => (init_page_nolayout_svelte(), page_nolayout_svelte_exports))).default;
    file6 = "_app/immutable/components/pages/login/_page@nolayout.svelte-14246e27.js";
    imports6 = ["_app/immutable/components/pages/login/_page@nolayout.svelte-14246e27.js", "_app/immutable/chunks/index-1f1b8166.js", "_app/immutable/chunks/navigation-b6a7fdda.js", "_app/immutable/chunks/index-76e8331f.js", "_app/immutable/chunks/singletons-8251c4ac.js", "_app/immutable/chunks/index-4375fd2f.js"];
    stylesheets6 = ["_app/immutable/assets/+page@nolayout-9f5d0419.css"];
  }
});

// .svelte-kit/output/server/entries/pages/plans/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
var Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/plans/_page.svelte.js"() {
    init_chunks();
    init_store();
    init_index2();
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $routes, $$unsubscribe_routes;
      $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
      let pageColor = $routes.plans.bgColor;
      $$unsubscribe_routes();
      return `
    <div class="${"flex justify-center items-center " + escape(pageColor, true) + " h-screen"}">Plans
    </div>    
`;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  file: () => file7,
  imports: () => imports7,
  index: () => index7,
  stylesheets: () => stylesheets7
});
var index7, component7, file7, imports7, stylesheets7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    index7 = 6;
    component7 = async () => (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    file7 = "_app/immutable/components/pages/plans/_page.svelte-98cfaec2.js";
    imports7 = ["_app/immutable/components/pages/plans/_page.svelte-98cfaec2.js", "_app/immutable/chunks/index-1f1b8166.js", "_app/immutable/chunks/store-1f2ed741.js", "_app/immutable/chunks/index-4375fd2f.js", "_app/immutable/chunks/index-76e8331f.js"];
    stylesheets7 = [];
  }
});

// .svelte-kit/output/server/index.js
init_chunks();

// node_modules/devalue/dist/devalue.esm.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key2) {
            return walk(thing[key2]);
          });
      }
    }
  }
  walk(value);
  var names = /* @__PURE__ */ new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a2, b) {
    return b[1] - a2[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v2, i) {
          return i in thing ? stringify(v2) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key2) {
          return safeKey(key2) + ":" + stringify(thing[key2]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name4, thing) {
      params_1.push(name4);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v2, i) {
            statements_1.push(name4 + "[" + i + "]=" + stringify(v2));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name4 + "." + Array.from(thing).map(function(v2) {
            return "add(" + stringify(v2) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name4 + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v2 = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v2) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key2) {
            statements_1.push("" + name4 + safeProp(key2) + "=" + stringify(thing[key2]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name4 = "";
  do {
    name4 = chars[num % chars.length] + name4;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name4) ? name4 + "_" : name4;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c2) {
  return escaped[c2] || c2;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escapeUnsafeChars(JSON.stringify(key2));
}
function safeProp(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? "." + key2 : "[" + escapeUnsafeChars(JSON.stringify(key2)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
var devalue_esm_default = devalue;

// .svelte-kit/output/server/index.js
init_index2();
var cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  let { errors } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.data_2 === void 0 && $$bindings.data_2 && data_2 !== void 0)
    $$bindings.data_2(data_2);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${components[2] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1 }, {}, {
        default: () => {
          return `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, { data: data_2 }, {}, {})}`;
        }
      })}` : `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, errors }, {}, {})}`}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, errors }, {}, {})}`}

${``}`;
});
var HttpError = class {
  constructor(status, message) {
    __publicField(this, "name", "HttpError");
    __publicField(this, "stack");
    this.status = status;
    this.message = message ?? `Error: ${status}`;
  }
  toString() {
    return this.message;
  }
};
var Redirect = class {
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
function serialize_error(error2, get_stack) {
  return JSON.stringify(error_to_pojo(error2, get_stack));
}
function error_to_pojo(error2, get_stack) {
  if (error2 instanceof HttpError) {
    return {
      message: error2.message,
      status: error2.status,
      __is_http_error: true
    };
  }
  const {
    name: name4,
    message,
    stack,
    cause,
    ...custom
  } = error2;
  const object = { name: name4, message, stack: get_stack(error2) };
  if (cause)
    object.cause = error_to_pojo(cause, get_stack);
  for (const key2 in custom) {
    object[key2] = custom[key2];
  }
  return object;
}
function check_method_names(mod) {
  ["get", "post", "put", "patch", "del"].forEach((m2) => {
    if (m2 in mod) {
      const replacement = m2 === "del" ? "DELETE" : m2.toUpperCase();
      throw Error(
        `Endpoint method "${m2}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`
      );
    }
  });
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return new Response(`${method} method not allowed`, {
    status: 405,
    headers: {
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
async function render_endpoint(event, route) {
  const method = event.request.method;
  const mod = await route.load();
  check_method_names(mod);
  let handler = mod[method];
  if (!handler && method === "HEAD") {
    handler = mod.GET;
  }
  if (!handler) {
    if (event.request.headers.get("x-sveltekit-load")) {
      return new Response(void 0, { status: 204 });
    }
    return method_not_allowed(mod, method);
  }
  try {
    const response = await handler(
      event
    );
    if (!(response instanceof Response)) {
      return new Response(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`,
        { status: 500 }
      );
    }
    return response;
  } catch (error2) {
    if (error2 instanceof HttpError) {
      return new Response(error2.message, { status: error2.status });
    } else if (error2 instanceof Redirect) {
      return new Response(void 0, {
        status: error2.status,
        headers: { Location: error2.location }
      });
    } else {
      throw error2;
    }
  }
}
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a2, b) => {
    if (a2.q !== b.q) {
      return b.q - a2.q;
    }
    if (a2.subtype === "*" !== (b.subtype === "*")) {
      return a2.subtype === "*" ? 1 : -1;
    }
    if (a2.type === "*" !== (b.type === "*")) {
      return a2.type === "*" ? 1 : -1;
    }
    return a2.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var render_json_payload_script_dict = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var render_json_payload_script_regex = new RegExp(
  `[${Object.keys(render_json_payload_script_dict).join("")}]`,
  "g"
);
function render_json_payload_script(attrs, payload) {
  const safe_payload = JSON.stringify(payload).replace(
    render_json_payload_script_regex,
    (match) => render_json_payload_script_dict[match]
  );
  let safe_attrs = "";
  for (const [key2, value] of Object.entries(attrs)) {
    if (value === void 0)
      continue;
    safe_attrs += ` sveltekit:data-${key2}=${escape_html_attr(value)}`;
  }
  return `<script type="application/json"${safe_attrs}>${safe_payload}<\/script>`;
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a2;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a2 = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a2 >>> 7 ^ a2 >>> 18 ^ a2 >>> 3 ^ a2 << 25 ^ a2 << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x2) {
    return (x2 - Math.floor(x2)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a2 = bytes[i + 0];
    const b = bytes[i + 1];
    const c2 = bytes[i + 2];
    const d2 = bytes[i + 3];
    bytes[i + 0] = d2;
    bytes[i + 1] = c2;
    bytes[i + 2] = b;
    bytes[i + 3] = a2;
  }
}
function encode(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l2 = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l2; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l2 + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l2) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  constructor(use_hashes, directives, nonce, dev) {
    __privateAdd(this, _use_hashes, void 0);
    __privateAdd(this, _script_needs_csp, void 0);
    __privateAdd(this, _style_needs_csp, void 0);
    __privateAdd(this, _directives, void 0);
    __privateAdd(this, _script_src, void 0);
    __privateAdd(this, _style_src, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, dev ? { ...directives } : directives);
    const d2 = __privateGet(this, _directives);
    if (dev) {
      const effective_style_src2 = d2["style-src"] || d2["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d2["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d2["script-src"] || d2["default-src"];
    const effective_style_src = d2["style-src"] || d2["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev) {
    var _a, _b;
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v2) => !!v2).length > 0) {
      const has_report_to = ((_a = directives["report-to"]) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  constructor({ mode, directives, reportOnly }, { prerender, dev }) {
    __publicField(this, "nonce", generate_nonce());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var absolute = /^([a-z]+:)?\/?\//;
var scheme = /^[a-z]+:/;
function resolve(base2, path) {
  if (scheme.test(path))
    return path;
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix2 = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix2}${baseparts.join("/")}`;
}
function is_root_relative(path) {
  return path[0] === "/" && path[1] !== "/";
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
var LoadURL = class extends URL {
  get hash() {
    throw new Error(
      "url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component."
    );
  }
};
var PrerenderingURL = class extends URL {
  get search() {
    throw new Error("Cannot access url.search on a page with prerendering enabled");
  }
  get searchParams() {
    throw new Error("Cannot access url.searchParams on a page with prerendering enabled");
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  cookies,
  options,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  validation_errors
}) {
  var _a;
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets8 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const stack = error2 instanceof HttpError ? void 0 : error2 == null ? void 0 : error2.stack;
  if (error2 && options.dev && !(error2 instanceof HttpError)) {
    error2.stack = options.get_stack(error2);
  }
  if (resolve_opts.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component()))
    };
    let data = {};
    for (let i = 0; i < branch.length; i += 1) {
      data = { ...data, ...branch[i].data };
      props[`data_${i}`] = data;
    }
    props.page = {
      error: error2,
      params: event.params,
      routeId: event.routeId,
      status,
      url: state.prerendering ? new PrerenderingURL(event.url) : event.url,
      data
    };
    if (validation_errors) {
      props.errors = validation_errors;
    }
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    rendered = options.root.render(props);
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets8.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v2]) => inline_styles.set(k, v2));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body } = rendered;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let assets2;
  if (options.paths.assets) {
    assets2 = options.paths.assets;
  } else if ((_a = state.prerendering) == null ? void 0 : _a.fallback) {
    assets2 = options.paths.base;
  } else {
    const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
    assets2 = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => path.startsWith("/") ? path : `${assets2}/${path}`;
  const init_app = `
		import { set_public_env, start } from ${s(prefixed(entry.file))};

		set_public_env(${s(options.public_env)});

		start({
			target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
			paths: ${s(options.paths)},
			route: ${!!page_config.router},
			spa: ${!resolve_opts.ssr},
			trailing_slash: ${s(options.trailing_slash)},
			hydrate: ${resolve_opts.ssr && page_config.hydrate ? `{
				status: ${status},
				error: ${error2 && serialize_error(error2, (e3) => e3.stack)},
				node_ids: [${branch.map(({ node }) => node.index).join(", ")}],
				params: ${devalue_esm_default(event.params)},
				routeId: ${s(event.routeId)}
			}` : "null"}
		});
	`;
  const init_service_worker = `
		if ('serviceWorker' in navigator) {
			addEventListener('load', function () {
				navigator.serviceWorker.register('${options.service_worker}');
			});
		}
	`;
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets8) {
    const path = prefixed(dep);
    const attributes = [];
    if (csp.style_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
      link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
    }
    attributes.unshift('rel="stylesheet"');
    head += `
	<link href="${path}" ${attributes.join(" ")}>`;
  }
  if (page_config.router || page_config.hydrate) {
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (state.prerendering) {
        head += `
	<link rel="modulepreload" href="${path}">`;
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (resolve_opts.ssr && page_config.hydrate) {
    const serialized_data = [];
    for (const { url, body: body2, response } of fetched) {
      serialized_data.push(
        render_json_payload_script(
          { type: "data", url, body: typeof body2 === "string" ? hash(body2) : void 0 },
          response
        )
      );
    }
    if (branch.some((node) => node.server_data)) {
      serialized_data.push(
        render_json_payload_script(
          { type: "server_data" },
          branch.map(({ server_data }) => server_data)
        )
      );
    }
    if (validation_errors) {
      serialized_data.push(
        render_json_payload_script({ type: "validation_errors" }, validation_errors)
      );
    }
    body += `
	${serialized_data.join("\n	")}`;
  }
  if (options.service_worker) {
    csp.add_script(init_service_worker);
    head += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  const html = await resolve_opts.transformPageChunk({
    html: options.template({ head, body, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    for (const new_cookie of cookies) {
      const { name: name4, value, ...options2 } = new_cookie;
      headers.append("set-cookie", cookie.serialize(name4, value, options2));
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  if (error2 && options.dev && !(error2 instanceof HttpError)) {
    error2.stack = stack;
  }
  return new Response(html, {
    status,
    headers
  });
}
async function load_server_data({ dev, event, node, parent }) {
  var _a;
  if (!(node == null ? void 0 : node.server))
    return null;
  const server_data = await ((_a = node.server.load) == null ? void 0 : _a.call(null, {
    get clientAddress() {
      return event.clientAddress;
    },
    locals: event.locals,
    params: event.params,
    parent,
    platform: event.platform,
    request: event.request,
    routeId: event.routeId,
    setHeaders: event.setHeaders,
    url: event.url
  }));
  const result = server_data ? await unwrap_promises(server_data) : null;
  if (dev) {
    check_serializability(result, node.server_id, "data");
  }
  return result;
}
async function load_data({ event, fetcher, node, parent, server_data_promise, state }) {
  var _a;
  const server_data = await server_data_promise;
  if (!((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a.load)) {
    return server_data;
  }
  const load_input = {
    url: state.prerendering ? new PrerenderingURL(event.url) : new LoadURL(event.url),
    params: event.params,
    data: server_data,
    routeId: event.routeId,
    fetch: fetcher,
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  };
  Object.defineProperties(load_input, {
    session: {
      get() {
        throw new Error(
          "session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
        );
      },
      enumerable: false
    }
  });
  const data = await node.shared.load.call(null, load_input);
  return data ? unwrap_promises(data) : null;
}
async function unwrap_promises(object) {
  const unwrapped = {};
  for (const key2 in object) {
    unwrapped[key2] = await object[key2];
  }
  return unwrapped;
}
function check_serializability(value, id, path) {
  const type = typeof value;
  if (type === "string" || type === "boolean" || type === "number" || type === "undefined") {
    return;
  }
  if (type === "object") {
    if (!value)
      return;
    if (Array.isArray(value)) {
      value.forEach((child, i) => {
        check_serializability(child, id, `${path}[${i}]`);
      });
      return;
    }
    const tag = Object.prototype.toString.call(value);
    if (tag === "[object Object]") {
      for (const key2 in value) {
        check_serializability(value[key2], id, `${path}.${key2}`);
      }
      return;
    }
  }
  throw new Error(`${path} returned from 'load' in ${id} cannot be serialized as JSON`);
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return error2;
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function create_fetch({ event, options, state, route }) {
  const fetched = [];
  const initial_cookies = cookie.parse(event.request.headers.get("cookie") || "");
  const cookies = [];
  const fetcher = async (resource, opts = {}) => {
    let requested;
    if (typeof resource === "string" || resource instanceof URL) {
      requested = resource.toString();
    } else {
      requested = resource.url;
      opts = {
        method: resource.method,
        headers: resource.headers,
        body: resource.body,
        mode: resource.mode,
        credentials: resource.credentials,
        cache: resource.cache,
        redirect: resource.redirect,
        referrer: resource.referrer,
        integrity: resource.integrity,
        ...opts
      };
    }
    opts.headers = new Headers(opts.headers);
    for (const [key2, value] of event.request.headers) {
      if (key2 !== "authorization" && key2 !== "connection" && key2 !== "content-length" && key2 !== "cookie" && key2 !== "host" && key2 !== "if-none-match" && !opts.headers.has(key2)) {
        opts.headers.set(key2, value);
      }
    }
    const resolved = resolve(event.url.pathname, requested.split("?")[0]);
    let response;
    let dependency;
    const prefix2 = options.paths.assets || options.paths.base;
    const filename = decodeURIComponent(
      resolved.startsWith(prefix2) ? resolved.slice(prefix2.length) : resolved
    ).slice(1);
    const filename_html = `${filename}/index.html`;
    const is_asset = options.manifest.assets.has(filename);
    const is_asset_html = options.manifest.assets.has(filename_html);
    if (is_asset || is_asset_html) {
      const file8 = is_asset ? filename : filename_html;
      if (options.read) {
        const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
        response = new Response(options.read(file8), {
          headers: type ? { "content-type": type } : {}
        });
      } else {
        response = await fetch(`${event.url.origin}/${file8}`, opts);
      }
    } else if (is_root_relative(resolved)) {
      if (opts.credentials !== "omit") {
        const authorization = event.request.headers.get("authorization");
        const combined_cookies = { ...initial_cookies };
        for (const cookie3 of cookies) {
          if (!domain_matches(event.url.hostname, cookie3.domain))
            continue;
          if (!path_matches(resolved, cookie3.path))
            continue;
          combined_cookies[cookie3.name] = cookie3.value;
        }
        const cookie2 = Object.entries(combined_cookies).map(([name4, value]) => `${name4}=${value}`).join("; ");
        if (cookie2) {
          opts.headers.set("cookie", cookie2);
        }
        if (authorization && !opts.headers.has("authorization")) {
          opts.headers.set("authorization", authorization);
        }
      }
      if (opts.body && typeof opts.body !== "string") {
        throw new Error("Request body must be a string");
      }
      response = await respond(
        new Request(new URL(requested, event.url).href, { ...opts }),
        options,
        {
          ...state,
          initiator: route
        }
      );
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(resolved, dependency);
      }
    } else {
      if (resolved.startsWith("//")) {
        requested = event.url.protocol + requested;
      }
      if (`.${new URL(requested).hostname}`.endsWith(`.${event.url.hostname}`) && opts.credentials !== "omit") {
        const cookie2 = event.request.headers.get("cookie");
        if (cookie2)
          opts.headers.set("cookie", cookie2);
      }
      opts.headers.delete("connection");
      const external_request = new Request(requested, opts);
      response = await options.hooks.externalFetch.call(null, external_request);
    }
    const set_cookie = response.headers.get("set-cookie");
    if (set_cookie) {
      cookies.push(
        ...set_cookie_parser.splitCookiesString(set_cookie).map((str) => set_cookie_parser.parseString(str))
      );
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text() {
          const body = await response2.text();
          const headers = {};
          for (const [key3, value] of response2.headers) {
            if (key3 !== "set-cookie" && key3 !== "etag") {
              headers[key3] = value;
            }
          }
          if (!opts.body || typeof opts.body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: requested,
              body: opts.body,
              response: {
                status: status_number,
                statusText: response2.statusText,
                headers,
                body
              }
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    return proxy;
  };
  return { fetcher, fetched, cookies };
}
async function respond_with_error({ event, options, state, status, error: error2, resolve_opts }) {
  const { fetcher, fetched, cookies } = create_fetch({
    event,
    options,
    state,
    route: GENERIC_ERROR
  });
  try {
    const branch = [];
    if (resolve_opts.ssr) {
      const default_layout = await options.manifest._.nodes[0]();
      const server_data_promise = load_server_data({
        dev: options.dev,
        event,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetcher,
        node: default_layout,
        parent: async () => ({}),
        server_data_promise,
        state
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await options.manifest._.nodes[1](),
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options,
      state,
      page_config: {
        hydrate: options.hydrate,
        router: options.router
      },
      status,
      error: error2,
      branch,
      fetched,
      cookies,
      event,
      resolve_opts,
      validation_errors: void 0
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return new Response(error3.stack, {
      status: 500
    });
  }
}
function error(status, message) {
  return new HttpError(status, message);
}
function json(data, init2) {
  const headers = new Headers(init2 == null ? void 0 : init2.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init2,
    headers
  });
}
async function render_page(event, route, options, state, resolve_opts) {
  var _a, _b;
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  const accept = negotiate(event.request.headers.get("accept") || "text/html", [
    "text/html",
    "application/json"
  ]);
  if (accept === "application/json" && event.request.method !== "GET" && event.request.method !== "HEAD") {
    const node = await options.manifest._.nodes[route.leaf]();
    if (node.server) {
      return handle_json_request(event, options, node.server);
    }
  }
  const { fetcher, fetched, cookies } = create_fetch({ event, options, state, route });
  try {
    const nodes = await Promise.all([
      ...route.layouts.map((n2) => n2 == void 0 ? n2 : options.manifest._.nodes[n2]()),
      options.manifest._.nodes[route.leaf]()
    ]);
    const leaf_node = nodes.at(-1);
    let status = 200;
    let mutation_error;
    let validation_errors;
    if (leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD") {
      try {
        const method = event.request.method;
        const handler = leaf_node.server[method];
        if (handler) {
          const result = await handler.call(null, event);
          if (result == null ? void 0 : result.errors) {
            validation_errors = result.errors;
            status = result.status ?? 400;
          }
          if (event.request.method === "POST" && (result == null ? void 0 : result.location)) {
            return redirect_response(303, result.location);
          }
        } else {
          event.setHeaders({
            allow: allowed_methods(leaf_node.server).join(", ")
          });
          mutation_error = error(405, "Method not allowed");
        }
      } catch (e3) {
        if (e3 instanceof Redirect) {
          return redirect_response(e3.status, e3.location);
        }
        mutation_error = e3;
      }
    }
    const should_prerender_data = nodes.some((node) => node == null ? void 0 : node.server);
    const data_pathname = `${event.url.pathname.replace(/\/$/, "")}/__data.json`;
    if (!resolve_opts.ssr) {
      return await render_response({
        branch: [],
        validation_errors: void 0,
        fetched,
        cookies,
        page_config: {
          hydrate: true,
          router: true
        },
        status,
        error: null,
        event,
        options,
        state,
        resolve_opts
      });
    }
    const should_prerender = ((_a = leaf_node.shared) == null ? void 0 : _a.prerender) ?? ((_b = leaf_node.server) == null ? void 0 : _b.prerender) ?? options.prerender.default;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && (mod.POST || mod.PUT || mod.DELETE || mod.PATCH)) {
        throw new Error("Cannot prerender pages that have endpoints with mutative methods");
      }
    } else if (state.prerendering) {
      if (!should_prerender) {
        return new Response(void 0, {
          status: 204
        });
      }
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && mutation_error) {
            throw mutation_error;
          }
          return await load_server_data({
            dev: options.dev,
            event,
            node,
            parent: async () => {
              const data = {};
              for (let j2 = 0; j2 < i; j2 += 1) {
                Object.assign(data, await server_promises[j2]);
              }
              return data;
            }
          });
        } catch (e3) {
          load_error = e3;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetcher,
            node,
            parent: async () => {
              const data = {};
              for (let j2 = 0; j2 < i; j2 += 1) {
                Object.assign(data, await load_promises[j2]);
              }
              return data;
            },
            server_data_promise: server_promises[i],
            state
          });
        } catch (e3) {
          load_error = e3;
          throw load_error;
        }
      });
    });
    for (const p2 of server_promises)
      p2.catch(() => {
      });
    for (const p2 of load_promises)
      p2.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e3) {
          const error2 = normalize_error(e3);
          if (error2 instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(void 0),
                body: JSON.stringify({
                  type: "redirect",
                  location: error2.location
                })
              });
            }
            return redirect_response(error2.status, error2.location);
          }
          if (!(error2 instanceof HttpError)) {
            options.handle_error(error2, event);
          }
          const status2 = error2 instanceof HttpError ? error2.status : 500;
          while (i--) {
            if (route.errors[i]) {
              const index8 = route.errors[i];
              const node2 = await options.manifest._.nodes[index8]();
              let j2 = i;
              while (!branch[j2])
                j2 -= 1;
              return await render_response({
                event,
                options,
                state,
                resolve_opts,
                page_config: { router: true, hydrate: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j2 + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched,
                cookies,
                validation_errors: void 0
              });
            }
          }
          return new Response(
            error2 instanceof HttpError ? error2.message : options.get_stack(error2),
            { status: status2 }
          );
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      state.prerendering.dependencies.set(data_pathname, {
        response: new Response(void 0),
        body: JSON.stringify({
          type: "data",
          nodes: branch.map((branch_node) => ({ data: branch_node == null ? void 0 : branch_node.server_data }))
        })
      });
    }
    return await render_response({
      event,
      options,
      state,
      resolve_opts,
      page_config: get_page_config(leaf_node, options),
      status,
      error: null,
      branch: compact(branch),
      validation_errors,
      fetched,
      cookies
    });
  } catch (error2) {
    options.handle_error(error2, event);
    return await respond_with_error({
      event,
      options,
      state,
      status: 500,
      error: error2,
      resolve_opts
    });
  }
}
function get_page_config(leaf, options) {
  var _a, _b;
  if (leaf.shared && "ssr" in leaf.shared) {
    throw new Error(
      "`export const ssr` has been removed \u2014 use the handle hook instead: https://kit.svelte.dev/docs/hooks#handle"
    );
  }
  return {
    router: ((_a = leaf.shared) == null ? void 0 : _a.router) ?? options.router,
    hydrate: ((_b = leaf.shared) == null ? void 0 : _b.hydrate) ?? options.hydrate
  };
}
async function handle_json_request(event, options, mod) {
  const method = event.request.method;
  const handler = mod[method];
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  try {
    const result = await handler.call(null, event);
    if (result == null ? void 0 : result.errors) {
      return json({ errors: result.errors }, { status: result.status || 400 });
    }
    return new Response(void 0, {
      status: 204,
      headers: (result == null ? void 0 : result.location) ? { location: result.location } : void 0
    });
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      return redirect_response(error2.status, error2.location);
    }
    if (!(error2 instanceof HttpError)) {
      options.handle_error(error2, event);
    }
    return json(error_to_pojo(error2, options.get_stack), {
      status: error2 instanceof HttpError ? error2.status : 500
    });
  }
}
function redirect_response(status, location) {
  return new Response(void 0, {
    status,
    headers: { location }
  });
}
function compact(array2) {
  const compacted = [];
  for (const item of array2) {
    if (item) {
      compacted.push(item);
    }
  }
  return compacted;
}
function exec(match, names, types, matchers) {
  const params = {};
  for (let i = 0; i < names.length; i += 1) {
    const name4 = names[i];
    const type = types[i];
    const value = match[i + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name4] = value;
  }
  return params;
}
var DATA_SUFFIX = "/__data.json";
var default_transform = ({ html }) => html;
async function respond(request, options, state) {
  var _a, _b, _c, _d;
  let url = new URL(request.url);
  const { parameter, allowed } = options.method_override;
  const method_override = (_a = url.searchParams.get(parameter)) == null ? void 0 : _a.toUpperCase();
  if (method_override) {
    if (request.method === "POST") {
      if (allowed.includes(method_override)) {
        request = new Proxy(request, {
          get: (target, property, _receiver) => {
            if (property === "method")
              return method_override;
            return Reflect.get(target, property, target);
          }
        });
      } else {
        const verb = allowed.length === 0 ? "enabled" : "allowed";
        const body = `${parameter}=${method_override} is not ${verb}. See https://kit.svelte.dev/docs/configuration#methodoverride`;
        return new Response(body, {
          status: 400
        });
      }
    } else {
      throw new Error(`${parameter}=${method_override} is only allowed with POST requests`);
    }
  }
  let decoded;
  try {
    decoded = decodeURI(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_b = state.prerendering) == null ? void 0 : _b.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request) {
    const data_suffix_length = DATA_SUFFIX.length - (options.trailing_slash === "always" ? 1 : 0);
    decoded = decoded.slice(0, -data_suffix_length) || "/";
    url = new URL(url.origin + url.pathname.slice(0, -data_suffix_length) + url.search);
  }
  if (!((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if (route) {
    if (route.type === "page") {
      const normalized = normalize_path(url.pathname, options.trailing_slash);
      if (normalized !== url.pathname && !((_d = state.prerendering) == null ? void 0 : _d.fallback)) {
        return new Response(void 0, {
          status: 301,
          headers: {
            "x-sveltekit-normalize": "1",
            location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
          }
        });
      }
    } else if (is_data_request) {
      return new Response(void 0, {
        status: 404
      });
    }
  }
  const headers = {};
  const cookies = [];
  const event = {
    get clientAddress() {
      if (!state.getClientAddress) {
        throw new Error(
          `${"@sveltejs/adapter-cloudflare"} does not specify getClientAddress. Please raise an issue`
        );
      }
      Object.defineProperty(event, "clientAddress", {
        value: state.getClientAddress()
      });
      return event.clientAddress;
    },
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          const new_cookies = Array.isArray(value) ? value : [value];
          for (const cookie2 of new_cookies) {
            if (cookies.includes(cookie2)) {
              throw new Error(`"${key2}" header already has cookie with same value`);
            }
            cookies.push(cookie2);
          }
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = value;
          }
        }
      }
    },
    url
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error(
        "To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details
      );
    }
  };
  Object.defineProperties(event, {
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    ssr: true,
    transformPageChunk: default_transform
  };
  try {
    const response = await options.hooks.handle({
      event,
      resolve: async (event2, opts) => {
        var _a2;
        if (opts) {
          if (opts.transformPage) {
            throw new Error(
              "transformPage has been replaced by transformPageChunk \u2014 see https://github.com/sveltejs/kit/pull/5657 for more information"
            );
          }
          resolve_opts = {
            ssr: opts.ssr !== false,
            transformPageChunk: opts.transformPageChunk || default_transform
          };
        }
        if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
          return await render_response({
            event: event2,
            options,
            state,
            page_config: { router: true, hydrate: true },
            status: 200,
            error: null,
            branch: [],
            fetched: [],
            validation_errors: void 0,
            cookies: [],
            resolve_opts: {
              ...resolve_opts,
              ssr: false
            }
          });
        }
        if (route) {
          let response2;
          if (is_data_request && route.type === "page") {
            try {
              let error2;
              const promises = [...route.layouts, route.leaf].map(async (n2, i) => {
                try {
                  if (error2)
                    return;
                  const node = n2 == void 0 ? n2 : await options.manifest._.nodes[n2]();
                  return {
                    data: await load_server_data({
                      dev: options.dev,
                      event: event2,
                      node,
                      parent: async () => {
                        const data = {};
                        for (let j2 = 0; j2 < i; j2 += 1) {
                          const parent = await promises[j2];
                          if (!parent || parent instanceof HttpError || "error" in parent) {
                            return data;
                          }
                          Object.assign(data, parent.data);
                        }
                        return data;
                      }
                    })
                  };
                } catch (e3) {
                  error2 = normalize_error(e3);
                  if (error2 instanceof Redirect) {
                    throw error2;
                  }
                  if (error2 instanceof HttpError) {
                    return error2;
                  }
                  options.handle_error(error2, event2);
                  return {
                    error: error_to_pojo(error2, options.get_stack)
                  };
                }
              });
              response2 = json({
                type: "data",
                nodes: await Promise.all(promises)
              });
            } catch (e3) {
              const error2 = normalize_error(e3);
              if (error2 instanceof Redirect) {
                response2 = json({
                  type: "redirect",
                  location: error2.location
                });
              } else {
                response2 = json(error_to_pojo(error2, options.get_stack), { status: 500 });
              }
            }
          } else {
            response2 = route.type === "endpoint" ? await render_endpoint(event2, route) : await render_page(event2, route, options, state, resolve_opts);
          }
          if (!is_data_request) {
            for (const key2 in headers) {
              const value = headers[key2];
              response2.headers.set(key2, value);
            }
          }
          for (const cookie2 of cookies) {
            response2.headers.append("set-cookie", cookie2);
          }
          if (response2.status === 200 && response2.headers.has("etag")) {
            let if_none_match_value = request.headers.get("if-none-match");
            if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
              if_none_match_value = if_none_match_value.substring(2);
            }
            const etag = response2.headers.get("etag");
            if (if_none_match_value === etag) {
              const headers2 = new Headers({ etag });
              for (const key2 of ["cache-control", "content-location", "date", "expires", "vary"]) {
                const value = response2.headers.get(key2);
                if (value)
                  headers2.set(key2, value);
              }
              return new Response(void 0, {
                status: 304,
                headers: headers2
              });
            }
          }
          return response2;
        }
        if (state.initiator === GENERIC_ERROR) {
          return new Response("Internal Server Error", {
            status: 500
          });
        }
        if (!state.initiator) {
          return await respond_with_error({
            event: event2,
            options,
            state,
            status: 404,
            error: new Error(`Not found: ${event2.url.pathname}`),
            resolve_opts
          });
        }
        if (state.prerendering) {
          return new Response("not found", { status: 404 });
        }
        return await fetch(request);
      },
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response && !(response instanceof Response)) {
      throw new Error("handle must return a Response object" + details);
    }
    return response;
  } catch (e3) {
    const error2 = coalesce_to_error(e3);
    options.handle_error(error2, event);
    const type = negotiate(event.request.headers.get("accept") || "text/html", [
      "text/html",
      "application/json"
    ]);
    if (is_data_request || type === "application/json") {
      return new Response(serialize_error(error2, options.get_stack), {
        status: 500,
        headers: { "content-type": "application/json; charset=utf-8" }
      });
    }
    try {
      return await respond_with_error({
        event,
        options,
        state,
        status: 500,
        error: error2,
        resolve_opts
      });
    } catch (e22) {
      const error3 = coalesce_to_error(e22);
      return new Response(options.dev ? error3.stack : error3.message, {
        status: 500
      });
    }
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width" />\n		' + head + "\n	</head>\n	<body>\n		<div>" + body + "</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      dev: false,
      get_stack: (error2) => String(error2),
      handle_error: (error2, event) => {
        this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        });
        error2.stack = this.options.get_stack(error2);
      },
      hooks: null,
      hydrate: true,
      manifest: manifest2,
      method_override: { "parameter": "_method", "allowed": [] },
      paths: { base, assets },
      prerender: {
        default: false,
        enabled: true
      },
      public_env: {},
      read,
      root: Root,
      service_worker: null,
      router: true,
      template,
      template_contains_nonce: false,
      trailing_slash: "never"
    };
  }
  init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    if (!this.options.hooks) {
      const module = await Promise.resolve().then(() => (init_hooks(), hooks_exports));
      this.options.hooks = {
        handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
        handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
        externalFetch: module.externalFetch || fetch
      };
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/cloudflare-tmp/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set([".DS_Store", "login-bg-video-blurred.mp4"]),
  mimeTypes: { ".mp4": "video/mp4" },
  _: {
    entry: { "file": "_app/immutable/start-ed3f57d0.js", "imports": ["_app/immutable/start-ed3f57d0.js", "_app/immutable/chunks/index-1f1b8166.js", "_app/immutable/chunks/singletons-8251c4ac.js", "_app/immutable/chunks/index-4375fd2f.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6)),
      () => Promise.resolve().then(() => (init__7(), __exports7))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        errors: [1],
        layouts: [0],
        leaf: 3
      },
      {
        type: "page",
        id: "etc",
        pattern: /^\/etc\/?$/,
        names: [],
        types: [],
        errors: [1],
        layouts: [0],
        leaf: 4
      },
      {
        type: "page",
        id: "login",
        pattern: /^\/login\/?$/,
        names: [],
        types: [],
        errors: [1],
        layouts: [2],
        leaf: 5
      },
      {
        type: "page",
        id: "plans",
        pattern: /^\/plans\/?$/,
        names: [],
        types: [],
        errors: [1],
        layouts: [0],
        leaf: 6
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
var prerendered = /* @__PURE__ */ new Set([]);

// .svelte-kit/cloudflare-tmp/_worker.js
async function e(e3, t2) {
  let n2 = "string" != typeof t2 && "HEAD" === t2.method;
  n2 && (t2 = new Request(t2, { method: "GET" }));
  let a2 = await e3.match(t2);
  return n2 && a2 && (a2 = new Response(null, a2)), a2;
}
function t(e3, t2, n2, o2) {
  return ("string" == typeof t2 || "GET" === t2.method) && a(n2) && (n2.headers.has("Set-Cookie") && (n2 = new Response(n2.body, n2)).headers.append("Cache-Control", "private=Set-Cookie"), o2.waitUntil(e3.put(t2, n2.clone()))), n2;
}
var n = /* @__PURE__ */ new Set([200, 203, 204, 300, 301, 404, 405, 410, 414, 501]);
function a(e3) {
  if (!n.has(e3.status) || ~(e3.headers.get("Vary") || "").indexOf("*"))
    return false;
  let t2 = e3.headers.get("Cache-Control") || "";
  return !/(private|no-cache|no-store)/i.test(t2);
}
function o(n2) {
  return async function(a2, o2) {
    let r2 = await e(n2, a2);
    if (r2)
      return r2;
    o2.defer((e3) => {
      t(n2, a2, e3, o2);
    });
  };
}
var s2 = caches.default;
var e2 = t.bind(0, s2);
var c = e.bind(0, s2);
var r = o.bind(0, s2);
var server = new Server(manifest);
var prefix = `/${manifest.appDir}/`;
var worker = {
  async fetch(req, env, context) {
    await server.init({ env });
    let pragma = req.headers.get("cache-control") || "";
    let res = !pragma.includes("no-cache") && await c(req);
    if (res)
      return res;
    let { pathname } = new URL(req.url);
    if (pathname.startsWith(prefix)) {
      res = await env.ASSETS.fetch(req);
      const cache_control = pathname.startsWith(prefix + "immutable/") ? "public, immutable, max-age=31536000" : "no-cache";
      res = new Response(res.body, {
        headers: {
          "cache-control": cache_control,
          "content-type": res.headers.get("content-type"),
          "x-robots-tag": "noindex"
        }
      });
    } else {
      pathname = pathname.replace(/\/$/, "") || "/";
      let file8 = pathname.substring(1);
      try {
        file8 = decodeURIComponent(file8);
      } catch (err) {
      }
      if (manifest.assets.has(file8) || manifest.assets.has(file8 + "/index.html") || prerendered.has(pathname)) {
        res = await env.ASSETS.fetch(req);
      } else {
        res = await server.respond(req, {
          platform: { env, context, caches },
          getClientAddress() {
            return req.headers.get("cf-connecting-ip");
          }
        });
      }
    }
    pragma = res.headers.get("cache-control");
    return pragma ? e2(req, res, context) : res;
  }
};
var worker_default = worker;
export {
  worker_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=_worker.js.map
