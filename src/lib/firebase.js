import * as NV from '$env/static/private'
const firebaseConfig = {
    apiKey:            NV.FIREBASE_apiKey,
    authDomain:        NV.FIREBASE_authDomain,
    projectId:         NV.FIREBASE_projectId,
    storageBucket:     NV.FIREBASE_storageBucket,
    messagingSenderId: NV.FIREBASE_messagingSenderId,
    appId:             NV.FIREBASE_appId,
}

// const firebaseConfig = {
//     apiKey: "AIzaSyDSux33iJAZsssEo2Za7As_eGGEThwXQZo",
//     authDomain: "thinksolve-app.firebaseapp.com",
//     projectId: "thinksolve-app",
//     storageBucket: "thinksolve-app.appspot.com",
//     messagingSenderId: "490986955869",
//     appId: "1:490986955869:web:433c6f7b31865fed5099b4"
//   };

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore/lite'

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

