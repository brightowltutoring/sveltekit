import { F as FIREBASE_apiKey, a as FIREBASE_authDomain, b as FIREBASE_projectId, c as FIREBASE_storageBucket, d as FIREBASE_messagingSenderId, e as FIREBASE_appId } from "./private.js";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getFunctions, httpsCallable } from "firebase/functions";
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
const functions = getFunctions(app);
httpsCallable(
  functions,
  "createStripeCheckout"
);
