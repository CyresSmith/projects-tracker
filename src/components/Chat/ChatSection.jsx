import { useState, useEffect, useRef, forwardRef } from 'react';

import SectionInfo from 'components/SectionInfo/SectionInfo';
import { SectionBox } from 'components/shared/SectionBox.styled';
import { ChatBox } from './ChatSection.styled';
import Input from './Input';

import { MessagesList } from './ChatSection.styled';
import Message from './Message/Message';

import messages from 'messages.json';
import user from 'user.json';

const ChatSection = () => {
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
  }, []);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  const handleMessageChange = e => {
    setNewMessage(e.currentTarget.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (newMessage.trim().length === 0) return;

    const id = chatMessages.length + 1;

    const message = {
      id,
      text: newMessage,
      date: new Date(),
      author: user,
    };

    setChatMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  return (
    <SectionBox>
      <SectionInfo name="Chat" />
      <ChatBox>
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
      </ChatBox>
    </SectionBox>
  );
};

export default ChatSection;
