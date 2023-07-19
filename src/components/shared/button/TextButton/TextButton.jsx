import React from 'react';
import { ButtonBox, Text } from './TextButton.styled';
import theme from 'theme';

const TextButton = ({ color = null, icon: Icon, iconSize = 34, children }) => {
  return (
    <ButtonBox color={color}>
      <Icon size={iconSize} />
      <Text>{children}</Text>
    </ButtonBox>
  );
};

export default TextButton;
