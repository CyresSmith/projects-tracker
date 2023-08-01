import React from 'react';
import { ToolLink } from './Tool.styled';

const Tool = ({ name, link, icon: Icon }) => {
  return (
    <ToolLink to={link}>
      <Icon size={20} /> {name}
    </ToolLink>
  );
};

export default Tool;
