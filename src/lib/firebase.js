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
