import React from 'react';
import { ProjectSelectBox, Title } from './ProjectSelect.styled';
import SelectedProject from './SelectedProject/SelectedProject';

const ProjectSelect = () => {
  return (
    <ProjectSelectBox>
      <Title>Project</Title>
      <SelectedProject />
    </ProjectSelectBox>
  );
};

export default ProjectSelect;
