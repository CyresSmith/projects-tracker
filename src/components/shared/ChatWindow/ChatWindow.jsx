import { useEffect, useState, useRef } from 'react';

import Message from './Message';
import Input from './Input';

import { MessagesList } from './ChatWindow.styled';

import user from 'user.json';

const ChatWindow = ({ messages }) => {
  const [newMessage, setNewMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const lastMessageRef = useRef(null);

  const setLastMessageRef = node => {
    if (node) {
      lastMessageRef.current = node;
    }
  };

  useEffect(() => {
    if (!messages) return;

    setChatMessages(messages);
  }, [messages]);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  }, [chatMessages]);

  const handleMessageChange = e => {
    setNewMessage(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const text = newMessage.trim();

    if (text.length === 0) return;

    const id = chatMessages.length + 1;

    const message = {
      id,
      text,
      date: new Date(),
      author: user,
    };

    setChatMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  return (
    <>
      <MessagesList>
        {chatMessages.map((message, index) => (
          <Message
            key={message.id}
            message={message}
            ref={index === chatMessages.length - 1 ? setLastMessageRef : null}
          />
        ))}
      </MessagesList>

      <Input
        onChange={handleMessageChange}
        value={newMessage}
        onClick={handleSubmit}
      />
    </>
  );
};

export default ChatWindow;
