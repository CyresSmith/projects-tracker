import {
  Title,
  Description,
  Links,
  LinksList,
  Link,
  Files,
  TextBtnBox,
  LeftSideBox,
} from './StageModal.styled';

import { FaFile } from 'react-icons/fa';
import { BsFillPlusCircleFill } from 'react-icons/bs';

import TextButton from 'components/shared/button/TextButton';
import Button from 'components/shared/button';

import Dates from '../Dates';
import StageProgress from '../StageProgress';
import StageContact from '../StageContact';
import Chat from './Chat';
import Modal from 'components/shared/Modal/Modal';
import ScheduleCall from 'components/shared/ScheduleCall';
import { useState } from 'react';

export const LeftSide = ({ stage }) => {
  return (
    <LeftSideBox>
      <div>
        <Title>Description</Title>
        <Description>{stage.desc}</Description>
        <Links>
          {stage.links.map(links => (
            <div key={links.name}>
              <Title>{links.name}</Title>
              <LinksList>
                {links.linksArr.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.link}
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </LinksList>
            </div>
          ))}
        </Links>
        <Files>
          <Title>Files</Title>
          <ul>
            {stage.files.map(file => (
              <li key={file.name}>
                <a
                  href={file.link}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <FaFile size={83} color="inherit" />
                  <span>{file.name.slice(0, 10)}</span>
                </a>
              </li>
            ))}
          </ul>
        </Files>
      </div>
      <div>
        <Button>Confirm</Button>
      </div>
    </LeftSideBox>
  );
};

export const RightSide = ({ stage, progress, contact }) => {
  const [showModal, setShowModal] = useState(false);
  const [eventsState, setEventsState] = useState([]);

  return (
    <>
      <Dates {...stage} />
      <StageProgress progress={progress} />
      <StageContact {...contact} />
      <TextBtnBox>
        <TextButton
          icon={BsFillPlusCircleFill}
          onClick={() => setShowModal(true)}
        >
          Schedule a call
        </TextButton>
        <Chat messages={stage.chat.messages} />
      </TextBtnBox>

      <Modal
        toggleModal={() => setShowModal(false)}
        isOpen={showModal}
        title="Schedule a call"
      >
        <ScheduleCall events={eventsState} setEventsState={setEventsState} />
      </Modal>
    </>
  );
};
