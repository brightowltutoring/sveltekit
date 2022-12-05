import { PUBLIC_FIREBASE_apiKey, PUBLIC_FIREBASE_authDomain, PUBLIC_FIREBASE_projectId, PUBLIC_FIREBASE_storageBucket, PUBLIC_FIREBASE_messagingSenderId, PUBLIC_FIREBASE_appId } from "./public.js";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: PUBLIC_FIREBASE_apiKey,
  authDomain: PUBLIC_FIREBASE_authDomain,
  projectId: PUBLIC_FIREBASE_projectId,
  storageBucket: PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: PUBLIC_FIREBASE_messagingSenderId,
  appId: PUBLIC_FIREBASE_appId
};
const app = initializeApp(firebaseConfig);
getAuth(app);
export {
  app as a
};
