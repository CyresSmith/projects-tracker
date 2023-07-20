import React from 'react';
import { List } from './Board.styled';
import Stage from './Stage';

const Board = ({ stages = [] }) => {
  return (
    <List>
      {stages.map(stage => (
        <Stage key={stage.id} stage={stage} />
      ))}
    </List>
  );
};

export default Board;
