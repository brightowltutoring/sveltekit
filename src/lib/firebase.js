import * as NV from "$env/static/public";

import { initializeApp } from "firebase/app";
// const { initializeApp } = await import("firebase/app");
import { getAuth } from "firebase/auth";
// const { getAuth } = await import("firebase/auth");

import { getFirestore } from "firebase/firestore/lite";
// const { getFirestore } = await import("firebase/firestore/lite");

import { getFunctions, httpsCallable } from "firebase/functions";
// const { getFunctions, httpsCallable } = await import("firebase/functions");
// from "https://www.gstatic.com/firebasejs/9.10.0/firebase-functions.js";

const firebaseConfig = {
  apiKey: NV.PUBLIC_FIREBASE_apiKey,
  authDomain: NV.PUBLIC_FIREBASE_authDomain,
  projectId: NV.PUBLIC_FIREBASE_projectId,
  storageBucket: NV.PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: NV.PUBLIC_FIREBASE_messagingSenderId,
  appId: NV.PUBLIC_FIREBASE_appId,
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
