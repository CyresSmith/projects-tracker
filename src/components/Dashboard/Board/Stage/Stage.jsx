import { useEffect, useState } from 'react';

import {
  Active,
  StageBox,
  Name,
  Desc,
} from './Stage.styled';

import Modal from 'components/shared/Modal';

import { LeftSide, RightSide } from './StageModal/StageModal';
import Dates from './Dates';
import StageProgress from './StageProgress';
import StageContact from './StageContact';

const Stage = ({ stage }) => {
  const { name, desc, dateStart, deadline, contact } =
    stage;

  const [showModal, setShowModal] = useState(false);

  const handleStageClick = () => {
    setShowModal(true);
  };

  const today = new Date();
  const dline = new Date(deadline);
  const start = new Date(dateStart);

  const progress = () => {
    const totalTime = dline - start;
    const elapsedTime = today - start;

    const progress = Math.round((elapsedTime / totalTime) * 100);

    if (progress >= 100) {
      return 100;
    }

    if (progress <= 0) {
      return 0;
    }

    return progress;
  };

  const active = progress() > 0 && progress() < 100;

  return (
    <>
      <StageBox onClick={handleStageClick}>
        {active && <Active>Active</Active>}
        <p>
          <Name>{name}</Name>
          <Desc>{desc.slice(0, 50)}...</Desc>
          <Dates {...stage} />
          <StageProgress progress={progress()} />
          <StageContact {...contact} />
        </p>
      </StageBox>

      <Modal
        toggleModal={() => setShowModal(false)}
        isOpen={showModal}
        title={name}
        duplex
        leftSide={<LeftSide stage={stage} />}
        leftSideWidth="auto"
        rightSide={<RightSide stage={stage} progress={progress()} contact={contact} />}
        rightSideWidth="462px"
      />
    </>
  );
};

export default Stage;
