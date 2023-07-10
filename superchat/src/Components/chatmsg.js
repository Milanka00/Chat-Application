import React from 'react';

const ChatMessage = (props) => {

    const {text,uid}=props.message;
    return ( 
        <React.Fragment>
            <p>{text}</p>

        </React.Fragment>
     );
}
 
export default ChatMessage;