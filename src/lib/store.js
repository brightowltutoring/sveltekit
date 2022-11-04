import { writable, derived } from "svelte/store";
import { quintOut, elasticOut } from "svelte/easing";
// import { browser } from "$app/env";

const createWritableStore = (key, startValue) => {
  const { subscribe, set } = writable(startValue);

  return {
    subscribe,
    set,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(JSON.parse(json));
      }

      subscribe((current) => {
        localStorage.setItem(key, JSON.stringify(current));
      });
    },
  };
};

export const count = createWritableStore("count", 0);

// import { slide, fade, scale, fly, blur } from 'svelte/transition';

// export function moduloScale(node, {easing = elasticOut, duration = 1000}) {

//   return {
//     easing,
//     duration,
//     css: (t,u) =>
//     ` filter: hue-rotate(${10*u}turn) blur(${t*4}px);
//     `
//   }
// }

export function customEase(t) {
  // supercon function
  // let a = 0.344
  // let b = 1.4
  // let a = 1
  // let b = 2.7
  // return b*Math.exp(-a/t)

  // curtain effect created on: https://www.desmos.com/calculator/kr2w0zv092
  // return 2*Math.tanh(t)*Math.sin(8*t)

  let u = t;
  return (1 / 8) * (8 * u) * Math.sin(8 * u); // less dramatic takeoff

  // ... i think this reproduces sineOut svelte easing
  // let τ = 4
  // return Math.sin( (2 * Math.PI / τ ) * t );
  // with period of 4, goes from 0 to 1 when t∈[0,1]

  // step function
  // if (t < 0.3) return 0;
  // if (t < 0.6) return 0.3;
  // if (t < 0.9) return 0.6;
  // return 1;
}

function customFade(node, { easing = elasticOut, duration = 3000 }) {
  return {
    easing,
    duration,
    css: (t, u) =>
      ` opacity: ${0.8 * u + t};
        filter: hue-rotate(${0.15 * u}turn) 
                blur(${u}px);
      `,
  };
}

export function slider(
  node,
  { X = 0, Y = -100, easing = quintOut, duration = 300 }
) {
  return {
    X,
    Y,
    easing,
    duration,
    css: (t, u) =>
      ` transform: translate(${X * u}px, ${Y * u}px);
        opacity: ${t};
      `,
  };
}

export const isLoggedIn = writable(false);
export const lastScrollY = writable(0);
export const scrollY = writable(0);

// This is equivalent to "setTimeout(()=>{ $startScrollY = $scrollY },200)"
// if placed inside +layout.svelte .. under an onscroll event attached to the window
export const startScrollY = derived(scrollY, ($scrollY, set) => {
  setTimeout(() => {
    set($scrollY);
  }, 50);
});

// Conceptually this is like an inst. change, since it sets back to zero
// however the time step is 200 not infinitesimal
export const instDeltaY = derived(
  [scrollY, startScrollY],
  ([$scrollY, $startScrollY]) => {
    return $scrollY - $startScrollY;
  }
);

export const scrollHeight = writable(0);
export const scrollYMax = writable(0);
export const fractionScroll = derived(
  [scrollY, scrollYMax],
  ([$scrollY, $scrollYMax]) => {
    return 1 - $scrollY / $scrollYMax;
  }
);

export const windowInnerHeight = writable(0);
export const innerWidth = writable(0);
export const lessThan768 = derived(
  innerWidth,
  ($innerWidth) => $innerWidth < 768
);

// these nav items only since theyre modals, rather than actual routes
export const navLoginClicked = writable(false);
export const navHomeworkClicked = writable(false);

// export const navModals = {
//   login: writable(false),
//   homework: writable(false),
// }

// function oneModalOnly() {

//   for (let key in navModals) {
//     navModals[key] = false;
//   }

// }

// the all important
export const routes = writable({
  home: {
    name: "Home",
    href: "/",
    title: "Thinksolve.io 💫",
    isCurrent: false,
  },
  login: {
    name: "Login",
    href: "/login",
    title: "Login 🚀",
    isCurrent: false,
  },
  plans: {
    name: "Plans",
    href: "/plans",
    title: "Plans 💡",
    isCurrent: false,
  },
  classroom: {
    name: "Classroom",
    href: "/classroom",
    title: "Classroom 🍎",
    isCurrent: false,
  },
  // screenshareA: {
  //   name: "ScreenshareA",
  //   href: "/screenshareA",
  //   title: "ScreenshareA 🖥",
  //   isCurrent: false,
  // },
  homework: {
    name: "Homework",
    href: "/homework",
    title: "Homework 📚",
    isCurrent: false,
  },
  schools: {
    name: "Schools",
    href: "/schools",
    title: "Schools",
    isCurrent: false,
  },
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
// TODO: delete soon; logincard logic no longer requires these to be global
// export const redirectAfterLoginTimeOut = writable("");
// export const redirectSetInterval = writable("");

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
