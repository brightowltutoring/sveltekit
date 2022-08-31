import { c as create_ssr_component, a as subscribe, d as add_attribute, e as escape, v as validate_component, f as add_styles, g as each } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import "../../chunks/firebase.js";
import "firebase/auth";
import { i as isLoggedIn, a as isXs, l as lastScrollY, s as scrollY, f as fractionScroll, b as instDeltaY, c as scrollYMax, d as innerWidth, w as windowInnerHeight } from "../../chunks/store.js";
import "firebase/app";
import "firebase/firestore/lite";
import "../../chunks/index2.js";
const IsLoggedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
  $$unsubscribe_isLoggedIn();
  return ``;
});
const app = "";
const Navitem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isXs;
  $$unsubscribe_isXs = subscribe(isXs, (value) => value);
  let { href, content, bool, navBar, mobileOpen, btnColor, btnColorHover } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.bool === void 0 && $$bindings.bool && bool !== void 0)
    $$bindings.bool(bool);
  if ($$props.navBar === void 0 && $$bindings.navBar && navBar !== void 0)
    $$bindings.navBar(navBar);
  if ($$props.mobileOpen === void 0 && $$bindings.mobileOpen && mobileOpen !== void 0)
    $$bindings.mobileOpen(mobileOpen);
  if ($$props.btnColor === void 0 && $$bindings.btnColor && btnColor !== void 0)
    $$bindings.btnColor(btnColor);
  if ($$props.btnColorHover === void 0 && $$bindings.btnColorHover && btnColorHover !== void 0)
    $$bindings.btnColorHover(btnColorHover);
  $$unsubscribe_isXs();
  return `

<a${add_attribute("href", href, 0)} class="${escape(bool && `${btnColor} sm:border-b-1 sm:text-white  sm:rounded sm:px-3 sm:py-1`, true) + " flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent " + escape(`${btnColorHover}`, true) + " sm:hover:text-white sm:hover:rounded sm:hover:py-1 sm:hover:px-3 duration-300"}">${escape(content)}</a>











     


    
    `;
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
let allBtnColor = "sm:bg-[rgba(69,140,117,0.8)]";
let allBtnColorHover = "hover:sm:bg-[rgba(69,140,117,0.5)]";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navBar;
  let logoTextColor;
  let $fractionScroll, $$unsubscribe_fractionScroll;
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  let $isXs, $$unsubscribe_isXs;
  $$unsubscribe_fractionScroll = subscribe(fractionScroll, (value) => $fractionScroll = value);
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_isXs = subscribe(isXs, (value) => $isXs = value);
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
    navBar = {
      mobileOpen: false,
      item: [
        {
          name: "Home",
          href: "/",
          isClicked: true,
          btnColor: allBtnColor,
          btnColorHover: allBtnColorHover
        },
        {
          name: "Plans",
          href: "/plans",
          isClicked: false,
          btnColor: allBtnColor,
          btnColorHover: allBtnColorHover
        },
        {
          name: "Etc",
          href: "/etc",
          isClicked: false,
          btnColor: allBtnColor,
          btnColorHover: allBtnColorHover
        },
        {
          name: `${$isLoggedIn ? "\u{1F680}" : "Login"}`,
          href: "/login",
          isClicked: false,
          btnColor: allBtnColor,
          btnColorHover: allBtnColorHover
        }
      ]
    };
    mobileOpen = navBar.mobileOpen;
    mobileHamburgerClosed = navBar.mobileOpen;
    logoTextColor = `hsl(359,100%,${100 * $fractionScroll}%)`;
    $$rendered = `${validate_component(Hamburger, "Hamburger").$$render(
      $$result,
      {
        hamburgerBtn,
        mobileOpen: navBar.mobileOpen,
        unique
      },
      {
        mobileOpen: ($$value) => {
          navBar.mobileOpen = $$value;
          $$settled = false;
        },
        unique: ($$value) => {
          unique = $$value;
          $$settled = false;
        }
      },
      {}
    )}

<navbar class="${"flex justify-between items-center w-1/2 sm:w-full fixed right-10 top-32 sm:right-0 sm:top-0 sm:inline-flex " + escape(!mobileOpen && "hidden", true) + " backdrop-blur-3xl sm:py-5 sm:px-20"}"><div class="${"translate-y-[0.2rem] translate-x-3 hidden sm:block text-xl font-Poppins font-semibold pl-[5%] sm:pr-20 sm:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent"}"${add_styles({ "color": logoTextColor })}>THINKSOLVE
    </div>

    
 
    
    <nav class="${"sm:px-4"}">
        <ul class="${"flex flex-col sm:flex-row text-3xl sm:text-lg sm:h-[60px] sm:items-center "}"${add_styles({ "color": $isXs ? "black" : logoTextColor })}>${each(navBar.item, (el) => {
      return `<li class="${"py-3 sm:p-1"}">${validate_component(Navitem, "Navitem").$$render(
        $$result,
        {
          href: el.href,
          content: el.name,
          navBar,
          btnColor: el.btnColor,
          btnColorHover: el.btnColorHover,
          bool: el.isClicked,
          mobileOpen: navBar.mobileOpen
        },
        {
          bool: ($$value) => {
            el.isClicked = $$value;
            $$settled = false;
          },
          mobileOpen: ($$value) => {
            navBar.mobileOpen = $$value;
            $$settled = false;
          }
        },
        {}
      )}
                
            </li>`;
    })}</ul></nav></navbar>`;
  } while (!$$settled);
  $$unsubscribe_fractionScroll();
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_isXs();
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
  let $page, $$unsubscribe_page;
  $$unsubscribe_instDeltaY = subscribe(instDeltaY, (value) => $instDeltaY = value);
  $$unsubscribe_scrollYMax = subscribe(scrollYMax, (value) => value);
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => value);
  $$unsubscribe_windowInnerHeight = subscribe(windowInnerHeight, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let pageObject = {
    home: "Home \u{1F4AB}",
    plans: "Plans \u{1F525}",
    etc: "Etc \u{1F449}",
    login: "Login \u{1F680}"
  };
  console.log(Object.keys(pageObject));
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

${$$result.head += `${each(Object.keys(pageObject), (key) => {
      return `${key == $page.routeId ? `${$$result.title = `<title>${escape(pageObject[key])} </title>`, ""}` : `${$page.routeId.length == 0 ? `${$$result.title = `<title>${escape(pageObject.home)}  </title>`, ""}` : ``}`}`;
    })}`, ""}







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
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Layout as default
};
