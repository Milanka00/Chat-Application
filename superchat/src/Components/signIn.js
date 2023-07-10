import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth';

import './components.css'
import Type from './type';

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
              <div className='cover d-flex w-100 justify-content-center align-items-center'>
               
                <div className='leftsection w-70 me-5'>
                <h1>Chat Room</h1>
                <Type/>
                </div>

                <div className='rightsection d-flex w-30 ms-5'>
                <button class="btn btn-light" onClick={signInWithGoogle}>Sign in with Google</button>

                </div>
                    
        

              </div>

           

        </React.Fragment>
     );
}

// function SignOut(){
//     return auth.currentUser && (
//         <button onClick={()=> auth.signOut()}>Sign out</button>
//     )
// }
 
export default SignIn;