import { c as create_ssr_component, e as escape, d as add_attribute, a as subscribe, v as validate_component, g as getContext, f as now, l as loop, h as set_store_value, j as each } from "../../chunks/index.js";
import { D as Dropzone } from "../../chunks/Dropzone.js";
import { L as LoginCard } from "../../chunks/LoginCard.js";
import { b as browser } from "../../chunks/environment.js";
import { i as isDarkMode, n as navLoginClicked, a as navHomeworkClicked, b as navAppClicked, r as routes, c as isLoggedIn, s as scrollY, e as elementColor, d as instDeltaY, l as lessThan768 } from "../../chunks/store.js";
import { i as isRunningStandalone } from "../../chunks/utils.js";
import { w as writable } from "../../chunks/index2.js";
const app = "";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal = false } = $$props;
  let { bgTint = "bg-[rgba(0,0,0,0.4)]" } = $$props;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.bgTint === void 0 && $$bindings.bgTint && bgTint !== void 0)
    $$bindings.bgTint(bgTint);
  return `



<button class="${"fixed w-full h-full grid place-items-center z-50 md:py-4 py-1 md:px-[7%] " + escape(showModal ? `${bgTint} ` : "hidden", true) + " overflow-y-scroll overflow-x-clip"}">${slots.default ? slots.default({}) : ``}</button>

`;
});
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
const css = {
  code: ":root{--light:#f7f7f7;--dark:rgb(20, 13, 33)}body{background:var(--light);color:var(--dark);transition:background-color 0.3s}body.dark-mode{background:var(--dark);color:var(--light)}",
  map: null
};
const LightDarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$result.css.add(css);
  $$unsubscribe_isDarkMode();
  return `
  <div><button>${$isDarkMode ? `${validate_component(IconSun, "IconSun").$$render($$result, {}, {}, {})}` : `${validate_component(IconMoon, "IconMoon").$$render($$result, {}, {}, {})}`}</button></div>`;
});
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
  let $$unsubscribe_navLoginClicked;
  let $$unsubscribe_navHomeworkClicked;
  let $page, $$unsubscribe_page;
  $$unsubscribe_navLoginClicked = subscribe(navLoginClicked, (value) => value);
  $$unsubscribe_navHomeworkClicked = subscribe(navHomeworkClicked, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { navIconClicked = false } = $$props;
  let { href, content, btnColorHover, routes: routes2, icon } = $$props;
  if ($$props.navIconClicked === void 0 && $$bindings.navIconClicked && navIconClicked !== void 0)
    $$bindings.navIconClicked(navIconClicked);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.btnColorHover === void 0 && $$bindings.btnColorHover && btnColorHover !== void 0)
    $$bindings.btnColorHover(btnColorHover);
  if ($$props.routes === void 0 && $$bindings.routes && routes2 !== void 0)
    $$bindings.routes(routes2);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
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
  $$unsubscribe_navLoginClicked();
  $$unsubscribe_navHomeworkClicked();
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
  let $navHomeworkClicked, $$unsubscribe_navHomeworkClicked;
  let $navLoginClicked, $$unsubscribe_navLoginClicked;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_navAppClicked = subscribe(navAppClicked, (value) => value);
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  $$unsubscribe_elementColor = subscribe(elementColor, (value) => $elementColor = value);
  $$unsubscribe_navHomeworkClicked = subscribe(navHomeworkClicked, (value) => $navHomeworkClicked = value);
  $$unsubscribe_navLoginClicked = subscribe(navLoginClicked, (value) => $navLoginClicked = value);
  let scaleRocket = spring(1, { stiffness: 0.1, damping: 0.25 });
  $$unsubscribe_scaleRocket = subscribe(scaleRocket, (value) => $scaleRocket = value);
  let hueRocket = 0;
  let btnColor = "sm:bg-red-300 rounded";
  let btnColorHover = "hover:bg-red-300 ";
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
<logo-and-navbar class="${"opacity-0 " + escape(fadeInToFullOpacity, true) + " flex items-center justify-center md:justify-between w-full"}"><button class="${"md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent"}">THINKSOLVE
    </button>

  
  <ul class="${"text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto " + escape(bgGradientColor, true) + " hideScrollBar overflow-x-scroll overflow-y-hidden"}">
    
    <li${add_attribute("class", hideIfRunningStandalone, 0)}><button class="${"font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg " + escape($elementColor, true) + " hover:bg-indigo-400 hover:text-white active:animate-pulse duration-200 border-b-1 rounded"}">App
      </button></li>

    ${each(Object.keys($routes).slice(0, 5), (KEY) => {
      return `<li${add_attribute("class", `${KEY == "home" && hideIfRunningStandalone}`, 0)}${add_attribute("style", KEY == "login" && $isLoggedIn && `transform:scale(${$scaleRocket}); filter:hue-rotate(${hueRocket}turn)`, 0)}>${validate_component(Navitem, "Navitem").$$render(
        $$result,
        {
          href: $routes[KEY].href,
          content: $routes[KEY].name,
          icon: $routes[KEY].icon,
          navIconClicked: $routes[KEY].href == "/homework" && $navHomeworkClicked || $routes[KEY].href == "/login" && $navLoginClicked || $routes[KEY].isCurrent,
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
  $$unsubscribe_navHomeworkClicked();
  $$unsubscribe_navLoginClicked();
  return $$rendered;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex justify-center items-center "}"><span class="${"my-20 text-xs text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-pink-600"}">Need help? Contact thinksolve.io[at]gmail.com
  </span></div>`;
});
let verticalThreshold = 800;
let verticalThresholdMobile = 400;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $instDeltaY, $$unsubscribe_instDeltaY;
  let $scrollY, $$unsubscribe_scrollY;
  let $lessThan768, $$unsubscribe_lessThan768;
  let $routes, $$unsubscribe_routes;
  let $page, $$unsubscribe_page;
  let $navAppClicked, $$unsubscribe_navAppClicked;
  let $navLoginClicked, $$unsubscribe_navLoginClicked;
  let $navHomeworkClicked, $$unsubscribe_navHomeworkClicked;
  $$unsubscribe_instDeltaY = subscribe(instDeltaY, (value) => $instDeltaY = value);
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  $$unsubscribe_lessThan768 = subscribe(lessThan768, (value) => $lessThan768 = value);
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navAppClicked = subscribe(navAppClicked, (value) => $navAppClicked = value);
  $$unsubscribe_navLoginClicked = subscribe(navLoginClicked, (value) => $navLoginClicked = value);
  $$unsubscribe_navHomeworkClicked = subscribe(navHomeworkClicked, (value) => $navHomeworkClicked = value);
  let jankytown;
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-pwuun0_START --><link rel="${"manifest"}" href="${"/manifest.json"}">${each(Object.keys($routes), (key) => {
      return `${$page.route.id == "/" && key == "home" ? `${$$result.title = `<title>${escape($routes.home.title)}</title>`, ""}
      <meta name="${"description"}" content="${"Math and Physics Tutoring for the Modern Age."}">
      <meta og:url="${"https://thinksolve.io/"}">
      ` : `${$page.route.id == `/${key}` ? `${$$result.title = `<title>${escape($routes[key].title)}</title>`, ""}` : ``}`}`;
    })}<!-- HEAD_svelte-pwuun0_END -->`, ""}



<main>${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        showModal: $navAppClicked,
        bgTint: "bg-[#818cf8]"
      },
      {},
      {
        default: () => {
          return `<div class="${"font-Poppins font-bold text-5xl sm:text-6xl text-center p-10"}">Coming soon! \u{1F680}
      </div>`;
        }
      }
    )}

  
  ${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal: $navLoginClicked },
      {
        showModal: ($$value) => {
          $navLoginClicked = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(LoginCard, "LoginCard").$$render($$result, {}, {}, {})}`;
        }
      }
    )}

  ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        bgTint: "bg-[rgba(0,0,0,0.1)]",
        showModal: $navHomeworkClicked
      },
      {
        showModal: ($$value) => {
          $navHomeworkClicked = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Dropzone, "Dropzone").$$render(
            $$result,
            {
              uniqueId: "modalDropzone",
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

  
  <div class="${"z-50 md:py-4 md:px-[7%] fixed " + escape(jankytown, true) + " ease-in-out w-full"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div>

  
  
  <div class="${"px-[7%] pt-32 md:block"}">${slots.default ? slots.default({}) : ``}
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>

  
  </main>`;
  } while (!$$settled);
  $$unsubscribe_instDeltaY();
  $$unsubscribe_scrollY();
  $$unsubscribe_lessThan768();
  $$unsubscribe_routes();
  $$unsubscribe_page();
  $$unsubscribe_navAppClicked();
  $$unsubscribe_navLoginClicked();
  $$unsubscribe_navHomeworkClicked();
  return $$rendered;
});
export {
  Layout as default
};
