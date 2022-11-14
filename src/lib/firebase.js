import * as NV from "$env/static/public";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getFirestore } from "firebase/firestore/lite";

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
// this is used when website is mounted to persist login state ... maybe import when login clicked instead??

// idea: import getAuth on page load IF visitor as logged in before ... e.g. can set a localstorage variable ("previouslyLoggedIn") inside the logged in logic (not here)
// otherwise: import getAuth only on the first login button click
//  ...this idea is useful for the majority of people who never log in
