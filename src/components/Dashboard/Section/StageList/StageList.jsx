import React from 'react';
import { List } from './StageList.styled';
import Stage from './Stage';

const stages = [
  {
    id: 1,
    name: 'Strategy session',
    desc: 'Lorem ipsum dolor sit amet, conse ctetur varius dolor sit adipiscing elit...',
    dateStart: '16.05.23',
    deadline: '22.05.23',
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
    dateStart: '22.05.23',
    deadline: '26.05.23',
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
    dateStart: '26.05.23',
    deadline: '30.05.23',
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
    dateStart: '22.05.23',
    deadline: '24.05.23',
    duration: 4,
    progress: 0,
    isActive: false,
    contact: {
      name: 'Wadew Warren',
      img: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg',
    },
  },
];

const StageList = () => {
  return (
    <List>
      {stages.map(stage => (
        <Stage key={stage.id} stage={stage} />
      ))}
    </List>
  );
};

export default StageList;
