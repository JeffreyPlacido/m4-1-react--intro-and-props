import React from 'react';

import './ChatMessage.css';

const ChatMessage = ({user, body, messageType}) => {
  return messageType === 'sent'
    ? <SentMessage body={body} />
    : <ReceivedMessage user={user} body={body} />;
};

const SentMessage = ({ body }) => {
  return (
    <div className='chat-message'>
      <div className='chat-text sent-text'>
        <span className='chat-body sent'>{body}</span>
      </div>
      <img className='sent-Tips' src="/assets/tip-sent.svg"/>
    </div>
  );
};

const ReceivedMessage = ({ user, body }) => {
  return (
    <div className='chat-message'>
      <img className='user-avatar' src={user.avatar}/>
      <div className='chat-text'>
        <span className='user-name'>{user.username}</span>
        <span className='chat-body received'>{body}</span>
      </div>
      <img className='recieve-Tips' src="/assets/tip-received.svg"/>
    </div>
  );
};

export default ChatMessage;
