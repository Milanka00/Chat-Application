import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
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
const firestore = firebase.firestore(); // Initialize the firestore object

const ChatRoom = () => {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25); // Fix the typo in orderBy method

  const [messages] = useCollectionData(query, { idField: 'id' });

  return (
  <React.Fragment>
     <button onClick={()=> auth.signOut()}>Sign out</button>

  </React.Fragment>);
};

export default ChatRoom;
