import * as NV from '$env/static/private'
const firebaseConfig = {
    apiKey:            NV.FIREBASE_apiKey,
    authDomain:        NV.FIREBASE_authDomain,
    projectId:         NV.FIREBASE_projectId,
    storageBucket:     NV.FIREBASE_storageBucket,
    messagingSenderId: NV.FIREBASE_messagingSenderId,
    appId:             NV.FIREBASE_appId
}

import { initializeApp } from "Firebase/app"
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from "firebase/auth"

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)