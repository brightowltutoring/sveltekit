import { c as create_ssr_component, a as subscribe, e as escape, d as now, l as loop, f as set_store_value, v as validate_component, g as each, h as add_attribute } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { i as isDarkMode, a as isXs, r as redirectAfterLoginTimeOut, b as redirectSetInterval, s as scrollY, c as instDeltaY, l as lastScrollY, d as routes, e as isLoggedIn, w as windowInnerHeight, f as scrollYMax, g as innerWidth } from "../../chunks/store.js";
import { w as writable } from "../../chunks/index2.js";
const app = "";
const Navitem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    for (let key in routes2) {
      let condition = key == $page.routeId || $page.routeId.length == 0 && key == "home";
      routes2[key].isCurrent = condition;
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
const hamburgerWidth = 35;
const hamburgerPattyHeight = 2;
const hamburgerColor = "bg-red-500";
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  $$unsubscribe_isDarkMode();
  return `<button>${$isDarkMode ? `<svg aria-label="${"Sun"}" id="${"lightIcon"}" height="${"24"}" width="${"24"}" viewBox="${"0 0 182 182"}" style="${"transform: scale(1);"}"><path fill="${"rgb(247,247,247)"}" d="${"M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"}"></path></svg>` : `<svg aria-label="${"Moon"}" id="${"darkIcon"}" height="${"24"}" width="${"24"}" style="${"transform: scale(1);"}" data-metatip="${"true"}"><path d="${"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"}"></path></svg>`}</button>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
        if ($scrollY > 250 && $instDeltaY > 0)
          jankytown = "backdrop-blur-md -top-20";
        if ($scrollY > 250 && $instDeltaY < 0)
          jankytown = "backdrop-blur-3xl top-0";
      }
    }
    $$rendered = `

${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-1kb0r8e"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin data-svelte="svelte-1kb0r8e"><link href="${"https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Poppins:wght@100&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-1kb0r8e">${each(Object.keys($routes), (key) => {
      return `${$page.routeId == "" ? `${$$result.title = `<title>${escape($routes.home.title)}  </title>`, ""}` : `${$page.routeId == key ? `${$$result.title = `<title>${escape($routes[key].title)} </title>`, ""}` : ``}`}`;
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

<div class="${"h-[400vh] px-[4%] sm:px-[7%] pt-20 sm:block " + escape(mobileHamburgerClosed && $isXs && "hidden opacity-0", true) + " transition-all duration-500"}">${slots.default ? slots.default({}) : ``}</div>`;
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
export {
  Layout as default
};
