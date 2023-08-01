import { useEffect, useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';

import TextButton from 'components/shared/button/TextButton';
import Modal from 'components/shared/Modal';
import ScheduleCall from 'components/shared/ScheduleCall';

import Calendar from './Calendar';
import Header from './Header';
import Events from './Events';
import Progress from './Progress';

import { RightBarBox } from './RightBar.styled';

import events from 'events.json';

const RightBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [eventsState, setEventsState] = useState([]);

  useEffect(() => {
    if (!events) return;

    setEventsState(events);
  }, []);

  return (
    <RightBarBox>
      <Header />
      <Calendar events={eventsState} />
      <TextButton
        icon={BsFillPlusCircleFill}
        onClick={() => setShowModal(true)}
      >
        Schedule a call
      </TextButton>
      <Events events={events} />
      <Progress />

      <Modal
        toggleModal={() => setShowModal(false)}
        isOpen={showModal}
        title="Schedule a call"
      >
        <ScheduleCall events={eventsState} setEventsState={setEventsState} />
      </Modal>
    </RightBarBox>
  );
};

export default RightBar;
