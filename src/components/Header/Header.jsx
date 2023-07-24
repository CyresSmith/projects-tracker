import React from 'react';
import { HeaderBox, Welcome, Message } from './Header.styled';

const user = { name: 'Alexa A' };

const Header = () => {
  return (
    <HeaderBox>
      <Welcome>Welcome, {user.name}.</Welcome>
      <Message>Have a good day!</Message>
    </HeaderBox>
  );
};

export default Header;
