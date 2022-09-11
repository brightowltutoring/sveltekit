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
function set_current_component(component7) {
  current_component = component7;
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
function validate_component(component7, name4) {
  if (!component7 || !component7.$$render) {
    if (name4 === "svelte:component")
      name4 += " this={...}";
    throw new Error(`<${name4}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component7;
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
          code: Array.from(result.css).map((css4) => css4.code).join("\n"),
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
      var index7 = 0;
      while (index7 < str.length) {
        var eqIdx = str.indexOf("=", index7);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index7);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index7 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index7, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index7 = endIdx + 1;
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
var isLoggedIn, lastScrollY, scrollY, startScrollY, instDeltaY, scrollYMax, windowInnerHeight, innerWidth, isXs, routes, isDarkMode, redirectAfterLoginTimeOut, redirectSetInterval, light_darkened, dark_lightened;
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
    derived([scrollY, scrollYMax], ([$scrollY, $scrollYMax]) => {
      return 1 - $scrollY / $scrollYMax;
    });
    windowInnerHeight = writable(0);
    innerWidth = writable(0);
    isXs = derived(innerWidth, ($innerWidth) => $innerWidth < 640);
    derived(isXs, ($isXs) => $isXs ? customFade : () => {
    });
    derived(isXs, ($isXs) => $isXs ? customFade : () => {
    });
    routes = writable({
      home: {
        name: "Home",
        href: "/",
        title: "Thinksolve.io \u{1F4AB}",
        isCurrent: false
      },
      plans: {
        name: "Plans",
        href: "/plans",
        title: "Plans",
        isCurrent: false
      },
      mdsvex_and_katex: {
        name: "mdsvex-and-katex",
        href: "/mdsvex-and-katex",
        title: "mdsvex-and-katex",
        isCurrent: false
      },
      login: {
        name: "Login",
        href: "/login",
        title: "Login \u{1F680}",
        isCurrent: false
      }
    });
    isDarkMode = writable(false);
    redirectAfterLoginTimeOut = writable("");
    redirectSetInterval = writable("");
    light_darkened = "rgb(242,247,250)";
    dark_lightened = "rgb(38, 35, 51)";
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
var Navitem, hamburgerWidth, hamburgerPattyHeight, hamburgerColor, Hamburger, LightDarkMode, Navbar, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    init_stores();
    init_store();
    init_index2();
    Navitem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_isDarkMode;
      let $$unsubscribe_isXs;
      let $page, $$unsubscribe_page;
      let $$unsubscribe_redirectAfterLoginTimeOut;
      let $$unsubscribe_redirectSetInterval;
      $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => value);
      $$unsubscribe_isXs = subscribe(isXs, (value) => value);
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_redirectAfterLoginTimeOut = subscribe(redirectAfterLoginTimeOut, (value) => value);
      $$unsubscribe_redirectSetInterval = subscribe(redirectSetInterval, (value) => value);
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
        for (let key2 in routes2) {
          let condition = key2 == $page.routeId || $page.routeId.length == 0 && key2 == "home";
          routes2[key2].isCurrent = condition;
        }
      }
      $$unsubscribe_isDarkMode();
      $$unsubscribe_isXs();
      $$unsubscribe_page();
      $$unsubscribe_redirectAfterLoginTimeOut();
      $$unsubscribe_redirectSetInterval();
      return `
<button class="${escape(bool && `${btnColor} sm:border-b-1 sm:rounded sm:px-3 sm:py-1`, true) + " flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent " + escape(`${btnColorHover}`, true) + " sm:hover:rounded sm:hover:py-1 sm:hover:px-3 duration-300 hover:shadow-lg"}">${escape(content)}</button>`;
    });
    hamburgerWidth = 35;
    hamburgerPattyHeight = 2;
    hamburgerColor = "bg-red-500";
    Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $scrollY, $$unsubscribe_scrollY;
      let $instDeltaY, $$unsubscribe_instDeltaY;
      let $isXs, $$unsubscribe_isXs;
      let $$unsubscribe_lastScrollY;
      $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
      $$unsubscribe_instDeltaY = subscribe(instDeltaY, (value) => $instDeltaY = value);
      $$unsubscribe_isXs = subscribe(isXs, (value) => $isXs = value);
      $$unsubscribe_lastScrollY = subscribe(lastScrollY, (value) => value);
      let { mobileOpen } = $$props;
      let { unique } = $$props;
      const hamburgerHeight = Math.floor(0.7 * hamburgerWidth);
      const translY = Math.floor(0.5 * (hamburgerHeight - hamburgerPattyHeight));
      const angle = 45 + 1 * 90;
      let variableTop = "top-6";
      if ($$props.mobileOpen === void 0 && $$bindings.mobileOpen && mobileOpen !== void 0)
        $$bindings.mobileOpen(mobileOpen);
      if ($$props.unique === void 0 && $$bindings.unique && unique !== void 0)
        $$bindings.unique(unique);
      {
        if ($isXs && !mobileOpen) {
          if ($instDeltaY > 0 && $scrollY > 250)
            variableTop = "-top-20 ";
          if ($instDeltaY < 0 && $scrollY > 250)
            variableTop = "top-6";
        }
      }
      $$unsubscribe_scrollY();
      $$unsubscribe_instDeltaY();
      $$unsubscribe_isXs();
      $$unsubscribe_lastScrollY();
      return `<main>
  <hamburger-container class="${"sm:hidden z-50 text-4xl fixed right-6 " + escape(variableTop, true) + " transition-all duration-300"}"><hamburger style="${"width: " + escape(hamburgerWidth, true) + "px; height:" + escape(hamburgerHeight, true) + "px"}" class="${"relative flex flex-col justify-between"}"><div style="${"height:" + escape(hamburgerPattyHeight, true) + "px; " + escape(mobileOpen && `transform: translateY(${translY}px) rotate(-${angle}deg)`, true)}" class="${escape(hamburgerColor, true) + " transition duration-300 rounded"}"></div>

      <div style="${"height:" + escape(hamburgerPattyHeight, true) + "px; " + escape(mobileOpen && `transform: scale(0)`, true)}" class="${escape(hamburgerColor, true) + " transition duration-300 rounded"}"></div>

      <div style="${"height:" + escape(hamburgerPattyHeight, true) + "px; " + escape(mobileOpen && `transform: translateY(-${translY}px) rotate(${angle}deg)`, true)}" class="${"" + escape(hamburgerColor, true) + " transition duration-300 rounded"}"></div></hamburger></hamburger-container>

  
  
  

  
  </main>`;
    });
    LightDarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $isDarkMode, $$unsubscribe_isDarkMode;
      $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
      $$unsubscribe_isDarkMode();
      return `<button>${$isDarkMode ? `<svg aria-label="${"Sun"}" id="${"lightIcon"}" height="${"24"}" width="${"24"}" viewBox="${"0 0 182 182"}" style="${"transform: scale(1);"}"><path fill="${"rgb(247,247,247)"}" d="${"M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"}"></path></svg>` : `<svg aria-label="${"Moon"}" id="${"darkIcon"}" height="${"24"}" width="${"24"}" style="${"transform: scale(1);"}" data-metatip="${"true"}"><path d="${"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"}"></path></svg>`}</button>`;
    });
    Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $routes, $$unsubscribe_routes;
      let $isLoggedIn, $$unsubscribe_isLoggedIn;
      let $scrollY, $$unsubscribe_scrollY;
      let $isXs, $$unsubscribe_isXs;
      let $isDarkMode, $$unsubscribe_isDarkMode;
      let $scaleRocket, $$unsubscribe_scaleRocket;
      $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
      $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
      $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
      $$unsubscribe_isXs = subscribe(isXs, (value) => $isXs = value);
      $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
      let scaleRocket = spring(1, { stiffness: 0.1, damping: 0.25 });
      $$unsubscribe_scaleRocket = subscribe(scaleRocket, (value) => $scaleRocket = value);
      let hueRocket = 0;
      let { mobileHamburgerClosed } = $$props;
      let mobileOpen = "";
      let unique;
      let btnColor = "sm:bg-red-300 ";
      let btnColorHover = "sm:hover:bg-red-300";
      if ($$props.mobileHamburgerClosed === void 0 && $$bindings.mobileHamburgerClosed && mobileHamburgerClosed !== void 0)
        $$bindings.mobileHamburgerClosed(mobileHamburgerClosed);
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        {
          if ($isLoggedIn) {
            hueRocket = $isDarkMode ? 0.75 : 0;
          }
        }
        {
          if ($isLoggedIn && !$isXs) {
            scaleRocket.set(1 + 0.5 * Math.sin($scrollY));
          }
        }
        mobileHamburgerClosed = mobileOpen;
        {
          $isLoggedIn ? set_store_value(routes, $routes.login.name = "\u{1F680}", $routes) : set_store_value(routes, $routes.login.name = "Login", $routes);
        }
        $$rendered = `${validate_component(Hamburger, "Hamburger").$$render(
          $$result,
          { mobileOpen, unique },
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


<logo-and-navbar class="${"flex sm:justify-between items-center justify-center sm:w-full h-[85vh] sm:h-16 sm:inline-flex " + escape(!mobileOpen && "hidden", true)}"><div class="${"translate-y-[0.2rem] translate-x-3 hidden sm:block text-xl font-Poppins font-semibold pl-[5%] sm:pr-20 sm:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent"}">THINKSOLVE
    </div>

  <nav><ul class="${"flex flex-col sm:flex-row text-3xl sm:text-lg items-center"}">${$isXs && mobileOpen ? `<li class="${"pb-3 "}">${validate_component(LightDarkMode, "LightDarkMode").$$render($$result, {}, {}, {})}</li>` : ``}

        ${each(Object.keys($routes), (KEY) => {
          return `<li class="${"py-3 sm:p-1 "}"${add_attribute("style", KEY == "login" && $isLoggedIn && `transform:scale(${$scaleRocket}); filter:hue-rotate(${hueRocket}turn)`, 0)}>${validate_component(Navitem, "Navitem").$$render(
            $$result,
            {
              href: $routes[KEY].href,
              content: $routes[KEY].name,
              mobileOpen,
              bool: $routes[KEY].isCurrent,
              routes: $routes,
              btnColor,
              btnColorHover
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
              },
              btnColor: ($$value) => {
                btnColor = $$value;
                $$settled = false;
              },
              btnColorHover: ($$value) => {
                btnColorHover = $$value;
                $$settled = false;
              }
            },
            {}
          )}
          </li>`;
        })}

        ${!$isXs ? `<li class="${"px-3 translate-y-1"}">${validate_component(LightDarkMode, "LightDarkMode").$$render($$result, {}, {}, {})}</li>` : ``}</ul></nav></logo-and-navbar>`;
      } while (!$$settled);
      $$unsubscribe_routes();
      $$unsubscribe_isLoggedIn();
      $$unsubscribe_scrollY();
      $$unsubscribe_isXs();
      $$unsubscribe_isDarkMode();
      $$unsubscribe_scaleRocket();
      return $$rendered;
    });
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $instDeltaY, $$unsubscribe_instDeltaY;
      let $scrollY, $$unsubscribe_scrollY;
      let $isXs, $$unsubscribe_isXs;
      let $$unsubscribe_isLoggedIn;
      let $$unsubscribe_redirectSetInterval;
      let $$unsubscribe_redirectAfterLoginTimeOut;
      let $$unsubscribe_windowInnerHeight;
      let $$unsubscribe_scrollYMax;
      let $$unsubscribe_innerWidth;
      let $routes, $$unsubscribe_routes;
      let $page, $$unsubscribe_page;
      $$unsubscribe_instDeltaY = subscribe(instDeltaY, (value) => $instDeltaY = value);
      $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
      $$unsubscribe_isXs = subscribe(isXs, (value) => $isXs = value);
      $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
      $$unsubscribe_redirectSetInterval = subscribe(redirectSetInterval, (value) => value);
      $$unsubscribe_redirectAfterLoginTimeOut = subscribe(redirectAfterLoginTimeOut, (value) => value);
      $$unsubscribe_windowInnerHeight = subscribe(windowInnerHeight, (value) => value);
      $$unsubscribe_scrollYMax = subscribe(scrollYMax, (value) => value);
      $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => value);
      $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      let mobileHamburgerClosed = true;
      let jankytown = "";
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        {
          if (!$isXs) {
            if ($scrollY == 0)
              jankytown = "top-0";
            if ($scrollY > 10 && $instDeltaY > 0)
              jankytown = "backdrop-blur-md -top-20";
            if ($scrollY > 200 && $instDeltaY > 0)
              jankytown = "backdrop-blur-md -top-20";
            if ($scrollY > 200 && $instDeltaY < 0)
              jankytown = "backdrop-blur-3xl top-0";
          }
        }
        $$rendered = `

${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-y8jogi"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin data-svelte="svelte-y8jogi"><link href="${"https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Poppins:wght@100&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-y8jogi">${each(Object.keys($routes), (key2) => {
          return `${$page.routeId == "" ? `${$$result.title = `<title>${escape($routes.home.title)}</title>`, ""}` : `${$page.routeId == key2 ? `${$$result.title = `<title>${escape($routes[key2].title)}</title>`, ""}` : ``}`}`;
        })}`, ""}


<div class="${"px-[4%] sm:px-[7%] pt-2 sticky " + escape(jankytown, true) + " z-50 duration-300"}">${validate_component(Navbar, "Navbar").$$render(
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

<div class="${"h-[100vh] px-[4%] sm:px-[7%] pt-20 sm:block " + escape(mobileHamburgerClosed && $isXs && "hidden opacity-0", true) + " transition-all duration-500"}">${slots.default ? slots.default({}) : ``}</div>`;
      } while (!$$settled);
      $$unsubscribe_instDeltaY();
      $$unsubscribe_scrollY();
      $$unsubscribe_isXs();
      $$unsubscribe_isLoggedIn();
      $$unsubscribe_redirectSetInterval();
      $$unsubscribe_redirectAfterLoginTimeOut();
      $$unsubscribe_windowInnerHeight();
      $$unsubscribe_scrollYMax();
      $$unsubscribe_innerWidth();
      $$unsubscribe_routes();
      $$unsubscribe_page();
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
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-d6dee498.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-d6dee498.js", "_app/immutable/chunks/index-c3c96927.js", "_app/immutable/chunks/index-406aa5de.js", "_app/immutable/chunks/stores-9f329554.js", "_app/immutable/chunks/singletons-0ce39104.js", "_app/immutable/chunks/index-b80a8d4d.js", "_app/immutable/chunks/store-b6e0dbc0.js", "_app/immutable/chunks/navigation-a4fa1ffd.js"];
    stylesheets = ["_app/immutable/assets/+layout-926114d8.css"];
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
    file2 = "_app/immutable/components/error.svelte-db3e30c4.js";
    imports2 = ["_app/immutable/components/error.svelte-db3e30c4.js", "_app/immutable/chunks/index-c3c96927.js", "_app/immutable/chunks/stores-9f329554.js", "_app/immutable/chunks/singletons-0ce39104.js", "_app/immutable/chunks/index-b80a8d4d.js"];
    stylesheets2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.js
var page_exports = {};
var init_page = __esm({
  ".svelte-kit/output/server/entries/pages/_page.js"() {
  }
});

// node_modules/katex/dist/katex.mjs
function escape2(text2) {
  return String(text2).replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
function getDefaultValue(schema) {
  if (schema.default) {
    return schema.default;
  }
  var type = schema.type;
  var defaultType = Array.isArray(type) ? type[0] : type;
  if (typeof defaultType !== "string") {
    return defaultType.enum[0];
  }
  switch (defaultType) {
    case "boolean":
      return false;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
function scriptFromCodepoint(codepoint) {
  for (var i = 0; i < scriptData.length; i++) {
    var script = scriptData[i];
    for (var _i = 0; _i < script.blocks.length; _i++) {
      var block = script.blocks[_i];
      if (codepoint >= block[0] && codepoint <= block[1]) {
        return script.name;
      }
    }
  }
  return null;
}
function supportedCodepoint(codepoint) {
  for (var i = 0; i < allBlocks.length; i += 2) {
    if (codepoint >= allBlocks[i] && codepoint <= allBlocks[i + 1]) {
      return true;
    }
  }
  return false;
}
function setFontMetrics(fontName, metrics) {
  fontMetricsData[fontName] = metrics;
}
function getCharacterMetrics(character, font, mode) {
  if (!fontMetricsData[font]) {
    throw new Error("Font metrics not found for font: " + font + ".");
  }
  var ch = character.charCodeAt(0);
  var metrics = fontMetricsData[font][ch];
  if (!metrics && character[0] in extraCharacterMap) {
    ch = extraCharacterMap[character[0]].charCodeAt(0);
    metrics = fontMetricsData[font][ch];
  }
  if (!metrics && mode === "text") {
    if (supportedCodepoint(ch)) {
      metrics = fontMetricsData[font][77];
    }
  }
  if (metrics) {
    return {
      depth: metrics[0],
      height: metrics[1],
      italic: metrics[2],
      skew: metrics[3],
      width: metrics[4]
    };
  }
}
function getGlobalMetrics(size) {
  var sizeIndex;
  if (size >= 5) {
    sizeIndex = 0;
  } else if (size >= 3) {
    sizeIndex = 1;
  } else {
    sizeIndex = 2;
  }
  if (!fontMetricsBySizeIndex[sizeIndex]) {
    var metrics = fontMetricsBySizeIndex[sizeIndex] = {
      cssEmPerMu: sigmasAndXis.quad[sizeIndex] / 18
    };
    for (var key2 in sigmasAndXis) {
      if (sigmasAndXis.hasOwnProperty(key2)) {
        metrics[key2] = sigmasAndXis[key2][sizeIndex];
      }
    }
  }
  return fontMetricsBySizeIndex[sizeIndex];
}
function assertSymbolDomNode(group) {
  if (group instanceof SymbolNode) {
    return group;
  } else {
    throw new Error("Expected symbolNode but got " + String(group) + ".");
  }
}
function assertSpan(group) {
  if (group instanceof Span) {
    return group;
  } else {
    throw new Error("Expected span<HtmlDomNode> but got " + String(group) + ".");
  }
}
function defineSymbol(mode, font, group, replace, name4, acceptUnicodeChar) {
  symbols[mode][name4] = {
    font,
    group,
    replace
  };
  if (acceptUnicodeChar && replace) {
    symbols[mode][replace] = symbols[mode][name4];
  }
}
function defineFunction(_ref) {
  var {
    type,
    names,
    props,
    handler,
    htmlBuilder: htmlBuilder3,
    mathmlBuilder: mathmlBuilder3
  } = _ref;
  var data = {
    type,
    numArgs: props.numArgs,
    argTypes: props.argTypes,
    allowedInArgument: !!props.allowedInArgument,
    allowedInText: !!props.allowedInText,
    allowedInMath: props.allowedInMath === void 0 ? true : props.allowedInMath,
    numOptionalArgs: props.numOptionalArgs || 0,
    infix: !!props.infix,
    primitive: !!props.primitive,
    handler
  };
  for (var i = 0; i < names.length; ++i) {
    _functions[names[i]] = data;
  }
  if (type) {
    if (htmlBuilder3) {
      _htmlGroupBuilders[type] = htmlBuilder3;
    }
    if (mathmlBuilder3) {
      _mathmlGroupBuilders[type] = mathmlBuilder3;
    }
  }
}
function defineFunctionBuilders(_ref2) {
  var {
    type,
    htmlBuilder: htmlBuilder3,
    mathmlBuilder: mathmlBuilder3
  } = _ref2;
  defineFunction({
    type,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: htmlBuilder3,
    mathmlBuilder: mathmlBuilder3
  });
}
function buildHTMLUnbreakable(children, options) {
  var body = makeSpan$1(["base"], children, options);
  var strut = makeSpan$1(["strut"]);
  strut.style.height = makeEm(body.height + body.depth);
  if (body.depth) {
    strut.style.verticalAlign = makeEm(-body.depth);
  }
  body.children.unshift(strut);
  return body;
}
function buildHTML(tree, options) {
  var tag = null;
  if (tree.length === 1 && tree[0].type === "tag") {
    tag = tree[0].tag;
    tree = tree[0].body;
  }
  var expression = buildExpression$1(tree, options, "root");
  var eqnNum;
  if (expression.length === 2 && expression[1].hasClass("tag")) {
    eqnNum = expression.pop();
  }
  var children = [];
  var parts = [];
  for (var i = 0; i < expression.length; i++) {
    parts.push(expression[i]);
    if (expression[i].hasClass("mbin") || expression[i].hasClass("mrel") || expression[i].hasClass("allowbreak")) {
      var nobreak = false;
      while (i < expression.length - 1 && expression[i + 1].hasClass("mspace") && !expression[i + 1].hasClass("newline")) {
        i++;
        parts.push(expression[i]);
        if (expression[i].hasClass("nobreak")) {
          nobreak = true;
        }
      }
      if (!nobreak) {
        children.push(buildHTMLUnbreakable(parts, options));
        parts = [];
      }
    } else if (expression[i].hasClass("newline")) {
      parts.pop();
      if (parts.length > 0) {
        children.push(buildHTMLUnbreakable(parts, options));
        parts = [];
      }
      children.push(expression[i]);
    }
  }
  if (parts.length > 0) {
    children.push(buildHTMLUnbreakable(parts, options));
  }
  var tagChild;
  if (tag) {
    tagChild = buildHTMLUnbreakable(buildExpression$1(tag, options, true));
    tagChild.classes = ["tag"];
    children.push(tagChild);
  } else if (eqnNum) {
    children.push(eqnNum);
  }
  var htmlNode = makeSpan$1(["katex-html"], children);
  htmlNode.setAttribute("aria-hidden", "true");
  if (tagChild) {
    var strut = tagChild.children[0];
    strut.style.height = makeEm(htmlNode.height + htmlNode.depth);
    if (htmlNode.depth) {
      strut.style.verticalAlign = makeEm(-htmlNode.depth);
    }
  }
  return htmlNode;
}
function newDocumentFragment(children) {
  return new DocumentFragment(children);
}
function buildMathML(tree, texExpression, options, isDisplayMode, forMathmlOnly) {
  var expression = buildExpression2(tree, options);
  var wrapper;
  if (expression.length === 1 && expression[0] instanceof MathNode && utils.contains(["mrow", "mtable"], expression[0].type)) {
    wrapper = expression[0];
  } else {
    wrapper = new mathMLTree.MathNode("mrow", expression);
  }
  var annotation = new mathMLTree.MathNode("annotation", [new mathMLTree.TextNode(texExpression)]);
  annotation.setAttribute("encoding", "application/x-tex");
  var semantics = new mathMLTree.MathNode("semantics", [wrapper, annotation]);
  var math2 = new mathMLTree.MathNode("math", [semantics]);
  math2.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML");
  if (isDisplayMode) {
    math2.setAttribute("display", "block");
  }
  var wrapperClass = forMathmlOnly ? "katex" : "katex-mathml";
  return buildCommon.makeSpan([wrapperClass], [math2]);
}
function assertNodeType(node, type) {
  if (!node || node.type !== type) {
    throw new Error("Expected node of type " + type + ", but got " + (node ? "node of type " + node.type : String(node)));
  }
  return node;
}
function assertSymbolNodeType(node) {
  var typedNode = checkSymbolNodeType(node);
  if (!typedNode) {
    throw new Error("Expected node of symbol group type, but got " + (node ? "node of type " + node.type : String(node)));
  }
  return typedNode;
}
function checkSymbolNodeType(node) {
  if (node && (node.type === "atom" || NON_ATOMS.hasOwnProperty(node.type))) {
    return node;
  }
  return null;
}
function htmlBuilder$9(group, options) {
  var elements = buildExpression$1(group.body, options, true);
  return makeSpan2([group.mclass], elements, options);
}
function mathmlBuilder$8(group, options) {
  var node;
  var inner2 = buildExpression2(group.body, options);
  if (group.mclass === "minner") {
    node = new mathMLTree.MathNode("mpadded", inner2);
  } else if (group.mclass === "mord") {
    if (group.isCharacterBox) {
      node = inner2[0];
      node.type = "mi";
    } else {
      node = new mathMLTree.MathNode("mi", inner2);
    }
  } else {
    if (group.isCharacterBox) {
      node = inner2[0];
      node.type = "mo";
    } else {
      node = new mathMLTree.MathNode("mo", inner2);
    }
    if (group.mclass === "mbin") {
      node.attributes.lspace = "0.22em";
      node.attributes.rspace = "0.22em";
    } else if (group.mclass === "mpunct") {
      node.attributes.lspace = "0em";
      node.attributes.rspace = "0.17em";
    } else if (group.mclass === "mopen" || group.mclass === "mclose") {
      node.attributes.lspace = "0em";
      node.attributes.rspace = "0em";
    } else if (group.mclass === "minner") {
      node.attributes.lspace = "0.0556em";
      node.attributes.width = "+0.1111em";
    }
  }
  return node;
}
function cdArrow(arrowChar, labels, parser) {
  var funcName = cdArrowFunctionName[arrowChar];
  switch (funcName) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return parser.callFunction(funcName, [labels[0]], [labels[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var leftLabel = parser.callFunction("\\\\cdleft", [labels[0]], []);
      var bareArrow = {
        type: "atom",
        text: funcName,
        mode: "math",
        family: "rel"
      };
      var sizedArrow = parser.callFunction("\\Big", [bareArrow], []);
      var rightLabel = parser.callFunction("\\\\cdright", [labels[1]], []);
      var arrowGroup = {
        type: "ordgroup",
        mode: "math",
        body: [leftLabel, sizedArrow, rightLabel]
      };
      return parser.callFunction("\\\\cdparent", [arrowGroup], []);
    }
    case "\\\\cdlongequal":
      return parser.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var arrow = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return parser.callFunction("\\Big", [arrow], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function parseCD(parser) {
  var parsedRows = [];
  parser.gullet.beginGroup();
  parser.gullet.macros.set("\\cr", "\\\\\\relax");
  parser.gullet.beginGroup();
  while (true) {
    parsedRows.push(parser.parseExpression(false, "\\\\"));
    parser.gullet.endGroup();
    parser.gullet.beginGroup();
    var next = parser.fetch().text;
    if (next === "&" || next === "\\\\") {
      parser.consume();
    } else if (next === "\\end") {
      if (parsedRows[parsedRows.length - 1].length === 0) {
        parsedRows.pop();
      }
      break;
    } else {
      throw new ParseError("Expected \\\\ or \\cr or \\end", parser.nextToken);
    }
  }
  var row = [];
  var body = [row];
  for (var i = 0; i < parsedRows.length; i++) {
    var rowNodes = parsedRows[i];
    var cell = newCell();
    for (var j2 = 0; j2 < rowNodes.length; j2++) {
      if (!isStartOfArrow(rowNodes[j2])) {
        cell.body.push(rowNodes[j2]);
      } else {
        row.push(cell);
        j2 += 1;
        var arrowChar = assertSymbolNodeType(rowNodes[j2]).text;
        var labels = new Array(2);
        labels[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        };
        labels[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        };
        if ("=|.".indexOf(arrowChar) > -1)
          ;
        else if ("<>AV".indexOf(arrowChar) > -1) {
          for (var labelNum = 0; labelNum < 2; labelNum++) {
            var inLabel = true;
            for (var k = j2 + 1; k < rowNodes.length; k++) {
              if (isLabelEnd(rowNodes[k], arrowChar)) {
                inLabel = false;
                j2 = k;
                break;
              }
              if (isStartOfArrow(rowNodes[k])) {
                throw new ParseError("Missing a " + arrowChar + " character to complete a CD arrow.", rowNodes[k]);
              }
              labels[labelNum].body.push(rowNodes[k]);
            }
            if (inLabel) {
              throw new ParseError("Missing a " + arrowChar + " character to complete a CD arrow.", rowNodes[j2]);
            }
          }
        } else {
          throw new ParseError('Expected one of "<>AV=|." after @', rowNodes[j2]);
        }
        var arrow = cdArrow(arrowChar, labels, parser);
        var wrappedArrow = {
          type: "styling",
          body: [arrow],
          mode: "math",
          style: "display"
        };
        row.push(wrappedArrow);
        cell = newCell();
      }
    }
    if (i % 2 === 0) {
      row.push(cell);
    } else {
      row.shift();
    }
    row = [];
    body.push(row);
  }
  parser.gullet.endGroup();
  parser.gullet.endGroup();
  var cols = new Array(body[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    postgap: 0.25
  });
  return {
    type: "array",
    mode: "math",
    body,
    arraystretch: 1,
    addJot: true,
    rowGaps: [null],
    cols,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(body.length + 1).fill([])
  };
}
function checkDelimiter(delim, context) {
  var symDelim = checkSymbolNodeType(delim);
  if (symDelim && utils.contains(delimiters, symDelim.text)) {
    return symDelim;
  } else if (symDelim) {
    throw new ParseError("Invalid delimiter '" + symDelim.text + "' after '" + context.funcName + "'", delim);
  } else {
    throw new ParseError("Invalid delimiter type '" + delim.type + "'", delim);
  }
}
function assertParsed(group) {
  if (!group.body) {
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
  }
}
function defineEnvironment(_ref) {
  var {
    type,
    names,
    props,
    handler,
    htmlBuilder: htmlBuilder3,
    mathmlBuilder: mathmlBuilder3
  } = _ref;
  var data = {
    type,
    numArgs: props.numArgs || 0,
    allowedInText: false,
    numOptionalArgs: 0,
    handler
  };
  for (var i = 0; i < names.length; ++i) {
    _environments[names[i]] = data;
  }
  if (htmlBuilder3) {
    _htmlGroupBuilders[type] = htmlBuilder3;
  }
  if (mathmlBuilder3) {
    _mathmlGroupBuilders[type] = mathmlBuilder3;
  }
}
function defineMacro(name4, body) {
  _macros[name4] = body;
}
function getHLines(parser) {
  var hlineInfo = [];
  parser.consumeSpaces();
  var nxt = parser.fetch().text;
  while (nxt === "\\hline" || nxt === "\\hdashline") {
    parser.consume();
    hlineInfo.push(nxt === "\\hdashline");
    parser.consumeSpaces();
    nxt = parser.fetch().text;
  }
  return hlineInfo;
}
function getAutoTag(name4) {
  if (name4.indexOf("ed") === -1) {
    return name4.indexOf("*") === -1;
  }
}
function parseArray(parser, _ref, style) {
  var {
    hskipBeforeAndAfter,
    addJot,
    cols,
    arraystretch,
    colSeparationType,
    autoTag,
    singleRow,
    emptySingleRow,
    maxNumCols,
    leqno
  } = _ref;
  parser.gullet.beginGroup();
  if (!singleRow) {
    parser.gullet.macros.set("\\cr", "\\\\\\relax");
  }
  if (!arraystretch) {
    var stretch = parser.gullet.expandMacroAsText("\\arraystretch");
    if (stretch == null) {
      arraystretch = 1;
    } else {
      arraystretch = parseFloat(stretch);
      if (!arraystretch || arraystretch < 0) {
        throw new ParseError("Invalid \\arraystretch: " + stretch);
      }
    }
  }
  parser.gullet.beginGroup();
  var row = [];
  var body = [row];
  var rowGaps = [];
  var hLinesBeforeRow = [];
  var tags = autoTag != null ? [] : void 0;
  function beginRow() {
    if (autoTag) {
      parser.gullet.macros.set("\\@eqnsw", "1", true);
    }
  }
  function endRow() {
    if (tags) {
      if (parser.gullet.macros.get("\\df@tag")) {
        tags.push(parser.subparse([new Token("\\df@tag")]));
        parser.gullet.macros.set("\\df@tag", void 0, true);
      } else {
        tags.push(Boolean(autoTag) && parser.gullet.macros.get("\\@eqnsw") === "1");
      }
    }
  }
  beginRow();
  hLinesBeforeRow.push(getHLines(parser));
  while (true) {
    var cell = parser.parseExpression(false, singleRow ? "\\end" : "\\\\");
    parser.gullet.endGroup();
    parser.gullet.beginGroup();
    cell = {
      type: "ordgroup",
      mode: parser.mode,
      body: cell
    };
    if (style) {
      cell = {
        type: "styling",
        mode: parser.mode,
        style,
        body: [cell]
      };
    }
    row.push(cell);
    var next = parser.fetch().text;
    if (next === "&") {
      if (maxNumCols && row.length === maxNumCols) {
        if (singleRow || colSeparationType) {
          throw new ParseError("Too many tab characters: &", parser.nextToken);
        } else {
          parser.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
        }
      }
      parser.consume();
    } else if (next === "\\end") {
      endRow();
      if (row.length === 1 && cell.type === "styling" && cell.body[0].body.length === 0 && (body.length > 1 || !emptySingleRow)) {
        body.pop();
      }
      if (hLinesBeforeRow.length < body.length + 1) {
        hLinesBeforeRow.push([]);
      }
      break;
    } else if (next === "\\\\") {
      parser.consume();
      var size = void 0;
      if (parser.gullet.future().text !== " ") {
        size = parser.parseSizeGroup(true);
      }
      rowGaps.push(size ? size.value : null);
      endRow();
      hLinesBeforeRow.push(getHLines(parser));
      row = [];
      body.push(row);
      beginRow();
    } else {
      throw new ParseError("Expected & or \\\\ or \\cr or \\end", parser.nextToken);
    }
  }
  parser.gullet.endGroup();
  parser.gullet.endGroup();
  return {
    type: "array",
    mode: parser.mode,
    addJot,
    arraystretch,
    body,
    cols,
    rowGaps,
    hskipBeforeAndAfter,
    hLinesBeforeRow,
    colSeparationType,
    tags,
    leqno
  };
}
function dCellStyle(envName) {
  if (envName.slice(0, 1) === "d") {
    return "display";
  } else {
    return "text";
  }
}
function sizingGroup(value, options, baseOptions) {
  var inner2 = buildExpression$1(value, options, false);
  var multiplier = options.sizeMultiplier / baseOptions.sizeMultiplier;
  for (var i = 0; i < inner2.length; i++) {
    var pos = inner2[i].classes.indexOf("sizing");
    if (pos < 0) {
      Array.prototype.push.apply(inner2[i].classes, options.sizingClasses(baseOptions));
    } else if (inner2[i].classes[pos + 1] === "reset-size" + options.size) {
      inner2[i].classes[pos + 1] = "reset-size" + baseOptions.size;
    }
    inner2[i].height *= multiplier;
    inner2[i].depth *= multiplier;
  }
  return buildCommon.makeFragment(inner2);
}
var SourceLocation, Token, ParseError, contains, deflt, uppercase, hyphenate, ESCAPE_LOOKUP, ESCAPE_REGEX, getBaseElem, isCharacterBox, assert, protocolFromUrl, utils, SETTINGS_SCHEMA, Settings, Style, D, Dc, T, Tc, S, Sc, SS, SSc, styles, sup, sub, fracNum, fracDen, cramp, text$1, Style$1, scriptData, allBlocks, hLinePad, sqrtMain, sqrtSize1, sqrtSize2, sqrtSize3, sqrtSize4, phasePath, sqrtTall, sqrtPath, innerPath, path, tallDelim, DocumentFragment, fontMetricsData, sigmasAndXis, extraCharacterMap, fontMetricsBySizeIndex, sizeStyleMap, sizeMultipliers, sizeAtStyle, Options, ptPerUnit, relativeUnit, validUnit, calculateSize, makeEm, createClass, initNode, toNode, toMarkup, Span, Anchor, Img, iCombinations, SymbolNode, SvgNode, PathNode, LineNode, ATOMS, NON_ATOMS, symbols, math, text, main, ams, accent, bin, close, inner, mathord, op, open, punct, rel, spacing, textord, ligatures, mathTextSymbols, ch, i, textSymbols, _ch, _i, letters, _ch2, _i2, wideChar, _ch3, _i3, _ch4, _i4, extraLatin, _ch5, _i5, wideLatinLetterData, wideNumeralData, wideCharacterFont, lookupSymbol, makeSymbol, mathsym, boldsymbol, makeOrd, canCombine, tryCombineChars, sizeElementFromChildren, makeSpan$2, makeSvgSpan, makeLineSpan, makeAnchor, makeFragment, wrapFragment, getVListChildrenAndDepth, makeVList, makeGlue, retrieveTextFontName, fontMap, svgData, staticSvg, buildCommon, thinspace, mediumspace, thickspace, spacings, tightSpacings, _functions, _htmlGroupBuilders, _mathmlGroupBuilders, normalizeArgument, ordargument, makeSpan$1, binLeftCanceller, binRightCanceller, styleMap$1, DomEnum, buildExpression$1, traverseNonSpaceNodes, checkPartialGroup, getOutermostNode, getTypeOfDomTree, makeNullDelimiter, buildGroup$1, MathNode, TextNode, SpaceNode, mathMLTree, makeText, makeRow, getVariant, buildExpression2, buildExpressionRow, buildGroup2, optionsFromSettings, displayWrap, buildTree, buildHTMLTree, stretchyCodePoint, mathMLnode, katexImagesData, groupLength, svgSpan, encloseSpan, stretchy, htmlBuilder$a, mathmlBuilder$9, NON_STRETCHY_ACCENT_REGEX, paddedNode, makeSpan2, binrelClass, cdArrowFunctionName, newCell, isStartOfArrow, isLabelEnd, htmlBuilder$8, mathmlBuilder$7, globalMap, checkControlSequence, getRHS, letCommand, getMetrics, styleWrap, centerSpan, makeSmallDelim, mathrmSize, makeLargeDelim, makeGlyphSpan, makeInner, lapInEms, lap, verts, doubleVerts, makeStackedDelim, vbPad, emPad, sqrtSvg, makeSqrtImage, stackLargeDelimiters, stackAlwaysDelimiters, stackNeverDelimiters, sizeToMaxHeight, makeSizedDelim, stackNeverDelimiterSequence, stackAlwaysDelimiterSequence, stackLargeDelimiterSequence, delimTypeToFont, traverseSequence, makeCustomSizedDelim, makeLeftRightDelim, delimiter, delimiterSizes, delimiters, htmlBuilder$7, mathmlBuilder$6, _environments, _macros, validateAmsEnvironmentContext, htmlBuilder$6, alignMap, mathmlBuilder$5, alignedHandler, environments, htmlBuilder$5, mathmlBuilder$4, fontAliases, adjustStyle, htmlBuilder$4, mathmlBuilder$3, stylArray, delimFromValue, htmlBuilder$3, mathmlBuilder$2, sizeData, chooseMathStyle, assembleSupSub, noSuccessor, htmlBuilder$2, mathmlBuilder$1, singleCharBigOps, singleCharIntegrals, htmlBuilder$1, mathmlBuilder2, sizeFuncs, htmlBuilder2, styleMap, htmlBuilderDelegate, defaultVariant, cssSpace, regularSpace, pad, textFontFamilies, textFontWeights, textFontShapes, optionsWithFont, makeVerb, functions, spaceRegexString, controlWordRegexString, controlSymbolRegexString, controlWordWhitespaceRegexString, controlSpaceRegexString, combiningDiacriticalMarkString, combiningDiacriticalMarksEndRegex, tokenRegexString, Lexer, Namespace, macros, digitToNumber, newcommand, dotsByToken, spaceAfterDots, latexRaiseA, braketHelper, implicitCommands, MacroExpander, unicodeSubRegEx, uSubsAndSups, unicodeAccents, unicodeSymbols, Parser, parseTree, render, renderToString, generateParseTree, renderError, renderToDomTree, renderToHTMLTree, katex;
var init_katex = __esm({
  "node_modules/katex/dist/katex.mjs"() {
    SourceLocation = class {
      constructor(lexer, start, end) {
        this.lexer = void 0;
        this.start = void 0;
        this.end = void 0;
        this.lexer = lexer;
        this.start = start;
        this.end = end;
      }
      static range(first, second) {
        if (!second) {
          return first && first.loc;
        } else if (!first || !first.loc || !second.loc || first.loc.lexer !== second.loc.lexer) {
          return null;
        } else {
          return new SourceLocation(first.loc.lexer, first.loc.start, second.loc.end);
        }
      }
    };
    Token = class {
      constructor(text2, loc) {
        this.text = void 0;
        this.loc = void 0;
        this.noexpand = void 0;
        this.treatAsRelax = void 0;
        this.text = text2;
        this.loc = loc;
      }
      range(endToken, text2) {
        return new Token(text2, SourceLocation.range(this, endToken));
      }
    };
    ParseError = class {
      constructor(message, token) {
        this.position = void 0;
        var error2 = "KaTeX parse error: " + message;
        var start;
        var loc = token && token.loc;
        if (loc && loc.start <= loc.end) {
          var input = loc.lexer.input;
          start = loc.start;
          var end = loc.end;
          if (start === input.length) {
            error2 += " at end of input: ";
          } else {
            error2 += " at position " + (start + 1) + ": ";
          }
          var underlined = input.slice(start, end).replace(/[^]/g, "$&\u0332");
          var left;
          if (start > 15) {
            left = "\u2026" + input.slice(start - 15, start);
          } else {
            left = input.slice(0, start);
          }
          var right;
          if (end + 15 < input.length) {
            right = input.slice(end, end + 15) + "\u2026";
          } else {
            right = input.slice(end);
          }
          error2 += left + underlined + right;
        }
        var self2 = new Error(error2);
        self2.name = "ParseError";
        self2.__proto__ = ParseError.prototype;
        self2.position = start;
        return self2;
      }
    };
    ParseError.prototype.__proto__ = Error.prototype;
    contains = function contains2(list, elem) {
      return list.indexOf(elem) !== -1;
    };
    deflt = function deflt2(setting, defaultIfUndefined) {
      return setting === void 0 ? defaultIfUndefined : setting;
    };
    uppercase = /([A-Z])/g;
    hyphenate = function hyphenate2(str) {
      return str.replace(uppercase, "-$1").toLowerCase();
    };
    ESCAPE_LOOKUP = {
      "&": "&amp;",
      ">": "&gt;",
      "<": "&lt;",
      '"': "&quot;",
      "'": "&#x27;"
    };
    ESCAPE_REGEX = /[&><"']/g;
    getBaseElem = function getBaseElem2(group) {
      if (group.type === "ordgroup") {
        if (group.body.length === 1) {
          return getBaseElem2(group.body[0]);
        } else {
          return group;
        }
      } else if (group.type === "color") {
        if (group.body.length === 1) {
          return getBaseElem2(group.body[0]);
        } else {
          return group;
        }
      } else if (group.type === "font") {
        return getBaseElem2(group.body);
      } else {
        return group;
      }
    };
    isCharacterBox = function isCharacterBox2(group) {
      var baseElem = getBaseElem(group);
      return baseElem.type === "mathord" || baseElem.type === "textord" || baseElem.type === "atom";
    };
    assert = function assert2(value) {
      if (!value) {
        throw new Error("Expected non-null, but got " + String(value));
      }
      return value;
    };
    protocolFromUrl = function protocolFromUrl2(url) {
      var protocol = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(url);
      return protocol != null ? protocol[1] : "_relative";
    };
    utils = {
      contains,
      deflt,
      escape: escape2,
      hyphenate,
      getBaseElem,
      isCharacterBox,
      protocolFromUrl
    };
    SETTINGS_SCHEMA = {
      displayMode: {
        type: "boolean",
        description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
        cli: "-d, --display-mode"
      },
      output: {
        type: {
          enum: ["htmlAndMathml", "html", "mathml"]
        },
        description: "Determines the markup language of the output.",
        cli: "-F, --format <type>"
      },
      leqno: {
        type: "boolean",
        description: "Render display math in leqno style (left-justified tags)."
      },
      fleqn: {
        type: "boolean",
        description: "Render display math flush left."
      },
      throwOnError: {
        type: "boolean",
        default: true,
        cli: "-t, --no-throw-on-error",
        cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
      },
      errorColor: {
        type: "string",
        default: "#cc0000",
        cli: "-c, --error-color <color>",
        cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
        cliProcessor: (color) => "#" + color
      },
      macros: {
        type: "object",
        cli: "-m, --macro <def>",
        cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
        cliDefault: [],
        cliProcessor: (def, defs) => {
          defs.push(def);
          return defs;
        }
      },
      minRuleThickness: {
        type: "number",
        description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
        processor: (t2) => Math.max(0, t2),
        cli: "--min-rule-thickness <size>",
        cliProcessor: parseFloat
      },
      colorIsTextColor: {
        type: "boolean",
        description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
        cli: "-b, --color-is-text-color"
      },
      strict: {
        type: [{
          enum: ["warn", "ignore", "error"]
        }, "boolean", "function"],
        description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
        cli: "-S, --strict",
        cliDefault: false
      },
      trust: {
        type: ["boolean", "function"],
        description: "Trust the input, enabling all HTML features such as \\url.",
        cli: "-T, --trust"
      },
      maxSize: {
        type: "number",
        default: Infinity,
        description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
        processor: (s3) => Math.max(0, s3),
        cli: "-s, --max-size <n>",
        cliProcessor: parseInt
      },
      maxExpand: {
        type: "number",
        default: 1e3,
        description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
        processor: (n2) => Math.max(0, n2),
        cli: "-e, --max-expand <n>",
        cliProcessor: (n2) => n2 === "Infinity" ? Infinity : parseInt(n2)
      },
      globalGroup: {
        type: "boolean",
        cli: false
      }
    };
    Settings = class {
      constructor(options) {
        this.displayMode = void 0;
        this.output = void 0;
        this.leqno = void 0;
        this.fleqn = void 0;
        this.throwOnError = void 0;
        this.errorColor = void 0;
        this.macros = void 0;
        this.minRuleThickness = void 0;
        this.colorIsTextColor = void 0;
        this.strict = void 0;
        this.trust = void 0;
        this.maxSize = void 0;
        this.maxExpand = void 0;
        this.globalGroup = void 0;
        options = options || {};
        for (var prop in SETTINGS_SCHEMA) {
          if (SETTINGS_SCHEMA.hasOwnProperty(prop)) {
            var schema = SETTINGS_SCHEMA[prop];
            this[prop] = options[prop] !== void 0 ? schema.processor ? schema.processor(options[prop]) : options[prop] : getDefaultValue(schema);
          }
        }
      }
      reportNonstrict(errorCode, errorMsg, token) {
        var strict = this.strict;
        if (typeof strict === "function") {
          strict = strict(errorCode, errorMsg, token);
        }
        if (!strict || strict === "ignore") {
          return;
        } else if (strict === true || strict === "error") {
          throw new ParseError("LaTeX-incompatible input and strict mode is set to 'error': " + (errorMsg + " [" + errorCode + "]"), token);
        } else if (strict === "warn") {
          typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (errorMsg + " [" + errorCode + "]"));
        } else {
          typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + strict + "': " + errorMsg + " [" + errorCode + "]"));
        }
      }
      useStrictBehavior(errorCode, errorMsg, token) {
        var strict = this.strict;
        if (typeof strict === "function") {
          try {
            strict = strict(errorCode, errorMsg, token);
          } catch (error2) {
            strict = "error";
          }
        }
        if (!strict || strict === "ignore") {
          return false;
        } else if (strict === true || strict === "error") {
          return true;
        } else if (strict === "warn") {
          typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (errorMsg + " [" + errorCode + "]"));
          return false;
        } else {
          typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + strict + "': " + errorMsg + " [" + errorCode + "]"));
          return false;
        }
      }
      isTrusted(context) {
        if (context.url && !context.protocol) {
          context.protocol = utils.protocolFromUrl(context.url);
        }
        var trust = typeof this.trust === "function" ? this.trust(context) : this.trust;
        return Boolean(trust);
      }
    };
    Style = class {
      constructor(id, size, cramped) {
        this.id = void 0;
        this.size = void 0;
        this.cramped = void 0;
        this.id = id;
        this.size = size;
        this.cramped = cramped;
      }
      sup() {
        return styles[sup[this.id]];
      }
      sub() {
        return styles[sub[this.id]];
      }
      fracNum() {
        return styles[fracNum[this.id]];
      }
      fracDen() {
        return styles[fracDen[this.id]];
      }
      cramp() {
        return styles[cramp[this.id]];
      }
      text() {
        return styles[text$1[this.id]];
      }
      isTight() {
        return this.size >= 2;
      }
    };
    D = 0;
    Dc = 1;
    T = 2;
    Tc = 3;
    S = 4;
    Sc = 5;
    SS = 6;
    SSc = 7;
    styles = [new Style(D, 0, false), new Style(Dc, 0, true), new Style(T, 1, false), new Style(Tc, 1, true), new Style(S, 2, false), new Style(Sc, 2, true), new Style(SS, 3, false), new Style(SSc, 3, true)];
    sup = [S, Sc, S, Sc, SS, SSc, SS, SSc];
    sub = [Sc, Sc, Sc, Sc, SSc, SSc, SSc, SSc];
    fracNum = [T, Tc, S, Sc, SS, SSc, SS, SSc];
    fracDen = [Tc, Tc, Sc, Sc, SSc, SSc, SSc, SSc];
    cramp = [Dc, Dc, Tc, Tc, Sc, Sc, SSc, SSc];
    text$1 = [D, Dc, T, Tc, T, Tc, T, Tc];
    Style$1 = {
      DISPLAY: styles[D],
      TEXT: styles[T],
      SCRIPT: styles[S],
      SCRIPTSCRIPT: styles[SS]
    };
    scriptData = [{
      name: "latin",
      blocks: [
        [256, 591],
        [768, 879]
      ]
    }, {
      name: "cyrillic",
      blocks: [[1024, 1279]]
    }, {
      name: "armenian",
      blocks: [[1328, 1423]]
    }, {
      name: "brahmic",
      blocks: [[2304, 4255]]
    }, {
      name: "georgian",
      blocks: [[4256, 4351]]
    }, {
      name: "cjk",
      blocks: [
        [12288, 12543],
        [19968, 40879],
        [65280, 65376]
      ]
    }, {
      name: "hangul",
      blocks: [[44032, 55215]]
    }];
    allBlocks = [];
    scriptData.forEach((s3) => s3.blocks.forEach((b) => allBlocks.push(...b)));
    hLinePad = 80;
    sqrtMain = function sqrtMain2(extraViniculum, hLinePad2) {
      return "M95," + (622 + extraViniculum + hLinePad2) + "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" + extraViniculum / 2.075 + " -" + extraViniculum + "\nc5.3,-9.3,12,-14,20,-14\nH400000v" + (40 + extraViniculum) + "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" + (834 + extraViniculum) + " " + hLinePad2 + "h400000v" + (40 + extraViniculum) + "h-400000z";
    };
    sqrtSize1 = function sqrtSize12(extraViniculum, hLinePad2) {
      return "M263," + (601 + extraViniculum + hLinePad2) + "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" + extraViniculum / 2.084 + " -" + extraViniculum + "\nc4.7,-7.3,11,-11,19,-11\nH40000v" + (40 + extraViniculum) + "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" + (1001 + extraViniculum) + " " + hLinePad2 + "h400000v" + (40 + extraViniculum) + "h-400000z";
    };
    sqrtSize2 = function sqrtSize22(extraViniculum, hLinePad2) {
      return "M983 " + (10 + extraViniculum + hLinePad2) + "\nl" + extraViniculum / 3.13 + " -" + extraViniculum + "\nc4,-6.7,10,-10,18,-10 H400000v" + (40 + extraViniculum) + "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" + (1001 + extraViniculum) + " " + hLinePad2 + "h400000v" + (40 + extraViniculum) + "h-400000z";
    };
    sqrtSize3 = function sqrtSize32(extraViniculum, hLinePad2) {
      return "M424," + (2398 + extraViniculum + hLinePad2) + "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" + extraViniculum / 4.223 + " -" + extraViniculum + "c4,-6.7,10,-10,18,-10 H400000\nv" + (40 + extraViniculum) + "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" + (1001 + extraViniculum) + " " + hLinePad2 + "\nh400000v" + (40 + extraViniculum) + "h-400000z";
    };
    sqrtSize4 = function sqrtSize42(extraViniculum, hLinePad2) {
      return "M473," + (2713 + extraViniculum + hLinePad2) + "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" + extraViniculum / 5.298 + " -" + extraViniculum + "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" + (40 + extraViniculum) + "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" + (1001 + extraViniculum) + " " + hLinePad2 + "h400000v" + (40 + extraViniculum) + "H1017.7z";
    };
    phasePath = function phasePath2(y) {
      var x2 = y / 2;
      return "M400000 " + y + " H0 L" + x2 + " 0 l65 45 L145 " + (y - 80) + " H400000z";
    };
    sqrtTall = function sqrtTall2(extraViniculum, hLinePad2, viewBoxHeight) {
      var vertSegment = viewBoxHeight - 54 - hLinePad2 - extraViniculum;
      return "M702 " + (extraViniculum + hLinePad2) + "H400000" + (40 + extraViniculum) + "\nH742v" + vertSegment + "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " + hLinePad2 + "H400000v" + (40 + extraViniculum) + "H742z";
    };
    sqrtPath = function sqrtPath2(size, extraViniculum, viewBoxHeight) {
      extraViniculum = 1e3 * extraViniculum;
      var path2 = "";
      switch (size) {
        case "sqrtMain":
          path2 = sqrtMain(extraViniculum, hLinePad);
          break;
        case "sqrtSize1":
          path2 = sqrtSize1(extraViniculum, hLinePad);
          break;
        case "sqrtSize2":
          path2 = sqrtSize2(extraViniculum, hLinePad);
          break;
        case "sqrtSize3":
          path2 = sqrtSize3(extraViniculum, hLinePad);
          break;
        case "sqrtSize4":
          path2 = sqrtSize4(extraViniculum, hLinePad);
          break;
        case "sqrtTall":
          path2 = sqrtTall(extraViniculum, hLinePad, viewBoxHeight);
      }
      return path2;
    };
    innerPath = function innerPath2(name4, height) {
      switch (name4) {
        case "\u239C":
          return "M291 0 H417 V" + height + " H291z M291 0 H417 V" + height + " H291z";
        case "\u2223":
          return "M145 0 H188 V" + height + " H145z M145 0 H188 V" + height + " H145z";
        case "\u2225":
          return "M145 0 H188 V" + height + " H145z M145 0 H188 V" + height + " H145z" + ("M367 0 H410 V" + height + " H367z M367 0 H410 V" + height + " H367z");
        case "\u239F":
          return "M457 0 H583 V" + height + " H457z M457 0 H583 V" + height + " H457z";
        case "\u23A2":
          return "M319 0 H403 V" + height + " H319z M319 0 H403 V" + height + " H319z";
        case "\u23A5":
          return "M263 0 H347 V" + height + " H263z M263 0 H347 V" + height + " H263z";
        case "\u23AA":
          return "M384 0 H504 V" + height + " H384z M384 0 H504 V" + height + " H384z";
        case "\u23D0":
          return "M312 0 H355 V" + height + " H312z M312 0 H355 V" + height + " H312z";
        case "\u2016":
          return "M257 0 H300 V" + height + " H257z M257 0 H300 V" + height + " H257z" + ("M478 0 H521 V" + height + " H478z M478 0 H521 V" + height + " H478z");
        default:
          return "";
      }
    };
    path = {
      doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
      doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
      leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
      leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
      leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
      leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
      leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
      leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
      leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
      leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
      leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
      lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
      leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
      leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
      leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
      longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
      midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
      midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
      oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
      oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
      oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
      oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
      rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
      rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
      rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
      rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
      rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
      rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
      rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
      rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
      rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
      righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
      rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
      rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
      twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
      twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
      tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
      tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
      tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
      tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
      vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
      widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
      widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
      widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
      widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
      widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
      widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
      widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
      widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
      baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
      rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
      baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
      rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
      shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
      shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
    };
    tallDelim = function tallDelim2(label, midHeight) {
      switch (label) {
        case "lbrack":
          return "M403 1759 V84 H666 V0 H319 V1759 v" + midHeight + " v1759 h347 v-84\nH403z M403 1759 V0 H319 V1759 v" + midHeight + " v1759 h84z";
        case "rbrack":
          return "M347 1759 V0 H0 V84 H263 V1759 v" + midHeight + " v1759 H0 v84 H347z\nM347 1759 V0 H263 V1759 v" + midHeight + " v1759 h84z";
        case "vert":
          return "M145 15 v585 v" + midHeight + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -midHeight + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + midHeight + " v585 h43z";
        case "doublevert":
          return "M145 15 v585 v" + midHeight + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -midHeight + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + midHeight + " v585 h43z\nM367 15 v585 v" + midHeight + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -midHeight + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M410 15 H367 v585 v" + midHeight + " v585 h43z";
        case "lfloor":
          return "M319 602 V0 H403 V602 v" + midHeight + " v1715 h263 v84 H319z\nMM319 602 V0 H403 V602 v" + midHeight + " v1715 H319z";
        case "rfloor":
          return "M319 602 V0 H403 V602 v" + midHeight + " v1799 H0 v-84 H319z\nMM319 602 V0 H403 V602 v" + midHeight + " v1715 H319z";
        case "lceil":
          return "M403 1759 V84 H666 V0 H319 V1759 v" + midHeight + " v602 h84z\nM403 1759 V0 H319 V1759 v" + midHeight + " v602 h84z";
        case "rceil":
          return "M347 1759 V0 H0 V84 H263 V1759 v" + midHeight + " v602 h84z\nM347 1759 V0 h-84 V1759 v" + midHeight + " v602 h84z";
        case "lparen":
          return "M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0," + (midHeight + 84) + "c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-" + (midHeight + 92) + "c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z";
        case "rparen":
          return "M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0," + (midHeight + 9) + "\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-" + (midHeight + 144) + "c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z";
        default:
          throw new Error("Unknown stretchy delimiter.");
      }
    };
    DocumentFragment = class {
      constructor(children) {
        this.children = void 0;
        this.classes = void 0;
        this.height = void 0;
        this.depth = void 0;
        this.maxFontSize = void 0;
        this.style = void 0;
        this.children = children;
        this.classes = [];
        this.height = 0;
        this.depth = 0;
        this.maxFontSize = 0;
        this.style = {};
      }
      hasClass(className) {
        return utils.contains(this.classes, className);
      }
      toNode() {
        var frag = document.createDocumentFragment();
        for (var i = 0; i < this.children.length; i++) {
          frag.appendChild(this.children[i].toNode());
        }
        return frag;
      }
      toMarkup() {
        var markup = "";
        for (var i = 0; i < this.children.length; i++) {
          markup += this.children[i].toMarkup();
        }
        return markup;
      }
      toText() {
        var toText = (child) => child.toText();
        return this.children.map(toText).join("");
      }
    };
    fontMetricsData = {
      "AMS-Regular": {
        "32": [0, 0, 0, 0, 0.25],
        "65": [0, 0.68889, 0, 0, 0.72222],
        "66": [0, 0.68889, 0, 0, 0.66667],
        "67": [0, 0.68889, 0, 0, 0.72222],
        "68": [0, 0.68889, 0, 0, 0.72222],
        "69": [0, 0.68889, 0, 0, 0.66667],
        "70": [0, 0.68889, 0, 0, 0.61111],
        "71": [0, 0.68889, 0, 0, 0.77778],
        "72": [0, 0.68889, 0, 0, 0.77778],
        "73": [0, 0.68889, 0, 0, 0.38889],
        "74": [0.16667, 0.68889, 0, 0, 0.5],
        "75": [0, 0.68889, 0, 0, 0.77778],
        "76": [0, 0.68889, 0, 0, 0.66667],
        "77": [0, 0.68889, 0, 0, 0.94445],
        "78": [0, 0.68889, 0, 0, 0.72222],
        "79": [0.16667, 0.68889, 0, 0, 0.77778],
        "80": [0, 0.68889, 0, 0, 0.61111],
        "81": [0.16667, 0.68889, 0, 0, 0.77778],
        "82": [0, 0.68889, 0, 0, 0.72222],
        "83": [0, 0.68889, 0, 0, 0.55556],
        "84": [0, 0.68889, 0, 0, 0.66667],
        "85": [0, 0.68889, 0, 0, 0.72222],
        "86": [0, 0.68889, 0, 0, 0.72222],
        "87": [0, 0.68889, 0, 0, 1],
        "88": [0, 0.68889, 0, 0, 0.72222],
        "89": [0, 0.68889, 0, 0, 0.72222],
        "90": [0, 0.68889, 0, 0, 0.66667],
        "107": [0, 0.68889, 0, 0, 0.55556],
        "160": [0, 0, 0, 0, 0.25],
        "165": [0, 0.675, 0.025, 0, 0.75],
        "174": [0.15559, 0.69224, 0, 0, 0.94666],
        "240": [0, 0.68889, 0, 0, 0.55556],
        "295": [0, 0.68889, 0, 0, 0.54028],
        "710": [0, 0.825, 0, 0, 2.33334],
        "732": [0, 0.9, 0, 0, 2.33334],
        "770": [0, 0.825, 0, 0, 2.33334],
        "771": [0, 0.9, 0, 0, 2.33334],
        "989": [0.08167, 0.58167, 0, 0, 0.77778],
        "1008": [0, 0.43056, 0.04028, 0, 0.66667],
        "8245": [0, 0.54986, 0, 0, 0.275],
        "8463": [0, 0.68889, 0, 0, 0.54028],
        "8487": [0, 0.68889, 0, 0, 0.72222],
        "8498": [0, 0.68889, 0, 0, 0.55556],
        "8502": [0, 0.68889, 0, 0, 0.66667],
        "8503": [0, 0.68889, 0, 0, 0.44445],
        "8504": [0, 0.68889, 0, 0, 0.66667],
        "8513": [0, 0.68889, 0, 0, 0.63889],
        "8592": [-0.03598, 0.46402, 0, 0, 0.5],
        "8594": [-0.03598, 0.46402, 0, 0, 0.5],
        "8602": [-0.13313, 0.36687, 0, 0, 1],
        "8603": [-0.13313, 0.36687, 0, 0, 1],
        "8606": [0.01354, 0.52239, 0, 0, 1],
        "8608": [0.01354, 0.52239, 0, 0, 1],
        "8610": [0.01354, 0.52239, 0, 0, 1.11111],
        "8611": [0.01354, 0.52239, 0, 0, 1.11111],
        "8619": [0, 0.54986, 0, 0, 1],
        "8620": [0, 0.54986, 0, 0, 1],
        "8621": [-0.13313, 0.37788, 0, 0, 1.38889],
        "8622": [-0.13313, 0.36687, 0, 0, 1],
        "8624": [0, 0.69224, 0, 0, 0.5],
        "8625": [0, 0.69224, 0, 0, 0.5],
        "8630": [0, 0.43056, 0, 0, 1],
        "8631": [0, 0.43056, 0, 0, 1],
        "8634": [0.08198, 0.58198, 0, 0, 0.77778],
        "8635": [0.08198, 0.58198, 0, 0, 0.77778],
        "8638": [0.19444, 0.69224, 0, 0, 0.41667],
        "8639": [0.19444, 0.69224, 0, 0, 0.41667],
        "8642": [0.19444, 0.69224, 0, 0, 0.41667],
        "8643": [0.19444, 0.69224, 0, 0, 0.41667],
        "8644": [0.1808, 0.675, 0, 0, 1],
        "8646": [0.1808, 0.675, 0, 0, 1],
        "8647": [0.1808, 0.675, 0, 0, 1],
        "8648": [0.19444, 0.69224, 0, 0, 0.83334],
        "8649": [0.1808, 0.675, 0, 0, 1],
        "8650": [0.19444, 0.69224, 0, 0, 0.83334],
        "8651": [0.01354, 0.52239, 0, 0, 1],
        "8652": [0.01354, 0.52239, 0, 0, 1],
        "8653": [-0.13313, 0.36687, 0, 0, 1],
        "8654": [-0.13313, 0.36687, 0, 0, 1],
        "8655": [-0.13313, 0.36687, 0, 0, 1],
        "8666": [0.13667, 0.63667, 0, 0, 1],
        "8667": [0.13667, 0.63667, 0, 0, 1],
        "8669": [-0.13313, 0.37788, 0, 0, 1],
        "8672": [-0.064, 0.437, 0, 0, 1.334],
        "8674": [-0.064, 0.437, 0, 0, 1.334],
        "8705": [0, 0.825, 0, 0, 0.5],
        "8708": [0, 0.68889, 0, 0, 0.55556],
        "8709": [0.08167, 0.58167, 0, 0, 0.77778],
        "8717": [0, 0.43056, 0, 0, 0.42917],
        "8722": [-0.03598, 0.46402, 0, 0, 0.5],
        "8724": [0.08198, 0.69224, 0, 0, 0.77778],
        "8726": [0.08167, 0.58167, 0, 0, 0.77778],
        "8733": [0, 0.69224, 0, 0, 0.77778],
        "8736": [0, 0.69224, 0, 0, 0.72222],
        "8737": [0, 0.69224, 0, 0, 0.72222],
        "8738": [0.03517, 0.52239, 0, 0, 0.72222],
        "8739": [0.08167, 0.58167, 0, 0, 0.22222],
        "8740": [0.25142, 0.74111, 0, 0, 0.27778],
        "8741": [0.08167, 0.58167, 0, 0, 0.38889],
        "8742": [0.25142, 0.74111, 0, 0, 0.5],
        "8756": [0, 0.69224, 0, 0, 0.66667],
        "8757": [0, 0.69224, 0, 0, 0.66667],
        "8764": [-0.13313, 0.36687, 0, 0, 0.77778],
        "8765": [-0.13313, 0.37788, 0, 0, 0.77778],
        "8769": [-0.13313, 0.36687, 0, 0, 0.77778],
        "8770": [-0.03625, 0.46375, 0, 0, 0.77778],
        "8774": [0.30274, 0.79383, 0, 0, 0.77778],
        "8776": [-0.01688, 0.48312, 0, 0, 0.77778],
        "8778": [0.08167, 0.58167, 0, 0, 0.77778],
        "8782": [0.06062, 0.54986, 0, 0, 0.77778],
        "8783": [0.06062, 0.54986, 0, 0, 0.77778],
        "8785": [0.08198, 0.58198, 0, 0, 0.77778],
        "8786": [0.08198, 0.58198, 0, 0, 0.77778],
        "8787": [0.08198, 0.58198, 0, 0, 0.77778],
        "8790": [0, 0.69224, 0, 0, 0.77778],
        "8791": [0.22958, 0.72958, 0, 0, 0.77778],
        "8796": [0.08198, 0.91667, 0, 0, 0.77778],
        "8806": [0.25583, 0.75583, 0, 0, 0.77778],
        "8807": [0.25583, 0.75583, 0, 0, 0.77778],
        "8808": [0.25142, 0.75726, 0, 0, 0.77778],
        "8809": [0.25142, 0.75726, 0, 0, 0.77778],
        "8812": [0.25583, 0.75583, 0, 0, 0.5],
        "8814": [0.20576, 0.70576, 0, 0, 0.77778],
        "8815": [0.20576, 0.70576, 0, 0, 0.77778],
        "8816": [0.30274, 0.79383, 0, 0, 0.77778],
        "8817": [0.30274, 0.79383, 0, 0, 0.77778],
        "8818": [0.22958, 0.72958, 0, 0, 0.77778],
        "8819": [0.22958, 0.72958, 0, 0, 0.77778],
        "8822": [0.1808, 0.675, 0, 0, 0.77778],
        "8823": [0.1808, 0.675, 0, 0, 0.77778],
        "8828": [0.13667, 0.63667, 0, 0, 0.77778],
        "8829": [0.13667, 0.63667, 0, 0, 0.77778],
        "8830": [0.22958, 0.72958, 0, 0, 0.77778],
        "8831": [0.22958, 0.72958, 0, 0, 0.77778],
        "8832": [0.20576, 0.70576, 0, 0, 0.77778],
        "8833": [0.20576, 0.70576, 0, 0, 0.77778],
        "8840": [0.30274, 0.79383, 0, 0, 0.77778],
        "8841": [0.30274, 0.79383, 0, 0, 0.77778],
        "8842": [0.13597, 0.63597, 0, 0, 0.77778],
        "8843": [0.13597, 0.63597, 0, 0, 0.77778],
        "8847": [0.03517, 0.54986, 0, 0, 0.77778],
        "8848": [0.03517, 0.54986, 0, 0, 0.77778],
        "8858": [0.08198, 0.58198, 0, 0, 0.77778],
        "8859": [0.08198, 0.58198, 0, 0, 0.77778],
        "8861": [0.08198, 0.58198, 0, 0, 0.77778],
        "8862": [0, 0.675, 0, 0, 0.77778],
        "8863": [0, 0.675, 0, 0, 0.77778],
        "8864": [0, 0.675, 0, 0, 0.77778],
        "8865": [0, 0.675, 0, 0, 0.77778],
        "8872": [0, 0.69224, 0, 0, 0.61111],
        "8873": [0, 0.69224, 0, 0, 0.72222],
        "8874": [0, 0.69224, 0, 0, 0.88889],
        "8876": [0, 0.68889, 0, 0, 0.61111],
        "8877": [0, 0.68889, 0, 0, 0.61111],
        "8878": [0, 0.68889, 0, 0, 0.72222],
        "8879": [0, 0.68889, 0, 0, 0.72222],
        "8882": [0.03517, 0.54986, 0, 0, 0.77778],
        "8883": [0.03517, 0.54986, 0, 0, 0.77778],
        "8884": [0.13667, 0.63667, 0, 0, 0.77778],
        "8885": [0.13667, 0.63667, 0, 0, 0.77778],
        "8888": [0, 0.54986, 0, 0, 1.11111],
        "8890": [0.19444, 0.43056, 0, 0, 0.55556],
        "8891": [0.19444, 0.69224, 0, 0, 0.61111],
        "8892": [0.19444, 0.69224, 0, 0, 0.61111],
        "8901": [0, 0.54986, 0, 0, 0.27778],
        "8903": [0.08167, 0.58167, 0, 0, 0.77778],
        "8905": [0.08167, 0.58167, 0, 0, 0.77778],
        "8906": [0.08167, 0.58167, 0, 0, 0.77778],
        "8907": [0, 0.69224, 0, 0, 0.77778],
        "8908": [0, 0.69224, 0, 0, 0.77778],
        "8909": [-0.03598, 0.46402, 0, 0, 0.77778],
        "8910": [0, 0.54986, 0, 0, 0.76042],
        "8911": [0, 0.54986, 0, 0, 0.76042],
        "8912": [0.03517, 0.54986, 0, 0, 0.77778],
        "8913": [0.03517, 0.54986, 0, 0, 0.77778],
        "8914": [0, 0.54986, 0, 0, 0.66667],
        "8915": [0, 0.54986, 0, 0, 0.66667],
        "8916": [0, 0.69224, 0, 0, 0.66667],
        "8918": [0.0391, 0.5391, 0, 0, 0.77778],
        "8919": [0.0391, 0.5391, 0, 0, 0.77778],
        "8920": [0.03517, 0.54986, 0, 0, 1.33334],
        "8921": [0.03517, 0.54986, 0, 0, 1.33334],
        "8922": [0.38569, 0.88569, 0, 0, 0.77778],
        "8923": [0.38569, 0.88569, 0, 0, 0.77778],
        "8926": [0.13667, 0.63667, 0, 0, 0.77778],
        "8927": [0.13667, 0.63667, 0, 0, 0.77778],
        "8928": [0.30274, 0.79383, 0, 0, 0.77778],
        "8929": [0.30274, 0.79383, 0, 0, 0.77778],
        "8934": [0.23222, 0.74111, 0, 0, 0.77778],
        "8935": [0.23222, 0.74111, 0, 0, 0.77778],
        "8936": [0.23222, 0.74111, 0, 0, 0.77778],
        "8937": [0.23222, 0.74111, 0, 0, 0.77778],
        "8938": [0.20576, 0.70576, 0, 0, 0.77778],
        "8939": [0.20576, 0.70576, 0, 0, 0.77778],
        "8940": [0.30274, 0.79383, 0, 0, 0.77778],
        "8941": [0.30274, 0.79383, 0, 0, 0.77778],
        "8994": [0.19444, 0.69224, 0, 0, 0.77778],
        "8995": [0.19444, 0.69224, 0, 0, 0.77778],
        "9416": [0.15559, 0.69224, 0, 0, 0.90222],
        "9484": [0, 0.69224, 0, 0, 0.5],
        "9488": [0, 0.69224, 0, 0, 0.5],
        "9492": [0, 0.37788, 0, 0, 0.5],
        "9496": [0, 0.37788, 0, 0, 0.5],
        "9585": [0.19444, 0.68889, 0, 0, 0.88889],
        "9586": [0.19444, 0.74111, 0, 0, 0.88889],
        "9632": [0, 0.675, 0, 0, 0.77778],
        "9633": [0, 0.675, 0, 0, 0.77778],
        "9650": [0, 0.54986, 0, 0, 0.72222],
        "9651": [0, 0.54986, 0, 0, 0.72222],
        "9654": [0.03517, 0.54986, 0, 0, 0.77778],
        "9660": [0, 0.54986, 0, 0, 0.72222],
        "9661": [0, 0.54986, 0, 0, 0.72222],
        "9664": [0.03517, 0.54986, 0, 0, 0.77778],
        "9674": [0.11111, 0.69224, 0, 0, 0.66667],
        "9733": [0.19444, 0.69224, 0, 0, 0.94445],
        "10003": [0, 0.69224, 0, 0, 0.83334],
        "10016": [0, 0.69224, 0, 0, 0.83334],
        "10731": [0.11111, 0.69224, 0, 0, 0.66667],
        "10846": [0.19444, 0.75583, 0, 0, 0.61111],
        "10877": [0.13667, 0.63667, 0, 0, 0.77778],
        "10878": [0.13667, 0.63667, 0, 0, 0.77778],
        "10885": [0.25583, 0.75583, 0, 0, 0.77778],
        "10886": [0.25583, 0.75583, 0, 0, 0.77778],
        "10887": [0.13597, 0.63597, 0, 0, 0.77778],
        "10888": [0.13597, 0.63597, 0, 0, 0.77778],
        "10889": [0.26167, 0.75726, 0, 0, 0.77778],
        "10890": [0.26167, 0.75726, 0, 0, 0.77778],
        "10891": [0.48256, 0.98256, 0, 0, 0.77778],
        "10892": [0.48256, 0.98256, 0, 0, 0.77778],
        "10901": [0.13667, 0.63667, 0, 0, 0.77778],
        "10902": [0.13667, 0.63667, 0, 0, 0.77778],
        "10933": [0.25142, 0.75726, 0, 0, 0.77778],
        "10934": [0.25142, 0.75726, 0, 0, 0.77778],
        "10935": [0.26167, 0.75726, 0, 0, 0.77778],
        "10936": [0.26167, 0.75726, 0, 0, 0.77778],
        "10937": [0.26167, 0.75726, 0, 0, 0.77778],
        "10938": [0.26167, 0.75726, 0, 0, 0.77778],
        "10949": [0.25583, 0.75583, 0, 0, 0.77778],
        "10950": [0.25583, 0.75583, 0, 0, 0.77778],
        "10955": [0.28481, 0.79383, 0, 0, 0.77778],
        "10956": [0.28481, 0.79383, 0, 0, 0.77778],
        "57350": [0.08167, 0.58167, 0, 0, 0.22222],
        "57351": [0.08167, 0.58167, 0, 0, 0.38889],
        "57352": [0.08167, 0.58167, 0, 0, 0.77778],
        "57353": [0, 0.43056, 0.04028, 0, 0.66667],
        "57356": [0.25142, 0.75726, 0, 0, 0.77778],
        "57357": [0.25142, 0.75726, 0, 0, 0.77778],
        "57358": [0.41951, 0.91951, 0, 0, 0.77778],
        "57359": [0.30274, 0.79383, 0, 0, 0.77778],
        "57360": [0.30274, 0.79383, 0, 0, 0.77778],
        "57361": [0.41951, 0.91951, 0, 0, 0.77778],
        "57366": [0.25142, 0.75726, 0, 0, 0.77778],
        "57367": [0.25142, 0.75726, 0, 0, 0.77778],
        "57368": [0.25142, 0.75726, 0, 0, 0.77778],
        "57369": [0.25142, 0.75726, 0, 0, 0.77778],
        "57370": [0.13597, 0.63597, 0, 0, 0.77778],
        "57371": [0.13597, 0.63597, 0, 0, 0.77778]
      },
      "Caligraphic-Regular": {
        "32": [0, 0, 0, 0, 0.25],
        "65": [0, 0.68333, 0, 0.19445, 0.79847],
        "66": [0, 0.68333, 0.03041, 0.13889, 0.65681],
        "67": [0, 0.68333, 0.05834, 0.13889, 0.52653],
        "68": [0, 0.68333, 0.02778, 0.08334, 0.77139],
        "69": [0, 0.68333, 0.08944, 0.11111, 0.52778],
        "70": [0, 0.68333, 0.09931, 0.11111, 0.71875],
        "71": [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
        "72": [0, 0.68333, 965e-5, 0.11111, 0.84452],
        "73": [0, 0.68333, 0.07382, 0, 0.54452],
        "74": [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
        "75": [0, 0.68333, 0.01445, 0.05556, 0.76195],
        "76": [0, 0.68333, 0, 0.13889, 0.68972],
        "77": [0, 0.68333, 0, 0.13889, 1.2009],
        "78": [0, 0.68333, 0.14736, 0.08334, 0.82049],
        "79": [0, 0.68333, 0.02778, 0.11111, 0.79611],
        "80": [0, 0.68333, 0.08222, 0.08334, 0.69556],
        "81": [0.09722, 0.68333, 0, 0.11111, 0.81667],
        "82": [0, 0.68333, 0, 0.08334, 0.8475],
        "83": [0, 0.68333, 0.075, 0.13889, 0.60556],
        "84": [0, 0.68333, 0.25417, 0, 0.54464],
        "85": [0, 0.68333, 0.09931, 0.08334, 0.62583],
        "86": [0, 0.68333, 0.08222, 0, 0.61278],
        "87": [0, 0.68333, 0.08222, 0.08334, 0.98778],
        "88": [0, 0.68333, 0.14643, 0.13889, 0.7133],
        "89": [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
        "90": [0, 0.68333, 0.07944, 0.13889, 0.72473],
        "160": [0, 0, 0, 0, 0.25]
      },
      "Fraktur-Regular": {
        "32": [0, 0, 0, 0, 0.25],
        "33": [0, 0.69141, 0, 0, 0.29574],
        "34": [0, 0.69141, 0, 0, 0.21471],
        "38": [0, 0.69141, 0, 0, 0.73786],
        "39": [0, 0.69141, 0, 0, 0.21201],
        "40": [0.24982, 0.74947, 0, 0, 0.38865],
        "41": [0.24982, 0.74947, 0, 0, 0.38865],
        "42": [0, 0.62119, 0, 0, 0.27764],
        "43": [0.08319, 0.58283, 0, 0, 0.75623],
        "44": [0, 0.10803, 0, 0, 0.27764],
        "45": [0.08319, 0.58283, 0, 0, 0.75623],
        "46": [0, 0.10803, 0, 0, 0.27764],
        "47": [0.24982, 0.74947, 0, 0, 0.50181],
        "48": [0, 0.47534, 0, 0, 0.50181],
        "49": [0, 0.47534, 0, 0, 0.50181],
        "50": [0, 0.47534, 0, 0, 0.50181],
        "51": [0.18906, 0.47534, 0, 0, 0.50181],
        "52": [0.18906, 0.47534, 0, 0, 0.50181],
        "53": [0.18906, 0.47534, 0, 0, 0.50181],
        "54": [0, 0.69141, 0, 0, 0.50181],
        "55": [0.18906, 0.47534, 0, 0, 0.50181],
        "56": [0, 0.69141, 0, 0, 0.50181],
        "57": [0.18906, 0.47534, 0, 0, 0.50181],
        "58": [0, 0.47534, 0, 0, 0.21606],
        "59": [0.12604, 0.47534, 0, 0, 0.21606],
        "61": [-0.13099, 0.36866, 0, 0, 0.75623],
        "63": [0, 0.69141, 0, 0, 0.36245],
        "65": [0, 0.69141, 0, 0, 0.7176],
        "66": [0, 0.69141, 0, 0, 0.88397],
        "67": [0, 0.69141, 0, 0, 0.61254],
        "68": [0, 0.69141, 0, 0, 0.83158],
        "69": [0, 0.69141, 0, 0, 0.66278],
        "70": [0.12604, 0.69141, 0, 0, 0.61119],
        "71": [0, 0.69141, 0, 0, 0.78539],
        "72": [0.06302, 0.69141, 0, 0, 0.7203],
        "73": [0, 0.69141, 0, 0, 0.55448],
        "74": [0.12604, 0.69141, 0, 0, 0.55231],
        "75": [0, 0.69141, 0, 0, 0.66845],
        "76": [0, 0.69141, 0, 0, 0.66602],
        "77": [0, 0.69141, 0, 0, 1.04953],
        "78": [0, 0.69141, 0, 0, 0.83212],
        "79": [0, 0.69141, 0, 0, 0.82699],
        "80": [0.18906, 0.69141, 0, 0, 0.82753],
        "81": [0.03781, 0.69141, 0, 0, 0.82699],
        "82": [0, 0.69141, 0, 0, 0.82807],
        "83": [0, 0.69141, 0, 0, 0.82861],
        "84": [0, 0.69141, 0, 0, 0.66899],
        "85": [0, 0.69141, 0, 0, 0.64576],
        "86": [0, 0.69141, 0, 0, 0.83131],
        "87": [0, 0.69141, 0, 0, 1.04602],
        "88": [0, 0.69141, 0, 0, 0.71922],
        "89": [0.18906, 0.69141, 0, 0, 0.83293],
        "90": [0.12604, 0.69141, 0, 0, 0.60201],
        "91": [0.24982, 0.74947, 0, 0, 0.27764],
        "93": [0.24982, 0.74947, 0, 0, 0.27764],
        "94": [0, 0.69141, 0, 0, 0.49965],
        "97": [0, 0.47534, 0, 0, 0.50046],
        "98": [0, 0.69141, 0, 0, 0.51315],
        "99": [0, 0.47534, 0, 0, 0.38946],
        "100": [0, 0.62119, 0, 0, 0.49857],
        "101": [0, 0.47534, 0, 0, 0.40053],
        "102": [0.18906, 0.69141, 0, 0, 0.32626],
        "103": [0.18906, 0.47534, 0, 0, 0.5037],
        "104": [0.18906, 0.69141, 0, 0, 0.52126],
        "105": [0, 0.69141, 0, 0, 0.27899],
        "106": [0, 0.69141, 0, 0, 0.28088],
        "107": [0, 0.69141, 0, 0, 0.38946],
        "108": [0, 0.69141, 0, 0, 0.27953],
        "109": [0, 0.47534, 0, 0, 0.76676],
        "110": [0, 0.47534, 0, 0, 0.52666],
        "111": [0, 0.47534, 0, 0, 0.48885],
        "112": [0.18906, 0.52396, 0, 0, 0.50046],
        "113": [0.18906, 0.47534, 0, 0, 0.48912],
        "114": [0, 0.47534, 0, 0, 0.38919],
        "115": [0, 0.47534, 0, 0, 0.44266],
        "116": [0, 0.62119, 0, 0, 0.33301],
        "117": [0, 0.47534, 0, 0, 0.5172],
        "118": [0, 0.52396, 0, 0, 0.5118],
        "119": [0, 0.52396, 0, 0, 0.77351],
        "120": [0.18906, 0.47534, 0, 0, 0.38865],
        "121": [0.18906, 0.47534, 0, 0, 0.49884],
        "122": [0.18906, 0.47534, 0, 0, 0.39054],
        "160": [0, 0, 0, 0, 0.25],
        "8216": [0, 0.69141, 0, 0, 0.21471],
        "8217": [0, 0.69141, 0, 0, 0.21471],
        "58112": [0, 0.62119, 0, 0, 0.49749],
        "58113": [0, 0.62119, 0, 0, 0.4983],
        "58114": [0.18906, 0.69141, 0, 0, 0.33328],
        "58115": [0.18906, 0.69141, 0, 0, 0.32923],
        "58116": [0.18906, 0.47534, 0, 0, 0.50343],
        "58117": [0, 0.69141, 0, 0, 0.33301],
        "58118": [0, 0.62119, 0, 0, 0.33409],
        "58119": [0, 0.47534, 0, 0, 0.50073]
      },
      "Main-Bold": {
        "32": [0, 0, 0, 0, 0.25],
        "33": [0, 0.69444, 0, 0, 0.35],
        "34": [0, 0.69444, 0, 0, 0.60278],
        "35": [0.19444, 0.69444, 0, 0, 0.95833],
        "36": [0.05556, 0.75, 0, 0, 0.575],
        "37": [0.05556, 0.75, 0, 0, 0.95833],
        "38": [0, 0.69444, 0, 0, 0.89444],
        "39": [0, 0.69444, 0, 0, 0.31944],
        "40": [0.25, 0.75, 0, 0, 0.44722],
        "41": [0.25, 0.75, 0, 0, 0.44722],
        "42": [0, 0.75, 0, 0, 0.575],
        "43": [0.13333, 0.63333, 0, 0, 0.89444],
        "44": [0.19444, 0.15556, 0, 0, 0.31944],
        "45": [0, 0.44444, 0, 0, 0.38333],
        "46": [0, 0.15556, 0, 0, 0.31944],
        "47": [0.25, 0.75, 0, 0, 0.575],
        "48": [0, 0.64444, 0, 0, 0.575],
        "49": [0, 0.64444, 0, 0, 0.575],
        "50": [0, 0.64444, 0, 0, 0.575],
        "51": [0, 0.64444, 0, 0, 0.575],
        "52": [0, 0.64444, 0, 0, 0.575],
        "53": [0, 0.64444, 0, 0, 0.575],
        "54": [0, 0.64444, 0, 0, 0.575],
        "55": [0, 0.64444, 0, 0, 0.575],
        "56": [0, 0.64444, 0, 0, 0.575],
        "57": [0, 0.64444, 0, 0, 0.575],
        "58": [0, 0.44444, 0, 0, 0.31944],
        "59": [0.19444, 0.44444, 0, 0, 0.31944],
        "60": [0.08556, 0.58556, 0, 0, 0.89444],
        "61": [-0.10889, 0.39111, 0, 0, 0.89444],
        "62": [0.08556, 0.58556, 0, 0, 0.89444],
        "63": [0, 0.69444, 0, 0, 0.54305],
        "64": [0, 0.69444, 0, 0, 0.89444],
        "65": [0, 0.68611, 0, 0, 0.86944],
        "66": [0, 0.68611, 0, 0, 0.81805],
        "67": [0, 0.68611, 0, 0, 0.83055],
        "68": [0, 0.68611, 0, 0, 0.88194],
        "69": [0, 0.68611, 0, 0, 0.75555],
        "70": [0, 0.68611, 0, 0, 0.72361],
        "71": [0, 0.68611, 0, 0, 0.90416],
        "72": [0, 0.68611, 0, 0, 0.9],
        "73": [0, 0.68611, 0, 0, 0.43611],
        "74": [0, 0.68611, 0, 0, 0.59444],
        "75": [0, 0.68611, 0, 0, 0.90138],
        "76": [0, 0.68611, 0, 0, 0.69166],
        "77": [0, 0.68611, 0, 0, 1.09166],
        "78": [0, 0.68611, 0, 0, 0.9],
        "79": [0, 0.68611, 0, 0, 0.86388],
        "80": [0, 0.68611, 0, 0, 0.78611],
        "81": [0.19444, 0.68611, 0, 0, 0.86388],
        "82": [0, 0.68611, 0, 0, 0.8625],
        "83": [0, 0.68611, 0, 0, 0.63889],
        "84": [0, 0.68611, 0, 0, 0.8],
        "85": [0, 0.68611, 0, 0, 0.88472],
        "86": [0, 0.68611, 0.01597, 0, 0.86944],
        "87": [0, 0.68611, 0.01597, 0, 1.18888],
        "88": [0, 0.68611, 0, 0, 0.86944],
        "89": [0, 0.68611, 0.02875, 0, 0.86944],
        "90": [0, 0.68611, 0, 0, 0.70277],
        "91": [0.25, 0.75, 0, 0, 0.31944],
        "92": [0.25, 0.75, 0, 0, 0.575],
        "93": [0.25, 0.75, 0, 0, 0.31944],
        "94": [0, 0.69444, 0, 0, 0.575],
        "95": [0.31, 0.13444, 0.03194, 0, 0.575],
        "97": [0, 0.44444, 0, 0, 0.55902],
        "98": [0, 0.69444, 0, 0, 0.63889],
        "99": [0, 0.44444, 0, 0, 0.51111],
        "100": [0, 0.69444, 0, 0, 0.63889],
        "101": [0, 0.44444, 0, 0, 0.52708],
        "102": [0, 0.69444, 0.10903, 0, 0.35139],
        "103": [0.19444, 0.44444, 0.01597, 0, 0.575],
        "104": [0, 0.69444, 0, 0, 0.63889],
        "105": [0, 0.69444, 0, 0, 0.31944],
        "106": [0.19444, 0.69444, 0, 0, 0.35139],
        "107": [0, 0.69444, 0, 0, 0.60694],
        "108": [0, 0.69444, 0, 0, 0.31944],
        "109": [0, 0.44444, 0, 0, 0.95833],
        "110": [0, 0.44444, 0, 0, 0.63889],
        "111": [0, 0.44444, 0, 0, 0.575],
        "112": [0.19444, 0.44444, 0, 0, 0.63889],
        "113": [0.19444, 0.44444, 0, 0, 0.60694],
        "114": [0, 0.44444, 0, 0, 0.47361],
        "115": [0, 0.44444, 0, 0, 0.45361],
        "116": [0, 0.63492, 0, 0, 0.44722],
        "117": [0, 0.44444, 0, 0, 0.63889],
        "118": [0, 0.44444, 0.01597, 0, 0.60694],
        "119": [0, 0.44444, 0.01597, 0, 0.83055],
        "120": [0, 0.44444, 0, 0, 0.60694],
        "121": [0.19444, 0.44444, 0.01597, 0, 0.60694],
        "122": [0, 0.44444, 0, 0, 0.51111],
        "123": [0.25, 0.75, 0, 0, 0.575],
        "124": [0.25, 0.75, 0, 0, 0.31944],
        "125": [0.25, 0.75, 0, 0, 0.575],
        "126": [0.35, 0.34444, 0, 0, 0.575],
        "160": [0, 0, 0, 0, 0.25],
        "163": [0, 0.69444, 0, 0, 0.86853],
        "168": [0, 0.69444, 0, 0, 0.575],
        "172": [0, 0.44444, 0, 0, 0.76666],
        "176": [0, 0.69444, 0, 0, 0.86944],
        "177": [0.13333, 0.63333, 0, 0, 0.89444],
        "184": [0.17014, 0, 0, 0, 0.51111],
        "198": [0, 0.68611, 0, 0, 1.04166],
        "215": [0.13333, 0.63333, 0, 0, 0.89444],
        "216": [0.04861, 0.73472, 0, 0, 0.89444],
        "223": [0, 0.69444, 0, 0, 0.59722],
        "230": [0, 0.44444, 0, 0, 0.83055],
        "247": [0.13333, 0.63333, 0, 0, 0.89444],
        "248": [0.09722, 0.54167, 0, 0, 0.575],
        "305": [0, 0.44444, 0, 0, 0.31944],
        "338": [0, 0.68611, 0, 0, 1.16944],
        "339": [0, 0.44444, 0, 0, 0.89444],
        "567": [0.19444, 0.44444, 0, 0, 0.35139],
        "710": [0, 0.69444, 0, 0, 0.575],
        "711": [0, 0.63194, 0, 0, 0.575],
        "713": [0, 0.59611, 0, 0, 0.575],
        "714": [0, 0.69444, 0, 0, 0.575],
        "715": [0, 0.69444, 0, 0, 0.575],
        "728": [0, 0.69444, 0, 0, 0.575],
        "729": [0, 0.69444, 0, 0, 0.31944],
        "730": [0, 0.69444, 0, 0, 0.86944],
        "732": [0, 0.69444, 0, 0, 0.575],
        "733": [0, 0.69444, 0, 0, 0.575],
        "915": [0, 0.68611, 0, 0, 0.69166],
        "916": [0, 0.68611, 0, 0, 0.95833],
        "920": [0, 0.68611, 0, 0, 0.89444],
        "923": [0, 0.68611, 0, 0, 0.80555],
        "926": [0, 0.68611, 0, 0, 0.76666],
        "928": [0, 0.68611, 0, 0, 0.9],
        "931": [0, 0.68611, 0, 0, 0.83055],
        "933": [0, 0.68611, 0, 0, 0.89444],
        "934": [0, 0.68611, 0, 0, 0.83055],
        "936": [0, 0.68611, 0, 0, 0.89444],
        "937": [0, 0.68611, 0, 0, 0.83055],
        "8211": [0, 0.44444, 0.03194, 0, 0.575],
        "8212": [0, 0.44444, 0.03194, 0, 1.14999],
        "8216": [0, 0.69444, 0, 0, 0.31944],
        "8217": [0, 0.69444, 0, 0, 0.31944],
        "8220": [0, 0.69444, 0, 0, 0.60278],
        "8221": [0, 0.69444, 0, 0, 0.60278],
        "8224": [0.19444, 0.69444, 0, 0, 0.51111],
        "8225": [0.19444, 0.69444, 0, 0, 0.51111],
        "8242": [0, 0.55556, 0, 0, 0.34444],
        "8407": [0, 0.72444, 0.15486, 0, 0.575],
        "8463": [0, 0.69444, 0, 0, 0.66759],
        "8465": [0, 0.69444, 0, 0, 0.83055],
        "8467": [0, 0.69444, 0, 0, 0.47361],
        "8472": [0.19444, 0.44444, 0, 0, 0.74027],
        "8476": [0, 0.69444, 0, 0, 0.83055],
        "8501": [0, 0.69444, 0, 0, 0.70277],
        "8592": [-0.10889, 0.39111, 0, 0, 1.14999],
        "8593": [0.19444, 0.69444, 0, 0, 0.575],
        "8594": [-0.10889, 0.39111, 0, 0, 1.14999],
        "8595": [0.19444, 0.69444, 0, 0, 0.575],
        "8596": [-0.10889, 0.39111, 0, 0, 1.14999],
        "8597": [0.25, 0.75, 0, 0, 0.575],
        "8598": [0.19444, 0.69444, 0, 0, 1.14999],
        "8599": [0.19444, 0.69444, 0, 0, 1.14999],
        "8600": [0.19444, 0.69444, 0, 0, 1.14999],
        "8601": [0.19444, 0.69444, 0, 0, 1.14999],
        "8636": [-0.10889, 0.39111, 0, 0, 1.14999],
        "8637": [-0.10889, 0.39111, 0, 0, 1.14999],
        "8640": [-0.10889, 0.39111, 0, 0, 1.14999],
        "8641": [-0.10889, 0.39111, 0, 0, 1.14999],
        "8656": [-0.10889, 0.39111, 0, 0, 1.14999],
        "8657": [0.19444, 0.69444, 0, 0, 0.70277],
        "8658": [-0.10889, 0.39111, 0, 0, 1.14999],
        "8659": [0.19444, 0.69444, 0, 0, 0.70277],
        "8660": [-0.10889, 0.39111, 0, 0, 1.14999],
        "8661": [0.25, 0.75, 0, 0, 0.70277],
        "8704": [0, 0.69444, 0, 0, 0.63889],
        "8706": [0, 0.69444, 0.06389, 0, 0.62847],
        "8707": [0, 0.69444, 0, 0, 0.63889],
        "8709": [0.05556, 0.75, 0, 0, 0.575],
        "8711": [0, 0.68611, 0, 0, 0.95833],
        "8712": [0.08556, 0.58556, 0, 0, 0.76666],
        "8715": [0.08556, 0.58556, 0, 0, 0.76666],
        "8722": [0.13333, 0.63333, 0, 0, 0.89444],
        "8723": [0.13333, 0.63333, 0, 0, 0.89444],
        "8725": [0.25, 0.75, 0, 0, 0.575],
        "8726": [0.25, 0.75, 0, 0, 0.575],
        "8727": [-0.02778, 0.47222, 0, 0, 0.575],
        "8728": [-0.02639, 0.47361, 0, 0, 0.575],
        "8729": [-0.02639, 0.47361, 0, 0, 0.575],
        "8730": [0.18, 0.82, 0, 0, 0.95833],
        "8733": [0, 0.44444, 0, 0, 0.89444],
        "8734": [0, 0.44444, 0, 0, 1.14999],
        "8736": [0, 0.69224, 0, 0, 0.72222],
        "8739": [0.25, 0.75, 0, 0, 0.31944],
        "8741": [0.25, 0.75, 0, 0, 0.575],
        "8743": [0, 0.55556, 0, 0, 0.76666],
        "8744": [0, 0.55556, 0, 0, 0.76666],
        "8745": [0, 0.55556, 0, 0, 0.76666],
        "8746": [0, 0.55556, 0, 0, 0.76666],
        "8747": [0.19444, 0.69444, 0.12778, 0, 0.56875],
        "8764": [-0.10889, 0.39111, 0, 0, 0.89444],
        "8768": [0.19444, 0.69444, 0, 0, 0.31944],
        "8771": [222e-5, 0.50222, 0, 0, 0.89444],
        "8773": [0.027, 0.638, 0, 0, 0.894],
        "8776": [0.02444, 0.52444, 0, 0, 0.89444],
        "8781": [222e-5, 0.50222, 0, 0, 0.89444],
        "8801": [222e-5, 0.50222, 0, 0, 0.89444],
        "8804": [0.19667, 0.69667, 0, 0, 0.89444],
        "8805": [0.19667, 0.69667, 0, 0, 0.89444],
        "8810": [0.08556, 0.58556, 0, 0, 1.14999],
        "8811": [0.08556, 0.58556, 0, 0, 1.14999],
        "8826": [0.08556, 0.58556, 0, 0, 0.89444],
        "8827": [0.08556, 0.58556, 0, 0, 0.89444],
        "8834": [0.08556, 0.58556, 0, 0, 0.89444],
        "8835": [0.08556, 0.58556, 0, 0, 0.89444],
        "8838": [0.19667, 0.69667, 0, 0, 0.89444],
        "8839": [0.19667, 0.69667, 0, 0, 0.89444],
        "8846": [0, 0.55556, 0, 0, 0.76666],
        "8849": [0.19667, 0.69667, 0, 0, 0.89444],
        "8850": [0.19667, 0.69667, 0, 0, 0.89444],
        "8851": [0, 0.55556, 0, 0, 0.76666],
        "8852": [0, 0.55556, 0, 0, 0.76666],
        "8853": [0.13333, 0.63333, 0, 0, 0.89444],
        "8854": [0.13333, 0.63333, 0, 0, 0.89444],
        "8855": [0.13333, 0.63333, 0, 0, 0.89444],
        "8856": [0.13333, 0.63333, 0, 0, 0.89444],
        "8857": [0.13333, 0.63333, 0, 0, 0.89444],
        "8866": [0, 0.69444, 0, 0, 0.70277],
        "8867": [0, 0.69444, 0, 0, 0.70277],
        "8868": [0, 0.69444, 0, 0, 0.89444],
        "8869": [0, 0.69444, 0, 0, 0.89444],
        "8900": [-0.02639, 0.47361, 0, 0, 0.575],
        "8901": [-0.02639, 0.47361, 0, 0, 0.31944],
        "8902": [-0.02778, 0.47222, 0, 0, 0.575],
        "8968": [0.25, 0.75, 0, 0, 0.51111],
        "8969": [0.25, 0.75, 0, 0, 0.51111],
        "8970": [0.25, 0.75, 0, 0, 0.51111],
        "8971": [0.25, 0.75, 0, 0, 0.51111],
        "8994": [-0.13889, 0.36111, 0, 0, 1.14999],
        "8995": [-0.13889, 0.36111, 0, 0, 1.14999],
        "9651": [0.19444, 0.69444, 0, 0, 1.02222],
        "9657": [-0.02778, 0.47222, 0, 0, 0.575],
        "9661": [0.19444, 0.69444, 0, 0, 1.02222],
        "9667": [-0.02778, 0.47222, 0, 0, 0.575],
        "9711": [0.19444, 0.69444, 0, 0, 1.14999],
        "9824": [0.12963, 0.69444, 0, 0, 0.89444],
        "9825": [0.12963, 0.69444, 0, 0, 0.89444],
        "9826": [0.12963, 0.69444, 0, 0, 0.89444],
        "9827": [0.12963, 0.69444, 0, 0, 0.89444],
        "9837": [0, 0.75, 0, 0, 0.44722],
        "9838": [0.19444, 0.69444, 0, 0, 0.44722],
        "9839": [0.19444, 0.69444, 0, 0, 0.44722],
        "10216": [0.25, 0.75, 0, 0, 0.44722],
        "10217": [0.25, 0.75, 0, 0, 0.44722],
        "10815": [0, 0.68611, 0, 0, 0.9],
        "10927": [0.19667, 0.69667, 0, 0, 0.89444],
        "10928": [0.19667, 0.69667, 0, 0, 0.89444],
        "57376": [0.19444, 0.69444, 0, 0, 0]
      },
      "Main-BoldItalic": {
        "32": [0, 0, 0, 0, 0.25],
        "33": [0, 0.69444, 0.11417, 0, 0.38611],
        "34": [0, 0.69444, 0.07939, 0, 0.62055],
        "35": [0.19444, 0.69444, 0.06833, 0, 0.94444],
        "37": [0.05556, 0.75, 0.12861, 0, 0.94444],
        "38": [0, 0.69444, 0.08528, 0, 0.88555],
        "39": [0, 0.69444, 0.12945, 0, 0.35555],
        "40": [0.25, 0.75, 0.15806, 0, 0.47333],
        "41": [0.25, 0.75, 0.03306, 0, 0.47333],
        "42": [0, 0.75, 0.14333, 0, 0.59111],
        "43": [0.10333, 0.60333, 0.03306, 0, 0.88555],
        "44": [0.19444, 0.14722, 0, 0, 0.35555],
        "45": [0, 0.44444, 0.02611, 0, 0.41444],
        "46": [0, 0.14722, 0, 0, 0.35555],
        "47": [0.25, 0.75, 0.15806, 0, 0.59111],
        "48": [0, 0.64444, 0.13167, 0, 0.59111],
        "49": [0, 0.64444, 0.13167, 0, 0.59111],
        "50": [0, 0.64444, 0.13167, 0, 0.59111],
        "51": [0, 0.64444, 0.13167, 0, 0.59111],
        "52": [0.19444, 0.64444, 0.13167, 0, 0.59111],
        "53": [0, 0.64444, 0.13167, 0, 0.59111],
        "54": [0, 0.64444, 0.13167, 0, 0.59111],
        "55": [0.19444, 0.64444, 0.13167, 0, 0.59111],
        "56": [0, 0.64444, 0.13167, 0, 0.59111],
        "57": [0, 0.64444, 0.13167, 0, 0.59111],
        "58": [0, 0.44444, 0.06695, 0, 0.35555],
        "59": [0.19444, 0.44444, 0.06695, 0, 0.35555],
        "61": [-0.10889, 0.39111, 0.06833, 0, 0.88555],
        "63": [0, 0.69444, 0.11472, 0, 0.59111],
        "64": [0, 0.69444, 0.09208, 0, 0.88555],
        "65": [0, 0.68611, 0, 0, 0.86555],
        "66": [0, 0.68611, 0.0992, 0, 0.81666],
        "67": [0, 0.68611, 0.14208, 0, 0.82666],
        "68": [0, 0.68611, 0.09062, 0, 0.87555],
        "69": [0, 0.68611, 0.11431, 0, 0.75666],
        "70": [0, 0.68611, 0.12903, 0, 0.72722],
        "71": [0, 0.68611, 0.07347, 0, 0.89527],
        "72": [0, 0.68611, 0.17208, 0, 0.8961],
        "73": [0, 0.68611, 0.15681, 0, 0.47166],
        "74": [0, 0.68611, 0.145, 0, 0.61055],
        "75": [0, 0.68611, 0.14208, 0, 0.89499],
        "76": [0, 0.68611, 0, 0, 0.69777],
        "77": [0, 0.68611, 0.17208, 0, 1.07277],
        "78": [0, 0.68611, 0.17208, 0, 0.8961],
        "79": [0, 0.68611, 0.09062, 0, 0.85499],
        "80": [0, 0.68611, 0.0992, 0, 0.78721],
        "81": [0.19444, 0.68611, 0.09062, 0, 0.85499],
        "82": [0, 0.68611, 0.02559, 0, 0.85944],
        "83": [0, 0.68611, 0.11264, 0, 0.64999],
        "84": [0, 0.68611, 0.12903, 0, 0.7961],
        "85": [0, 0.68611, 0.17208, 0, 0.88083],
        "86": [0, 0.68611, 0.18625, 0, 0.86555],
        "87": [0, 0.68611, 0.18625, 0, 1.15999],
        "88": [0, 0.68611, 0.15681, 0, 0.86555],
        "89": [0, 0.68611, 0.19803, 0, 0.86555],
        "90": [0, 0.68611, 0.14208, 0, 0.70888],
        "91": [0.25, 0.75, 0.1875, 0, 0.35611],
        "93": [0.25, 0.75, 0.09972, 0, 0.35611],
        "94": [0, 0.69444, 0.06709, 0, 0.59111],
        "95": [0.31, 0.13444, 0.09811, 0, 0.59111],
        "97": [0, 0.44444, 0.09426, 0, 0.59111],
        "98": [0, 0.69444, 0.07861, 0, 0.53222],
        "99": [0, 0.44444, 0.05222, 0, 0.53222],
        "100": [0, 0.69444, 0.10861, 0, 0.59111],
        "101": [0, 0.44444, 0.085, 0, 0.53222],
        "102": [0.19444, 0.69444, 0.21778, 0, 0.4],
        "103": [0.19444, 0.44444, 0.105, 0, 0.53222],
        "104": [0, 0.69444, 0.09426, 0, 0.59111],
        "105": [0, 0.69326, 0.11387, 0, 0.35555],
        "106": [0.19444, 0.69326, 0.1672, 0, 0.35555],
        "107": [0, 0.69444, 0.11111, 0, 0.53222],
        "108": [0, 0.69444, 0.10861, 0, 0.29666],
        "109": [0, 0.44444, 0.09426, 0, 0.94444],
        "110": [0, 0.44444, 0.09426, 0, 0.64999],
        "111": [0, 0.44444, 0.07861, 0, 0.59111],
        "112": [0.19444, 0.44444, 0.07861, 0, 0.59111],
        "113": [0.19444, 0.44444, 0.105, 0, 0.53222],
        "114": [0, 0.44444, 0.11111, 0, 0.50167],
        "115": [0, 0.44444, 0.08167, 0, 0.48694],
        "116": [0, 0.63492, 0.09639, 0, 0.385],
        "117": [0, 0.44444, 0.09426, 0, 0.62055],
        "118": [0, 0.44444, 0.11111, 0, 0.53222],
        "119": [0, 0.44444, 0.11111, 0, 0.76777],
        "120": [0, 0.44444, 0.12583, 0, 0.56055],
        "121": [0.19444, 0.44444, 0.105, 0, 0.56166],
        "122": [0, 0.44444, 0.13889, 0, 0.49055],
        "126": [0.35, 0.34444, 0.11472, 0, 0.59111],
        "160": [0, 0, 0, 0, 0.25],
        "168": [0, 0.69444, 0.11473, 0, 0.59111],
        "176": [0, 0.69444, 0, 0, 0.94888],
        "184": [0.17014, 0, 0, 0, 0.53222],
        "198": [0, 0.68611, 0.11431, 0, 1.02277],
        "216": [0.04861, 0.73472, 0.09062, 0, 0.88555],
        "223": [0.19444, 0.69444, 0.09736, 0, 0.665],
        "230": [0, 0.44444, 0.085, 0, 0.82666],
        "248": [0.09722, 0.54167, 0.09458, 0, 0.59111],
        "305": [0, 0.44444, 0.09426, 0, 0.35555],
        "338": [0, 0.68611, 0.11431, 0, 1.14054],
        "339": [0, 0.44444, 0.085, 0, 0.82666],
        "567": [0.19444, 0.44444, 0.04611, 0, 0.385],
        "710": [0, 0.69444, 0.06709, 0, 0.59111],
        "711": [0, 0.63194, 0.08271, 0, 0.59111],
        "713": [0, 0.59444, 0.10444, 0, 0.59111],
        "714": [0, 0.69444, 0.08528, 0, 0.59111],
        "715": [0, 0.69444, 0, 0, 0.59111],
        "728": [0, 0.69444, 0.10333, 0, 0.59111],
        "729": [0, 0.69444, 0.12945, 0, 0.35555],
        "730": [0, 0.69444, 0, 0, 0.94888],
        "732": [0, 0.69444, 0.11472, 0, 0.59111],
        "733": [0, 0.69444, 0.11472, 0, 0.59111],
        "915": [0, 0.68611, 0.12903, 0, 0.69777],
        "916": [0, 0.68611, 0, 0, 0.94444],
        "920": [0, 0.68611, 0.09062, 0, 0.88555],
        "923": [0, 0.68611, 0, 0, 0.80666],
        "926": [0, 0.68611, 0.15092, 0, 0.76777],
        "928": [0, 0.68611, 0.17208, 0, 0.8961],
        "931": [0, 0.68611, 0.11431, 0, 0.82666],
        "933": [0, 0.68611, 0.10778, 0, 0.88555],
        "934": [0, 0.68611, 0.05632, 0, 0.82666],
        "936": [0, 0.68611, 0.10778, 0, 0.88555],
        "937": [0, 0.68611, 0.0992, 0, 0.82666],
        "8211": [0, 0.44444, 0.09811, 0, 0.59111],
        "8212": [0, 0.44444, 0.09811, 0, 1.18221],
        "8216": [0, 0.69444, 0.12945, 0, 0.35555],
        "8217": [0, 0.69444, 0.12945, 0, 0.35555],
        "8220": [0, 0.69444, 0.16772, 0, 0.62055],
        "8221": [0, 0.69444, 0.07939, 0, 0.62055]
      },
      "Main-Italic": {
        "32": [0, 0, 0, 0, 0.25],
        "33": [0, 0.69444, 0.12417, 0, 0.30667],
        "34": [0, 0.69444, 0.06961, 0, 0.51444],
        "35": [0.19444, 0.69444, 0.06616, 0, 0.81777],
        "37": [0.05556, 0.75, 0.13639, 0, 0.81777],
        "38": [0, 0.69444, 0.09694, 0, 0.76666],
        "39": [0, 0.69444, 0.12417, 0, 0.30667],
        "40": [0.25, 0.75, 0.16194, 0, 0.40889],
        "41": [0.25, 0.75, 0.03694, 0, 0.40889],
        "42": [0, 0.75, 0.14917, 0, 0.51111],
        "43": [0.05667, 0.56167, 0.03694, 0, 0.76666],
        "44": [0.19444, 0.10556, 0, 0, 0.30667],
        "45": [0, 0.43056, 0.02826, 0, 0.35778],
        "46": [0, 0.10556, 0, 0, 0.30667],
        "47": [0.25, 0.75, 0.16194, 0, 0.51111],
        "48": [0, 0.64444, 0.13556, 0, 0.51111],
        "49": [0, 0.64444, 0.13556, 0, 0.51111],
        "50": [0, 0.64444, 0.13556, 0, 0.51111],
        "51": [0, 0.64444, 0.13556, 0, 0.51111],
        "52": [0.19444, 0.64444, 0.13556, 0, 0.51111],
        "53": [0, 0.64444, 0.13556, 0, 0.51111],
        "54": [0, 0.64444, 0.13556, 0, 0.51111],
        "55": [0.19444, 0.64444, 0.13556, 0, 0.51111],
        "56": [0, 0.64444, 0.13556, 0, 0.51111],
        "57": [0, 0.64444, 0.13556, 0, 0.51111],
        "58": [0, 0.43056, 0.0582, 0, 0.30667],
        "59": [0.19444, 0.43056, 0.0582, 0, 0.30667],
        "61": [-0.13313, 0.36687, 0.06616, 0, 0.76666],
        "63": [0, 0.69444, 0.1225, 0, 0.51111],
        "64": [0, 0.69444, 0.09597, 0, 0.76666],
        "65": [0, 0.68333, 0, 0, 0.74333],
        "66": [0, 0.68333, 0.10257, 0, 0.70389],
        "67": [0, 0.68333, 0.14528, 0, 0.71555],
        "68": [0, 0.68333, 0.09403, 0, 0.755],
        "69": [0, 0.68333, 0.12028, 0, 0.67833],
        "70": [0, 0.68333, 0.13305, 0, 0.65277],
        "71": [0, 0.68333, 0.08722, 0, 0.77361],
        "72": [0, 0.68333, 0.16389, 0, 0.74333],
        "73": [0, 0.68333, 0.15806, 0, 0.38555],
        "74": [0, 0.68333, 0.14028, 0, 0.525],
        "75": [0, 0.68333, 0.14528, 0, 0.76888],
        "76": [0, 0.68333, 0, 0, 0.62722],
        "77": [0, 0.68333, 0.16389, 0, 0.89666],
        "78": [0, 0.68333, 0.16389, 0, 0.74333],
        "79": [0, 0.68333, 0.09403, 0, 0.76666],
        "80": [0, 0.68333, 0.10257, 0, 0.67833],
        "81": [0.19444, 0.68333, 0.09403, 0, 0.76666],
        "82": [0, 0.68333, 0.03868, 0, 0.72944],
        "83": [0, 0.68333, 0.11972, 0, 0.56222],
        "84": [0, 0.68333, 0.13305, 0, 0.71555],
        "85": [0, 0.68333, 0.16389, 0, 0.74333],
        "86": [0, 0.68333, 0.18361, 0, 0.74333],
        "87": [0, 0.68333, 0.18361, 0, 0.99888],
        "88": [0, 0.68333, 0.15806, 0, 0.74333],
        "89": [0, 0.68333, 0.19383, 0, 0.74333],
        "90": [0, 0.68333, 0.14528, 0, 0.61333],
        "91": [0.25, 0.75, 0.1875, 0, 0.30667],
        "93": [0.25, 0.75, 0.10528, 0, 0.30667],
        "94": [0, 0.69444, 0.06646, 0, 0.51111],
        "95": [0.31, 0.12056, 0.09208, 0, 0.51111],
        "97": [0, 0.43056, 0.07671, 0, 0.51111],
        "98": [0, 0.69444, 0.06312, 0, 0.46],
        "99": [0, 0.43056, 0.05653, 0, 0.46],
        "100": [0, 0.69444, 0.10333, 0, 0.51111],
        "101": [0, 0.43056, 0.07514, 0, 0.46],
        "102": [0.19444, 0.69444, 0.21194, 0, 0.30667],
        "103": [0.19444, 0.43056, 0.08847, 0, 0.46],
        "104": [0, 0.69444, 0.07671, 0, 0.51111],
        "105": [0, 0.65536, 0.1019, 0, 0.30667],
        "106": [0.19444, 0.65536, 0.14467, 0, 0.30667],
        "107": [0, 0.69444, 0.10764, 0, 0.46],
        "108": [0, 0.69444, 0.10333, 0, 0.25555],
        "109": [0, 0.43056, 0.07671, 0, 0.81777],
        "110": [0, 0.43056, 0.07671, 0, 0.56222],
        "111": [0, 0.43056, 0.06312, 0, 0.51111],
        "112": [0.19444, 0.43056, 0.06312, 0, 0.51111],
        "113": [0.19444, 0.43056, 0.08847, 0, 0.46],
        "114": [0, 0.43056, 0.10764, 0, 0.42166],
        "115": [0, 0.43056, 0.08208, 0, 0.40889],
        "116": [0, 0.61508, 0.09486, 0, 0.33222],
        "117": [0, 0.43056, 0.07671, 0, 0.53666],
        "118": [0, 0.43056, 0.10764, 0, 0.46],
        "119": [0, 0.43056, 0.10764, 0, 0.66444],
        "120": [0, 0.43056, 0.12042, 0, 0.46389],
        "121": [0.19444, 0.43056, 0.08847, 0, 0.48555],
        "122": [0, 0.43056, 0.12292, 0, 0.40889],
        "126": [0.35, 0.31786, 0.11585, 0, 0.51111],
        "160": [0, 0, 0, 0, 0.25],
        "168": [0, 0.66786, 0.10474, 0, 0.51111],
        "176": [0, 0.69444, 0, 0, 0.83129],
        "184": [0.17014, 0, 0, 0, 0.46],
        "198": [0, 0.68333, 0.12028, 0, 0.88277],
        "216": [0.04861, 0.73194, 0.09403, 0, 0.76666],
        "223": [0.19444, 0.69444, 0.10514, 0, 0.53666],
        "230": [0, 0.43056, 0.07514, 0, 0.71555],
        "248": [0.09722, 0.52778, 0.09194, 0, 0.51111],
        "338": [0, 0.68333, 0.12028, 0, 0.98499],
        "339": [0, 0.43056, 0.07514, 0, 0.71555],
        "710": [0, 0.69444, 0.06646, 0, 0.51111],
        "711": [0, 0.62847, 0.08295, 0, 0.51111],
        "713": [0, 0.56167, 0.10333, 0, 0.51111],
        "714": [0, 0.69444, 0.09694, 0, 0.51111],
        "715": [0, 0.69444, 0, 0, 0.51111],
        "728": [0, 0.69444, 0.10806, 0, 0.51111],
        "729": [0, 0.66786, 0.11752, 0, 0.30667],
        "730": [0, 0.69444, 0, 0, 0.83129],
        "732": [0, 0.66786, 0.11585, 0, 0.51111],
        "733": [0, 0.69444, 0.1225, 0, 0.51111],
        "915": [0, 0.68333, 0.13305, 0, 0.62722],
        "916": [0, 0.68333, 0, 0, 0.81777],
        "920": [0, 0.68333, 0.09403, 0, 0.76666],
        "923": [0, 0.68333, 0, 0, 0.69222],
        "926": [0, 0.68333, 0.15294, 0, 0.66444],
        "928": [0, 0.68333, 0.16389, 0, 0.74333],
        "931": [0, 0.68333, 0.12028, 0, 0.71555],
        "933": [0, 0.68333, 0.11111, 0, 0.76666],
        "934": [0, 0.68333, 0.05986, 0, 0.71555],
        "936": [0, 0.68333, 0.11111, 0, 0.76666],
        "937": [0, 0.68333, 0.10257, 0, 0.71555],
        "8211": [0, 0.43056, 0.09208, 0, 0.51111],
        "8212": [0, 0.43056, 0.09208, 0, 1.02222],
        "8216": [0, 0.69444, 0.12417, 0, 0.30667],
        "8217": [0, 0.69444, 0.12417, 0, 0.30667],
        "8220": [0, 0.69444, 0.1685, 0, 0.51444],
        "8221": [0, 0.69444, 0.06961, 0, 0.51444],
        "8463": [0, 0.68889, 0, 0, 0.54028]
      },
      "Main-Regular": {
        "32": [0, 0, 0, 0, 0.25],
        "33": [0, 0.69444, 0, 0, 0.27778],
        "34": [0, 0.69444, 0, 0, 0.5],
        "35": [0.19444, 0.69444, 0, 0, 0.83334],
        "36": [0.05556, 0.75, 0, 0, 0.5],
        "37": [0.05556, 0.75, 0, 0, 0.83334],
        "38": [0, 0.69444, 0, 0, 0.77778],
        "39": [0, 0.69444, 0, 0, 0.27778],
        "40": [0.25, 0.75, 0, 0, 0.38889],
        "41": [0.25, 0.75, 0, 0, 0.38889],
        "42": [0, 0.75, 0, 0, 0.5],
        "43": [0.08333, 0.58333, 0, 0, 0.77778],
        "44": [0.19444, 0.10556, 0, 0, 0.27778],
        "45": [0, 0.43056, 0, 0, 0.33333],
        "46": [0, 0.10556, 0, 0, 0.27778],
        "47": [0.25, 0.75, 0, 0, 0.5],
        "48": [0, 0.64444, 0, 0, 0.5],
        "49": [0, 0.64444, 0, 0, 0.5],
        "50": [0, 0.64444, 0, 0, 0.5],
        "51": [0, 0.64444, 0, 0, 0.5],
        "52": [0, 0.64444, 0, 0, 0.5],
        "53": [0, 0.64444, 0, 0, 0.5],
        "54": [0, 0.64444, 0, 0, 0.5],
        "55": [0, 0.64444, 0, 0, 0.5],
        "56": [0, 0.64444, 0, 0, 0.5],
        "57": [0, 0.64444, 0, 0, 0.5],
        "58": [0, 0.43056, 0, 0, 0.27778],
        "59": [0.19444, 0.43056, 0, 0, 0.27778],
        "60": [0.0391, 0.5391, 0, 0, 0.77778],
        "61": [-0.13313, 0.36687, 0, 0, 0.77778],
        "62": [0.0391, 0.5391, 0, 0, 0.77778],
        "63": [0, 0.69444, 0, 0, 0.47222],
        "64": [0, 0.69444, 0, 0, 0.77778],
        "65": [0, 0.68333, 0, 0, 0.75],
        "66": [0, 0.68333, 0, 0, 0.70834],
        "67": [0, 0.68333, 0, 0, 0.72222],
        "68": [0, 0.68333, 0, 0, 0.76389],
        "69": [0, 0.68333, 0, 0, 0.68056],
        "70": [0, 0.68333, 0, 0, 0.65278],
        "71": [0, 0.68333, 0, 0, 0.78472],
        "72": [0, 0.68333, 0, 0, 0.75],
        "73": [0, 0.68333, 0, 0, 0.36111],
        "74": [0, 0.68333, 0, 0, 0.51389],
        "75": [0, 0.68333, 0, 0, 0.77778],
        "76": [0, 0.68333, 0, 0, 0.625],
        "77": [0, 0.68333, 0, 0, 0.91667],
        "78": [0, 0.68333, 0, 0, 0.75],
        "79": [0, 0.68333, 0, 0, 0.77778],
        "80": [0, 0.68333, 0, 0, 0.68056],
        "81": [0.19444, 0.68333, 0, 0, 0.77778],
        "82": [0, 0.68333, 0, 0, 0.73611],
        "83": [0, 0.68333, 0, 0, 0.55556],
        "84": [0, 0.68333, 0, 0, 0.72222],
        "85": [0, 0.68333, 0, 0, 0.75],
        "86": [0, 0.68333, 0.01389, 0, 0.75],
        "87": [0, 0.68333, 0.01389, 0, 1.02778],
        "88": [0, 0.68333, 0, 0, 0.75],
        "89": [0, 0.68333, 0.025, 0, 0.75],
        "90": [0, 0.68333, 0, 0, 0.61111],
        "91": [0.25, 0.75, 0, 0, 0.27778],
        "92": [0.25, 0.75, 0, 0, 0.5],
        "93": [0.25, 0.75, 0, 0, 0.27778],
        "94": [0, 0.69444, 0, 0, 0.5],
        "95": [0.31, 0.12056, 0.02778, 0, 0.5],
        "97": [0, 0.43056, 0, 0, 0.5],
        "98": [0, 0.69444, 0, 0, 0.55556],
        "99": [0, 0.43056, 0, 0, 0.44445],
        "100": [0, 0.69444, 0, 0, 0.55556],
        "101": [0, 0.43056, 0, 0, 0.44445],
        "102": [0, 0.69444, 0.07778, 0, 0.30556],
        "103": [0.19444, 0.43056, 0.01389, 0, 0.5],
        "104": [0, 0.69444, 0, 0, 0.55556],
        "105": [0, 0.66786, 0, 0, 0.27778],
        "106": [0.19444, 0.66786, 0, 0, 0.30556],
        "107": [0, 0.69444, 0, 0, 0.52778],
        "108": [0, 0.69444, 0, 0, 0.27778],
        "109": [0, 0.43056, 0, 0, 0.83334],
        "110": [0, 0.43056, 0, 0, 0.55556],
        "111": [0, 0.43056, 0, 0, 0.5],
        "112": [0.19444, 0.43056, 0, 0, 0.55556],
        "113": [0.19444, 0.43056, 0, 0, 0.52778],
        "114": [0, 0.43056, 0, 0, 0.39167],
        "115": [0, 0.43056, 0, 0, 0.39445],
        "116": [0, 0.61508, 0, 0, 0.38889],
        "117": [0, 0.43056, 0, 0, 0.55556],
        "118": [0, 0.43056, 0.01389, 0, 0.52778],
        "119": [0, 0.43056, 0.01389, 0, 0.72222],
        "120": [0, 0.43056, 0, 0, 0.52778],
        "121": [0.19444, 0.43056, 0.01389, 0, 0.52778],
        "122": [0, 0.43056, 0, 0, 0.44445],
        "123": [0.25, 0.75, 0, 0, 0.5],
        "124": [0.25, 0.75, 0, 0, 0.27778],
        "125": [0.25, 0.75, 0, 0, 0.5],
        "126": [0.35, 0.31786, 0, 0, 0.5],
        "160": [0, 0, 0, 0, 0.25],
        "163": [0, 0.69444, 0, 0, 0.76909],
        "167": [0.19444, 0.69444, 0, 0, 0.44445],
        "168": [0, 0.66786, 0, 0, 0.5],
        "172": [0, 0.43056, 0, 0, 0.66667],
        "176": [0, 0.69444, 0, 0, 0.75],
        "177": [0.08333, 0.58333, 0, 0, 0.77778],
        "182": [0.19444, 0.69444, 0, 0, 0.61111],
        "184": [0.17014, 0, 0, 0, 0.44445],
        "198": [0, 0.68333, 0, 0, 0.90278],
        "215": [0.08333, 0.58333, 0, 0, 0.77778],
        "216": [0.04861, 0.73194, 0, 0, 0.77778],
        "223": [0, 0.69444, 0, 0, 0.5],
        "230": [0, 0.43056, 0, 0, 0.72222],
        "247": [0.08333, 0.58333, 0, 0, 0.77778],
        "248": [0.09722, 0.52778, 0, 0, 0.5],
        "305": [0, 0.43056, 0, 0, 0.27778],
        "338": [0, 0.68333, 0, 0, 1.01389],
        "339": [0, 0.43056, 0, 0, 0.77778],
        "567": [0.19444, 0.43056, 0, 0, 0.30556],
        "710": [0, 0.69444, 0, 0, 0.5],
        "711": [0, 0.62847, 0, 0, 0.5],
        "713": [0, 0.56778, 0, 0, 0.5],
        "714": [0, 0.69444, 0, 0, 0.5],
        "715": [0, 0.69444, 0, 0, 0.5],
        "728": [0, 0.69444, 0, 0, 0.5],
        "729": [0, 0.66786, 0, 0, 0.27778],
        "730": [0, 0.69444, 0, 0, 0.75],
        "732": [0, 0.66786, 0, 0, 0.5],
        "733": [0, 0.69444, 0, 0, 0.5],
        "915": [0, 0.68333, 0, 0, 0.625],
        "916": [0, 0.68333, 0, 0, 0.83334],
        "920": [0, 0.68333, 0, 0, 0.77778],
        "923": [0, 0.68333, 0, 0, 0.69445],
        "926": [0, 0.68333, 0, 0, 0.66667],
        "928": [0, 0.68333, 0, 0, 0.75],
        "931": [0, 0.68333, 0, 0, 0.72222],
        "933": [0, 0.68333, 0, 0, 0.77778],
        "934": [0, 0.68333, 0, 0, 0.72222],
        "936": [0, 0.68333, 0, 0, 0.77778],
        "937": [0, 0.68333, 0, 0, 0.72222],
        "8211": [0, 0.43056, 0.02778, 0, 0.5],
        "8212": [0, 0.43056, 0.02778, 0, 1],
        "8216": [0, 0.69444, 0, 0, 0.27778],
        "8217": [0, 0.69444, 0, 0, 0.27778],
        "8220": [0, 0.69444, 0, 0, 0.5],
        "8221": [0, 0.69444, 0, 0, 0.5],
        "8224": [0.19444, 0.69444, 0, 0, 0.44445],
        "8225": [0.19444, 0.69444, 0, 0, 0.44445],
        "8230": [0, 0.123, 0, 0, 1.172],
        "8242": [0, 0.55556, 0, 0, 0.275],
        "8407": [0, 0.71444, 0.15382, 0, 0.5],
        "8463": [0, 0.68889, 0, 0, 0.54028],
        "8465": [0, 0.69444, 0, 0, 0.72222],
        "8467": [0, 0.69444, 0, 0.11111, 0.41667],
        "8472": [0.19444, 0.43056, 0, 0.11111, 0.63646],
        "8476": [0, 0.69444, 0, 0, 0.72222],
        "8501": [0, 0.69444, 0, 0, 0.61111],
        "8592": [-0.13313, 0.36687, 0, 0, 1],
        "8593": [0.19444, 0.69444, 0, 0, 0.5],
        "8594": [-0.13313, 0.36687, 0, 0, 1],
        "8595": [0.19444, 0.69444, 0, 0, 0.5],
        "8596": [-0.13313, 0.36687, 0, 0, 1],
        "8597": [0.25, 0.75, 0, 0, 0.5],
        "8598": [0.19444, 0.69444, 0, 0, 1],
        "8599": [0.19444, 0.69444, 0, 0, 1],
        "8600": [0.19444, 0.69444, 0, 0, 1],
        "8601": [0.19444, 0.69444, 0, 0, 1],
        "8614": [0.011, 0.511, 0, 0, 1],
        "8617": [0.011, 0.511, 0, 0, 1.126],
        "8618": [0.011, 0.511, 0, 0, 1.126],
        "8636": [-0.13313, 0.36687, 0, 0, 1],
        "8637": [-0.13313, 0.36687, 0, 0, 1],
        "8640": [-0.13313, 0.36687, 0, 0, 1],
        "8641": [-0.13313, 0.36687, 0, 0, 1],
        "8652": [0.011, 0.671, 0, 0, 1],
        "8656": [-0.13313, 0.36687, 0, 0, 1],
        "8657": [0.19444, 0.69444, 0, 0, 0.61111],
        "8658": [-0.13313, 0.36687, 0, 0, 1],
        "8659": [0.19444, 0.69444, 0, 0, 0.61111],
        "8660": [-0.13313, 0.36687, 0, 0, 1],
        "8661": [0.25, 0.75, 0, 0, 0.61111],
        "8704": [0, 0.69444, 0, 0, 0.55556],
        "8706": [0, 0.69444, 0.05556, 0.08334, 0.5309],
        "8707": [0, 0.69444, 0, 0, 0.55556],
        "8709": [0.05556, 0.75, 0, 0, 0.5],
        "8711": [0, 0.68333, 0, 0, 0.83334],
        "8712": [0.0391, 0.5391, 0, 0, 0.66667],
        "8715": [0.0391, 0.5391, 0, 0, 0.66667],
        "8722": [0.08333, 0.58333, 0, 0, 0.77778],
        "8723": [0.08333, 0.58333, 0, 0, 0.77778],
        "8725": [0.25, 0.75, 0, 0, 0.5],
        "8726": [0.25, 0.75, 0, 0, 0.5],
        "8727": [-0.03472, 0.46528, 0, 0, 0.5],
        "8728": [-0.05555, 0.44445, 0, 0, 0.5],
        "8729": [-0.05555, 0.44445, 0, 0, 0.5],
        "8730": [0.2, 0.8, 0, 0, 0.83334],
        "8733": [0, 0.43056, 0, 0, 0.77778],
        "8734": [0, 0.43056, 0, 0, 1],
        "8736": [0, 0.69224, 0, 0, 0.72222],
        "8739": [0.25, 0.75, 0, 0, 0.27778],
        "8741": [0.25, 0.75, 0, 0, 0.5],
        "8743": [0, 0.55556, 0, 0, 0.66667],
        "8744": [0, 0.55556, 0, 0, 0.66667],
        "8745": [0, 0.55556, 0, 0, 0.66667],
        "8746": [0, 0.55556, 0, 0, 0.66667],
        "8747": [0.19444, 0.69444, 0.11111, 0, 0.41667],
        "8764": [-0.13313, 0.36687, 0, 0, 0.77778],
        "8768": [0.19444, 0.69444, 0, 0, 0.27778],
        "8771": [-0.03625, 0.46375, 0, 0, 0.77778],
        "8773": [-0.022, 0.589, 0, 0, 0.778],
        "8776": [-0.01688, 0.48312, 0, 0, 0.77778],
        "8781": [-0.03625, 0.46375, 0, 0, 0.77778],
        "8784": [-0.133, 0.673, 0, 0, 0.778],
        "8801": [-0.03625, 0.46375, 0, 0, 0.77778],
        "8804": [0.13597, 0.63597, 0, 0, 0.77778],
        "8805": [0.13597, 0.63597, 0, 0, 0.77778],
        "8810": [0.0391, 0.5391, 0, 0, 1],
        "8811": [0.0391, 0.5391, 0, 0, 1],
        "8826": [0.0391, 0.5391, 0, 0, 0.77778],
        "8827": [0.0391, 0.5391, 0, 0, 0.77778],
        "8834": [0.0391, 0.5391, 0, 0, 0.77778],
        "8835": [0.0391, 0.5391, 0, 0, 0.77778],
        "8838": [0.13597, 0.63597, 0, 0, 0.77778],
        "8839": [0.13597, 0.63597, 0, 0, 0.77778],
        "8846": [0, 0.55556, 0, 0, 0.66667],
        "8849": [0.13597, 0.63597, 0, 0, 0.77778],
        "8850": [0.13597, 0.63597, 0, 0, 0.77778],
        "8851": [0, 0.55556, 0, 0, 0.66667],
        "8852": [0, 0.55556, 0, 0, 0.66667],
        "8853": [0.08333, 0.58333, 0, 0, 0.77778],
        "8854": [0.08333, 0.58333, 0, 0, 0.77778],
        "8855": [0.08333, 0.58333, 0, 0, 0.77778],
        "8856": [0.08333, 0.58333, 0, 0, 0.77778],
        "8857": [0.08333, 0.58333, 0, 0, 0.77778],
        "8866": [0, 0.69444, 0, 0, 0.61111],
        "8867": [0, 0.69444, 0, 0, 0.61111],
        "8868": [0, 0.69444, 0, 0, 0.77778],
        "8869": [0, 0.69444, 0, 0, 0.77778],
        "8872": [0.249, 0.75, 0, 0, 0.867],
        "8900": [-0.05555, 0.44445, 0, 0, 0.5],
        "8901": [-0.05555, 0.44445, 0, 0, 0.27778],
        "8902": [-0.03472, 0.46528, 0, 0, 0.5],
        "8904": [5e-3, 0.505, 0, 0, 0.9],
        "8942": [0.03, 0.903, 0, 0, 0.278],
        "8943": [-0.19, 0.313, 0, 0, 1.172],
        "8945": [-0.1, 0.823, 0, 0, 1.282],
        "8968": [0.25, 0.75, 0, 0, 0.44445],
        "8969": [0.25, 0.75, 0, 0, 0.44445],
        "8970": [0.25, 0.75, 0, 0, 0.44445],
        "8971": [0.25, 0.75, 0, 0, 0.44445],
        "8994": [-0.14236, 0.35764, 0, 0, 1],
        "8995": [-0.14236, 0.35764, 0, 0, 1],
        "9136": [0.244, 0.744, 0, 0, 0.412],
        "9137": [0.244, 0.745, 0, 0, 0.412],
        "9651": [0.19444, 0.69444, 0, 0, 0.88889],
        "9657": [-0.03472, 0.46528, 0, 0, 0.5],
        "9661": [0.19444, 0.69444, 0, 0, 0.88889],
        "9667": [-0.03472, 0.46528, 0, 0, 0.5],
        "9711": [0.19444, 0.69444, 0, 0, 1],
        "9824": [0.12963, 0.69444, 0, 0, 0.77778],
        "9825": [0.12963, 0.69444, 0, 0, 0.77778],
        "9826": [0.12963, 0.69444, 0, 0, 0.77778],
        "9827": [0.12963, 0.69444, 0, 0, 0.77778],
        "9837": [0, 0.75, 0, 0, 0.38889],
        "9838": [0.19444, 0.69444, 0, 0, 0.38889],
        "9839": [0.19444, 0.69444, 0, 0, 0.38889],
        "10216": [0.25, 0.75, 0, 0, 0.38889],
        "10217": [0.25, 0.75, 0, 0, 0.38889],
        "10222": [0.244, 0.744, 0, 0, 0.412],
        "10223": [0.244, 0.745, 0, 0, 0.412],
        "10229": [0.011, 0.511, 0, 0, 1.609],
        "10230": [0.011, 0.511, 0, 0, 1.638],
        "10231": [0.011, 0.511, 0, 0, 1.859],
        "10232": [0.024, 0.525, 0, 0, 1.609],
        "10233": [0.024, 0.525, 0, 0, 1.638],
        "10234": [0.024, 0.525, 0, 0, 1.858],
        "10236": [0.011, 0.511, 0, 0, 1.638],
        "10815": [0, 0.68333, 0, 0, 0.75],
        "10927": [0.13597, 0.63597, 0, 0, 0.77778],
        "10928": [0.13597, 0.63597, 0, 0, 0.77778],
        "57376": [0.19444, 0.69444, 0, 0, 0]
      },
      "Math-BoldItalic": {
        "32": [0, 0, 0, 0, 0.25],
        "48": [0, 0.44444, 0, 0, 0.575],
        "49": [0, 0.44444, 0, 0, 0.575],
        "50": [0, 0.44444, 0, 0, 0.575],
        "51": [0.19444, 0.44444, 0, 0, 0.575],
        "52": [0.19444, 0.44444, 0, 0, 0.575],
        "53": [0.19444, 0.44444, 0, 0, 0.575],
        "54": [0, 0.64444, 0, 0, 0.575],
        "55": [0.19444, 0.44444, 0, 0, 0.575],
        "56": [0, 0.64444, 0, 0, 0.575],
        "57": [0.19444, 0.44444, 0, 0, 0.575],
        "65": [0, 0.68611, 0, 0, 0.86944],
        "66": [0, 0.68611, 0.04835, 0, 0.8664],
        "67": [0, 0.68611, 0.06979, 0, 0.81694],
        "68": [0, 0.68611, 0.03194, 0, 0.93812],
        "69": [0, 0.68611, 0.05451, 0, 0.81007],
        "70": [0, 0.68611, 0.15972, 0, 0.68889],
        "71": [0, 0.68611, 0, 0, 0.88673],
        "72": [0, 0.68611, 0.08229, 0, 0.98229],
        "73": [0, 0.68611, 0.07778, 0, 0.51111],
        "74": [0, 0.68611, 0.10069, 0, 0.63125],
        "75": [0, 0.68611, 0.06979, 0, 0.97118],
        "76": [0, 0.68611, 0, 0, 0.75555],
        "77": [0, 0.68611, 0.11424, 0, 1.14201],
        "78": [0, 0.68611, 0.11424, 0, 0.95034],
        "79": [0, 0.68611, 0.03194, 0, 0.83666],
        "80": [0, 0.68611, 0.15972, 0, 0.72309],
        "81": [0.19444, 0.68611, 0, 0, 0.86861],
        "82": [0, 0.68611, 421e-5, 0, 0.87235],
        "83": [0, 0.68611, 0.05382, 0, 0.69271],
        "84": [0, 0.68611, 0.15972, 0, 0.63663],
        "85": [0, 0.68611, 0.11424, 0, 0.80027],
        "86": [0, 0.68611, 0.25555, 0, 0.67778],
        "87": [0, 0.68611, 0.15972, 0, 1.09305],
        "88": [0, 0.68611, 0.07778, 0, 0.94722],
        "89": [0, 0.68611, 0.25555, 0, 0.67458],
        "90": [0, 0.68611, 0.06979, 0, 0.77257],
        "97": [0, 0.44444, 0, 0, 0.63287],
        "98": [0, 0.69444, 0, 0, 0.52083],
        "99": [0, 0.44444, 0, 0, 0.51342],
        "100": [0, 0.69444, 0, 0, 0.60972],
        "101": [0, 0.44444, 0, 0, 0.55361],
        "102": [0.19444, 0.69444, 0.11042, 0, 0.56806],
        "103": [0.19444, 0.44444, 0.03704, 0, 0.5449],
        "104": [0, 0.69444, 0, 0, 0.66759],
        "105": [0, 0.69326, 0, 0, 0.4048],
        "106": [0.19444, 0.69326, 0.0622, 0, 0.47083],
        "107": [0, 0.69444, 0.01852, 0, 0.6037],
        "108": [0, 0.69444, 88e-4, 0, 0.34815],
        "109": [0, 0.44444, 0, 0, 1.0324],
        "110": [0, 0.44444, 0, 0, 0.71296],
        "111": [0, 0.44444, 0, 0, 0.58472],
        "112": [0.19444, 0.44444, 0, 0, 0.60092],
        "113": [0.19444, 0.44444, 0.03704, 0, 0.54213],
        "114": [0, 0.44444, 0.03194, 0, 0.5287],
        "115": [0, 0.44444, 0, 0, 0.53125],
        "116": [0, 0.63492, 0, 0, 0.41528],
        "117": [0, 0.44444, 0, 0, 0.68102],
        "118": [0, 0.44444, 0.03704, 0, 0.56666],
        "119": [0, 0.44444, 0.02778, 0, 0.83148],
        "120": [0, 0.44444, 0, 0, 0.65903],
        "121": [0.19444, 0.44444, 0.03704, 0, 0.59028],
        "122": [0, 0.44444, 0.04213, 0, 0.55509],
        "160": [0, 0, 0, 0, 0.25],
        "915": [0, 0.68611, 0.15972, 0, 0.65694],
        "916": [0, 0.68611, 0, 0, 0.95833],
        "920": [0, 0.68611, 0.03194, 0, 0.86722],
        "923": [0, 0.68611, 0, 0, 0.80555],
        "926": [0, 0.68611, 0.07458, 0, 0.84125],
        "928": [0, 0.68611, 0.08229, 0, 0.98229],
        "931": [0, 0.68611, 0.05451, 0, 0.88507],
        "933": [0, 0.68611, 0.15972, 0, 0.67083],
        "934": [0, 0.68611, 0, 0, 0.76666],
        "936": [0, 0.68611, 0.11653, 0, 0.71402],
        "937": [0, 0.68611, 0.04835, 0, 0.8789],
        "945": [0, 0.44444, 0, 0, 0.76064],
        "946": [0.19444, 0.69444, 0.03403, 0, 0.65972],
        "947": [0.19444, 0.44444, 0.06389, 0, 0.59003],
        "948": [0, 0.69444, 0.03819, 0, 0.52222],
        "949": [0, 0.44444, 0, 0, 0.52882],
        "950": [0.19444, 0.69444, 0.06215, 0, 0.50833],
        "951": [0.19444, 0.44444, 0.03704, 0, 0.6],
        "952": [0, 0.69444, 0.03194, 0, 0.5618],
        "953": [0, 0.44444, 0, 0, 0.41204],
        "954": [0, 0.44444, 0, 0, 0.66759],
        "955": [0, 0.69444, 0, 0, 0.67083],
        "956": [0.19444, 0.44444, 0, 0, 0.70787],
        "957": [0, 0.44444, 0.06898, 0, 0.57685],
        "958": [0.19444, 0.69444, 0.03021, 0, 0.50833],
        "959": [0, 0.44444, 0, 0, 0.58472],
        "960": [0, 0.44444, 0.03704, 0, 0.68241],
        "961": [0.19444, 0.44444, 0, 0, 0.6118],
        "962": [0.09722, 0.44444, 0.07917, 0, 0.42361],
        "963": [0, 0.44444, 0.03704, 0, 0.68588],
        "964": [0, 0.44444, 0.13472, 0, 0.52083],
        "965": [0, 0.44444, 0.03704, 0, 0.63055],
        "966": [0.19444, 0.44444, 0, 0, 0.74722],
        "967": [0.19444, 0.44444, 0, 0, 0.71805],
        "968": [0.19444, 0.69444, 0.03704, 0, 0.75833],
        "969": [0, 0.44444, 0.03704, 0, 0.71782],
        "977": [0, 0.69444, 0, 0, 0.69155],
        "981": [0.19444, 0.69444, 0, 0, 0.7125],
        "982": [0, 0.44444, 0.03194, 0, 0.975],
        "1009": [0.19444, 0.44444, 0, 0, 0.6118],
        "1013": [0, 0.44444, 0, 0, 0.48333],
        "57649": [0, 0.44444, 0, 0, 0.39352],
        "57911": [0.19444, 0.44444, 0, 0, 0.43889]
      },
      "Math-Italic": {
        "32": [0, 0, 0, 0, 0.25],
        "48": [0, 0.43056, 0, 0, 0.5],
        "49": [0, 0.43056, 0, 0, 0.5],
        "50": [0, 0.43056, 0, 0, 0.5],
        "51": [0.19444, 0.43056, 0, 0, 0.5],
        "52": [0.19444, 0.43056, 0, 0, 0.5],
        "53": [0.19444, 0.43056, 0, 0, 0.5],
        "54": [0, 0.64444, 0, 0, 0.5],
        "55": [0.19444, 0.43056, 0, 0, 0.5],
        "56": [0, 0.64444, 0, 0, 0.5],
        "57": [0.19444, 0.43056, 0, 0, 0.5],
        "65": [0, 0.68333, 0, 0.13889, 0.75],
        "66": [0, 0.68333, 0.05017, 0.08334, 0.75851],
        "67": [0, 0.68333, 0.07153, 0.08334, 0.71472],
        "68": [0, 0.68333, 0.02778, 0.05556, 0.82792],
        "69": [0, 0.68333, 0.05764, 0.08334, 0.7382],
        "70": [0, 0.68333, 0.13889, 0.08334, 0.64306],
        "71": [0, 0.68333, 0, 0.08334, 0.78625],
        "72": [0, 0.68333, 0.08125, 0.05556, 0.83125],
        "73": [0, 0.68333, 0.07847, 0.11111, 0.43958],
        "74": [0, 0.68333, 0.09618, 0.16667, 0.55451],
        "75": [0, 0.68333, 0.07153, 0.05556, 0.84931],
        "76": [0, 0.68333, 0, 0.02778, 0.68056],
        "77": [0, 0.68333, 0.10903, 0.08334, 0.97014],
        "78": [0, 0.68333, 0.10903, 0.08334, 0.80347],
        "79": [0, 0.68333, 0.02778, 0.08334, 0.76278],
        "80": [0, 0.68333, 0.13889, 0.08334, 0.64201],
        "81": [0.19444, 0.68333, 0, 0.08334, 0.79056],
        "82": [0, 0.68333, 773e-5, 0.08334, 0.75929],
        "83": [0, 0.68333, 0.05764, 0.08334, 0.6132],
        "84": [0, 0.68333, 0.13889, 0.08334, 0.58438],
        "85": [0, 0.68333, 0.10903, 0.02778, 0.68278],
        "86": [0, 0.68333, 0.22222, 0, 0.58333],
        "87": [0, 0.68333, 0.13889, 0, 0.94445],
        "88": [0, 0.68333, 0.07847, 0.08334, 0.82847],
        "89": [0, 0.68333, 0.22222, 0, 0.58056],
        "90": [0, 0.68333, 0.07153, 0.08334, 0.68264],
        "97": [0, 0.43056, 0, 0, 0.52859],
        "98": [0, 0.69444, 0, 0, 0.42917],
        "99": [0, 0.43056, 0, 0.05556, 0.43276],
        "100": [0, 0.69444, 0, 0.16667, 0.52049],
        "101": [0, 0.43056, 0, 0.05556, 0.46563],
        "102": [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
        "103": [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
        "104": [0, 0.69444, 0, 0, 0.57616],
        "105": [0, 0.65952, 0, 0, 0.34451],
        "106": [0.19444, 0.65952, 0.05724, 0, 0.41181],
        "107": [0, 0.69444, 0.03148, 0, 0.5206],
        "108": [0, 0.69444, 0.01968, 0.08334, 0.29838],
        "109": [0, 0.43056, 0, 0, 0.87801],
        "110": [0, 0.43056, 0, 0, 0.60023],
        "111": [0, 0.43056, 0, 0.05556, 0.48472],
        "112": [0.19444, 0.43056, 0, 0.08334, 0.50313],
        "113": [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
        "114": [0, 0.43056, 0.02778, 0.05556, 0.45116],
        "115": [0, 0.43056, 0, 0.05556, 0.46875],
        "116": [0, 0.61508, 0, 0.08334, 0.36111],
        "117": [0, 0.43056, 0, 0.02778, 0.57246],
        "118": [0, 0.43056, 0.03588, 0.02778, 0.48472],
        "119": [0, 0.43056, 0.02691, 0.08334, 0.71592],
        "120": [0, 0.43056, 0, 0.02778, 0.57153],
        "121": [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
        "122": [0, 0.43056, 0.04398, 0.05556, 0.46505],
        "160": [0, 0, 0, 0, 0.25],
        "915": [0, 0.68333, 0.13889, 0.08334, 0.61528],
        "916": [0, 0.68333, 0, 0.16667, 0.83334],
        "920": [0, 0.68333, 0.02778, 0.08334, 0.76278],
        "923": [0, 0.68333, 0, 0.16667, 0.69445],
        "926": [0, 0.68333, 0.07569, 0.08334, 0.74236],
        "928": [0, 0.68333, 0.08125, 0.05556, 0.83125],
        "931": [0, 0.68333, 0.05764, 0.08334, 0.77986],
        "933": [0, 0.68333, 0.13889, 0.05556, 0.58333],
        "934": [0, 0.68333, 0, 0.08334, 0.66667],
        "936": [0, 0.68333, 0.11, 0.05556, 0.61222],
        "937": [0, 0.68333, 0.05017, 0.08334, 0.7724],
        "945": [0, 0.43056, 37e-4, 0.02778, 0.6397],
        "946": [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
        "947": [0.19444, 0.43056, 0.05556, 0, 0.51773],
        "948": [0, 0.69444, 0.03785, 0.05556, 0.44444],
        "949": [0, 0.43056, 0, 0.08334, 0.46632],
        "950": [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
        "951": [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
        "952": [0, 0.69444, 0.02778, 0.08334, 0.46944],
        "953": [0, 0.43056, 0, 0.05556, 0.35394],
        "954": [0, 0.43056, 0, 0, 0.57616],
        "955": [0, 0.69444, 0, 0, 0.58334],
        "956": [0.19444, 0.43056, 0, 0.02778, 0.60255],
        "957": [0, 0.43056, 0.06366, 0.02778, 0.49398],
        "958": [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
        "959": [0, 0.43056, 0, 0.05556, 0.48472],
        "960": [0, 0.43056, 0.03588, 0, 0.57003],
        "961": [0.19444, 0.43056, 0, 0.08334, 0.51702],
        "962": [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
        "963": [0, 0.43056, 0.03588, 0, 0.57141],
        "964": [0, 0.43056, 0.1132, 0.02778, 0.43715],
        "965": [0, 0.43056, 0.03588, 0.02778, 0.54028],
        "966": [0.19444, 0.43056, 0, 0.08334, 0.65417],
        "967": [0.19444, 0.43056, 0, 0.05556, 0.62569],
        "968": [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
        "969": [0, 0.43056, 0.03588, 0, 0.62245],
        "977": [0, 0.69444, 0, 0.08334, 0.59144],
        "981": [0.19444, 0.69444, 0, 0.08334, 0.59583],
        "982": [0, 0.43056, 0.02778, 0, 0.82813],
        "1009": [0.19444, 0.43056, 0, 0.08334, 0.51702],
        "1013": [0, 0.43056, 0, 0.05556, 0.4059],
        "57649": [0, 0.43056, 0, 0.02778, 0.32246],
        "57911": [0.19444, 0.43056, 0, 0.08334, 0.38403]
      },
      "SansSerif-Bold": {
        "32": [0, 0, 0, 0, 0.25],
        "33": [0, 0.69444, 0, 0, 0.36667],
        "34": [0, 0.69444, 0, 0, 0.55834],
        "35": [0.19444, 0.69444, 0, 0, 0.91667],
        "36": [0.05556, 0.75, 0, 0, 0.55],
        "37": [0.05556, 0.75, 0, 0, 1.02912],
        "38": [0, 0.69444, 0, 0, 0.83056],
        "39": [0, 0.69444, 0, 0, 0.30556],
        "40": [0.25, 0.75, 0, 0, 0.42778],
        "41": [0.25, 0.75, 0, 0, 0.42778],
        "42": [0, 0.75, 0, 0, 0.55],
        "43": [0.11667, 0.61667, 0, 0, 0.85556],
        "44": [0.10556, 0.13056, 0, 0, 0.30556],
        "45": [0, 0.45833, 0, 0, 0.36667],
        "46": [0, 0.13056, 0, 0, 0.30556],
        "47": [0.25, 0.75, 0, 0, 0.55],
        "48": [0, 0.69444, 0, 0, 0.55],
        "49": [0, 0.69444, 0, 0, 0.55],
        "50": [0, 0.69444, 0, 0, 0.55],
        "51": [0, 0.69444, 0, 0, 0.55],
        "52": [0, 0.69444, 0, 0, 0.55],
        "53": [0, 0.69444, 0, 0, 0.55],
        "54": [0, 0.69444, 0, 0, 0.55],
        "55": [0, 0.69444, 0, 0, 0.55],
        "56": [0, 0.69444, 0, 0, 0.55],
        "57": [0, 0.69444, 0, 0, 0.55],
        "58": [0, 0.45833, 0, 0, 0.30556],
        "59": [0.10556, 0.45833, 0, 0, 0.30556],
        "61": [-0.09375, 0.40625, 0, 0, 0.85556],
        "63": [0, 0.69444, 0, 0, 0.51945],
        "64": [0, 0.69444, 0, 0, 0.73334],
        "65": [0, 0.69444, 0, 0, 0.73334],
        "66": [0, 0.69444, 0, 0, 0.73334],
        "67": [0, 0.69444, 0, 0, 0.70278],
        "68": [0, 0.69444, 0, 0, 0.79445],
        "69": [0, 0.69444, 0, 0, 0.64167],
        "70": [0, 0.69444, 0, 0, 0.61111],
        "71": [0, 0.69444, 0, 0, 0.73334],
        "72": [0, 0.69444, 0, 0, 0.79445],
        "73": [0, 0.69444, 0, 0, 0.33056],
        "74": [0, 0.69444, 0, 0, 0.51945],
        "75": [0, 0.69444, 0, 0, 0.76389],
        "76": [0, 0.69444, 0, 0, 0.58056],
        "77": [0, 0.69444, 0, 0, 0.97778],
        "78": [0, 0.69444, 0, 0, 0.79445],
        "79": [0, 0.69444, 0, 0, 0.79445],
        "80": [0, 0.69444, 0, 0, 0.70278],
        "81": [0.10556, 0.69444, 0, 0, 0.79445],
        "82": [0, 0.69444, 0, 0, 0.70278],
        "83": [0, 0.69444, 0, 0, 0.61111],
        "84": [0, 0.69444, 0, 0, 0.73334],
        "85": [0, 0.69444, 0, 0, 0.76389],
        "86": [0, 0.69444, 0.01528, 0, 0.73334],
        "87": [0, 0.69444, 0.01528, 0, 1.03889],
        "88": [0, 0.69444, 0, 0, 0.73334],
        "89": [0, 0.69444, 0.0275, 0, 0.73334],
        "90": [0, 0.69444, 0, 0, 0.67223],
        "91": [0.25, 0.75, 0, 0, 0.34306],
        "93": [0.25, 0.75, 0, 0, 0.34306],
        "94": [0, 0.69444, 0, 0, 0.55],
        "95": [0.35, 0.10833, 0.03056, 0, 0.55],
        "97": [0, 0.45833, 0, 0, 0.525],
        "98": [0, 0.69444, 0, 0, 0.56111],
        "99": [0, 0.45833, 0, 0, 0.48889],
        "100": [0, 0.69444, 0, 0, 0.56111],
        "101": [0, 0.45833, 0, 0, 0.51111],
        "102": [0, 0.69444, 0.07639, 0, 0.33611],
        "103": [0.19444, 0.45833, 0.01528, 0, 0.55],
        "104": [0, 0.69444, 0, 0, 0.56111],
        "105": [0, 0.69444, 0, 0, 0.25556],
        "106": [0.19444, 0.69444, 0, 0, 0.28611],
        "107": [0, 0.69444, 0, 0, 0.53056],
        "108": [0, 0.69444, 0, 0, 0.25556],
        "109": [0, 0.45833, 0, 0, 0.86667],
        "110": [0, 0.45833, 0, 0, 0.56111],
        "111": [0, 0.45833, 0, 0, 0.55],
        "112": [0.19444, 0.45833, 0, 0, 0.56111],
        "113": [0.19444, 0.45833, 0, 0, 0.56111],
        "114": [0, 0.45833, 0.01528, 0, 0.37222],
        "115": [0, 0.45833, 0, 0, 0.42167],
        "116": [0, 0.58929, 0, 0, 0.40417],
        "117": [0, 0.45833, 0, 0, 0.56111],
        "118": [0, 0.45833, 0.01528, 0, 0.5],
        "119": [0, 0.45833, 0.01528, 0, 0.74445],
        "120": [0, 0.45833, 0, 0, 0.5],
        "121": [0.19444, 0.45833, 0.01528, 0, 0.5],
        "122": [0, 0.45833, 0, 0, 0.47639],
        "126": [0.35, 0.34444, 0, 0, 0.55],
        "160": [0, 0, 0, 0, 0.25],
        "168": [0, 0.69444, 0, 0, 0.55],
        "176": [0, 0.69444, 0, 0, 0.73334],
        "180": [0, 0.69444, 0, 0, 0.55],
        "184": [0.17014, 0, 0, 0, 0.48889],
        "305": [0, 0.45833, 0, 0, 0.25556],
        "567": [0.19444, 0.45833, 0, 0, 0.28611],
        "710": [0, 0.69444, 0, 0, 0.55],
        "711": [0, 0.63542, 0, 0, 0.55],
        "713": [0, 0.63778, 0, 0, 0.55],
        "728": [0, 0.69444, 0, 0, 0.55],
        "729": [0, 0.69444, 0, 0, 0.30556],
        "730": [0, 0.69444, 0, 0, 0.73334],
        "732": [0, 0.69444, 0, 0, 0.55],
        "733": [0, 0.69444, 0, 0, 0.55],
        "915": [0, 0.69444, 0, 0, 0.58056],
        "916": [0, 0.69444, 0, 0, 0.91667],
        "920": [0, 0.69444, 0, 0, 0.85556],
        "923": [0, 0.69444, 0, 0, 0.67223],
        "926": [0, 0.69444, 0, 0, 0.73334],
        "928": [0, 0.69444, 0, 0, 0.79445],
        "931": [0, 0.69444, 0, 0, 0.79445],
        "933": [0, 0.69444, 0, 0, 0.85556],
        "934": [0, 0.69444, 0, 0, 0.79445],
        "936": [0, 0.69444, 0, 0, 0.85556],
        "937": [0, 0.69444, 0, 0, 0.79445],
        "8211": [0, 0.45833, 0.03056, 0, 0.55],
        "8212": [0, 0.45833, 0.03056, 0, 1.10001],
        "8216": [0, 0.69444, 0, 0, 0.30556],
        "8217": [0, 0.69444, 0, 0, 0.30556],
        "8220": [0, 0.69444, 0, 0, 0.55834],
        "8221": [0, 0.69444, 0, 0, 0.55834]
      },
      "SansSerif-Italic": {
        "32": [0, 0, 0, 0, 0.25],
        "33": [0, 0.69444, 0.05733, 0, 0.31945],
        "34": [0, 0.69444, 316e-5, 0, 0.5],
        "35": [0.19444, 0.69444, 0.05087, 0, 0.83334],
        "36": [0.05556, 0.75, 0.11156, 0, 0.5],
        "37": [0.05556, 0.75, 0.03126, 0, 0.83334],
        "38": [0, 0.69444, 0.03058, 0, 0.75834],
        "39": [0, 0.69444, 0.07816, 0, 0.27778],
        "40": [0.25, 0.75, 0.13164, 0, 0.38889],
        "41": [0.25, 0.75, 0.02536, 0, 0.38889],
        "42": [0, 0.75, 0.11775, 0, 0.5],
        "43": [0.08333, 0.58333, 0.02536, 0, 0.77778],
        "44": [0.125, 0.08333, 0, 0, 0.27778],
        "45": [0, 0.44444, 0.01946, 0, 0.33333],
        "46": [0, 0.08333, 0, 0, 0.27778],
        "47": [0.25, 0.75, 0.13164, 0, 0.5],
        "48": [0, 0.65556, 0.11156, 0, 0.5],
        "49": [0, 0.65556, 0.11156, 0, 0.5],
        "50": [0, 0.65556, 0.11156, 0, 0.5],
        "51": [0, 0.65556, 0.11156, 0, 0.5],
        "52": [0, 0.65556, 0.11156, 0, 0.5],
        "53": [0, 0.65556, 0.11156, 0, 0.5],
        "54": [0, 0.65556, 0.11156, 0, 0.5],
        "55": [0, 0.65556, 0.11156, 0, 0.5],
        "56": [0, 0.65556, 0.11156, 0, 0.5],
        "57": [0, 0.65556, 0.11156, 0, 0.5],
        "58": [0, 0.44444, 0.02502, 0, 0.27778],
        "59": [0.125, 0.44444, 0.02502, 0, 0.27778],
        "61": [-0.13, 0.37, 0.05087, 0, 0.77778],
        "63": [0, 0.69444, 0.11809, 0, 0.47222],
        "64": [0, 0.69444, 0.07555, 0, 0.66667],
        "65": [0, 0.69444, 0, 0, 0.66667],
        "66": [0, 0.69444, 0.08293, 0, 0.66667],
        "67": [0, 0.69444, 0.11983, 0, 0.63889],
        "68": [0, 0.69444, 0.07555, 0, 0.72223],
        "69": [0, 0.69444, 0.11983, 0, 0.59722],
        "70": [0, 0.69444, 0.13372, 0, 0.56945],
        "71": [0, 0.69444, 0.11983, 0, 0.66667],
        "72": [0, 0.69444, 0.08094, 0, 0.70834],
        "73": [0, 0.69444, 0.13372, 0, 0.27778],
        "74": [0, 0.69444, 0.08094, 0, 0.47222],
        "75": [0, 0.69444, 0.11983, 0, 0.69445],
        "76": [0, 0.69444, 0, 0, 0.54167],
        "77": [0, 0.69444, 0.08094, 0, 0.875],
        "78": [0, 0.69444, 0.08094, 0, 0.70834],
        "79": [0, 0.69444, 0.07555, 0, 0.73611],
        "80": [0, 0.69444, 0.08293, 0, 0.63889],
        "81": [0.125, 0.69444, 0.07555, 0, 0.73611],
        "82": [0, 0.69444, 0.08293, 0, 0.64584],
        "83": [0, 0.69444, 0.09205, 0, 0.55556],
        "84": [0, 0.69444, 0.13372, 0, 0.68056],
        "85": [0, 0.69444, 0.08094, 0, 0.6875],
        "86": [0, 0.69444, 0.1615, 0, 0.66667],
        "87": [0, 0.69444, 0.1615, 0, 0.94445],
        "88": [0, 0.69444, 0.13372, 0, 0.66667],
        "89": [0, 0.69444, 0.17261, 0, 0.66667],
        "90": [0, 0.69444, 0.11983, 0, 0.61111],
        "91": [0.25, 0.75, 0.15942, 0, 0.28889],
        "93": [0.25, 0.75, 0.08719, 0, 0.28889],
        "94": [0, 0.69444, 0.0799, 0, 0.5],
        "95": [0.35, 0.09444, 0.08616, 0, 0.5],
        "97": [0, 0.44444, 981e-5, 0, 0.48056],
        "98": [0, 0.69444, 0.03057, 0, 0.51667],
        "99": [0, 0.44444, 0.08336, 0, 0.44445],
        "100": [0, 0.69444, 0.09483, 0, 0.51667],
        "101": [0, 0.44444, 0.06778, 0, 0.44445],
        "102": [0, 0.69444, 0.21705, 0, 0.30556],
        "103": [0.19444, 0.44444, 0.10836, 0, 0.5],
        "104": [0, 0.69444, 0.01778, 0, 0.51667],
        "105": [0, 0.67937, 0.09718, 0, 0.23889],
        "106": [0.19444, 0.67937, 0.09162, 0, 0.26667],
        "107": [0, 0.69444, 0.08336, 0, 0.48889],
        "108": [0, 0.69444, 0.09483, 0, 0.23889],
        "109": [0, 0.44444, 0.01778, 0, 0.79445],
        "110": [0, 0.44444, 0.01778, 0, 0.51667],
        "111": [0, 0.44444, 0.06613, 0, 0.5],
        "112": [0.19444, 0.44444, 0.0389, 0, 0.51667],
        "113": [0.19444, 0.44444, 0.04169, 0, 0.51667],
        "114": [0, 0.44444, 0.10836, 0, 0.34167],
        "115": [0, 0.44444, 0.0778, 0, 0.38333],
        "116": [0, 0.57143, 0.07225, 0, 0.36111],
        "117": [0, 0.44444, 0.04169, 0, 0.51667],
        "118": [0, 0.44444, 0.10836, 0, 0.46111],
        "119": [0, 0.44444, 0.10836, 0, 0.68334],
        "120": [0, 0.44444, 0.09169, 0, 0.46111],
        "121": [0.19444, 0.44444, 0.10836, 0, 0.46111],
        "122": [0, 0.44444, 0.08752, 0, 0.43472],
        "126": [0.35, 0.32659, 0.08826, 0, 0.5],
        "160": [0, 0, 0, 0, 0.25],
        "168": [0, 0.67937, 0.06385, 0, 0.5],
        "176": [0, 0.69444, 0, 0, 0.73752],
        "184": [0.17014, 0, 0, 0, 0.44445],
        "305": [0, 0.44444, 0.04169, 0, 0.23889],
        "567": [0.19444, 0.44444, 0.04169, 0, 0.26667],
        "710": [0, 0.69444, 0.0799, 0, 0.5],
        "711": [0, 0.63194, 0.08432, 0, 0.5],
        "713": [0, 0.60889, 0.08776, 0, 0.5],
        "714": [0, 0.69444, 0.09205, 0, 0.5],
        "715": [0, 0.69444, 0, 0, 0.5],
        "728": [0, 0.69444, 0.09483, 0, 0.5],
        "729": [0, 0.67937, 0.07774, 0, 0.27778],
        "730": [0, 0.69444, 0, 0, 0.73752],
        "732": [0, 0.67659, 0.08826, 0, 0.5],
        "733": [0, 0.69444, 0.09205, 0, 0.5],
        "915": [0, 0.69444, 0.13372, 0, 0.54167],
        "916": [0, 0.69444, 0, 0, 0.83334],
        "920": [0, 0.69444, 0.07555, 0, 0.77778],
        "923": [0, 0.69444, 0, 0, 0.61111],
        "926": [0, 0.69444, 0.12816, 0, 0.66667],
        "928": [0, 0.69444, 0.08094, 0, 0.70834],
        "931": [0, 0.69444, 0.11983, 0, 0.72222],
        "933": [0, 0.69444, 0.09031, 0, 0.77778],
        "934": [0, 0.69444, 0.04603, 0, 0.72222],
        "936": [0, 0.69444, 0.09031, 0, 0.77778],
        "937": [0, 0.69444, 0.08293, 0, 0.72222],
        "8211": [0, 0.44444, 0.08616, 0, 0.5],
        "8212": [0, 0.44444, 0.08616, 0, 1],
        "8216": [0, 0.69444, 0.07816, 0, 0.27778],
        "8217": [0, 0.69444, 0.07816, 0, 0.27778],
        "8220": [0, 0.69444, 0.14205, 0, 0.5],
        "8221": [0, 0.69444, 316e-5, 0, 0.5]
      },
      "SansSerif-Regular": {
        "32": [0, 0, 0, 0, 0.25],
        "33": [0, 0.69444, 0, 0, 0.31945],
        "34": [0, 0.69444, 0, 0, 0.5],
        "35": [0.19444, 0.69444, 0, 0, 0.83334],
        "36": [0.05556, 0.75, 0, 0, 0.5],
        "37": [0.05556, 0.75, 0, 0, 0.83334],
        "38": [0, 0.69444, 0, 0, 0.75834],
        "39": [0, 0.69444, 0, 0, 0.27778],
        "40": [0.25, 0.75, 0, 0, 0.38889],
        "41": [0.25, 0.75, 0, 0, 0.38889],
        "42": [0, 0.75, 0, 0, 0.5],
        "43": [0.08333, 0.58333, 0, 0, 0.77778],
        "44": [0.125, 0.08333, 0, 0, 0.27778],
        "45": [0, 0.44444, 0, 0, 0.33333],
        "46": [0, 0.08333, 0, 0, 0.27778],
        "47": [0.25, 0.75, 0, 0, 0.5],
        "48": [0, 0.65556, 0, 0, 0.5],
        "49": [0, 0.65556, 0, 0, 0.5],
        "50": [0, 0.65556, 0, 0, 0.5],
        "51": [0, 0.65556, 0, 0, 0.5],
        "52": [0, 0.65556, 0, 0, 0.5],
        "53": [0, 0.65556, 0, 0, 0.5],
        "54": [0, 0.65556, 0, 0, 0.5],
        "55": [0, 0.65556, 0, 0, 0.5],
        "56": [0, 0.65556, 0, 0, 0.5],
        "57": [0, 0.65556, 0, 0, 0.5],
        "58": [0, 0.44444, 0, 0, 0.27778],
        "59": [0.125, 0.44444, 0, 0, 0.27778],
        "61": [-0.13, 0.37, 0, 0, 0.77778],
        "63": [0, 0.69444, 0, 0, 0.47222],
        "64": [0, 0.69444, 0, 0, 0.66667],
        "65": [0, 0.69444, 0, 0, 0.66667],
        "66": [0, 0.69444, 0, 0, 0.66667],
        "67": [0, 0.69444, 0, 0, 0.63889],
        "68": [0, 0.69444, 0, 0, 0.72223],
        "69": [0, 0.69444, 0, 0, 0.59722],
        "70": [0, 0.69444, 0, 0, 0.56945],
        "71": [0, 0.69444, 0, 0, 0.66667],
        "72": [0, 0.69444, 0, 0, 0.70834],
        "73": [0, 0.69444, 0, 0, 0.27778],
        "74": [0, 0.69444, 0, 0, 0.47222],
        "75": [0, 0.69444, 0, 0, 0.69445],
        "76": [0, 0.69444, 0, 0, 0.54167],
        "77": [0, 0.69444, 0, 0, 0.875],
        "78": [0, 0.69444, 0, 0, 0.70834],
        "79": [0, 0.69444, 0, 0, 0.73611],
        "80": [0, 0.69444, 0, 0, 0.63889],
        "81": [0.125, 0.69444, 0, 0, 0.73611],
        "82": [0, 0.69444, 0, 0, 0.64584],
        "83": [0, 0.69444, 0, 0, 0.55556],
        "84": [0, 0.69444, 0, 0, 0.68056],
        "85": [0, 0.69444, 0, 0, 0.6875],
        "86": [0, 0.69444, 0.01389, 0, 0.66667],
        "87": [0, 0.69444, 0.01389, 0, 0.94445],
        "88": [0, 0.69444, 0, 0, 0.66667],
        "89": [0, 0.69444, 0.025, 0, 0.66667],
        "90": [0, 0.69444, 0, 0, 0.61111],
        "91": [0.25, 0.75, 0, 0, 0.28889],
        "93": [0.25, 0.75, 0, 0, 0.28889],
        "94": [0, 0.69444, 0, 0, 0.5],
        "95": [0.35, 0.09444, 0.02778, 0, 0.5],
        "97": [0, 0.44444, 0, 0, 0.48056],
        "98": [0, 0.69444, 0, 0, 0.51667],
        "99": [0, 0.44444, 0, 0, 0.44445],
        "100": [0, 0.69444, 0, 0, 0.51667],
        "101": [0, 0.44444, 0, 0, 0.44445],
        "102": [0, 0.69444, 0.06944, 0, 0.30556],
        "103": [0.19444, 0.44444, 0.01389, 0, 0.5],
        "104": [0, 0.69444, 0, 0, 0.51667],
        "105": [0, 0.67937, 0, 0, 0.23889],
        "106": [0.19444, 0.67937, 0, 0, 0.26667],
        "107": [0, 0.69444, 0, 0, 0.48889],
        "108": [0, 0.69444, 0, 0, 0.23889],
        "109": [0, 0.44444, 0, 0, 0.79445],
        "110": [0, 0.44444, 0, 0, 0.51667],
        "111": [0, 0.44444, 0, 0, 0.5],
        "112": [0.19444, 0.44444, 0, 0, 0.51667],
        "113": [0.19444, 0.44444, 0, 0, 0.51667],
        "114": [0, 0.44444, 0.01389, 0, 0.34167],
        "115": [0, 0.44444, 0, 0, 0.38333],
        "116": [0, 0.57143, 0, 0, 0.36111],
        "117": [0, 0.44444, 0, 0, 0.51667],
        "118": [0, 0.44444, 0.01389, 0, 0.46111],
        "119": [0, 0.44444, 0.01389, 0, 0.68334],
        "120": [0, 0.44444, 0, 0, 0.46111],
        "121": [0.19444, 0.44444, 0.01389, 0, 0.46111],
        "122": [0, 0.44444, 0, 0, 0.43472],
        "126": [0.35, 0.32659, 0, 0, 0.5],
        "160": [0, 0, 0, 0, 0.25],
        "168": [0, 0.67937, 0, 0, 0.5],
        "176": [0, 0.69444, 0, 0, 0.66667],
        "184": [0.17014, 0, 0, 0, 0.44445],
        "305": [0, 0.44444, 0, 0, 0.23889],
        "567": [0.19444, 0.44444, 0, 0, 0.26667],
        "710": [0, 0.69444, 0, 0, 0.5],
        "711": [0, 0.63194, 0, 0, 0.5],
        "713": [0, 0.60889, 0, 0, 0.5],
        "714": [0, 0.69444, 0, 0, 0.5],
        "715": [0, 0.69444, 0, 0, 0.5],
        "728": [0, 0.69444, 0, 0, 0.5],
        "729": [0, 0.67937, 0, 0, 0.27778],
        "730": [0, 0.69444, 0, 0, 0.66667],
        "732": [0, 0.67659, 0, 0, 0.5],
        "733": [0, 0.69444, 0, 0, 0.5],
        "915": [0, 0.69444, 0, 0, 0.54167],
        "916": [0, 0.69444, 0, 0, 0.83334],
        "920": [0, 0.69444, 0, 0, 0.77778],
        "923": [0, 0.69444, 0, 0, 0.61111],
        "926": [0, 0.69444, 0, 0, 0.66667],
        "928": [0, 0.69444, 0, 0, 0.70834],
        "931": [0, 0.69444, 0, 0, 0.72222],
        "933": [0, 0.69444, 0, 0, 0.77778],
        "934": [0, 0.69444, 0, 0, 0.72222],
        "936": [0, 0.69444, 0, 0, 0.77778],
        "937": [0, 0.69444, 0, 0, 0.72222],
        "8211": [0, 0.44444, 0.02778, 0, 0.5],
        "8212": [0, 0.44444, 0.02778, 0, 1],
        "8216": [0, 0.69444, 0, 0, 0.27778],
        "8217": [0, 0.69444, 0, 0, 0.27778],
        "8220": [0, 0.69444, 0, 0, 0.5],
        "8221": [0, 0.69444, 0, 0, 0.5]
      },
      "Script-Regular": {
        "32": [0, 0, 0, 0, 0.25],
        "65": [0, 0.7, 0.22925, 0, 0.80253],
        "66": [0, 0.7, 0.04087, 0, 0.90757],
        "67": [0, 0.7, 0.1689, 0, 0.66619],
        "68": [0, 0.7, 0.09371, 0, 0.77443],
        "69": [0, 0.7, 0.18583, 0, 0.56162],
        "70": [0, 0.7, 0.13634, 0, 0.89544],
        "71": [0, 0.7, 0.17322, 0, 0.60961],
        "72": [0, 0.7, 0.29694, 0, 0.96919],
        "73": [0, 0.7, 0.19189, 0, 0.80907],
        "74": [0.27778, 0.7, 0.19189, 0, 1.05159],
        "75": [0, 0.7, 0.31259, 0, 0.91364],
        "76": [0, 0.7, 0.19189, 0, 0.87373],
        "77": [0, 0.7, 0.15981, 0, 1.08031],
        "78": [0, 0.7, 0.3525, 0, 0.9015],
        "79": [0, 0.7, 0.08078, 0, 0.73787],
        "80": [0, 0.7, 0.08078, 0, 1.01262],
        "81": [0, 0.7, 0.03305, 0, 0.88282],
        "82": [0, 0.7, 0.06259, 0, 0.85],
        "83": [0, 0.7, 0.19189, 0, 0.86767],
        "84": [0, 0.7, 0.29087, 0, 0.74697],
        "85": [0, 0.7, 0.25815, 0, 0.79996],
        "86": [0, 0.7, 0.27523, 0, 0.62204],
        "87": [0, 0.7, 0.27523, 0, 0.80532],
        "88": [0, 0.7, 0.26006, 0, 0.94445],
        "89": [0, 0.7, 0.2939, 0, 0.70961],
        "90": [0, 0.7, 0.24037, 0, 0.8212],
        "160": [0, 0, 0, 0, 0.25]
      },
      "Size1-Regular": {
        "32": [0, 0, 0, 0, 0.25],
        "40": [0.35001, 0.85, 0, 0, 0.45834],
        "41": [0.35001, 0.85, 0, 0, 0.45834],
        "47": [0.35001, 0.85, 0, 0, 0.57778],
        "91": [0.35001, 0.85, 0, 0, 0.41667],
        "92": [0.35001, 0.85, 0, 0, 0.57778],
        "93": [0.35001, 0.85, 0, 0, 0.41667],
        "123": [0.35001, 0.85, 0, 0, 0.58334],
        "125": [0.35001, 0.85, 0, 0, 0.58334],
        "160": [0, 0, 0, 0, 0.25],
        "710": [0, 0.72222, 0, 0, 0.55556],
        "732": [0, 0.72222, 0, 0, 0.55556],
        "770": [0, 0.72222, 0, 0, 0.55556],
        "771": [0, 0.72222, 0, 0, 0.55556],
        "8214": [-99e-5, 0.601, 0, 0, 0.77778],
        "8593": [1e-5, 0.6, 0, 0, 0.66667],
        "8595": [1e-5, 0.6, 0, 0, 0.66667],
        "8657": [1e-5, 0.6, 0, 0, 0.77778],
        "8659": [1e-5, 0.6, 0, 0, 0.77778],
        "8719": [0.25001, 0.75, 0, 0, 0.94445],
        "8720": [0.25001, 0.75, 0, 0, 0.94445],
        "8721": [0.25001, 0.75, 0, 0, 1.05556],
        "8730": [0.35001, 0.85, 0, 0, 1],
        "8739": [-599e-5, 0.606, 0, 0, 0.33333],
        "8741": [-599e-5, 0.606, 0, 0, 0.55556],
        "8747": [0.30612, 0.805, 0.19445, 0, 0.47222],
        "8748": [0.306, 0.805, 0.19445, 0, 0.47222],
        "8749": [0.306, 0.805, 0.19445, 0, 0.47222],
        "8750": [0.30612, 0.805, 0.19445, 0, 0.47222],
        "8896": [0.25001, 0.75, 0, 0, 0.83334],
        "8897": [0.25001, 0.75, 0, 0, 0.83334],
        "8898": [0.25001, 0.75, 0, 0, 0.83334],
        "8899": [0.25001, 0.75, 0, 0, 0.83334],
        "8968": [0.35001, 0.85, 0, 0, 0.47222],
        "8969": [0.35001, 0.85, 0, 0, 0.47222],
        "8970": [0.35001, 0.85, 0, 0, 0.47222],
        "8971": [0.35001, 0.85, 0, 0, 0.47222],
        "9168": [-99e-5, 0.601, 0, 0, 0.66667],
        "10216": [0.35001, 0.85, 0, 0, 0.47222],
        "10217": [0.35001, 0.85, 0, 0, 0.47222],
        "10752": [0.25001, 0.75, 0, 0, 1.11111],
        "10753": [0.25001, 0.75, 0, 0, 1.11111],
        "10754": [0.25001, 0.75, 0, 0, 1.11111],
        "10756": [0.25001, 0.75, 0, 0, 0.83334],
        "10758": [0.25001, 0.75, 0, 0, 0.83334]
      },
      "Size2-Regular": {
        "32": [0, 0, 0, 0, 0.25],
        "40": [0.65002, 1.15, 0, 0, 0.59722],
        "41": [0.65002, 1.15, 0, 0, 0.59722],
        "47": [0.65002, 1.15, 0, 0, 0.81111],
        "91": [0.65002, 1.15, 0, 0, 0.47222],
        "92": [0.65002, 1.15, 0, 0, 0.81111],
        "93": [0.65002, 1.15, 0, 0, 0.47222],
        "123": [0.65002, 1.15, 0, 0, 0.66667],
        "125": [0.65002, 1.15, 0, 0, 0.66667],
        "160": [0, 0, 0, 0, 0.25],
        "710": [0, 0.75, 0, 0, 1],
        "732": [0, 0.75, 0, 0, 1],
        "770": [0, 0.75, 0, 0, 1],
        "771": [0, 0.75, 0, 0, 1],
        "8719": [0.55001, 1.05, 0, 0, 1.27778],
        "8720": [0.55001, 1.05, 0, 0, 1.27778],
        "8721": [0.55001, 1.05, 0, 0, 1.44445],
        "8730": [0.65002, 1.15, 0, 0, 1],
        "8747": [0.86225, 1.36, 0.44445, 0, 0.55556],
        "8748": [0.862, 1.36, 0.44445, 0, 0.55556],
        "8749": [0.862, 1.36, 0.44445, 0, 0.55556],
        "8750": [0.86225, 1.36, 0.44445, 0, 0.55556],
        "8896": [0.55001, 1.05, 0, 0, 1.11111],
        "8897": [0.55001, 1.05, 0, 0, 1.11111],
        "8898": [0.55001, 1.05, 0, 0, 1.11111],
        "8899": [0.55001, 1.05, 0, 0, 1.11111],
        "8968": [0.65002, 1.15, 0, 0, 0.52778],
        "8969": [0.65002, 1.15, 0, 0, 0.52778],
        "8970": [0.65002, 1.15, 0, 0, 0.52778],
        "8971": [0.65002, 1.15, 0, 0, 0.52778],
        "10216": [0.65002, 1.15, 0, 0, 0.61111],
        "10217": [0.65002, 1.15, 0, 0, 0.61111],
        "10752": [0.55001, 1.05, 0, 0, 1.51112],
        "10753": [0.55001, 1.05, 0, 0, 1.51112],
        "10754": [0.55001, 1.05, 0, 0, 1.51112],
        "10756": [0.55001, 1.05, 0, 0, 1.11111],
        "10758": [0.55001, 1.05, 0, 0, 1.11111]
      },
      "Size3-Regular": {
        "32": [0, 0, 0, 0, 0.25],
        "40": [0.95003, 1.45, 0, 0, 0.73611],
        "41": [0.95003, 1.45, 0, 0, 0.73611],
        "47": [0.95003, 1.45, 0, 0, 1.04445],
        "91": [0.95003, 1.45, 0, 0, 0.52778],
        "92": [0.95003, 1.45, 0, 0, 1.04445],
        "93": [0.95003, 1.45, 0, 0, 0.52778],
        "123": [0.95003, 1.45, 0, 0, 0.75],
        "125": [0.95003, 1.45, 0, 0, 0.75],
        "160": [0, 0, 0, 0, 0.25],
        "710": [0, 0.75, 0, 0, 1.44445],
        "732": [0, 0.75, 0, 0, 1.44445],
        "770": [0, 0.75, 0, 0, 1.44445],
        "771": [0, 0.75, 0, 0, 1.44445],
        "8730": [0.95003, 1.45, 0, 0, 1],
        "8968": [0.95003, 1.45, 0, 0, 0.58334],
        "8969": [0.95003, 1.45, 0, 0, 0.58334],
        "8970": [0.95003, 1.45, 0, 0, 0.58334],
        "8971": [0.95003, 1.45, 0, 0, 0.58334],
        "10216": [0.95003, 1.45, 0, 0, 0.75],
        "10217": [0.95003, 1.45, 0, 0, 0.75]
      },
      "Size4-Regular": {
        "32": [0, 0, 0, 0, 0.25],
        "40": [1.25003, 1.75, 0, 0, 0.79167],
        "41": [1.25003, 1.75, 0, 0, 0.79167],
        "47": [1.25003, 1.75, 0, 0, 1.27778],
        "91": [1.25003, 1.75, 0, 0, 0.58334],
        "92": [1.25003, 1.75, 0, 0, 1.27778],
        "93": [1.25003, 1.75, 0, 0, 0.58334],
        "123": [1.25003, 1.75, 0, 0, 0.80556],
        "125": [1.25003, 1.75, 0, 0, 0.80556],
        "160": [0, 0, 0, 0, 0.25],
        "710": [0, 0.825, 0, 0, 1.8889],
        "732": [0, 0.825, 0, 0, 1.8889],
        "770": [0, 0.825, 0, 0, 1.8889],
        "771": [0, 0.825, 0, 0, 1.8889],
        "8730": [1.25003, 1.75, 0, 0, 1],
        "8968": [1.25003, 1.75, 0, 0, 0.63889],
        "8969": [1.25003, 1.75, 0, 0, 0.63889],
        "8970": [1.25003, 1.75, 0, 0, 0.63889],
        "8971": [1.25003, 1.75, 0, 0, 0.63889],
        "9115": [0.64502, 1.155, 0, 0, 0.875],
        "9116": [1e-5, 0.6, 0, 0, 0.875],
        "9117": [0.64502, 1.155, 0, 0, 0.875],
        "9118": [0.64502, 1.155, 0, 0, 0.875],
        "9119": [1e-5, 0.6, 0, 0, 0.875],
        "9120": [0.64502, 1.155, 0, 0, 0.875],
        "9121": [0.64502, 1.155, 0, 0, 0.66667],
        "9122": [-99e-5, 0.601, 0, 0, 0.66667],
        "9123": [0.64502, 1.155, 0, 0, 0.66667],
        "9124": [0.64502, 1.155, 0, 0, 0.66667],
        "9125": [-99e-5, 0.601, 0, 0, 0.66667],
        "9126": [0.64502, 1.155, 0, 0, 0.66667],
        "9127": [1e-5, 0.9, 0, 0, 0.88889],
        "9128": [0.65002, 1.15, 0, 0, 0.88889],
        "9129": [0.90001, 0, 0, 0, 0.88889],
        "9130": [0, 0.3, 0, 0, 0.88889],
        "9131": [1e-5, 0.9, 0, 0, 0.88889],
        "9132": [0.65002, 1.15, 0, 0, 0.88889],
        "9133": [0.90001, 0, 0, 0, 0.88889],
        "9143": [0.88502, 0.915, 0, 0, 1.05556],
        "10216": [1.25003, 1.75, 0, 0, 0.80556],
        "10217": [1.25003, 1.75, 0, 0, 0.80556],
        "57344": [-499e-5, 0.605, 0, 0, 1.05556],
        "57345": [-499e-5, 0.605, 0, 0, 1.05556],
        "57680": [0, 0.12, 0, 0, 0.45],
        "57681": [0, 0.12, 0, 0, 0.45],
        "57682": [0, 0.12, 0, 0, 0.45],
        "57683": [0, 0.12, 0, 0, 0.45]
      },
      "Typewriter-Regular": {
        "32": [0, 0, 0, 0, 0.525],
        "33": [0, 0.61111, 0, 0, 0.525],
        "34": [0, 0.61111, 0, 0, 0.525],
        "35": [0, 0.61111, 0, 0, 0.525],
        "36": [0.08333, 0.69444, 0, 0, 0.525],
        "37": [0.08333, 0.69444, 0, 0, 0.525],
        "38": [0, 0.61111, 0, 0, 0.525],
        "39": [0, 0.61111, 0, 0, 0.525],
        "40": [0.08333, 0.69444, 0, 0, 0.525],
        "41": [0.08333, 0.69444, 0, 0, 0.525],
        "42": [0, 0.52083, 0, 0, 0.525],
        "43": [-0.08056, 0.53055, 0, 0, 0.525],
        "44": [0.13889, 0.125, 0, 0, 0.525],
        "45": [-0.08056, 0.53055, 0, 0, 0.525],
        "46": [0, 0.125, 0, 0, 0.525],
        "47": [0.08333, 0.69444, 0, 0, 0.525],
        "48": [0, 0.61111, 0, 0, 0.525],
        "49": [0, 0.61111, 0, 0, 0.525],
        "50": [0, 0.61111, 0, 0, 0.525],
        "51": [0, 0.61111, 0, 0, 0.525],
        "52": [0, 0.61111, 0, 0, 0.525],
        "53": [0, 0.61111, 0, 0, 0.525],
        "54": [0, 0.61111, 0, 0, 0.525],
        "55": [0, 0.61111, 0, 0, 0.525],
        "56": [0, 0.61111, 0, 0, 0.525],
        "57": [0, 0.61111, 0, 0, 0.525],
        "58": [0, 0.43056, 0, 0, 0.525],
        "59": [0.13889, 0.43056, 0, 0, 0.525],
        "60": [-0.05556, 0.55556, 0, 0, 0.525],
        "61": [-0.19549, 0.41562, 0, 0, 0.525],
        "62": [-0.05556, 0.55556, 0, 0, 0.525],
        "63": [0, 0.61111, 0, 0, 0.525],
        "64": [0, 0.61111, 0, 0, 0.525],
        "65": [0, 0.61111, 0, 0, 0.525],
        "66": [0, 0.61111, 0, 0, 0.525],
        "67": [0, 0.61111, 0, 0, 0.525],
        "68": [0, 0.61111, 0, 0, 0.525],
        "69": [0, 0.61111, 0, 0, 0.525],
        "70": [0, 0.61111, 0, 0, 0.525],
        "71": [0, 0.61111, 0, 0, 0.525],
        "72": [0, 0.61111, 0, 0, 0.525],
        "73": [0, 0.61111, 0, 0, 0.525],
        "74": [0, 0.61111, 0, 0, 0.525],
        "75": [0, 0.61111, 0, 0, 0.525],
        "76": [0, 0.61111, 0, 0, 0.525],
        "77": [0, 0.61111, 0, 0, 0.525],
        "78": [0, 0.61111, 0, 0, 0.525],
        "79": [0, 0.61111, 0, 0, 0.525],
        "80": [0, 0.61111, 0, 0, 0.525],
        "81": [0.13889, 0.61111, 0, 0, 0.525],
        "82": [0, 0.61111, 0, 0, 0.525],
        "83": [0, 0.61111, 0, 0, 0.525],
        "84": [0, 0.61111, 0, 0, 0.525],
        "85": [0, 0.61111, 0, 0, 0.525],
        "86": [0, 0.61111, 0, 0, 0.525],
        "87": [0, 0.61111, 0, 0, 0.525],
        "88": [0, 0.61111, 0, 0, 0.525],
        "89": [0, 0.61111, 0, 0, 0.525],
        "90": [0, 0.61111, 0, 0, 0.525],
        "91": [0.08333, 0.69444, 0, 0, 0.525],
        "92": [0.08333, 0.69444, 0, 0, 0.525],
        "93": [0.08333, 0.69444, 0, 0, 0.525],
        "94": [0, 0.61111, 0, 0, 0.525],
        "95": [0.09514, 0, 0, 0, 0.525],
        "96": [0, 0.61111, 0, 0, 0.525],
        "97": [0, 0.43056, 0, 0, 0.525],
        "98": [0, 0.61111, 0, 0, 0.525],
        "99": [0, 0.43056, 0, 0, 0.525],
        "100": [0, 0.61111, 0, 0, 0.525],
        "101": [0, 0.43056, 0, 0, 0.525],
        "102": [0, 0.61111, 0, 0, 0.525],
        "103": [0.22222, 0.43056, 0, 0, 0.525],
        "104": [0, 0.61111, 0, 0, 0.525],
        "105": [0, 0.61111, 0, 0, 0.525],
        "106": [0.22222, 0.61111, 0, 0, 0.525],
        "107": [0, 0.61111, 0, 0, 0.525],
        "108": [0, 0.61111, 0, 0, 0.525],
        "109": [0, 0.43056, 0, 0, 0.525],
        "110": [0, 0.43056, 0, 0, 0.525],
        "111": [0, 0.43056, 0, 0, 0.525],
        "112": [0.22222, 0.43056, 0, 0, 0.525],
        "113": [0.22222, 0.43056, 0, 0, 0.525],
        "114": [0, 0.43056, 0, 0, 0.525],
        "115": [0, 0.43056, 0, 0, 0.525],
        "116": [0, 0.55358, 0, 0, 0.525],
        "117": [0, 0.43056, 0, 0, 0.525],
        "118": [0, 0.43056, 0, 0, 0.525],
        "119": [0, 0.43056, 0, 0, 0.525],
        "120": [0, 0.43056, 0, 0, 0.525],
        "121": [0.22222, 0.43056, 0, 0, 0.525],
        "122": [0, 0.43056, 0, 0, 0.525],
        "123": [0.08333, 0.69444, 0, 0, 0.525],
        "124": [0.08333, 0.69444, 0, 0, 0.525],
        "125": [0.08333, 0.69444, 0, 0, 0.525],
        "126": [0, 0.61111, 0, 0, 0.525],
        "127": [0, 0.61111, 0, 0, 0.525],
        "160": [0, 0, 0, 0, 0.525],
        "176": [0, 0.61111, 0, 0, 0.525],
        "184": [0.19445, 0, 0, 0, 0.525],
        "305": [0, 0.43056, 0, 0, 0.525],
        "567": [0.22222, 0.43056, 0, 0, 0.525],
        "711": [0, 0.56597, 0, 0, 0.525],
        "713": [0, 0.56555, 0, 0, 0.525],
        "714": [0, 0.61111, 0, 0, 0.525],
        "715": [0, 0.61111, 0, 0, 0.525],
        "728": [0, 0.61111, 0, 0, 0.525],
        "730": [0, 0.61111, 0, 0, 0.525],
        "770": [0, 0.61111, 0, 0, 0.525],
        "771": [0, 0.61111, 0, 0, 0.525],
        "776": [0, 0.61111, 0, 0, 0.525],
        "915": [0, 0.61111, 0, 0, 0.525],
        "916": [0, 0.61111, 0, 0, 0.525],
        "920": [0, 0.61111, 0, 0, 0.525],
        "923": [0, 0.61111, 0, 0, 0.525],
        "926": [0, 0.61111, 0, 0, 0.525],
        "928": [0, 0.61111, 0, 0, 0.525],
        "931": [0, 0.61111, 0, 0, 0.525],
        "933": [0, 0.61111, 0, 0, 0.525],
        "934": [0, 0.61111, 0, 0, 0.525],
        "936": [0, 0.61111, 0, 0, 0.525],
        "937": [0, 0.61111, 0, 0, 0.525],
        "8216": [0, 0.61111, 0, 0, 0.525],
        "8217": [0, 0.61111, 0, 0, 0.525],
        "8242": [0, 0.61111, 0, 0, 0.525],
        "9251": [0.11111, 0.21944, 0, 0, 0.525]
      }
    };
    sigmasAndXis = {
      slant: [0.25, 0.25, 0.25],
      space: [0, 0, 0],
      stretch: [0, 0, 0],
      shrink: [0, 0, 0],
      xHeight: [0.431, 0.431, 0.431],
      quad: [1, 1.171, 1.472],
      extraSpace: [0, 0, 0],
      num1: [0.677, 0.732, 0.925],
      num2: [0.394, 0.384, 0.387],
      num3: [0.444, 0.471, 0.504],
      denom1: [0.686, 0.752, 1.025],
      denom2: [0.345, 0.344, 0.532],
      sup1: [0.413, 0.503, 0.504],
      sup2: [0.363, 0.431, 0.404],
      sup3: [0.289, 0.286, 0.294],
      sub1: [0.15, 0.143, 0.2],
      sub2: [0.247, 0.286, 0.4],
      supDrop: [0.386, 0.353, 0.494],
      subDrop: [0.05, 0.071, 0.1],
      delim1: [2.39, 1.7, 1.98],
      delim2: [1.01, 1.157, 1.42],
      axisHeight: [0.25, 0.25, 0.25],
      defaultRuleThickness: [0.04, 0.049, 0.049],
      bigOpSpacing1: [0.111, 0.111, 0.111],
      bigOpSpacing2: [0.166, 0.166, 0.166],
      bigOpSpacing3: [0.2, 0.2, 0.2],
      bigOpSpacing4: [0.6, 0.611, 0.611],
      bigOpSpacing5: [0.1, 0.143, 0.143],
      sqrtRuleThickness: [0.04, 0.04, 0.04],
      ptPerEm: [10, 10, 10],
      doubleRuleSep: [0.2, 0.2, 0.2],
      arrayRuleWidth: [0.04, 0.04, 0.04],
      fboxsep: [0.3, 0.3, 0.3],
      fboxrule: [0.04, 0.04, 0.04]
    };
    extraCharacterMap = {
      "\xC5": "A",
      "\xD0": "D",
      "\xDE": "o",
      "\xE5": "a",
      "\xF0": "d",
      "\xFE": "o",
      "\u0410": "A",
      "\u0411": "B",
      "\u0412": "B",
      "\u0413": "F",
      "\u0414": "A",
      "\u0415": "E",
      "\u0416": "K",
      "\u0417": "3",
      "\u0418": "N",
      "\u0419": "N",
      "\u041A": "K",
      "\u041B": "N",
      "\u041C": "M",
      "\u041D": "H",
      "\u041E": "O",
      "\u041F": "N",
      "\u0420": "P",
      "\u0421": "C",
      "\u0422": "T",
      "\u0423": "y",
      "\u0424": "O",
      "\u0425": "X",
      "\u0426": "U",
      "\u0427": "h",
      "\u0428": "W",
      "\u0429": "W",
      "\u042A": "B",
      "\u042B": "X",
      "\u042C": "B",
      "\u042D": "3",
      "\u042E": "X",
      "\u042F": "R",
      "\u0430": "a",
      "\u0431": "b",
      "\u0432": "a",
      "\u0433": "r",
      "\u0434": "y",
      "\u0435": "e",
      "\u0436": "m",
      "\u0437": "e",
      "\u0438": "n",
      "\u0439": "n",
      "\u043A": "n",
      "\u043B": "n",
      "\u043C": "m",
      "\u043D": "n",
      "\u043E": "o",
      "\u043F": "n",
      "\u0440": "p",
      "\u0441": "c",
      "\u0442": "o",
      "\u0443": "y",
      "\u0444": "b",
      "\u0445": "x",
      "\u0446": "n",
      "\u0447": "n",
      "\u0448": "w",
      "\u0449": "w",
      "\u044A": "a",
      "\u044B": "m",
      "\u044C": "a",
      "\u044D": "e",
      "\u044E": "m",
      "\u044F": "r"
    };
    fontMetricsBySizeIndex = {};
    sizeStyleMap = [
      [1, 1, 1],
      [2, 1, 1],
      [3, 1, 1],
      [4, 2, 1],
      [5, 2, 1],
      [6, 3, 1],
      [7, 4, 2],
      [8, 6, 3],
      [9, 7, 6],
      [10, 8, 7],
      [11, 10, 9]
    ];
    sizeMultipliers = [
      0.5,
      0.6,
      0.7,
      0.8,
      0.9,
      1,
      1.2,
      1.44,
      1.728,
      2.074,
      2.488
    ];
    sizeAtStyle = function sizeAtStyle2(size, style) {
      return style.size < 2 ? size : sizeStyleMap[size - 1][style.size - 1];
    };
    Options = class {
      constructor(data) {
        this.style = void 0;
        this.color = void 0;
        this.size = void 0;
        this.textSize = void 0;
        this.phantom = void 0;
        this.font = void 0;
        this.fontFamily = void 0;
        this.fontWeight = void 0;
        this.fontShape = void 0;
        this.sizeMultiplier = void 0;
        this.maxSize = void 0;
        this.minRuleThickness = void 0;
        this._fontMetrics = void 0;
        this.style = data.style;
        this.color = data.color;
        this.size = data.size || Options.BASESIZE;
        this.textSize = data.textSize || this.size;
        this.phantom = !!data.phantom;
        this.font = data.font || "";
        this.fontFamily = data.fontFamily || "";
        this.fontWeight = data.fontWeight || "";
        this.fontShape = data.fontShape || "";
        this.sizeMultiplier = sizeMultipliers[this.size - 1];
        this.maxSize = data.maxSize;
        this.minRuleThickness = data.minRuleThickness;
        this._fontMetrics = void 0;
      }
      extend(extension) {
        var data = {
          style: this.style,
          size: this.size,
          textSize: this.textSize,
          color: this.color,
          phantom: this.phantom,
          font: this.font,
          fontFamily: this.fontFamily,
          fontWeight: this.fontWeight,
          fontShape: this.fontShape,
          maxSize: this.maxSize,
          minRuleThickness: this.minRuleThickness
        };
        for (var key2 in extension) {
          if (extension.hasOwnProperty(key2)) {
            data[key2] = extension[key2];
          }
        }
        return new Options(data);
      }
      havingStyle(style) {
        if (this.style === style) {
          return this;
        } else {
          return this.extend({
            style,
            size: sizeAtStyle(this.textSize, style)
          });
        }
      }
      havingCrampedStyle() {
        return this.havingStyle(this.style.cramp());
      }
      havingSize(size) {
        if (this.size === size && this.textSize === size) {
          return this;
        } else {
          return this.extend({
            style: this.style.text(),
            size,
            textSize: size,
            sizeMultiplier: sizeMultipliers[size - 1]
          });
        }
      }
      havingBaseStyle(style) {
        style = style || this.style.text();
        var wantSize = sizeAtStyle(Options.BASESIZE, style);
        if (this.size === wantSize && this.textSize === Options.BASESIZE && this.style === style) {
          return this;
        } else {
          return this.extend({
            style,
            size: wantSize
          });
        }
      }
      havingBaseSizing() {
        var size;
        switch (this.style.id) {
          case 4:
          case 5:
            size = 3;
            break;
          case 6:
          case 7:
            size = 1;
            break;
          default:
            size = 6;
        }
        return this.extend({
          style: this.style.text(),
          size
        });
      }
      withColor(color) {
        return this.extend({
          color
        });
      }
      withPhantom() {
        return this.extend({
          phantom: true
        });
      }
      withFont(font) {
        return this.extend({
          font
        });
      }
      withTextFontFamily(fontFamily) {
        return this.extend({
          fontFamily,
          font: ""
        });
      }
      withTextFontWeight(fontWeight) {
        return this.extend({
          fontWeight,
          font: ""
        });
      }
      withTextFontShape(fontShape) {
        return this.extend({
          fontShape,
          font: ""
        });
      }
      sizingClasses(oldOptions) {
        if (oldOptions.size !== this.size) {
          return ["sizing", "reset-size" + oldOptions.size, "size" + this.size];
        } else {
          return [];
        }
      }
      baseSizingClasses() {
        if (this.size !== Options.BASESIZE) {
          return ["sizing", "reset-size" + this.size, "size" + Options.BASESIZE];
        } else {
          return [];
        }
      }
      fontMetrics() {
        if (!this._fontMetrics) {
          this._fontMetrics = getGlobalMetrics(this.size);
        }
        return this._fontMetrics;
      }
      getColor() {
        if (this.phantom) {
          return "transparent";
        } else {
          return this.color;
        }
      }
    };
    Options.BASESIZE = 6;
    ptPerUnit = {
      "pt": 1,
      "mm": 7227 / 2540,
      "cm": 7227 / 254,
      "in": 72.27,
      "bp": 803 / 800,
      "pc": 12,
      "dd": 1238 / 1157,
      "cc": 14856 / 1157,
      "nd": 685 / 642,
      "nc": 1370 / 107,
      "sp": 1 / 65536,
      "px": 803 / 800
    };
    relativeUnit = {
      "ex": true,
      "em": true,
      "mu": true
    };
    validUnit = function validUnit2(unit) {
      if (typeof unit !== "string") {
        unit = unit.unit;
      }
      return unit in ptPerUnit || unit in relativeUnit || unit === "ex";
    };
    calculateSize = function calculateSize2(sizeValue, options) {
      var scale;
      if (sizeValue.unit in ptPerUnit) {
        scale = ptPerUnit[sizeValue.unit] / options.fontMetrics().ptPerEm / options.sizeMultiplier;
      } else if (sizeValue.unit === "mu") {
        scale = options.fontMetrics().cssEmPerMu;
      } else {
        var unitOptions;
        if (options.style.isTight()) {
          unitOptions = options.havingStyle(options.style.text());
        } else {
          unitOptions = options;
        }
        if (sizeValue.unit === "ex") {
          scale = unitOptions.fontMetrics().xHeight;
        } else if (sizeValue.unit === "em") {
          scale = unitOptions.fontMetrics().quad;
        } else {
          throw new ParseError("Invalid unit: '" + sizeValue.unit + "'");
        }
        if (unitOptions !== options) {
          scale *= unitOptions.sizeMultiplier / options.sizeMultiplier;
        }
      }
      return Math.min(sizeValue.number * scale, options.maxSize);
    };
    makeEm = function makeEm2(n2) {
      return +n2.toFixed(4) + "em";
    };
    createClass = function createClass2(classes) {
      return classes.filter((cls) => cls).join(" ");
    };
    initNode = function initNode2(classes, options, style) {
      this.classes = classes || [];
      this.attributes = {};
      this.height = 0;
      this.depth = 0;
      this.maxFontSize = 0;
      this.style = style || {};
      if (options) {
        if (options.style.isTight()) {
          this.classes.push("mtight");
        }
        var color = options.getColor();
        if (color) {
          this.style.color = color;
        }
      }
    };
    toNode = function toNode2(tagName) {
      var node = document.createElement(tagName);
      node.className = createClass(this.classes);
      for (var style in this.style) {
        if (this.style.hasOwnProperty(style)) {
          node.style[style] = this.style[style];
        }
      }
      for (var attr in this.attributes) {
        if (this.attributes.hasOwnProperty(attr)) {
          node.setAttribute(attr, this.attributes[attr]);
        }
      }
      for (var i = 0; i < this.children.length; i++) {
        node.appendChild(this.children[i].toNode());
      }
      return node;
    };
    toMarkup = function toMarkup2(tagName) {
      var markup = "<" + tagName;
      if (this.classes.length) {
        markup += ' class="' + utils.escape(createClass(this.classes)) + '"';
      }
      var styles2 = "";
      for (var style in this.style) {
        if (this.style.hasOwnProperty(style)) {
          styles2 += utils.hyphenate(style) + ":" + this.style[style] + ";";
        }
      }
      if (styles2) {
        markup += ' style="' + utils.escape(styles2) + '"';
      }
      for (var attr in this.attributes) {
        if (this.attributes.hasOwnProperty(attr)) {
          markup += " " + attr + '="' + utils.escape(this.attributes[attr]) + '"';
        }
      }
      markup += ">";
      for (var i = 0; i < this.children.length; i++) {
        markup += this.children[i].toMarkup();
      }
      markup += "</" + tagName + ">";
      return markup;
    };
    Span = class {
      constructor(classes, children, options, style) {
        this.children = void 0;
        this.attributes = void 0;
        this.classes = void 0;
        this.height = void 0;
        this.depth = void 0;
        this.width = void 0;
        this.maxFontSize = void 0;
        this.style = void 0;
        initNode.call(this, classes, options, style);
        this.children = children || [];
      }
      setAttribute(attribute, value) {
        this.attributes[attribute] = value;
      }
      hasClass(className) {
        return utils.contains(this.classes, className);
      }
      toNode() {
        return toNode.call(this, "span");
      }
      toMarkup() {
        return toMarkup.call(this, "span");
      }
    };
    Anchor = class {
      constructor(href, classes, children, options) {
        this.children = void 0;
        this.attributes = void 0;
        this.classes = void 0;
        this.height = void 0;
        this.depth = void 0;
        this.maxFontSize = void 0;
        this.style = void 0;
        initNode.call(this, classes, options);
        this.children = children || [];
        this.setAttribute("href", href);
      }
      setAttribute(attribute, value) {
        this.attributes[attribute] = value;
      }
      hasClass(className) {
        return utils.contains(this.classes, className);
      }
      toNode() {
        return toNode.call(this, "a");
      }
      toMarkup() {
        return toMarkup.call(this, "a");
      }
    };
    Img = class {
      constructor(src, alt, style) {
        this.src = void 0;
        this.alt = void 0;
        this.classes = void 0;
        this.height = void 0;
        this.depth = void 0;
        this.maxFontSize = void 0;
        this.style = void 0;
        this.alt = alt;
        this.src = src;
        this.classes = ["mord"];
        this.style = style;
      }
      hasClass(className) {
        return utils.contains(this.classes, className);
      }
      toNode() {
        var node = document.createElement("img");
        node.src = this.src;
        node.alt = this.alt;
        node.className = "mord";
        for (var style in this.style) {
          if (this.style.hasOwnProperty(style)) {
            node.style[style] = this.style[style];
          }
        }
        return node;
      }
      toMarkup() {
        var markup = "<img  src='" + this.src + " 'alt='" + this.alt + "' ";
        var styles2 = "";
        for (var style in this.style) {
          if (this.style.hasOwnProperty(style)) {
            styles2 += utils.hyphenate(style) + ":" + this.style[style] + ";";
          }
        }
        if (styles2) {
          markup += ' style="' + utils.escape(styles2) + '"';
        }
        markup += "'/>";
        return markup;
      }
    };
    iCombinations = {
      "\xEE": "\u0131\u0302",
      "\xEF": "\u0131\u0308",
      "\xED": "\u0131\u0301",
      "\xEC": "\u0131\u0300"
    };
    SymbolNode = class {
      constructor(text2, height, depth, italic, skew, width, classes, style) {
        this.text = void 0;
        this.height = void 0;
        this.depth = void 0;
        this.italic = void 0;
        this.skew = void 0;
        this.width = void 0;
        this.maxFontSize = void 0;
        this.classes = void 0;
        this.style = void 0;
        this.text = text2;
        this.height = height || 0;
        this.depth = depth || 0;
        this.italic = italic || 0;
        this.skew = skew || 0;
        this.width = width || 0;
        this.classes = classes || [];
        this.style = style || {};
        this.maxFontSize = 0;
        var script = scriptFromCodepoint(this.text.charCodeAt(0));
        if (script) {
          this.classes.push(script + "_fallback");
        }
        if (/[îïíì]/.test(this.text)) {
          this.text = iCombinations[this.text];
        }
      }
      hasClass(className) {
        return utils.contains(this.classes, className);
      }
      toNode() {
        var node = document.createTextNode(this.text);
        var span = null;
        if (this.italic > 0) {
          span = document.createElement("span");
          span.style.marginRight = makeEm(this.italic);
        }
        if (this.classes.length > 0) {
          span = span || document.createElement("span");
          span.className = createClass(this.classes);
        }
        for (var style in this.style) {
          if (this.style.hasOwnProperty(style)) {
            span = span || document.createElement("span");
            span.style[style] = this.style[style];
          }
        }
        if (span) {
          span.appendChild(node);
          return span;
        } else {
          return node;
        }
      }
      toMarkup() {
        var needsSpan = false;
        var markup = "<span";
        if (this.classes.length) {
          needsSpan = true;
          markup += ' class="';
          markup += utils.escape(createClass(this.classes));
          markup += '"';
        }
        var styles2 = "";
        if (this.italic > 0) {
          styles2 += "margin-right:" + this.italic + "em;";
        }
        for (var style in this.style) {
          if (this.style.hasOwnProperty(style)) {
            styles2 += utils.hyphenate(style) + ":" + this.style[style] + ";";
          }
        }
        if (styles2) {
          needsSpan = true;
          markup += ' style="' + utils.escape(styles2) + '"';
        }
        var escaped2 = utils.escape(this.text);
        if (needsSpan) {
          markup += ">";
          markup += escaped2;
          markup += "</span>";
          return markup;
        } else {
          return escaped2;
        }
      }
    };
    SvgNode = class {
      constructor(children, attributes) {
        this.children = void 0;
        this.attributes = void 0;
        this.children = children || [];
        this.attributes = attributes || {};
      }
      toNode() {
        var svgNS = "http://www.w3.org/2000/svg";
        var node = document.createElementNS(svgNS, "svg");
        for (var attr in this.attributes) {
          if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
            node.setAttribute(attr, this.attributes[attr]);
          }
        }
        for (var i = 0; i < this.children.length; i++) {
          node.appendChild(this.children[i].toNode());
        }
        return node;
      }
      toMarkup() {
        var markup = '<svg xmlns="http://www.w3.org/2000/svg"';
        for (var attr in this.attributes) {
          if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
            markup += " " + attr + "='" + this.attributes[attr] + "'";
          }
        }
        markup += ">";
        for (var i = 0; i < this.children.length; i++) {
          markup += this.children[i].toMarkup();
        }
        markup += "</svg>";
        return markup;
      }
    };
    PathNode = class {
      constructor(pathName, alternate) {
        this.pathName = void 0;
        this.alternate = void 0;
        this.pathName = pathName;
        this.alternate = alternate;
      }
      toNode() {
        var svgNS = "http://www.w3.org/2000/svg";
        var node = document.createElementNS(svgNS, "path");
        if (this.alternate) {
          node.setAttribute("d", this.alternate);
        } else {
          node.setAttribute("d", path[this.pathName]);
        }
        return node;
      }
      toMarkup() {
        if (this.alternate) {
          return "<path d='" + this.alternate + "'/>";
        } else {
          return "<path d='" + path[this.pathName] + "'/>";
        }
      }
    };
    LineNode = class {
      constructor(attributes) {
        this.attributes = void 0;
        this.attributes = attributes || {};
      }
      toNode() {
        var svgNS = "http://www.w3.org/2000/svg";
        var node = document.createElementNS(svgNS, "line");
        for (var attr in this.attributes) {
          if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
            node.setAttribute(attr, this.attributes[attr]);
          }
        }
        return node;
      }
      toMarkup() {
        var markup = "<line";
        for (var attr in this.attributes) {
          if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
            markup += " " + attr + "='" + this.attributes[attr] + "'";
          }
        }
        markup += "/>";
        return markup;
      }
    };
    ATOMS = {
      "bin": 1,
      "close": 1,
      "inner": 1,
      "open": 1,
      "punct": 1,
      "rel": 1
    };
    NON_ATOMS = {
      "accent-token": 1,
      "mathord": 1,
      "op-token": 1,
      "spacing": 1,
      "textord": 1
    };
    symbols = {
      "math": {},
      "text": {}
    };
    math = "math";
    text = "text";
    main = "main";
    ams = "ams";
    accent = "accent-token";
    bin = "bin";
    close = "close";
    inner = "inner";
    mathord = "mathord";
    op = "op-token";
    open = "open";
    punct = "punct";
    rel = "rel";
    spacing = "spacing";
    textord = "textord";
    defineSymbol(math, main, rel, "\u2261", "\\equiv", true);
    defineSymbol(math, main, rel, "\u227A", "\\prec", true);
    defineSymbol(math, main, rel, "\u227B", "\\succ", true);
    defineSymbol(math, main, rel, "\u223C", "\\sim", true);
    defineSymbol(math, main, rel, "\u22A5", "\\perp");
    defineSymbol(math, main, rel, "\u2AAF", "\\preceq", true);
    defineSymbol(math, main, rel, "\u2AB0", "\\succeq", true);
    defineSymbol(math, main, rel, "\u2243", "\\simeq", true);
    defineSymbol(math, main, rel, "\u2223", "\\mid", true);
    defineSymbol(math, main, rel, "\u226A", "\\ll", true);
    defineSymbol(math, main, rel, "\u226B", "\\gg", true);
    defineSymbol(math, main, rel, "\u224D", "\\asymp", true);
    defineSymbol(math, main, rel, "\u2225", "\\parallel");
    defineSymbol(math, main, rel, "\u22C8", "\\bowtie", true);
    defineSymbol(math, main, rel, "\u2323", "\\smile", true);
    defineSymbol(math, main, rel, "\u2291", "\\sqsubseteq", true);
    defineSymbol(math, main, rel, "\u2292", "\\sqsupseteq", true);
    defineSymbol(math, main, rel, "\u2250", "\\doteq", true);
    defineSymbol(math, main, rel, "\u2322", "\\frown", true);
    defineSymbol(math, main, rel, "\u220B", "\\ni", true);
    defineSymbol(math, main, rel, "\u221D", "\\propto", true);
    defineSymbol(math, main, rel, "\u22A2", "\\vdash", true);
    defineSymbol(math, main, rel, "\u22A3", "\\dashv", true);
    defineSymbol(math, main, rel, "\u220B", "\\owns");
    defineSymbol(math, main, punct, ".", "\\ldotp");
    defineSymbol(math, main, punct, "\u22C5", "\\cdotp");
    defineSymbol(math, main, textord, "#", "\\#");
    defineSymbol(text, main, textord, "#", "\\#");
    defineSymbol(math, main, textord, "&", "\\&");
    defineSymbol(text, main, textord, "&", "\\&");
    defineSymbol(math, main, textord, "\u2135", "\\aleph", true);
    defineSymbol(math, main, textord, "\u2200", "\\forall", true);
    defineSymbol(math, main, textord, "\u210F", "\\hbar", true);
    defineSymbol(math, main, textord, "\u2203", "\\exists", true);
    defineSymbol(math, main, textord, "\u2207", "\\nabla", true);
    defineSymbol(math, main, textord, "\u266D", "\\flat", true);
    defineSymbol(math, main, textord, "\u2113", "\\ell", true);
    defineSymbol(math, main, textord, "\u266E", "\\natural", true);
    defineSymbol(math, main, textord, "\u2663", "\\clubsuit", true);
    defineSymbol(math, main, textord, "\u2118", "\\wp", true);
    defineSymbol(math, main, textord, "\u266F", "\\sharp", true);
    defineSymbol(math, main, textord, "\u2662", "\\diamondsuit", true);
    defineSymbol(math, main, textord, "\u211C", "\\Re", true);
    defineSymbol(math, main, textord, "\u2661", "\\heartsuit", true);
    defineSymbol(math, main, textord, "\u2111", "\\Im", true);
    defineSymbol(math, main, textord, "\u2660", "\\spadesuit", true);
    defineSymbol(math, main, textord, "\xA7", "\\S", true);
    defineSymbol(text, main, textord, "\xA7", "\\S");
    defineSymbol(math, main, textord, "\xB6", "\\P", true);
    defineSymbol(text, main, textord, "\xB6", "\\P");
    defineSymbol(math, main, textord, "\u2020", "\\dag");
    defineSymbol(text, main, textord, "\u2020", "\\dag");
    defineSymbol(text, main, textord, "\u2020", "\\textdagger");
    defineSymbol(math, main, textord, "\u2021", "\\ddag");
    defineSymbol(text, main, textord, "\u2021", "\\ddag");
    defineSymbol(text, main, textord, "\u2021", "\\textdaggerdbl");
    defineSymbol(math, main, close, "\u23B1", "\\rmoustache", true);
    defineSymbol(math, main, open, "\u23B0", "\\lmoustache", true);
    defineSymbol(math, main, close, "\u27EF", "\\rgroup", true);
    defineSymbol(math, main, open, "\u27EE", "\\lgroup", true);
    defineSymbol(math, main, bin, "\u2213", "\\mp", true);
    defineSymbol(math, main, bin, "\u2296", "\\ominus", true);
    defineSymbol(math, main, bin, "\u228E", "\\uplus", true);
    defineSymbol(math, main, bin, "\u2293", "\\sqcap", true);
    defineSymbol(math, main, bin, "\u2217", "\\ast");
    defineSymbol(math, main, bin, "\u2294", "\\sqcup", true);
    defineSymbol(math, main, bin, "\u25EF", "\\bigcirc", true);
    defineSymbol(math, main, bin, "\u2219", "\\bullet", true);
    defineSymbol(math, main, bin, "\u2021", "\\ddagger");
    defineSymbol(math, main, bin, "\u2240", "\\wr", true);
    defineSymbol(math, main, bin, "\u2A3F", "\\amalg");
    defineSymbol(math, main, bin, "&", "\\And");
    defineSymbol(math, main, rel, "\u27F5", "\\longleftarrow", true);
    defineSymbol(math, main, rel, "\u21D0", "\\Leftarrow", true);
    defineSymbol(math, main, rel, "\u27F8", "\\Longleftarrow", true);
    defineSymbol(math, main, rel, "\u27F6", "\\longrightarrow", true);
    defineSymbol(math, main, rel, "\u21D2", "\\Rightarrow", true);
    defineSymbol(math, main, rel, "\u27F9", "\\Longrightarrow", true);
    defineSymbol(math, main, rel, "\u2194", "\\leftrightarrow", true);
    defineSymbol(math, main, rel, "\u27F7", "\\longleftrightarrow", true);
    defineSymbol(math, main, rel, "\u21D4", "\\Leftrightarrow", true);
    defineSymbol(math, main, rel, "\u27FA", "\\Longleftrightarrow", true);
    defineSymbol(math, main, rel, "\u21A6", "\\mapsto", true);
    defineSymbol(math, main, rel, "\u27FC", "\\longmapsto", true);
    defineSymbol(math, main, rel, "\u2197", "\\nearrow", true);
    defineSymbol(math, main, rel, "\u21A9", "\\hookleftarrow", true);
    defineSymbol(math, main, rel, "\u21AA", "\\hookrightarrow", true);
    defineSymbol(math, main, rel, "\u2198", "\\searrow", true);
    defineSymbol(math, main, rel, "\u21BC", "\\leftharpoonup", true);
    defineSymbol(math, main, rel, "\u21C0", "\\rightharpoonup", true);
    defineSymbol(math, main, rel, "\u2199", "\\swarrow", true);
    defineSymbol(math, main, rel, "\u21BD", "\\leftharpoondown", true);
    defineSymbol(math, main, rel, "\u21C1", "\\rightharpoondown", true);
    defineSymbol(math, main, rel, "\u2196", "\\nwarrow", true);
    defineSymbol(math, main, rel, "\u21CC", "\\rightleftharpoons", true);
    defineSymbol(math, ams, rel, "\u226E", "\\nless", true);
    defineSymbol(math, ams, rel, "\uE010", "\\@nleqslant");
    defineSymbol(math, ams, rel, "\uE011", "\\@nleqq");
    defineSymbol(math, ams, rel, "\u2A87", "\\lneq", true);
    defineSymbol(math, ams, rel, "\u2268", "\\lneqq", true);
    defineSymbol(math, ams, rel, "\uE00C", "\\@lvertneqq");
    defineSymbol(math, ams, rel, "\u22E6", "\\lnsim", true);
    defineSymbol(math, ams, rel, "\u2A89", "\\lnapprox", true);
    defineSymbol(math, ams, rel, "\u2280", "\\nprec", true);
    defineSymbol(math, ams, rel, "\u22E0", "\\npreceq", true);
    defineSymbol(math, ams, rel, "\u22E8", "\\precnsim", true);
    defineSymbol(math, ams, rel, "\u2AB9", "\\precnapprox", true);
    defineSymbol(math, ams, rel, "\u2241", "\\nsim", true);
    defineSymbol(math, ams, rel, "\uE006", "\\@nshortmid");
    defineSymbol(math, ams, rel, "\u2224", "\\nmid", true);
    defineSymbol(math, ams, rel, "\u22AC", "\\nvdash", true);
    defineSymbol(math, ams, rel, "\u22AD", "\\nvDash", true);
    defineSymbol(math, ams, rel, "\u22EA", "\\ntriangleleft");
    defineSymbol(math, ams, rel, "\u22EC", "\\ntrianglelefteq", true);
    defineSymbol(math, ams, rel, "\u228A", "\\subsetneq", true);
    defineSymbol(math, ams, rel, "\uE01A", "\\@varsubsetneq");
    defineSymbol(math, ams, rel, "\u2ACB", "\\subsetneqq", true);
    defineSymbol(math, ams, rel, "\uE017", "\\@varsubsetneqq");
    defineSymbol(math, ams, rel, "\u226F", "\\ngtr", true);
    defineSymbol(math, ams, rel, "\uE00F", "\\@ngeqslant");
    defineSymbol(math, ams, rel, "\uE00E", "\\@ngeqq");
    defineSymbol(math, ams, rel, "\u2A88", "\\gneq", true);
    defineSymbol(math, ams, rel, "\u2269", "\\gneqq", true);
    defineSymbol(math, ams, rel, "\uE00D", "\\@gvertneqq");
    defineSymbol(math, ams, rel, "\u22E7", "\\gnsim", true);
    defineSymbol(math, ams, rel, "\u2A8A", "\\gnapprox", true);
    defineSymbol(math, ams, rel, "\u2281", "\\nsucc", true);
    defineSymbol(math, ams, rel, "\u22E1", "\\nsucceq", true);
    defineSymbol(math, ams, rel, "\u22E9", "\\succnsim", true);
    defineSymbol(math, ams, rel, "\u2ABA", "\\succnapprox", true);
    defineSymbol(math, ams, rel, "\u2246", "\\ncong", true);
    defineSymbol(math, ams, rel, "\uE007", "\\@nshortparallel");
    defineSymbol(math, ams, rel, "\u2226", "\\nparallel", true);
    defineSymbol(math, ams, rel, "\u22AF", "\\nVDash", true);
    defineSymbol(math, ams, rel, "\u22EB", "\\ntriangleright");
    defineSymbol(math, ams, rel, "\u22ED", "\\ntrianglerighteq", true);
    defineSymbol(math, ams, rel, "\uE018", "\\@nsupseteqq");
    defineSymbol(math, ams, rel, "\u228B", "\\supsetneq", true);
    defineSymbol(math, ams, rel, "\uE01B", "\\@varsupsetneq");
    defineSymbol(math, ams, rel, "\u2ACC", "\\supsetneqq", true);
    defineSymbol(math, ams, rel, "\uE019", "\\@varsupsetneqq");
    defineSymbol(math, ams, rel, "\u22AE", "\\nVdash", true);
    defineSymbol(math, ams, rel, "\u2AB5", "\\precneqq", true);
    defineSymbol(math, ams, rel, "\u2AB6", "\\succneqq", true);
    defineSymbol(math, ams, rel, "\uE016", "\\@nsubseteqq");
    defineSymbol(math, ams, bin, "\u22B4", "\\unlhd");
    defineSymbol(math, ams, bin, "\u22B5", "\\unrhd");
    defineSymbol(math, ams, rel, "\u219A", "\\nleftarrow", true);
    defineSymbol(math, ams, rel, "\u219B", "\\nrightarrow", true);
    defineSymbol(math, ams, rel, "\u21CD", "\\nLeftarrow", true);
    defineSymbol(math, ams, rel, "\u21CF", "\\nRightarrow", true);
    defineSymbol(math, ams, rel, "\u21AE", "\\nleftrightarrow", true);
    defineSymbol(math, ams, rel, "\u21CE", "\\nLeftrightarrow", true);
    defineSymbol(math, ams, rel, "\u25B3", "\\vartriangle");
    defineSymbol(math, ams, textord, "\u210F", "\\hslash");
    defineSymbol(math, ams, textord, "\u25BD", "\\triangledown");
    defineSymbol(math, ams, textord, "\u25CA", "\\lozenge");
    defineSymbol(math, ams, textord, "\u24C8", "\\circledS");
    defineSymbol(math, ams, textord, "\xAE", "\\circledR");
    defineSymbol(text, ams, textord, "\xAE", "\\circledR");
    defineSymbol(math, ams, textord, "\u2221", "\\measuredangle", true);
    defineSymbol(math, ams, textord, "\u2204", "\\nexists");
    defineSymbol(math, ams, textord, "\u2127", "\\mho");
    defineSymbol(math, ams, textord, "\u2132", "\\Finv", true);
    defineSymbol(math, ams, textord, "\u2141", "\\Game", true);
    defineSymbol(math, ams, textord, "\u2035", "\\backprime");
    defineSymbol(math, ams, textord, "\u25B2", "\\blacktriangle");
    defineSymbol(math, ams, textord, "\u25BC", "\\blacktriangledown");
    defineSymbol(math, ams, textord, "\u25A0", "\\blacksquare");
    defineSymbol(math, ams, textord, "\u29EB", "\\blacklozenge");
    defineSymbol(math, ams, textord, "\u2605", "\\bigstar");
    defineSymbol(math, ams, textord, "\u2222", "\\sphericalangle", true);
    defineSymbol(math, ams, textord, "\u2201", "\\complement", true);
    defineSymbol(math, ams, textord, "\xF0", "\\eth", true);
    defineSymbol(text, main, textord, "\xF0", "\xF0");
    defineSymbol(math, ams, textord, "\u2571", "\\diagup");
    defineSymbol(math, ams, textord, "\u2572", "\\diagdown");
    defineSymbol(math, ams, textord, "\u25A1", "\\square");
    defineSymbol(math, ams, textord, "\u25A1", "\\Box");
    defineSymbol(math, ams, textord, "\u25CA", "\\Diamond");
    defineSymbol(math, ams, textord, "\xA5", "\\yen", true);
    defineSymbol(text, ams, textord, "\xA5", "\\yen", true);
    defineSymbol(math, ams, textord, "\u2713", "\\checkmark", true);
    defineSymbol(text, ams, textord, "\u2713", "\\checkmark");
    defineSymbol(math, ams, textord, "\u2136", "\\beth", true);
    defineSymbol(math, ams, textord, "\u2138", "\\daleth", true);
    defineSymbol(math, ams, textord, "\u2137", "\\gimel", true);
    defineSymbol(math, ams, textord, "\u03DD", "\\digamma", true);
    defineSymbol(math, ams, textord, "\u03F0", "\\varkappa");
    defineSymbol(math, ams, open, "\u250C", "\\@ulcorner", true);
    defineSymbol(math, ams, close, "\u2510", "\\@urcorner", true);
    defineSymbol(math, ams, open, "\u2514", "\\@llcorner", true);
    defineSymbol(math, ams, close, "\u2518", "\\@lrcorner", true);
    defineSymbol(math, ams, rel, "\u2266", "\\leqq", true);
    defineSymbol(math, ams, rel, "\u2A7D", "\\leqslant", true);
    defineSymbol(math, ams, rel, "\u2A95", "\\eqslantless", true);
    defineSymbol(math, ams, rel, "\u2272", "\\lesssim", true);
    defineSymbol(math, ams, rel, "\u2A85", "\\lessapprox", true);
    defineSymbol(math, ams, rel, "\u224A", "\\approxeq", true);
    defineSymbol(math, ams, bin, "\u22D6", "\\lessdot");
    defineSymbol(math, ams, rel, "\u22D8", "\\lll", true);
    defineSymbol(math, ams, rel, "\u2276", "\\lessgtr", true);
    defineSymbol(math, ams, rel, "\u22DA", "\\lesseqgtr", true);
    defineSymbol(math, ams, rel, "\u2A8B", "\\lesseqqgtr", true);
    defineSymbol(math, ams, rel, "\u2251", "\\doteqdot");
    defineSymbol(math, ams, rel, "\u2253", "\\risingdotseq", true);
    defineSymbol(math, ams, rel, "\u2252", "\\fallingdotseq", true);
    defineSymbol(math, ams, rel, "\u223D", "\\backsim", true);
    defineSymbol(math, ams, rel, "\u22CD", "\\backsimeq", true);
    defineSymbol(math, ams, rel, "\u2AC5", "\\subseteqq", true);
    defineSymbol(math, ams, rel, "\u22D0", "\\Subset", true);
    defineSymbol(math, ams, rel, "\u228F", "\\sqsubset", true);
    defineSymbol(math, ams, rel, "\u227C", "\\preccurlyeq", true);
    defineSymbol(math, ams, rel, "\u22DE", "\\curlyeqprec", true);
    defineSymbol(math, ams, rel, "\u227E", "\\precsim", true);
    defineSymbol(math, ams, rel, "\u2AB7", "\\precapprox", true);
    defineSymbol(math, ams, rel, "\u22B2", "\\vartriangleleft");
    defineSymbol(math, ams, rel, "\u22B4", "\\trianglelefteq");
    defineSymbol(math, ams, rel, "\u22A8", "\\vDash", true);
    defineSymbol(math, ams, rel, "\u22AA", "\\Vvdash", true);
    defineSymbol(math, ams, rel, "\u2323", "\\smallsmile");
    defineSymbol(math, ams, rel, "\u2322", "\\smallfrown");
    defineSymbol(math, ams, rel, "\u224F", "\\bumpeq", true);
    defineSymbol(math, ams, rel, "\u224E", "\\Bumpeq", true);
    defineSymbol(math, ams, rel, "\u2267", "\\geqq", true);
    defineSymbol(math, ams, rel, "\u2A7E", "\\geqslant", true);
    defineSymbol(math, ams, rel, "\u2A96", "\\eqslantgtr", true);
    defineSymbol(math, ams, rel, "\u2273", "\\gtrsim", true);
    defineSymbol(math, ams, rel, "\u2A86", "\\gtrapprox", true);
    defineSymbol(math, ams, bin, "\u22D7", "\\gtrdot");
    defineSymbol(math, ams, rel, "\u22D9", "\\ggg", true);
    defineSymbol(math, ams, rel, "\u2277", "\\gtrless", true);
    defineSymbol(math, ams, rel, "\u22DB", "\\gtreqless", true);
    defineSymbol(math, ams, rel, "\u2A8C", "\\gtreqqless", true);
    defineSymbol(math, ams, rel, "\u2256", "\\eqcirc", true);
    defineSymbol(math, ams, rel, "\u2257", "\\circeq", true);
    defineSymbol(math, ams, rel, "\u225C", "\\triangleq", true);
    defineSymbol(math, ams, rel, "\u223C", "\\thicksim");
    defineSymbol(math, ams, rel, "\u2248", "\\thickapprox");
    defineSymbol(math, ams, rel, "\u2AC6", "\\supseteqq", true);
    defineSymbol(math, ams, rel, "\u22D1", "\\Supset", true);
    defineSymbol(math, ams, rel, "\u2290", "\\sqsupset", true);
    defineSymbol(math, ams, rel, "\u227D", "\\succcurlyeq", true);
    defineSymbol(math, ams, rel, "\u22DF", "\\curlyeqsucc", true);
    defineSymbol(math, ams, rel, "\u227F", "\\succsim", true);
    defineSymbol(math, ams, rel, "\u2AB8", "\\succapprox", true);
    defineSymbol(math, ams, rel, "\u22B3", "\\vartriangleright");
    defineSymbol(math, ams, rel, "\u22B5", "\\trianglerighteq");
    defineSymbol(math, ams, rel, "\u22A9", "\\Vdash", true);
    defineSymbol(math, ams, rel, "\u2223", "\\shortmid");
    defineSymbol(math, ams, rel, "\u2225", "\\shortparallel");
    defineSymbol(math, ams, rel, "\u226C", "\\between", true);
    defineSymbol(math, ams, rel, "\u22D4", "\\pitchfork", true);
    defineSymbol(math, ams, rel, "\u221D", "\\varpropto");
    defineSymbol(math, ams, rel, "\u25C0", "\\blacktriangleleft");
    defineSymbol(math, ams, rel, "\u2234", "\\therefore", true);
    defineSymbol(math, ams, rel, "\u220D", "\\backepsilon");
    defineSymbol(math, ams, rel, "\u25B6", "\\blacktriangleright");
    defineSymbol(math, ams, rel, "\u2235", "\\because", true);
    defineSymbol(math, ams, rel, "\u22D8", "\\llless");
    defineSymbol(math, ams, rel, "\u22D9", "\\gggtr");
    defineSymbol(math, ams, bin, "\u22B2", "\\lhd");
    defineSymbol(math, ams, bin, "\u22B3", "\\rhd");
    defineSymbol(math, ams, rel, "\u2242", "\\eqsim", true);
    defineSymbol(math, main, rel, "\u22C8", "\\Join");
    defineSymbol(math, ams, rel, "\u2251", "\\Doteq", true);
    defineSymbol(math, ams, bin, "\u2214", "\\dotplus", true);
    defineSymbol(math, ams, bin, "\u2216", "\\smallsetminus");
    defineSymbol(math, ams, bin, "\u22D2", "\\Cap", true);
    defineSymbol(math, ams, bin, "\u22D3", "\\Cup", true);
    defineSymbol(math, ams, bin, "\u2A5E", "\\doublebarwedge", true);
    defineSymbol(math, ams, bin, "\u229F", "\\boxminus", true);
    defineSymbol(math, ams, bin, "\u229E", "\\boxplus", true);
    defineSymbol(math, ams, bin, "\u22C7", "\\divideontimes", true);
    defineSymbol(math, ams, bin, "\u22C9", "\\ltimes", true);
    defineSymbol(math, ams, bin, "\u22CA", "\\rtimes", true);
    defineSymbol(math, ams, bin, "\u22CB", "\\leftthreetimes", true);
    defineSymbol(math, ams, bin, "\u22CC", "\\rightthreetimes", true);
    defineSymbol(math, ams, bin, "\u22CF", "\\curlywedge", true);
    defineSymbol(math, ams, bin, "\u22CE", "\\curlyvee", true);
    defineSymbol(math, ams, bin, "\u229D", "\\circleddash", true);
    defineSymbol(math, ams, bin, "\u229B", "\\circledast", true);
    defineSymbol(math, ams, bin, "\u22C5", "\\centerdot");
    defineSymbol(math, ams, bin, "\u22BA", "\\intercal", true);
    defineSymbol(math, ams, bin, "\u22D2", "\\doublecap");
    defineSymbol(math, ams, bin, "\u22D3", "\\doublecup");
    defineSymbol(math, ams, bin, "\u22A0", "\\boxtimes", true);
    defineSymbol(math, ams, rel, "\u21E2", "\\dashrightarrow", true);
    defineSymbol(math, ams, rel, "\u21E0", "\\dashleftarrow", true);
    defineSymbol(math, ams, rel, "\u21C7", "\\leftleftarrows", true);
    defineSymbol(math, ams, rel, "\u21C6", "\\leftrightarrows", true);
    defineSymbol(math, ams, rel, "\u21DA", "\\Lleftarrow", true);
    defineSymbol(math, ams, rel, "\u219E", "\\twoheadleftarrow", true);
    defineSymbol(math, ams, rel, "\u21A2", "\\leftarrowtail", true);
    defineSymbol(math, ams, rel, "\u21AB", "\\looparrowleft", true);
    defineSymbol(math, ams, rel, "\u21CB", "\\leftrightharpoons", true);
    defineSymbol(math, ams, rel, "\u21B6", "\\curvearrowleft", true);
    defineSymbol(math, ams, rel, "\u21BA", "\\circlearrowleft", true);
    defineSymbol(math, ams, rel, "\u21B0", "\\Lsh", true);
    defineSymbol(math, ams, rel, "\u21C8", "\\upuparrows", true);
    defineSymbol(math, ams, rel, "\u21BF", "\\upharpoonleft", true);
    defineSymbol(math, ams, rel, "\u21C3", "\\downharpoonleft", true);
    defineSymbol(math, main, rel, "\u22B6", "\\origof", true);
    defineSymbol(math, main, rel, "\u22B7", "\\imageof", true);
    defineSymbol(math, ams, rel, "\u22B8", "\\multimap", true);
    defineSymbol(math, ams, rel, "\u21AD", "\\leftrightsquigarrow", true);
    defineSymbol(math, ams, rel, "\u21C9", "\\rightrightarrows", true);
    defineSymbol(math, ams, rel, "\u21C4", "\\rightleftarrows", true);
    defineSymbol(math, ams, rel, "\u21A0", "\\twoheadrightarrow", true);
    defineSymbol(math, ams, rel, "\u21A3", "\\rightarrowtail", true);
    defineSymbol(math, ams, rel, "\u21AC", "\\looparrowright", true);
    defineSymbol(math, ams, rel, "\u21B7", "\\curvearrowright", true);
    defineSymbol(math, ams, rel, "\u21BB", "\\circlearrowright", true);
    defineSymbol(math, ams, rel, "\u21B1", "\\Rsh", true);
    defineSymbol(math, ams, rel, "\u21CA", "\\downdownarrows", true);
    defineSymbol(math, ams, rel, "\u21BE", "\\upharpoonright", true);
    defineSymbol(math, ams, rel, "\u21C2", "\\downharpoonright", true);
    defineSymbol(math, ams, rel, "\u21DD", "\\rightsquigarrow", true);
    defineSymbol(math, ams, rel, "\u21DD", "\\leadsto");
    defineSymbol(math, ams, rel, "\u21DB", "\\Rrightarrow", true);
    defineSymbol(math, ams, rel, "\u21BE", "\\restriction");
    defineSymbol(math, main, textord, "\u2018", "`");
    defineSymbol(math, main, textord, "$", "\\$");
    defineSymbol(text, main, textord, "$", "\\$");
    defineSymbol(text, main, textord, "$", "\\textdollar");
    defineSymbol(math, main, textord, "%", "\\%");
    defineSymbol(text, main, textord, "%", "\\%");
    defineSymbol(math, main, textord, "_", "\\_");
    defineSymbol(text, main, textord, "_", "\\_");
    defineSymbol(text, main, textord, "_", "\\textunderscore");
    defineSymbol(math, main, textord, "\u2220", "\\angle", true);
    defineSymbol(math, main, textord, "\u221E", "\\infty", true);
    defineSymbol(math, main, textord, "\u2032", "\\prime");
    defineSymbol(math, main, textord, "\u25B3", "\\triangle");
    defineSymbol(math, main, textord, "\u0393", "\\Gamma", true);
    defineSymbol(math, main, textord, "\u0394", "\\Delta", true);
    defineSymbol(math, main, textord, "\u0398", "\\Theta", true);
    defineSymbol(math, main, textord, "\u039B", "\\Lambda", true);
    defineSymbol(math, main, textord, "\u039E", "\\Xi", true);
    defineSymbol(math, main, textord, "\u03A0", "\\Pi", true);
    defineSymbol(math, main, textord, "\u03A3", "\\Sigma", true);
    defineSymbol(math, main, textord, "\u03A5", "\\Upsilon", true);
    defineSymbol(math, main, textord, "\u03A6", "\\Phi", true);
    defineSymbol(math, main, textord, "\u03A8", "\\Psi", true);
    defineSymbol(math, main, textord, "\u03A9", "\\Omega", true);
    defineSymbol(math, main, textord, "A", "\u0391");
    defineSymbol(math, main, textord, "B", "\u0392");
    defineSymbol(math, main, textord, "E", "\u0395");
    defineSymbol(math, main, textord, "Z", "\u0396");
    defineSymbol(math, main, textord, "H", "\u0397");
    defineSymbol(math, main, textord, "I", "\u0399");
    defineSymbol(math, main, textord, "K", "\u039A");
    defineSymbol(math, main, textord, "M", "\u039C");
    defineSymbol(math, main, textord, "N", "\u039D");
    defineSymbol(math, main, textord, "O", "\u039F");
    defineSymbol(math, main, textord, "P", "\u03A1");
    defineSymbol(math, main, textord, "T", "\u03A4");
    defineSymbol(math, main, textord, "X", "\u03A7");
    defineSymbol(math, main, textord, "\xAC", "\\neg", true);
    defineSymbol(math, main, textord, "\xAC", "\\lnot");
    defineSymbol(math, main, textord, "\u22A4", "\\top");
    defineSymbol(math, main, textord, "\u22A5", "\\bot");
    defineSymbol(math, main, textord, "\u2205", "\\emptyset");
    defineSymbol(math, ams, textord, "\u2205", "\\varnothing");
    defineSymbol(math, main, mathord, "\u03B1", "\\alpha", true);
    defineSymbol(math, main, mathord, "\u03B2", "\\beta", true);
    defineSymbol(math, main, mathord, "\u03B3", "\\gamma", true);
    defineSymbol(math, main, mathord, "\u03B4", "\\delta", true);
    defineSymbol(math, main, mathord, "\u03F5", "\\epsilon", true);
    defineSymbol(math, main, mathord, "\u03B6", "\\zeta", true);
    defineSymbol(math, main, mathord, "\u03B7", "\\eta", true);
    defineSymbol(math, main, mathord, "\u03B8", "\\theta", true);
    defineSymbol(math, main, mathord, "\u03B9", "\\iota", true);
    defineSymbol(math, main, mathord, "\u03BA", "\\kappa", true);
    defineSymbol(math, main, mathord, "\u03BB", "\\lambda", true);
    defineSymbol(math, main, mathord, "\u03BC", "\\mu", true);
    defineSymbol(math, main, mathord, "\u03BD", "\\nu", true);
    defineSymbol(math, main, mathord, "\u03BE", "\\xi", true);
    defineSymbol(math, main, mathord, "\u03BF", "\\omicron", true);
    defineSymbol(math, main, mathord, "\u03C0", "\\pi", true);
    defineSymbol(math, main, mathord, "\u03C1", "\\rho", true);
    defineSymbol(math, main, mathord, "\u03C3", "\\sigma", true);
    defineSymbol(math, main, mathord, "\u03C4", "\\tau", true);
    defineSymbol(math, main, mathord, "\u03C5", "\\upsilon", true);
    defineSymbol(math, main, mathord, "\u03D5", "\\phi", true);
    defineSymbol(math, main, mathord, "\u03C7", "\\chi", true);
    defineSymbol(math, main, mathord, "\u03C8", "\\psi", true);
    defineSymbol(math, main, mathord, "\u03C9", "\\omega", true);
    defineSymbol(math, main, mathord, "\u03B5", "\\varepsilon", true);
    defineSymbol(math, main, mathord, "\u03D1", "\\vartheta", true);
    defineSymbol(math, main, mathord, "\u03D6", "\\varpi", true);
    defineSymbol(math, main, mathord, "\u03F1", "\\varrho", true);
    defineSymbol(math, main, mathord, "\u03C2", "\\varsigma", true);
    defineSymbol(math, main, mathord, "\u03C6", "\\varphi", true);
    defineSymbol(math, main, bin, "\u2217", "*", true);
    defineSymbol(math, main, bin, "+", "+");
    defineSymbol(math, main, bin, "\u2212", "-", true);
    defineSymbol(math, main, bin, "\u22C5", "\\cdot", true);
    defineSymbol(math, main, bin, "\u2218", "\\circ", true);
    defineSymbol(math, main, bin, "\xF7", "\\div", true);
    defineSymbol(math, main, bin, "\xB1", "\\pm", true);
    defineSymbol(math, main, bin, "\xD7", "\\times", true);
    defineSymbol(math, main, bin, "\u2229", "\\cap", true);
    defineSymbol(math, main, bin, "\u222A", "\\cup", true);
    defineSymbol(math, main, bin, "\u2216", "\\setminus", true);
    defineSymbol(math, main, bin, "\u2227", "\\land");
    defineSymbol(math, main, bin, "\u2228", "\\lor");
    defineSymbol(math, main, bin, "\u2227", "\\wedge", true);
    defineSymbol(math, main, bin, "\u2228", "\\vee", true);
    defineSymbol(math, main, textord, "\u221A", "\\surd");
    defineSymbol(math, main, open, "\u27E8", "\\langle", true);
    defineSymbol(math, main, open, "\u2223", "\\lvert");
    defineSymbol(math, main, open, "\u2225", "\\lVert");
    defineSymbol(math, main, close, "?", "?");
    defineSymbol(math, main, close, "!", "!");
    defineSymbol(math, main, close, "\u27E9", "\\rangle", true);
    defineSymbol(math, main, close, "\u2223", "\\rvert");
    defineSymbol(math, main, close, "\u2225", "\\rVert");
    defineSymbol(math, main, rel, "=", "=");
    defineSymbol(math, main, rel, ":", ":");
    defineSymbol(math, main, rel, "\u2248", "\\approx", true);
    defineSymbol(math, main, rel, "\u2245", "\\cong", true);
    defineSymbol(math, main, rel, "\u2265", "\\ge");
    defineSymbol(math, main, rel, "\u2265", "\\geq", true);
    defineSymbol(math, main, rel, "\u2190", "\\gets");
    defineSymbol(math, main, rel, ">", "\\gt", true);
    defineSymbol(math, main, rel, "\u2208", "\\in", true);
    defineSymbol(math, main, rel, "\uE020", "\\@not");
    defineSymbol(math, main, rel, "\u2282", "\\subset", true);
    defineSymbol(math, main, rel, "\u2283", "\\supset", true);
    defineSymbol(math, main, rel, "\u2286", "\\subseteq", true);
    defineSymbol(math, main, rel, "\u2287", "\\supseteq", true);
    defineSymbol(math, ams, rel, "\u2288", "\\nsubseteq", true);
    defineSymbol(math, ams, rel, "\u2289", "\\nsupseteq", true);
    defineSymbol(math, main, rel, "\u22A8", "\\models");
    defineSymbol(math, main, rel, "\u2190", "\\leftarrow", true);
    defineSymbol(math, main, rel, "\u2264", "\\le");
    defineSymbol(math, main, rel, "\u2264", "\\leq", true);
    defineSymbol(math, main, rel, "<", "\\lt", true);
    defineSymbol(math, main, rel, "\u2192", "\\rightarrow", true);
    defineSymbol(math, main, rel, "\u2192", "\\to");
    defineSymbol(math, ams, rel, "\u2271", "\\ngeq", true);
    defineSymbol(math, ams, rel, "\u2270", "\\nleq", true);
    defineSymbol(math, main, spacing, "\xA0", "\\ ");
    defineSymbol(math, main, spacing, "\xA0", "\\space");
    defineSymbol(math, main, spacing, "\xA0", "\\nobreakspace");
    defineSymbol(text, main, spacing, "\xA0", "\\ ");
    defineSymbol(text, main, spacing, "\xA0", " ");
    defineSymbol(text, main, spacing, "\xA0", "\\space");
    defineSymbol(text, main, spacing, "\xA0", "\\nobreakspace");
    defineSymbol(math, main, spacing, null, "\\nobreak");
    defineSymbol(math, main, spacing, null, "\\allowbreak");
    defineSymbol(math, main, punct, ",", ",");
    defineSymbol(math, main, punct, ";", ";");
    defineSymbol(math, ams, bin, "\u22BC", "\\barwedge", true);
    defineSymbol(math, ams, bin, "\u22BB", "\\veebar", true);
    defineSymbol(math, main, bin, "\u2299", "\\odot", true);
    defineSymbol(math, main, bin, "\u2295", "\\oplus", true);
    defineSymbol(math, main, bin, "\u2297", "\\otimes", true);
    defineSymbol(math, main, textord, "\u2202", "\\partial", true);
    defineSymbol(math, main, bin, "\u2298", "\\oslash", true);
    defineSymbol(math, ams, bin, "\u229A", "\\circledcirc", true);
    defineSymbol(math, ams, bin, "\u22A1", "\\boxdot", true);
    defineSymbol(math, main, bin, "\u25B3", "\\bigtriangleup");
    defineSymbol(math, main, bin, "\u25BD", "\\bigtriangledown");
    defineSymbol(math, main, bin, "\u2020", "\\dagger");
    defineSymbol(math, main, bin, "\u22C4", "\\diamond");
    defineSymbol(math, main, bin, "\u22C6", "\\star");
    defineSymbol(math, main, bin, "\u25C3", "\\triangleleft");
    defineSymbol(math, main, bin, "\u25B9", "\\triangleright");
    defineSymbol(math, main, open, "{", "\\{");
    defineSymbol(text, main, textord, "{", "\\{");
    defineSymbol(text, main, textord, "{", "\\textbraceleft");
    defineSymbol(math, main, close, "}", "\\}");
    defineSymbol(text, main, textord, "}", "\\}");
    defineSymbol(text, main, textord, "}", "\\textbraceright");
    defineSymbol(math, main, open, "{", "\\lbrace");
    defineSymbol(math, main, close, "}", "\\rbrace");
    defineSymbol(math, main, open, "[", "\\lbrack", true);
    defineSymbol(text, main, textord, "[", "\\lbrack", true);
    defineSymbol(math, main, close, "]", "\\rbrack", true);
    defineSymbol(text, main, textord, "]", "\\rbrack", true);
    defineSymbol(math, main, open, "(", "\\lparen", true);
    defineSymbol(math, main, close, ")", "\\rparen", true);
    defineSymbol(text, main, textord, "<", "\\textless", true);
    defineSymbol(text, main, textord, ">", "\\textgreater", true);
    defineSymbol(math, main, open, "\u230A", "\\lfloor", true);
    defineSymbol(math, main, close, "\u230B", "\\rfloor", true);
    defineSymbol(math, main, open, "\u2308", "\\lceil", true);
    defineSymbol(math, main, close, "\u2309", "\\rceil", true);
    defineSymbol(math, main, textord, "\\", "\\backslash");
    defineSymbol(math, main, textord, "\u2223", "|");
    defineSymbol(math, main, textord, "\u2223", "\\vert");
    defineSymbol(text, main, textord, "|", "\\textbar", true);
    defineSymbol(math, main, textord, "\u2225", "\\|");
    defineSymbol(math, main, textord, "\u2225", "\\Vert");
    defineSymbol(text, main, textord, "\u2225", "\\textbardbl");
    defineSymbol(text, main, textord, "~", "\\textasciitilde");
    defineSymbol(text, main, textord, "\\", "\\textbackslash");
    defineSymbol(text, main, textord, "^", "\\textasciicircum");
    defineSymbol(math, main, rel, "\u2191", "\\uparrow", true);
    defineSymbol(math, main, rel, "\u21D1", "\\Uparrow", true);
    defineSymbol(math, main, rel, "\u2193", "\\downarrow", true);
    defineSymbol(math, main, rel, "\u21D3", "\\Downarrow", true);
    defineSymbol(math, main, rel, "\u2195", "\\updownarrow", true);
    defineSymbol(math, main, rel, "\u21D5", "\\Updownarrow", true);
    defineSymbol(math, main, op, "\u2210", "\\coprod");
    defineSymbol(math, main, op, "\u22C1", "\\bigvee");
    defineSymbol(math, main, op, "\u22C0", "\\bigwedge");
    defineSymbol(math, main, op, "\u2A04", "\\biguplus");
    defineSymbol(math, main, op, "\u22C2", "\\bigcap");
    defineSymbol(math, main, op, "\u22C3", "\\bigcup");
    defineSymbol(math, main, op, "\u222B", "\\int");
    defineSymbol(math, main, op, "\u222B", "\\intop");
    defineSymbol(math, main, op, "\u222C", "\\iint");
    defineSymbol(math, main, op, "\u222D", "\\iiint");
    defineSymbol(math, main, op, "\u220F", "\\prod");
    defineSymbol(math, main, op, "\u2211", "\\sum");
    defineSymbol(math, main, op, "\u2A02", "\\bigotimes");
    defineSymbol(math, main, op, "\u2A01", "\\bigoplus");
    defineSymbol(math, main, op, "\u2A00", "\\bigodot");
    defineSymbol(math, main, op, "\u222E", "\\oint");
    defineSymbol(math, main, op, "\u222F", "\\oiint");
    defineSymbol(math, main, op, "\u2230", "\\oiiint");
    defineSymbol(math, main, op, "\u2A06", "\\bigsqcup");
    defineSymbol(math, main, op, "\u222B", "\\smallint");
    defineSymbol(text, main, inner, "\u2026", "\\textellipsis");
    defineSymbol(math, main, inner, "\u2026", "\\mathellipsis");
    defineSymbol(text, main, inner, "\u2026", "\\ldots", true);
    defineSymbol(math, main, inner, "\u2026", "\\ldots", true);
    defineSymbol(math, main, inner, "\u22EF", "\\@cdots", true);
    defineSymbol(math, main, inner, "\u22F1", "\\ddots", true);
    defineSymbol(math, main, textord, "\u22EE", "\\varvdots");
    defineSymbol(math, main, accent, "\u02CA", "\\acute");
    defineSymbol(math, main, accent, "\u02CB", "\\grave");
    defineSymbol(math, main, accent, "\xA8", "\\ddot");
    defineSymbol(math, main, accent, "~", "\\tilde");
    defineSymbol(math, main, accent, "\u02C9", "\\bar");
    defineSymbol(math, main, accent, "\u02D8", "\\breve");
    defineSymbol(math, main, accent, "\u02C7", "\\check");
    defineSymbol(math, main, accent, "^", "\\hat");
    defineSymbol(math, main, accent, "\u20D7", "\\vec");
    defineSymbol(math, main, accent, "\u02D9", "\\dot");
    defineSymbol(math, main, accent, "\u02DA", "\\mathring");
    defineSymbol(math, main, mathord, "\uE131", "\\@imath");
    defineSymbol(math, main, mathord, "\uE237", "\\@jmath");
    defineSymbol(math, main, textord, "\u0131", "\u0131");
    defineSymbol(math, main, textord, "\u0237", "\u0237");
    defineSymbol(text, main, textord, "\u0131", "\\i", true);
    defineSymbol(text, main, textord, "\u0237", "\\j", true);
    defineSymbol(text, main, textord, "\xDF", "\\ss", true);
    defineSymbol(text, main, textord, "\xE6", "\\ae", true);
    defineSymbol(text, main, textord, "\u0153", "\\oe", true);
    defineSymbol(text, main, textord, "\xF8", "\\o", true);
    defineSymbol(text, main, textord, "\xC6", "\\AE", true);
    defineSymbol(text, main, textord, "\u0152", "\\OE", true);
    defineSymbol(text, main, textord, "\xD8", "\\O", true);
    defineSymbol(text, main, accent, "\u02CA", "\\'");
    defineSymbol(text, main, accent, "\u02CB", "\\`");
    defineSymbol(text, main, accent, "\u02C6", "\\^");
    defineSymbol(text, main, accent, "\u02DC", "\\~");
    defineSymbol(text, main, accent, "\u02C9", "\\=");
    defineSymbol(text, main, accent, "\u02D8", "\\u");
    defineSymbol(text, main, accent, "\u02D9", "\\.");
    defineSymbol(text, main, accent, "\xB8", "\\c");
    defineSymbol(text, main, accent, "\u02DA", "\\r");
    defineSymbol(text, main, accent, "\u02C7", "\\v");
    defineSymbol(text, main, accent, "\xA8", '\\"');
    defineSymbol(text, main, accent, "\u02DD", "\\H");
    defineSymbol(text, main, accent, "\u25EF", "\\textcircled");
    ligatures = {
      "--": true,
      "---": true,
      "``": true,
      "''": true
    };
    defineSymbol(text, main, textord, "\u2013", "--", true);
    defineSymbol(text, main, textord, "\u2013", "\\textendash");
    defineSymbol(text, main, textord, "\u2014", "---", true);
    defineSymbol(text, main, textord, "\u2014", "\\textemdash");
    defineSymbol(text, main, textord, "\u2018", "`", true);
    defineSymbol(text, main, textord, "\u2018", "\\textquoteleft");
    defineSymbol(text, main, textord, "\u2019", "'", true);
    defineSymbol(text, main, textord, "\u2019", "\\textquoteright");
    defineSymbol(text, main, textord, "\u201C", "``", true);
    defineSymbol(text, main, textord, "\u201C", "\\textquotedblleft");
    defineSymbol(text, main, textord, "\u201D", "''", true);
    defineSymbol(text, main, textord, "\u201D", "\\textquotedblright");
    defineSymbol(math, main, textord, "\xB0", "\\degree", true);
    defineSymbol(text, main, textord, "\xB0", "\\degree");
    defineSymbol(text, main, textord, "\xB0", "\\textdegree", true);
    defineSymbol(math, main, textord, "\xA3", "\\pounds");
    defineSymbol(math, main, textord, "\xA3", "\\mathsterling", true);
    defineSymbol(text, main, textord, "\xA3", "\\pounds");
    defineSymbol(text, main, textord, "\xA3", "\\textsterling", true);
    defineSymbol(math, ams, textord, "\u2720", "\\maltese");
    defineSymbol(text, ams, textord, "\u2720", "\\maltese");
    mathTextSymbols = '0123456789/@."';
    for (i = 0; i < mathTextSymbols.length; i++) {
      ch = mathTextSymbols.charAt(i);
      defineSymbol(math, main, textord, ch, ch);
    }
    textSymbols = '0123456789!@*()-=+";:?/.,';
    for (_i = 0; _i < textSymbols.length; _i++) {
      _ch = textSymbols.charAt(_i);
      defineSymbol(text, main, textord, _ch, _ch);
    }
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (_i2 = 0; _i2 < letters.length; _i2++) {
      _ch2 = letters.charAt(_i2);
      defineSymbol(math, main, mathord, _ch2, _ch2);
      defineSymbol(text, main, textord, _ch2, _ch2);
    }
    defineSymbol(math, ams, textord, "C", "\u2102");
    defineSymbol(text, ams, textord, "C", "\u2102");
    defineSymbol(math, ams, textord, "H", "\u210D");
    defineSymbol(text, ams, textord, "H", "\u210D");
    defineSymbol(math, ams, textord, "N", "\u2115");
    defineSymbol(text, ams, textord, "N", "\u2115");
    defineSymbol(math, ams, textord, "P", "\u2119");
    defineSymbol(text, ams, textord, "P", "\u2119");
    defineSymbol(math, ams, textord, "Q", "\u211A");
    defineSymbol(text, ams, textord, "Q", "\u211A");
    defineSymbol(math, ams, textord, "R", "\u211D");
    defineSymbol(text, ams, textord, "R", "\u211D");
    defineSymbol(math, ams, textord, "Z", "\u2124");
    defineSymbol(text, ams, textord, "Z", "\u2124");
    defineSymbol(math, main, mathord, "h", "\u210E");
    defineSymbol(text, main, mathord, "h", "\u210E");
    wideChar = "";
    for (_i3 = 0; _i3 < letters.length; _i3++) {
      _ch3 = letters.charAt(_i3);
      wideChar = String.fromCharCode(55349, 56320 + _i3);
      defineSymbol(math, main, mathord, _ch3, wideChar);
      defineSymbol(text, main, textord, _ch3, wideChar);
      wideChar = String.fromCharCode(55349, 56372 + _i3);
      defineSymbol(math, main, mathord, _ch3, wideChar);
      defineSymbol(text, main, textord, _ch3, wideChar);
      wideChar = String.fromCharCode(55349, 56424 + _i3);
      defineSymbol(math, main, mathord, _ch3, wideChar);
      defineSymbol(text, main, textord, _ch3, wideChar);
      wideChar = String.fromCharCode(55349, 56580 + _i3);
      defineSymbol(math, main, mathord, _ch3, wideChar);
      defineSymbol(text, main, textord, _ch3, wideChar);
      wideChar = String.fromCharCode(55349, 56736 + _i3);
      defineSymbol(math, main, mathord, _ch3, wideChar);
      defineSymbol(text, main, textord, _ch3, wideChar);
      wideChar = String.fromCharCode(55349, 56788 + _i3);
      defineSymbol(math, main, mathord, _ch3, wideChar);
      defineSymbol(text, main, textord, _ch3, wideChar);
      wideChar = String.fromCharCode(55349, 56840 + _i3);
      defineSymbol(math, main, mathord, _ch3, wideChar);
      defineSymbol(text, main, textord, _ch3, wideChar);
      wideChar = String.fromCharCode(55349, 56944 + _i3);
      defineSymbol(math, main, mathord, _ch3, wideChar);
      defineSymbol(text, main, textord, _ch3, wideChar);
      if (_i3 < 26) {
        wideChar = String.fromCharCode(55349, 56632 + _i3);
        defineSymbol(math, main, mathord, _ch3, wideChar);
        defineSymbol(text, main, textord, _ch3, wideChar);
        wideChar = String.fromCharCode(55349, 56476 + _i3);
        defineSymbol(math, main, mathord, _ch3, wideChar);
        defineSymbol(text, main, textord, _ch3, wideChar);
      }
    }
    wideChar = String.fromCharCode(55349, 56668);
    defineSymbol(math, main, mathord, "k", wideChar);
    defineSymbol(text, main, textord, "k", wideChar);
    for (_i4 = 0; _i4 < 10; _i4++) {
      _ch4 = _i4.toString();
      wideChar = String.fromCharCode(55349, 57294 + _i4);
      defineSymbol(math, main, mathord, _ch4, wideChar);
      defineSymbol(text, main, textord, _ch4, wideChar);
      wideChar = String.fromCharCode(55349, 57314 + _i4);
      defineSymbol(math, main, mathord, _ch4, wideChar);
      defineSymbol(text, main, textord, _ch4, wideChar);
      wideChar = String.fromCharCode(55349, 57324 + _i4);
      defineSymbol(math, main, mathord, _ch4, wideChar);
      defineSymbol(text, main, textord, _ch4, wideChar);
      wideChar = String.fromCharCode(55349, 57334 + _i4);
      defineSymbol(math, main, mathord, _ch4, wideChar);
      defineSymbol(text, main, textord, _ch4, wideChar);
    }
    extraLatin = "\xD0\xDE\xFE";
    for (_i5 = 0; _i5 < extraLatin.length; _i5++) {
      _ch5 = extraLatin.charAt(_i5);
      defineSymbol(math, main, mathord, _ch5, _ch5);
      defineSymbol(text, main, textord, _ch5, _ch5);
    }
    wideLatinLetterData = [
      ["mathbf", "textbf", "Main-Bold"],
      ["mathbf", "textbf", "Main-Bold"],
      ["mathnormal", "textit", "Math-Italic"],
      ["mathnormal", "textit", "Math-Italic"],
      ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
      ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
      ["mathscr", "textscr", "Script-Regular"],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["mathfrak", "textfrak", "Fraktur-Regular"],
      ["mathfrak", "textfrak", "Fraktur-Regular"],
      ["mathbb", "textbb", "AMS-Regular"],
      ["mathbb", "textbb", "AMS-Regular"],
      ["", "", ""],
      ["", "", ""],
      ["mathsf", "textsf", "SansSerif-Regular"],
      ["mathsf", "textsf", "SansSerif-Regular"],
      ["mathboldsf", "textboldsf", "SansSerif-Bold"],
      ["mathboldsf", "textboldsf", "SansSerif-Bold"],
      ["mathitsf", "textitsf", "SansSerif-Italic"],
      ["mathitsf", "textitsf", "SansSerif-Italic"],
      ["", "", ""],
      ["", "", ""],
      ["mathtt", "texttt", "Typewriter-Regular"],
      ["mathtt", "texttt", "Typewriter-Regular"]
    ];
    wideNumeralData = [
      ["mathbf", "textbf", "Main-Bold"],
      ["", "", ""],
      ["mathsf", "textsf", "SansSerif-Regular"],
      ["mathboldsf", "textboldsf", "SansSerif-Bold"],
      ["mathtt", "texttt", "Typewriter-Regular"]
    ];
    wideCharacterFont = function wideCharacterFont2(wideChar2, mode) {
      var H2 = wideChar2.charCodeAt(0);
      var L2 = wideChar2.charCodeAt(1);
      var codePoint = (H2 - 55296) * 1024 + (L2 - 56320) + 65536;
      var j2 = mode === "math" ? 0 : 1;
      if (119808 <= codePoint && codePoint < 120484) {
        var i = Math.floor((codePoint - 119808) / 26);
        return [wideLatinLetterData[i][2], wideLatinLetterData[i][j2]];
      } else if (120782 <= codePoint && codePoint <= 120831) {
        var _i = Math.floor((codePoint - 120782) / 10);
        return [wideNumeralData[_i][2], wideNumeralData[_i][j2]];
      } else if (codePoint === 120485 || codePoint === 120486) {
        return [wideLatinLetterData[0][2], wideLatinLetterData[0][j2]];
      } else if (120486 < codePoint && codePoint < 120782) {
        return ["", ""];
      } else {
        throw new ParseError("Unsupported character: " + wideChar2);
      }
    };
    lookupSymbol = function lookupSymbol2(value, fontName, mode) {
      if (symbols[mode][value] && symbols[mode][value].replace) {
        value = symbols[mode][value].replace;
      }
      return {
        value,
        metrics: getCharacterMetrics(value, fontName, mode)
      };
    };
    makeSymbol = function makeSymbol2(value, fontName, mode, options, classes) {
      var lookup = lookupSymbol(value, fontName, mode);
      var metrics = lookup.metrics;
      value = lookup.value;
      var symbolNode;
      if (metrics) {
        var italic = metrics.italic;
        if (mode === "text" || options && options.font === "mathit") {
          italic = 0;
        }
        symbolNode = new SymbolNode(value, metrics.height, metrics.depth, italic, metrics.skew, metrics.width, classes);
      } else {
        typeof console !== "undefined" && console.warn("No character metrics " + ("for '" + value + "' in style '" + fontName + "' and mode '" + mode + "'"));
        symbolNode = new SymbolNode(value, 0, 0, 0, 0, 0, classes);
      }
      if (options) {
        symbolNode.maxFontSize = options.sizeMultiplier;
        if (options.style.isTight()) {
          symbolNode.classes.push("mtight");
        }
        var color = options.getColor();
        if (color) {
          symbolNode.style.color = color;
        }
      }
      return symbolNode;
    };
    mathsym = function mathsym2(value, mode, options, classes) {
      if (classes === void 0) {
        classes = [];
      }
      if (options.font === "boldsymbol" && lookupSymbol(value, "Main-Bold", mode).metrics) {
        return makeSymbol(value, "Main-Bold", mode, options, classes.concat(["mathbf"]));
      } else if (value === "\\" || symbols[mode][value].font === "main") {
        return makeSymbol(value, "Main-Regular", mode, options, classes);
      } else {
        return makeSymbol(value, "AMS-Regular", mode, options, classes.concat(["amsrm"]));
      }
    };
    boldsymbol = function boldsymbol2(value, mode, options, classes, type) {
      if (type !== "textord" && lookupSymbol(value, "Math-BoldItalic", mode).metrics) {
        return {
          fontName: "Math-BoldItalic",
          fontClass: "boldsymbol"
        };
      } else {
        return {
          fontName: "Main-Bold",
          fontClass: "mathbf"
        };
      }
    };
    makeOrd = function makeOrd2(group, options, type) {
      var mode = group.mode;
      var text2 = group.text;
      var classes = ["mord"];
      var isFont = mode === "math" || mode === "text" && options.font;
      var fontOrFamily = isFont ? options.font : options.fontFamily;
      if (text2.charCodeAt(0) === 55349) {
        var [wideFontName, wideFontClass] = wideCharacterFont(text2, mode);
        return makeSymbol(text2, wideFontName, mode, options, classes.concat(wideFontClass));
      } else if (fontOrFamily) {
        var fontName;
        var fontClasses;
        if (fontOrFamily === "boldsymbol") {
          var fontData = boldsymbol(text2, mode, options, classes, type);
          fontName = fontData.fontName;
          fontClasses = [fontData.fontClass];
        } else if (isFont) {
          fontName = fontMap[fontOrFamily].fontName;
          fontClasses = [fontOrFamily];
        } else {
          fontName = retrieveTextFontName(fontOrFamily, options.fontWeight, options.fontShape);
          fontClasses = [fontOrFamily, options.fontWeight, options.fontShape];
        }
        if (lookupSymbol(text2, fontName, mode).metrics) {
          return makeSymbol(text2, fontName, mode, options, classes.concat(fontClasses));
        } else if (ligatures.hasOwnProperty(text2) && fontName.slice(0, 10) === "Typewriter") {
          var parts = [];
          for (var i = 0; i < text2.length; i++) {
            parts.push(makeSymbol(text2[i], fontName, mode, options, classes.concat(fontClasses)));
          }
          return makeFragment(parts);
        }
      }
      if (type === "mathord") {
        return makeSymbol(text2, "Math-Italic", mode, options, classes.concat(["mathnormal"]));
      } else if (type === "textord") {
        var font = symbols[mode][text2] && symbols[mode][text2].font;
        if (font === "ams") {
          var _fontName = retrieveTextFontName("amsrm", options.fontWeight, options.fontShape);
          return makeSymbol(text2, _fontName, mode, options, classes.concat("amsrm", options.fontWeight, options.fontShape));
        } else if (font === "main" || !font) {
          var _fontName2 = retrieveTextFontName("textrm", options.fontWeight, options.fontShape);
          return makeSymbol(text2, _fontName2, mode, options, classes.concat(options.fontWeight, options.fontShape));
        } else {
          var _fontName3 = retrieveTextFontName(font, options.fontWeight, options.fontShape);
          return makeSymbol(text2, _fontName3, mode, options, classes.concat(_fontName3, options.fontWeight, options.fontShape));
        }
      } else {
        throw new Error("unexpected type: " + type + " in makeOrd");
      }
    };
    canCombine = (prev, next) => {
      if (createClass(prev.classes) !== createClass(next.classes) || prev.skew !== next.skew || prev.maxFontSize !== next.maxFontSize) {
        return false;
      }
      if (prev.classes.length === 1) {
        var cls = prev.classes[0];
        if (cls === "mbin" || cls === "mord") {
          return false;
        }
      }
      for (var style in prev.style) {
        if (prev.style.hasOwnProperty(style) && prev.style[style] !== next.style[style]) {
          return false;
        }
      }
      for (var _style in next.style) {
        if (next.style.hasOwnProperty(_style) && prev.style[_style] !== next.style[_style]) {
          return false;
        }
      }
      return true;
    };
    tryCombineChars = (chars3) => {
      for (var i = 0; i < chars3.length - 1; i++) {
        var prev = chars3[i];
        var next = chars3[i + 1];
        if (prev instanceof SymbolNode && next instanceof SymbolNode && canCombine(prev, next)) {
          prev.text += next.text;
          prev.height = Math.max(prev.height, next.height);
          prev.depth = Math.max(prev.depth, next.depth);
          prev.italic = next.italic;
          chars3.splice(i + 1, 1);
          i--;
        }
      }
      return chars3;
    };
    sizeElementFromChildren = function sizeElementFromChildren2(elem) {
      var height = 0;
      var depth = 0;
      var maxFontSize = 0;
      for (var i = 0; i < elem.children.length; i++) {
        var child = elem.children[i];
        if (child.height > height) {
          height = child.height;
        }
        if (child.depth > depth) {
          depth = child.depth;
        }
        if (child.maxFontSize > maxFontSize) {
          maxFontSize = child.maxFontSize;
        }
      }
      elem.height = height;
      elem.depth = depth;
      elem.maxFontSize = maxFontSize;
    };
    makeSpan$2 = function makeSpan(classes, children, options, style) {
      var span = new Span(classes, children, options, style);
      sizeElementFromChildren(span);
      return span;
    };
    makeSvgSpan = (classes, children, options, style) => new Span(classes, children, options, style);
    makeLineSpan = function makeLineSpan2(className, options, thickness) {
      var line = makeSpan$2([className], [], options);
      line.height = Math.max(thickness || options.fontMetrics().defaultRuleThickness, options.minRuleThickness);
      line.style.borderBottomWidth = makeEm(line.height);
      line.maxFontSize = 1;
      return line;
    };
    makeAnchor = function makeAnchor2(href, classes, children, options) {
      var anchor = new Anchor(href, classes, children, options);
      sizeElementFromChildren(anchor);
      return anchor;
    };
    makeFragment = function makeFragment2(children) {
      var fragment = new DocumentFragment(children);
      sizeElementFromChildren(fragment);
      return fragment;
    };
    wrapFragment = function wrapFragment2(group, options) {
      if (group instanceof DocumentFragment) {
        return makeSpan$2([], [group], options);
      }
      return group;
    };
    getVListChildrenAndDepth = function getVListChildrenAndDepth2(params) {
      if (params.positionType === "individualShift") {
        var oldChildren = params.children;
        var children = [oldChildren[0]];
        var _depth = -oldChildren[0].shift - oldChildren[0].elem.depth;
        var currPos = _depth;
        for (var i = 1; i < oldChildren.length; i++) {
          var diff = -oldChildren[i].shift - currPos - oldChildren[i].elem.depth;
          var size = diff - (oldChildren[i - 1].elem.height + oldChildren[i - 1].elem.depth);
          currPos = currPos + diff;
          children.push({
            type: "kern",
            size
          });
          children.push(oldChildren[i]);
        }
        return {
          children,
          depth: _depth
        };
      }
      var depth;
      if (params.positionType === "top") {
        var bottom = params.positionData;
        for (var _i = 0; _i < params.children.length; _i++) {
          var child = params.children[_i];
          bottom -= child.type === "kern" ? child.size : child.elem.height + child.elem.depth;
        }
        depth = bottom;
      } else if (params.positionType === "bottom") {
        depth = -params.positionData;
      } else {
        var firstChild = params.children[0];
        if (firstChild.type !== "elem") {
          throw new Error('First child must have type "elem".');
        }
        if (params.positionType === "shift") {
          depth = -firstChild.elem.depth - params.positionData;
        } else if (params.positionType === "firstBaseline") {
          depth = -firstChild.elem.depth;
        } else {
          throw new Error("Invalid positionType " + params.positionType + ".");
        }
      }
      return {
        children: params.children,
        depth
      };
    };
    makeVList = function makeVList2(params, options) {
      var {
        children,
        depth
      } = getVListChildrenAndDepth(params);
      var pstrutSize = 0;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.type === "elem") {
          var elem = child.elem;
          pstrutSize = Math.max(pstrutSize, elem.maxFontSize, elem.height);
        }
      }
      pstrutSize += 2;
      var pstrut = makeSpan$2(["pstrut"], []);
      pstrut.style.height = makeEm(pstrutSize);
      var realChildren = [];
      var minPos = depth;
      var maxPos = depth;
      var currPos = depth;
      for (var _i2 = 0; _i2 < children.length; _i2++) {
        var _child = children[_i2];
        if (_child.type === "kern") {
          currPos += _child.size;
        } else {
          var _elem = _child.elem;
          var classes = _child.wrapperClasses || [];
          var style = _child.wrapperStyle || {};
          var childWrap = makeSpan$2(classes, [pstrut, _elem], void 0, style);
          childWrap.style.top = makeEm(-pstrutSize - currPos - _elem.depth);
          if (_child.marginLeft) {
            childWrap.style.marginLeft = _child.marginLeft;
          }
          if (_child.marginRight) {
            childWrap.style.marginRight = _child.marginRight;
          }
          realChildren.push(childWrap);
          currPos += _elem.height + _elem.depth;
        }
        minPos = Math.min(minPos, currPos);
        maxPos = Math.max(maxPos, currPos);
      }
      var vlist = makeSpan$2(["vlist"], realChildren);
      vlist.style.height = makeEm(maxPos);
      var rows;
      if (minPos < 0) {
        var emptySpan = makeSpan$2([], []);
        var depthStrut = makeSpan$2(["vlist"], [emptySpan]);
        depthStrut.style.height = makeEm(-minPos);
        var topStrut = makeSpan$2(["vlist-s"], [new SymbolNode("\u200B")]);
        rows = [makeSpan$2(["vlist-r"], [vlist, topStrut]), makeSpan$2(["vlist-r"], [depthStrut])];
      } else {
        rows = [makeSpan$2(["vlist-r"], [vlist])];
      }
      var vtable = makeSpan$2(["vlist-t"], rows);
      if (rows.length === 2) {
        vtable.classes.push("vlist-t2");
      }
      vtable.height = maxPos;
      vtable.depth = -minPos;
      return vtable;
    };
    makeGlue = (measurement, options) => {
      var rule = makeSpan$2(["mspace"], [], options);
      var size = calculateSize(measurement, options);
      rule.style.marginRight = makeEm(size);
      return rule;
    };
    retrieveTextFontName = function retrieveTextFontName2(fontFamily, fontWeight, fontShape) {
      var baseFontName = "";
      switch (fontFamily) {
        case "amsrm":
          baseFontName = "AMS";
          break;
        case "textrm":
          baseFontName = "Main";
          break;
        case "textsf":
          baseFontName = "SansSerif";
          break;
        case "texttt":
          baseFontName = "Typewriter";
          break;
        default:
          baseFontName = fontFamily;
      }
      var fontStylesName;
      if (fontWeight === "textbf" && fontShape === "textit") {
        fontStylesName = "BoldItalic";
      } else if (fontWeight === "textbf") {
        fontStylesName = "Bold";
      } else if (fontWeight === "textit") {
        fontStylesName = "Italic";
      } else {
        fontStylesName = "Regular";
      }
      return baseFontName + "-" + fontStylesName;
    };
    fontMap = {
      "mathbf": {
        variant: "bold",
        fontName: "Main-Bold"
      },
      "mathrm": {
        variant: "normal",
        fontName: "Main-Regular"
      },
      "textit": {
        variant: "italic",
        fontName: "Main-Italic"
      },
      "mathit": {
        variant: "italic",
        fontName: "Main-Italic"
      },
      "mathnormal": {
        variant: "italic",
        fontName: "Math-Italic"
      },
      "mathbb": {
        variant: "double-struck",
        fontName: "AMS-Regular"
      },
      "mathcal": {
        variant: "script",
        fontName: "Caligraphic-Regular"
      },
      "mathfrak": {
        variant: "fraktur",
        fontName: "Fraktur-Regular"
      },
      "mathscr": {
        variant: "script",
        fontName: "Script-Regular"
      },
      "mathsf": {
        variant: "sans-serif",
        fontName: "SansSerif-Regular"
      },
      "mathtt": {
        variant: "monospace",
        fontName: "Typewriter-Regular"
      }
    };
    svgData = {
      vec: ["vec", 0.471, 0.714],
      oiintSize1: ["oiintSize1", 0.957, 0.499],
      oiintSize2: ["oiintSize2", 1.472, 0.659],
      oiiintSize1: ["oiiintSize1", 1.304, 0.499],
      oiiintSize2: ["oiiintSize2", 1.98, 0.659]
    };
    staticSvg = function staticSvg2(value, options) {
      var [pathName, width, height] = svgData[value];
      var path2 = new PathNode(pathName);
      var svgNode = new SvgNode([path2], {
        "width": makeEm(width),
        "height": makeEm(height),
        "style": "width:" + makeEm(width),
        "viewBox": "0 0 " + 1e3 * width + " " + 1e3 * height,
        "preserveAspectRatio": "xMinYMin"
      });
      var span = makeSvgSpan(["overlay"], [svgNode], options);
      span.height = height;
      span.style.height = makeEm(height);
      span.style.width = makeEm(width);
      return span;
    };
    buildCommon = {
      fontMap,
      makeSymbol,
      mathsym,
      makeSpan: makeSpan$2,
      makeSvgSpan,
      makeLineSpan,
      makeAnchor,
      makeFragment,
      wrapFragment,
      makeVList,
      makeOrd,
      makeGlue,
      staticSvg,
      svgData,
      tryCombineChars
    };
    thinspace = {
      number: 3,
      unit: "mu"
    };
    mediumspace = {
      number: 4,
      unit: "mu"
    };
    thickspace = {
      number: 5,
      unit: "mu"
    };
    spacings = {
      mord: {
        mop: thinspace,
        mbin: mediumspace,
        mrel: thickspace,
        minner: thinspace
      },
      mop: {
        mord: thinspace,
        mop: thinspace,
        mrel: thickspace,
        minner: thinspace
      },
      mbin: {
        mord: mediumspace,
        mop: mediumspace,
        mopen: mediumspace,
        minner: mediumspace
      },
      mrel: {
        mord: thickspace,
        mop: thickspace,
        mopen: thickspace,
        minner: thickspace
      },
      mopen: {},
      mclose: {
        mop: thinspace,
        mbin: mediumspace,
        mrel: thickspace,
        minner: thinspace
      },
      mpunct: {
        mord: thinspace,
        mop: thinspace,
        mrel: thickspace,
        mopen: thinspace,
        mclose: thinspace,
        mpunct: thinspace,
        minner: thinspace
      },
      minner: {
        mord: thinspace,
        mop: thinspace,
        mbin: mediumspace,
        mrel: thickspace,
        mopen: thinspace,
        mpunct: thinspace,
        minner: thinspace
      }
    };
    tightSpacings = {
      mord: {
        mop: thinspace
      },
      mop: {
        mord: thinspace,
        mop: thinspace
      },
      mbin: {},
      mrel: {},
      mopen: {},
      mclose: {
        mop: thinspace
      },
      mpunct: {},
      minner: {
        mop: thinspace
      }
    };
    _functions = {};
    _htmlGroupBuilders = {};
    _mathmlGroupBuilders = {};
    normalizeArgument = function normalizeArgument2(arg) {
      return arg.type === "ordgroup" && arg.body.length === 1 ? arg.body[0] : arg;
    };
    ordargument = function ordargument2(arg) {
      return arg.type === "ordgroup" ? arg.body : [arg];
    };
    makeSpan$1 = buildCommon.makeSpan;
    binLeftCanceller = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"];
    binRightCanceller = ["rightmost", "mrel", "mclose", "mpunct"];
    styleMap$1 = {
      "display": Style$1.DISPLAY,
      "text": Style$1.TEXT,
      "script": Style$1.SCRIPT,
      "scriptscript": Style$1.SCRIPTSCRIPT
    };
    DomEnum = {
      mord: "mord",
      mop: "mop",
      mbin: "mbin",
      mrel: "mrel",
      mopen: "mopen",
      mclose: "mclose",
      mpunct: "mpunct",
      minner: "minner"
    };
    buildExpression$1 = function buildExpression(expression, options, isRealGroup, surrounding) {
      if (surrounding === void 0) {
        surrounding = [null, null];
      }
      var groups = [];
      for (var i = 0; i < expression.length; i++) {
        var output = buildGroup$1(expression[i], options);
        if (output instanceof DocumentFragment) {
          var children = output.children;
          groups.push(...children);
        } else {
          groups.push(output);
        }
      }
      buildCommon.tryCombineChars(groups);
      if (!isRealGroup) {
        return groups;
      }
      var glueOptions = options;
      if (expression.length === 1) {
        var node = expression[0];
        if (node.type === "sizing") {
          glueOptions = options.havingSize(node.size);
        } else if (node.type === "styling") {
          glueOptions = options.havingStyle(styleMap$1[node.style]);
        }
      }
      var dummyPrev = makeSpan$1([surrounding[0] || "leftmost"], [], options);
      var dummyNext = makeSpan$1([surrounding[1] || "rightmost"], [], options);
      var isRoot = isRealGroup === "root";
      traverseNonSpaceNodes(groups, (node2, prev) => {
        var prevType = prev.classes[0];
        var type = node2.classes[0];
        if (prevType === "mbin" && utils.contains(binRightCanceller, type)) {
          prev.classes[0] = "mord";
        } else if (type === "mbin" && utils.contains(binLeftCanceller, prevType)) {
          node2.classes[0] = "mord";
        }
      }, {
        node: dummyPrev
      }, dummyNext, isRoot);
      traverseNonSpaceNodes(groups, (node2, prev) => {
        var prevType = getTypeOfDomTree(prev);
        var type = getTypeOfDomTree(node2);
        var space = prevType && type ? node2.hasClass("mtight") ? tightSpacings[prevType][type] : spacings[prevType][type] : null;
        if (space) {
          return buildCommon.makeGlue(space, glueOptions);
        }
      }, {
        node: dummyPrev
      }, dummyNext, isRoot);
      return groups;
    };
    traverseNonSpaceNodes = function traverseNonSpaceNodes2(nodes, callback, prev, next, isRoot) {
      if (next) {
        nodes.push(next);
      }
      var i = 0;
      for (; i < nodes.length; i++) {
        var node = nodes[i];
        var partialGroup = checkPartialGroup(node);
        if (partialGroup) {
          traverseNonSpaceNodes2(partialGroup.children, callback, prev, null, isRoot);
          continue;
        }
        var nonspace = !node.hasClass("mspace");
        if (nonspace) {
          var result = callback(node, prev.node);
          if (result) {
            if (prev.insertAfter) {
              prev.insertAfter(result);
            } else {
              nodes.unshift(result);
              i++;
            }
          }
        }
        if (nonspace) {
          prev.node = node;
        } else if (isRoot && node.hasClass("newline")) {
          prev.node = makeSpan$1(["leftmost"]);
        }
        prev.insertAfter = ((index7) => (n2) => {
          nodes.splice(index7 + 1, 0, n2);
          i++;
        })(i);
      }
      if (next) {
        nodes.pop();
      }
    };
    checkPartialGroup = function checkPartialGroup2(node) {
      if (node instanceof DocumentFragment || node instanceof Anchor || node instanceof Span && node.hasClass("enclosing")) {
        return node;
      }
      return null;
    };
    getOutermostNode = function getOutermostNode2(node, side) {
      var partialGroup = checkPartialGroup(node);
      if (partialGroup) {
        var children = partialGroup.children;
        if (children.length) {
          if (side === "right") {
            return getOutermostNode2(children[children.length - 1], "right");
          } else if (side === "left") {
            return getOutermostNode2(children[0], "left");
          }
        }
      }
      return node;
    };
    getTypeOfDomTree = function getTypeOfDomTree2(node, side) {
      if (!node) {
        return null;
      }
      if (side) {
        node = getOutermostNode(node, side);
      }
      return DomEnum[node.classes[0]] || null;
    };
    makeNullDelimiter = function makeNullDelimiter2(options, classes) {
      var moreClasses = ["nulldelimiter"].concat(options.baseSizingClasses());
      return makeSpan$1(classes.concat(moreClasses));
    };
    buildGroup$1 = function buildGroup(group, options, baseOptions) {
      if (!group) {
        return makeSpan$1();
      }
      if (_htmlGroupBuilders[group.type]) {
        var groupNode = _htmlGroupBuilders[group.type](group, options);
        if (baseOptions && options.size !== baseOptions.size) {
          groupNode = makeSpan$1(options.sizingClasses(baseOptions), [groupNode], options);
          var multiplier = options.sizeMultiplier / baseOptions.sizeMultiplier;
          groupNode.height *= multiplier;
          groupNode.depth *= multiplier;
        }
        return groupNode;
      } else {
        throw new ParseError("Got group of unknown type: '" + group.type + "'");
      }
    };
    MathNode = class {
      constructor(type, children, classes) {
        this.type = void 0;
        this.attributes = void 0;
        this.children = void 0;
        this.classes = void 0;
        this.type = type;
        this.attributes = {};
        this.children = children || [];
        this.classes = classes || [];
      }
      setAttribute(name4, value) {
        this.attributes[name4] = value;
      }
      getAttribute(name4) {
        return this.attributes[name4];
      }
      toNode() {
        var node = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
        for (var attr in this.attributes) {
          if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
            node.setAttribute(attr, this.attributes[attr]);
          }
        }
        if (this.classes.length > 0) {
          node.className = createClass(this.classes);
        }
        for (var i = 0; i < this.children.length; i++) {
          node.appendChild(this.children[i].toNode());
        }
        return node;
      }
      toMarkup() {
        var markup = "<" + this.type;
        for (var attr in this.attributes) {
          if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
            markup += " " + attr + '="';
            markup += utils.escape(this.attributes[attr]);
            markup += '"';
          }
        }
        if (this.classes.length > 0) {
          markup += ' class ="' + utils.escape(createClass(this.classes)) + '"';
        }
        markup += ">";
        for (var i = 0; i < this.children.length; i++) {
          markup += this.children[i].toMarkup();
        }
        markup += "</" + this.type + ">";
        return markup;
      }
      toText() {
        return this.children.map((child) => child.toText()).join("");
      }
    };
    TextNode = class {
      constructor(text2) {
        this.text = void 0;
        this.text = text2;
      }
      toNode() {
        return document.createTextNode(this.text);
      }
      toMarkup() {
        return utils.escape(this.toText());
      }
      toText() {
        return this.text;
      }
    };
    SpaceNode = class {
      constructor(width) {
        this.width = void 0;
        this.character = void 0;
        this.width = width;
        if (width >= 0.05555 && width <= 0.05556) {
          this.character = "\u200A";
        } else if (width >= 0.1666 && width <= 0.1667) {
          this.character = "\u2009";
        } else if (width >= 0.2222 && width <= 0.2223) {
          this.character = "\u2005";
        } else if (width >= 0.2777 && width <= 0.2778) {
          this.character = "\u2005\u200A";
        } else if (width >= -0.05556 && width <= -0.05555) {
          this.character = "\u200A\u2063";
        } else if (width >= -0.1667 && width <= -0.1666) {
          this.character = "\u2009\u2063";
        } else if (width >= -0.2223 && width <= -0.2222) {
          this.character = "\u205F\u2063";
        } else if (width >= -0.2778 && width <= -0.2777) {
          this.character = "\u2005\u2063";
        } else {
          this.character = null;
        }
      }
      toNode() {
        if (this.character) {
          return document.createTextNode(this.character);
        } else {
          var node = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
          node.setAttribute("width", makeEm(this.width));
          return node;
        }
      }
      toMarkup() {
        if (this.character) {
          return "<mtext>" + this.character + "</mtext>";
        } else {
          return '<mspace width="' + makeEm(this.width) + '"/>';
        }
      }
      toText() {
        if (this.character) {
          return this.character;
        } else {
          return " ";
        }
      }
    };
    mathMLTree = {
      MathNode,
      TextNode,
      SpaceNode,
      newDocumentFragment
    };
    makeText = function makeText2(text2, mode, options) {
      if (symbols[mode][text2] && symbols[mode][text2].replace && text2.charCodeAt(0) !== 55349 && !(ligatures.hasOwnProperty(text2) && options && (options.fontFamily && options.fontFamily.slice(4, 6) === "tt" || options.font && options.font.slice(4, 6) === "tt"))) {
        text2 = symbols[mode][text2].replace;
      }
      return new mathMLTree.TextNode(text2);
    };
    makeRow = function makeRow2(body) {
      if (body.length === 1) {
        return body[0];
      } else {
        return new mathMLTree.MathNode("mrow", body);
      }
    };
    getVariant = function getVariant2(group, options) {
      if (options.fontFamily === "texttt") {
        return "monospace";
      } else if (options.fontFamily === "textsf") {
        if (options.fontShape === "textit" && options.fontWeight === "textbf") {
          return "sans-serif-bold-italic";
        } else if (options.fontShape === "textit") {
          return "sans-serif-italic";
        } else if (options.fontWeight === "textbf") {
          return "bold-sans-serif";
        } else {
          return "sans-serif";
        }
      } else if (options.fontShape === "textit" && options.fontWeight === "textbf") {
        return "bold-italic";
      } else if (options.fontShape === "textit") {
        return "italic";
      } else if (options.fontWeight === "textbf") {
        return "bold";
      }
      var font = options.font;
      if (!font || font === "mathnormal") {
        return null;
      }
      var mode = group.mode;
      if (font === "mathit") {
        return "italic";
      } else if (font === "boldsymbol") {
        return group.type === "textord" ? "bold" : "bold-italic";
      } else if (font === "mathbf") {
        return "bold";
      } else if (font === "mathbb") {
        return "double-struck";
      } else if (font === "mathfrak") {
        return "fraktur";
      } else if (font === "mathscr" || font === "mathcal") {
        return "script";
      } else if (font === "mathsf") {
        return "sans-serif";
      } else if (font === "mathtt") {
        return "monospace";
      }
      var text2 = group.text;
      if (utils.contains(["\\imath", "\\jmath"], text2)) {
        return null;
      }
      if (symbols[mode][text2] && symbols[mode][text2].replace) {
        text2 = symbols[mode][text2].replace;
      }
      var fontName = buildCommon.fontMap[font].fontName;
      if (getCharacterMetrics(text2, fontName, mode)) {
        return buildCommon.fontMap[font].variant;
      }
      return null;
    };
    buildExpression2 = function buildExpression3(expression, options, isOrdgroup) {
      if (expression.length === 1) {
        var group = buildGroup2(expression[0], options);
        if (isOrdgroup && group instanceof MathNode && group.type === "mo") {
          group.setAttribute("lspace", "0em");
          group.setAttribute("rspace", "0em");
        }
        return [group];
      }
      var groups = [];
      var lastGroup;
      for (var i = 0; i < expression.length; i++) {
        var _group = buildGroup2(expression[i], options);
        if (_group instanceof MathNode && lastGroup instanceof MathNode) {
          if (_group.type === "mtext" && lastGroup.type === "mtext" && _group.getAttribute("mathvariant") === lastGroup.getAttribute("mathvariant")) {
            lastGroup.children.push(..._group.children);
            continue;
          } else if (_group.type === "mn" && lastGroup.type === "mn") {
            lastGroup.children.push(..._group.children);
            continue;
          } else if (_group.type === "mi" && _group.children.length === 1 && lastGroup.type === "mn") {
            var child = _group.children[0];
            if (child instanceof TextNode && child.text === ".") {
              lastGroup.children.push(..._group.children);
              continue;
            }
          } else if (lastGroup.type === "mi" && lastGroup.children.length === 1) {
            var lastChild = lastGroup.children[0];
            if (lastChild instanceof TextNode && lastChild.text === "\u0338" && (_group.type === "mo" || _group.type === "mi" || _group.type === "mn")) {
              var _child = _group.children[0];
              if (_child instanceof TextNode && _child.text.length > 0) {
                _child.text = _child.text.slice(0, 1) + "\u0338" + _child.text.slice(1);
                groups.pop();
              }
            }
          }
        }
        groups.push(_group);
        lastGroup = _group;
      }
      return groups;
    };
    buildExpressionRow = function buildExpressionRow2(expression, options, isOrdgroup) {
      return makeRow(buildExpression2(expression, options, isOrdgroup));
    };
    buildGroup2 = function buildGroup3(group, options) {
      if (!group) {
        return new mathMLTree.MathNode("mrow");
      }
      if (_mathmlGroupBuilders[group.type]) {
        var result = _mathmlGroupBuilders[group.type](group, options);
        return result;
      } else {
        throw new ParseError("Got group of unknown type: '" + group.type + "'");
      }
    };
    optionsFromSettings = function optionsFromSettings2(settings) {
      return new Options({
        style: settings.displayMode ? Style$1.DISPLAY : Style$1.TEXT,
        maxSize: settings.maxSize,
        minRuleThickness: settings.minRuleThickness
      });
    };
    displayWrap = function displayWrap2(node, settings) {
      if (settings.displayMode) {
        var classes = ["katex-display"];
        if (settings.leqno) {
          classes.push("leqno");
        }
        if (settings.fleqn) {
          classes.push("fleqn");
        }
        node = buildCommon.makeSpan(classes, [node]);
      }
      return node;
    };
    buildTree = function buildTree2(tree, expression, settings) {
      var options = optionsFromSettings(settings);
      var katexNode;
      if (settings.output === "mathml") {
        return buildMathML(tree, expression, options, settings.displayMode, true);
      } else if (settings.output === "html") {
        var htmlNode = buildHTML(tree, options);
        katexNode = buildCommon.makeSpan(["katex"], [htmlNode]);
      } else {
        var mathMLNode = buildMathML(tree, expression, options, settings.displayMode, false);
        var _htmlNode = buildHTML(tree, options);
        katexNode = buildCommon.makeSpan(["katex"], [mathMLNode, _htmlNode]);
      }
      return displayWrap(katexNode, settings);
    };
    buildHTMLTree = function buildHTMLTree2(tree, expression, settings) {
      var options = optionsFromSettings(settings);
      var htmlNode = buildHTML(tree, options);
      var katexNode = buildCommon.makeSpan(["katex"], [htmlNode]);
      return displayWrap(katexNode, settings);
    };
    stretchyCodePoint = {
      widehat: "^",
      widecheck: "\u02C7",
      widetilde: "~",
      utilde: "~",
      overleftarrow: "\u2190",
      underleftarrow: "\u2190",
      xleftarrow: "\u2190",
      overrightarrow: "\u2192",
      underrightarrow: "\u2192",
      xrightarrow: "\u2192",
      underbrace: "\u23DF",
      overbrace: "\u23DE",
      overgroup: "\u23E0",
      undergroup: "\u23E1",
      overleftrightarrow: "\u2194",
      underleftrightarrow: "\u2194",
      xleftrightarrow: "\u2194",
      Overrightarrow: "\u21D2",
      xRightarrow: "\u21D2",
      overleftharpoon: "\u21BC",
      xleftharpoonup: "\u21BC",
      overrightharpoon: "\u21C0",
      xrightharpoonup: "\u21C0",
      xLeftarrow: "\u21D0",
      xLeftrightarrow: "\u21D4",
      xhookleftarrow: "\u21A9",
      xhookrightarrow: "\u21AA",
      xmapsto: "\u21A6",
      xrightharpoondown: "\u21C1",
      xleftharpoondown: "\u21BD",
      xrightleftharpoons: "\u21CC",
      xleftrightharpoons: "\u21CB",
      xtwoheadleftarrow: "\u219E",
      xtwoheadrightarrow: "\u21A0",
      xlongequal: "=",
      xtofrom: "\u21C4",
      xrightleftarrows: "\u21C4",
      xrightequilibrium: "\u21CC",
      xleftequilibrium: "\u21CB",
      "\\cdrightarrow": "\u2192",
      "\\cdleftarrow": "\u2190",
      "\\cdlongequal": "="
    };
    mathMLnode = function mathMLnode2(label) {
      var node = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode(stretchyCodePoint[label.replace(/^\\/, "")])]);
      node.setAttribute("stretchy", "true");
      return node;
    };
    katexImagesData = {
      overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
      overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
      underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
      underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
      xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
      "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
      xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
      "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
      Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
      xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
      xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
      overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
      xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
      xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
      overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
      xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
      xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
      xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
      "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
      xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
      xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
      overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
      overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
      underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
      underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
      xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
      xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
      xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
      xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
      xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
      xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
      overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
      underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
      overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
      undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
      xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
      xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
      xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
      xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
      xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
    };
    groupLength = function groupLength2(arg) {
      if (arg.type === "ordgroup") {
        return arg.body.length;
      } else {
        return 1;
      }
    };
    svgSpan = function svgSpan2(group, options) {
      function buildSvgSpan_() {
        var viewBoxWidth = 4e5;
        var label = group.label.slice(1);
        if (utils.contains(["widehat", "widecheck", "widetilde", "utilde"], label)) {
          var grp = group;
          var numChars = groupLength(grp.base);
          var viewBoxHeight;
          var pathName;
          var _height;
          if (numChars > 5) {
            if (label === "widehat" || label === "widecheck") {
              viewBoxHeight = 420;
              viewBoxWidth = 2364;
              _height = 0.42;
              pathName = label + "4";
            } else {
              viewBoxHeight = 312;
              viewBoxWidth = 2340;
              _height = 0.34;
              pathName = "tilde4";
            }
          } else {
            var imgIndex = [1, 1, 2, 2, 3, 3][numChars];
            if (label === "widehat" || label === "widecheck") {
              viewBoxWidth = [0, 1062, 2364, 2364, 2364][imgIndex];
              viewBoxHeight = [0, 239, 300, 360, 420][imgIndex];
              _height = [0, 0.24, 0.3, 0.3, 0.36, 0.42][imgIndex];
              pathName = label + imgIndex;
            } else {
              viewBoxWidth = [0, 600, 1033, 2339, 2340][imgIndex];
              viewBoxHeight = [0, 260, 286, 306, 312][imgIndex];
              _height = [0, 0.26, 0.286, 0.3, 0.306, 0.34][imgIndex];
              pathName = "tilde" + imgIndex;
            }
          }
          var path2 = new PathNode(pathName);
          var svgNode = new SvgNode([path2], {
            "width": "100%",
            "height": makeEm(_height),
            "viewBox": "0 0 " + viewBoxWidth + " " + viewBoxHeight,
            "preserveAspectRatio": "none"
          });
          return {
            span: buildCommon.makeSvgSpan([], [svgNode], options),
            minWidth: 0,
            height: _height
          };
        } else {
          var spans = [];
          var data = katexImagesData[label];
          var [paths, _minWidth, _viewBoxHeight] = data;
          var _height2 = _viewBoxHeight / 1e3;
          var numSvgChildren = paths.length;
          var widthClasses;
          var aligns;
          if (numSvgChildren === 1) {
            var align1 = data[3];
            widthClasses = ["hide-tail"];
            aligns = [align1];
          } else if (numSvgChildren === 2) {
            widthClasses = ["halfarrow-left", "halfarrow-right"];
            aligns = ["xMinYMin", "xMaxYMin"];
          } else if (numSvgChildren === 3) {
            widthClasses = ["brace-left", "brace-center", "brace-right"];
            aligns = ["xMinYMin", "xMidYMin", "xMaxYMin"];
          } else {
            throw new Error("Correct katexImagesData or update code here to support\n                    " + numSvgChildren + " children.");
          }
          for (var i = 0; i < numSvgChildren; i++) {
            var _path = new PathNode(paths[i]);
            var _svgNode = new SvgNode([_path], {
              "width": "400em",
              "height": makeEm(_height2),
              "viewBox": "0 0 " + viewBoxWidth + " " + _viewBoxHeight,
              "preserveAspectRatio": aligns[i] + " slice"
            });
            var _span = buildCommon.makeSvgSpan([widthClasses[i]], [_svgNode], options);
            if (numSvgChildren === 1) {
              return {
                span: _span,
                minWidth: _minWidth,
                height: _height2
              };
            } else {
              _span.style.height = makeEm(_height2);
              spans.push(_span);
            }
          }
          return {
            span: buildCommon.makeSpan(["stretchy"], spans, options),
            minWidth: _minWidth,
            height: _height2
          };
        }
      }
      var {
        span,
        minWidth,
        height
      } = buildSvgSpan_();
      span.height = height;
      span.style.height = makeEm(height);
      if (minWidth > 0) {
        span.style.minWidth = makeEm(minWidth);
      }
      return span;
    };
    encloseSpan = function encloseSpan2(inner2, label, topPad, bottomPad, options) {
      var img;
      var totalHeight = inner2.height + inner2.depth + topPad + bottomPad;
      if (/fbox|color|angl/.test(label)) {
        img = buildCommon.makeSpan(["stretchy", label], [], options);
        if (label === "fbox") {
          var color = options.color && options.getColor();
          if (color) {
            img.style.borderColor = color;
          }
        }
      } else {
        var lines = [];
        if (/^[bx]cancel$/.test(label)) {
          lines.push(new LineNode({
            "x1": "0",
            "y1": "0",
            "x2": "100%",
            "y2": "100%",
            "stroke-width": "0.046em"
          }));
        }
        if (/^x?cancel$/.test(label)) {
          lines.push(new LineNode({
            "x1": "0",
            "y1": "100%",
            "x2": "100%",
            "y2": "0",
            "stroke-width": "0.046em"
          }));
        }
        var svgNode = new SvgNode(lines, {
          "width": "100%",
          "height": makeEm(totalHeight)
        });
        img = buildCommon.makeSvgSpan([], [svgNode], options);
      }
      img.height = totalHeight;
      img.style.height = makeEm(totalHeight);
      return img;
    };
    stretchy = {
      encloseSpan,
      mathMLnode,
      svgSpan
    };
    htmlBuilder$a = (grp, options) => {
      var base2;
      var group;
      var supSubGroup;
      if (grp && grp.type === "supsub") {
        group = assertNodeType(grp.base, "accent");
        base2 = group.base;
        grp.base = base2;
        supSubGroup = assertSpan(buildGroup$1(grp, options));
        grp.base = group;
      } else {
        group = assertNodeType(grp, "accent");
        base2 = group.base;
      }
      var body = buildGroup$1(base2, options.havingCrampedStyle());
      var mustShift = group.isShifty && utils.isCharacterBox(base2);
      var skew = 0;
      if (mustShift) {
        var baseChar = utils.getBaseElem(base2);
        var baseGroup = buildGroup$1(baseChar, options.havingCrampedStyle());
        skew = assertSymbolDomNode(baseGroup).skew;
      }
      var accentBelow = group.label === "\\c";
      var clearance = accentBelow ? body.height + body.depth : Math.min(body.height, options.fontMetrics().xHeight);
      var accentBody;
      if (!group.isStretchy) {
        var accent2;
        var width;
        if (group.label === "\\vec") {
          accent2 = buildCommon.staticSvg("vec", options);
          width = buildCommon.svgData.vec[1];
        } else {
          accent2 = buildCommon.makeOrd({
            mode: group.mode,
            text: group.label
          }, options, "textord");
          accent2 = assertSymbolDomNode(accent2);
          accent2.italic = 0;
          width = accent2.width;
          if (accentBelow) {
            clearance += accent2.depth;
          }
        }
        accentBody = buildCommon.makeSpan(["accent-body"], [accent2]);
        var accentFull = group.label === "\\textcircled";
        if (accentFull) {
          accentBody.classes.push("accent-full");
          clearance = body.height;
        }
        var left = skew;
        if (!accentFull) {
          left -= width / 2;
        }
        accentBody.style.left = makeEm(left);
        if (group.label === "\\textcircled") {
          accentBody.style.top = ".2em";
        }
        accentBody = buildCommon.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: body
          }, {
            type: "kern",
            size: -clearance
          }, {
            type: "elem",
            elem: accentBody
          }]
        }, options);
      } else {
        accentBody = stretchy.svgSpan(group, options);
        accentBody = buildCommon.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: body
          }, {
            type: "elem",
            elem: accentBody,
            wrapperClasses: ["svg-align"],
            wrapperStyle: skew > 0 ? {
              width: "calc(100% - " + makeEm(2 * skew) + ")",
              marginLeft: makeEm(2 * skew)
            } : void 0
          }]
        }, options);
      }
      var accentWrap = buildCommon.makeSpan(["mord", "accent"], [accentBody], options);
      if (supSubGroup) {
        supSubGroup.children[0] = accentWrap;
        supSubGroup.height = Math.max(accentWrap.height, supSubGroup.height);
        supSubGroup.classes[0] = "mord";
        return supSubGroup;
      } else {
        return accentWrap;
      }
    };
    mathmlBuilder$9 = (group, options) => {
      var accentNode = group.isStretchy ? stretchy.mathMLnode(group.label) : new mathMLTree.MathNode("mo", [makeText(group.label, group.mode)]);
      var node = new mathMLTree.MathNode("mover", [buildGroup2(group.base, options), accentNode]);
      node.setAttribute("accent", "true");
      return node;
    };
    NON_STRETCHY_ACCENT_REGEX = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((accent2) => "\\" + accent2).join("|"));
    defineFunction({
      type: "accent",
      names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
      props: {
        numArgs: 1
      },
      handler: (context, args) => {
        var base2 = normalizeArgument(args[0]);
        var isStretchy = !NON_STRETCHY_ACCENT_REGEX.test(context.funcName);
        var isShifty = !isStretchy || context.funcName === "\\widehat" || context.funcName === "\\widetilde" || context.funcName === "\\widecheck";
        return {
          type: "accent",
          mode: context.parser.mode,
          label: context.funcName,
          isStretchy,
          isShifty,
          base: base2
        };
      },
      htmlBuilder: htmlBuilder$a,
      mathmlBuilder: mathmlBuilder$9
    });
    defineFunction({
      type: "accent",
      names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
      props: {
        numArgs: 1,
        allowedInText: true,
        allowedInMath: true,
        argTypes: ["primitive"]
      },
      handler: (context, args) => {
        var base2 = args[0];
        var mode = context.parser.mode;
        if (mode === "math") {
          context.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + context.funcName + " works only in text mode");
          mode = "text";
        }
        return {
          type: "accent",
          mode,
          label: context.funcName,
          isStretchy: false,
          isShifty: true,
          base: base2
        };
      },
      htmlBuilder: htmlBuilder$a,
      mathmlBuilder: mathmlBuilder$9
    });
    defineFunction({
      type: "accentUnder",
      names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
      props: {
        numArgs: 1
      },
      handler: (_ref, args) => {
        var {
          parser,
          funcName
        } = _ref;
        var base2 = args[0];
        return {
          type: "accentUnder",
          mode: parser.mode,
          label: funcName,
          base: base2
        };
      },
      htmlBuilder: (group, options) => {
        var innerGroup = buildGroup$1(group.base, options);
        var accentBody = stretchy.svgSpan(group, options);
        var kern = group.label === "\\utilde" ? 0.12 : 0;
        var vlist = buildCommon.makeVList({
          positionType: "top",
          positionData: innerGroup.height,
          children: [{
            type: "elem",
            elem: accentBody,
            wrapperClasses: ["svg-align"]
          }, {
            type: "kern",
            size: kern
          }, {
            type: "elem",
            elem: innerGroup
          }]
        }, options);
        return buildCommon.makeSpan(["mord", "accentunder"], [vlist], options);
      },
      mathmlBuilder: (group, options) => {
        var accentNode = stretchy.mathMLnode(group.label);
        var node = new mathMLTree.MathNode("munder", [buildGroup2(group.base, options), accentNode]);
        node.setAttribute("accentunder", "true");
        return node;
      }
    });
    paddedNode = (group) => {
      var node = new mathMLTree.MathNode("mpadded", group ? [group] : []);
      node.setAttribute("width", "+0.6em");
      node.setAttribute("lspace", "0.3em");
      return node;
    };
    defineFunction({
      type: "xArrow",
      names: [
        "\\xleftarrow",
        "\\xrightarrow",
        "\\xLeftarrow",
        "\\xRightarrow",
        "\\xleftrightarrow",
        "\\xLeftrightarrow",
        "\\xhookleftarrow",
        "\\xhookrightarrow",
        "\\xmapsto",
        "\\xrightharpoondown",
        "\\xrightharpoonup",
        "\\xleftharpoondown",
        "\\xleftharpoonup",
        "\\xrightleftharpoons",
        "\\xleftrightharpoons",
        "\\xlongequal",
        "\\xtwoheadrightarrow",
        "\\xtwoheadleftarrow",
        "\\xtofrom",
        "\\xrightleftarrows",
        "\\xrightequilibrium",
        "\\xleftequilibrium",
        "\\\\cdrightarrow",
        "\\\\cdleftarrow",
        "\\\\cdlongequal"
      ],
      props: {
        numArgs: 1,
        numOptionalArgs: 1
      },
      handler(_ref, args, optArgs) {
        var {
          parser,
          funcName
        } = _ref;
        return {
          type: "xArrow",
          mode: parser.mode,
          label: funcName,
          body: args[0],
          below: optArgs[0]
        };
      },
      htmlBuilder(group, options) {
        var style = options.style;
        var newOptions = options.havingStyle(style.sup());
        var upperGroup = buildCommon.wrapFragment(buildGroup$1(group.body, newOptions, options), options);
        var arrowPrefix = group.label.slice(0, 2) === "\\x" ? "x" : "cd";
        upperGroup.classes.push(arrowPrefix + "-arrow-pad");
        var lowerGroup;
        if (group.below) {
          newOptions = options.havingStyle(style.sub());
          lowerGroup = buildCommon.wrapFragment(buildGroup$1(group.below, newOptions, options), options);
          lowerGroup.classes.push(arrowPrefix + "-arrow-pad");
        }
        var arrowBody = stretchy.svgSpan(group, options);
        var arrowShift = -options.fontMetrics().axisHeight + 0.5 * arrowBody.height;
        var upperShift = -options.fontMetrics().axisHeight - 0.5 * arrowBody.height - 0.111;
        if (upperGroup.depth > 0.25 || group.label === "\\xleftequilibrium") {
          upperShift -= upperGroup.depth;
        }
        var vlist;
        if (lowerGroup) {
          var lowerShift = -options.fontMetrics().axisHeight + lowerGroup.height + 0.5 * arrowBody.height + 0.111;
          vlist = buildCommon.makeVList({
            positionType: "individualShift",
            children: [{
              type: "elem",
              elem: upperGroup,
              shift: upperShift
            }, {
              type: "elem",
              elem: arrowBody,
              shift: arrowShift
            }, {
              type: "elem",
              elem: lowerGroup,
              shift: lowerShift
            }]
          }, options);
        } else {
          vlist = buildCommon.makeVList({
            positionType: "individualShift",
            children: [{
              type: "elem",
              elem: upperGroup,
              shift: upperShift
            }, {
              type: "elem",
              elem: arrowBody,
              shift: arrowShift
            }]
          }, options);
        }
        vlist.children[0].children[0].children[1].classes.push("svg-align");
        return buildCommon.makeSpan(["mrel", "x-arrow"], [vlist], options);
      },
      mathmlBuilder(group, options) {
        var arrowNode = stretchy.mathMLnode(group.label);
        arrowNode.setAttribute("minsize", group.label.charAt(0) === "x" ? "1.75em" : "3.0em");
        var node;
        if (group.body) {
          var upperNode = paddedNode(buildGroup2(group.body, options));
          if (group.below) {
            var lowerNode = paddedNode(buildGroup2(group.below, options));
            node = new mathMLTree.MathNode("munderover", [arrowNode, lowerNode, upperNode]);
          } else {
            node = new mathMLTree.MathNode("mover", [arrowNode, upperNode]);
          }
        } else if (group.below) {
          var _lowerNode = paddedNode(buildGroup2(group.below, options));
          node = new mathMLTree.MathNode("munder", [arrowNode, _lowerNode]);
        } else {
          node = paddedNode();
          node = new mathMLTree.MathNode("mover", [arrowNode, node]);
        }
        return node;
      }
    });
    makeSpan2 = buildCommon.makeSpan;
    defineFunction({
      type: "mclass",
      names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
      props: {
        numArgs: 1,
        primitive: true
      },
      handler(_ref, args) {
        var {
          parser,
          funcName
        } = _ref;
        var body = args[0];
        return {
          type: "mclass",
          mode: parser.mode,
          mclass: "m" + funcName.slice(5),
          body: ordargument(body),
          isCharacterBox: utils.isCharacterBox(body)
        };
      },
      htmlBuilder: htmlBuilder$9,
      mathmlBuilder: mathmlBuilder$8
    });
    binrelClass = (arg) => {
      var atom = arg.type === "ordgroup" && arg.body.length ? arg.body[0] : arg;
      if (atom.type === "atom" && (atom.family === "bin" || atom.family === "rel")) {
        return "m" + atom.family;
      } else {
        return "mord";
      }
    };
    defineFunction({
      type: "mclass",
      names: ["\\@binrel"],
      props: {
        numArgs: 2
      },
      handler(_ref2, args) {
        var {
          parser
        } = _ref2;
        return {
          type: "mclass",
          mode: parser.mode,
          mclass: binrelClass(args[0]),
          body: ordargument(args[1]),
          isCharacterBox: utils.isCharacterBox(args[1])
        };
      }
    });
    defineFunction({
      type: "mclass",
      names: ["\\stackrel", "\\overset", "\\underset"],
      props: {
        numArgs: 2
      },
      handler(_ref3, args) {
        var {
          parser,
          funcName
        } = _ref3;
        var baseArg = args[1];
        var shiftedArg = args[0];
        var mclass;
        if (funcName !== "\\stackrel") {
          mclass = binrelClass(baseArg);
        } else {
          mclass = "mrel";
        }
        var baseOp = {
          type: "op",
          mode: baseArg.mode,
          limits: true,
          alwaysHandleSupSub: true,
          parentIsSupSub: false,
          symbol: false,
          suppressBaseShift: funcName !== "\\stackrel",
          body: ordargument(baseArg)
        };
        var supsub = {
          type: "supsub",
          mode: shiftedArg.mode,
          base: baseOp,
          sup: funcName === "\\underset" ? null : shiftedArg,
          sub: funcName === "\\underset" ? shiftedArg : null
        };
        return {
          type: "mclass",
          mode: parser.mode,
          mclass,
          body: [supsub],
          isCharacterBox: utils.isCharacterBox(supsub)
        };
      },
      htmlBuilder: htmlBuilder$9,
      mathmlBuilder: mathmlBuilder$8
    });
    defineFunction({
      type: "pmb",
      names: ["\\pmb"],
      props: {
        numArgs: 1,
        allowedInText: true
      },
      handler(_ref, args) {
        var {
          parser
        } = _ref;
        return {
          type: "pmb",
          mode: parser.mode,
          mclass: binrelClass(args[0]),
          body: ordargument(args[0])
        };
      },
      htmlBuilder(group, options) {
        var elements = buildExpression$1(group.body, options, true);
        var node = buildCommon.makeSpan([group.mclass], elements, options);
        node.style.textShadow = "0.02em 0.01em 0.04px";
        return node;
      },
      mathmlBuilder(group, style) {
        var inner2 = buildExpression2(group.body, style);
        var node = new mathMLTree.MathNode("mstyle", inner2);
        node.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px");
        return node;
      }
    });
    cdArrowFunctionName = {
      ">": "\\\\cdrightarrow",
      "<": "\\\\cdleftarrow",
      "=": "\\\\cdlongequal",
      "A": "\\uparrow",
      "V": "\\downarrow",
      "|": "\\Vert",
      ".": "no arrow"
    };
    newCell = () => {
      return {
        type: "styling",
        body: [],
        mode: "math",
        style: "display"
      };
    };
    isStartOfArrow = (node) => {
      return node.type === "textord" && node.text === "@";
    };
    isLabelEnd = (node, endChar) => {
      return (node.type === "mathord" || node.type === "atom") && node.text === endChar;
    };
    defineFunction({
      type: "cdlabel",
      names: ["\\\\cdleft", "\\\\cdright"],
      props: {
        numArgs: 1
      },
      handler(_ref, args) {
        var {
          parser,
          funcName
        } = _ref;
        return {
          type: "cdlabel",
          mode: parser.mode,
          side: funcName.slice(4),
          label: args[0]
        };
      },
      htmlBuilder(group, options) {
        var newOptions = options.havingStyle(options.style.sup());
        var label = buildCommon.wrapFragment(buildGroup$1(group.label, newOptions, options), options);
        label.classes.push("cd-label-" + group.side);
        label.style.bottom = makeEm(0.8 - label.depth);
        label.height = 0;
        label.depth = 0;
        return label;
      },
      mathmlBuilder(group, options) {
        var label = new mathMLTree.MathNode("mrow", [buildGroup2(group.label, options)]);
        label = new mathMLTree.MathNode("mpadded", [label]);
        label.setAttribute("width", "0");
        if (group.side === "left") {
          label.setAttribute("lspace", "-1width");
        }
        label.setAttribute("voffset", "0.7em");
        label = new mathMLTree.MathNode("mstyle", [label]);
        label.setAttribute("displaystyle", "false");
        label.setAttribute("scriptlevel", "1");
        return label;
      }
    });
    defineFunction({
      type: "cdlabelparent",
      names: ["\\\\cdparent"],
      props: {
        numArgs: 1
      },
      handler(_ref2, args) {
        var {
          parser
        } = _ref2;
        return {
          type: "cdlabelparent",
          mode: parser.mode,
          fragment: args[0]
        };
      },
      htmlBuilder(group, options) {
        var parent = buildCommon.wrapFragment(buildGroup$1(group.fragment, options), options);
        parent.classes.push("cd-vert-arrow");
        return parent;
      },
      mathmlBuilder(group, options) {
        return new mathMLTree.MathNode("mrow", [buildGroup2(group.fragment, options)]);
      }
    });
    defineFunction({
      type: "textord",
      names: ["\\@char"],
      props: {
        numArgs: 1,
        allowedInText: true
      },
      handler(_ref, args) {
        var {
          parser
        } = _ref;
        var arg = assertNodeType(args[0], "ordgroup");
        var group = arg.body;
        var number = "";
        for (var i = 0; i < group.length; i++) {
          var node = assertNodeType(group[i], "textord");
          number += node.text;
        }
        var code = parseInt(number);
        var text2;
        if (isNaN(code)) {
          throw new ParseError("\\@char has non-numeric argument " + number);
        } else if (code < 0 || code >= 1114111) {
          throw new ParseError("\\@char with invalid code point " + number);
        } else if (code <= 65535) {
          text2 = String.fromCharCode(code);
        } else {
          code -= 65536;
          text2 = String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
        }
        return {
          type: "textord",
          mode: parser.mode,
          text: text2
        };
      }
    });
    htmlBuilder$8 = (group, options) => {
      var elements = buildExpression$1(group.body, options.withColor(group.color), false);
      return buildCommon.makeFragment(elements);
    };
    mathmlBuilder$7 = (group, options) => {
      var inner2 = buildExpression2(group.body, options.withColor(group.color));
      var node = new mathMLTree.MathNode("mstyle", inner2);
      node.setAttribute("mathcolor", group.color);
      return node;
    };
    defineFunction({
      type: "color",
      names: ["\\textcolor"],
      props: {
        numArgs: 2,
        allowedInText: true,
        argTypes: ["color", "original"]
      },
      handler(_ref, args) {
        var {
          parser
        } = _ref;
        var color = assertNodeType(args[0], "color-token").color;
        var body = args[1];
        return {
          type: "color",
          mode: parser.mode,
          color,
          body: ordargument(body)
        };
      },
      htmlBuilder: htmlBuilder$8,
      mathmlBuilder: mathmlBuilder$7
    });
    defineFunction({
      type: "color",
      names: ["\\color"],
      props: {
        numArgs: 1,
        allowedInText: true,
        argTypes: ["color"]
      },
      handler(_ref2, args) {
        var {
          parser,
          breakOnTokenText
        } = _ref2;
        var color = assertNodeType(args[0], "color-token").color;
        parser.gullet.macros.set("\\current@color", color);
        var body = parser.parseExpression(true, breakOnTokenText);
        return {
          type: "color",
          mode: parser.mode,
          color,
          body
        };
      },
      htmlBuilder: htmlBuilder$8,
      mathmlBuilder: mathmlBuilder$7
    });
    defineFunction({
      type: "cr",
      names: ["\\\\"],
      props: {
        numArgs: 0,
        numOptionalArgs: 1,
        argTypes: ["size"],
        allowedInText: true
      },
      handler(_ref, args, optArgs) {
        var {
          parser
        } = _ref;
        var size = optArgs[0];
        var newLine = !parser.settings.displayMode || !parser.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
        return {
          type: "cr",
          mode: parser.mode,
          newLine,
          size: size && assertNodeType(size, "size").value
        };
      },
      htmlBuilder(group, options) {
        var span = buildCommon.makeSpan(["mspace"], [], options);
        if (group.newLine) {
          span.classes.push("newline");
          if (group.size) {
            span.style.marginTop = makeEm(calculateSize(group.size, options));
          }
        }
        return span;
      },
      mathmlBuilder(group, options) {
        var node = new mathMLTree.MathNode("mspace");
        if (group.newLine) {
          node.setAttribute("linebreak", "newline");
          if (group.size) {
            node.setAttribute("height", makeEm(calculateSize(group.size, options)));
          }
        }
        return node;
      }
    });
    globalMap = {
      "\\global": "\\global",
      "\\long": "\\\\globallong",
      "\\\\globallong": "\\\\globallong",
      "\\def": "\\gdef",
      "\\gdef": "\\gdef",
      "\\edef": "\\xdef",
      "\\xdef": "\\xdef",
      "\\let": "\\\\globallet",
      "\\futurelet": "\\\\globalfuture"
    };
    checkControlSequence = (tok) => {
      var name4 = tok.text;
      if (/^(?:[\\{}$&#^_]|EOF)$/.test(name4)) {
        throw new ParseError("Expected a control sequence", tok);
      }
      return name4;
    };
    getRHS = (parser) => {
      var tok = parser.gullet.popToken();
      if (tok.text === "=") {
        tok = parser.gullet.popToken();
        if (tok.text === " ") {
          tok = parser.gullet.popToken();
        }
      }
      return tok;
    };
    letCommand = (parser, name4, tok, global2) => {
      var macro = parser.gullet.macros.get(tok.text);
      if (macro == null) {
        tok.noexpand = true;
        macro = {
          tokens: [tok],
          numArgs: 0,
          unexpandable: !parser.gullet.isExpandable(tok.text)
        };
      }
      parser.gullet.macros.set(name4, macro, global2);
    };
    defineFunction({
      type: "internal",
      names: [
        "\\global",
        "\\long",
        "\\\\globallong"
      ],
      props: {
        numArgs: 0,
        allowedInText: true
      },
      handler(_ref) {
        var {
          parser,
          funcName
        } = _ref;
        parser.consumeSpaces();
        var token = parser.fetch();
        if (globalMap[token.text]) {
          if (funcName === "\\global" || funcName === "\\\\globallong") {
            token.text = globalMap[token.text];
          }
          return assertNodeType(parser.parseFunction(), "internal");
        }
        throw new ParseError("Invalid token after macro prefix", token);
      }
    });
    defineFunction({
      type: "internal",
      names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
      props: {
        numArgs: 0,
        allowedInText: true,
        primitive: true
      },
      handler(_ref2) {
        var {
          parser,
          funcName
        } = _ref2;
        var tok = parser.gullet.popToken();
        var name4 = tok.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(name4)) {
          throw new ParseError("Expected a control sequence", tok);
        }
        var numArgs = 0;
        var insert;
        var delimiters2 = [[]];
        while (parser.gullet.future().text !== "{") {
          tok = parser.gullet.popToken();
          if (tok.text === "#") {
            if (parser.gullet.future().text === "{") {
              insert = parser.gullet.future();
              delimiters2[numArgs].push("{");
              break;
            }
            tok = parser.gullet.popToken();
            if (!/^[1-9]$/.test(tok.text)) {
              throw new ParseError('Invalid argument number "' + tok.text + '"');
            }
            if (parseInt(tok.text) !== numArgs + 1) {
              throw new ParseError('Argument number "' + tok.text + '" out of order');
            }
            numArgs++;
            delimiters2.push([]);
          } else if (tok.text === "EOF") {
            throw new ParseError("Expected a macro definition");
          } else {
            delimiters2[numArgs].push(tok.text);
          }
        }
        var {
          tokens
        } = parser.gullet.consumeArg();
        if (insert) {
          tokens.unshift(insert);
        }
        if (funcName === "\\edef" || funcName === "\\xdef") {
          tokens = parser.gullet.expandTokens(tokens);
          tokens.reverse();
        }
        parser.gullet.macros.set(name4, {
          tokens,
          numArgs,
          delimiters: delimiters2
        }, funcName === globalMap[funcName]);
        return {
          type: "internal",
          mode: parser.mode
        };
      }
    });
    defineFunction({
      type: "internal",
      names: [
        "\\let",
        "\\\\globallet"
      ],
      props: {
        numArgs: 0,
        allowedInText: true,
        primitive: true
      },
      handler(_ref3) {
        var {
          parser,
          funcName
        } = _ref3;
        var name4 = checkControlSequence(parser.gullet.popToken());
        parser.gullet.consumeSpaces();
        var tok = getRHS(parser);
        letCommand(parser, name4, tok, funcName === "\\\\globallet");
        return {
          type: "internal",
          mode: parser.mode
        };
      }
    });
    defineFunction({
      type: "internal",
      names: [
        "\\futurelet",
        "\\\\globalfuture"
      ],
      props: {
        numArgs: 0,
        allowedInText: true,
        primitive: true
      },
      handler(_ref4) {
        var {
          parser,
          funcName
        } = _ref4;
        var name4 = checkControlSequence(parser.gullet.popToken());
        var middle = parser.gullet.popToken();
        var tok = parser.gullet.popToken();
        letCommand(parser, name4, tok, funcName === "\\\\globalfuture");
        parser.gullet.pushToken(tok);
        parser.gullet.pushToken(middle);
        return {
          type: "internal",
          mode: parser.mode
        };
      }
    });
    getMetrics = function getMetrics2(symbol, font, mode) {
      var replace = symbols.math[symbol] && symbols.math[symbol].replace;
      var metrics = getCharacterMetrics(replace || symbol, font, mode);
      if (!metrics) {
        throw new Error("Unsupported symbol " + symbol + " and font size " + font + ".");
      }
      return metrics;
    };
    styleWrap = function styleWrap2(delim, toStyle, options, classes) {
      var newOptions = options.havingBaseStyle(toStyle);
      var span = buildCommon.makeSpan(classes.concat(newOptions.sizingClasses(options)), [delim], options);
      var delimSizeMultiplier = newOptions.sizeMultiplier / options.sizeMultiplier;
      span.height *= delimSizeMultiplier;
      span.depth *= delimSizeMultiplier;
      span.maxFontSize = newOptions.sizeMultiplier;
      return span;
    };
    centerSpan = function centerSpan2(span, options, style) {
      var newOptions = options.havingBaseStyle(style);
      var shift = (1 - options.sizeMultiplier / newOptions.sizeMultiplier) * options.fontMetrics().axisHeight;
      span.classes.push("delimcenter");
      span.style.top = makeEm(shift);
      span.height -= shift;
      span.depth += shift;
    };
    makeSmallDelim = function makeSmallDelim2(delim, style, center, options, mode, classes) {
      var text2 = buildCommon.makeSymbol(delim, "Main-Regular", mode, options);
      var span = styleWrap(text2, style, options, classes);
      if (center) {
        centerSpan(span, options, style);
      }
      return span;
    };
    mathrmSize = function mathrmSize2(value, size, mode, options) {
      return buildCommon.makeSymbol(value, "Size" + size + "-Regular", mode, options);
    };
    makeLargeDelim = function makeLargeDelim2(delim, size, center, options, mode, classes) {
      var inner2 = mathrmSize(delim, size, mode, options);
      var span = styleWrap(buildCommon.makeSpan(["delimsizing", "size" + size], [inner2], options), Style$1.TEXT, options, classes);
      if (center) {
        centerSpan(span, options, Style$1.TEXT);
      }
      return span;
    };
    makeGlyphSpan = function makeGlyphSpan2(symbol, font, mode) {
      var sizeClass;
      if (font === "Size1-Regular") {
        sizeClass = "delim-size1";
      } else {
        sizeClass = "delim-size4";
      }
      var corner = buildCommon.makeSpan(["delimsizinginner", sizeClass], [buildCommon.makeSpan([], [buildCommon.makeSymbol(symbol, font, mode)])]);
      return {
        type: "elem",
        elem: corner
      };
    };
    makeInner = function makeInner2(ch, height, options) {
      var width = fontMetricsData["Size4-Regular"][ch.charCodeAt(0)] ? fontMetricsData["Size4-Regular"][ch.charCodeAt(0)][4] : fontMetricsData["Size1-Regular"][ch.charCodeAt(0)][4];
      var path2 = new PathNode("inner", innerPath(ch, Math.round(1e3 * height)));
      var svgNode = new SvgNode([path2], {
        "width": makeEm(width),
        "height": makeEm(height),
        "style": "width:" + makeEm(width),
        "viewBox": "0 0 " + 1e3 * width + " " + Math.round(1e3 * height),
        "preserveAspectRatio": "xMinYMin"
      });
      var span = buildCommon.makeSvgSpan([], [svgNode], options);
      span.height = height;
      span.style.height = makeEm(height);
      span.style.width = makeEm(width);
      return {
        type: "elem",
        elem: span
      };
    };
    lapInEms = 8e-3;
    lap = {
      type: "kern",
      size: -1 * lapInEms
    };
    verts = ["|", "\\lvert", "\\rvert", "\\vert"];
    doubleVerts = ["\\|", "\\lVert", "\\rVert", "\\Vert"];
    makeStackedDelim = function makeStackedDelim2(delim, heightTotal, center, options, mode, classes) {
      var top;
      var middle;
      var repeat;
      var bottom;
      var svgLabel = "";
      var viewBoxWidth = 0;
      top = repeat = bottom = delim;
      middle = null;
      var font = "Size1-Regular";
      if (delim === "\\uparrow") {
        repeat = bottom = "\u23D0";
      } else if (delim === "\\Uparrow") {
        repeat = bottom = "\u2016";
      } else if (delim === "\\downarrow") {
        top = repeat = "\u23D0";
      } else if (delim === "\\Downarrow") {
        top = repeat = "\u2016";
      } else if (delim === "\\updownarrow") {
        top = "\\uparrow";
        repeat = "\u23D0";
        bottom = "\\downarrow";
      } else if (delim === "\\Updownarrow") {
        top = "\\Uparrow";
        repeat = "\u2016";
        bottom = "\\Downarrow";
      } else if (utils.contains(verts, delim)) {
        repeat = "\u2223";
        svgLabel = "vert";
        viewBoxWidth = 333;
      } else if (utils.contains(doubleVerts, delim)) {
        repeat = "\u2225";
        svgLabel = "doublevert";
        viewBoxWidth = 556;
      } else if (delim === "[" || delim === "\\lbrack") {
        top = "\u23A1";
        repeat = "\u23A2";
        bottom = "\u23A3";
        font = "Size4-Regular";
        svgLabel = "lbrack";
        viewBoxWidth = 667;
      } else if (delim === "]" || delim === "\\rbrack") {
        top = "\u23A4";
        repeat = "\u23A5";
        bottom = "\u23A6";
        font = "Size4-Regular";
        svgLabel = "rbrack";
        viewBoxWidth = 667;
      } else if (delim === "\\lfloor" || delim === "\u230A") {
        repeat = top = "\u23A2";
        bottom = "\u23A3";
        font = "Size4-Regular";
        svgLabel = "lfloor";
        viewBoxWidth = 667;
      } else if (delim === "\\lceil" || delim === "\u2308") {
        top = "\u23A1";
        repeat = bottom = "\u23A2";
        font = "Size4-Regular";
        svgLabel = "lceil";
        viewBoxWidth = 667;
      } else if (delim === "\\rfloor" || delim === "\u230B") {
        repeat = top = "\u23A5";
        bottom = "\u23A6";
        font = "Size4-Regular";
        svgLabel = "rfloor";
        viewBoxWidth = 667;
      } else if (delim === "\\rceil" || delim === "\u2309") {
        top = "\u23A4";
        repeat = bottom = "\u23A5";
        font = "Size4-Regular";
        svgLabel = "rceil";
        viewBoxWidth = 667;
      } else if (delim === "(" || delim === "\\lparen") {
        top = "\u239B";
        repeat = "\u239C";
        bottom = "\u239D";
        font = "Size4-Regular";
        svgLabel = "lparen";
        viewBoxWidth = 875;
      } else if (delim === ")" || delim === "\\rparen") {
        top = "\u239E";
        repeat = "\u239F";
        bottom = "\u23A0";
        font = "Size4-Regular";
        svgLabel = "rparen";
        viewBoxWidth = 875;
      } else if (delim === "\\{" || delim === "\\lbrace") {
        top = "\u23A7";
        middle = "\u23A8";
        bottom = "\u23A9";
        repeat = "\u23AA";
        font = "Size4-Regular";
      } else if (delim === "\\}" || delim === "\\rbrace") {
        top = "\u23AB";
        middle = "\u23AC";
        bottom = "\u23AD";
        repeat = "\u23AA";
        font = "Size4-Regular";
      } else if (delim === "\\lgroup" || delim === "\u27EE") {
        top = "\u23A7";
        bottom = "\u23A9";
        repeat = "\u23AA";
        font = "Size4-Regular";
      } else if (delim === "\\rgroup" || delim === "\u27EF") {
        top = "\u23AB";
        bottom = "\u23AD";
        repeat = "\u23AA";
        font = "Size4-Regular";
      } else if (delim === "\\lmoustache" || delim === "\u23B0") {
        top = "\u23A7";
        bottom = "\u23AD";
        repeat = "\u23AA";
        font = "Size4-Regular";
      } else if (delim === "\\rmoustache" || delim === "\u23B1") {
        top = "\u23AB";
        bottom = "\u23A9";
        repeat = "\u23AA";
        font = "Size4-Regular";
      }
      var topMetrics = getMetrics(top, font, mode);
      var topHeightTotal = topMetrics.height + topMetrics.depth;
      var repeatMetrics = getMetrics(repeat, font, mode);
      var repeatHeightTotal = repeatMetrics.height + repeatMetrics.depth;
      var bottomMetrics = getMetrics(bottom, font, mode);
      var bottomHeightTotal = bottomMetrics.height + bottomMetrics.depth;
      var middleHeightTotal = 0;
      var middleFactor = 1;
      if (middle !== null) {
        var middleMetrics = getMetrics(middle, font, mode);
        middleHeightTotal = middleMetrics.height + middleMetrics.depth;
        middleFactor = 2;
      }
      var minHeight = topHeightTotal + bottomHeightTotal + middleHeightTotal;
      var repeatCount = Math.max(0, Math.ceil((heightTotal - minHeight) / (middleFactor * repeatHeightTotal)));
      var realHeightTotal = minHeight + repeatCount * middleFactor * repeatHeightTotal;
      var axisHeight = options.fontMetrics().axisHeight;
      if (center) {
        axisHeight *= options.sizeMultiplier;
      }
      var depth = realHeightTotal / 2 - axisHeight;
      var stack = [];
      if (svgLabel.length > 0) {
        var midHeight = realHeightTotal - topHeightTotal - bottomHeightTotal;
        var viewBoxHeight = Math.round(realHeightTotal * 1e3);
        var pathStr = tallDelim(svgLabel, Math.round(midHeight * 1e3));
        var path2 = new PathNode(svgLabel, pathStr);
        var width = (viewBoxWidth / 1e3).toFixed(3) + "em";
        var height = (viewBoxHeight / 1e3).toFixed(3) + "em";
        var svg = new SvgNode([path2], {
          "width": width,
          "height": height,
          "viewBox": "0 0 " + viewBoxWidth + " " + viewBoxHeight
        });
        var wrapper = buildCommon.makeSvgSpan([], [svg], options);
        wrapper.height = viewBoxHeight / 1e3;
        wrapper.style.width = width;
        wrapper.style.height = height;
        stack.push({
          type: "elem",
          elem: wrapper
        });
      } else {
        stack.push(makeGlyphSpan(bottom, font, mode));
        stack.push(lap);
        if (middle === null) {
          var innerHeight = realHeightTotal - topHeightTotal - bottomHeightTotal + 2 * lapInEms;
          stack.push(makeInner(repeat, innerHeight, options));
        } else {
          var _innerHeight = (realHeightTotal - topHeightTotal - bottomHeightTotal - middleHeightTotal) / 2 + 2 * lapInEms;
          stack.push(makeInner(repeat, _innerHeight, options));
          stack.push(lap);
          stack.push(makeGlyphSpan(middle, font, mode));
          stack.push(lap);
          stack.push(makeInner(repeat, _innerHeight, options));
        }
        stack.push(lap);
        stack.push(makeGlyphSpan(top, font, mode));
      }
      var newOptions = options.havingBaseStyle(Style$1.TEXT);
      var inner2 = buildCommon.makeVList({
        positionType: "bottom",
        positionData: depth,
        children: stack
      }, newOptions);
      return styleWrap(buildCommon.makeSpan(["delimsizing", "mult"], [inner2], newOptions), Style$1.TEXT, options, classes);
    };
    vbPad = 80;
    emPad = 0.08;
    sqrtSvg = function sqrtSvg2(sqrtName, height, viewBoxHeight, extraViniculum, options) {
      var path2 = sqrtPath(sqrtName, extraViniculum, viewBoxHeight);
      var pathNode = new PathNode(sqrtName, path2);
      var svg = new SvgNode([pathNode], {
        "width": "400em",
        "height": makeEm(height),
        "viewBox": "0 0 400000 " + viewBoxHeight,
        "preserveAspectRatio": "xMinYMin slice"
      });
      return buildCommon.makeSvgSpan(["hide-tail"], [svg], options);
    };
    makeSqrtImage = function makeSqrtImage2(height, options) {
      var newOptions = options.havingBaseSizing();
      var delim = traverseSequence("\\surd", height * newOptions.sizeMultiplier, stackLargeDelimiterSequence, newOptions);
      var sizeMultiplier = newOptions.sizeMultiplier;
      var extraViniculum = Math.max(0, options.minRuleThickness - options.fontMetrics().sqrtRuleThickness);
      var span;
      var spanHeight = 0;
      var texHeight = 0;
      var viewBoxHeight = 0;
      var advanceWidth;
      if (delim.type === "small") {
        viewBoxHeight = 1e3 + 1e3 * extraViniculum + vbPad;
        if (height < 1) {
          sizeMultiplier = 1;
        } else if (height < 1.4) {
          sizeMultiplier = 0.7;
        }
        spanHeight = (1 + extraViniculum + emPad) / sizeMultiplier;
        texHeight = (1 + extraViniculum) / sizeMultiplier;
        span = sqrtSvg("sqrtMain", spanHeight, viewBoxHeight, extraViniculum, options);
        span.style.minWidth = "0.853em";
        advanceWidth = 0.833 / sizeMultiplier;
      } else if (delim.type === "large") {
        viewBoxHeight = (1e3 + vbPad) * sizeToMaxHeight[delim.size];
        texHeight = (sizeToMaxHeight[delim.size] + extraViniculum) / sizeMultiplier;
        spanHeight = (sizeToMaxHeight[delim.size] + extraViniculum + emPad) / sizeMultiplier;
        span = sqrtSvg("sqrtSize" + delim.size, spanHeight, viewBoxHeight, extraViniculum, options);
        span.style.minWidth = "1.02em";
        advanceWidth = 1 / sizeMultiplier;
      } else {
        spanHeight = height + extraViniculum + emPad;
        texHeight = height + extraViniculum;
        viewBoxHeight = Math.floor(1e3 * height + extraViniculum) + vbPad;
        span = sqrtSvg("sqrtTall", spanHeight, viewBoxHeight, extraViniculum, options);
        span.style.minWidth = "0.742em";
        advanceWidth = 1.056;
      }
      span.height = texHeight;
      span.style.height = makeEm(spanHeight);
      return {
        span,
        advanceWidth,
        ruleWidth: (options.fontMetrics().sqrtRuleThickness + extraViniculum) * sizeMultiplier
      };
    };
    stackLargeDelimiters = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"];
    stackAlwaysDelimiters = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1"];
    stackNeverDelimiters = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"];
    sizeToMaxHeight = [0, 1.2, 1.8, 2.4, 3];
    makeSizedDelim = function makeSizedDelim2(delim, size, options, mode, classes) {
      if (delim === "<" || delim === "\\lt" || delim === "\u27E8") {
        delim = "\\langle";
      } else if (delim === ">" || delim === "\\gt" || delim === "\u27E9") {
        delim = "\\rangle";
      }
      if (utils.contains(stackLargeDelimiters, delim) || utils.contains(stackNeverDelimiters, delim)) {
        return makeLargeDelim(delim, size, false, options, mode, classes);
      } else if (utils.contains(stackAlwaysDelimiters, delim)) {
        return makeStackedDelim(delim, sizeToMaxHeight[size], false, options, mode, classes);
      } else {
        throw new ParseError("Illegal delimiter: '" + delim + "'");
      }
    };
    stackNeverDelimiterSequence = [{
      type: "small",
      style: Style$1.SCRIPTSCRIPT
    }, {
      type: "small",
      style: Style$1.SCRIPT
    }, {
      type: "small",
      style: Style$1.TEXT
    }, {
      type: "large",
      size: 1
    }, {
      type: "large",
      size: 2
    }, {
      type: "large",
      size: 3
    }, {
      type: "large",
      size: 4
    }];
    stackAlwaysDelimiterSequence = [{
      type: "small",
      style: Style$1.SCRIPTSCRIPT
    }, {
      type: "small",
      style: Style$1.SCRIPT
    }, {
      type: "small",
      style: Style$1.TEXT
    }, {
      type: "stack"
    }];
    stackLargeDelimiterSequence = [{
      type: "small",
      style: Style$1.SCRIPTSCRIPT
    }, {
      type: "small",
      style: Style$1.SCRIPT
    }, {
      type: "small",
      style: Style$1.TEXT
    }, {
      type: "large",
      size: 1
    }, {
      type: "large",
      size: 2
    }, {
      type: "large",
      size: 3
    }, {
      type: "large",
      size: 4
    }, {
      type: "stack"
    }];
    delimTypeToFont = function delimTypeToFont2(type) {
      if (type.type === "small") {
        return "Main-Regular";
      } else if (type.type === "large") {
        return "Size" + type.size + "-Regular";
      } else if (type.type === "stack") {
        return "Size4-Regular";
      } else {
        throw new Error("Add support for delim type '" + type.type + "' here.");
      }
    };
    traverseSequence = function traverseSequence2(delim, height, sequence, options) {
      var start = Math.min(2, 3 - options.style.size);
      for (var i = start; i < sequence.length; i++) {
        if (sequence[i].type === "stack") {
          break;
        }
        var metrics = getMetrics(delim, delimTypeToFont(sequence[i]), "math");
        var heightDepth = metrics.height + metrics.depth;
        if (sequence[i].type === "small") {
          var newOptions = options.havingBaseStyle(sequence[i].style);
          heightDepth *= newOptions.sizeMultiplier;
        }
        if (heightDepth > height) {
          return sequence[i];
        }
      }
      return sequence[sequence.length - 1];
    };
    makeCustomSizedDelim = function makeCustomSizedDelim2(delim, height, center, options, mode, classes) {
      if (delim === "<" || delim === "\\lt" || delim === "\u27E8") {
        delim = "\\langle";
      } else if (delim === ">" || delim === "\\gt" || delim === "\u27E9") {
        delim = "\\rangle";
      }
      var sequence;
      if (utils.contains(stackNeverDelimiters, delim)) {
        sequence = stackNeverDelimiterSequence;
      } else if (utils.contains(stackLargeDelimiters, delim)) {
        sequence = stackLargeDelimiterSequence;
      } else {
        sequence = stackAlwaysDelimiterSequence;
      }
      var delimType = traverseSequence(delim, height, sequence, options);
      if (delimType.type === "small") {
        return makeSmallDelim(delim, delimType.style, center, options, mode, classes);
      } else if (delimType.type === "large") {
        return makeLargeDelim(delim, delimType.size, center, options, mode, classes);
      } else {
        return makeStackedDelim(delim, height, center, options, mode, classes);
      }
    };
    makeLeftRightDelim = function makeLeftRightDelim2(delim, height, depth, options, mode, classes) {
      var axisHeight = options.fontMetrics().axisHeight * options.sizeMultiplier;
      var delimiterFactor = 901;
      var delimiterExtend = 5 / options.fontMetrics().ptPerEm;
      var maxDistFromAxis = Math.max(height - axisHeight, depth + axisHeight);
      var totalHeight = Math.max(
        maxDistFromAxis / 500 * delimiterFactor,
        2 * maxDistFromAxis - delimiterExtend
      );
      return makeCustomSizedDelim(delim, totalHeight, true, options, mode, classes);
    };
    delimiter = {
      sqrtImage: makeSqrtImage,
      sizedDelim: makeSizedDelim,
      sizeToMaxHeight,
      customSizedDelim: makeCustomSizedDelim,
      leftRightDelim: makeLeftRightDelim
    };
    delimiterSizes = {
      "\\bigl": {
        mclass: "mopen",
        size: 1
      },
      "\\Bigl": {
        mclass: "mopen",
        size: 2
      },
      "\\biggl": {
        mclass: "mopen",
        size: 3
      },
      "\\Biggl": {
        mclass: "mopen",
        size: 4
      },
      "\\bigr": {
        mclass: "mclose",
        size: 1
      },
      "\\Bigr": {
        mclass: "mclose",
        size: 2
      },
      "\\biggr": {
        mclass: "mclose",
        size: 3
      },
      "\\Biggr": {
        mclass: "mclose",
        size: 4
      },
      "\\bigm": {
        mclass: "mrel",
        size: 1
      },
      "\\Bigm": {
        mclass: "mrel",
        size: 2
      },
      "\\biggm": {
        mclass: "mrel",
        size: 3
      },
      "\\Biggm": {
        mclass: "mrel",
        size: 4
      },
      "\\big": {
        mclass: "mord",
        size: 1
      },
      "\\Big": {
        mclass: "mord",
        size: 2
      },
      "\\bigg": {
        mclass: "mord",
        size: 3
      },
      "\\Bigg": {
        mclass: "mord",
        size: 4
      }
    };
    delimiters = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27E8", "\\rangle", "\u27E9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
    defineFunction({
      type: "delimsizing",
      names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
      props: {
        numArgs: 1,
        argTypes: ["primitive"]
      },
      handler: (context, args) => {
        var delim = checkDelimiter(args[0], context);
        return {
          type: "delimsizing",
          mode: context.parser.mode,
          size: delimiterSizes[context.funcName].size,
          mclass: delimiterSizes[context.funcName].mclass,
          delim: delim.text
        };
      },
      htmlBuilder: (group, options) => {
        if (group.delim === ".") {
          return buildCommon.makeSpan([group.mclass]);
        }
        return delimiter.sizedDelim(group.delim, group.size, options, group.mode, [group.mclass]);
      },
      mathmlBuilder: (group) => {
        var children = [];
        if (group.delim !== ".") {
          children.push(makeText(group.delim, group.mode));
        }
        var node = new mathMLTree.MathNode("mo", children);
        if (group.mclass === "mopen" || group.mclass === "mclose") {
          node.setAttribute("fence", "true");
        } else {
          node.setAttribute("fence", "false");
        }
        node.setAttribute("stretchy", "true");
        var size = makeEm(delimiter.sizeToMaxHeight[group.size]);
        node.setAttribute("minsize", size);
        node.setAttribute("maxsize", size);
        return node;
      }
    });
    defineFunction({
      type: "leftright-right",
      names: ["\\right"],
      props: {
        numArgs: 1,
        primitive: true
      },
      handler: (context, args) => {
        var color = context.parser.gullet.macros.get("\\current@color");
        if (color && typeof color !== "string") {
          throw new ParseError("\\current@color set to non-string in \\right");
        }
        return {
          type: "leftright-right",
          mode: context.parser.mode,
          delim: checkDelimiter(args[0], context).text,
          color
        };
      }
    });
    defineFunction({
      type: "leftright",
      names: ["\\left"],
      props: {
        numArgs: 1,
        primitive: true
      },
      handler: (context, args) => {
        var delim = checkDelimiter(args[0], context);
        var parser = context.parser;
        ++parser.leftrightDepth;
        var body = parser.parseExpression(false);
        --parser.leftrightDepth;
        parser.expect("\\right", false);
        var right = assertNodeType(parser.parseFunction(), "leftright-right");
        return {
          type: "leftright",
          mode: parser.mode,
          body,
          left: delim.text,
          right: right.delim,
          rightColor: right.color
        };
      },
      htmlBuilder: (group, options) => {
        assertParsed(group);
        var inner2 = buildExpression$1(group.body, options, true, ["mopen", "mclose"]);
        var innerHeight = 0;
        var innerDepth = 0;
        var hadMiddle = false;
        for (var i = 0; i < inner2.length; i++) {
          if (inner2[i].isMiddle) {
            hadMiddle = true;
          } else {
            innerHeight = Math.max(inner2[i].height, innerHeight);
            innerDepth = Math.max(inner2[i].depth, innerDepth);
          }
        }
        innerHeight *= options.sizeMultiplier;
        innerDepth *= options.sizeMultiplier;
        var leftDelim;
        if (group.left === ".") {
          leftDelim = makeNullDelimiter(options, ["mopen"]);
        } else {
          leftDelim = delimiter.leftRightDelim(group.left, innerHeight, innerDepth, options, group.mode, ["mopen"]);
        }
        inner2.unshift(leftDelim);
        if (hadMiddle) {
          for (var _i = 1; _i < inner2.length; _i++) {
            var middleDelim = inner2[_i];
            var isMiddle = middleDelim.isMiddle;
            if (isMiddle) {
              inner2[_i] = delimiter.leftRightDelim(isMiddle.delim, innerHeight, innerDepth, isMiddle.options, group.mode, []);
            }
          }
        }
        var rightDelim;
        if (group.right === ".") {
          rightDelim = makeNullDelimiter(options, ["mclose"]);
        } else {
          var colorOptions = group.rightColor ? options.withColor(group.rightColor) : options;
          rightDelim = delimiter.leftRightDelim(group.right, innerHeight, innerDepth, colorOptions, group.mode, ["mclose"]);
        }
        inner2.push(rightDelim);
        return buildCommon.makeSpan(["minner"], inner2, options);
      },
      mathmlBuilder: (group, options) => {
        assertParsed(group);
        var inner2 = buildExpression2(group.body, options);
        if (group.left !== ".") {
          var leftNode = new mathMLTree.MathNode("mo", [makeText(group.left, group.mode)]);
          leftNode.setAttribute("fence", "true");
          inner2.unshift(leftNode);
        }
        if (group.right !== ".") {
          var rightNode = new mathMLTree.MathNode("mo", [makeText(group.right, group.mode)]);
          rightNode.setAttribute("fence", "true");
          if (group.rightColor) {
            rightNode.setAttribute("mathcolor", group.rightColor);
          }
          inner2.push(rightNode);
        }
        return makeRow(inner2);
      }
    });
    defineFunction({
      type: "middle",
      names: ["\\middle"],
      props: {
        numArgs: 1,
        primitive: true
      },
      handler: (context, args) => {
        var delim = checkDelimiter(args[0], context);
        if (!context.parser.leftrightDepth) {
          throw new ParseError("\\middle without preceding \\left", delim);
        }
        return {
          type: "middle",
          mode: context.parser.mode,
          delim: delim.text
        };
      },
      htmlBuilder: (group, options) => {
        var middleDelim;
        if (group.delim === ".") {
          middleDelim = makeNullDelimiter(options, []);
        } else {
          middleDelim = delimiter.sizedDelim(group.delim, 1, options, group.mode, []);
          var isMiddle = {
            delim: group.delim,
            options
          };
          middleDelim.isMiddle = isMiddle;
        }
        return middleDelim;
      },
      mathmlBuilder: (group, options) => {
        var textNode = group.delim === "\\vert" || group.delim === "|" ? makeText("|", "text") : makeText(group.delim, group.mode);
        var middleNode = new mathMLTree.MathNode("mo", [textNode]);
        middleNode.setAttribute("fence", "true");
        middleNode.setAttribute("lspace", "0.05em");
        middleNode.setAttribute("rspace", "0.05em");
        return middleNode;
      }
    });
    htmlBuilder$7 = (group, options) => {
      var inner2 = buildCommon.wrapFragment(buildGroup$1(group.body, options), options);
      var label = group.label.slice(1);
      var scale = options.sizeMultiplier;
      var img;
      var imgShift = 0;
      var isSingleChar = utils.isCharacterBox(group.body);
      if (label === "sout") {
        img = buildCommon.makeSpan(["stretchy", "sout"]);
        img.height = options.fontMetrics().defaultRuleThickness / scale;
        imgShift = -0.5 * options.fontMetrics().xHeight;
      } else if (label === "phase") {
        var lineWeight = calculateSize({
          number: 0.6,
          unit: "pt"
        }, options);
        var clearance = calculateSize({
          number: 0.35,
          unit: "ex"
        }, options);
        var newOptions = options.havingBaseSizing();
        scale = scale / newOptions.sizeMultiplier;
        var angleHeight = inner2.height + inner2.depth + lineWeight + clearance;
        inner2.style.paddingLeft = makeEm(angleHeight / 2 + lineWeight);
        var viewBoxHeight = Math.floor(1e3 * angleHeight * scale);
        var path2 = phasePath(viewBoxHeight);
        var svgNode = new SvgNode([new PathNode("phase", path2)], {
          "width": "400em",
          "height": makeEm(viewBoxHeight / 1e3),
          "viewBox": "0 0 400000 " + viewBoxHeight,
          "preserveAspectRatio": "xMinYMin slice"
        });
        img = buildCommon.makeSvgSpan(["hide-tail"], [svgNode], options);
        img.style.height = makeEm(angleHeight);
        imgShift = inner2.depth + lineWeight + clearance;
      } else {
        if (/cancel/.test(label)) {
          if (!isSingleChar) {
            inner2.classes.push("cancel-pad");
          }
        } else if (label === "angl") {
          inner2.classes.push("anglpad");
        } else {
          inner2.classes.push("boxpad");
        }
        var topPad = 0;
        var bottomPad = 0;
        var ruleThickness = 0;
        if (/box/.test(label)) {
          ruleThickness = Math.max(
            options.fontMetrics().fboxrule,
            options.minRuleThickness
          );
          topPad = options.fontMetrics().fboxsep + (label === "colorbox" ? 0 : ruleThickness);
          bottomPad = topPad;
        } else if (label === "angl") {
          ruleThickness = Math.max(options.fontMetrics().defaultRuleThickness, options.minRuleThickness);
          topPad = 4 * ruleThickness;
          bottomPad = Math.max(0, 0.25 - inner2.depth);
        } else {
          topPad = isSingleChar ? 0.2 : 0;
          bottomPad = topPad;
        }
        img = stretchy.encloseSpan(inner2, label, topPad, bottomPad, options);
        if (/fbox|boxed|fcolorbox/.test(label)) {
          img.style.borderStyle = "solid";
          img.style.borderWidth = makeEm(ruleThickness);
        } else if (label === "angl" && ruleThickness !== 0.049) {
          img.style.borderTopWidth = makeEm(ruleThickness);
          img.style.borderRightWidth = makeEm(ruleThickness);
        }
        imgShift = inner2.depth + bottomPad;
        if (group.backgroundColor) {
          img.style.backgroundColor = group.backgroundColor;
          if (group.borderColor) {
            img.style.borderColor = group.borderColor;
          }
        }
      }
      var vlist;
      if (group.backgroundColor) {
        vlist = buildCommon.makeVList({
          positionType: "individualShift",
          children: [
            {
              type: "elem",
              elem: img,
              shift: imgShift
            },
            {
              type: "elem",
              elem: inner2,
              shift: 0
            }
          ]
        }, options);
      } else {
        var classes = /cancel|phase/.test(label) ? ["svg-align"] : [];
        vlist = buildCommon.makeVList({
          positionType: "individualShift",
          children: [
            {
              type: "elem",
              elem: inner2,
              shift: 0
            },
            {
              type: "elem",
              elem: img,
              shift: imgShift,
              wrapperClasses: classes
            }
          ]
        }, options);
      }
      if (/cancel/.test(label)) {
        vlist.height = inner2.height;
        vlist.depth = inner2.depth;
      }
      if (/cancel/.test(label) && !isSingleChar) {
        return buildCommon.makeSpan(["mord", "cancel-lap"], [vlist], options);
      } else {
        return buildCommon.makeSpan(["mord"], [vlist], options);
      }
    };
    mathmlBuilder$6 = (group, options) => {
      var fboxsep = 0;
      var node = new mathMLTree.MathNode(group.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [buildGroup2(group.body, options)]);
      switch (group.label) {
        case "\\cancel":
          node.setAttribute("notation", "updiagonalstrike");
          break;
        case "\\bcancel":
          node.setAttribute("notation", "downdiagonalstrike");
          break;
        case "\\phase":
          node.setAttribute("notation", "phasorangle");
          break;
        case "\\sout":
          node.setAttribute("notation", "horizontalstrike");
          break;
        case "\\fbox":
          node.setAttribute("notation", "box");
          break;
        case "\\angl":
          node.setAttribute("notation", "actuarial");
          break;
        case "\\fcolorbox":
        case "\\colorbox":
          fboxsep = options.fontMetrics().fboxsep * options.fontMetrics().ptPerEm;
          node.setAttribute("width", "+" + 2 * fboxsep + "pt");
          node.setAttribute("height", "+" + 2 * fboxsep + "pt");
          node.setAttribute("lspace", fboxsep + "pt");
          node.setAttribute("voffset", fboxsep + "pt");
          if (group.label === "\\fcolorbox") {
            var thk = Math.max(
              options.fontMetrics().fboxrule,
              options.minRuleThickness
            );
            node.setAttribute("style", "border: " + thk + "em solid " + String(group.borderColor));
          }
          break;
        case "\\xcancel":
          node.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
          break;
      }
      if (group.backgroundColor) {
        node.setAttribute("mathbackground", group.backgroundColor);
      }
      return node;
    };
    defineFunction({
      type: "enclose",
      names: ["\\colorbox"],
      props: {
        numArgs: 2,
        allowedInText: true,
        argTypes: ["color", "text"]
      },
      handler(_ref, args, optArgs) {
        var {
          parser,
          funcName
        } = _ref;
        var color = assertNodeType(args[0], "color-token").color;
        var body = args[1];
        return {
          type: "enclose",
          mode: parser.mode,
          label: funcName,
          backgroundColor: color,
          body
        };
      },
      htmlBuilder: htmlBuilder$7,
      mathmlBuilder: mathmlBuilder$6
    });
    defineFunction({
      type: "enclose",
      names: ["\\fcolorbox"],
      props: {
        numArgs: 3,
        allowedInText: true,
        argTypes: ["color", "color", "text"]
      },
      handler(_ref2, args, optArgs) {
        var {
          parser,
          funcName
        } = _ref2;
        var borderColor = assertNodeType(args[0], "color-token").color;
        var backgroundColor = assertNodeType(args[1], "color-token").color;
        var body = args[2];
        return {
          type: "enclose",
          mode: parser.mode,
          label: funcName,
          backgroundColor,
          borderColor,
          body
        };
      },
      htmlBuilder: htmlBuilder$7,
      mathmlBuilder: mathmlBuilder$6
    });
    defineFunction({
      type: "enclose",
      names: ["\\fbox"],
      props: {
        numArgs: 1,
        argTypes: ["hbox"],
        allowedInText: true
      },
      handler(_ref3, args) {
        var {
          parser
        } = _ref3;
        return {
          type: "enclose",
          mode: parser.mode,
          label: "\\fbox",
          body: args[0]
        };
      }
    });
    defineFunction({
      type: "enclose",
      names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
      props: {
        numArgs: 1
      },
      handler(_ref4, args) {
        var {
          parser,
          funcName
        } = _ref4;
        var body = args[0];
        return {
          type: "enclose",
          mode: parser.mode,
          label: funcName,
          body
        };
      },
      htmlBuilder: htmlBuilder$7,
      mathmlBuilder: mathmlBuilder$6
    });
    defineFunction({
      type: "enclose",
      names: ["\\angl"],
      props: {
        numArgs: 1,
        argTypes: ["hbox"],
        allowedInText: false
      },
      handler(_ref5, args) {
        var {
          parser
        } = _ref5;
        return {
          type: "enclose",
          mode: parser.mode,
          label: "\\angl",
          body: args[0]
        };
      }
    });
    _environments = {};
    _macros = {};
    validateAmsEnvironmentContext = (context) => {
      var settings = context.parser.settings;
      if (!settings.displayMode) {
        throw new ParseError("{" + context.envName + "} can be used only in display mode.");
      }
    };
    htmlBuilder$6 = function htmlBuilder(group, options) {
      var r2;
      var c2;
      var nr = group.body.length;
      var hLinesBeforeRow = group.hLinesBeforeRow;
      var nc = 0;
      var body = new Array(nr);
      var hlines = [];
      var ruleThickness = Math.max(
        options.fontMetrics().arrayRuleWidth,
        options.minRuleThickness
      );
      var pt = 1 / options.fontMetrics().ptPerEm;
      var arraycolsep = 5 * pt;
      if (group.colSeparationType && group.colSeparationType === "small") {
        var localMultiplier = options.havingStyle(Style$1.SCRIPT).sizeMultiplier;
        arraycolsep = 0.2778 * (localMultiplier / options.sizeMultiplier);
      }
      var baselineskip = group.colSeparationType === "CD" ? calculateSize({
        number: 3,
        unit: "ex"
      }, options) : 12 * pt;
      var jot = 3 * pt;
      var arrayskip = group.arraystretch * baselineskip;
      var arstrutHeight = 0.7 * arrayskip;
      var arstrutDepth = 0.3 * arrayskip;
      var totalHeight = 0;
      function setHLinePos(hlinesInGap) {
        for (var i = 0; i < hlinesInGap.length; ++i) {
          if (i > 0) {
            totalHeight += 0.25;
          }
          hlines.push({
            pos: totalHeight,
            isDashed: hlinesInGap[i]
          });
        }
      }
      setHLinePos(hLinesBeforeRow[0]);
      for (r2 = 0; r2 < group.body.length; ++r2) {
        var inrow = group.body[r2];
        var height = arstrutHeight;
        var depth = arstrutDepth;
        if (nc < inrow.length) {
          nc = inrow.length;
        }
        var outrow = new Array(inrow.length);
        for (c2 = 0; c2 < inrow.length; ++c2) {
          var elt = buildGroup$1(inrow[c2], options);
          if (depth < elt.depth) {
            depth = elt.depth;
          }
          if (height < elt.height) {
            height = elt.height;
          }
          outrow[c2] = elt;
        }
        var rowGap = group.rowGaps[r2];
        var gap = 0;
        if (rowGap) {
          gap = calculateSize(rowGap, options);
          if (gap > 0) {
            gap += arstrutDepth;
            if (depth < gap) {
              depth = gap;
            }
            gap = 0;
          }
        }
        if (group.addJot) {
          depth += jot;
        }
        outrow.height = height;
        outrow.depth = depth;
        totalHeight += height;
        outrow.pos = totalHeight;
        totalHeight += depth + gap;
        body[r2] = outrow;
        setHLinePos(hLinesBeforeRow[r2 + 1]);
      }
      var offset = totalHeight / 2 + options.fontMetrics().axisHeight;
      var colDescriptions = group.cols || [];
      var cols = [];
      var colSep;
      var colDescrNum;
      var tagSpans = [];
      if (group.tags && group.tags.some((tag2) => tag2)) {
        for (r2 = 0; r2 < nr; ++r2) {
          var rw = body[r2];
          var shift = rw.pos - offset;
          var tag = group.tags[r2];
          var tagSpan = void 0;
          if (tag === true) {
            tagSpan = buildCommon.makeSpan(["eqn-num"], [], options);
          } else if (tag === false) {
            tagSpan = buildCommon.makeSpan([], [], options);
          } else {
            tagSpan = buildCommon.makeSpan([], buildExpression$1(tag, options, true), options);
          }
          tagSpan.depth = rw.depth;
          tagSpan.height = rw.height;
          tagSpans.push({
            type: "elem",
            elem: tagSpan,
            shift
          });
        }
      }
      for (c2 = 0, colDescrNum = 0; c2 < nc || colDescrNum < colDescriptions.length; ++c2, ++colDescrNum) {
        var colDescr = colDescriptions[colDescrNum] || {};
        var firstSeparator = true;
        while (colDescr.type === "separator") {
          if (!firstSeparator) {
            colSep = buildCommon.makeSpan(["arraycolsep"], []);
            colSep.style.width = makeEm(options.fontMetrics().doubleRuleSep);
            cols.push(colSep);
          }
          if (colDescr.separator === "|" || colDescr.separator === ":") {
            var lineType = colDescr.separator === "|" ? "solid" : "dashed";
            var separator = buildCommon.makeSpan(["vertical-separator"], [], options);
            separator.style.height = makeEm(totalHeight);
            separator.style.borderRightWidth = makeEm(ruleThickness);
            separator.style.borderRightStyle = lineType;
            separator.style.margin = "0 " + makeEm(-ruleThickness / 2);
            var _shift = totalHeight - offset;
            if (_shift) {
              separator.style.verticalAlign = makeEm(-_shift);
            }
            cols.push(separator);
          } else {
            throw new ParseError("Invalid separator type: " + colDescr.separator);
          }
          colDescrNum++;
          colDescr = colDescriptions[colDescrNum] || {};
          firstSeparator = false;
        }
        if (c2 >= nc) {
          continue;
        }
        var sepwidth = void 0;
        if (c2 > 0 || group.hskipBeforeAndAfter) {
          sepwidth = utils.deflt(colDescr.pregap, arraycolsep);
          if (sepwidth !== 0) {
            colSep = buildCommon.makeSpan(["arraycolsep"], []);
            colSep.style.width = makeEm(sepwidth);
            cols.push(colSep);
          }
        }
        var col = [];
        for (r2 = 0; r2 < nr; ++r2) {
          var row = body[r2];
          var elem = row[c2];
          if (!elem) {
            continue;
          }
          var _shift2 = row.pos - offset;
          elem.depth = row.depth;
          elem.height = row.height;
          col.push({
            type: "elem",
            elem,
            shift: _shift2
          });
        }
        col = buildCommon.makeVList({
          positionType: "individualShift",
          children: col
        }, options);
        col = buildCommon.makeSpan(["col-align-" + (colDescr.align || "c")], [col]);
        cols.push(col);
        if (c2 < nc - 1 || group.hskipBeforeAndAfter) {
          sepwidth = utils.deflt(colDescr.postgap, arraycolsep);
          if (sepwidth !== 0) {
            colSep = buildCommon.makeSpan(["arraycolsep"], []);
            colSep.style.width = makeEm(sepwidth);
            cols.push(colSep);
          }
        }
      }
      body = buildCommon.makeSpan(["mtable"], cols);
      if (hlines.length > 0) {
        var line = buildCommon.makeLineSpan("hline", options, ruleThickness);
        var dashes = buildCommon.makeLineSpan("hdashline", options, ruleThickness);
        var vListElems = [{
          type: "elem",
          elem: body,
          shift: 0
        }];
        while (hlines.length > 0) {
          var hline = hlines.pop();
          var lineShift = hline.pos - offset;
          if (hline.isDashed) {
            vListElems.push({
              type: "elem",
              elem: dashes,
              shift: lineShift
            });
          } else {
            vListElems.push({
              type: "elem",
              elem: line,
              shift: lineShift
            });
          }
        }
        body = buildCommon.makeVList({
          positionType: "individualShift",
          children: vListElems
        }, options);
      }
      if (tagSpans.length === 0) {
        return buildCommon.makeSpan(["mord"], [body], options);
      } else {
        var eqnNumCol = buildCommon.makeVList({
          positionType: "individualShift",
          children: tagSpans
        }, options);
        eqnNumCol = buildCommon.makeSpan(["tag"], [eqnNumCol], options);
        return buildCommon.makeFragment([body, eqnNumCol]);
      }
    };
    alignMap = {
      c: "center ",
      l: "left ",
      r: "right "
    };
    mathmlBuilder$5 = function mathmlBuilder(group, options) {
      var tbl = [];
      var glue = new mathMLTree.MathNode("mtd", [], ["mtr-glue"]);
      var tag = new mathMLTree.MathNode("mtd", [], ["mml-eqn-num"]);
      for (var i = 0; i < group.body.length; i++) {
        var rw = group.body[i];
        var row = [];
        for (var j2 = 0; j2 < rw.length; j2++) {
          row.push(new mathMLTree.MathNode("mtd", [buildGroup2(rw[j2], options)]));
        }
        if (group.tags && group.tags[i]) {
          row.unshift(glue);
          row.push(glue);
          if (group.leqno) {
            row.unshift(tag);
          } else {
            row.push(tag);
          }
        }
        tbl.push(new mathMLTree.MathNode("mtr", row));
      }
      var table = new mathMLTree.MathNode("mtable", tbl);
      var gap = group.arraystretch === 0.5 ? 0.1 : 0.16 + group.arraystretch - 1 + (group.addJot ? 0.09 : 0);
      table.setAttribute("rowspacing", makeEm(gap));
      var menclose = "";
      var align = "";
      if (group.cols && group.cols.length > 0) {
        var cols = group.cols;
        var columnLines = "";
        var prevTypeWasAlign = false;
        var iStart = 0;
        var iEnd = cols.length;
        if (cols[0].type === "separator") {
          menclose += "top ";
          iStart = 1;
        }
        if (cols[cols.length - 1].type === "separator") {
          menclose += "bottom ";
          iEnd -= 1;
        }
        for (var _i = iStart; _i < iEnd; _i++) {
          if (cols[_i].type === "align") {
            align += alignMap[cols[_i].align];
            if (prevTypeWasAlign) {
              columnLines += "none ";
            }
            prevTypeWasAlign = true;
          } else if (cols[_i].type === "separator") {
            if (prevTypeWasAlign) {
              columnLines += cols[_i].separator === "|" ? "solid " : "dashed ";
              prevTypeWasAlign = false;
            }
          }
        }
        table.setAttribute("columnalign", align.trim());
        if (/[sd]/.test(columnLines)) {
          table.setAttribute("columnlines", columnLines.trim());
        }
      }
      if (group.colSeparationType === "align") {
        var _cols = group.cols || [];
        var spacing2 = "";
        for (var _i2 = 1; _i2 < _cols.length; _i2++) {
          spacing2 += _i2 % 2 ? "0em " : "1em ";
        }
        table.setAttribute("columnspacing", spacing2.trim());
      } else if (group.colSeparationType === "alignat" || group.colSeparationType === "gather") {
        table.setAttribute("columnspacing", "0em");
      } else if (group.colSeparationType === "small") {
        table.setAttribute("columnspacing", "0.2778em");
      } else if (group.colSeparationType === "CD") {
        table.setAttribute("columnspacing", "0.5em");
      } else {
        table.setAttribute("columnspacing", "1em");
      }
      var rowLines = "";
      var hlines = group.hLinesBeforeRow;
      menclose += hlines[0].length > 0 ? "left " : "";
      menclose += hlines[hlines.length - 1].length > 0 ? "right " : "";
      for (var _i3 = 1; _i3 < hlines.length - 1; _i3++) {
        rowLines += hlines[_i3].length === 0 ? "none " : hlines[_i3][0] ? "dashed " : "solid ";
      }
      if (/[sd]/.test(rowLines)) {
        table.setAttribute("rowlines", rowLines.trim());
      }
      if (menclose !== "") {
        table = new mathMLTree.MathNode("menclose", [table]);
        table.setAttribute("notation", menclose.trim());
      }
      if (group.arraystretch && group.arraystretch < 1) {
        table = new mathMLTree.MathNode("mstyle", [table]);
        table.setAttribute("scriptlevel", "1");
      }
      return table;
    };
    alignedHandler = function alignedHandler2(context, args) {
      if (context.envName.indexOf("ed") === -1) {
        validateAmsEnvironmentContext(context);
      }
      var cols = [];
      var separationType = context.envName.indexOf("at") > -1 ? "alignat" : "align";
      var isSplit = context.envName === "split";
      var res = parseArray(context.parser, {
        cols,
        addJot: true,
        autoTag: isSplit ? void 0 : getAutoTag(context.envName),
        emptySingleRow: true,
        colSeparationType: separationType,
        maxNumCols: isSplit ? 2 : void 0,
        leqno: context.parser.settings.leqno
      }, "display");
      var numMaths;
      var numCols = 0;
      var emptyGroup = {
        type: "ordgroup",
        mode: context.mode,
        body: []
      };
      if (args[0] && args[0].type === "ordgroup") {
        var arg0 = "";
        for (var i = 0; i < args[0].body.length; i++) {
          var textord2 = assertNodeType(args[0].body[i], "textord");
          arg0 += textord2.text;
        }
        numMaths = Number(arg0);
        numCols = numMaths * 2;
      }
      var isAligned = !numCols;
      res.body.forEach(function(row) {
        for (var _i4 = 1; _i4 < row.length; _i4 += 2) {
          var styling = assertNodeType(row[_i4], "styling");
          var ordgroup = assertNodeType(styling.body[0], "ordgroup");
          ordgroup.body.unshift(emptyGroup);
        }
        if (!isAligned) {
          var curMaths = row.length / 2;
          if (numMaths < curMaths) {
            throw new ParseError("Too many math in a row: " + ("expected " + numMaths + ", but got " + curMaths), row[0]);
          }
        } else if (numCols < row.length) {
          numCols = row.length;
        }
      });
      for (var _i5 = 0; _i5 < numCols; ++_i5) {
        var align = "r";
        var pregap = 0;
        if (_i5 % 2 === 1) {
          align = "l";
        } else if (_i5 > 0 && isAligned) {
          pregap = 1;
        }
        cols[_i5] = {
          type: "align",
          align,
          pregap,
          postgap: 0
        };
      }
      res.colSeparationType = isAligned ? "align" : "alignat";
      return res;
    };
    defineEnvironment({
      type: "array",
      names: ["array", "darray"],
      props: {
        numArgs: 1
      },
      handler(context, args) {
        var symNode = checkSymbolNodeType(args[0]);
        var colalign = symNode ? [args[0]] : assertNodeType(args[0], "ordgroup").body;
        var cols = colalign.map(function(nde) {
          var node = assertSymbolNodeType(nde);
          var ca = node.text;
          if ("lcr".indexOf(ca) !== -1) {
            return {
              type: "align",
              align: ca
            };
          } else if (ca === "|") {
            return {
              type: "separator",
              separator: "|"
            };
          } else if (ca === ":") {
            return {
              type: "separator",
              separator: ":"
            };
          }
          throw new ParseError("Unknown column alignment: " + ca, nde);
        });
        var res = {
          cols,
          hskipBeforeAndAfter: true,
          maxNumCols: cols.length
        };
        return parseArray(context.parser, res, dCellStyle(context.envName));
      },
      htmlBuilder: htmlBuilder$6,
      mathmlBuilder: mathmlBuilder$5
    });
    defineEnvironment({
      type: "array",
      names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
      props: {
        numArgs: 0
      },
      handler(context) {
        var delimiters2 = {
          "matrix": null,
          "pmatrix": ["(", ")"],
          "bmatrix": ["[", "]"],
          "Bmatrix": ["\\{", "\\}"],
          "vmatrix": ["|", "|"],
          "Vmatrix": ["\\Vert", "\\Vert"]
        }[context.envName.replace("*", "")];
        var colAlign = "c";
        var payload = {
          hskipBeforeAndAfter: false,
          cols: [{
            type: "align",
            align: colAlign
          }]
        };
        if (context.envName.charAt(context.envName.length - 1) === "*") {
          var parser = context.parser;
          parser.consumeSpaces();
          if (parser.fetch().text === "[") {
            parser.consume();
            parser.consumeSpaces();
            colAlign = parser.fetch().text;
            if ("lcr".indexOf(colAlign) === -1) {
              throw new ParseError("Expected l or c or r", parser.nextToken);
            }
            parser.consume();
            parser.consumeSpaces();
            parser.expect("]");
            parser.consume();
            payload.cols = [{
              type: "align",
              align: colAlign
            }];
          }
        }
        var res = parseArray(context.parser, payload, dCellStyle(context.envName));
        var numCols = Math.max(0, ...res.body.map((row) => row.length));
        res.cols = new Array(numCols).fill({
          type: "align",
          align: colAlign
        });
        return delimiters2 ? {
          type: "leftright",
          mode: context.mode,
          body: [res],
          left: delimiters2[0],
          right: delimiters2[1],
          rightColor: void 0
        } : res;
      },
      htmlBuilder: htmlBuilder$6,
      mathmlBuilder: mathmlBuilder$5
    });
    defineEnvironment({
      type: "array",
      names: ["smallmatrix"],
      props: {
        numArgs: 0
      },
      handler(context) {
        var payload = {
          arraystretch: 0.5
        };
        var res = parseArray(context.parser, payload, "script");
        res.colSeparationType = "small";
        return res;
      },
      htmlBuilder: htmlBuilder$6,
      mathmlBuilder: mathmlBuilder$5
    });
    defineEnvironment({
      type: "array",
      names: ["subarray"],
      props: {
        numArgs: 1
      },
      handler(context, args) {
        var symNode = checkSymbolNodeType(args[0]);
        var colalign = symNode ? [args[0]] : assertNodeType(args[0], "ordgroup").body;
        var cols = colalign.map(function(nde) {
          var node = assertSymbolNodeType(nde);
          var ca = node.text;
          if ("lc".indexOf(ca) !== -1) {
            return {
              type: "align",
              align: ca
            };
          }
          throw new ParseError("Unknown column alignment: " + ca, nde);
        });
        if (cols.length > 1) {
          throw new ParseError("{subarray} can contain only one column");
        }
        var res = {
          cols,
          hskipBeforeAndAfter: false,
          arraystretch: 0.5
        };
        res = parseArray(context.parser, res, "script");
        if (res.body.length > 0 && res.body[0].length > 1) {
          throw new ParseError("{subarray} can contain only one column");
        }
        return res;
      },
      htmlBuilder: htmlBuilder$6,
      mathmlBuilder: mathmlBuilder$5
    });
    defineEnvironment({
      type: "array",
      names: ["cases", "dcases", "rcases", "drcases"],
      props: {
        numArgs: 0
      },
      handler(context) {
        var payload = {
          arraystretch: 1.2,
          cols: [{
            type: "align",
            align: "l",
            pregap: 0,
            postgap: 1
          }, {
            type: "align",
            align: "l",
            pregap: 0,
            postgap: 0
          }]
        };
        var res = parseArray(context.parser, payload, dCellStyle(context.envName));
        return {
          type: "leftright",
          mode: context.mode,
          body: [res],
          left: context.envName.indexOf("r") > -1 ? "." : "\\{",
          right: context.envName.indexOf("r") > -1 ? "\\}" : ".",
          rightColor: void 0
        };
      },
      htmlBuilder: htmlBuilder$6,
      mathmlBuilder: mathmlBuilder$5
    });
    defineEnvironment({
      type: "array",
      names: ["align", "align*", "aligned", "split"],
      props: {
        numArgs: 0
      },
      handler: alignedHandler,
      htmlBuilder: htmlBuilder$6,
      mathmlBuilder: mathmlBuilder$5
    });
    defineEnvironment({
      type: "array",
      names: ["gathered", "gather", "gather*"],
      props: {
        numArgs: 0
      },
      handler(context) {
        if (utils.contains(["gather", "gather*"], context.envName)) {
          validateAmsEnvironmentContext(context);
        }
        var res = {
          cols: [{
            type: "align",
            align: "c"
          }],
          addJot: true,
          colSeparationType: "gather",
          autoTag: getAutoTag(context.envName),
          emptySingleRow: true,
          leqno: context.parser.settings.leqno
        };
        return parseArray(context.parser, res, "display");
      },
      htmlBuilder: htmlBuilder$6,
      mathmlBuilder: mathmlBuilder$5
    });
    defineEnvironment({
      type: "array",
      names: ["alignat", "alignat*", "alignedat"],
      props: {
        numArgs: 1
      },
      handler: alignedHandler,
      htmlBuilder: htmlBuilder$6,
      mathmlBuilder: mathmlBuilder$5
    });
    defineEnvironment({
      type: "array",
      names: ["equation", "equation*"],
      props: {
        numArgs: 0
      },
      handler(context) {
        validateAmsEnvironmentContext(context);
        var res = {
          autoTag: getAutoTag(context.envName),
          emptySingleRow: true,
          singleRow: true,
          maxNumCols: 1,
          leqno: context.parser.settings.leqno
        };
        return parseArray(context.parser, res, "display");
      },
      htmlBuilder: htmlBuilder$6,
      mathmlBuilder: mathmlBuilder$5
    });
    defineEnvironment({
      type: "array",
      names: ["CD"],
      props: {
        numArgs: 0
      },
      handler(context) {
        validateAmsEnvironmentContext(context);
        return parseCD(context.parser);
      },
      htmlBuilder: htmlBuilder$6,
      mathmlBuilder: mathmlBuilder$5
    });
    defineMacro("\\nonumber", "\\gdef\\@eqnsw{0}");
    defineMacro("\\notag", "\\nonumber");
    defineFunction({
      type: "text",
      names: ["\\hline", "\\hdashline"],
      props: {
        numArgs: 0,
        allowedInText: true,
        allowedInMath: true
      },
      handler(context, args) {
        throw new ParseError(context.funcName + " valid only within array environment");
      }
    });
    environments = _environments;
    defineFunction({
      type: "environment",
      names: ["\\begin", "\\end"],
      props: {
        numArgs: 1,
        argTypes: ["text"]
      },
      handler(_ref, args) {
        var {
          parser,
          funcName
        } = _ref;
        var nameGroup = args[0];
        if (nameGroup.type !== "ordgroup") {
          throw new ParseError("Invalid environment name", nameGroup);
        }
        var envName = "";
        for (var i = 0; i < nameGroup.body.length; ++i) {
          envName += assertNodeType(nameGroup.body[i], "textord").text;
        }
        if (funcName === "\\begin") {
          if (!environments.hasOwnProperty(envName)) {
            throw new ParseError("No such environment: " + envName, nameGroup);
          }
          var env = environments[envName];
          var {
            args: _args,
            optArgs
          } = parser.parseArguments("\\begin{" + envName + "}", env);
          var context = {
            mode: parser.mode,
            envName,
            parser
          };
          var result = env.handler(context, _args, optArgs);
          parser.expect("\\end", false);
          var endNameToken = parser.nextToken;
          var end = assertNodeType(parser.parseFunction(), "environment");
          if (end.name !== envName) {
            throw new ParseError("Mismatch: \\begin{" + envName + "} matched by \\end{" + end.name + "}", endNameToken);
          }
          return result;
        }
        return {
          type: "environment",
          mode: parser.mode,
          name: envName,
          nameGroup
        };
      }
    });
    htmlBuilder$5 = (group, options) => {
      var font = group.font;
      var newOptions = options.withFont(font);
      return buildGroup$1(group.body, newOptions);
    };
    mathmlBuilder$4 = (group, options) => {
      var font = group.font;
      var newOptions = options.withFont(font);
      return buildGroup2(group.body, newOptions);
    };
    fontAliases = {
      "\\Bbb": "\\mathbb",
      "\\bold": "\\mathbf",
      "\\frak": "\\mathfrak",
      "\\bm": "\\boldsymbol"
    };
    defineFunction({
      type: "font",
      names: [
        "\\mathrm",
        "\\mathit",
        "\\mathbf",
        "\\mathnormal",
        "\\mathbb",
        "\\mathcal",
        "\\mathfrak",
        "\\mathscr",
        "\\mathsf",
        "\\mathtt",
        "\\Bbb",
        "\\bold",
        "\\frak"
      ],
      props: {
        numArgs: 1,
        allowedInArgument: true
      },
      handler: (_ref, args) => {
        var {
          parser,
          funcName
        } = _ref;
        var body = normalizeArgument(args[0]);
        var func = funcName;
        if (func in fontAliases) {
          func = fontAliases[func];
        }
        return {
          type: "font",
          mode: parser.mode,
          font: func.slice(1),
          body
        };
      },
      htmlBuilder: htmlBuilder$5,
      mathmlBuilder: mathmlBuilder$4
    });
    defineFunction({
      type: "mclass",
      names: ["\\boldsymbol", "\\bm"],
      props: {
        numArgs: 1
      },
      handler: (_ref2, args) => {
        var {
          parser
        } = _ref2;
        var body = args[0];
        var isCharacterBox3 = utils.isCharacterBox(body);
        return {
          type: "mclass",
          mode: parser.mode,
          mclass: binrelClass(body),
          body: [{
            type: "font",
            mode: parser.mode,
            font: "boldsymbol",
            body
          }],
          isCharacterBox: isCharacterBox3
        };
      }
    });
    defineFunction({
      type: "font",
      names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
      props: {
        numArgs: 0,
        allowedInText: true
      },
      handler: (_ref3, args) => {
        var {
          parser,
          funcName,
          breakOnTokenText
        } = _ref3;
        var {
          mode
        } = parser;
        var body = parser.parseExpression(true, breakOnTokenText);
        var style = "math" + funcName.slice(1);
        return {
          type: "font",
          mode,
          font: style,
          body: {
            type: "ordgroup",
            mode: parser.mode,
            body
          }
        };
      },
      htmlBuilder: htmlBuilder$5,
      mathmlBuilder: mathmlBuilder$4
    });
    adjustStyle = (size, originalStyle) => {
      var style = originalStyle;
      if (size === "display") {
        style = style.id >= Style$1.SCRIPT.id ? style.text() : Style$1.DISPLAY;
      } else if (size === "text" && style.size === Style$1.DISPLAY.size) {
        style = Style$1.TEXT;
      } else if (size === "script") {
        style = Style$1.SCRIPT;
      } else if (size === "scriptscript") {
        style = Style$1.SCRIPTSCRIPT;
      }
      return style;
    };
    htmlBuilder$4 = (group, options) => {
      var style = adjustStyle(group.size, options.style);
      var nstyle = style.fracNum();
      var dstyle = style.fracDen();
      var newOptions;
      newOptions = options.havingStyle(nstyle);
      var numerm = buildGroup$1(group.numer, newOptions, options);
      if (group.continued) {
        var hStrut = 8.5 / options.fontMetrics().ptPerEm;
        var dStrut = 3.5 / options.fontMetrics().ptPerEm;
        numerm.height = numerm.height < hStrut ? hStrut : numerm.height;
        numerm.depth = numerm.depth < dStrut ? dStrut : numerm.depth;
      }
      newOptions = options.havingStyle(dstyle);
      var denomm = buildGroup$1(group.denom, newOptions, options);
      var rule;
      var ruleWidth;
      var ruleSpacing;
      if (group.hasBarLine) {
        if (group.barSize) {
          ruleWidth = calculateSize(group.barSize, options);
          rule = buildCommon.makeLineSpan("frac-line", options, ruleWidth);
        } else {
          rule = buildCommon.makeLineSpan("frac-line", options);
        }
        ruleWidth = rule.height;
        ruleSpacing = rule.height;
      } else {
        rule = null;
        ruleWidth = 0;
        ruleSpacing = options.fontMetrics().defaultRuleThickness;
      }
      var numShift;
      var clearance;
      var denomShift;
      if (style.size === Style$1.DISPLAY.size || group.size === "display") {
        numShift = options.fontMetrics().num1;
        if (ruleWidth > 0) {
          clearance = 3 * ruleSpacing;
        } else {
          clearance = 7 * ruleSpacing;
        }
        denomShift = options.fontMetrics().denom1;
      } else {
        if (ruleWidth > 0) {
          numShift = options.fontMetrics().num2;
          clearance = ruleSpacing;
        } else {
          numShift = options.fontMetrics().num3;
          clearance = 3 * ruleSpacing;
        }
        denomShift = options.fontMetrics().denom2;
      }
      var frac;
      if (!rule) {
        var candidateClearance = numShift - numerm.depth - (denomm.height - denomShift);
        if (candidateClearance < clearance) {
          numShift += 0.5 * (clearance - candidateClearance);
          denomShift += 0.5 * (clearance - candidateClearance);
        }
        frac = buildCommon.makeVList({
          positionType: "individualShift",
          children: [{
            type: "elem",
            elem: denomm,
            shift: denomShift
          }, {
            type: "elem",
            elem: numerm,
            shift: -numShift
          }]
        }, options);
      } else {
        var axisHeight = options.fontMetrics().axisHeight;
        if (numShift - numerm.depth - (axisHeight + 0.5 * ruleWidth) < clearance) {
          numShift += clearance - (numShift - numerm.depth - (axisHeight + 0.5 * ruleWidth));
        }
        if (axisHeight - 0.5 * ruleWidth - (denomm.height - denomShift) < clearance) {
          denomShift += clearance - (axisHeight - 0.5 * ruleWidth - (denomm.height - denomShift));
        }
        var midShift = -(axisHeight - 0.5 * ruleWidth);
        frac = buildCommon.makeVList({
          positionType: "individualShift",
          children: [{
            type: "elem",
            elem: denomm,
            shift: denomShift
          }, {
            type: "elem",
            elem: rule,
            shift: midShift
          }, {
            type: "elem",
            elem: numerm,
            shift: -numShift
          }]
        }, options);
      }
      newOptions = options.havingStyle(style);
      frac.height *= newOptions.sizeMultiplier / options.sizeMultiplier;
      frac.depth *= newOptions.sizeMultiplier / options.sizeMultiplier;
      var delimSize;
      if (style.size === Style$1.DISPLAY.size) {
        delimSize = options.fontMetrics().delim1;
      } else if (style.size === Style$1.SCRIPTSCRIPT.size) {
        delimSize = options.havingStyle(Style$1.SCRIPT).fontMetrics().delim2;
      } else {
        delimSize = options.fontMetrics().delim2;
      }
      var leftDelim;
      var rightDelim;
      if (group.leftDelim == null) {
        leftDelim = makeNullDelimiter(options, ["mopen"]);
      } else {
        leftDelim = delimiter.customSizedDelim(group.leftDelim, delimSize, true, options.havingStyle(style), group.mode, ["mopen"]);
      }
      if (group.continued) {
        rightDelim = buildCommon.makeSpan([]);
      } else if (group.rightDelim == null) {
        rightDelim = makeNullDelimiter(options, ["mclose"]);
      } else {
        rightDelim = delimiter.customSizedDelim(group.rightDelim, delimSize, true, options.havingStyle(style), group.mode, ["mclose"]);
      }
      return buildCommon.makeSpan(["mord"].concat(newOptions.sizingClasses(options)), [leftDelim, buildCommon.makeSpan(["mfrac"], [frac]), rightDelim], options);
    };
    mathmlBuilder$3 = (group, options) => {
      var node = new mathMLTree.MathNode("mfrac", [buildGroup2(group.numer, options), buildGroup2(group.denom, options)]);
      if (!group.hasBarLine) {
        node.setAttribute("linethickness", "0px");
      } else if (group.barSize) {
        var ruleWidth = calculateSize(group.barSize, options);
        node.setAttribute("linethickness", makeEm(ruleWidth));
      }
      var style = adjustStyle(group.size, options.style);
      if (style.size !== options.style.size) {
        node = new mathMLTree.MathNode("mstyle", [node]);
        var isDisplay = style.size === Style$1.DISPLAY.size ? "true" : "false";
        node.setAttribute("displaystyle", isDisplay);
        node.setAttribute("scriptlevel", "0");
      }
      if (group.leftDelim != null || group.rightDelim != null) {
        var withDelims = [];
        if (group.leftDelim != null) {
          var leftOp = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode(group.leftDelim.replace("\\", ""))]);
          leftOp.setAttribute("fence", "true");
          withDelims.push(leftOp);
        }
        withDelims.push(node);
        if (group.rightDelim != null) {
          var rightOp = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode(group.rightDelim.replace("\\", ""))]);
          rightOp.setAttribute("fence", "true");
          withDelims.push(rightOp);
        }
        return makeRow(withDelims);
      }
      return node;
    };
    defineFunction({
      type: "genfrac",
      names: [
        "\\dfrac",
        "\\frac",
        "\\tfrac",
        "\\dbinom",
        "\\binom",
        "\\tbinom",
        "\\\\atopfrac",
        "\\\\bracefrac",
        "\\\\brackfrac"
      ],
      props: {
        numArgs: 2,
        allowedInArgument: true
      },
      handler: (_ref, args) => {
        var {
          parser,
          funcName
        } = _ref;
        var numer = args[0];
        var denom = args[1];
        var hasBarLine;
        var leftDelim = null;
        var rightDelim = null;
        var size = "auto";
        switch (funcName) {
          case "\\dfrac":
          case "\\frac":
          case "\\tfrac":
            hasBarLine = true;
            break;
          case "\\\\atopfrac":
            hasBarLine = false;
            break;
          case "\\dbinom":
          case "\\binom":
          case "\\tbinom":
            hasBarLine = false;
            leftDelim = "(";
            rightDelim = ")";
            break;
          case "\\\\bracefrac":
            hasBarLine = false;
            leftDelim = "\\{";
            rightDelim = "\\}";
            break;
          case "\\\\brackfrac":
            hasBarLine = false;
            leftDelim = "[";
            rightDelim = "]";
            break;
          default:
            throw new Error("Unrecognized genfrac command");
        }
        switch (funcName) {
          case "\\dfrac":
          case "\\dbinom":
            size = "display";
            break;
          case "\\tfrac":
          case "\\tbinom":
            size = "text";
            break;
        }
        return {
          type: "genfrac",
          mode: parser.mode,
          continued: false,
          numer,
          denom,
          hasBarLine,
          leftDelim,
          rightDelim,
          size,
          barSize: null
        };
      },
      htmlBuilder: htmlBuilder$4,
      mathmlBuilder: mathmlBuilder$3
    });
    defineFunction({
      type: "genfrac",
      names: ["\\cfrac"],
      props: {
        numArgs: 2
      },
      handler: (_ref2, args) => {
        var {
          parser,
          funcName
        } = _ref2;
        var numer = args[0];
        var denom = args[1];
        return {
          type: "genfrac",
          mode: parser.mode,
          continued: true,
          numer,
          denom,
          hasBarLine: true,
          leftDelim: null,
          rightDelim: null,
          size: "display",
          barSize: null
        };
      }
    });
    defineFunction({
      type: "infix",
      names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
      props: {
        numArgs: 0,
        infix: true
      },
      handler(_ref3) {
        var {
          parser,
          funcName,
          token
        } = _ref3;
        var replaceWith;
        switch (funcName) {
          case "\\over":
            replaceWith = "\\frac";
            break;
          case "\\choose":
            replaceWith = "\\binom";
            break;
          case "\\atop":
            replaceWith = "\\\\atopfrac";
            break;
          case "\\brace":
            replaceWith = "\\\\bracefrac";
            break;
          case "\\brack":
            replaceWith = "\\\\brackfrac";
            break;
          default:
            throw new Error("Unrecognized infix genfrac command");
        }
        return {
          type: "infix",
          mode: parser.mode,
          replaceWith,
          token
        };
      }
    });
    stylArray = ["display", "text", "script", "scriptscript"];
    delimFromValue = function delimFromValue2(delimString) {
      var delim = null;
      if (delimString.length > 0) {
        delim = delimString;
        delim = delim === "." ? null : delim;
      }
      return delim;
    };
    defineFunction({
      type: "genfrac",
      names: ["\\genfrac"],
      props: {
        numArgs: 6,
        allowedInArgument: true,
        argTypes: ["math", "math", "size", "text", "math", "math"]
      },
      handler(_ref4, args) {
        var {
          parser
        } = _ref4;
        var numer = args[4];
        var denom = args[5];
        var leftNode = normalizeArgument(args[0]);
        var leftDelim = leftNode.type === "atom" && leftNode.family === "open" ? delimFromValue(leftNode.text) : null;
        var rightNode = normalizeArgument(args[1]);
        var rightDelim = rightNode.type === "atom" && rightNode.family === "close" ? delimFromValue(rightNode.text) : null;
        var barNode = assertNodeType(args[2], "size");
        var hasBarLine;
        var barSize = null;
        if (barNode.isBlank) {
          hasBarLine = true;
        } else {
          barSize = barNode.value;
          hasBarLine = barSize.number > 0;
        }
        var size = "auto";
        var styl = args[3];
        if (styl.type === "ordgroup") {
          if (styl.body.length > 0) {
            var textOrd = assertNodeType(styl.body[0], "textord");
            size = stylArray[Number(textOrd.text)];
          }
        } else {
          styl = assertNodeType(styl, "textord");
          size = stylArray[Number(styl.text)];
        }
        return {
          type: "genfrac",
          mode: parser.mode,
          numer,
          denom,
          continued: false,
          hasBarLine,
          barSize,
          leftDelim,
          rightDelim,
          size
        };
      },
      htmlBuilder: htmlBuilder$4,
      mathmlBuilder: mathmlBuilder$3
    });
    defineFunction({
      type: "infix",
      names: ["\\above"],
      props: {
        numArgs: 1,
        argTypes: ["size"],
        infix: true
      },
      handler(_ref5, args) {
        var {
          parser,
          funcName,
          token
        } = _ref5;
        return {
          type: "infix",
          mode: parser.mode,
          replaceWith: "\\\\abovefrac",
          size: assertNodeType(args[0], "size").value,
          token
        };
      }
    });
    defineFunction({
      type: "genfrac",
      names: ["\\\\abovefrac"],
      props: {
        numArgs: 3,
        argTypes: ["math", "size", "math"]
      },
      handler: (_ref6, args) => {
        var {
          parser,
          funcName
        } = _ref6;
        var numer = args[0];
        var barSize = assert(assertNodeType(args[1], "infix").size);
        var denom = args[2];
        var hasBarLine = barSize.number > 0;
        return {
          type: "genfrac",
          mode: parser.mode,
          numer,
          denom,
          continued: false,
          hasBarLine,
          barSize,
          leftDelim: null,
          rightDelim: null,
          size: "auto"
        };
      },
      htmlBuilder: htmlBuilder$4,
      mathmlBuilder: mathmlBuilder$3
    });
    htmlBuilder$3 = (grp, options) => {
      var style = options.style;
      var supSubGroup;
      var group;
      if (grp.type === "supsub") {
        supSubGroup = grp.sup ? buildGroup$1(grp.sup, options.havingStyle(style.sup()), options) : buildGroup$1(grp.sub, options.havingStyle(style.sub()), options);
        group = assertNodeType(grp.base, "horizBrace");
      } else {
        group = assertNodeType(grp, "horizBrace");
      }
      var body = buildGroup$1(group.base, options.havingBaseStyle(Style$1.DISPLAY));
      var braceBody = stretchy.svgSpan(group, options);
      var vlist;
      if (group.isOver) {
        vlist = buildCommon.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: body
          }, {
            type: "kern",
            size: 0.1
          }, {
            type: "elem",
            elem: braceBody
          }]
        }, options);
        vlist.children[0].children[0].children[1].classes.push("svg-align");
      } else {
        vlist = buildCommon.makeVList({
          positionType: "bottom",
          positionData: body.depth + 0.1 + braceBody.height,
          children: [{
            type: "elem",
            elem: braceBody
          }, {
            type: "kern",
            size: 0.1
          }, {
            type: "elem",
            elem: body
          }]
        }, options);
        vlist.children[0].children[0].children[0].classes.push("svg-align");
      }
      if (supSubGroup) {
        var vSpan = buildCommon.makeSpan(["mord", group.isOver ? "mover" : "munder"], [vlist], options);
        if (group.isOver) {
          vlist = buildCommon.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: vSpan
            }, {
              type: "kern",
              size: 0.2
            }, {
              type: "elem",
              elem: supSubGroup
            }]
          }, options);
        } else {
          vlist = buildCommon.makeVList({
            positionType: "bottom",
            positionData: vSpan.depth + 0.2 + supSubGroup.height + supSubGroup.depth,
            children: [{
              type: "elem",
              elem: supSubGroup
            }, {
              type: "kern",
              size: 0.2
            }, {
              type: "elem",
              elem: vSpan
            }]
          }, options);
        }
      }
      return buildCommon.makeSpan(["mord", group.isOver ? "mover" : "munder"], [vlist], options);
    };
    mathmlBuilder$2 = (group, options) => {
      var accentNode = stretchy.mathMLnode(group.label);
      return new mathMLTree.MathNode(group.isOver ? "mover" : "munder", [buildGroup2(group.base, options), accentNode]);
    };
    defineFunction({
      type: "horizBrace",
      names: ["\\overbrace", "\\underbrace"],
      props: {
        numArgs: 1
      },
      handler(_ref, args) {
        var {
          parser,
          funcName
        } = _ref;
        return {
          type: "horizBrace",
          mode: parser.mode,
          label: funcName,
          isOver: /^\\over/.test(funcName),
          base: args[0]
        };
      },
      htmlBuilder: htmlBuilder$3,
      mathmlBuilder: mathmlBuilder$2
    });
    defineFunction({
      type: "href",
      names: ["\\href"],
      props: {
        numArgs: 2,
        argTypes: ["url", "original"],
        allowedInText: true
      },
      handler: (_ref, args) => {
        var {
          parser
        } = _ref;
        var body = args[1];
        var href = assertNodeType(args[0], "url").url;
        if (!parser.settings.isTrusted({
          command: "\\href",
          url: href
        })) {
          return parser.formatUnsupportedCmd("\\href");
        }
        return {
          type: "href",
          mode: parser.mode,
          href,
          body: ordargument(body)
        };
      },
      htmlBuilder: (group, options) => {
        var elements = buildExpression$1(group.body, options, false);
        return buildCommon.makeAnchor(group.href, [], elements, options);
      },
      mathmlBuilder: (group, options) => {
        var math2 = buildExpressionRow(group.body, options);
        if (!(math2 instanceof MathNode)) {
          math2 = new MathNode("mrow", [math2]);
        }
        math2.setAttribute("href", group.href);
        return math2;
      }
    });
    defineFunction({
      type: "href",
      names: ["\\url"],
      props: {
        numArgs: 1,
        argTypes: ["url"],
        allowedInText: true
      },
      handler: (_ref2, args) => {
        var {
          parser
        } = _ref2;
        var href = assertNodeType(args[0], "url").url;
        if (!parser.settings.isTrusted({
          command: "\\url",
          url: href
        })) {
          return parser.formatUnsupportedCmd("\\url");
        }
        var chars3 = [];
        for (var i = 0; i < href.length; i++) {
          var c2 = href[i];
          if (c2 === "~") {
            c2 = "\\textasciitilde";
          }
          chars3.push({
            type: "textord",
            mode: "text",
            text: c2
          });
        }
        var body = {
          type: "text",
          mode: parser.mode,
          font: "\\texttt",
          body: chars3
        };
        return {
          type: "href",
          mode: parser.mode,
          href,
          body: ordargument(body)
        };
      }
    });
    defineFunction({
      type: "hbox",
      names: ["\\hbox"],
      props: {
        numArgs: 1,
        argTypes: ["text"],
        allowedInText: true,
        primitive: true
      },
      handler(_ref, args) {
        var {
          parser
        } = _ref;
        return {
          type: "hbox",
          mode: parser.mode,
          body: ordargument(args[0])
        };
      },
      htmlBuilder(group, options) {
        var elements = buildExpression$1(group.body, options, false);
        return buildCommon.makeFragment(elements);
      },
      mathmlBuilder(group, options) {
        return new mathMLTree.MathNode("mrow", buildExpression2(group.body, options));
      }
    });
    defineFunction({
      type: "html",
      names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
      props: {
        numArgs: 2,
        argTypes: ["raw", "original"],
        allowedInText: true
      },
      handler: (_ref, args) => {
        var {
          parser,
          funcName,
          token
        } = _ref;
        var value = assertNodeType(args[0], "raw").string;
        var body = args[1];
        if (parser.settings.strict) {
          parser.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
        }
        var trustContext;
        var attributes = {};
        switch (funcName) {
          case "\\htmlClass":
            attributes.class = value;
            trustContext = {
              command: "\\htmlClass",
              class: value
            };
            break;
          case "\\htmlId":
            attributes.id = value;
            trustContext = {
              command: "\\htmlId",
              id: value
            };
            break;
          case "\\htmlStyle":
            attributes.style = value;
            trustContext = {
              command: "\\htmlStyle",
              style: value
            };
            break;
          case "\\htmlData": {
            var data = value.split(",");
            for (var i = 0; i < data.length; i++) {
              var keyVal = data[i].split("=");
              if (keyVal.length !== 2) {
                throw new ParseError("Error parsing key-value for \\htmlData");
              }
              attributes["data-" + keyVal[0].trim()] = keyVal[1].trim();
            }
            trustContext = {
              command: "\\htmlData",
              attributes
            };
            break;
          }
          default:
            throw new Error("Unrecognized html command");
        }
        if (!parser.settings.isTrusted(trustContext)) {
          return parser.formatUnsupportedCmd(funcName);
        }
        return {
          type: "html",
          mode: parser.mode,
          attributes,
          body: ordargument(body)
        };
      },
      htmlBuilder: (group, options) => {
        var elements = buildExpression$1(group.body, options, false);
        var classes = ["enclosing"];
        if (group.attributes.class) {
          classes.push(...group.attributes.class.trim().split(/\s+/));
        }
        var span = buildCommon.makeSpan(classes, elements, options);
        for (var attr in group.attributes) {
          if (attr !== "class" && group.attributes.hasOwnProperty(attr)) {
            span.setAttribute(attr, group.attributes[attr]);
          }
        }
        return span;
      },
      mathmlBuilder: (group, options) => {
        return buildExpressionRow(group.body, options);
      }
    });
    defineFunction({
      type: "htmlmathml",
      names: ["\\html@mathml"],
      props: {
        numArgs: 2,
        allowedInText: true
      },
      handler: (_ref, args) => {
        var {
          parser
        } = _ref;
        return {
          type: "htmlmathml",
          mode: parser.mode,
          html: ordargument(args[0]),
          mathml: ordargument(args[1])
        };
      },
      htmlBuilder: (group, options) => {
        var elements = buildExpression$1(group.html, options, false);
        return buildCommon.makeFragment(elements);
      },
      mathmlBuilder: (group, options) => {
        return buildExpressionRow(group.mathml, options);
      }
    });
    sizeData = function sizeData2(str) {
      if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(str)) {
        return {
          number: +str,
          unit: "bp"
        };
      } else {
        var match = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(str);
        if (!match) {
          throw new ParseError("Invalid size: '" + str + "' in \\includegraphics");
        }
        var data = {
          number: +(match[1] + match[2]),
          unit: match[3]
        };
        if (!validUnit(data)) {
          throw new ParseError("Invalid unit: '" + data.unit + "' in \\includegraphics.");
        }
        return data;
      }
    };
    defineFunction({
      type: "includegraphics",
      names: ["\\includegraphics"],
      props: {
        numArgs: 1,
        numOptionalArgs: 1,
        argTypes: ["raw", "url"],
        allowedInText: false
      },
      handler: (_ref, args, optArgs) => {
        var {
          parser
        } = _ref;
        var width = {
          number: 0,
          unit: "em"
        };
        var height = {
          number: 0.9,
          unit: "em"
        };
        var totalheight = {
          number: 0,
          unit: "em"
        };
        var alt = "";
        if (optArgs[0]) {
          var attributeStr = assertNodeType(optArgs[0], "raw").string;
          var attributes = attributeStr.split(",");
          for (var i = 0; i < attributes.length; i++) {
            var keyVal = attributes[i].split("=");
            if (keyVal.length === 2) {
              var str = keyVal[1].trim();
              switch (keyVal[0].trim()) {
                case "alt":
                  alt = str;
                  break;
                case "width":
                  width = sizeData(str);
                  break;
                case "height":
                  height = sizeData(str);
                  break;
                case "totalheight":
                  totalheight = sizeData(str);
                  break;
                default:
                  throw new ParseError("Invalid key: '" + keyVal[0] + "' in \\includegraphics.");
              }
            }
          }
        }
        var src = assertNodeType(args[0], "url").url;
        if (alt === "") {
          alt = src;
          alt = alt.replace(/^.*[\\/]/, "");
          alt = alt.substring(0, alt.lastIndexOf("."));
        }
        if (!parser.settings.isTrusted({
          command: "\\includegraphics",
          url: src
        })) {
          return parser.formatUnsupportedCmd("\\includegraphics");
        }
        return {
          type: "includegraphics",
          mode: parser.mode,
          alt,
          width,
          height,
          totalheight,
          src
        };
      },
      htmlBuilder: (group, options) => {
        var height = calculateSize(group.height, options);
        var depth = 0;
        if (group.totalheight.number > 0) {
          depth = calculateSize(group.totalheight, options) - height;
        }
        var width = 0;
        if (group.width.number > 0) {
          width = calculateSize(group.width, options);
        }
        var style = {
          height: makeEm(height + depth)
        };
        if (width > 0) {
          style.width = makeEm(width);
        }
        if (depth > 0) {
          style.verticalAlign = makeEm(-depth);
        }
        var node = new Img(group.src, group.alt, style);
        node.height = height;
        node.depth = depth;
        return node;
      },
      mathmlBuilder: (group, options) => {
        var node = new mathMLTree.MathNode("mglyph", []);
        node.setAttribute("alt", group.alt);
        var height = calculateSize(group.height, options);
        var depth = 0;
        if (group.totalheight.number > 0) {
          depth = calculateSize(group.totalheight, options) - height;
          node.setAttribute("valign", makeEm(-depth));
        }
        node.setAttribute("height", makeEm(height + depth));
        if (group.width.number > 0) {
          var width = calculateSize(group.width, options);
          node.setAttribute("width", makeEm(width));
        }
        node.setAttribute("src", group.src);
        return node;
      }
    });
    defineFunction({
      type: "kern",
      names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
      props: {
        numArgs: 1,
        argTypes: ["size"],
        primitive: true,
        allowedInText: true
      },
      handler(_ref, args) {
        var {
          parser,
          funcName
        } = _ref;
        var size = assertNodeType(args[0], "size");
        if (parser.settings.strict) {
          var mathFunction = funcName[1] === "m";
          var muUnit = size.value.unit === "mu";
          if (mathFunction) {
            if (!muUnit) {
              parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " supports only mu units, " + ("not " + size.value.unit + " units"));
            }
            if (parser.mode !== "math") {
              parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " works only in math mode");
            }
          } else {
            if (muUnit) {
              parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " doesn't support mu units");
            }
          }
        }
        return {
          type: "kern",
          mode: parser.mode,
          dimension: size.value
        };
      },
      htmlBuilder(group, options) {
        return buildCommon.makeGlue(group.dimension, options);
      },
      mathmlBuilder(group, options) {
        var dimension = calculateSize(group.dimension, options);
        return new mathMLTree.SpaceNode(dimension);
      }
    });
    defineFunction({
      type: "lap",
      names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
      props: {
        numArgs: 1,
        allowedInText: true
      },
      handler: (_ref, args) => {
        var {
          parser,
          funcName
        } = _ref;
        var body = args[0];
        return {
          type: "lap",
          mode: parser.mode,
          alignment: funcName.slice(5),
          body
        };
      },
      htmlBuilder: (group, options) => {
        var inner2;
        if (group.alignment === "clap") {
          inner2 = buildCommon.makeSpan([], [buildGroup$1(group.body, options)]);
          inner2 = buildCommon.makeSpan(["inner"], [inner2], options);
        } else {
          inner2 = buildCommon.makeSpan(["inner"], [buildGroup$1(group.body, options)]);
        }
        var fix = buildCommon.makeSpan(["fix"], []);
        var node = buildCommon.makeSpan([group.alignment], [inner2, fix], options);
        var strut = buildCommon.makeSpan(["strut"]);
        strut.style.height = makeEm(node.height + node.depth);
        if (node.depth) {
          strut.style.verticalAlign = makeEm(-node.depth);
        }
        node.children.unshift(strut);
        node = buildCommon.makeSpan(["thinbox"], [node], options);
        return buildCommon.makeSpan(["mord", "vbox"], [node], options);
      },
      mathmlBuilder: (group, options) => {
        var node = new mathMLTree.MathNode("mpadded", [buildGroup2(group.body, options)]);
        if (group.alignment !== "rlap") {
          var offset = group.alignment === "llap" ? "-1" : "-0.5";
          node.setAttribute("lspace", offset + "width");
        }
        node.setAttribute("width", "0px");
        return node;
      }
    });
    defineFunction({
      type: "styling",
      names: ["\\(", "$"],
      props: {
        numArgs: 0,
        allowedInText: true,
        allowedInMath: false
      },
      handler(_ref, args) {
        var {
          funcName,
          parser
        } = _ref;
        var outerMode = parser.mode;
        parser.switchMode("math");
        var close2 = funcName === "\\(" ? "\\)" : "$";
        var body = parser.parseExpression(false, close2);
        parser.expect(close2);
        parser.switchMode(outerMode);
        return {
          type: "styling",
          mode: parser.mode,
          style: "text",
          body
        };
      }
    });
    defineFunction({
      type: "text",
      names: ["\\)", "\\]"],
      props: {
        numArgs: 0,
        allowedInText: true,
        allowedInMath: false
      },
      handler(context, args) {
        throw new ParseError("Mismatched " + context.funcName);
      }
    });
    chooseMathStyle = (group, options) => {
      switch (options.style.size) {
        case Style$1.DISPLAY.size:
          return group.display;
        case Style$1.TEXT.size:
          return group.text;
        case Style$1.SCRIPT.size:
          return group.script;
        case Style$1.SCRIPTSCRIPT.size:
          return group.scriptscript;
        default:
          return group.text;
      }
    };
    defineFunction({
      type: "mathchoice",
      names: ["\\mathchoice"],
      props: {
        numArgs: 4,
        primitive: true
      },
      handler: (_ref, args) => {
        var {
          parser
        } = _ref;
        return {
          type: "mathchoice",
          mode: parser.mode,
          display: ordargument(args[0]),
          text: ordargument(args[1]),
          script: ordargument(args[2]),
          scriptscript: ordargument(args[3])
        };
      },
      htmlBuilder: (group, options) => {
        var body = chooseMathStyle(group, options);
        var elements = buildExpression$1(body, options, false);
        return buildCommon.makeFragment(elements);
      },
      mathmlBuilder: (group, options) => {
        var body = chooseMathStyle(group, options);
        return buildExpressionRow(body, options);
      }
    });
    assembleSupSub = (base2, supGroup, subGroup, options, style, slant, baseShift) => {
      base2 = buildCommon.makeSpan([], [base2]);
      var subIsSingleCharacter = subGroup && utils.isCharacterBox(subGroup);
      var sub2;
      var sup2;
      if (supGroup) {
        var elem = buildGroup$1(supGroup, options.havingStyle(style.sup()), options);
        sup2 = {
          elem,
          kern: Math.max(options.fontMetrics().bigOpSpacing1, options.fontMetrics().bigOpSpacing3 - elem.depth)
        };
      }
      if (subGroup) {
        var _elem = buildGroup$1(subGroup, options.havingStyle(style.sub()), options);
        sub2 = {
          elem: _elem,
          kern: Math.max(options.fontMetrics().bigOpSpacing2, options.fontMetrics().bigOpSpacing4 - _elem.height)
        };
      }
      var finalGroup;
      if (sup2 && sub2) {
        var bottom = options.fontMetrics().bigOpSpacing5 + sub2.elem.height + sub2.elem.depth + sub2.kern + base2.depth + baseShift;
        finalGroup = buildCommon.makeVList({
          positionType: "bottom",
          positionData: bottom,
          children: [{
            type: "kern",
            size: options.fontMetrics().bigOpSpacing5
          }, {
            type: "elem",
            elem: sub2.elem,
            marginLeft: makeEm(-slant)
          }, {
            type: "kern",
            size: sub2.kern
          }, {
            type: "elem",
            elem: base2
          }, {
            type: "kern",
            size: sup2.kern
          }, {
            type: "elem",
            elem: sup2.elem,
            marginLeft: makeEm(slant)
          }, {
            type: "kern",
            size: options.fontMetrics().bigOpSpacing5
          }]
        }, options);
      } else if (sub2) {
        var top = base2.height - baseShift;
        finalGroup = buildCommon.makeVList({
          positionType: "top",
          positionData: top,
          children: [{
            type: "kern",
            size: options.fontMetrics().bigOpSpacing5
          }, {
            type: "elem",
            elem: sub2.elem,
            marginLeft: makeEm(-slant)
          }, {
            type: "kern",
            size: sub2.kern
          }, {
            type: "elem",
            elem: base2
          }]
        }, options);
      } else if (sup2) {
        var _bottom = base2.depth + baseShift;
        finalGroup = buildCommon.makeVList({
          positionType: "bottom",
          positionData: _bottom,
          children: [{
            type: "elem",
            elem: base2
          }, {
            type: "kern",
            size: sup2.kern
          }, {
            type: "elem",
            elem: sup2.elem,
            marginLeft: makeEm(slant)
          }, {
            type: "kern",
            size: options.fontMetrics().bigOpSpacing5
          }]
        }, options);
      } else {
        return base2;
      }
      var parts = [finalGroup];
      if (sub2 && slant !== 0 && !subIsSingleCharacter) {
        var spacer = buildCommon.makeSpan(["mspace"], [], options);
        spacer.style.marginRight = makeEm(slant);
        parts.unshift(spacer);
      }
      return buildCommon.makeSpan(["mop", "op-limits"], parts, options);
    };
    noSuccessor = ["\\smallint"];
    htmlBuilder$2 = (grp, options) => {
      var supGroup;
      var subGroup;
      var hasLimits = false;
      var group;
      if (grp.type === "supsub") {
        supGroup = grp.sup;
        subGroup = grp.sub;
        group = assertNodeType(grp.base, "op");
        hasLimits = true;
      } else {
        group = assertNodeType(grp, "op");
      }
      var style = options.style;
      var large = false;
      if (style.size === Style$1.DISPLAY.size && group.symbol && !utils.contains(noSuccessor, group.name)) {
        large = true;
      }
      var base2;
      if (group.symbol) {
        var fontName = large ? "Size2-Regular" : "Size1-Regular";
        var stash = "";
        if (group.name === "\\oiint" || group.name === "\\oiiint") {
          stash = group.name.slice(1);
          group.name = stash === "oiint" ? "\\iint" : "\\iiint";
        }
        base2 = buildCommon.makeSymbol(group.name, fontName, "math", options, ["mop", "op-symbol", large ? "large-op" : "small-op"]);
        if (stash.length > 0) {
          var italic = base2.italic;
          var oval = buildCommon.staticSvg(stash + "Size" + (large ? "2" : "1"), options);
          base2 = buildCommon.makeVList({
            positionType: "individualShift",
            children: [{
              type: "elem",
              elem: base2,
              shift: 0
            }, {
              type: "elem",
              elem: oval,
              shift: large ? 0.08 : 0
            }]
          }, options);
          group.name = "\\" + stash;
          base2.classes.unshift("mop");
          base2.italic = italic;
        }
      } else if (group.body) {
        var inner2 = buildExpression$1(group.body, options, true);
        if (inner2.length === 1 && inner2[0] instanceof SymbolNode) {
          base2 = inner2[0];
          base2.classes[0] = "mop";
        } else {
          base2 = buildCommon.makeSpan(["mop"], inner2, options);
        }
      } else {
        var output = [];
        for (var i = 1; i < group.name.length; i++) {
          output.push(buildCommon.mathsym(group.name[i], group.mode, options));
        }
        base2 = buildCommon.makeSpan(["mop"], output, options);
      }
      var baseShift = 0;
      var slant = 0;
      if ((base2 instanceof SymbolNode || group.name === "\\oiint" || group.name === "\\oiiint") && !group.suppressBaseShift) {
        baseShift = (base2.height - base2.depth) / 2 - options.fontMetrics().axisHeight;
        slant = base2.italic;
      }
      if (hasLimits) {
        return assembleSupSub(base2, supGroup, subGroup, options, style, slant, baseShift);
      } else {
        if (baseShift) {
          base2.style.position = "relative";
          base2.style.top = makeEm(baseShift);
        }
        return base2;
      }
    };
    mathmlBuilder$1 = (group, options) => {
      var node;
      if (group.symbol) {
        node = new MathNode("mo", [makeText(group.name, group.mode)]);
        if (utils.contains(noSuccessor, group.name)) {
          node.setAttribute("largeop", "false");
        }
      } else if (group.body) {
        node = new MathNode("mo", buildExpression2(group.body, options));
      } else {
        node = new MathNode("mi", [new TextNode(group.name.slice(1))]);
        var operator = new MathNode("mo", [makeText("\u2061", "text")]);
        if (group.parentIsSupSub) {
          node = new MathNode("mrow", [node, operator]);
        } else {
          node = newDocumentFragment([node, operator]);
        }
      }
      return node;
    };
    singleCharBigOps = {
      "\u220F": "\\prod",
      "\u2210": "\\coprod",
      "\u2211": "\\sum",
      "\u22C0": "\\bigwedge",
      "\u22C1": "\\bigvee",
      "\u22C2": "\\bigcap",
      "\u22C3": "\\bigcup",
      "\u2A00": "\\bigodot",
      "\u2A01": "\\bigoplus",
      "\u2A02": "\\bigotimes",
      "\u2A04": "\\biguplus",
      "\u2A06": "\\bigsqcup"
    };
    defineFunction({
      type: "op",
      names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220F", "\u2210", "\u2211", "\u22C0", "\u22C1", "\u22C2", "\u22C3", "\u2A00", "\u2A01", "\u2A02", "\u2A04", "\u2A06"],
      props: {
        numArgs: 0
      },
      handler: (_ref, args) => {
        var {
          parser,
          funcName
        } = _ref;
        var fName = funcName;
        if (fName.length === 1) {
          fName = singleCharBigOps[fName];
        }
        return {
          type: "op",
          mode: parser.mode,
          limits: true,
          parentIsSupSub: false,
          symbol: true,
          name: fName
        };
      },
      htmlBuilder: htmlBuilder$2,
      mathmlBuilder: mathmlBuilder$1
    });
    defineFunction({
      type: "op",
      names: ["\\mathop"],
      props: {
        numArgs: 1,
        primitive: true
      },
      handler: (_ref2, args) => {
        var {
          parser
        } = _ref2;
        var body = args[0];
        return {
          type: "op",
          mode: parser.mode,
          limits: false,
          parentIsSupSub: false,
          symbol: false,
          body: ordargument(body)
        };
      },
      htmlBuilder: htmlBuilder$2,
      mathmlBuilder: mathmlBuilder$1
    });
    singleCharIntegrals = {
      "\u222B": "\\int",
      "\u222C": "\\iint",
      "\u222D": "\\iiint",
      "\u222E": "\\oint",
      "\u222F": "\\oiint",
      "\u2230": "\\oiiint"
    };
    defineFunction({
      type: "op",
      names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
      props: {
        numArgs: 0
      },
      handler(_ref3) {
        var {
          parser,
          funcName
        } = _ref3;
        return {
          type: "op",
          mode: parser.mode,
          limits: false,
          parentIsSupSub: false,
          symbol: false,
          name: funcName
        };
      },
      htmlBuilder: htmlBuilder$2,
      mathmlBuilder: mathmlBuilder$1
    });
    defineFunction({
      type: "op",
      names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
      props: {
        numArgs: 0
      },
      handler(_ref4) {
        var {
          parser,
          funcName
        } = _ref4;
        return {
          type: "op",
          mode: parser.mode,
          limits: true,
          parentIsSupSub: false,
          symbol: false,
          name: funcName
        };
      },
      htmlBuilder: htmlBuilder$2,
      mathmlBuilder: mathmlBuilder$1
    });
    defineFunction({
      type: "op",
      names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222B", "\u222C", "\u222D", "\u222E", "\u222F", "\u2230"],
      props: {
        numArgs: 0
      },
      handler(_ref5) {
        var {
          parser,
          funcName
        } = _ref5;
        var fName = funcName;
        if (fName.length === 1) {
          fName = singleCharIntegrals[fName];
        }
        return {
          type: "op",
          mode: parser.mode,
          limits: false,
          parentIsSupSub: false,
          symbol: true,
          name: fName
        };
      },
      htmlBuilder: htmlBuilder$2,
      mathmlBuilder: mathmlBuilder$1
    });
    htmlBuilder$1 = (grp, options) => {
      var supGroup;
      var subGroup;
      var hasLimits = false;
      var group;
      if (grp.type === "supsub") {
        supGroup = grp.sup;
        subGroup = grp.sub;
        group = assertNodeType(grp.base, "operatorname");
        hasLimits = true;
      } else {
        group = assertNodeType(grp, "operatorname");
      }
      var base2;
      if (group.body.length > 0) {
        var body = group.body.map((child2) => {
          var childText = child2.text;
          if (typeof childText === "string") {
            return {
              type: "textord",
              mode: child2.mode,
              text: childText
            };
          } else {
            return child2;
          }
        });
        var expression = buildExpression$1(body, options.withFont("mathrm"), true);
        for (var i = 0; i < expression.length; i++) {
          var child = expression[i];
          if (child instanceof SymbolNode) {
            child.text = child.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
          }
        }
        base2 = buildCommon.makeSpan(["mop"], expression, options);
      } else {
        base2 = buildCommon.makeSpan(["mop"], [], options);
      }
      if (hasLimits) {
        return assembleSupSub(base2, supGroup, subGroup, options, options.style, 0, 0);
      } else {
        return base2;
      }
    };
    mathmlBuilder2 = (group, options) => {
      var expression = buildExpression2(group.body, options.withFont("mathrm"));
      var isAllString = true;
      for (var i = 0; i < expression.length; i++) {
        var node = expression[i];
        if (node instanceof mathMLTree.SpaceNode)
          ;
        else if (node instanceof mathMLTree.MathNode) {
          switch (node.type) {
            case "mi":
            case "mn":
            case "ms":
            case "mspace":
            case "mtext":
              break;
            case "mo": {
              var child = node.children[0];
              if (node.children.length === 1 && child instanceof mathMLTree.TextNode) {
                child.text = child.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
              } else {
                isAllString = false;
              }
              break;
            }
            default:
              isAllString = false;
          }
        } else {
          isAllString = false;
        }
      }
      if (isAllString) {
        var word = expression.map((node2) => node2.toText()).join("");
        expression = [new mathMLTree.TextNode(word)];
      }
      var identifier = new mathMLTree.MathNode("mi", expression);
      identifier.setAttribute("mathvariant", "normal");
      var operator = new mathMLTree.MathNode("mo", [makeText("\u2061", "text")]);
      if (group.parentIsSupSub) {
        return new mathMLTree.MathNode("mrow", [identifier, operator]);
      } else {
        return mathMLTree.newDocumentFragment([identifier, operator]);
      }
    };
    defineFunction({
      type: "operatorname",
      names: ["\\operatorname@", "\\operatornamewithlimits"],
      props: {
        numArgs: 1
      },
      handler: (_ref, args) => {
        var {
          parser,
          funcName
        } = _ref;
        var body = args[0];
        return {
          type: "operatorname",
          mode: parser.mode,
          body: ordargument(body),
          alwaysHandleSupSub: funcName === "\\operatornamewithlimits",
          limits: false,
          parentIsSupSub: false
        };
      },
      htmlBuilder: htmlBuilder$1,
      mathmlBuilder: mathmlBuilder2
    });
    defineMacro("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
    defineFunctionBuilders({
      type: "ordgroup",
      htmlBuilder(group, options) {
        if (group.semisimple) {
          return buildCommon.makeFragment(buildExpression$1(group.body, options, false));
        }
        return buildCommon.makeSpan(["mord"], buildExpression$1(group.body, options, true), options);
      },
      mathmlBuilder(group, options) {
        return buildExpressionRow(group.body, options, true);
      }
    });
    defineFunction({
      type: "overline",
      names: ["\\overline"],
      props: {
        numArgs: 1
      },
      handler(_ref, args) {
        var {
          parser
        } = _ref;
        var body = args[0];
        return {
          type: "overline",
          mode: parser.mode,
          body
        };
      },
      htmlBuilder(group, options) {
        var innerGroup = buildGroup$1(group.body, options.havingCrampedStyle());
        var line = buildCommon.makeLineSpan("overline-line", options);
        var defaultRuleThickness = options.fontMetrics().defaultRuleThickness;
        var vlist = buildCommon.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: innerGroup
          }, {
            type: "kern",
            size: 3 * defaultRuleThickness
          }, {
            type: "elem",
            elem: line
          }, {
            type: "kern",
            size: defaultRuleThickness
          }]
        }, options);
        return buildCommon.makeSpan(["mord", "overline"], [vlist], options);
      },
      mathmlBuilder(group, options) {
        var operator = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode("\u203E")]);
        operator.setAttribute("stretchy", "true");
        var node = new mathMLTree.MathNode("mover", [buildGroup2(group.body, options), operator]);
        node.setAttribute("accent", "true");
        return node;
      }
    });
    defineFunction({
      type: "phantom",
      names: ["\\phantom"],
      props: {
        numArgs: 1,
        allowedInText: true
      },
      handler: (_ref, args) => {
        var {
          parser
        } = _ref;
        var body = args[0];
        return {
          type: "phantom",
          mode: parser.mode,
          body: ordargument(body)
        };
      },
      htmlBuilder: (group, options) => {
        var elements = buildExpression$1(group.body, options.withPhantom(), false);
        return buildCommon.makeFragment(elements);
      },
      mathmlBuilder: (group, options) => {
        var inner2 = buildExpression2(group.body, options);
        return new mathMLTree.MathNode("mphantom", inner2);
      }
    });
    defineFunction({
      type: "hphantom",
      names: ["\\hphantom"],
      props: {
        numArgs: 1,
        allowedInText: true
      },
      handler: (_ref2, args) => {
        var {
          parser
        } = _ref2;
        var body = args[0];
        return {
          type: "hphantom",
          mode: parser.mode,
          body
        };
      },
      htmlBuilder: (group, options) => {
        var node = buildCommon.makeSpan([], [buildGroup$1(group.body, options.withPhantom())]);
        node.height = 0;
        node.depth = 0;
        if (node.children) {
          for (var i = 0; i < node.children.length; i++) {
            node.children[i].height = 0;
            node.children[i].depth = 0;
          }
        }
        node = buildCommon.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: node
          }]
        }, options);
        return buildCommon.makeSpan(["mord"], [node], options);
      },
      mathmlBuilder: (group, options) => {
        var inner2 = buildExpression2(ordargument(group.body), options);
        var phantom = new mathMLTree.MathNode("mphantom", inner2);
        var node = new mathMLTree.MathNode("mpadded", [phantom]);
        node.setAttribute("height", "0px");
        node.setAttribute("depth", "0px");
        return node;
      }
    });
    defineFunction({
      type: "vphantom",
      names: ["\\vphantom"],
      props: {
        numArgs: 1,
        allowedInText: true
      },
      handler: (_ref3, args) => {
        var {
          parser
        } = _ref3;
        var body = args[0];
        return {
          type: "vphantom",
          mode: parser.mode,
          body
        };
      },
      htmlBuilder: (group, options) => {
        var inner2 = buildCommon.makeSpan(["inner"], [buildGroup$1(group.body, options.withPhantom())]);
        var fix = buildCommon.makeSpan(["fix"], []);
        return buildCommon.makeSpan(["mord", "rlap"], [inner2, fix], options);
      },
      mathmlBuilder: (group, options) => {
        var inner2 = buildExpression2(ordargument(group.body), options);
        var phantom = new mathMLTree.MathNode("mphantom", inner2);
        var node = new mathMLTree.MathNode("mpadded", [phantom]);
        node.setAttribute("width", "0px");
        return node;
      }
    });
    defineFunction({
      type: "raisebox",
      names: ["\\raisebox"],
      props: {
        numArgs: 2,
        argTypes: ["size", "hbox"],
        allowedInText: true
      },
      handler(_ref, args) {
        var {
          parser
        } = _ref;
        var amount = assertNodeType(args[0], "size").value;
        var body = args[1];
        return {
          type: "raisebox",
          mode: parser.mode,
          dy: amount,
          body
        };
      },
      htmlBuilder(group, options) {
        var body = buildGroup$1(group.body, options);
        var dy = calculateSize(group.dy, options);
        return buildCommon.makeVList({
          positionType: "shift",
          positionData: -dy,
          children: [{
            type: "elem",
            elem: body
          }]
        }, options);
      },
      mathmlBuilder(group, options) {
        var node = new mathMLTree.MathNode("mpadded", [buildGroup2(group.body, options)]);
        var dy = group.dy.number + group.dy.unit;
        node.setAttribute("voffset", dy);
        return node;
      }
    });
    defineFunction({
      type: "internal",
      names: ["\\relax"],
      props: {
        numArgs: 0,
        allowedInText: true
      },
      handler(_ref) {
        var {
          parser
        } = _ref;
        return {
          type: "internal",
          mode: parser.mode
        };
      }
    });
    defineFunction({
      type: "rule",
      names: ["\\rule"],
      props: {
        numArgs: 2,
        numOptionalArgs: 1,
        argTypes: ["size", "size", "size"]
      },
      handler(_ref, args, optArgs) {
        var {
          parser
        } = _ref;
        var shift = optArgs[0];
        var width = assertNodeType(args[0], "size");
        var height = assertNodeType(args[1], "size");
        return {
          type: "rule",
          mode: parser.mode,
          shift: shift && assertNodeType(shift, "size").value,
          width: width.value,
          height: height.value
        };
      },
      htmlBuilder(group, options) {
        var rule = buildCommon.makeSpan(["mord", "rule"], [], options);
        var width = calculateSize(group.width, options);
        var height = calculateSize(group.height, options);
        var shift = group.shift ? calculateSize(group.shift, options) : 0;
        rule.style.borderRightWidth = makeEm(width);
        rule.style.borderTopWidth = makeEm(height);
        rule.style.bottom = makeEm(shift);
        rule.width = width;
        rule.height = height + shift;
        rule.depth = -shift;
        rule.maxFontSize = height * 1.125 * options.sizeMultiplier;
        return rule;
      },
      mathmlBuilder(group, options) {
        var width = calculateSize(group.width, options);
        var height = calculateSize(group.height, options);
        var shift = group.shift ? calculateSize(group.shift, options) : 0;
        var color = options.color && options.getColor() || "black";
        var rule = new mathMLTree.MathNode("mspace");
        rule.setAttribute("mathbackground", color);
        rule.setAttribute("width", makeEm(width));
        rule.setAttribute("height", makeEm(height));
        var wrapper = new mathMLTree.MathNode("mpadded", [rule]);
        if (shift >= 0) {
          wrapper.setAttribute("height", makeEm(shift));
        } else {
          wrapper.setAttribute("height", makeEm(shift));
          wrapper.setAttribute("depth", makeEm(-shift));
        }
        wrapper.setAttribute("voffset", makeEm(shift));
        return wrapper;
      }
    });
    sizeFuncs = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
    htmlBuilder2 = (group, options) => {
      var newOptions = options.havingSize(group.size);
      return sizingGroup(group.body, newOptions, options);
    };
    defineFunction({
      type: "sizing",
      names: sizeFuncs,
      props: {
        numArgs: 0,
        allowedInText: true
      },
      handler: (_ref, args) => {
        var {
          breakOnTokenText,
          funcName,
          parser
        } = _ref;
        var body = parser.parseExpression(false, breakOnTokenText);
        return {
          type: "sizing",
          mode: parser.mode,
          size: sizeFuncs.indexOf(funcName) + 1,
          body
        };
      },
      htmlBuilder: htmlBuilder2,
      mathmlBuilder: (group, options) => {
        var newOptions = options.havingSize(group.size);
        var inner2 = buildExpression2(group.body, newOptions);
        var node = new mathMLTree.MathNode("mstyle", inner2);
        node.setAttribute("mathsize", makeEm(newOptions.sizeMultiplier));
        return node;
      }
    });
    defineFunction({
      type: "smash",
      names: ["\\smash"],
      props: {
        numArgs: 1,
        numOptionalArgs: 1,
        allowedInText: true
      },
      handler: (_ref, args, optArgs) => {
        var {
          parser
        } = _ref;
        var smashHeight = false;
        var smashDepth = false;
        var tbArg = optArgs[0] && assertNodeType(optArgs[0], "ordgroup");
        if (tbArg) {
          var letter = "";
          for (var i = 0; i < tbArg.body.length; ++i) {
            var node = tbArg.body[i];
            letter = node.text;
            if (letter === "t") {
              smashHeight = true;
            } else if (letter === "b") {
              smashDepth = true;
            } else {
              smashHeight = false;
              smashDepth = false;
              break;
            }
          }
        } else {
          smashHeight = true;
          smashDepth = true;
        }
        var body = args[0];
        return {
          type: "smash",
          mode: parser.mode,
          body,
          smashHeight,
          smashDepth
        };
      },
      htmlBuilder: (group, options) => {
        var node = buildCommon.makeSpan([], [buildGroup$1(group.body, options)]);
        if (!group.smashHeight && !group.smashDepth) {
          return node;
        }
        if (group.smashHeight) {
          node.height = 0;
          if (node.children) {
            for (var i = 0; i < node.children.length; i++) {
              node.children[i].height = 0;
            }
          }
        }
        if (group.smashDepth) {
          node.depth = 0;
          if (node.children) {
            for (var _i = 0; _i < node.children.length; _i++) {
              node.children[_i].depth = 0;
            }
          }
        }
        var smashedNode = buildCommon.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: node
          }]
        }, options);
        return buildCommon.makeSpan(["mord"], [smashedNode], options);
      },
      mathmlBuilder: (group, options) => {
        var node = new mathMLTree.MathNode("mpadded", [buildGroup2(group.body, options)]);
        if (group.smashHeight) {
          node.setAttribute("height", "0px");
        }
        if (group.smashDepth) {
          node.setAttribute("depth", "0px");
        }
        return node;
      }
    });
    defineFunction({
      type: "sqrt",
      names: ["\\sqrt"],
      props: {
        numArgs: 1,
        numOptionalArgs: 1
      },
      handler(_ref, args, optArgs) {
        var {
          parser
        } = _ref;
        var index7 = optArgs[0];
        var body = args[0];
        return {
          type: "sqrt",
          mode: parser.mode,
          body,
          index: index7
        };
      },
      htmlBuilder(group, options) {
        var inner2 = buildGroup$1(group.body, options.havingCrampedStyle());
        if (inner2.height === 0) {
          inner2.height = options.fontMetrics().xHeight;
        }
        inner2 = buildCommon.wrapFragment(inner2, options);
        var metrics = options.fontMetrics();
        var theta = metrics.defaultRuleThickness;
        var phi = theta;
        if (options.style.id < Style$1.TEXT.id) {
          phi = options.fontMetrics().xHeight;
        }
        var lineClearance = theta + phi / 4;
        var minDelimiterHeight = inner2.height + inner2.depth + lineClearance + theta;
        var {
          span: img,
          ruleWidth,
          advanceWidth
        } = delimiter.sqrtImage(minDelimiterHeight, options);
        var delimDepth = img.height - ruleWidth;
        if (delimDepth > inner2.height + inner2.depth + lineClearance) {
          lineClearance = (lineClearance + delimDepth - inner2.height - inner2.depth) / 2;
        }
        var imgShift = img.height - inner2.height - lineClearance - ruleWidth;
        inner2.style.paddingLeft = makeEm(advanceWidth);
        var body = buildCommon.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: inner2,
            wrapperClasses: ["svg-align"]
          }, {
            type: "kern",
            size: -(inner2.height + imgShift)
          }, {
            type: "elem",
            elem: img
          }, {
            type: "kern",
            size: ruleWidth
          }]
        }, options);
        if (!group.index) {
          return buildCommon.makeSpan(["mord", "sqrt"], [body], options);
        } else {
          var newOptions = options.havingStyle(Style$1.SCRIPTSCRIPT);
          var rootm = buildGroup$1(group.index, newOptions, options);
          var toShift = 0.6 * (body.height - body.depth);
          var rootVList = buildCommon.makeVList({
            positionType: "shift",
            positionData: -toShift,
            children: [{
              type: "elem",
              elem: rootm
            }]
          }, options);
          var rootVListWrap = buildCommon.makeSpan(["root"], [rootVList]);
          return buildCommon.makeSpan(["mord", "sqrt"], [rootVListWrap, body], options);
        }
      },
      mathmlBuilder(group, options) {
        var {
          body,
          index: index7
        } = group;
        return index7 ? new mathMLTree.MathNode("mroot", [buildGroup2(body, options), buildGroup2(index7, options)]) : new mathMLTree.MathNode("msqrt", [buildGroup2(body, options)]);
      }
    });
    styleMap = {
      "display": Style$1.DISPLAY,
      "text": Style$1.TEXT,
      "script": Style$1.SCRIPT,
      "scriptscript": Style$1.SCRIPTSCRIPT
    };
    defineFunction({
      type: "styling",
      names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
      props: {
        numArgs: 0,
        allowedInText: true,
        primitive: true
      },
      handler(_ref, args) {
        var {
          breakOnTokenText,
          funcName,
          parser
        } = _ref;
        var body = parser.parseExpression(true, breakOnTokenText);
        var style = funcName.slice(1, funcName.length - 5);
        return {
          type: "styling",
          mode: parser.mode,
          style,
          body
        };
      },
      htmlBuilder(group, options) {
        var newStyle = styleMap[group.style];
        var newOptions = options.havingStyle(newStyle).withFont("");
        return sizingGroup(group.body, newOptions, options);
      },
      mathmlBuilder(group, options) {
        var newStyle = styleMap[group.style];
        var newOptions = options.havingStyle(newStyle);
        var inner2 = buildExpression2(group.body, newOptions);
        var node = new mathMLTree.MathNode("mstyle", inner2);
        var styleAttributes = {
          "display": ["0", "true"],
          "text": ["0", "false"],
          "script": ["1", "false"],
          "scriptscript": ["2", "false"]
        };
        var attr = styleAttributes[group.style];
        node.setAttribute("scriptlevel", attr[0]);
        node.setAttribute("displaystyle", attr[1]);
        return node;
      }
    });
    htmlBuilderDelegate = function htmlBuilderDelegate2(group, options) {
      var base2 = group.base;
      if (!base2) {
        return null;
      } else if (base2.type === "op") {
        var delegate = base2.limits && (options.style.size === Style$1.DISPLAY.size || base2.alwaysHandleSupSub);
        return delegate ? htmlBuilder$2 : null;
      } else if (base2.type === "operatorname") {
        var _delegate = base2.alwaysHandleSupSub && (options.style.size === Style$1.DISPLAY.size || base2.limits);
        return _delegate ? htmlBuilder$1 : null;
      } else if (base2.type === "accent") {
        return utils.isCharacterBox(base2.base) ? htmlBuilder$a : null;
      } else if (base2.type === "horizBrace") {
        var isSup = !group.sub;
        return isSup === base2.isOver ? htmlBuilder$3 : null;
      } else {
        return null;
      }
    };
    defineFunctionBuilders({
      type: "supsub",
      htmlBuilder(group, options) {
        var builderDelegate = htmlBuilderDelegate(group, options);
        if (builderDelegate) {
          return builderDelegate(group, options);
        }
        var {
          base: valueBase,
          sup: valueSup,
          sub: valueSub
        } = group;
        var base2 = buildGroup$1(valueBase, options);
        var supm;
        var subm;
        var metrics = options.fontMetrics();
        var supShift = 0;
        var subShift = 0;
        var isCharacterBox3 = valueBase && utils.isCharacterBox(valueBase);
        if (valueSup) {
          var newOptions = options.havingStyle(options.style.sup());
          supm = buildGroup$1(valueSup, newOptions, options);
          if (!isCharacterBox3) {
            supShift = base2.height - newOptions.fontMetrics().supDrop * newOptions.sizeMultiplier / options.sizeMultiplier;
          }
        }
        if (valueSub) {
          var _newOptions = options.havingStyle(options.style.sub());
          subm = buildGroup$1(valueSub, _newOptions, options);
          if (!isCharacterBox3) {
            subShift = base2.depth + _newOptions.fontMetrics().subDrop * _newOptions.sizeMultiplier / options.sizeMultiplier;
          }
        }
        var minSupShift;
        if (options.style === Style$1.DISPLAY) {
          minSupShift = metrics.sup1;
        } else if (options.style.cramped) {
          minSupShift = metrics.sup3;
        } else {
          minSupShift = metrics.sup2;
        }
        var multiplier = options.sizeMultiplier;
        var marginRight = makeEm(0.5 / metrics.ptPerEm / multiplier);
        var marginLeft = null;
        if (subm) {
          var isOiint = group.base && group.base.type === "op" && group.base.name && (group.base.name === "\\oiint" || group.base.name === "\\oiiint");
          if (base2 instanceof SymbolNode || isOiint) {
            marginLeft = makeEm(-base2.italic);
          }
        }
        var supsub;
        if (supm && subm) {
          supShift = Math.max(supShift, minSupShift, supm.depth + 0.25 * metrics.xHeight);
          subShift = Math.max(subShift, metrics.sub2);
          var ruleWidth = metrics.defaultRuleThickness;
          var maxWidth = 4 * ruleWidth;
          if (supShift - supm.depth - (subm.height - subShift) < maxWidth) {
            subShift = maxWidth - (supShift - supm.depth) + subm.height;
            var psi = 0.8 * metrics.xHeight - (supShift - supm.depth);
            if (psi > 0) {
              supShift += psi;
              subShift -= psi;
            }
          }
          var vlistElem = [{
            type: "elem",
            elem: subm,
            shift: subShift,
            marginRight,
            marginLeft
          }, {
            type: "elem",
            elem: supm,
            shift: -supShift,
            marginRight
          }];
          supsub = buildCommon.makeVList({
            positionType: "individualShift",
            children: vlistElem
          }, options);
        } else if (subm) {
          subShift = Math.max(subShift, metrics.sub1, subm.height - 0.8 * metrics.xHeight);
          var _vlistElem = [{
            type: "elem",
            elem: subm,
            marginLeft,
            marginRight
          }];
          supsub = buildCommon.makeVList({
            positionType: "shift",
            positionData: subShift,
            children: _vlistElem
          }, options);
        } else if (supm) {
          supShift = Math.max(supShift, minSupShift, supm.depth + 0.25 * metrics.xHeight);
          supsub = buildCommon.makeVList({
            positionType: "shift",
            positionData: -supShift,
            children: [{
              type: "elem",
              elem: supm,
              marginRight
            }]
          }, options);
        } else {
          throw new Error("supsub must have either sup or sub.");
        }
        var mclass = getTypeOfDomTree(base2, "right") || "mord";
        return buildCommon.makeSpan([mclass], [base2, buildCommon.makeSpan(["msupsub"], [supsub])], options);
      },
      mathmlBuilder(group, options) {
        var isBrace = false;
        var isOver;
        var isSup;
        if (group.base && group.base.type === "horizBrace") {
          isSup = !!group.sup;
          if (isSup === group.base.isOver) {
            isBrace = true;
            isOver = group.base.isOver;
          }
        }
        if (group.base && (group.base.type === "op" || group.base.type === "operatorname")) {
          group.base.parentIsSupSub = true;
        }
        var children = [buildGroup2(group.base, options)];
        if (group.sub) {
          children.push(buildGroup2(group.sub, options));
        }
        if (group.sup) {
          children.push(buildGroup2(group.sup, options));
        }
        var nodeType;
        if (isBrace) {
          nodeType = isOver ? "mover" : "munder";
        } else if (!group.sub) {
          var base2 = group.base;
          if (base2 && base2.type === "op" && base2.limits && (options.style === Style$1.DISPLAY || base2.alwaysHandleSupSub)) {
            nodeType = "mover";
          } else if (base2 && base2.type === "operatorname" && base2.alwaysHandleSupSub && (base2.limits || options.style === Style$1.DISPLAY)) {
            nodeType = "mover";
          } else {
            nodeType = "msup";
          }
        } else if (!group.sup) {
          var _base = group.base;
          if (_base && _base.type === "op" && _base.limits && (options.style === Style$1.DISPLAY || _base.alwaysHandleSupSub)) {
            nodeType = "munder";
          } else if (_base && _base.type === "operatorname" && _base.alwaysHandleSupSub && (_base.limits || options.style === Style$1.DISPLAY)) {
            nodeType = "munder";
          } else {
            nodeType = "msub";
          }
        } else {
          var _base2 = group.base;
          if (_base2 && _base2.type === "op" && _base2.limits && options.style === Style$1.DISPLAY) {
            nodeType = "munderover";
          } else if (_base2 && _base2.type === "operatorname" && _base2.alwaysHandleSupSub && (options.style === Style$1.DISPLAY || _base2.limits)) {
            nodeType = "munderover";
          } else {
            nodeType = "msubsup";
          }
        }
        return new mathMLTree.MathNode(nodeType, children);
      }
    });
    defineFunctionBuilders({
      type: "atom",
      htmlBuilder(group, options) {
        return buildCommon.mathsym(group.text, group.mode, options, ["m" + group.family]);
      },
      mathmlBuilder(group, options) {
        var node = new mathMLTree.MathNode("mo", [makeText(group.text, group.mode)]);
        if (group.family === "bin") {
          var variant = getVariant(group, options);
          if (variant === "bold-italic") {
            node.setAttribute("mathvariant", variant);
          }
        } else if (group.family === "punct") {
          node.setAttribute("separator", "true");
        } else if (group.family === "open" || group.family === "close") {
          node.setAttribute("stretchy", "false");
        }
        return node;
      }
    });
    defaultVariant = {
      "mi": "italic",
      "mn": "normal",
      "mtext": "normal"
    };
    defineFunctionBuilders({
      type: "mathord",
      htmlBuilder(group, options) {
        return buildCommon.makeOrd(group, options, "mathord");
      },
      mathmlBuilder(group, options) {
        var node = new mathMLTree.MathNode("mi", [makeText(group.text, group.mode, options)]);
        var variant = getVariant(group, options) || "italic";
        if (variant !== defaultVariant[node.type]) {
          node.setAttribute("mathvariant", variant);
        }
        return node;
      }
    });
    defineFunctionBuilders({
      type: "textord",
      htmlBuilder(group, options) {
        return buildCommon.makeOrd(group, options, "textord");
      },
      mathmlBuilder(group, options) {
        var text2 = makeText(group.text, group.mode, options);
        var variant = getVariant(group, options) || "normal";
        var node;
        if (group.mode === "text") {
          node = new mathMLTree.MathNode("mtext", [text2]);
        } else if (/[0-9]/.test(group.text)) {
          node = new mathMLTree.MathNode("mn", [text2]);
        } else if (group.text === "\\prime") {
          node = new mathMLTree.MathNode("mo", [text2]);
        } else {
          node = new mathMLTree.MathNode("mi", [text2]);
        }
        if (variant !== defaultVariant[node.type]) {
          node.setAttribute("mathvariant", variant);
        }
        return node;
      }
    });
    cssSpace = {
      "\\nobreak": "nobreak",
      "\\allowbreak": "allowbreak"
    };
    regularSpace = {
      " ": {},
      "\\ ": {},
      "~": {
        className: "nobreak"
      },
      "\\space": {},
      "\\nobreakspace": {
        className: "nobreak"
      }
    };
    defineFunctionBuilders({
      type: "spacing",
      htmlBuilder(group, options) {
        if (regularSpace.hasOwnProperty(group.text)) {
          var className = regularSpace[group.text].className || "";
          if (group.mode === "text") {
            var ord = buildCommon.makeOrd(group, options, "textord");
            ord.classes.push(className);
            return ord;
          } else {
            return buildCommon.makeSpan(["mspace", className], [buildCommon.mathsym(group.text, group.mode, options)], options);
          }
        } else if (cssSpace.hasOwnProperty(group.text)) {
          return buildCommon.makeSpan(["mspace", cssSpace[group.text]], [], options);
        } else {
          throw new ParseError('Unknown type of space "' + group.text + '"');
        }
      },
      mathmlBuilder(group, options) {
        var node;
        if (regularSpace.hasOwnProperty(group.text)) {
          node = new mathMLTree.MathNode("mtext", [new mathMLTree.TextNode("\xA0")]);
        } else if (cssSpace.hasOwnProperty(group.text)) {
          return new mathMLTree.MathNode("mspace");
        } else {
          throw new ParseError('Unknown type of space "' + group.text + '"');
        }
        return node;
      }
    });
    pad = () => {
      var padNode = new mathMLTree.MathNode("mtd", []);
      padNode.setAttribute("width", "50%");
      return padNode;
    };
    defineFunctionBuilders({
      type: "tag",
      mathmlBuilder(group, options) {
        var table = new mathMLTree.MathNode("mtable", [new mathMLTree.MathNode("mtr", [pad(), new mathMLTree.MathNode("mtd", [buildExpressionRow(group.body, options)]), pad(), new mathMLTree.MathNode("mtd", [buildExpressionRow(group.tag, options)])])]);
        table.setAttribute("width", "100%");
        return table;
      }
    });
    textFontFamilies = {
      "\\text": void 0,
      "\\textrm": "textrm",
      "\\textsf": "textsf",
      "\\texttt": "texttt",
      "\\textnormal": "textrm"
    };
    textFontWeights = {
      "\\textbf": "textbf",
      "\\textmd": "textmd"
    };
    textFontShapes = {
      "\\textit": "textit",
      "\\textup": "textup"
    };
    optionsWithFont = (group, options) => {
      var font = group.font;
      if (!font) {
        return options;
      } else if (textFontFamilies[font]) {
        return options.withTextFontFamily(textFontFamilies[font]);
      } else if (textFontWeights[font]) {
        return options.withTextFontWeight(textFontWeights[font]);
      } else {
        return options.withTextFontShape(textFontShapes[font]);
      }
    };
    defineFunction({
      type: "text",
      names: [
        "\\text",
        "\\textrm",
        "\\textsf",
        "\\texttt",
        "\\textnormal",
        "\\textbf",
        "\\textmd",
        "\\textit",
        "\\textup"
      ],
      props: {
        numArgs: 1,
        argTypes: ["text"],
        allowedInArgument: true,
        allowedInText: true
      },
      handler(_ref, args) {
        var {
          parser,
          funcName
        } = _ref;
        var body = args[0];
        return {
          type: "text",
          mode: parser.mode,
          body: ordargument(body),
          font: funcName
        };
      },
      htmlBuilder(group, options) {
        var newOptions = optionsWithFont(group, options);
        var inner2 = buildExpression$1(group.body, newOptions, true);
        return buildCommon.makeSpan(["mord", "text"], inner2, newOptions);
      },
      mathmlBuilder(group, options) {
        var newOptions = optionsWithFont(group, options);
        return buildExpressionRow(group.body, newOptions);
      }
    });
    defineFunction({
      type: "underline",
      names: ["\\underline"],
      props: {
        numArgs: 1,
        allowedInText: true
      },
      handler(_ref, args) {
        var {
          parser
        } = _ref;
        return {
          type: "underline",
          mode: parser.mode,
          body: args[0]
        };
      },
      htmlBuilder(group, options) {
        var innerGroup = buildGroup$1(group.body, options);
        var line = buildCommon.makeLineSpan("underline-line", options);
        var defaultRuleThickness = options.fontMetrics().defaultRuleThickness;
        var vlist = buildCommon.makeVList({
          positionType: "top",
          positionData: innerGroup.height,
          children: [{
            type: "kern",
            size: defaultRuleThickness
          }, {
            type: "elem",
            elem: line
          }, {
            type: "kern",
            size: 3 * defaultRuleThickness
          }, {
            type: "elem",
            elem: innerGroup
          }]
        }, options);
        return buildCommon.makeSpan(["mord", "underline"], [vlist], options);
      },
      mathmlBuilder(group, options) {
        var operator = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode("\u203E")]);
        operator.setAttribute("stretchy", "true");
        var node = new mathMLTree.MathNode("munder", [buildGroup2(group.body, options), operator]);
        node.setAttribute("accentunder", "true");
        return node;
      }
    });
    defineFunction({
      type: "vcenter",
      names: ["\\vcenter"],
      props: {
        numArgs: 1,
        argTypes: ["original"],
        allowedInText: false
      },
      handler(_ref, args) {
        var {
          parser
        } = _ref;
        return {
          type: "vcenter",
          mode: parser.mode,
          body: args[0]
        };
      },
      htmlBuilder(group, options) {
        var body = buildGroup$1(group.body, options);
        var axisHeight = options.fontMetrics().axisHeight;
        var dy = 0.5 * (body.height - axisHeight - (body.depth + axisHeight));
        return buildCommon.makeVList({
          positionType: "shift",
          positionData: dy,
          children: [{
            type: "elem",
            elem: body
          }]
        }, options);
      },
      mathmlBuilder(group, options) {
        return new mathMLTree.MathNode("mpadded", [buildGroup2(group.body, options)], ["vcenter"]);
      }
    });
    defineFunction({
      type: "verb",
      names: ["\\verb"],
      props: {
        numArgs: 0,
        allowedInText: true
      },
      handler(context, args, optArgs) {
        throw new ParseError("\\verb ended by end of line instead of matching delimiter");
      },
      htmlBuilder(group, options) {
        var text2 = makeVerb(group);
        var body = [];
        var newOptions = options.havingStyle(options.style.text());
        for (var i = 0; i < text2.length; i++) {
          var c2 = text2[i];
          if (c2 === "~") {
            c2 = "\\textasciitilde";
          }
          body.push(buildCommon.makeSymbol(c2, "Typewriter-Regular", group.mode, newOptions, ["mord", "texttt"]));
        }
        return buildCommon.makeSpan(["mord", "text"].concat(newOptions.sizingClasses(options)), buildCommon.tryCombineChars(body), newOptions);
      },
      mathmlBuilder(group, options) {
        var text2 = new mathMLTree.TextNode(makeVerb(group));
        var node = new mathMLTree.MathNode("mtext", [text2]);
        node.setAttribute("mathvariant", "monospace");
        return node;
      }
    });
    makeVerb = (group) => group.body.replace(/ /g, group.star ? "\u2423" : "\xA0");
    functions = _functions;
    spaceRegexString = "[ \r\n	]";
    controlWordRegexString = "\\\\[a-zA-Z@]+";
    controlSymbolRegexString = "\\\\[^\uD800-\uDFFF]";
    controlWordWhitespaceRegexString = "(" + controlWordRegexString + ")" + spaceRegexString + "*";
    controlSpaceRegexString = "\\\\(\n|[ \r	]+\n?)[ \r	]*";
    combiningDiacriticalMarkString = "[\u0300-\u036F]";
    combiningDiacriticalMarksEndRegex = new RegExp(combiningDiacriticalMarkString + "+$");
    tokenRegexString = "(" + spaceRegexString + "+)|" + (controlSpaceRegexString + "|") + "([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + (combiningDiacriticalMarkString + "*") + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (combiningDiacriticalMarkString + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + controlWordWhitespaceRegexString) + ("|" + controlSymbolRegexString + ")");
    Lexer = class {
      constructor(input, settings) {
        this.input = void 0;
        this.settings = void 0;
        this.tokenRegex = void 0;
        this.catcodes = void 0;
        this.input = input;
        this.settings = settings;
        this.tokenRegex = new RegExp(tokenRegexString, "g");
        this.catcodes = {
          "%": 14,
          "~": 13
        };
      }
      setCatcode(char, code) {
        this.catcodes[char] = code;
      }
      lex() {
        var input = this.input;
        var pos = this.tokenRegex.lastIndex;
        if (pos === input.length) {
          return new Token("EOF", new SourceLocation(this, pos, pos));
        }
        var match = this.tokenRegex.exec(input);
        if (match === null || match.index !== pos) {
          throw new ParseError("Unexpected character: '" + input[pos] + "'", new Token(input[pos], new SourceLocation(this, pos, pos + 1)));
        }
        var text2 = match[6] || match[3] || (match[2] ? "\\ " : " ");
        if (this.catcodes[text2] === 14) {
          var nlIndex = input.indexOf("\n", this.tokenRegex.lastIndex);
          if (nlIndex === -1) {
            this.tokenRegex.lastIndex = input.length;
            this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)");
          } else {
            this.tokenRegex.lastIndex = nlIndex + 1;
          }
          return this.lex();
        }
        return new Token(text2, new SourceLocation(this, pos, this.tokenRegex.lastIndex));
      }
    };
    Namespace = class {
      constructor(builtins, globalMacros) {
        if (builtins === void 0) {
          builtins = {};
        }
        if (globalMacros === void 0) {
          globalMacros = {};
        }
        this.current = void 0;
        this.builtins = void 0;
        this.undefStack = void 0;
        this.current = globalMacros;
        this.builtins = builtins;
        this.undefStack = [];
      }
      beginGroup() {
        this.undefStack.push({});
      }
      endGroup() {
        if (this.undefStack.length === 0) {
          throw new ParseError("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
        }
        var undefs = this.undefStack.pop();
        for (var undef in undefs) {
          if (undefs.hasOwnProperty(undef)) {
            if (undefs[undef] == null) {
              delete this.current[undef];
            } else {
              this.current[undef] = undefs[undef];
            }
          }
        }
      }
      endGroups() {
        while (this.undefStack.length > 0) {
          this.endGroup();
        }
      }
      has(name4) {
        return this.current.hasOwnProperty(name4) || this.builtins.hasOwnProperty(name4);
      }
      get(name4) {
        if (this.current.hasOwnProperty(name4)) {
          return this.current[name4];
        } else {
          return this.builtins[name4];
        }
      }
      set(name4, value, global2) {
        if (global2 === void 0) {
          global2 = false;
        }
        if (global2) {
          for (var i = 0; i < this.undefStack.length; i++) {
            delete this.undefStack[i][name4];
          }
          if (this.undefStack.length > 0) {
            this.undefStack[this.undefStack.length - 1][name4] = value;
          }
        } else {
          var top = this.undefStack[this.undefStack.length - 1];
          if (top && !top.hasOwnProperty(name4)) {
            top[name4] = this.current[name4];
          }
        }
        if (value == null) {
          delete this.current[name4];
        } else {
          this.current[name4] = value;
        }
      }
    };
    macros = _macros;
    defineMacro("\\noexpand", function(context) {
      var t2 = context.popToken();
      if (context.isExpandable(t2.text)) {
        t2.noexpand = true;
        t2.treatAsRelax = true;
      }
      return {
        tokens: [t2],
        numArgs: 0
      };
    });
    defineMacro("\\expandafter", function(context) {
      var t2 = context.popToken();
      context.expandOnce(true);
      return {
        tokens: [t2],
        numArgs: 0
      };
    });
    defineMacro("\\@firstoftwo", function(context) {
      var args = context.consumeArgs(2);
      return {
        tokens: args[0],
        numArgs: 0
      };
    });
    defineMacro("\\@secondoftwo", function(context) {
      var args = context.consumeArgs(2);
      return {
        tokens: args[1],
        numArgs: 0
      };
    });
    defineMacro("\\@ifnextchar", function(context) {
      var args = context.consumeArgs(3);
      context.consumeSpaces();
      var nextToken = context.future();
      if (args[0].length === 1 && args[0][0].text === nextToken.text) {
        return {
          tokens: args[1],
          numArgs: 0
        };
      } else {
        return {
          tokens: args[2],
          numArgs: 0
        };
      }
    });
    defineMacro("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
    defineMacro("\\TextOrMath", function(context) {
      var args = context.consumeArgs(2);
      if (context.mode === "text") {
        return {
          tokens: args[0],
          numArgs: 0
        };
      } else {
        return {
          tokens: args[1],
          numArgs: 0
        };
      }
    });
    digitToNumber = {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "a": 10,
      "A": 10,
      "b": 11,
      "B": 11,
      "c": 12,
      "C": 12,
      "d": 13,
      "D": 13,
      "e": 14,
      "E": 14,
      "f": 15,
      "F": 15
    };
    defineMacro("\\char", function(context) {
      var token = context.popToken();
      var base2;
      var number = "";
      if (token.text === "'") {
        base2 = 8;
        token = context.popToken();
      } else if (token.text === '"') {
        base2 = 16;
        token = context.popToken();
      } else if (token.text === "`") {
        token = context.popToken();
        if (token.text[0] === "\\") {
          number = token.text.charCodeAt(1);
        } else if (token.text === "EOF") {
          throw new ParseError("\\char` missing argument");
        } else {
          number = token.text.charCodeAt(0);
        }
      } else {
        base2 = 10;
      }
      if (base2) {
        number = digitToNumber[token.text];
        if (number == null || number >= base2) {
          throw new ParseError("Invalid base-" + base2 + " digit " + token.text);
        }
        var digit;
        while ((digit = digitToNumber[context.future().text]) != null && digit < base2) {
          number *= base2;
          number += digit;
          context.popToken();
        }
      }
      return "\\@char{" + number + "}";
    });
    newcommand = (context, existsOK, nonexistsOK) => {
      var arg = context.consumeArg().tokens;
      if (arg.length !== 1) {
        throw new ParseError("\\newcommand's first argument must be a macro name");
      }
      var name4 = arg[0].text;
      var exists = context.isDefined(name4);
      if (exists && !existsOK) {
        throw new ParseError("\\newcommand{" + name4 + "} attempting to redefine " + (name4 + "; use \\renewcommand"));
      }
      if (!exists && !nonexistsOK) {
        throw new ParseError("\\renewcommand{" + name4 + "} when command " + name4 + " does not yet exist; use \\newcommand");
      }
      var numArgs = 0;
      arg = context.consumeArg().tokens;
      if (arg.length === 1 && arg[0].text === "[") {
        var argText = "";
        var token = context.expandNextToken();
        while (token.text !== "]" && token.text !== "EOF") {
          argText += token.text;
          token = context.expandNextToken();
        }
        if (!argText.match(/^\s*[0-9]+\s*$/)) {
          throw new ParseError("Invalid number of arguments: " + argText);
        }
        numArgs = parseInt(argText);
        arg = context.consumeArg().tokens;
      }
      context.macros.set(name4, {
        tokens: arg,
        numArgs
      });
      return "";
    };
    defineMacro("\\newcommand", (context) => newcommand(context, false, true));
    defineMacro("\\renewcommand", (context) => newcommand(context, true, false));
    defineMacro("\\providecommand", (context) => newcommand(context, true, true));
    defineMacro("\\message", (context) => {
      var arg = context.consumeArgs(1)[0];
      console.log(arg.reverse().map((token) => token.text).join(""));
      return "";
    });
    defineMacro("\\errmessage", (context) => {
      var arg = context.consumeArgs(1)[0];
      console.error(arg.reverse().map((token) => token.text).join(""));
      return "";
    });
    defineMacro("\\show", (context) => {
      var tok = context.popToken();
      var name4 = tok.text;
      console.log(tok, context.macros.get(name4), functions[name4], symbols.math[name4], symbols.text[name4]);
      return "";
    });
    defineMacro("\\bgroup", "{");
    defineMacro("\\egroup", "}");
    defineMacro("~", "\\nobreakspace");
    defineMacro("\\lq", "`");
    defineMacro("\\rq", "'");
    defineMacro("\\aa", "\\r a");
    defineMacro("\\AA", "\\r A");
    defineMacro("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xA9}");
    defineMacro("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
    defineMacro("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}");
    defineMacro("\u212C", "\\mathscr{B}");
    defineMacro("\u2130", "\\mathscr{E}");
    defineMacro("\u2131", "\\mathscr{F}");
    defineMacro("\u210B", "\\mathscr{H}");
    defineMacro("\u2110", "\\mathscr{I}");
    defineMacro("\u2112", "\\mathscr{L}");
    defineMacro("\u2133", "\\mathscr{M}");
    defineMacro("\u211B", "\\mathscr{R}");
    defineMacro("\u212D", "\\mathfrak{C}");
    defineMacro("\u210C", "\\mathfrak{H}");
    defineMacro("\u2128", "\\mathfrak{Z}");
    defineMacro("\\Bbbk", "\\Bbb{k}");
    defineMacro("\xB7", "\\cdotp");
    defineMacro("\\llap", "\\mathllap{\\textrm{#1}}");
    defineMacro("\\rlap", "\\mathrlap{\\textrm{#1}}");
    defineMacro("\\clap", "\\mathclap{\\textrm{#1}}");
    defineMacro("\\mathstrut", "\\vphantom{(}");
    defineMacro("\\underbar", "\\underline{\\text{#1}}");
    defineMacro("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
    defineMacro("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}");
    defineMacro("\\ne", "\\neq");
    defineMacro("\u2260", "\\neq");
    defineMacro("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}");
    defineMacro("\u2209", "\\notin");
    defineMacro("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}");
    defineMacro("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}");
    defineMacro("\u225A", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}");
    defineMacro("\u225B", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}");
    defineMacro("\u225D", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}");
    defineMacro("\u225E", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}");
    defineMacro("\u225F", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}");
    defineMacro("\u27C2", "\\perp");
    defineMacro("\u203C", "\\mathclose{!\\mkern-0.8mu!}");
    defineMacro("\u220C", "\\notni");
    defineMacro("\u231C", "\\ulcorner");
    defineMacro("\u231D", "\\urcorner");
    defineMacro("\u231E", "\\llcorner");
    defineMacro("\u231F", "\\lrcorner");
    defineMacro("\xA9", "\\copyright");
    defineMacro("\xAE", "\\textregistered");
    defineMacro("\uFE0F", "\\textregistered");
    defineMacro("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
    defineMacro("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
    defineMacro("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
    defineMacro("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
    defineMacro("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
    defineMacro("\u22EE", "\\vdots");
    defineMacro("\\varGamma", "\\mathit{\\Gamma}");
    defineMacro("\\varDelta", "\\mathit{\\Delta}");
    defineMacro("\\varTheta", "\\mathit{\\Theta}");
    defineMacro("\\varLambda", "\\mathit{\\Lambda}");
    defineMacro("\\varXi", "\\mathit{\\Xi}");
    defineMacro("\\varPi", "\\mathit{\\Pi}");
    defineMacro("\\varSigma", "\\mathit{\\Sigma}");
    defineMacro("\\varUpsilon", "\\mathit{\\Upsilon}");
    defineMacro("\\varPhi", "\\mathit{\\Phi}");
    defineMacro("\\varPsi", "\\mathit{\\Psi}");
    defineMacro("\\varOmega", "\\mathit{\\Omega}");
    defineMacro("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
    defineMacro("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
    defineMacro("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
    defineMacro("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
    defineMacro("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
    defineMacro("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
    dotsByToken = {
      ",": "\\dotsc",
      "\\not": "\\dotsb",
      "+": "\\dotsb",
      "=": "\\dotsb",
      "<": "\\dotsb",
      ">": "\\dotsb",
      "-": "\\dotsb",
      "*": "\\dotsb",
      ":": "\\dotsb",
      "\\DOTSB": "\\dotsb",
      "\\coprod": "\\dotsb",
      "\\bigvee": "\\dotsb",
      "\\bigwedge": "\\dotsb",
      "\\biguplus": "\\dotsb",
      "\\bigcap": "\\dotsb",
      "\\bigcup": "\\dotsb",
      "\\prod": "\\dotsb",
      "\\sum": "\\dotsb",
      "\\bigotimes": "\\dotsb",
      "\\bigoplus": "\\dotsb",
      "\\bigodot": "\\dotsb",
      "\\bigsqcup": "\\dotsb",
      "\\And": "\\dotsb",
      "\\longrightarrow": "\\dotsb",
      "\\Longrightarrow": "\\dotsb",
      "\\longleftarrow": "\\dotsb",
      "\\Longleftarrow": "\\dotsb",
      "\\longleftrightarrow": "\\dotsb",
      "\\Longleftrightarrow": "\\dotsb",
      "\\mapsto": "\\dotsb",
      "\\longmapsto": "\\dotsb",
      "\\hookrightarrow": "\\dotsb",
      "\\doteq": "\\dotsb",
      "\\mathbin": "\\dotsb",
      "\\mathrel": "\\dotsb",
      "\\relbar": "\\dotsb",
      "\\Relbar": "\\dotsb",
      "\\xrightarrow": "\\dotsb",
      "\\xleftarrow": "\\dotsb",
      "\\DOTSI": "\\dotsi",
      "\\int": "\\dotsi",
      "\\oint": "\\dotsi",
      "\\iint": "\\dotsi",
      "\\iiint": "\\dotsi",
      "\\iiiint": "\\dotsi",
      "\\idotsint": "\\dotsi",
      "\\DOTSX": "\\dotsx"
    };
    defineMacro("\\dots", function(context) {
      var thedots = "\\dotso";
      var next = context.expandAfterFuture().text;
      if (next in dotsByToken) {
        thedots = dotsByToken[next];
      } else if (next.slice(0, 4) === "\\not") {
        thedots = "\\dotsb";
      } else if (next in symbols.math) {
        if (utils.contains(["bin", "rel"], symbols.math[next].group)) {
          thedots = "\\dotsb";
        }
      }
      return thedots;
    });
    spaceAfterDots = {
      ")": true,
      "]": true,
      "\\rbrack": true,
      "\\}": true,
      "\\rbrace": true,
      "\\rangle": true,
      "\\rceil": true,
      "\\rfloor": true,
      "\\rgroup": true,
      "\\rmoustache": true,
      "\\right": true,
      "\\bigr": true,
      "\\biggr": true,
      "\\Bigr": true,
      "\\Biggr": true,
      "$": true,
      ";": true,
      ".": true,
      ",": true
    };
    defineMacro("\\dotso", function(context) {
      var next = context.future().text;
      if (next in spaceAfterDots) {
        return "\\ldots\\,";
      } else {
        return "\\ldots";
      }
    });
    defineMacro("\\dotsc", function(context) {
      var next = context.future().text;
      if (next in spaceAfterDots && next !== ",") {
        return "\\ldots\\,";
      } else {
        return "\\ldots";
      }
    });
    defineMacro("\\cdots", function(context) {
      var next = context.future().text;
      if (next in spaceAfterDots) {
        return "\\@cdots\\,";
      } else {
        return "\\@cdots";
      }
    });
    defineMacro("\\dotsb", "\\cdots");
    defineMacro("\\dotsm", "\\cdots");
    defineMacro("\\dotsi", "\\!\\cdots");
    defineMacro("\\dotsx", "\\ldots\\,");
    defineMacro("\\DOTSI", "\\relax");
    defineMacro("\\DOTSB", "\\relax");
    defineMacro("\\DOTSX", "\\relax");
    defineMacro("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
    defineMacro("\\,", "\\tmspace+{3mu}{.1667em}");
    defineMacro("\\thinspace", "\\,");
    defineMacro("\\>", "\\mskip{4mu}");
    defineMacro("\\:", "\\tmspace+{4mu}{.2222em}");
    defineMacro("\\medspace", "\\:");
    defineMacro("\\;", "\\tmspace+{5mu}{.2777em}");
    defineMacro("\\thickspace", "\\;");
    defineMacro("\\!", "\\tmspace-{3mu}{.1667em}");
    defineMacro("\\negthinspace", "\\!");
    defineMacro("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
    defineMacro("\\negthickspace", "\\tmspace-{5mu}{.277em}");
    defineMacro("\\enspace", "\\kern.5em ");
    defineMacro("\\enskip", "\\hskip.5em\\relax");
    defineMacro("\\quad", "\\hskip1em\\relax");
    defineMacro("\\qquad", "\\hskip2em\\relax");
    defineMacro("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
    defineMacro("\\tag@paren", "\\tag@literal{({#1})}");
    defineMacro("\\tag@literal", (context) => {
      if (context.macros.get("\\df@tag")) {
        throw new ParseError("Multiple \\tag");
      }
      return "\\gdef\\df@tag{\\text{#1}}";
    });
    defineMacro("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
    defineMacro("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
    defineMacro("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
    defineMacro("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
    defineMacro("\\newline", "\\\\\\relax");
    defineMacro("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
    latexRaiseA = makeEm(fontMetricsData["Main-Regular"]["T".charCodeAt(0)][1] - 0.7 * fontMetricsData["Main-Regular"]["A".charCodeAt(0)][1]);
    defineMacro("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + latexRaiseA + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
    defineMacro("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + latexRaiseA + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
    defineMacro("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
    defineMacro("\\@hspace", "\\hskip #1\\relax");
    defineMacro("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
    defineMacro("\\ordinarycolon", ":");
    defineMacro("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
    defineMacro("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
    defineMacro("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
    defineMacro("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
    defineMacro("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
    defineMacro("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
    defineMacro("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
    defineMacro("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
    defineMacro("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
    defineMacro("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
    defineMacro("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
    defineMacro("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
    defineMacro("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
    defineMacro("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
    defineMacro("\u2237", "\\dblcolon");
    defineMacro("\u2239", "\\eqcolon");
    defineMacro("\u2254", "\\coloneqq");
    defineMacro("\u2255", "\\eqqcolon");
    defineMacro("\u2A74", "\\Coloneqq");
    defineMacro("\\ratio", "\\vcentcolon");
    defineMacro("\\coloncolon", "\\dblcolon");
    defineMacro("\\colonequals", "\\coloneqq");
    defineMacro("\\coloncolonequals", "\\Coloneqq");
    defineMacro("\\equalscolon", "\\eqqcolon");
    defineMacro("\\equalscoloncolon", "\\Eqqcolon");
    defineMacro("\\colonminus", "\\coloneq");
    defineMacro("\\coloncolonminus", "\\Coloneq");
    defineMacro("\\minuscolon", "\\eqcolon");
    defineMacro("\\minuscoloncolon", "\\Eqcolon");
    defineMacro("\\coloncolonapprox", "\\Colonapprox");
    defineMacro("\\coloncolonsim", "\\Colonsim");
    defineMacro("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
    defineMacro("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
    defineMacro("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
    defineMacro("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
    defineMacro("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}");
    defineMacro("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
    defineMacro("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
    defineMacro("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
    defineMacro("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
    defineMacro("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
    defineMacro("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
    defineMacro("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
    defineMacro("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
    defineMacro("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}");
    defineMacro("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}");
    defineMacro("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}");
    defineMacro("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}");
    defineMacro("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}");
    defineMacro("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}");
    defineMacro("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}");
    defineMacro("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}");
    defineMacro("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}");
    defineMacro("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}");
    defineMacro("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228A}");
    defineMacro("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2ACB}");
    defineMacro("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228B}");
    defineMacro("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2ACC}");
    defineMacro("\\imath", "\\html@mathml{\\@imath}{\u0131}");
    defineMacro("\\jmath", "\\html@mathml{\\@jmath}{\u0237}");
    defineMacro("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}");
    defineMacro("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}");
    defineMacro("\u27E6", "\\llbracket");
    defineMacro("\u27E7", "\\rrbracket");
    defineMacro("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}");
    defineMacro("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}");
    defineMacro("\u2983", "\\lBrace");
    defineMacro("\u2984", "\\rBrace");
    defineMacro("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}");
    defineMacro("\u29B5", "\\minuso");
    defineMacro("\\darr", "\\downarrow");
    defineMacro("\\dArr", "\\Downarrow");
    defineMacro("\\Darr", "\\Downarrow");
    defineMacro("\\lang", "\\langle");
    defineMacro("\\rang", "\\rangle");
    defineMacro("\\uarr", "\\uparrow");
    defineMacro("\\uArr", "\\Uparrow");
    defineMacro("\\Uarr", "\\Uparrow");
    defineMacro("\\N", "\\mathbb{N}");
    defineMacro("\\R", "\\mathbb{R}");
    defineMacro("\\Z", "\\mathbb{Z}");
    defineMacro("\\alef", "\\aleph");
    defineMacro("\\alefsym", "\\aleph");
    defineMacro("\\Alpha", "\\mathrm{A}");
    defineMacro("\\Beta", "\\mathrm{B}");
    defineMacro("\\bull", "\\bullet");
    defineMacro("\\Chi", "\\mathrm{X}");
    defineMacro("\\clubs", "\\clubsuit");
    defineMacro("\\cnums", "\\mathbb{C}");
    defineMacro("\\Complex", "\\mathbb{C}");
    defineMacro("\\Dagger", "\\ddagger");
    defineMacro("\\diamonds", "\\diamondsuit");
    defineMacro("\\empty", "\\emptyset");
    defineMacro("\\Epsilon", "\\mathrm{E}");
    defineMacro("\\Eta", "\\mathrm{H}");
    defineMacro("\\exist", "\\exists");
    defineMacro("\\harr", "\\leftrightarrow");
    defineMacro("\\hArr", "\\Leftrightarrow");
    defineMacro("\\Harr", "\\Leftrightarrow");
    defineMacro("\\hearts", "\\heartsuit");
    defineMacro("\\image", "\\Im");
    defineMacro("\\infin", "\\infty");
    defineMacro("\\Iota", "\\mathrm{I}");
    defineMacro("\\isin", "\\in");
    defineMacro("\\Kappa", "\\mathrm{K}");
    defineMacro("\\larr", "\\leftarrow");
    defineMacro("\\lArr", "\\Leftarrow");
    defineMacro("\\Larr", "\\Leftarrow");
    defineMacro("\\lrarr", "\\leftrightarrow");
    defineMacro("\\lrArr", "\\Leftrightarrow");
    defineMacro("\\Lrarr", "\\Leftrightarrow");
    defineMacro("\\Mu", "\\mathrm{M}");
    defineMacro("\\natnums", "\\mathbb{N}");
    defineMacro("\\Nu", "\\mathrm{N}");
    defineMacro("\\Omicron", "\\mathrm{O}");
    defineMacro("\\plusmn", "\\pm");
    defineMacro("\\rarr", "\\rightarrow");
    defineMacro("\\rArr", "\\Rightarrow");
    defineMacro("\\Rarr", "\\Rightarrow");
    defineMacro("\\real", "\\Re");
    defineMacro("\\reals", "\\mathbb{R}");
    defineMacro("\\Reals", "\\mathbb{R}");
    defineMacro("\\Rho", "\\mathrm{P}");
    defineMacro("\\sdot", "\\cdot");
    defineMacro("\\sect", "\\S");
    defineMacro("\\spades", "\\spadesuit");
    defineMacro("\\sub", "\\subset");
    defineMacro("\\sube", "\\subseteq");
    defineMacro("\\supe", "\\supseteq");
    defineMacro("\\Tau", "\\mathrm{T}");
    defineMacro("\\thetasym", "\\vartheta");
    defineMacro("\\weierp", "\\wp");
    defineMacro("\\Zeta", "\\mathrm{Z}");
    defineMacro("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
    defineMacro("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
    defineMacro("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
    defineMacro("\\bra", "\\mathinner{\\langle{#1}|}");
    defineMacro("\\ket", "\\mathinner{|{#1}\\rangle}");
    defineMacro("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
    defineMacro("\\Bra", "\\left\\langle#1\\right|");
    defineMacro("\\Ket", "\\left|#1\\right\\rangle");
    braketHelper = (one) => (context) => {
      var left = context.consumeArg().tokens;
      var middle = context.consumeArg().tokens;
      var middleDouble = context.consumeArg().tokens;
      var right = context.consumeArg().tokens;
      var oldMiddle = context.macros.get("|");
      var oldMiddleDouble = context.macros.get("\\|");
      context.macros.beginGroup();
      var midMacro = (double) => (context2) => {
        if (one) {
          context2.macros.set("|", oldMiddle);
          if (middleDouble.length) {
            context2.macros.set("\\|", oldMiddleDouble);
          }
        }
        var doubled = double;
        if (!double && middleDouble.length) {
          var nextToken = context2.future();
          if (nextToken.text === "|") {
            context2.popToken();
            doubled = true;
          }
        }
        return {
          tokens: doubled ? middleDouble : middle,
          numArgs: 0
        };
      };
      context.macros.set("|", midMacro(false));
      if (middleDouble.length) {
        context.macros.set("\\|", midMacro(true));
      }
      var arg = context.consumeArg().tokens;
      var expanded = context.expandTokens([
        ...right,
        ...arg,
        ...left
      ]);
      context.macros.endGroup();
      return {
        tokens: expanded.reverse(),
        numArgs: 0
      };
    };
    defineMacro("\\bra@ket", braketHelper(false));
    defineMacro("\\bra@set", braketHelper(true));
    defineMacro("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
    defineMacro("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
    defineMacro("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
    defineMacro("\\angln", "{\\angl n}");
    defineMacro("\\blue", "\\textcolor{##6495ed}{#1}");
    defineMacro("\\orange", "\\textcolor{##ffa500}{#1}");
    defineMacro("\\pink", "\\textcolor{##ff00af}{#1}");
    defineMacro("\\red", "\\textcolor{##df0030}{#1}");
    defineMacro("\\green", "\\textcolor{##28ae7b}{#1}");
    defineMacro("\\gray", "\\textcolor{gray}{#1}");
    defineMacro("\\purple", "\\textcolor{##9d38bd}{#1}");
    defineMacro("\\blueA", "\\textcolor{##ccfaff}{#1}");
    defineMacro("\\blueB", "\\textcolor{##80f6ff}{#1}");
    defineMacro("\\blueC", "\\textcolor{##63d9ea}{#1}");
    defineMacro("\\blueD", "\\textcolor{##11accd}{#1}");
    defineMacro("\\blueE", "\\textcolor{##0c7f99}{#1}");
    defineMacro("\\tealA", "\\textcolor{##94fff5}{#1}");
    defineMacro("\\tealB", "\\textcolor{##26edd5}{#1}");
    defineMacro("\\tealC", "\\textcolor{##01d1c1}{#1}");
    defineMacro("\\tealD", "\\textcolor{##01a995}{#1}");
    defineMacro("\\tealE", "\\textcolor{##208170}{#1}");
    defineMacro("\\greenA", "\\textcolor{##b6ffb0}{#1}");
    defineMacro("\\greenB", "\\textcolor{##8af281}{#1}");
    defineMacro("\\greenC", "\\textcolor{##74cf70}{#1}");
    defineMacro("\\greenD", "\\textcolor{##1fab54}{#1}");
    defineMacro("\\greenE", "\\textcolor{##0d923f}{#1}");
    defineMacro("\\goldA", "\\textcolor{##ffd0a9}{#1}");
    defineMacro("\\goldB", "\\textcolor{##ffbb71}{#1}");
    defineMacro("\\goldC", "\\textcolor{##ff9c39}{#1}");
    defineMacro("\\goldD", "\\textcolor{##e07d10}{#1}");
    defineMacro("\\goldE", "\\textcolor{##a75a05}{#1}");
    defineMacro("\\redA", "\\textcolor{##fca9a9}{#1}");
    defineMacro("\\redB", "\\textcolor{##ff8482}{#1}");
    defineMacro("\\redC", "\\textcolor{##f9685d}{#1}");
    defineMacro("\\redD", "\\textcolor{##e84d39}{#1}");
    defineMacro("\\redE", "\\textcolor{##bc2612}{#1}");
    defineMacro("\\maroonA", "\\textcolor{##ffbde0}{#1}");
    defineMacro("\\maroonB", "\\textcolor{##ff92c6}{#1}");
    defineMacro("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
    defineMacro("\\maroonD", "\\textcolor{##ca337c}{#1}");
    defineMacro("\\maroonE", "\\textcolor{##9e034e}{#1}");
    defineMacro("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
    defineMacro("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
    defineMacro("\\purpleC", "\\textcolor{##aa87ff}{#1}");
    defineMacro("\\purpleD", "\\textcolor{##7854ab}{#1}");
    defineMacro("\\purpleE", "\\textcolor{##543b78}{#1}");
    defineMacro("\\mintA", "\\textcolor{##f5f9e8}{#1}");
    defineMacro("\\mintB", "\\textcolor{##edf2df}{#1}");
    defineMacro("\\mintC", "\\textcolor{##e0e5cc}{#1}");
    defineMacro("\\grayA", "\\textcolor{##f6f7f7}{#1}");
    defineMacro("\\grayB", "\\textcolor{##f0f1f2}{#1}");
    defineMacro("\\grayC", "\\textcolor{##e3e5e6}{#1}");
    defineMacro("\\grayD", "\\textcolor{##d6d8da}{#1}");
    defineMacro("\\grayE", "\\textcolor{##babec2}{#1}");
    defineMacro("\\grayF", "\\textcolor{##888d93}{#1}");
    defineMacro("\\grayG", "\\textcolor{##626569}{#1}");
    defineMacro("\\grayH", "\\textcolor{##3b3e40}{#1}");
    defineMacro("\\grayI", "\\textcolor{##21242c}{#1}");
    defineMacro("\\kaBlue", "\\textcolor{##314453}{#1}");
    defineMacro("\\kaGreen", "\\textcolor{##71B307}{#1}");
    implicitCommands = {
      "^": true,
      "_": true,
      "\\limits": true,
      "\\nolimits": true
    };
    MacroExpander = class {
      constructor(input, settings, mode) {
        this.settings = void 0;
        this.expansionCount = void 0;
        this.lexer = void 0;
        this.macros = void 0;
        this.stack = void 0;
        this.mode = void 0;
        this.settings = settings;
        this.expansionCount = 0;
        this.feed(input);
        this.macros = new Namespace(macros, settings.macros);
        this.mode = mode;
        this.stack = [];
      }
      feed(input) {
        this.lexer = new Lexer(input, this.settings);
      }
      switchMode(newMode) {
        this.mode = newMode;
      }
      beginGroup() {
        this.macros.beginGroup();
      }
      endGroup() {
        this.macros.endGroup();
      }
      endGroups() {
        this.macros.endGroups();
      }
      future() {
        if (this.stack.length === 0) {
          this.pushToken(this.lexer.lex());
        }
        return this.stack[this.stack.length - 1];
      }
      popToken() {
        this.future();
        return this.stack.pop();
      }
      pushToken(token) {
        this.stack.push(token);
      }
      pushTokens(tokens) {
        this.stack.push(...tokens);
      }
      scanArgument(isOptional) {
        var start;
        var end;
        var tokens;
        if (isOptional) {
          this.consumeSpaces();
          if (this.future().text !== "[") {
            return null;
          }
          start = this.popToken();
          ({
            tokens,
            end
          } = this.consumeArg(["]"]));
        } else {
          ({
            tokens,
            start,
            end
          } = this.consumeArg());
        }
        this.pushToken(new Token("EOF", end.loc));
        this.pushTokens(tokens);
        return start.range(end, "");
      }
      consumeSpaces() {
        for (; ; ) {
          var token = this.future();
          if (token.text === " ") {
            this.stack.pop();
          } else {
            break;
          }
        }
      }
      consumeArg(delims) {
        var tokens = [];
        var isDelimited = delims && delims.length > 0;
        if (!isDelimited) {
          this.consumeSpaces();
        }
        var start = this.future();
        var tok;
        var depth = 0;
        var match = 0;
        do {
          tok = this.popToken();
          tokens.push(tok);
          if (tok.text === "{") {
            ++depth;
          } else if (tok.text === "}") {
            --depth;
            if (depth === -1) {
              throw new ParseError("Extra }", tok);
            }
          } else if (tok.text === "EOF") {
            throw new ParseError("Unexpected end of input in a macro argument, expected '" + (delims && isDelimited ? delims[match] : "}") + "'", tok);
          }
          if (delims && isDelimited) {
            if ((depth === 0 || depth === 1 && delims[match] === "{") && tok.text === delims[match]) {
              ++match;
              if (match === delims.length) {
                tokens.splice(-match, match);
                break;
              }
            } else {
              match = 0;
            }
          }
        } while (depth !== 0 || isDelimited);
        if (start.text === "{" && tokens[tokens.length - 1].text === "}") {
          tokens.pop();
          tokens.shift();
        }
        tokens.reverse();
        return {
          tokens,
          start,
          end: tok
        };
      }
      consumeArgs(numArgs, delimiters2) {
        if (delimiters2) {
          if (delimiters2.length !== numArgs + 1) {
            throw new ParseError("The length of delimiters doesn't match the number of args!");
          }
          var delims = delimiters2[0];
          for (var i = 0; i < delims.length; i++) {
            var tok = this.popToken();
            if (delims[i] !== tok.text) {
              throw new ParseError("Use of the macro doesn't match its definition", tok);
            }
          }
        }
        var args = [];
        for (var _i = 0; _i < numArgs; _i++) {
          args.push(this.consumeArg(delimiters2 && delimiters2[_i + 1]).tokens);
        }
        return args;
      }
      expandOnce(expandableOnly) {
        var topToken = this.popToken();
        var name4 = topToken.text;
        var expansion = !topToken.noexpand ? this._getExpansion(name4) : null;
        if (expansion == null || expandableOnly && expansion.unexpandable) {
          if (expandableOnly && expansion == null && name4[0] === "\\" && !this.isDefined(name4)) {
            throw new ParseError("Undefined control sequence: " + name4);
          }
          this.pushToken(topToken);
          return topToken;
        }
        this.expansionCount++;
        if (this.expansionCount > this.settings.maxExpand) {
          throw new ParseError("Too many expansions: infinite loop or need to increase maxExpand setting");
        }
        var tokens = expansion.tokens;
        var args = this.consumeArgs(expansion.numArgs, expansion.delimiters);
        if (expansion.numArgs) {
          tokens = tokens.slice();
          for (var i = tokens.length - 1; i >= 0; --i) {
            var tok = tokens[i];
            if (tok.text === "#") {
              if (i === 0) {
                throw new ParseError("Incomplete placeholder at end of macro body", tok);
              }
              tok = tokens[--i];
              if (tok.text === "#") {
                tokens.splice(i + 1, 1);
              } else if (/^[1-9]$/.test(tok.text)) {
                tokens.splice(i, 2, ...args[+tok.text - 1]);
              } else {
                throw new ParseError("Not a valid argument number", tok);
              }
            }
          }
        }
        this.pushTokens(tokens);
        return tokens;
      }
      expandAfterFuture() {
        this.expandOnce();
        return this.future();
      }
      expandNextToken() {
        for (; ; ) {
          var expanded = this.expandOnce();
          if (expanded instanceof Token) {
            if (expanded.treatAsRelax) {
              expanded.text = "\\relax";
            }
            return this.stack.pop();
          }
        }
        throw new Error();
      }
      expandMacro(name4) {
        return this.macros.has(name4) ? this.expandTokens([new Token(name4)]) : void 0;
      }
      expandTokens(tokens) {
        var output = [];
        var oldStackLength = this.stack.length;
        this.pushTokens(tokens);
        while (this.stack.length > oldStackLength) {
          var expanded = this.expandOnce(true);
          if (expanded instanceof Token) {
            if (expanded.treatAsRelax) {
              expanded.noexpand = false;
              expanded.treatAsRelax = false;
            }
            output.push(this.stack.pop());
          }
        }
        return output;
      }
      expandMacroAsText(name4) {
        var tokens = this.expandMacro(name4);
        if (tokens) {
          return tokens.map((token) => token.text).join("");
        } else {
          return tokens;
        }
      }
      _getExpansion(name4) {
        var definition = this.macros.get(name4);
        if (definition == null) {
          return definition;
        }
        if (name4.length === 1) {
          var catcode = this.lexer.catcodes[name4];
          if (catcode != null && catcode !== 13) {
            return;
          }
        }
        var expansion = typeof definition === "function" ? definition(this) : definition;
        if (typeof expansion === "string") {
          var numArgs = 0;
          if (expansion.indexOf("#") !== -1) {
            var stripped = expansion.replace(/##/g, "");
            while (stripped.indexOf("#" + (numArgs + 1)) !== -1) {
              ++numArgs;
            }
          }
          var bodyLexer = new Lexer(expansion, this.settings);
          var tokens = [];
          var tok = bodyLexer.lex();
          while (tok.text !== "EOF") {
            tokens.push(tok);
            tok = bodyLexer.lex();
          }
          tokens.reverse();
          var expanded = {
            tokens,
            numArgs
          };
          return expanded;
        }
        return expansion;
      }
      isDefined(name4) {
        return this.macros.has(name4) || functions.hasOwnProperty(name4) || symbols.math.hasOwnProperty(name4) || symbols.text.hasOwnProperty(name4) || implicitCommands.hasOwnProperty(name4);
      }
      isExpandable(name4) {
        var macro = this.macros.get(name4);
        return macro != null ? typeof macro === "string" || typeof macro === "function" || !macro.unexpandable : functions.hasOwnProperty(name4) && !functions[name4].primitive;
      }
    };
    unicodeSubRegEx = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/;
    uSubsAndSups = Object.freeze({
      "\u208A": "+",
      "\u208B": "-",
      "\u208C": "=",
      "\u208D": "(",
      "\u208E": ")",
      "\u2080": "0",
      "\u2081": "1",
      "\u2082": "2",
      "\u2083": "3",
      "\u2084": "4",
      "\u2085": "5",
      "\u2086": "6",
      "\u2087": "7",
      "\u2088": "8",
      "\u2089": "9",
      "\u2090": "a",
      "\u2091": "e",
      "\u2095": "h",
      "\u1D62": "i",
      "\u2C7C": "j",
      "\u2096": "k",
      "\u2097": "l",
      "\u2098": "m",
      "\u2099": "n",
      "\u2092": "o",
      "\u209A": "p",
      "\u1D63": "r",
      "\u209B": "s",
      "\u209C": "t",
      "\u1D64": "u",
      "\u1D65": "v",
      "\u2093": "x",
      "\u1D66": "\u03B2",
      "\u1D67": "\u03B3",
      "\u1D68": "\u03C1",
      "\u1D69": "\u03D5",
      "\u1D6A": "\u03C7",
      "\u207A": "+",
      "\u207B": "-",
      "\u207C": "=",
      "\u207D": "(",
      "\u207E": ")",
      "\u2070": "0",
      "\xB9": "1",
      "\xB2": "2",
      "\xB3": "3",
      "\u2074": "4",
      "\u2075": "5",
      "\u2076": "6",
      "\u2077": "7",
      "\u2078": "8",
      "\u2079": "9",
      "\u1D2C": "A",
      "\u1D2E": "B",
      "\u1D30": "D",
      "\u1D31": "E",
      "\u1D33": "G",
      "\u1D34": "H",
      "\u1D35": "I",
      "\u1D36": "J",
      "\u1D37": "K",
      "\u1D38": "L",
      "\u1D39": "M",
      "\u1D3A": "N",
      "\u1D3C": "O",
      "\u1D3E": "P",
      "\u1D3F": "R",
      "\u1D40": "T",
      "\u1D41": "U",
      "\u2C7D": "V",
      "\u1D42": "W",
      "\u1D43": "a",
      "\u1D47": "b",
      "\u1D9C": "c",
      "\u1D48": "d",
      "\u1D49": "e",
      "\u1DA0": "f",
      "\u1D4D": "g",
      "\u02B0": "h",
      "\u2071": "i",
      "\u02B2": "j",
      "\u1D4F": "k",
      "\u02E1": "l",
      "\u1D50": "m",
      "\u207F": "n",
      "\u1D52": "o",
      "\u1D56": "p",
      "\u02B3": "r",
      "\u02E2": "s",
      "\u1D57": "t",
      "\u1D58": "u",
      "\u1D5B": "v",
      "\u02B7": "w",
      "\u02E3": "x",
      "\u02B8": "y",
      "\u1DBB": "z",
      "\u1D5D": "\u03B2",
      "\u1D5E": "\u03B3",
      "\u1D5F": "\u03B4",
      "\u1D60": "\u03D5",
      "\u1D61": "\u03C7",
      "\u1DBF": "\u03B8"
    });
    unicodeAccents = {
      "\u0301": {
        "text": "\\'",
        "math": "\\acute"
      },
      "\u0300": {
        "text": "\\`",
        "math": "\\grave"
      },
      "\u0308": {
        "text": '\\"',
        "math": "\\ddot"
      },
      "\u0303": {
        "text": "\\~",
        "math": "\\tilde"
      },
      "\u0304": {
        "text": "\\=",
        "math": "\\bar"
      },
      "\u0306": {
        "text": "\\u",
        "math": "\\breve"
      },
      "\u030C": {
        "text": "\\v",
        "math": "\\check"
      },
      "\u0302": {
        "text": "\\^",
        "math": "\\hat"
      },
      "\u0307": {
        "text": "\\.",
        "math": "\\dot"
      },
      "\u030A": {
        "text": "\\r",
        "math": "\\mathring"
      },
      "\u030B": {
        "text": "\\H"
      },
      "\u0327": {
        "text": "\\c"
      }
    };
    unicodeSymbols = {
      "\xE1": "a\u0301",
      "\xE0": "a\u0300",
      "\xE4": "a\u0308",
      "\u01DF": "a\u0308\u0304",
      "\xE3": "a\u0303",
      "\u0101": "a\u0304",
      "\u0103": "a\u0306",
      "\u1EAF": "a\u0306\u0301",
      "\u1EB1": "a\u0306\u0300",
      "\u1EB5": "a\u0306\u0303",
      "\u01CE": "a\u030C",
      "\xE2": "a\u0302",
      "\u1EA5": "a\u0302\u0301",
      "\u1EA7": "a\u0302\u0300",
      "\u1EAB": "a\u0302\u0303",
      "\u0227": "a\u0307",
      "\u01E1": "a\u0307\u0304",
      "\xE5": "a\u030A",
      "\u01FB": "a\u030A\u0301",
      "\u1E03": "b\u0307",
      "\u0107": "c\u0301",
      "\u1E09": "c\u0327\u0301",
      "\u010D": "c\u030C",
      "\u0109": "c\u0302",
      "\u010B": "c\u0307",
      "\xE7": "c\u0327",
      "\u010F": "d\u030C",
      "\u1E0B": "d\u0307",
      "\u1E11": "d\u0327",
      "\xE9": "e\u0301",
      "\xE8": "e\u0300",
      "\xEB": "e\u0308",
      "\u1EBD": "e\u0303",
      "\u0113": "e\u0304",
      "\u1E17": "e\u0304\u0301",
      "\u1E15": "e\u0304\u0300",
      "\u0115": "e\u0306",
      "\u1E1D": "e\u0327\u0306",
      "\u011B": "e\u030C",
      "\xEA": "e\u0302",
      "\u1EBF": "e\u0302\u0301",
      "\u1EC1": "e\u0302\u0300",
      "\u1EC5": "e\u0302\u0303",
      "\u0117": "e\u0307",
      "\u0229": "e\u0327",
      "\u1E1F": "f\u0307",
      "\u01F5": "g\u0301",
      "\u1E21": "g\u0304",
      "\u011F": "g\u0306",
      "\u01E7": "g\u030C",
      "\u011D": "g\u0302",
      "\u0121": "g\u0307",
      "\u0123": "g\u0327",
      "\u1E27": "h\u0308",
      "\u021F": "h\u030C",
      "\u0125": "h\u0302",
      "\u1E23": "h\u0307",
      "\u1E29": "h\u0327",
      "\xED": "i\u0301",
      "\xEC": "i\u0300",
      "\xEF": "i\u0308",
      "\u1E2F": "i\u0308\u0301",
      "\u0129": "i\u0303",
      "\u012B": "i\u0304",
      "\u012D": "i\u0306",
      "\u01D0": "i\u030C",
      "\xEE": "i\u0302",
      "\u01F0": "j\u030C",
      "\u0135": "j\u0302",
      "\u1E31": "k\u0301",
      "\u01E9": "k\u030C",
      "\u0137": "k\u0327",
      "\u013A": "l\u0301",
      "\u013E": "l\u030C",
      "\u013C": "l\u0327",
      "\u1E3F": "m\u0301",
      "\u1E41": "m\u0307",
      "\u0144": "n\u0301",
      "\u01F9": "n\u0300",
      "\xF1": "n\u0303",
      "\u0148": "n\u030C",
      "\u1E45": "n\u0307",
      "\u0146": "n\u0327",
      "\xF3": "o\u0301",
      "\xF2": "o\u0300",
      "\xF6": "o\u0308",
      "\u022B": "o\u0308\u0304",
      "\xF5": "o\u0303",
      "\u1E4D": "o\u0303\u0301",
      "\u1E4F": "o\u0303\u0308",
      "\u022D": "o\u0303\u0304",
      "\u014D": "o\u0304",
      "\u1E53": "o\u0304\u0301",
      "\u1E51": "o\u0304\u0300",
      "\u014F": "o\u0306",
      "\u01D2": "o\u030C",
      "\xF4": "o\u0302",
      "\u1ED1": "o\u0302\u0301",
      "\u1ED3": "o\u0302\u0300",
      "\u1ED7": "o\u0302\u0303",
      "\u022F": "o\u0307",
      "\u0231": "o\u0307\u0304",
      "\u0151": "o\u030B",
      "\u1E55": "p\u0301",
      "\u1E57": "p\u0307",
      "\u0155": "r\u0301",
      "\u0159": "r\u030C",
      "\u1E59": "r\u0307",
      "\u0157": "r\u0327",
      "\u015B": "s\u0301",
      "\u1E65": "s\u0301\u0307",
      "\u0161": "s\u030C",
      "\u1E67": "s\u030C\u0307",
      "\u015D": "s\u0302",
      "\u1E61": "s\u0307",
      "\u015F": "s\u0327",
      "\u1E97": "t\u0308",
      "\u0165": "t\u030C",
      "\u1E6B": "t\u0307",
      "\u0163": "t\u0327",
      "\xFA": "u\u0301",
      "\xF9": "u\u0300",
      "\xFC": "u\u0308",
      "\u01D8": "u\u0308\u0301",
      "\u01DC": "u\u0308\u0300",
      "\u01D6": "u\u0308\u0304",
      "\u01DA": "u\u0308\u030C",
      "\u0169": "u\u0303",
      "\u1E79": "u\u0303\u0301",
      "\u016B": "u\u0304",
      "\u1E7B": "u\u0304\u0308",
      "\u016D": "u\u0306",
      "\u01D4": "u\u030C",
      "\xFB": "u\u0302",
      "\u016F": "u\u030A",
      "\u0171": "u\u030B",
      "\u1E7D": "v\u0303",
      "\u1E83": "w\u0301",
      "\u1E81": "w\u0300",
      "\u1E85": "w\u0308",
      "\u0175": "w\u0302",
      "\u1E87": "w\u0307",
      "\u1E98": "w\u030A",
      "\u1E8D": "x\u0308",
      "\u1E8B": "x\u0307",
      "\xFD": "y\u0301",
      "\u1EF3": "y\u0300",
      "\xFF": "y\u0308",
      "\u1EF9": "y\u0303",
      "\u0233": "y\u0304",
      "\u0177": "y\u0302",
      "\u1E8F": "y\u0307",
      "\u1E99": "y\u030A",
      "\u017A": "z\u0301",
      "\u017E": "z\u030C",
      "\u1E91": "z\u0302",
      "\u017C": "z\u0307",
      "\xC1": "A\u0301",
      "\xC0": "A\u0300",
      "\xC4": "A\u0308",
      "\u01DE": "A\u0308\u0304",
      "\xC3": "A\u0303",
      "\u0100": "A\u0304",
      "\u0102": "A\u0306",
      "\u1EAE": "A\u0306\u0301",
      "\u1EB0": "A\u0306\u0300",
      "\u1EB4": "A\u0306\u0303",
      "\u01CD": "A\u030C",
      "\xC2": "A\u0302",
      "\u1EA4": "A\u0302\u0301",
      "\u1EA6": "A\u0302\u0300",
      "\u1EAA": "A\u0302\u0303",
      "\u0226": "A\u0307",
      "\u01E0": "A\u0307\u0304",
      "\xC5": "A\u030A",
      "\u01FA": "A\u030A\u0301",
      "\u1E02": "B\u0307",
      "\u0106": "C\u0301",
      "\u1E08": "C\u0327\u0301",
      "\u010C": "C\u030C",
      "\u0108": "C\u0302",
      "\u010A": "C\u0307",
      "\xC7": "C\u0327",
      "\u010E": "D\u030C",
      "\u1E0A": "D\u0307",
      "\u1E10": "D\u0327",
      "\xC9": "E\u0301",
      "\xC8": "E\u0300",
      "\xCB": "E\u0308",
      "\u1EBC": "E\u0303",
      "\u0112": "E\u0304",
      "\u1E16": "E\u0304\u0301",
      "\u1E14": "E\u0304\u0300",
      "\u0114": "E\u0306",
      "\u1E1C": "E\u0327\u0306",
      "\u011A": "E\u030C",
      "\xCA": "E\u0302",
      "\u1EBE": "E\u0302\u0301",
      "\u1EC0": "E\u0302\u0300",
      "\u1EC4": "E\u0302\u0303",
      "\u0116": "E\u0307",
      "\u0228": "E\u0327",
      "\u1E1E": "F\u0307",
      "\u01F4": "G\u0301",
      "\u1E20": "G\u0304",
      "\u011E": "G\u0306",
      "\u01E6": "G\u030C",
      "\u011C": "G\u0302",
      "\u0120": "G\u0307",
      "\u0122": "G\u0327",
      "\u1E26": "H\u0308",
      "\u021E": "H\u030C",
      "\u0124": "H\u0302",
      "\u1E22": "H\u0307",
      "\u1E28": "H\u0327",
      "\xCD": "I\u0301",
      "\xCC": "I\u0300",
      "\xCF": "I\u0308",
      "\u1E2E": "I\u0308\u0301",
      "\u0128": "I\u0303",
      "\u012A": "I\u0304",
      "\u012C": "I\u0306",
      "\u01CF": "I\u030C",
      "\xCE": "I\u0302",
      "\u0130": "I\u0307",
      "\u0134": "J\u0302",
      "\u1E30": "K\u0301",
      "\u01E8": "K\u030C",
      "\u0136": "K\u0327",
      "\u0139": "L\u0301",
      "\u013D": "L\u030C",
      "\u013B": "L\u0327",
      "\u1E3E": "M\u0301",
      "\u1E40": "M\u0307",
      "\u0143": "N\u0301",
      "\u01F8": "N\u0300",
      "\xD1": "N\u0303",
      "\u0147": "N\u030C",
      "\u1E44": "N\u0307",
      "\u0145": "N\u0327",
      "\xD3": "O\u0301",
      "\xD2": "O\u0300",
      "\xD6": "O\u0308",
      "\u022A": "O\u0308\u0304",
      "\xD5": "O\u0303",
      "\u1E4C": "O\u0303\u0301",
      "\u1E4E": "O\u0303\u0308",
      "\u022C": "O\u0303\u0304",
      "\u014C": "O\u0304",
      "\u1E52": "O\u0304\u0301",
      "\u1E50": "O\u0304\u0300",
      "\u014E": "O\u0306",
      "\u01D1": "O\u030C",
      "\xD4": "O\u0302",
      "\u1ED0": "O\u0302\u0301",
      "\u1ED2": "O\u0302\u0300",
      "\u1ED6": "O\u0302\u0303",
      "\u022E": "O\u0307",
      "\u0230": "O\u0307\u0304",
      "\u0150": "O\u030B",
      "\u1E54": "P\u0301",
      "\u1E56": "P\u0307",
      "\u0154": "R\u0301",
      "\u0158": "R\u030C",
      "\u1E58": "R\u0307",
      "\u0156": "R\u0327",
      "\u015A": "S\u0301",
      "\u1E64": "S\u0301\u0307",
      "\u0160": "S\u030C",
      "\u1E66": "S\u030C\u0307",
      "\u015C": "S\u0302",
      "\u1E60": "S\u0307",
      "\u015E": "S\u0327",
      "\u0164": "T\u030C",
      "\u1E6A": "T\u0307",
      "\u0162": "T\u0327",
      "\xDA": "U\u0301",
      "\xD9": "U\u0300",
      "\xDC": "U\u0308",
      "\u01D7": "U\u0308\u0301",
      "\u01DB": "U\u0308\u0300",
      "\u01D5": "U\u0308\u0304",
      "\u01D9": "U\u0308\u030C",
      "\u0168": "U\u0303",
      "\u1E78": "U\u0303\u0301",
      "\u016A": "U\u0304",
      "\u1E7A": "U\u0304\u0308",
      "\u016C": "U\u0306",
      "\u01D3": "U\u030C",
      "\xDB": "U\u0302",
      "\u016E": "U\u030A",
      "\u0170": "U\u030B",
      "\u1E7C": "V\u0303",
      "\u1E82": "W\u0301",
      "\u1E80": "W\u0300",
      "\u1E84": "W\u0308",
      "\u0174": "W\u0302",
      "\u1E86": "W\u0307",
      "\u1E8C": "X\u0308",
      "\u1E8A": "X\u0307",
      "\xDD": "Y\u0301",
      "\u1EF2": "Y\u0300",
      "\u0178": "Y\u0308",
      "\u1EF8": "Y\u0303",
      "\u0232": "Y\u0304",
      "\u0176": "Y\u0302",
      "\u1E8E": "Y\u0307",
      "\u0179": "Z\u0301",
      "\u017D": "Z\u030C",
      "\u1E90": "Z\u0302",
      "\u017B": "Z\u0307",
      "\u03AC": "\u03B1\u0301",
      "\u1F70": "\u03B1\u0300",
      "\u1FB1": "\u03B1\u0304",
      "\u1FB0": "\u03B1\u0306",
      "\u03AD": "\u03B5\u0301",
      "\u1F72": "\u03B5\u0300",
      "\u03AE": "\u03B7\u0301",
      "\u1F74": "\u03B7\u0300",
      "\u03AF": "\u03B9\u0301",
      "\u1F76": "\u03B9\u0300",
      "\u03CA": "\u03B9\u0308",
      "\u0390": "\u03B9\u0308\u0301",
      "\u1FD2": "\u03B9\u0308\u0300",
      "\u1FD1": "\u03B9\u0304",
      "\u1FD0": "\u03B9\u0306",
      "\u03CC": "\u03BF\u0301",
      "\u1F78": "\u03BF\u0300",
      "\u03CD": "\u03C5\u0301",
      "\u1F7A": "\u03C5\u0300",
      "\u03CB": "\u03C5\u0308",
      "\u03B0": "\u03C5\u0308\u0301",
      "\u1FE2": "\u03C5\u0308\u0300",
      "\u1FE1": "\u03C5\u0304",
      "\u1FE0": "\u03C5\u0306",
      "\u03CE": "\u03C9\u0301",
      "\u1F7C": "\u03C9\u0300",
      "\u038E": "\u03A5\u0301",
      "\u1FEA": "\u03A5\u0300",
      "\u03AB": "\u03A5\u0308",
      "\u1FE9": "\u03A5\u0304",
      "\u1FE8": "\u03A5\u0306",
      "\u038F": "\u03A9\u0301",
      "\u1FFA": "\u03A9\u0300"
    };
    Parser = class {
      constructor(input, settings) {
        this.mode = void 0;
        this.gullet = void 0;
        this.settings = void 0;
        this.leftrightDepth = void 0;
        this.nextToken = void 0;
        this.mode = "math";
        this.gullet = new MacroExpander(input, settings, this.mode);
        this.settings = settings;
        this.leftrightDepth = 0;
      }
      expect(text2, consume) {
        if (consume === void 0) {
          consume = true;
        }
        if (this.fetch().text !== text2) {
          throw new ParseError("Expected '" + text2 + "', got '" + this.fetch().text + "'", this.fetch());
        }
        if (consume) {
          this.consume();
        }
      }
      consume() {
        this.nextToken = null;
      }
      fetch() {
        if (this.nextToken == null) {
          this.nextToken = this.gullet.expandNextToken();
        }
        return this.nextToken;
      }
      switchMode(newMode) {
        this.mode = newMode;
        this.gullet.switchMode(newMode);
      }
      parse() {
        if (!this.settings.globalGroup) {
          this.gullet.beginGroup();
        }
        if (this.settings.colorIsTextColor) {
          this.gullet.macros.set("\\color", "\\textcolor");
        }
        try {
          var parse2 = this.parseExpression(false);
          this.expect("EOF");
          if (!this.settings.globalGroup) {
            this.gullet.endGroup();
          }
          return parse2;
        } finally {
          this.gullet.endGroups();
        }
      }
      subparse(tokens) {
        var oldToken = this.nextToken;
        this.consume();
        this.gullet.pushToken(new Token("}"));
        this.gullet.pushTokens(tokens);
        var parse2 = this.parseExpression(false);
        this.expect("}");
        this.nextToken = oldToken;
        return parse2;
      }
      parseExpression(breakOnInfix, breakOnTokenText) {
        var body = [];
        while (true) {
          if (this.mode === "math") {
            this.consumeSpaces();
          }
          var lex = this.fetch();
          if (Parser.endOfExpression.indexOf(lex.text) !== -1) {
            break;
          }
          if (breakOnTokenText && lex.text === breakOnTokenText) {
            break;
          }
          if (breakOnInfix && functions[lex.text] && functions[lex.text].infix) {
            break;
          }
          var atom = this.parseAtom(breakOnTokenText);
          if (!atom) {
            break;
          } else if (atom.type === "internal") {
            continue;
          }
          body.push(atom);
        }
        if (this.mode === "text") {
          this.formLigatures(body);
        }
        return this.handleInfixNodes(body);
      }
      handleInfixNodes(body) {
        var overIndex = -1;
        var funcName;
        for (var i = 0; i < body.length; i++) {
          if (body[i].type === "infix") {
            if (overIndex !== -1) {
              throw new ParseError("only one infix operator per group", body[i].token);
            }
            overIndex = i;
            funcName = body[i].replaceWith;
          }
        }
        if (overIndex !== -1 && funcName) {
          var numerNode;
          var denomNode;
          var numerBody = body.slice(0, overIndex);
          var denomBody = body.slice(overIndex + 1);
          if (numerBody.length === 1 && numerBody[0].type === "ordgroup") {
            numerNode = numerBody[0];
          } else {
            numerNode = {
              type: "ordgroup",
              mode: this.mode,
              body: numerBody
            };
          }
          if (denomBody.length === 1 && denomBody[0].type === "ordgroup") {
            denomNode = denomBody[0];
          } else {
            denomNode = {
              type: "ordgroup",
              mode: this.mode,
              body: denomBody
            };
          }
          var node;
          if (funcName === "\\\\abovefrac") {
            node = this.callFunction(funcName, [numerNode, body[overIndex], denomNode], []);
          } else {
            node = this.callFunction(funcName, [numerNode, denomNode], []);
          }
          return [node];
        } else {
          return body;
        }
      }
      handleSupSubscript(name4) {
        var symbolToken = this.fetch();
        var symbol = symbolToken.text;
        this.consume();
        this.consumeSpaces();
        var group = this.parseGroup(name4);
        if (!group) {
          throw new ParseError("Expected group after '" + symbol + "'", symbolToken);
        }
        return group;
      }
      formatUnsupportedCmd(text2) {
        var textordArray = [];
        for (var i = 0; i < text2.length; i++) {
          textordArray.push({
            type: "textord",
            mode: "text",
            text: text2[i]
          });
        }
        var textNode = {
          type: "text",
          mode: this.mode,
          body: textordArray
        };
        var colorNode = {
          type: "color",
          mode: this.mode,
          color: this.settings.errorColor,
          body: [textNode]
        };
        return colorNode;
      }
      parseAtom(breakOnTokenText) {
        var base2 = this.parseGroup("atom", breakOnTokenText);
        if (this.mode === "text") {
          return base2;
        }
        var superscript;
        var subscript;
        while (true) {
          this.consumeSpaces();
          var lex = this.fetch();
          if (lex.text === "\\limits" || lex.text === "\\nolimits") {
            if (base2 && base2.type === "op") {
              var limits = lex.text === "\\limits";
              base2.limits = limits;
              base2.alwaysHandleSupSub = true;
            } else if (base2 && base2.type === "operatorname") {
              if (base2.alwaysHandleSupSub) {
                base2.limits = lex.text === "\\limits";
              }
            } else {
              throw new ParseError("Limit controls must follow a math operator", lex);
            }
            this.consume();
          } else if (lex.text === "^") {
            if (superscript) {
              throw new ParseError("Double superscript", lex);
            }
            superscript = this.handleSupSubscript("superscript");
          } else if (lex.text === "_") {
            if (subscript) {
              throw new ParseError("Double subscript", lex);
            }
            subscript = this.handleSupSubscript("subscript");
          } else if (lex.text === "'") {
            if (superscript) {
              throw new ParseError("Double superscript", lex);
            }
            var prime = {
              type: "textord",
              mode: this.mode,
              text: "\\prime"
            };
            var primes = [prime];
            this.consume();
            while (this.fetch().text === "'") {
              primes.push(prime);
              this.consume();
            }
            if (this.fetch().text === "^") {
              primes.push(this.handleSupSubscript("superscript"));
            }
            superscript = {
              type: "ordgroup",
              mode: this.mode,
              body: primes
            };
          } else if (uSubsAndSups[lex.text]) {
            var str = uSubsAndSups[lex.text];
            var isSub = unicodeSubRegEx.test(lex.text);
            this.consume();
            while (true) {
              var token = this.fetch().text;
              if (!uSubsAndSups[token]) {
                break;
              }
              if (unicodeSubRegEx.test(token) !== isSub) {
                break;
              }
              this.consume();
              str += uSubsAndSups[token];
            }
            var body = new Parser(str, this.settings).parse();
            if (isSub) {
              subscript = {
                type: "ordgroup",
                mode: "math",
                body
              };
            } else {
              superscript = {
                type: "ordgroup",
                mode: "math",
                body
              };
            }
          } else {
            break;
          }
        }
        if (superscript || subscript) {
          return {
            type: "supsub",
            mode: this.mode,
            base: base2,
            sup: superscript,
            sub: subscript
          };
        } else {
          return base2;
        }
      }
      parseFunction(breakOnTokenText, name4) {
        var token = this.fetch();
        var func = token.text;
        var funcData = functions[func];
        if (!funcData) {
          return null;
        }
        this.consume();
        if (name4 && name4 !== "atom" && !funcData.allowedInArgument) {
          throw new ParseError("Got function '" + func + "' with no arguments" + (name4 ? " as " + name4 : ""), token);
        } else if (this.mode === "text" && !funcData.allowedInText) {
          throw new ParseError("Can't use function '" + func + "' in text mode", token);
        } else if (this.mode === "math" && funcData.allowedInMath === false) {
          throw new ParseError("Can't use function '" + func + "' in math mode", token);
        }
        var {
          args,
          optArgs
        } = this.parseArguments(func, funcData);
        return this.callFunction(func, args, optArgs, token, breakOnTokenText);
      }
      callFunction(name4, args, optArgs, token, breakOnTokenText) {
        var context = {
          funcName: name4,
          parser: this,
          token,
          breakOnTokenText
        };
        var func = functions[name4];
        if (func && func.handler) {
          return func.handler(context, args, optArgs);
        } else {
          throw new ParseError("No function handler for " + name4);
        }
      }
      parseArguments(func, funcData) {
        var totalArgs = funcData.numArgs + funcData.numOptionalArgs;
        if (totalArgs === 0) {
          return {
            args: [],
            optArgs: []
          };
        }
        var args = [];
        var optArgs = [];
        for (var i = 0; i < totalArgs; i++) {
          var argType = funcData.argTypes && funcData.argTypes[i];
          var isOptional = i < funcData.numOptionalArgs;
          if (funcData.primitive && argType == null || funcData.type === "sqrt" && i === 1 && optArgs[0] == null) {
            argType = "primitive";
          }
          var arg = this.parseGroupOfType("argument to '" + func + "'", argType, isOptional);
          if (isOptional) {
            optArgs.push(arg);
          } else if (arg != null) {
            args.push(arg);
          } else {
            throw new ParseError("Null argument, please report this as a bug");
          }
        }
        return {
          args,
          optArgs
        };
      }
      parseGroupOfType(name4, type, optional) {
        switch (type) {
          case "color":
            return this.parseColorGroup(optional);
          case "size":
            return this.parseSizeGroup(optional);
          case "url":
            return this.parseUrlGroup(optional);
          case "math":
          case "text":
            return this.parseArgumentGroup(optional, type);
          case "hbox": {
            var group = this.parseArgumentGroup(optional, "text");
            return group != null ? {
              type: "styling",
              mode: group.mode,
              body: [group],
              style: "text"
            } : null;
          }
          case "raw": {
            var token = this.parseStringGroup("raw", optional);
            return token != null ? {
              type: "raw",
              mode: "text",
              string: token.text
            } : null;
          }
          case "primitive": {
            if (optional) {
              throw new ParseError("A primitive argument cannot be optional");
            }
            var _group = this.parseGroup(name4);
            if (_group == null) {
              throw new ParseError("Expected group as " + name4, this.fetch());
            }
            return _group;
          }
          case "original":
          case null:
          case void 0:
            return this.parseArgumentGroup(optional);
          default:
            throw new ParseError("Unknown group type as " + name4, this.fetch());
        }
      }
      consumeSpaces() {
        while (this.fetch().text === " ") {
          this.consume();
        }
      }
      parseStringGroup(modeName, optional) {
        var argToken = this.gullet.scanArgument(optional);
        if (argToken == null) {
          return null;
        }
        var str = "";
        var nextToken;
        while ((nextToken = this.fetch()).text !== "EOF") {
          str += nextToken.text;
          this.consume();
        }
        this.consume();
        argToken.text = str;
        return argToken;
      }
      parseRegexGroup(regex, modeName) {
        var firstToken = this.fetch();
        var lastToken = firstToken;
        var str = "";
        var nextToken;
        while ((nextToken = this.fetch()).text !== "EOF" && regex.test(str + nextToken.text)) {
          lastToken = nextToken;
          str += lastToken.text;
          this.consume();
        }
        if (str === "") {
          throw new ParseError("Invalid " + modeName + ": '" + firstToken.text + "'", firstToken);
        }
        return firstToken.range(lastToken, str);
      }
      parseColorGroup(optional) {
        var res = this.parseStringGroup("color", optional);
        if (res == null) {
          return null;
        }
        var match = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(res.text);
        if (!match) {
          throw new ParseError("Invalid color: '" + res.text + "'", res);
        }
        var color = match[0];
        if (/^[0-9a-f]{6}$/i.test(color)) {
          color = "#" + color;
        }
        return {
          type: "color-token",
          mode: this.mode,
          color
        };
      }
      parseSizeGroup(optional) {
        var res;
        var isBlank = false;
        this.gullet.consumeSpaces();
        if (!optional && this.gullet.future().text !== "{") {
          res = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size");
        } else {
          res = this.parseStringGroup("size", optional);
        }
        if (!res) {
          return null;
        }
        if (!optional && res.text.length === 0) {
          res.text = "0pt";
          isBlank = true;
        }
        var match = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(res.text);
        if (!match) {
          throw new ParseError("Invalid size: '" + res.text + "'", res);
        }
        var data = {
          number: +(match[1] + match[2]),
          unit: match[3]
        };
        if (!validUnit(data)) {
          throw new ParseError("Invalid unit: '" + data.unit + "'", res);
        }
        return {
          type: "size",
          mode: this.mode,
          value: data,
          isBlank
        };
      }
      parseUrlGroup(optional) {
        this.gullet.lexer.setCatcode("%", 13);
        this.gullet.lexer.setCatcode("~", 12);
        var res = this.parseStringGroup("url", optional);
        this.gullet.lexer.setCatcode("%", 14);
        this.gullet.lexer.setCatcode("~", 13);
        if (res == null) {
          return null;
        }
        var url = res.text.replace(/\\([#$%&~_^{}])/g, "$1");
        return {
          type: "url",
          mode: this.mode,
          url
        };
      }
      parseArgumentGroup(optional, mode) {
        var argToken = this.gullet.scanArgument(optional);
        if (argToken == null) {
          return null;
        }
        var outerMode = this.mode;
        if (mode) {
          this.switchMode(mode);
        }
        this.gullet.beginGroup();
        var expression = this.parseExpression(false, "EOF");
        this.expect("EOF");
        this.gullet.endGroup();
        var result = {
          type: "ordgroup",
          mode: this.mode,
          loc: argToken.loc,
          body: expression
        };
        if (mode) {
          this.switchMode(outerMode);
        }
        return result;
      }
      parseGroup(name4, breakOnTokenText) {
        var firstToken = this.fetch();
        var text2 = firstToken.text;
        var result;
        if (text2 === "{" || text2 === "\\begingroup") {
          this.consume();
          var groupEnd = text2 === "{" ? "}" : "\\endgroup";
          this.gullet.beginGroup();
          var expression = this.parseExpression(false, groupEnd);
          var lastToken = this.fetch();
          this.expect(groupEnd);
          this.gullet.endGroup();
          result = {
            type: "ordgroup",
            mode: this.mode,
            loc: SourceLocation.range(firstToken, lastToken),
            body: expression,
            semisimple: text2 === "\\begingroup" || void 0
          };
        } else {
          result = this.parseFunction(breakOnTokenText, name4) || this.parseSymbol();
          if (result == null && text2[0] === "\\" && !implicitCommands.hasOwnProperty(text2)) {
            if (this.settings.throwOnError) {
              throw new ParseError("Undefined control sequence: " + text2, firstToken);
            }
            result = this.formatUnsupportedCmd(text2);
            this.consume();
          }
        }
        return result;
      }
      formLigatures(group) {
        var n2 = group.length - 1;
        for (var i = 0; i < n2; ++i) {
          var a2 = group[i];
          var v2 = a2.text;
          if (v2 === "-" && group[i + 1].text === "-") {
            if (i + 1 < n2 && group[i + 2].text === "-") {
              group.splice(i, 3, {
                type: "textord",
                mode: "text",
                loc: SourceLocation.range(a2, group[i + 2]),
                text: "---"
              });
              n2 -= 2;
            } else {
              group.splice(i, 2, {
                type: "textord",
                mode: "text",
                loc: SourceLocation.range(a2, group[i + 1]),
                text: "--"
              });
              n2 -= 1;
            }
          }
          if ((v2 === "'" || v2 === "`") && group[i + 1].text === v2) {
            group.splice(i, 2, {
              type: "textord",
              mode: "text",
              loc: SourceLocation.range(a2, group[i + 1]),
              text: v2 + v2
            });
            n2 -= 1;
          }
        }
      }
      parseSymbol() {
        var nucleus = this.fetch();
        var text2 = nucleus.text;
        if (/^\\verb[^a-zA-Z]/.test(text2)) {
          this.consume();
          var arg = text2.slice(5);
          var star = arg.charAt(0) === "*";
          if (star) {
            arg = arg.slice(1);
          }
          if (arg.length < 2 || arg.charAt(0) !== arg.slice(-1)) {
            throw new ParseError("\\verb assertion failed --\n                    please report what input caused this bug");
          }
          arg = arg.slice(1, -1);
          return {
            type: "verb",
            mode: "text",
            body: arg,
            star
          };
        }
        if (unicodeSymbols.hasOwnProperty(text2[0]) && !symbols[this.mode][text2[0]]) {
          if (this.settings.strict && this.mode === "math") {
            this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + text2[0] + '" used in math mode', nucleus);
          }
          text2 = unicodeSymbols[text2[0]] + text2.slice(1);
        }
        var match = combiningDiacriticalMarksEndRegex.exec(text2);
        if (match) {
          text2 = text2.substring(0, match.index);
          if (text2 === "i") {
            text2 = "\u0131";
          } else if (text2 === "j") {
            text2 = "\u0237";
          }
        }
        var symbol;
        if (symbols[this.mode][text2]) {
          if (this.settings.strict && this.mode === "math" && extraLatin.indexOf(text2) >= 0) {
            this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + text2[0] + '" used in math mode', nucleus);
          }
          var group = symbols[this.mode][text2].group;
          var loc = SourceLocation.range(nucleus);
          var s3;
          if (ATOMS.hasOwnProperty(group)) {
            var family = group;
            s3 = {
              type: "atom",
              mode: this.mode,
              family,
              loc,
              text: text2
            };
          } else {
            s3 = {
              type: group,
              mode: this.mode,
              loc,
              text: text2
            };
          }
          symbol = s3;
        } else if (text2.charCodeAt(0) >= 128) {
          if (this.settings.strict) {
            if (!supportedCodepoint(text2.charCodeAt(0))) {
              this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + text2[0] + '"' + (" (" + text2.charCodeAt(0) + ")"), nucleus);
            } else if (this.mode === "math") {
              this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + text2[0] + '" used in math mode', nucleus);
            }
          }
          symbol = {
            type: "textord",
            mode: "text",
            loc: SourceLocation.range(nucleus),
            text: text2
          };
        } else {
          return null;
        }
        this.consume();
        if (match) {
          for (var i = 0; i < match[0].length; i++) {
            var accent2 = match[0][i];
            if (!unicodeAccents[accent2]) {
              throw new ParseError("Unknown accent ' " + accent2 + "'", nucleus);
            }
            var command = unicodeAccents[accent2][this.mode] || unicodeAccents[accent2].text;
            if (!command) {
              throw new ParseError("Accent " + accent2 + " unsupported in " + this.mode + " mode", nucleus);
            }
            symbol = {
              type: "accent",
              mode: this.mode,
              loc: SourceLocation.range(nucleus),
              label: command,
              isStretchy: false,
              isShifty: true,
              base: symbol
            };
          }
        }
        return symbol;
      }
    };
    Parser.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
    parseTree = function parseTree2(toParse, settings) {
      if (!(typeof toParse === "string" || toParse instanceof String)) {
        throw new TypeError("KaTeX can only parse string typed expression");
      }
      var parser = new Parser(toParse, settings);
      delete parser.gullet.macros.current["\\df@tag"];
      var tree = parser.parse();
      delete parser.gullet.macros.current["\\current@color"];
      delete parser.gullet.macros.current["\\color"];
      if (parser.gullet.macros.get("\\df@tag")) {
        if (!settings.displayMode) {
          throw new ParseError("\\tag works only in display equations");
        }
        tree = [{
          type: "tag",
          mode: "text",
          body: tree,
          tag: parser.subparse([new Token("\\df@tag")])
        }];
      }
      return tree;
    };
    render = function render2(expression, baseNode, options) {
      baseNode.textContent = "";
      var node = renderToDomTree(expression, options).toNode();
      baseNode.appendChild(node);
    };
    if (typeof document !== "undefined") {
      if (document.compatMode !== "CSS1Compat") {
        typeof console !== "undefined" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.");
        render = function render3() {
          throw new ParseError("KaTeX doesn't work in quirks mode.");
        };
      }
    }
    renderToString = function renderToString2(expression, options) {
      var markup = renderToDomTree(expression, options).toMarkup();
      return markup;
    };
    generateParseTree = function generateParseTree2(expression, options) {
      var settings = new Settings(options);
      return parseTree(expression, settings);
    };
    renderError = function renderError2(error2, expression, options) {
      if (options.throwOnError || !(error2 instanceof ParseError)) {
        throw error2;
      }
      var node = buildCommon.makeSpan(["katex-error"], [new SymbolNode(expression)]);
      node.setAttribute("title", error2.toString());
      node.setAttribute("style", "color:" + options.errorColor);
      return node;
    };
    renderToDomTree = function renderToDomTree2(expression, options) {
      var settings = new Settings(options);
      try {
        var tree = parseTree(expression, settings);
        return buildTree(tree, expression, settings);
      } catch (error2) {
        return renderError(error2, expression, settings);
      }
    };
    renderToHTMLTree = function renderToHTMLTree2(expression, options) {
      var settings = new Settings(options);
      try {
        var tree = parseTree(expression, settings);
        return buildHTMLTree(tree, expression, settings);
      } catch (error2) {
        return renderError(error2, expression, settings);
      }
    };
    katex = {
      version: "0.16.2",
      render,
      renderToString,
      ParseError,
      SETTINGS_SCHEMA,
      __parse: generateParseTree,
      __renderToDomTree: renderToDomTree,
      __renderToHTMLTree: renderToHTMLTree,
      __setFontMetrics: setFontMetrics,
      __defineSymbol: defineSymbol,
      __defineMacro: defineMacro,
      __domTree: {
        Span,
        Anchor,
        SymbolNode,
        SvgNode,
        PathNode,
        LineNode
      }
    };
  }
});

// .svelte-kit/output/server/chunks/Katex.js
var Katex;
var init_Katex = __esm({
  ".svelte-kit/output/server/chunks/Katex.js"() {
    init_chunks();
    init_katex();
    Katex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let katexString;
      let { d: d2 = false } = $$props;
      let { m: m2 } = $$props;
      const options = { displayMode: d2, throwOnError: false };
      let { tr } = $$props;
      if ($$props.d === void 0 && $$bindings.d && d2 !== void 0)
        $$bindings.d(d2);
      if ($$props.m === void 0 && $$bindings.m && m2 !== void 0)
        $$bindings.m(m2);
      if ($$props.tr === void 0 && $$bindings.tr && tr !== void 0)
        $$bindings.tr(tr);
      katexString = katex.renderToString(m2, options);
      return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"}" integrity="${"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"}" crossorigin="${"anonymous"}" data-svelte="svelte-bnfb8z">`, ""}



<!-- HTML_TAG_START -->${katexString}<!-- HTML_TAG_END -->

`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var GalleryScale, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    init_store();
    init_Katex();
    init_index2();
    init_katex();
    GalleryScale = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $isDarkMode, $$unsubscribe_isDarkMode;
      $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
      let { Src = "/reviews/review-ben.png" } = $$props;
      let { Alt = "review ben" } = $$props;
      let imgBackground;
      if ($$props.Src === void 0 && $$bindings.Src && Src !== void 0)
        $$bindings.Src(Src);
      if ($$props.Alt === void 0 && $$bindings.Alt && Alt !== void 0)
        $$bindings.Alt(Alt);
      {
        $isDarkMode ? imgBackground = `peer-focus:bg-[rgb(218,220,203)] peer-focus:invert` : imgBackground = `peer-focus:bg-[#f7f7f7]`;
      }
      $$unsubscribe_isDarkMode();
      return `<div class="${"relative"}"><input inputmode="${"none"}" class="${"absolute opacity-0 w-full h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 peer"}">

  <img class="${"hover:shadow-2xl " + escape(imgBackground, true) + " peer-hover:shadow-lg peer-focus:fixed peer-focus:top-10 peer-focus:left-10 peer-focus:z-50 peer-focus:-translate-x-8 peer-focus:scale-[1] sm:peer-focus:scale-[0.85] peer-focus:duration-300"}"${add_attribute("src", Src, 0)}${add_attribute("alt", Alt, 0)}>
  </div>`;
    });
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let mathColor;
      let $isDarkMode, $$unsubscribe_isDarkMode;
      $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
      const reviewers = ["zaara", "miranda", "ben", "efe", "paola", "rob", "tj"];
      let equations = [
        "\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}",
        "\\prod_{i=a}^{b} f(i)",
        "k = \\frac{aL}{At} \\ln \\frac{h_0}{h_t}",
        "\\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)",
        " i\\hbar\\gamma^\\mu \\partial_\\mu \\psi - mc\\psi = 0 ",
        "R_{\\mu \\nu} - {1 \\over 2}g_{\\mu \\nu}\\,R + g_{\\mu \\nu} \\Lambda = \n {8 \\pi G \\over c^4} T_{\\mu \\nu}"
      ];
      mathColor = $isDarkMode ? "text-blue-100" : "text-red-500";
      $$unsubscribe_isDarkMode();
      return `
<div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}">${each(equations, (eqn, i) => {
        return `<p${add_attribute("class", mathColor, 0)}>${validate_component(Katex, "K").$$render($$result, { d: true, m: eqn }, {}, {})}
    </p>`;
      })}</div>

<div class="${"font-Poppins text-center sm:text-5xl text-4xl pb-20 "}">TESTIMONIALS
</div>

<div class="${"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 "}">${each(reviewers, (name4) => {
        return `${validate_component(GalleryScale, "GalleryScale").$$render(
          $$result,
          {
            Src: `/reviews/review-${name4}-bare.png`,
            Alt: `review ${name4}`
          },
          {},
          {}
        )}`;
      })}</div>

`;
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
  shared: () => page_exports,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, imports3, stylesheets3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_page();
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_page.svelte-6afdb77e.js";
    imports3 = ["_app/immutable/components/pages/_page.svelte-6afdb77e.js", "_app/immutable/chunks/index-c3c96927.js", "_app/immutable/chunks/store-b6e0dbc0.js", "_app/immutable/chunks/index-b80a8d4d.js", "_app/immutable/chunks/index-406aa5de.js", "_app/immutable/chunks/Katex-2484979a.js", "_app/immutable/modules/pages/_page.js-ed7d2f11.js"];
    stylesheets3 = [];
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
function isComponentEager(component7) {
  return component7.instantiationMode === "EAGER";
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
      setComponent(component7) {
        if (component7.name !== this.name) {
          throw Error(`Mismatching Component ${component7.name} for Provider ${this.name}.`);
        }
        if (this.component) {
          throw Error(`Component for ${this.name} has already been provided`);
        }
        this.component = component7;
        if (!this.shouldAutoInitialize()) {
          return;
        }
        if (isComponentEager(component7)) {
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
      addComponent(component7) {
        const provider = this.getProvider(component7.name);
        if (provider.isComponentSet()) {
          throw new Error(`Component ${component7.name} has already been registered with ${this.name}`);
        }
        provider.setComponent(component7);
      }
      addOrOverwriteComponent(component7) {
        const provider = this.getProvider(component7.name);
        if (provider.isComponentSet()) {
          this.providers.delete(component7.name);
        }
        this.addComponent(component7);
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
  const component7 = provider.getComponent();
  return (component7 === null || component7 === void 0 ? void 0 : component7.type) === "VERSION";
}
function _addComponent(app2, component7) {
  try {
    app2.container.addComponent(component7);
  } catch (e3) {
    logger.debug(`Component ${component7.name} failed to register with FirebaseApp ${app2.name}`, e3);
  }
}
function _registerComponent(component7) {
  const componentName = component7.name;
  if (_components.has(componentName)) {
    logger.debug(`There were multiple attempts to register component ${componentName}.`);
    return false;
  }
  _components.set(componentName, component7);
  for (const app2 of _apps.values()) {
    _addComponent(app2, component7);
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
  for (const component7 of _components.values()) {
    container.addComponent(component7);
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
        function step(op2) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (_2)
            try {
              if (f2 = 1, y && (t2 = op2[0] & 2 ? y["return"] : op2[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op2[1])).done)
                return t2;
              if (y = 0, t2)
                op2 = [op2[0] & 2, t2.value];
              switch (op2[0]) {
                case 0:
                case 1:
                  t2 = op2;
                  break;
                case 4:
                  _2.label++;
                  return { value: op2[1], done: false };
                case 5:
                  _2.label++;
                  y = op2[1];
                  op2 = [0];
                  continue;
                case 7:
                  op2 = _2.ops.pop();
                  _2.trys.pop();
                  continue;
                default:
                  if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op2[0] === 6 || op2[0] === 2)) {
                    _2 = 0;
                    continue;
                  }
                  if (op2[0] === 3 && (!t2 || op2[1] > t2[0] && op2[1] < t2[3])) {
                    _2.label = op2[1];
                    break;
                  }
                  if (op2[0] === 6 && _2.label < t2[1]) {
                    _2.label = t2[1];
                    t2 = op2;
                    break;
                  }
                  if (t2 && _2.label < t2[2]) {
                    _2.label = t2[2];
                    _2.ops.push(op2);
                    break;
                  }
                  if (t2[2])
                    _2.ops.pop();
                  _2.trys.pop();
                  continue;
              }
              op2 = body.call(thisArg, _2);
            } catch (e3) {
              op2 = [6, e3];
              y = 0;
            } finally {
              f2 = t2 = 0;
            }
          if (op2[0] & 5)
            throw op2[1];
          return { value: op2[0] ? op2[1] : void 0, done: true };
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
function _emulatorUrl(config, path2) {
  debugAssert(config.emulator, "Emulator should always be set here");
  const { url } = config.emulator;
  if (!path2) {
    return url;
  }
  return `${url}${path2.startsWith("/") ? path2.slice(1) : path2}`;
}
function _addTidIfNecessary(auth, request) {
  if (auth.tenantId && !request.tenantId) {
    return Object.assign(Object.assign({}, request), { tenantId: auth.tenantId });
  }
  return request;
}
async function _performApiRequest(auth, method, path2, request, customErrorMap = {}) {
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
    return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path2, query), Object.assign({
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
async function _performSignInRequest(auth, method, path2, request, customErrorMap = {}) {
  const serverResponse = await _performApiRequest(auth, method, path2, request, customErrorMap);
  if ("mfaPendingCredential" in serverResponse) {
    _fail(auth, "multi-factor-auth-required", {
      _serverResponse: serverResponse
    });
  }
  return serverResponse;
}
function _getFinalTarget(auth, host, path2, query) {
  const base2 = `${host}${path2}?${query}`;
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
        const index7 = this.queue.length - 1;
        return () => {
          this.queue[index7] = () => Promise.resolve();
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
      async _withRetries(op2) {
        let numAttempts = 0;
        while (true) {
          try {
            const db = await this._openDb();
            return await op2(db);
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
var init_index_esm2 = __esm({
  "node_modules/firebase/auth/dist/index.esm.js"() {
    init_esm2017();
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
var init_index_esm3 = __esm({
  "node_modules/firebase/firestore/lite/dist/index.esm.js"() {
    init_index_browser_esm2017();
  }
});

// .svelte-kit/output/server/entries/pages/login/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
var FIREBASE_apiKey, FIREBASE_authDomain, FIREBASE_projectId, FIREBASE_storageBucket, FIREBASE_messagingSenderId, FIREBASE_appId, firebaseConfig, app, css, Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/login/_page.svelte.js"() {
    init_chunks();
    init_store();
    init_index_esm();
    init_index_esm2();
    init_index_esm3();
    init_index2();
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
    css = {
      code: '#flyingEmoji.svelte-1k1mjbo.svelte-1k1mjbo{display:flex;justify-content:center;align-items:center;-webkit-animation:svelte-1k1mjbo-xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);animation:svelte-1k1mjbo-xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1)}#flyingEmoji.svelte-1k1mjbo.svelte-1k1mjbo::after{content:"\u{1F6F8}";display:block;width:1px;height:1px;border-radius:20px;-webkit-animation:svelte-1k1mjbo-yAxis 3s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);animation:svelte-1k1mjbo-yAxis 3s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64)}@-webkit-keyframes svelte-1k1mjbo-yAxis{80%{-webkit-animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);transform:translateY(-100px) rotate(360deg) scale(2)}}@keyframes svelte-1k1mjbo-yAxis{80%{-webkit-animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);animation-timing-function:cubic-bezier(0.02, 0.01, 0.21, 1);transform:translateY(-100px) rotate(360deg) scale(2)}}@-webkit-keyframes svelte-1k1mjbo-xAxis{20%{-webkit-animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);transform:translateX(200px)}}@keyframes svelte-1k1mjbo-xAxis{20%{-webkit-animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);animation-timing-function:cubic-bezier(0.3, 0.27, 0.07, 1.64);transform:translateX(200px)}}@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");:root{--transition-effect:ease-in fadeIn 0.6s}@-webkit-keyframes svelte-1k1mjbo-fadeIn{from{opacity:0}to{opacity:1}}@keyframes svelte-1k1mjbo-fadeIn{from{opacity:0}to{opacity:1}}#logInDiv.svelte-1k1mjbo.svelte-1k1mjbo{animation:var(--transition-effect);-moz-animation:var(--transition-effect);-o-animation:var(--transition-effect);-ms-animation:var(--transition-effect);-webkit-animation:var(--transition-effect)}.loginLogoutDivs.svelte-1k1mjbo.svelte-1k1mjbo{margin:0px auto;width:25vw;min-width:280px;padding:20px;font-family:"Nunito", sans-serif;font-weight:400}.loginLogoutDivs.svelte-1k1mjbo input.svelte-1k1mjbo,button.svelte-1k1mjbo.svelte-1k1mjbo{box-sizing:border-box;width:100%;border-radius:2px;padding:15px;outline:none;margin-bottom:15px;font-family:"Nunito", sans-serif;font-weight:400;font-size:16px;transition:0.15s;-moz-transition:0.15s;-webkit-transition:0.15s}.loginLogoutDivs.svelte-1k1mjbo input.svelte-1k1mjbo{background:#fff;border:1px solid #ccc}#googleBtn.svelte-1k1mjbo.svelte-1k1mjbo{background:#4285f4;border:1px solid #4285f4}#googleBtn.svelte-1k1mjbo.svelte-1k1mjbo:hover{color:#4285f4;background:#fff;border:1px solid #4285f4}.loginLogoutDivs.svelte-1k1mjbo button.svelte-1k1mjbo{background:black;color:#fff;border:1px solid black}.loginLogoutDivs.svelte-1k1mjbo input.svelte-1k1mjbo:hover{border:1px solid #999}.loginLogoutDivs.svelte-1k1mjbo button.svelte-1k1mjbo:hover{color:black;background:#fff;border:1px solid black}.loginLogoutDivs.svelte-1k1mjbo input.svelte-1k1mjbo:focus{background:rgba(255, 255, 255, 0.5)}.centering.svelte-1k1mjbo.svelte-1k1mjbo{display:flex;justify-content:center;align-items:center}',
      map: null
    };
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_redirectAfterLoginTimeOut;
      let $$unsubscribe_redirectSetInterval;
      let $$unsubscribe_isLoggedIn;
      $$unsubscribe_redirectAfterLoginTimeOut = subscribe(redirectAfterLoginTimeOut, (value) => value);
      $$unsubscribe_redirectSetInterval = subscribe(redirectSetInterval, (value) => value);
      $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
      let emailFieldValue = "";
      $$result.css.add(css);
      $$unsubscribe_redirectAfterLoginTimeOut();
      $$unsubscribe_redirectSetInterval();
      $$unsubscribe_isLoggedIn();
      return `<main><video autoplay loop muted playsinline controlslist="${"nodownload"}" src="${"/login-bg-video-blurred.mp4"}" style="${"min-height: 90vh; max-height: 90vh; min-width: 100vw; max-width: 100vw; position: absolute; z-index: -1; top: 0; left: 0; margin: 0; padding: 0; filter: blur(10px); "}"></video>

  <div class="${"loginLogoutDivs  svelte-1k1mjbo"}" id="${"logInDiv"}" style="${"display: block; "}"><br>
    <br>

    <button id="${"googleBtn"}" class="${"svelte-1k1mjbo"}">Sign-in with Google</button>
    <br>
    <br>

    <button id="${"passwordlessLoginBtn"}" class="${"svelte-1k1mjbo"}">Sign-in via link</button>

    <input id="${"emailField"}" type="${"email"}" placeholder="${"email"}" class="${"svelte-1k1mjbo"}"${add_attribute("value", emailFieldValue, 0)}>

    <span id="${"emailStatusMessage"}" class="${"centering  svelte-1k1mjbo"}" style="${"display:none"}"></span>
    <span id="${"flyingEmoji"}" style="${"display:none"}" class="${"svelte-1k1mjbo"}"></span></div>

  <div class="${"loginLogoutDivs svelte-1k1mjbo"}" id="${"logOutDiv"}" style="${"display: none"}"><h2 class="${"centering svelte-1k1mjbo"}" id="${"loginWelcomeText"}">Welcome User</h2>
    <h3 class="${"centering svelte-1k1mjbo"}">Redirecting to your page in</h3>
    <h3 class="${"centering svelte-1k1mjbo"}" style="${"font-size: 30px;"}" id="${"redirectMessage"}">\u230A\u03C0\u230B</h3>

    <button id="${"logoutBtn"}" class="${"svelte-1k1mjbo"}">Logout</button></div>
</main>`;
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
    component4 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file4 = "_app/immutable/components/pages/login/_page.svelte-5d0d41a2.js";
    imports4 = ["_app/immutable/components/pages/login/_page.svelte-5d0d41a2.js", "_app/immutable/chunks/index-c3c96927.js", "_app/immutable/chunks/store-b6e0dbc0.js", "_app/immutable/chunks/index-b80a8d4d.js", "_app/immutable/chunks/index-406aa5de.js", "_app/immutable/chunks/navigation-a4fa1ffd.js", "_app/immutable/chunks/singletons-0ce39104.js"];
    stylesheets4 = ["_app/immutable/assets/+page-6074a07d.css"];
  }
});

// .svelte-kit/output/server/entries/pages/mdsvex-and-katex/_page.md.js
var page_md_exports = {};
__export(page_md_exports, {
  default: () => Page3
});
var css2, Page3;
var init_page_md = __esm({
  ".svelte-kit/output/server/entries/pages/mdsvex-and-katex/_page.md.js"() {
    init_chunks();
    init_Katex();
    init_katex();
    css2 = {
      code: "blockquote.svelte-1m42o73{margin:0;padding-left:1.4rem;border-left:8px solid #bbb}ul.svelte-1m42o73{list-style-type:disc;list-style-position:inside}h1.svelte-1m42o73{font-size:1.5rem;line-height:2rem}",
      map: null
    };
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let x2 = 2;
      $$result.css.add(css2);
      return `
<h1 class="${"svelte-1m42o73"}">The content on this page is written in a markdown file, which uses html, css, svelte components \u2026thanks to MDsveX + plugins!</h1>

<div class="${"h-6"}"></div>
<p>The black math expressions are written in markdown. </p>
<ul class="${"svelte-1m42o73"}"><li><strong>Advantage1</strong>: writing lots of inline math expressions \u2014 e.g. \u201C..the general Einsteinian equation is <strong>NOT</strong> <span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E=mc^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span> \u2014 bur rather <span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><msup><mi>m</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>p</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E^2=m^2c^4 + p^2c^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">4</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span>\u2026\u201D\u2014 is much simpler with markdown. <strong>Advantage2</strong>: Markdown math has identical syntax to Latex. </li>
<li><strong>Disadvantage</strong>: cannot apply css directly to math expression</li></ul>
<blockquote class="${"svelte-1m42o73"}"><p>The base \u201C2\u201D here \u2014 <span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>=</mo></mrow><annotation encoding="application/x-tex">x=</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span></span></span></span>'}<!-- HTML_TAG_END --></span>${escape(x2)}<span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mrow></mrow><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span>\u2026 \u2014  is taken from script variable. </p>
<button class="${"bg-red-100 p-2"}">increment</button>
<button class="${"bg-red-100 p-2"}">decrement</button></blockquote>
<blockquote class="${"svelte-1m42o73"}"><div class="${"math math-display"}"><!-- HTML_TAG_START -->${'<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable rowspacing="0.25em" columnalign="right left" columnspacing="0em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mi>A</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mfrac><mrow><mi>\u03C0</mi><msup><mi>r</mi><mn>2</mn></msup></mrow><mn>2</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>\u03C0</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mstyle></mtd></mtr></mtable><annotation encoding="application/x-tex">\\begin{aligned}\nA &amp; = \\frac{\\pi r^2}{2} \\\\\n&amp; = \\frac{1}{2} \\pi r^2\n\\end{aligned}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:4.7845em;vertical-align:-2.1423em;"></span><span class="mord"><span class="mtable"><span class="col-align-r"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.6423em;"><span style="top:-4.6423em;"><span class="pstrut" style="height:3.4911em;"></span><span class="mord"><span class="mord mathnormal">A</span></span></span><span style="top:-2.3348em;"><span class="pstrut" style="height:3.4911em;"></span><span class="mord"></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:2.1423em;"><span></span></span></span></span></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.6423em;"><span style="top:-4.6423em;"><span class="pstrut" style="height:3.4911em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4911em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">\u03C0</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span><span style="top:-2.3348em;"><span class="pstrut" style="height:3.4911em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.03588em;">\u03C0</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:2.1423em;"><span></span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></div></blockquote>

<p>These red math expressions are (katex) svelte components. </p>
<ul class="${"svelte-1m42o73"}"><li><strong>Advantage1</strong>: can apply css; the color was done with tailwind and the bounce was done with svelte transition!! <strong>Advantage2</strong>: can use conditional logic (e.g. for loops)</li>
<li><strong>Disadvantage1</strong>: terrible for inline math expressions. <strong>Disadvantage2</strong>: syntax starts to depart from latex: escaping characters (i.e. \u2019\\\\frac \u2026\u2019) and having to be wrapped within svelte components.</li></ul>
${each(Array(3), (_2, i) => {
        return `
<div class="${"text-red-500"}">${validate_component(Katex, "K").$$render(
          $$result,
          {
            d: true,
            m: "\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}"
          },
          {},
          {}
        )}
	${validate_component(Katex, "K").$$render(
          $$result,
          {
            d: true,
            m: "\\prod_{i=a}^{b} f(i)"
          },
          {},
          {}
        )}
	${validate_component(Katex, "K").$$render(
          $$result,
          {
            d: true,
            m: " A \\overset{!}{=} B; A \\stackrel{!}{=} B"
          },
          {},
          {}
        )}
	${validate_component(Katex, "K").$$render(
          $$result,
          {
            m: "k = \\frac{aL}{At} \\ln \\frac{h_0}{h_t}"
          },
          {},
          {}
        )}
	${validate_component(Katex, "K").$$render($$result, { d: true, m: "I=\\int_0^1 f(x) dx" }, {}, {})}
	${validate_component(Katex, "K").$$render($$result, { d: true, m: "\\frac{x}{3}" }, {}, {})}
	${validate_component(Katex, "K").$$render(
          $$result,
          {
            d: true,
            m: "S(\\omega)=\\frac{\\alpha g^2}{\\omega^5} ,e^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]}"
          },
          {},
          {}
        )}
</div>`;
      })}
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
    component5 = async () => (await Promise.resolve().then(() => (init_page_md(), page_md_exports))).default;
    file5 = "_app/immutable/components/pages/mdsvex-and-katex/_page.md-4c5b78a4.js";
    imports5 = ["_app/immutable/components/pages/mdsvex-and-katex/_page.md-4c5b78a4.js", "_app/immutable/chunks/index-c3c96927.js", "_app/immutable/chunks/Katex-2484979a.js", "_app/immutable/chunks/index-406aa5de.js"];
    stylesheets5 = ["_app/immutable/assets/+page-00d95502.css"];
  }
});

// .svelte-kit/output/server/entries/pages/plans/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page4
});
var css$1, PlansCard, css3, Page4;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/plans/_page.svelte.js"() {
    init_chunks();
    init_store();
    init_index2();
    css$1 = {
      code: ".cardCSS.svelte-35bofc{transform:perspective(1000px) rotateX(12deg);z-index:10;-webkit-transform:translateZ(-1px)}.cardCSS.svelte-35bofc:hover{transform:perspective(1000px) rotateX(0deg) scale(1.02)}",
      map: null
    };
    PlansCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let cardColor;
      let $isDarkMode, $$unsubscribe_isDarkMode;
      $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
      let { calendlyUrl = "" } = $$props;
      let { btnColorHover = "" } = $$props;
      let { card } = $$props;
      let buttonColor = {
        1: "bg-[rgb(45,165,214)]",
        2: "bg-[rgb(244,77,77)]",
        3: "bg-[rgb(254,164,92)]"
      };
      if ($$props.calendlyUrl === void 0 && $$bindings.calendlyUrl && calendlyUrl !== void 0)
        $$bindings.calendlyUrl(calendlyUrl);
      if ($$props.btnColorHover === void 0 && $$bindings.btnColorHover && btnColorHover !== void 0)
        $$bindings.btnColorHover(btnColorHover);
      if ($$props.card === void 0 && $$bindings.card && card !== void 0)
        $$bindings.card(card);
      $$result.css.add(css$1);
      cardColor = $isDarkMode ? dark_lightened : light_darkened;
      $$unsubscribe_isDarkMode();
      return `${$$result.head += `<link href="${"https://assets.calendly.com/assets/external/widget.css"}" rel="${"stylesheet"}" data-svelte="svelte-mukgzh"><script src="${"https://assets.calendly.com/assets/external/widget.js"}" type="${"text/javascript"}" async data-svelte="svelte-mukgzh"><\/script>`, ""}


<div class="${"cardCSS shadow-md " + escape($isDarkMode ? "hover:shadow-xl" : "hover:shadow-lg", true) + " rounded-xl w-[10] min-w-fit p-10 m-1 text-center duration-300 group svelte-35bofc"}"${add_attribute("style", `background:${cardColor}`, 0)}><button class="${"" + escape(buttonColor[card], true) + " " + escape(btnColorHover, true) + " hover:shadow-md duration-300 rounded-md p-4 " + escape(
        $isDarkMode ? "group-hover:bg-opacity-80" : "group-hover:bg-opacity-80",
        true
      ) + " text-xl text-white svelte-35bofc"}">${slots.buttonText ? slots.buttonText({}) : `default button Text`}</button>

  <div class="${"py-4"}">${slots.cardText ? slots.cardText({}) : `default cardText`}</div>
  
</div>`;
    });
    css3 = {
      code: "a.svelte-18ymex4{color:var(--anchor)}a.svelte-18ymex4:hover{color:var(--anchor_hover)}",
      map: null
    };
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      const plansCardArray = [
        {
          card: 1,
          calendlyUrl: "https://calendly.com/brightowltutoring/invoice-webinowl?hide_gdpr_banner=1",
          buttonText: "Webinowl",
          cardText: "  Classic 1-on-1 session with smooth screen sharing. Supported platforms: Zoom, TeamViewer Meeting, and Microsoft Teams Digital session notesavailable at a premium ",
          href: "https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9LTVM3TWdiUWkxNDY1Y2hnSXFhNDg0ZGJYVUlUWlJM0100zoHToCyS"
        },
        {
          card: 2,
          calendlyUrl: "https://calendly.com/brightowltutoring/invoice-blitzowl?hide_gdpr_banner=1",
          buttonText: "Blitzowl",
          cardText: "  Submit your homework Receive a personal 15-day solution URL/page Cost calculated based on number of questions submitted Single and bundled options available.",
          href: "https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9LTVM3TWdiUWkxNDY1Y2hnSXFhNDg0ZGJYVUlUWlJM0100zoHToCyS"
        },
        {
          card: 3,
          calendlyUrl: "https://calendly.com/brightowltutoring/invoice-mockowl?hide_gdpr_banner=1",
          buttonText: "Mockowl",
          cardText: " Get test ready. We provide a mock test session complete with live support and a digital copy of answers. Solution key available at a premium",
          href: "https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9LTVM3TWdiUWkxNDY1Y2hnSXFhNDg0ZGJYVUlUWlJM0100zoHToCyS"
        }
      ];
      $$result.css.add(css3);
      return `<div class="${"font-Poppins text-center sm:text-7xl text-6xl pb-2 "}">Plans</div>


<div class="${"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-7 "}">${each(plansCardArray, (item, i) => {
        return `<div>${validate_component(PlansCard, "PlansCard").$$render(
          $$result,
          {
            card: item.card,
            calendlyUrl: item.calendlyUrl
          },
          {},
          {
            cardText: () => {
              return `<span slot="${"cardText"}">${escape(item.cardText)}
          <p><a sveltekit:prefetch${add_attribute("href", item.href, 0)} class="${"svelte-18ymex4"}">sample</a></p>
        </span>`;
            },
            buttonText: () => {
              return `<span slot="${"buttonText"}">${escape(item.buttonText)} </span>`;
            }
          }
        )}
    </div>`;
      })}
</div>`;
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
    component6 = async () => (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    file6 = "_app/immutable/components/pages/plans/_page.svelte-5ebf4c20.js";
    imports6 = ["_app/immutable/components/pages/plans/_page.svelte-5ebf4c20.js", "_app/immutable/chunks/index-c3c96927.js", "_app/immutable/chunks/store-b6e0dbc0.js", "_app/immutable/chunks/index-b80a8d4d.js", "_app/immutable/chunks/index-406aa5de.js"];
    stylesheets6 = ["_app/immutable/assets/+page-ebab19d4.css"];
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
function resolve(base2, path2) {
  if (scheme.test(path2))
    return path2;
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path2);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path2.slice(path_match[0].length).split("/") : path2.split("/");
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
function is_root_relative(path2) {
  return path2[0] === "/" && path2[1] !== "/";
}
function normalize_path(path2, trailing_slash) {
  if (path2 === "/" || trailing_slash === "ignore")
    return path2;
  if (trailing_slash === "never") {
    return path2.endsWith("/") ? path2.slice(0, -1) : path2;
  } else if (trailing_slash === "always" && !path2.endsWith("/")) {
    return path2 + "/";
  }
  return path2;
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
  const stylesheets7 = new Set(entry.stylesheets);
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
        node.stylesheets.forEach((url) => stylesheets7.add(url));
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
  const prefixed = (path2) => path2.startsWith("/") ? path2 : `${assets2}/${path2}`;
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
  for (const dep of stylesheets7) {
    const path2 = prefixed(dep);
    const attributes = [];
    if (csp.style_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
      link_header_preloads.add(`<${encodeURI(path2)}>; ${preload_atts.join(";")}; nopush`);
    }
    attributes.unshift('rel="stylesheet"');
    head += `
	<link href="${path2}" ${attributes.join(" ")}>`;
  }
  if (page_config.router || page_config.hydrate) {
    for (const dep of modulepreloads) {
      const path2 = prefixed(dep);
      link_header_preloads.add(`<${encodeURI(path2)}>; rel="modulepreload"; nopush`);
      if (state.prerendering) {
        head += `
	<link rel="modulepreload" href="${path2}">`;
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
function check_serializability(value, id, path2) {
  const type = typeof value;
  if (type === "string" || type === "boolean" || type === "number" || type === "undefined") {
    return;
  }
  if (type === "object") {
    if (!value)
      return;
    if (Array.isArray(value)) {
      value.forEach((child, i) => {
        check_serializability(child, id, `${path2}[${i}]`);
      });
      return;
    }
    const tag = Object.prototype.toString.call(value);
    if (tag === "[object Object]") {
      for (const key2 in value) {
        check_serializability(value[key2], id, `${path2}.${key2}`);
      }
      return;
    }
  }
  throw new Error(`${path2} returned from 'load' in ${id} cannot be serialized as JSON`);
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
function path_matches(path2, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path2 === normalized)
    return true;
  return path2.startsWith(normalized + "/");
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
      const file7 = is_asset ? filename : filename_html;
      if (options.read) {
        const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
        response = new Response(options.read(file7), {
          headers: type ? { "content-type": type } : {}
        });
      } else {
        response = await fetch(`${event.url.origin}/${file7}`, opts);
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
        async function text2() {
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
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
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
              const index7 = route.errors[i];
              const node2 = await options.manifest._.nodes[index7]();
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
  assets: /* @__PURE__ */ new Set([".DS_Store", "login-bg-video-blurred.mp4", "reviews/.DS_Store", "reviews/review-ben-bare.png", "reviews/review-efe-bare.png", "reviews/review-miranda-bare.png", "reviews/review-paola-bare.png", "reviews/review-rob-bare.png", "reviews/review-tj-bare.png", "reviews/review-zaara-bare.png"]),
  mimeTypes: { ".mp4": "video/mp4", ".png": "image/png" },
  _: {
    entry: { "file": "_app/immutable/start-52952551.js", "imports": ["_app/immutable/start-52952551.js", "_app/immutable/chunks/index-c3c96927.js", "_app/immutable/chunks/singletons-0ce39104.js", "_app/immutable/chunks/index-b80a8d4d.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6))
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
        leaf: 2
      },
      {
        type: "page",
        id: "login",
        pattern: /^\/login\/?$/,
        names: [],
        types: [],
        errors: [1],
        layouts: [0],
        leaf: 3
      },
      {
        type: "page",
        id: "mdsvex-and-katex",
        pattern: /^\/mdsvex-and-katex\/?$/,
        names: [],
        types: [],
        errors: [1],
        layouts: [0],
        leaf: 4
      },
      {
        type: "page",
        id: "plans",
        pattern: /^\/plans\/?$/,
        names: [],
        types: [],
        errors: [1],
        layouts: [0],
        leaf: 5
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
      let file7 = pathname.substring(1);
      try {
        file7 = decodeURIComponent(file7);
      } catch (err) {
      }
      if (manifest.assets.has(file7) || manifest.assets.has(file7 + "/index.html") || prerendered.has(pathname)) {
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
