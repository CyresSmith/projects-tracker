import { useState } from 'react';
import { SectionBox } from './Section.styled';
import ProjectInfo from './ProjectInfo';
import Board from './Board';
import Timeline from './Timeline/Timeline';

import stages from 'stages.json';

const Section = () => {
  const [viewType, setViewType] = useState('board');

  return (
    <SectionBox>
      <ProjectInfo viewType={viewType} setViewType={setViewType} />
      {viewType === 'board' && <Board stages={stages} />}
      {viewType === 'timeline' && <Timeline stages={stages} />}
    </SectionBox>
  );
};

export default Section;
