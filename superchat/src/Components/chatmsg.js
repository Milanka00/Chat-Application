import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

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


const ChatMessage = (props) => {

    const {text,uid,photoURL}=props.message;

    const messageClass = uid === auth.currentUser.uid? 'sent':'received';

    return ( 
        <React.Fragment>
           <div className={`message ${messageClass}`}>

             <img src={photoURL} /> 
            <p>{text}</p>

            </div>
          
            

        </React.Fragment>
     );
}
 
export default ChatMessage;