<!-- <script>
    export let data
    let { app, db, auth} = data
</script> -->
<!-- <script>
    import * as NV from '$env/static/private'
    const firebaseConfig = {
        apiKey:            NV.FIREBASE_apiKey,
        authDomain:        NV.FIREBASE_authDomain,
        projectId:         NV.FIREBASE_projectId,
        storageBucket:     NV.FIREBASE_storageBucket,
        messagingSenderId: NV.FIREBASE_messagingSenderId,
        appId:             NV.FIREBASE_appId
    }

    import { initializeApp, getApps } from "Firebase/app"

    import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

    import {  getAuth, 

        onAuthStateChanged, GoogleAuthProvider, signOut, signInWithPopup, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, 
    } from "firebase/auth"

    const app = initializeApp(firebaseConfig)

    const db = getFirestore(app)

    const auth = getAuth(app)
</script> -->

<slot/>