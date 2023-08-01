import { useState, useEffect, forwardRef } from 'react';
import {
  Author,
  AuthorImg,
  AuthorName,
  MessageDate,
  MessageBox,
  Text,
} from './Message.styled';

import user from 'user.json';

const Message = forwardRef(({ message }, ref) => {
  const currentUser = user.id === message.author.id;

  return (
    <MessageBox currentUser={currentUser} ref={ref}>
      <Author>
        <AuthorImg src={message.author.img} alt={message.author.name} />
        <AuthorName>{message.author.name}</AuthorName>
      </Author>
      <Text>{message.text}</Text>
      <MessageDate>{new Date(message.date).toLocaleString()}</MessageDate>
    </MessageBox>
  );
});

Message.displayName = 'Message';

export default Message;
