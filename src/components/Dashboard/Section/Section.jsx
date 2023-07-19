import React, { useState } from 'react';
import { SectionBox } from './Section.styled';
import ProjectInfo from './ProjectInfo';
import StageList from './StageList/StageList';

const Section = () => {
  const [viewType, setViewType] = useState('board');

  return (
    <SectionBox>
      <ProjectInfo viewType={viewType} setViewType={setViewType} />
      <StageList />
    </SectionBox>
  );
};

export default Section;
