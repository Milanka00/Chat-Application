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
              <div className='cover d-flex w-100 justify-content-center align-items-center flex-column'>
               
                <div className='leftsection w-70  text-white'>
                <h1 className='title' >Chat Room</h1>
                <Type  className='type' />

                <div className='mt-2'>
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Right%20Light%20Skin%20Tone.png" alt="Backhand Index Pointing Right Light Skin Tone" width="25" height="25" />
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png" alt="Beaming Face with Smiling Eyes" width="25" height="25" />
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png" alt="Beating Heart" width="25" height="25" />
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Left%20Light%20Skin%20Tone.png" alt="Backhand Index Pointing Left Light Skin Tone" width="25" height="25" />

                </div>

                </div>

                <div className='rightsection d-flex w-30 mt-3'>
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