import React, { useState,useRef } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import ChatMessage from './chatmsg';

import './chat.css'



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

  const dummy=useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25); // Fix the typo in orderBy method

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue]=useState('');

  const sendMessage=async(e)=>{
    e.preventDefault();

    const {uid,photoURL}=auth.currentUser;

    await messagesRef.add({
      text:formValue,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');

    dummy.current.scrollIntoView({behaviour:'smooth'});
  }

  const user = auth.currentUser;
  const userName = user.displayName || '';

  return (
  <React.Fragment>
    <div className='d-flex flex-column align-items-start w-100 '>
      <div className='bar w-100 p-2 d-flex justify-content-between '>
        <div>  <p>Hi {userName} !!</p></div>
        <div>      
          <button className='btn btn-light mt-1'  onClick={()=> auth.signOut()}>Sign out</button>
        </div>
      
      </div>
    

      <div className='msgs w-100 p-2 '>
        {messages &&  messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

        <div ref={dummy}></div>
      </div>

        <form onSubmit={sendMessage}>
          <div className='bar p-3 d-flex w-100'>
          <input className='w-100 rounded me-2'  value={formValue} onChange={(e)=>setFormValue(e.target.value)}/>
          <button  type="submit">Submit</button>
          </div>

          
        </form>
    </div>
  
   
    

  </React.Fragment>);
};

export default ChatRoom;
