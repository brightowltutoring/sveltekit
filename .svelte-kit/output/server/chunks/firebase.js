import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
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
const auth = getAuth(app);
getFirestore(app);
export {
  auth as a
};
