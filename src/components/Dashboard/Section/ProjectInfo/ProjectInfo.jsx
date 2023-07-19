import React from 'react';
import { ProjectInfoBox, ProjectName } from './ProjectInfo.styled';
import ViewToggle from './ViewToggle';

const project = { name: 'Unlock' };

const ProjectInfo = ({ viewType, setViewType }) => {
  return (
    <ProjectInfoBox>
      <ProjectName>{project.name}</ProjectName>
      <ViewToggle viewType={viewType} setViewType={setViewType} />
    </ProjectInfoBox>
  );
};

export default ProjectInfo;
