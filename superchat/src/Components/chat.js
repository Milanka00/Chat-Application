import { Firestore } from 'firebase/firestore';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const ChatRoom = () => {

    const messagesRef = Firestore.collection('messages');
    const query = messagesRef.orderBy('createAt').limit(25);

    const [messages]= useCollectionData(query,{idField:'id'});

    return ( 
        <React.Fragment>

        </React.Fragment>
     );
}
 
export default ChatRoom;