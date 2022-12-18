import { c as create_ssr_component, d as add_attribute, e as escape, a as subscribe, v as validate_component, g as getContext, f as now, l as loop, h as set_store_value, j as each } from "../../chunks/index.js";
import { i as isDarkMode, s as showLoginModal, a as showHomeworkModal, n as navAppClicked, r as routes, b as isLoggedIn, c as scrollY, e as elementColor, d as instDeltaY, l as lessThan768 } from "../../chunks/store.js";
import { w as writable } from "../../chunks/index2.js";
import { I as InView, L as LazyMount } from "../../chunks/LazyMount.js";
import { M as Modal } from "../../chunks/Modal.js";
const browser = false;
const app = "";
let size$1 = 24;
const IconSun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg aria-label="${"Sun"}" id="${"lightIcon"}"${add_attribute("height", size$1, 0)}${add_attribute("width", size$1, 0)} viewBox="${"0 0 " + escape(8 * size$1, true) + " " + escape(8 * size$1, true)}" class="${"mx-3"}"><path fill="${"rgb(247,247,247)"}" d="${"M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"}"></path></svg>`;
});
let size = 24;
const IconMoon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


<svg aria-label="${"Moon"}" id="${"darkIcon"}"${add_attribute("height", size, 0)}${add_attribute("width", size, 0)} class="${"mx-3"}"><path d="${"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"}"></path></svg>`;
});
const LightDarkMode_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--light:#f7f7f7;--dark:rgb(20, 13, 33)}body{background:var(--light);color:var(--dark);transition:background-color 0.3s}body.dark-mode{background:var(--dark);color:var(--light)}",
  map: null
};
const LightDarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$result.css.add(css$1);
  $$unsubscribe_isDarkMode();
  return `
  <div><button>${$isDarkMode ? `${validate_component(IconSun, "IconSun").$$render($$result, {}, {}, {})}` : `${validate_component(IconMoon, "IconMoon").$$render($$result, {}, {}, {})}`}</button></div>`;
});
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
const getStores = () => {
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
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
const Navitem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_showLoginModal;
  let $$unsubscribe_showHomeworkModal;
  let $page, $$unsubscribe_page;
  $$unsubscribe_showLoginModal = subscribe(showLoginModal, (value) => value);
  $$unsubscribe_showHomeworkModal = subscribe(showHomeworkModal, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { href, content, routes: routes2, btnColorHover, icon, navIconClicked = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.routes === void 0 && $$bindings.routes && routes2 !== void 0)
    $$bindings.routes(routes2);
  if ($$props.btnColorHover === void 0 && $$bindings.btnColorHover && btnColorHover !== void 0)
    $$bindings.btnColorHover(btnColorHover);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.navIconClicked === void 0 && $$bindings.navIconClicked && navIconClicked !== void 0)
    $$bindings.navIconClicked(navIconClicked);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      for (let key in routes2) {
        routes2[key].isCurrent = routes2[key].href === $page.url.pathname;
      }
    }
    $$rendered = `<a data-sveltekit-preload-data${add_attribute("href", href, 0)} class="${"block font-Nunito font-thin " + escape(` ${btnColorHover}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`, true)}">
  ${`${escape(content)}`}</a>`;
  } while (!$$settled);
  $$unsubscribe_showLoginModal();
  $$unsubscribe_showHomeworkModal();
  $$unsubscribe_page();
  return $$rendered;
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
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
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
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bgGradientColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  let $$unsubscribe_navAppClicked;
  let $routes, $$unsubscribe_routes;
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  let $scrollY, $$unsubscribe_scrollY;
  let $elementColor, $$unsubscribe_elementColor;
  let $scaleRocket, $$unsubscribe_scaleRocket;
  let $showHomeworkModal, $$unsubscribe_showHomeworkModal;
  let $showLoginModal, $$unsubscribe_showLoginModal;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_navAppClicked = subscribe(navAppClicked, (value) => value);
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  $$unsubscribe_elementColor = subscribe(elementColor, (value) => $elementColor = value);
  $$unsubscribe_showHomeworkModal = subscribe(showHomeworkModal, (value) => $showHomeworkModal = value);
  $$unsubscribe_showLoginModal = subscribe(showLoginModal, (value) => $showLoginModal = value);
  let scaleRocket = spring(1, { stiffness: 0.1, damping: 0.25 });
  $$unsubscribe_scaleRocket = subscribe(scaleRocket, (value) => $scaleRocket = value);
  let hueRocket = 0;
  let btnColor = "sm:bg-red-300 rounded";
  let btnColorHover = "hover:bg-red-300 ";
  let hideIfNotIOS = getOS() !== "iOS" && "hidden";
  let hideIfRunningStandalone = isRunningStandalone();
  let fadeInToFullOpacity = browser;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if ($isLoggedIn && !isRunningStandalone()) {
        hueRocket = $isDarkMode ? 0.75 : 0;
        scaleRocket.set(1 + 0.5 * Math.sin($scrollY));
      }
    }
    {
      $isLoggedIn ? set_store_value(routes, $routes.login.name = "\u{1F680}", $routes) : set_store_value(routes, $routes.login.name = "Login", $routes);
    }
    bgGradientColor = `bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)]  ${$isDarkMode ? "to-[rgb(37,35,91)]" : "to-red-200"}`;
    $$rendered = `
<logo-and-navbar class="${"opacity-0 " + escape(fadeInToFullOpacity, true) + " flex items-center justify-center gap-x-32 md:justify-between w-full"}"><button class="${"p-2 md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent"}">THINKSOLVE
    </button>

  
  <ul class="${"text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto " + escape(bgGradientColor, true) + " hideScrollBar overflow-x-scroll overflow-y-hidden"}">
    
    <li${add_attribute("class", hideIfNotIOS, 0)}><button class="${"font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg " + escape($elementColor, true) + " hover:bg-indigo-400 hover:text-white active:animate-pulse duration-200 border-b-1 rounded"}">App
      </button></li>

    
    ${each(Object.keys($routes).slice(1, 5), (KEY) => {
      return `
      
      <li${add_attribute("style", KEY == "login" && $isLoggedIn && `transform:scale(${$scaleRocket}); filter:hue-rotate(${hueRocket}turn)`, 0)}>${validate_component(Navitem, "Navitem").$$render(
        $$result,
        {
          href: $routes[KEY].href,
          content: $routes[KEY].name,
          icon: $routes[KEY].icon,
          navIconClicked: $routes[KEY].href == "/homework" && $showHomeworkModal || $routes[KEY].href == "/login" && $showLoginModal || $routes[KEY].isCurrent,
          routes: $routes,
          btnColor,
          btnColorHover
        },
        {
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

    <li class="${"py-2 translate-y-1 scale-125 md:scale-100 " + escape(hideIfRunningStandalone, true)}">${validate_component(LightDarkMode, "LightDarkMode").$$render($$result, {}, {}, {})}</li></ul></logo-and-navbar>`;
  } while (!$$settled);
  $$unsubscribe_isDarkMode();
  $$unsubscribe_navAppClicked();
  $$unsubscribe_routes();
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_scrollY();
  $$unsubscribe_elementColor();
  $$unsubscribe_scaleRocket();
  $$unsubscribe_showHomeworkModal();
  $$unsubscribe_showLoginModal();
  return $$rendered;
});
const Dropzone_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dropzone .dz-preview.dz-image-preview{background-color:transparent !important}",
  map: null
};
function dropzonePopUpOnce() {
  if (!globalThis.onceBoolean) {
    setTimeout(
      () => {
        document.querySelector(".dropzone").dispatchEvent(new CustomEvent("click"));
      },
      50
    );
    globalThis.onceBoolean = true;
  }
}
const Dropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let boxShadowColor;
  let $showHomeworkModal, $$unsubscribe_showHomeworkModal;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_showHomeworkModal = subscribe(showHomeworkModal, (value) => $showHomeworkModal = value);
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let { text = "\u{1F525}" } = $$props;
  let { textSizeTW = "text-3xl" } = $$props;
  let { dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]" } = $$props;
  let { brightnessTW = "brightness-100" } = $$props;
  let dropzone;
  async function hydrateDropzoneDomEls(target) {
    console.log("drop it like its \u{1F525}");
    cssToHead("dropzoneCSS", "/dropzone.css");
    const { PUBLIC_UPLOAD_ENDPOINT } = await import("../../chunks/public.js");
    const { Dropzone: Dropzone2 } = await import("dropzone");
    dropzone = new Dropzone2(
      target,
      {
        url: PUBLIC_UPLOAD_ENDPOINT,
        acceptedFiles: ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc"
      }
    );
    dropzoneHandleErroredUploads();
  }
  function dropzoneHandleErroredUploads() {
    let filesToRetry = [];
    dropzone.on("error", (file) => file.accepted && filesToRetry.push(file));
    dropzone.on("queuecomplete", () => {
      setTimeout(() => set_store_value(showHomeworkModal, $showHomeworkModal = false, $showHomeworkModal), 1e3);
    });
    window == null ? void 0 : window.addEventListener("online", () => {
      if (filesToRetry.length > 0) {
        for (const file of filesToRetry) {
          dropzone.processFile(file);
          file.previewElement.querySelector(".dz-error-mark").style.visibility = "hidden";
          file.previewElement.querySelector(".dz-error-message").style.visibility = "hidden";
        }
      }
    });
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.textSizeTW === void 0 && $$bindings.textSizeTW && textSizeTW !== void 0)
    $$bindings.textSizeTW(textSizeTW);
  if ($$props.dimensionsTW === void 0 && $$bindings.dimensionsTW && dimensionsTW !== void 0)
    $$bindings.dimensionsTW(dimensionsTW);
  if ($$props.brightnessTW === void 0 && $$bindings.brightnessTW && brightnessTW !== void 0)
    $$bindings.brightnessTW(brightnessTW);
  $$result.css.add(css);
  $showHomeworkModal && dropzonePopUpOnce();
  boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";
  $$unsubscribe_showHomeworkModal();
  $$unsubscribe_isDarkMode();
  return `${validate_component(InView, "InView").$$render(
    $$result,
    {
      single: true,
      onview: (target) => hydrateDropzoneDomEls(target),
      once: true,
      margin: "0px"
    },
    {},
    {
      default: () => {
        return `<form method="${"post"}" style="${"box-shadow: inset 0 -10px 10px " + escape(boxShadowColor, true) + "; border-radius: 50px; border-color: transparent; background-color: transparent"}" class="${"dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl " + escape(brightnessTW, true) + " " + escape(textSizeTW, true) + " " + escape(dimensionsTW, true) + " mx-auto group"}">
    <div class="${"dz-message font-Nunito group-hover:animate-pulse"}" data-dz-message>${escape(text)}</div></form>`;
      }
    }
  )}`;
});
let verticalThreshold = 800;
let verticalThresholdMobile = 400;
const opacityEasingDelay = 100;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  let $showLoginModal, $$unsubscribe_showLoginModal;
  let $instDeltaY, $$unsubscribe_instDeltaY;
  let $scrollY, $$unsubscribe_scrollY;
  let $lessThan768, $$unsubscribe_lessThan768;
  let $page, $$unsubscribe_page;
  let $routes, $$unsubscribe_routes;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  let $navAppClicked, $$unsubscribe_navAppClicked;
  let $showHomeworkModal, $$unsubscribe_showHomeworkModal;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_showLoginModal = subscribe(showLoginModal, (value) => $showLoginModal = value);
  $$unsubscribe_instDeltaY = subscribe(instDeltaY, (value) => $instDeltaY = value);
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  $$unsubscribe_lessThan768 = subscribe(lessThan768, (value) => $lessThan768 = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_navAppClicked = subscribe(navAppClicked, (value) => $navAppClicked = value);
  $$unsubscribe_showHomeworkModal = subscribe(showHomeworkModal, (value) => $showHomeworkModal = value);
  let FooterComponent;
  let jankytown;
  let contactLinkClicked = false;
  let changeOpacityTo100;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (!$lessThan768) {
        if ($scrollY < 10)
          jankytown = "top-0";
        if ($scrollY > 10 && $scrollY < verticalThreshold)
          jankytown = "top-0 backdrop-blur-3xl duration-1000";
        if ($scrollY > verticalThreshold && $instDeltaY > 10) {
          jankytown = "-top-20 backdrop-blur-3xl duration-200";
        }
        if ($instDeltaY < -100)
          jankytown = "top-0 backdrop-blur-3xl duration-700";
      }
    }
    {
      if ($lessThan768) {
        if ($scrollY >= 0 && $scrollY < verticalThresholdMobile) {
          jankytown = "bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl duration-200";
        }
        if ($scrollY > verticalThresholdMobile && $instDeltaY > 20)
          jankytown = "-bottom-28 duration-400";
        if ($instDeltaY < -30)
          jankytown = "bottom-0 backdrop-blur-3xl duration-700";
      }
    }
    {
      if ($showLoginModal && !$isLoggedIn) {
        setTimeout(
          () => {
            changeOpacityTo100 = "opacity-100 transition-opacity duration-100 ease-in";
          },
          opacityEasingDelay
        );
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1pgxeq7_START --><link rel="${"manifest"}" href="${"/manifest.json"}">${$page.status == 200 ? (() => {
      let slashlessRoute = $page.route.id.slice(1);
      return `

    ${slashlessRoute == "" ? `${$$result.title = `<title>${escape($routes.home.title)}</title>`, ""}
      <meta name="${"description"}" content="${"Math and Physics Tutoring for the Modern Age."}">
      <meta og:url="${"https://thinksolve.io/"}">
      
      ` : `${each(Object.keys($routes).slice(1), (key) => {
        let title = $routes[key].title;
        return `

        ${slashlessRoute.startsWith(key) ? `${$$result.title = `<title>${escape(title)}</title>`, ""}` : ``}`;
      })}`}`;
    })() : `${$page.status == 404 ? `${$$result.title = `<title>Oops \u{1F4A9}</title>`, ""}` : ``}`}<!-- HEAD_svelte-1pgxeq7_END -->`, ""}




<main>${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        showModal: contactLinkClicked,
        bgTint: "backdrop-blur-3xl"
      },
      {},
      {
        default: () => {
          return `<ul class="${"text-center flex flex-col gap-y-2 font-Poppins sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r " + escape(
            $isDarkMode ? "from-teal-200 via-rose-300 to-pink-200 " : "from-teal-700 via-rose-700 to-pink-700 ",
            true
          )}"><li>Email:</li>
        <li class="${"p-5"}">thinksolve.io@gmail.com</li></ul>`;
        }
      }
    )}

  
  ${getOS() == "iOS" ? `

    ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        showModal: $navAppClicked,
        bgTint: "text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"
      },
      {},
      {
        default: () => {
          return `<ul class="${"p-10 flex flex-col gap-y-8 font-Poppins text-3xl sm:text-6xl"}"><li><div class="${"text-6xl"}">1.</div>
            Open Safari
          </li>
          <li><div class="${"text-6xl"}">2.</div>
            <div class="${"flex flex-row justify-center items-center gap-x-2 pt-2"}"><span>Click share icon</span>
              <img class="${"w-7 h-7 -translate-y-1 invert"}" src="${"/safari-share-icon.png"}" alt="${"safari share icon"}"></div></li>

          <li class="${"text-black"}"><div class="${"text-6xl "}">3.</div>
            Click &#39;Add to Home Screen&#39; \u{1F680}
          </li></ul>`;
        }
      }
    )}` : ``}

  

  

  ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        body: true,
        bgTint: `backdrop-blur-md opacity-0 ${changeOpacityTo100}`,
        showModal: $showLoginModal
      },
      {
        showModal: ($$value) => {
          $showLoginModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `
    
    ${validate_component(LazyMount, "LazyMount").$$render(
            $$result,
            {
              Import: () => {
                setTimeout(() => $showLoginModal = true, 2.5 * opacityEasingDelay);
                return import("../../chunks/LoginCard.js");
              }
            },
            {},
            {}
          )}`;
        }
      }
    )}

  ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        bgTint: "bg-[rgba(0,0,0,0.1)]",
        showModal: $showHomeworkModal
      },
      {
        showModal: ($$value) => {
          $showHomeworkModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `

    ${validate_component(Dropzone, "Dropzone").$$render(
            $$result,
            {
              textSizeTW: "text-6xl",
              dimensionsTW: "w-[80vw] h-[85vh]",
              brightnessTW: "brightness-95"
            },
            {},
            {}
          )}
    

    `;
        }
      }
    )}

  
  <div class="${"z-50 md:py-4 md:px-[7%] fixed " + escape(jankytown, true) + " ease-in-out w-full"}">
    ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div>

  
  

  <div class="${"px-[7%] pt-32 md:block"}">
    ${slots.default ? slots.default({}) : ``}

    

    
    ${validate_component(InView, "InView").$$render(
      $$result,
      {
        margin: "400px",
        onview: async () => FooterComponent = await import("../../chunks/Footer.js")
      },
      {},
      {
        default: () => {
          return `${FooterComponent ? `${validate_component(FooterComponent.default, "FooterComponent.default").$$render(
            $$result,
            { contactLinkClicked },
            {
              contactLinkClicked: ($$value) => {
                contactLinkClicked = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}`;
        }
      }
    )}

    

    </div></main>`;
  } while (!$$settled);
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_showLoginModal();
  $$unsubscribe_instDeltaY();
  $$unsubscribe_scrollY();
  $$unsubscribe_lessThan768();
  $$unsubscribe_page();
  $$unsubscribe_routes();
  $$unsubscribe_isDarkMode();
  $$unsubscribe_navAppClicked();
  $$unsubscribe_showHomeworkModal();
  return $$rendered;
});
export {
  Layout as default
};
