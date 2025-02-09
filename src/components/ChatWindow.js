import React, { useState, useEffect } from 'react';
import './ChatWindow.css';
import Message from './Message';
import { getMessages, sendMessage } from '../services/chatService';

function ChatWindow({ user }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const unsubscribe = getMessages((newMessages) => {
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      sendMessage(user.uid, input);
      setInput('');
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;