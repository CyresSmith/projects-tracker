import React from 'react';
import { List } from './Board.styled';
import Stage from './Stage';

import stages from 'stages.json';

const Board = () => {
  return (
    <List>
      {stages.map(stage => (
        <Stage key={stage.id} stage={stage} />
      ))}
    </List>
  );
};

export default Board;
