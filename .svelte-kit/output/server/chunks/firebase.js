import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const PUBLIC_FIREBASE_apiKey = "AIzaSyDSux33iJAZsssEo2Za7As_eGGEThwXQZo";
const PUBLIC_FIREBASE_authDomain = "thinksolve-app.firebaseapp.com";
const PUBLIC_FIREBASE_projectId = "thinksolve-app";
const PUBLIC_FIREBASE_storageBucket = "thinksolve-app.appspot.com";
const PUBLIC_FIREBASE_messagingSenderId = "490986955869";
const PUBLIC_FIREBASE_appId = "1:490986955869:web:433c6f7b31865fed5099b4";
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
