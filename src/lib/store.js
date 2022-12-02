// import IconHome from "$lib/Icons/IconHome.svelte";
import IconLogin from "$lib/Icons/NavIcons/IconLogin.svelte";
import IconPlans from "$lib/Icons/NavIcons/IconPlans.svelte";
import IconHomework from "$lib/Icons/NavIcons/IconHomework.svelte";
import IconClassroom from "$lib/Icons/NavIcons/IconClassroom.svelte";

import { writable, derived, get } from "svelte/store";

// const createWritableStore = (key, startValue) => {
//   const { subscribe, set } = writable(startValue);

//   return {
//     subscribe,
//     set,
//     useLocalStorage: () => {
//       const json = localStorage.getItem(key);
//       if (json) {
//         set(JSON.parse(json));
//       }

//       subscribe((current) => {
//         localStorage.setItem(key, JSON.stringify(current));
//       });
//     },
//   };
// };

// export const count = createWritableStore("count", 0);

export const isLoggedIn = writable(false);
export const lastScrollY = writable(0);
export const scrollY = writable(0);

// This is equivalent to "setTimeout(()=>{ $startScrollY = $scrollY },200)"
// if placed inside +layout.svelte .. under an onscroll event attached to the window

// Conceptually this is like an inst. change, since it sets back to zero
// however the time step is 200 not infinitesimal

// TODO: this new way of calculating 'instDeltaY' has the advantage of not dropping to 0 .. and thus can be used for 'was scrolling down/up' logic. For some reason this code, with the same 50ms delay, updates 'instDeltaY' less frequently than the older method ... which is actually better for performance (the updating is still smooth)
let delayedScrollY = get(scrollY);
export const instDeltaY = derived(scrollY, ($scrollY) => {
  setTimeout(() => {
    delayedScrollY = get(scrollY);
  }, 50);

  return $scrollY - delayedScrollY;
});

// TODO: old way of calculating instDeltaY  ...
// export const startScrollY = derived(scrollY, ($scrollY, set) => {
//   // set both values initially equal
//   set($scrollY);

//   // ... then set it as the old scrollY value
//   setTimeout(() => {
//     set($scrollY);
//   }, 50);
// });
// export const instDeltaY = derived(
//   [scrollY, startScrollY],
//   ([$scrollY, $startScrollY]) => {
//     return $scrollY - $startScrollY;
//   }
// );
// TODO: old way of calculating instDeltaY  ...

// TODO: remove?
// export const scrollHeight = writable(0);
// export const scrollYMax = writable(0);
// export const fractionScroll = derived(
//   [scrollY, scrollYMax],
//   ([$scrollY, $scrollYMax]) => {
//     return 1 - $scrollY / $scrollYMax;
//   }
// );
// export const windowInnerHeight = writable(0);
// TODO: remove?

export const innerWidth = writable(0);
export const lessThan768 = derived(
  innerWidth,
  ($innerWidth) => $innerWidth < 768
);

// the code for 'setInnerWidthViaMatchMedia()' is considerably more than doing '<svelte:window bind:innerWidth={$innerWidth} />' however the latter updates $innerWidth — and all dependent code — continuously on screen resize ...
export function setInnerWidthViaMatchMedia(pixelWidth = 768) {
  // return browser && window.matchMedia("(max-width: 768px)").matches;

  // browser is needed if this function isn't set in the onMount
  // if (browser) {
  innerWidth.set(window.innerWidth);
  console.log(`LANDED at ${get(innerWidth)}`);

  const mediaQueryList = window.matchMedia(`(max-width: ${pixelWidth}px)`);
  //Note: can use '$innerWidth = window.innerWidth' when inside .svelte file, instead
  mediaQueryList.addEventListener("change", (event) => {
    innerWidth.set(window.innerWidth);
    event.matches
      ? console.log(`UNDER ${pixelWidth}px 🙈`)
      : console.log(`OVER ${pixelWidth}px 😄`);
  });
  // }
}

// these nav items only since theyre modals, rather than actual routes
export const navLoginClicked = writable(false);
export const navHomeworkClicked = writable(false);
export const navAppClicked = writable(false);

export function clearNavModals() {
  navLoginClicked.set(false);
  navHomeworkClicked.set(false);
  navAppClicked.set(false);
}

export const routes = writable({
  home: {
    name: "Home",
    href: "/",
    title: "Thinksolve.io 💫",
    isCurrent: false,
    // icon: IconHome,
  },
  login: {
    name: "Login",
    href: "/login",
    title: "Login 🚀",
    isCurrent: false,
    icon: IconLogin,
  },
  plans: {
    name: "Plans",
    href: "/plans",
    title: "Plans 💡",
    isCurrent: false,
    icon: IconPlans,
  },

  homework: {
    name: "Homework",
    href: "/homework",
    title: "Homework 📚",
    isCurrent: false,
    icon: IconHomework,
  },
  classroom: {
    name: "Classroom",
    href: "/classroom",
    title: "Classroom 🍎",
    isCurrent: false,
    icon: IconClassroom,
  },
  // classroomA: {
  //   name: "ClassroomA",
  //   href: "/classroomA",
  //   title: "ClassroomA 🖥",
  //   isCurrent: false,
  // },
  stripe: {
    name: "Stripe",
    href: "/stripe",
    title: "Stripe 💰",
    isCurrent: false,
  },
  physics: {
    name: "physics",
    href: "/physics",
    title: "physics 🚀",
    isCurrent: false,
  },
  math: {
    name: "math",
    href: "/math",
    title: "math",
    isCurrent: false,
  },
  // calcom: {
  //   name: "calcom",
  //   href: "/calcom",
  //   title: "calcom",
  //   isCurrent: false,
  // },
  // mathjax: {
  //   name: "mathjax",
  //   href: "/mathjax",
  //   title: "mathjax",
  //   isCurrent: false,
  // },
  // katex: {
  //   name: "katex",
  //   href: "/katex",
  //   title: "katex",
  //   isCurrent: false,
  // },
});

// export const isDarkMode = writable(true);
export const isDarkMode = writable(false);

export const light = "#f7f7f7";
export const light_darkened = "rgb(242,247,250)";
export const light_darkened_half = "pink";
export const dark = "rgb(37,27,47)";
// export const dark_lightened =  'rgb(39,35,53)'
export const dark_lightened = "rgb(38, 35, 51)";
export const dark_lightened_half = "#8f86b8";

export const elementColor = derived(isDarkMode, ($isDarkMode, set) => {
  $isDarkMode ? set(dark_lightened) : set(light_darkened);
});
