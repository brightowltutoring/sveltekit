import { c as create_ssr_component, e as escape, a as subscribe, d as add_attribute, v as validate_component, f as set_store_value, g as getContext, h as now, l as loop, j as each } from "../../chunks/index.js";
import { P as PlansCardObserver } from "../../chunks/PlansCardObserver.js";
import { D as Dropzone_1 } from "../../chunks/Dropzone.js";
import { n as navLoginClicked, i as isLoggedIn, a as isDarkMode, e as elementColor, b as navHomeworkClicked, r as routes, s as scrollY, c as instDeltaY, l as lessThan768, w as windowInnerHeight, d as scrollYMax, f as innerWidth } from "../../chunks/store.js";
import { a as app$1 } from "../../chunks/firebase.js";
import "firebase/auth";
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
<modal-container class="${"fixed w-full h-full flex justify-center items-center z-[50] md:py-4 py-1 md:px-[7%] " + escape(showModal ? `${bgTint}` : "hidden", true)}">${slots.default ? slots.default({}) : ``}</modal-container>`;
});
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const IconGoogle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg height="${"24"}" width="${"24"}" viewBox="${"0 0 210 210"}"><path fill="${"white"}" d="${"M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40\nc-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105\nS0,162.897,0,105z"}"></path></svg>`;
});
const IconEmail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg height="${"24"}" width="${"24"}" viewBox="${"0 0 485 485"}"><path fill="${"white"}" d="${"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5\ns25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485c32.731,0,64.491-6.414,94.397-19.063l-11.688-27.63\nC299.022,449.384,271.194,455,242.5,455C125.327,455,30,359.673,30,242.5S125.327,30,242.5,30S455,125.327,455,242.5\nc0,51.323-31.534,74.699-60.834,74.699c-29.299,0-60.833-23.375-60.833-74.699c0-50.086-40.747-90.833-90.833-90.833\ns-90.833,40.748-90.833,90.833s40.747,90.833,90.833,90.833c29.655,0,56.034-14.286,72.622-36.335\nc4.248,8.577,9.594,16.336,16.04,23.113c16.613,17.468,38.988,27.087,63.004,27.087c24.017,0,46.392-9.62,63.005-27.087\nC475.377,300.97,485,274.132,485,242.5C485,177.726,459.775,116.829,413.974,71.026z M242.5,303.333\nc-33.543,0-60.833-27.29-60.833-60.833s27.29-60.833,60.833-60.833s60.833,27.29,60.833,60.833S276.043,303.333,242.5,303.333z"}"></path></svg>`;
});
const IconTwitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<svg width="${"32px"}" height="${"32px"}" viewBox="${"0 0 32 32"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill="${"white"}" d="${"M16 7.151l3.302-4.036c0 0 5.656 0.12 11.292 2.74-1.443 2.182-4.307 3.25-4.307 3.25-0.193-1.917-1.536-2.385-5.807-2.385l-4.479 25.281-4.51-25.286c-4.24 0-5.583 0.469-5.776 2.385 0 0-2.865-1.057-4.307-3.24 5.635-2.62 11.292-2.74 11.292-2.74l3.302 4.031h-0.005zM16 1.953c4.552-0.042 9.766 0.703 15.104 3.036 0.714-1.292 0.896-1.859 0.896-1.859-5.833-2.313-11.297-3.109-16-3.13-4.703 0.021-10.167 0.813-16 3.13 0 0 0.26 0.703 0.896 1.865 5.339-2.344 10.552-3.083 15.104-3.047z"}"></path></svg>`;
});
const LoginCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shortPing;
  let $navLoginClicked, $$unsubscribe_navLoginClicked;
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  let $elementColor, $$unsubscribe_elementColor;
  $$unsubscribe_navLoginClicked = subscribe(navLoginClicked, (value) => $navLoginClicked = value);
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_elementColor = subscribe(elementColor, (value) => $elementColor = value);
  let emailFieldValue = "";
  let emptyEmailInputAnimated;
  let loggedInEmail;
  let redirectAfterLoginTimeOut;
  let redirectSetInterval;
  function redirectLogic(userRedirectUrl = "/login") {
    let redirectTimeInMS = 3e3;
    let seconds = parseInt(redirectTimeInMS / 1e3);
    redirectSetInterval = setInterval(
      () => {
        if (seconds > 0) {
          seconds += -1;
          document.getElementById("timeLeft").innerHTML = ` ${seconds}`;
        }
      },
      1e3
    );
    redirectAfterLoginTimeOut = setTimeout(
      () => {
        set_store_value(navLoginClicked, $navLoginClicked = false, $navLoginClicked);
        document.getElementById("timeLeft").innerHTML = 3;
        goto(userRedirectUrl);
      },
      redirectTimeInMS
    );
  }
  async function navLoginClickedRedirect(userEmail) {
    let redirectUrlFromLS = localStorage.getItem("redirectUrlFromLS");
    console.log("redirectUrlFromLS", redirectUrlFromLS);
    if (redirectUrlFromLS) {
      redirectLogic(redirectUrlFromLS);
    } else {
      const { getFirestore, collection, getDocs } = await import("firebase/firestore/lite");
      const db = getFirestore(app$1);
      const querySnapshot = await getDocs(collection(db, "email"));
      const querySnapshotSize = querySnapshot.size;
      const docs = querySnapshot.docs;
      for (const i in docs) {
        const doc = docs[i];
        if (userEmail === doc.id) {
          localStorage.setItem("redirectUrlFromLS", doc.data().redirectUrl);
          redirectUrlFromLS = localStorage.getItem("redirectUrlFromLS");
          redirectLogic(redirectUrlFromLS);
          return;
        }
        if (parseInt(i) === querySnapshotSize - 1) {
          localStorage.setItem("redirectUrlFromLS", "/");
          redirectUrlFromLS = localStorage.getItem("redirectUrlFromLS");
          redirectLogic(redirectUrlFromLS);
        }
      }
    }
  }
  shortPing = emptyEmailInputAnimated;
  {
    if (!$navLoginClicked) {
      clearInterval(redirectSetInterval);
      clearTimeout(redirectAfterLoginTimeOut);
    }
  }
  {
    if ($navLoginClicked && $isLoggedIn) {
      navLoginClickedRedirect(loggedInEmail);
    }
  }
  $$unsubscribe_navLoginClicked();
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_isDarkMode();
  $$unsubscribe_elementColor();
  return `




<card class="${"relative hover:scale-[1.01] font-Poppins shadow-md " + escape($isDarkMode ? "hover:shadow-xl " : "hover:shadow-lg", true) + " rounded-2xl hover:rounded-3xl mx-auto py-5 px-3 sm:p-7 text-center duration-300 m-1 sm:w-[500px]"}"${add_attribute("style", `background:${$elementColor}`, 0)}><close-button${add_attribute("style", `border-color:${$elementColor}`, 0)} class="${"absolute hover:scale-125 duration-300 rounded-full p-4 -top-2 -right-2 flex justify-center items-center border " + escape($isDarkMode ? "bg-[#8f86b8] " : "bg-red-200", true)}"><div class="${"absolute w-1/2 h-[2px] rounded rotate-45"}"${add_attribute("style", `background:${$elementColor}`, 0)}></div>
    <div class="${"absolute w-1/2 h-[2px] rounded -rotate-45"}"${add_attribute("style", `background:${$elementColor}`, 0)}></div></close-button>

  <div class="${"logInDiv p-5 text-lg sm:text-xl font-bold"}"><signin-button id="${"passwordlessLoginBtn"}" class="${"group bg-red-400 hover:scale-[1.01] hover:shadow-md duration-200 rounded-md p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-80" : "group-hover:bg-opacity-80",
    true
  ) + " text-white flex justify-center items-center gap-5"}"><span class="${"group-hover:scale-[1.15] duration-500"}">${validate_component(IconEmail, "IconEmail").$$render($$result, {}, {}, {})}</span>
      <span>Get Magic Link</span></signin-button>

    <input class="${"text-center p-3 mt-3 w-full " + escape(shortPing, true) + " focus:outline-none"}" id="${"emailField"}" type="${"email"}" placeholder="${"email"}"${add_attribute("value", emailFieldValue, 0)}>

    <span id="${"emailStatusMessage"}"></span>

    <p class="${"py-5"}">or</p>

    <signin-button class="${"group mb-6 bg-[#4285f4] hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-90" : "group-hover:bg-opacity-90",
    true
  ) + " text-white flex justify-center items-center gap-5"}"><span class="${"group-hover:scale-[1.15] duration-500"}">${validate_component(IconGoogle, "IconGoogle").$$render($$result, {}, {}, {})}</span>
      <span>Sign-in with Google</span></signin-button>

    <signin-button class="${"group bg-[#1d9bf0] hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-90" : "group-hover:bg-opacity-90",
    true
  ) + " text-white flex justify-center items-center gap-5"}"><span class="${"group-hover:scale-[1.15] duration-500"}">${validate_component(IconTwitter, "IconTwitter").$$render($$result, {}, {}, {})}</span>
      <span>Sign-in with Twitter</span></signin-button></div>

  <div class="${"logOutDiv"}" style="${"display:none"}"><p id="${"loginWelcomeText"}">Welcome User</p>
    <div id="${"redirectMessage"}">Redirecting to your page in
      <div style="${"font-size: 30px;"}" id="${"timeLeft"}">\u230A\u03C0\u230B</div></div>

    <button id="${"logoutBtn"}">Logout</button></div></card>`;
});
const IconSun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg aria-label="${"Sun"}" id="${"lightIcon"}" height="${"24"}" width="${"24"}" viewBox="${"0 0 182 182"}" style="${"transform: scale(1);"}"><path fill="${"rgb(247,247,247)"}" d="${"M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"}"></path></svg>`;
});
const IconMoon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg aria-label="${"Moon"}" id="${"darkIcon"}" height="${"24"}" width="${"24"}" style="${"transform: scale(1);"}" data-metatip="${"true"}"><path d="${"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"}"></path></svg>`;
});
const LightDarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_isDarkMode();
  return `<button>${$isDarkMode ? `${validate_component(IconSun, "IconSun").$$render($$result, {}, {}, {})}` : `${validate_component(IconMoon, "IconMoon").$$render($$result, {}, {}, {})}`}</button>`;
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
  let $page, $$unsubscribe_page;
  let $$unsubscribe_navHomeworkClicked;
  let $$unsubscribe_navLoginClicked;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navHomeworkClicked = subscribe(navHomeworkClicked, (value) => value);
  $$unsubscribe_navLoginClicked = subscribe(navLoginClicked, (value) => value);
  let { href, content, bool, btnColor, btnColorHover, routes: routes2 } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.bool === void 0 && $$bindings.bool && bool !== void 0)
    $$bindings.bool(bool);
  if ($$props.btnColor === void 0 && $$bindings.btnColor && btnColor !== void 0)
    $$bindings.btnColor(btnColor);
  if ($$props.btnColorHover === void 0 && $$bindings.btnColorHover && btnColorHover !== void 0)
    $$bindings.btnColorHover(btnColorHover);
  if ($$props.routes === void 0 && $$bindings.routes && routes2 !== void 0)
    $$bindings.routes(routes2);
  {
    for (let key in routes2) {
      routes2[key].isCurrent = routes2[key].href === $page.url.pathname;
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_navHomeworkClicked();
  $$unsubscribe_navLoginClicked();
  return `
  
  <a data-sveltekit-prefetch class="${"flex justify-center px-2 mx-1 font-Nunito font-thin text-2xl md:text-xl " + escape(`${btnColorHover}`, true) + " hover:rounded hover:py-1 hover:p-3 duration-300 hover:shadow-lg " + escape(bool && `${btnColor} border-b-1 rounded px-3 py-1`, true)}"${add_attribute("href", href, 0)}>${escape(content)}</a>`;
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
  let $routes, $$unsubscribe_routes;
  let $$unsubscribe_navHomeworkClicked;
  let $$unsubscribe_navLoginClicked;
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  let $scrollY, $$unsubscribe_scrollY;
  let $scaleRocket, $$unsubscribe_scaleRocket;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  $$unsubscribe_navHomeworkClicked = subscribe(navHomeworkClicked, (value) => value);
  $$unsubscribe_navLoginClicked = subscribe(navLoginClicked, (value) => value);
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  let scaleRocket = spring(1, { stiffness: 0.1, damping: 0.25 });
  $$unsubscribe_scaleRocket = subscribe(scaleRocket, (value) => $scaleRocket = value);
  let hueRocket = 0;
  let btnColor = "sm:bg-red-300 rounded";
  let btnColorHover = "hover:bg-red-300 ";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if ($isLoggedIn) {
        hueRocket = $isDarkMode ? 0.75 : 0;
        scaleRocket.set(1 + 0.5 * Math.sin($scrollY));
      }
    }
    {
      $isLoggedIn ? set_store_value(routes, $routes.login.name = "\u{1F680}", $routes) : set_store_value(routes, $routes.login.name = "Login", $routes);
    }
    bgGradientColor = `bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] ${$isDarkMode ? "to-[rgb(37,35,91)]" : "to-red-100"}`;
    $$rendered = `<logo-and-navbar class="${"flex items-center justify-center md:justify-between gap-x-24"}"><div class="${"md:translate-y-[0.5rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent"}">THINKSOLVE
    </div>

  <nav class="${"md:ml-24 md:p-1 p-3 " + escape(bgGradientColor, true) + " rounded-md md:rounded-xl hideScrollBar overflow-auto"}"><ul class="${"flex flex-row text-xl items-center"}">
        ${each(Object.keys($routes).slice(0, 5), (KEY) => {
      return `<li${add_attribute("style", KEY == "login" && $isLoggedIn && `transform:scale(${$scaleRocket}); filter:hue-rotate(${hueRocket}turn)`, 0)}>${validate_component(Navitem, "Navitem").$$render(
        $$result,
        {
          href: $routes[KEY].href,
          content: $routes[KEY].name,
          bool: $routes[KEY].isCurrent,
          routes: $routes,
          btnColor,
          btnColorHover
        },
        {
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

        <li class="${"px-3 translate-y-1"}">${validate_component(LightDarkMode, "LightDarkMode").$$render($$result, {}, {}, {})}</li></ul></nav></logo-and-navbar>`;
  } while (!$$settled);
  $$unsubscribe_isDarkMode();
  $$unsubscribe_routes();
  $$unsubscribe_navHomeworkClicked();
  $$unsubscribe_navLoginClicked();
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_scrollY();
  $$unsubscribe_scaleRocket();
  return $$rendered;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex justify-center items-center "}"><span class="${"my-20 text-xs text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-pink-600"}">Need help? Contact thinksolve.io[at]gmail.com
  </span></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $instDeltaY, $$unsubscribe_instDeltaY;
  let $scrollY, $$unsubscribe_scrollY;
  let $lessThan768, $$unsubscribe_lessThan768;
  let $$unsubscribe_windowInnerHeight;
  let $$unsubscribe_scrollYMax;
  let $routes, $$unsubscribe_routes;
  let $page, $$unsubscribe_page;
  let $$unsubscribe_innerWidth;
  let $navLoginClicked, $$unsubscribe_navLoginClicked;
  let $navHomeworkClicked, $$unsubscribe_navHomeworkClicked;
  $$unsubscribe_instDeltaY = subscribe(instDeltaY, (value) => $instDeltaY = value);
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  $$unsubscribe_lessThan768 = subscribe(lessThan768, (value) => $lessThan768 = value);
  $$unsubscribe_windowInnerHeight = subscribe(windowInnerHeight, (value) => value);
  $$unsubscribe_scrollYMax = subscribe(scrollYMax, (value) => value);
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => value);
  $$unsubscribe_navLoginClicked = subscribe(navLoginClicked, (value) => $navLoginClicked = value);
  $$unsubscribe_navHomeworkClicked = subscribe(navHomeworkClicked, (value) => $navHomeworkClicked = value);
  let jankytown;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (!$lessThan768) {
        if ($scrollY == 0)
          jankytown = "top-0";
        if ($scrollY > 10 && $scrollY < 800 && $instDeltaY > 0)
          jankytown = "top-0 backdrop-blur-3xl ";
        if ($scrollY > 800 && $instDeltaY > 10)
          jankytown = "-top-20 backdrop-blur-3xl duration-200";
        if ($instDeltaY < -100)
          jankytown = "top-0 backdrop-blur-3xl duration-700";
      }
    }
    {
      if ($lessThan768) {
        if ($scrollY == 0) {
          jankytown = "bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl ";
        }
        if ($scrollY > 10 && $scrollY < 400 && $instDeltaY > 0)
          jankytown = "bottom-0 backdrop-blur-3xl ";
        if ($scrollY > 400 && $instDeltaY > 10)
          jankytown = "-bottom-20 backdrop-blur-3xl duration-200";
        if ($instDeltaY < -30)
          jankytown = "bottom-0 backdrop-blur-3xl duration-700";
      }
    }
    $$rendered = `${validate_component(PlansCardObserver, "PlansCardObserver").$$render($$result, {}, {}, {})}

${$$result.head += `<!-- HEAD_svelte-y3e22o_START -->${each(Object.keys($routes), (key) => {
      return `${$page.routeId == "/" && key == "home" ? `${$$result.title = `<title>${escape($routes.home.title)}</title>`, ""}
      <meta name="${"description"}" content="${"Math and Physics Tutoring for the Modern Age."}">
      <meta og:url="${"https://thinksolve.io/"}">
      ` : `${$page.routeId == `/${key}` ? `${$$result.title = `<title>${escape($routes[key].title)}</title>`, ""}` : ``}`}`;
    })}<!-- HEAD_svelte-y3e22o_END -->`, ""}




<main>${validate_component(Modal, "Modal").$$render(
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
          return `${validate_component(Dropzone_1, "Dropzone").$$render(
            $$result,
            {
              uniqueId: "broccoli",
              text: "\u{1F525}",
              textSizeTW: "text-6xl",
              dimensionsTW: "w-[80vw] h-[85vh]",
              brightnessTW: "brightness-95"
            },
            {},
            {}
          )}`;
        }
      }
    )}

  

  
  <div class="${"md:py-4 py-1 md:px-[7%] z-50 fixed " + escape(jankytown, true) + " ease-in-out overflow-x-auto overflow-y-hidden w-full"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div>

  
  <div class="${"px-[7%] pt-32 md:block"}">${slots.default ? slots.default({}) : ``}
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>

  
  </main>`;
  } while (!$$settled);
  $$unsubscribe_instDeltaY();
  $$unsubscribe_scrollY();
  $$unsubscribe_lessThan768();
  $$unsubscribe_windowInnerHeight();
  $$unsubscribe_scrollYMax();
  $$unsubscribe_routes();
  $$unsubscribe_page();
  $$unsubscribe_innerWidth();
  $$unsubscribe_navLoginClicked();
  $$unsubscribe_navHomeworkClicked();
  return $$rendered;
});
export {
  Layout as default
};
