// this is not working as I expect

import * as NV from "$env/static/private";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getFunctions, httpsCallable } from "firebase/functions";
// from "https://www.gstatic.com/firebasejs/9.10.0/firebase-functions.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDSux33iJAZsssEo2Za7As_eGGEThwXQZo",
//   authDomain: "thinksolve-app.firebaseapp.com",
//   projectId: "thinksolve-app",
//   storageBucket: "thinksolve-app.appspot.com",
//   messagingSenderId: "490986955869",
//   appId: "1:490986955869:web:433c6f7b31865fed5099b4",
// };
const firebaseConfig = {
  apiKey: NV.SERVER_FIREBASE_apiKey,
  authDomain: NV.SERVER_FIREBASE_authDomain,
  projectId: NV.SERVER_FIREBASE_projectId,
  storageBucket: NV.SERVER_FIREBASE_storageBucket,
  messagingSenderId: NV.SERVER_FIREBASE_messagingSenderId,
  appId: NV.SERVER_FIREBASE_appId,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const functions = getFunctions(app);

// firebase cloud function for secure stripe checkouts
export const stripeSessionIdGCF = httpsCallable(
  functions,
  "stripeSessionIdGCF"
);
