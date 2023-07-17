import React from 'react';
import { ProjectBox, Text } from './SelectedProject.styled';

import { FaChevronDown } from 'react-icons/fa';

const SelectedProject = ({ open = false }) => {
  return (
    <ProjectBox>
      <Text>Unlock</Text>
      <FaChevronDown size={24} />
    </ProjectBox>
  );
};

export default SelectedProject;
