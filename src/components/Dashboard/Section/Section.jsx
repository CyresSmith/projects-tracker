import { useState } from 'react';
import { SectionBox } from './Section.styled';
import ProjectInfo from './ProjectInfo';
import Board from './Board';
import Timeline from './Timeline/Timeline';

const stages = [
  {
    id: 1,
    name: 'Strategy session',
    desc: 'Lorem ipsum dolor sit amet, conse ctetur varius dolor sit adipiscing elit...',
    dateStart: '2023-05-16',
    deadline: '2023-05-22',
    duration: 8,
    progress: 100,
    isActive: false,
    contact: {
      name: 'Wadew Warren',
      img: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg',
    },
  },
  {
    id: 2,
    name: 'UX researches',
    desc: 'Lorem ipsum dolor sit amet, conse ctetur varius dolor sit adipiscing elit...',
    dateStart: '2023-05-22',
    deadline: '2023-05-26',
    duration: 6,
    progress: 100,
    isActive: false,
    contact: {
      name: 'Wadew Warren',
      img: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg',
    },
  },
  {
    id: 3,
    name: 'User Flows',
    desc: 'Lorem ipsum dolor sit amet, conse ctetur varius dolor sit adipiscing elit...',
    dateStart: '2023-05-26',
    deadline: '2023-05-30',
    duration: 4,
    progress: 32,
    isActive: true,
    contact: {
      name: 'Wadew Warren',
      img: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg',
    },
  },
  {
    id: 4,
    name: 'Wireframing',
    desc: 'Lorem ipsum dolor sit amet, conse ctetur varius dolor sit adipiscing elit...',
    dateStart: '2023-05-22',
    deadline: '2023-05-24',
    duration: 4,
    progress: 0,
    isActive: false,
    contact: {
      name: 'Wadew Warren',
      img: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg',
    },
  },
  {
    id: 5,
    name: 'User Flows',
    desc: 'Lorem ipsum dolor sit amet, conse ctetur varius dolor sit adipiscing elit...',
    dateStart: '2023-05-26',
    deadline: '2023-06-02',
    duration: 4,
    progress: 32,
    isActive: true,
    contact: {
      name: 'Wadew Warren',
      img: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg',
    },
  },
  {
    id: 6,
    name: 'Wireframing',
    desc: 'Lorem ipsum dolor sit amet, conse ctetur varius dolor sit adipiscing elit...',
    dateStart: '2023-05-22',
    deadline: '2023-06-05',
    duration: 4,
    progress: 0,
    isActive: false,
    contact: {
      name: 'Wadew Warren',
      img: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg',
    },
  },
];

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
