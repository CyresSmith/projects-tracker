import React from 'react';
import { List } from './ToolsList.styled';
import Tool from './Tool/Tool';

import { BiSolidDashboard } from 'react-icons/bi';
import { MdMail } from 'react-icons/md';

const tools = [
  { name: 'Dashboard', link: '/', icon: BiSolidDashboard },
  { name: 'Chat', link: '/chat', icon: MdMail },
];

const ToolsList = () => {
  return (
    <List>
      {tools.map(tool => (
        <li key={tool.name}>
          <Tool name={tool.name} link={tool.link} icon={tool.icon} />
        </li>
      ))}
    </List>
  );
};

export default ToolsList;
