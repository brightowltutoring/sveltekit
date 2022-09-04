import { c as create_ssr_component, a as subscribe, e as each, d as escape, f as add_attribute, g as now, l as loop, h as set_store_value, v as validate_component, j as add_styles } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { d as derived, w as writable } from "../../chunks/index2.js";
import "../../chunks/firebase.js";
import "firebase/auth";
import "firebase/app";
import "firebase/firestore/lite";
const app = "";
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
const fractionScroll = derived([scrollY, scrollYMax], ([$scrollY, $scrollYMax]) => {
  return 1 - $scrollY / $scrollYMax;
});
const windowInnerHeight = writable(0);
const innerWidth = writable(0);
const isXs = derived(innerWidth, ($innerWidth) => $innerWidth < 640);
derived(isXs, ($isXs) => $isXs ? customFade : () => {
});
derived(isXs, ($isXs) => $isXs ? customFade : () => {
});
const routes = writable({
  home: {
    name: "Home",
    href: "/",
    title: "Thinksolve.io \u{1F4AB}",
    isCurrent: false
  },
  etc: {
    name: "Etc",
    href: "/etc",
    title: "Etc",
    isCurrent: false
  },
  plans: {
    name: "Plans",
    href: "/plans",
    title: "Plans",
    isCurrent: false
  },
  login: {
    name: "Login",
    href: "/login",
    title: "Login \u{1F680}",
    isCurrent: false
  }
});
const isDarkMode = writable(false);
const PageTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $routes, $$unsubscribe_routes;
  let $page, $$unsubscribe_page;
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_routes();
  $$unsubscribe_page();
  return `${$$result.head += `${each(Object.keys($routes), (key) => {
    return `
        ${$page.routeId == "" ? `${$$result.title = `<title>${escape($routes.home.title)}  </title>`, ""}` : `${$page.routeId == key ? `${$$result.title = `<title>${escape($routes[key].title)} </title>`, ""}` : ``}`}`;
  })}`, ""}`;
});
const IsLoggedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
  $$unsubscribe_isLoggedIn();
  return ``;
});
const Navitem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isDarkMode;
  let $$unsubscribe_isXs;
  let $page, $$unsubscribe_page;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => value);
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
    for (let key in routes2) {
      let condition = key == $page.routeId || $page.routeId.length == 0 && key == "home";
      routes2[key].isCurrent = condition;
    }
  }
  $$unsubscribe_isDarkMode();
  $$unsubscribe_isXs();
  $$unsubscribe_page();
  return `<a${add_attribute("href", href, 0)} class="${escape(bool && `${btnColor} sm:border-b-1 sm:rounded sm:px-3 sm:py-1`, true) + " flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent " + escape(`${btnColorHover}`, true) + " sm:hover:rounded sm:hover:py-1 sm:hover:px-3 duration-300"}">${escape(content)}</a>`;
});
const hamburgerWidth = 35;
const hamburgerPattyHeight = 2;
const hamburgerColor = "bg-red-500";
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
const LightDarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  {
    console.log("$isDarkMode", $isDarkMode);
  }
  $$unsubscribe_isDarkMode();
  return `<button>${$isDarkMode ? `\u263E` : `\u263C`}</button>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let logoTextColor;
  let $instDeltaY, $$unsubscribe_instDeltaY;
  let $scrollY, $$unsubscribe_scrollY;
  let $routes, $$unsubscribe_routes;
  let $fractionScroll, $$unsubscribe_fractionScroll;
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  let $isXs, $$unsubscribe_isXs;
  let $scaleRocket, $$unsubscribe_scaleRocket;
  $$unsubscribe_instDeltaY = subscribe(instDeltaY, (value) => $instDeltaY = value);
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  $$unsubscribe_fractionScroll = subscribe(fractionScroll, (value) => $fractionScroll = value);
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_isXs = subscribe(isXs, (value) => $isXs = value);
  let scaleRocket = spring(2, { stiffness: 0.1, damping: 0.25 });
  $$unsubscribe_scaleRocket = subscribe(scaleRocket, (value) => $scaleRocket = value);
  let hueRocket = 0;
  let { mobileHamburgerClosed } = $$props;
  let mobileOpen;
  let unique;
  let hamburgerBtn;
  let jankytown = "";
  let btnColor = "sm:bg-red-300 ";
  let btnColorHover = "sm:hover:bg-red-300";
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
    {
      {
        if ($scrollY < 250)
          jankytown = "sm:sticky sm:top-0";
        if ($scrollY > 250 && $instDeltaY > 0)
          jankytown = "sm:sticky sm:-top-20";
        if ($scrollY > 250 && $instDeltaY < 0)
          jankytown = "sm:sticky sm:top-0";
      }
    }
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


<logo-and-nav class="${escape(jankytown, true) + " backdrop-blur-3xl transition-all duration-300 sm:right-0 flex sm:justify-between items-center justify-center sm:w-full h-[85vh] sm:h-16 sm:inline-flex sm:pr-10 sm:pl-10 " + escape(!mobileOpen && "hidden", true)}"><div class="${"translate-y-[0.2rem] translate-x-3 hidden sm:block text-xl font-Poppins font-semibold pl-[5%] sm:pr-20 sm:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent"}"${add_styles({ "color": logoTextColor })}>THINKSOLVE
    </div>


    
    <nav><ul class="${"flex flex-col sm:flex-row text-3xl sm:text-lg sm:items-center text-center"}">${each(Object.keys($routes), (KEY) => {
      return `<li class="${"py-3 sm:p-1"}"${add_attribute("style", KEY == "login" && $isLoggedIn && `transform:scale(${$scaleRocket}); filter:hue-rotate(${hueRocket}turn)`, 0)}>${validate_component(Navitem, "Navitem").$$render(
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
            <li class="${"px-3 "}">${validate_component(LightDarkMode, "LightDarkMode").$$render($$result, {}, {}, {})}</li></ul></nav></logo-and-nav>`;
  } while (!$$settled);
  $$unsubscribe_instDeltaY();
  $$unsubscribe_scrollY();
  $$unsubscribe_routes();
  $$unsubscribe_fractionScroll();
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_isXs();
  $$unsubscribe_scaleRocket();
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_scrollY;
  let $$unsubscribe_innerWidth;
  let $$unsubscribe_windowInnerHeight;
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => value);
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => value);
  $$unsubscribe_windowInnerHeight = subscribe(windowInnerHeight, (value) => value);
  let mobileHamburgerClosed = true;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `
${validate_component(IsLoggedIn, "IsLoggedIn").$$render($$result, {}, {}, {})}
${validate_component(PageTitle, "PageTitle").$$render($$result, {}, {}, {})}




${validate_component(Navbar, "Navbar").$$render(
      $$result,
      { mobileHamburgerClosed },
      {
        mobileHamburgerClosed: ($$value) => {
          mobileHamburgerClosed = $$value;
          $$settled = false;
        }
      },
      {}
    )}

<div class="${"sm:block " + escape(mobileHamburgerClosed && "hidden", true) + " h-[400vh]"}">${slots.default ? slots.default({}) : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_scrollY();
  $$unsubscribe_innerWidth();
  $$unsubscribe_windowInnerHeight();
  return $$rendered;
});
export {
  Layout as default
};
