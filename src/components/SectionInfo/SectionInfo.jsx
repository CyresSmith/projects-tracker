import React from 'react';
import { SectionInfoBox, SectionName } from './SectionInfo.styled';

const SectionInfo = ({ name, children }) => {
  return (
    <SectionInfoBox>
      <SectionName>{name}</SectionName>
      {children}
    </SectionInfoBox>
  );
};

export default SectionInfo;
