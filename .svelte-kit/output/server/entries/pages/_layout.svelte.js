import { c as create_ssr_component, a as subscribe, e as each, d as escape, f as add_attribute, g as now, l as loop, h as set_store_value, v as validate_component, j as add_styles } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { r as routes, i as isLoggedIn, a as isXs, l as lastScrollY, s as scrollY, f as fractionScroll, b as scrollYMax, c as instDeltaY, d as innerWidth, w as windowInnerHeight } from "../../chunks/store.js";
import "../../chunks/firebase.js";
import "firebase/auth";
import { w as writable } from "../../chunks/index2.js";
import "firebase/app";
import "firebase/firestore/lite";
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
const app = "";
const Navitem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      for (let key in routes2) {
        if ($page.routeId == key || $page.routeId.length == 0 && key == "home") {
          routes2[key].isCurrent = true;
        } else
          routes2[key].isCurrent = false;
      }
    }
  }
  $$unsubscribe_isXs();
  $$unsubscribe_page();
  return `<a${add_attribute("href", href, 0)} class="${escape(bool && `${btnColor} sm:border-b-1 sm:text-white  sm:rounded sm:px-3 sm:py-1`, true) + " flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent " + escape(`${btnColorHover}`, true) + " sm:hover:text-white sm:hover:rounded sm:hover:py-1 sm:hover:px-3 duration-300"}">${escape(content)}</a>`;
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
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let logoTextColor;
  let $routes, $$unsubscribe_routes;
  let $scrollY, $$unsubscribe_scrollY;
  let $fractionScroll, $$unsubscribe_fractionScroll;
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  let $isXs, $$unsubscribe_isXs;
  let $scaleRocket, $$unsubscribe_scaleRocket;
  let $scrollYMax, $$unsubscribe_scrollYMax;
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  $$unsubscribe_fractionScroll = subscribe(fractionScroll, (value) => $fractionScroll = value);
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_isXs = subscribe(isXs, (value) => $isXs = value);
  $$unsubscribe_scrollYMax = subscribe(scrollYMax, (value) => $scrollYMax = value);
  let scaleRocket = spring(3, { stiffness: 0.1, damping: 0.25 });
  $$unsubscribe_scaleRocket = subscribe(scaleRocket, (value) => $scaleRocket = value);
  let { mobileHamburgerClosed } = $$props;
  let mobileOpen;
  setInterval(
    () => {
    },
    1e3
  );
  let unique;
  let hamburgerBtn;
  if ($$props.mobileHamburgerClosed === void 0 && $$bindings.mobileHamburgerClosed && mobileHamburgerClosed !== void 0)
    $$bindings.mobileHamburgerClosed(mobileHamburgerClosed);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      scaleRocket.set(1 + 0.3 * Math.sin($scrollY));
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

<navbar class="${"flex justify-between items-center w-1/2 sm:w-full fixed right-10 top-32 sm:right-0 sm:top-0 sm:inline-flex " + escape(!mobileOpen && "hidden", true) + " backdrop-blur-3xl sm:py-5 sm:pr-10 sm:pl-10"}">
    <div class="${"translate-y-[0.2rem] translate-x-3 hidden sm:block text-xl font-Poppins font-semibold pl-[5%] sm:pr-20 sm:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent"}"${add_styles({ "color": logoTextColor })}>THINKSOLVE
    </div>

 
    <nav class="${"sm:px-4"}"><ul class="${"flex flex-col sm:flex-row text-3xl sm:text-lg sm:h-[60px] sm:items-center "}"${add_styles({ "color": $isXs ? "black" : logoTextColor })}>${each(Object.keys($routes), (KEY) => {
      return `<li class="${"py-3 sm:p-1"}"${add_attribute("style", KEY == "login" && $isLoggedIn && `transform:scale(${$scaleRocket}); filter:hue-rotate(${$scrollY / $scrollYMax * 10}turn)`, 0)}>
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
  $$unsubscribe_scrollY();
  $$unsubscribe_fractionScroll();
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_isXs();
  $$unsubscribe_scaleRocket();
  $$unsubscribe_scrollYMax();
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  const hideCondition = (delta) => delta > 10;
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







<div class="${escape(extendedShowCondition && "opacity-100", true) + " " + escape(extendedHideCondition && "opacity-0", true)}">${validate_component(Navbar, "Navbar").$$render(
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




<div class="${"sm:block " + escape(mobileHamburgerClosed && "hidden", true)}">${slots.default ? slots.default({}) : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_instDeltaY();
  $$unsubscribe_scrollYMax();
  $$unsubscribe_scrollY();
  $$unsubscribe_innerWidth();
  $$unsubscribe_windowInnerHeight();
  return $$rendered;
});
export {
  Layout as default
};
