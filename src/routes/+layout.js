// // export function load({routeId}) {
// //     console.log("only updates on client refresh, not when sveltekit takes over the routing. Routeid:",routeId);
// // }

// // TODO: only updates on client refresh, not when sveltekit takes over the routing



// import * as NV from '$env/static/private'
// const firebaseConfig = {
//     apiKey:            NV.FIREBASE_apiKey,
//     authDomain:        NV.FIREBASE_authDomain,
//     projectId:         NV.FIREBASE_projectId,
//     storageBucket:     NV.FIREBASE_storageBucket,
//     messagingSenderId: NV.FIREBASE_messagingSenderId,
//     appId:             NV.FIREBASE_appId
// }
// // eslint-disable-next-line no-unused-vars
// import { initializeApp, getApps } from "Firebase/app"
// // eslint-disable-next-line no-unused-vars
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
// // eslint-disable-next-line no-unused-vars
// import {  getAuth, 
//     // eslint-disable-next-line no-unused-vars
//     onAuthStateChanged, GoogleAuthProvider, signOut, signInWithPopup, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, 
// } from "firebase/auth"

// const app = initializeApp(firebaseConfig)
// // eslint-disable-next-line no-unused-vars
// const db = getFirestore(app)
// // eslint-disable-next-line no-unused-vars
// const auth = getAuth(app)