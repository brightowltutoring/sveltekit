import { PUBLIC_FIREBASE_apiKey, PUBLIC_FIREBASE_authDomain, PUBLIC_FIREBASE_projectId, PUBLIC_FIREBASE_storageBucket, PUBLIC_FIREBASE_messagingSenderId, PUBLIC_FIREBASE_appId } from "./public.js";
import { initializeApp } from "firebase/app";
import { initializeAuth, indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";
const firebaseConfig = {
  apiKey: PUBLIC_FIREBASE_apiKey,
  authDomain: PUBLIC_FIREBASE_authDomain,
  projectId: PUBLIC_FIREBASE_projectId,
  storageBucket: PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: PUBLIC_FIREBASE_messagingSenderId,
  appId: PUBLIC_FIREBASE_appId
};
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: [
    indexedDBLocalPersistence,
    browserLocalPersistence,
    browserSessionPersistence
  ]
});
export {
  app,
  auth
};
