import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth';

firebase.initializeApp({
  // Add your Firebase configuration here
  apiKey: "AIzaSyClgYloVUIsCsyVZZhZcGA4pGUF8IGzxdM",
  authDomain: "chat-app-ac5c1.firebaseapp.com",
  projectId: "chat-app-ac5c1",
  storageBucket: "chat-app-ac5c1.appspot.com",
  messagingSenderId: "1047112252483",
  appId: "1:1047112252483:web:dc19fe1803024cd021a8f6",
  measurementId: "G-F21YV6GCBB"

});

const auth = firebase.auth();
const firestore=firebase.firestore();

const SignIn = () => {

    const signInWithGoogle=()=>{
        const provider=new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return ( 
        <React.Fragment>

            <button onClick={signInWithGoogle}>Sign in with Google</button>

        </React.Fragment>
     );
}

// function SignOut(){
//     return auth.currentUser && (
//         <button onClick={()=> auth.signOut()}>Sign out</button>
//     )
// }
 
export default SignIn;