import React from 'react';

import './ChatMessage.css';

const ChatMessage = (props) => {
    console.log(props)
    return (
    <div className='chat-message'>
        <img className='user-avatar' src={props.message.user.avatar}/>
        <div className='chat-text'>
        <span className='user-name'>{props.message.user.username}</span>
        <span className='chat-body'>{props.message.body}</span>
        </div>
    </div>

    )
};

export default ChatMessage;