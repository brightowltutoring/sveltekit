import { d as derived, w as writable } from "./index2.js";
import "./index.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
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
derived([scrollY, scrollYMax], ([$scrollY, $scrollYMax]) => {
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
const redirectAfterLoginTimeOut = writable("");
const FIREBASE_apiKey = "AIzaSyDSux33iJAZsssEo2Za7As_eGGEThwXQZo";
const FIREBASE_authDomain = "thinksolve-app.firebaseapp.com";
const FIREBASE_projectId = "thinksolve-app";
const FIREBASE_storageBucket = "thinksolve-app.appspot.com";
const FIREBASE_messagingSenderId = "490986955869";
const FIREBASE_appId = "1:490986955869:web:433c6f7b31865fed5099b4";
const firebaseConfig = {
  apiKey: FIREBASE_apiKey,
  authDomain: FIREBASE_authDomain,
  projectId: FIREBASE_projectId,
  storageBucket: FIREBASE_storageBucket,
  messagingSenderId: FIREBASE_messagingSenderId,
  appId: FIREBASE_appId
};
const app = initializeApp(firebaseConfig);
getAuth(app);
getFirestore(app);
export {
  isXs as a,
  instDeltaY as b,
  routes as c,
  isLoggedIn as d,
  scrollYMax as e,
  innerWidth as f,
  isDarkMode as i,
  lastScrollY as l,
  redirectAfterLoginTimeOut as r,
  scrollY as s,
  windowInnerHeight as w
};
