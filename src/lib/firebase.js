import * as NV from "$env/static/private";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getFunctions, httpsCallable } from "firebase/functions";
// from "https://www.gstatic.com/firebasejs/9.10.0/firebase-functions.js";

const firebaseConfig = {
  apiKey: NV.FIREBASE_apiKey,
  authDomain: NV.FIREBASE_authDomain,
  projectId: NV.FIREBASE_projectId,
  storageBucket: NV.FIREBASE_storageBucket,
  messagingSenderId: NV.FIREBASE_messagingSenderId,
  appId: NV.FIREBASE_appId,
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
