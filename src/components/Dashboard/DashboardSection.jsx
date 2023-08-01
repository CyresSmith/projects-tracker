import { useState } from 'react';
import Board from './Board';
import Timeline from './Timeline/Timeline';

import stages from 'stages.json';

import SectionInfo from 'components/SectionInfo';
import ViewToggle from './ViewToggle';

import { SectionBox } from 'components/shared/SectionBox.styled';

const DashboardSection = () => {
  const [viewType, setViewType] = useState('board');

  return (
    <SectionBox>
      <SectionInfo name={'Unlock'}>
        <ViewToggle viewType={viewType} setViewType={setViewType} />
      </SectionInfo>
      {viewType === 'board' && <Board stages={stages} />}
      {viewType === 'timeline' && <Timeline stages={stages} />}
    </SectionBox>
  );
};

export default DashboardSection;
