import React from 'react';
import {
  Active,
  StageBox,
  Name,
  Desc,
  Time,
  Process,
  Completed,
  Progress,
  ProgressInfo,
  ProgressTrail,
  ProgressPath,
  Contact,
  ContactName,
  ContactImg,
} from './Stage.styled';
import CalendarIcon from 'components/shared/Icons/CalendarIcon';
import theme from 'theme';

import { PiTimerFill } from 'react-icons/pi';
import { BsCheckCircleFill } from 'react-icons/bs';

const Stage = ({ stage }) => {
  const {
    name,
    desc,
    dateStart,
    deadline,
    duration,
    progress,
    isActive,
    contact,
  } = stage;

  const localeDate = date => new Date(date).toLocaleDateString();

  return (
    <StageBox>
      {isActive && <Active>Active</Active>}
      <p>
        <Name>{name}</Name>
        <Desc>{desc}</Desc>
        <Time>
          <span>
            <CalendarIcon size={18} color={theme.colors.black} />
            {localeDate(dateStart)} - {localeDate(deadline)}
          </span>
          <span>
            <PiTimerFill size={18} color={theme.colors.black} />
            {duration} hours
          </span>
        </Time>
        <Process>
          {progress === 100 && (
            <Completed>
              <BsCheckCircleFill size={24} color={theme.colors.progress.path} />
              Completed
            </Completed>
          )}
          {progress !== 100 && (
            <Progress>
              <ProgressInfo>
                <span>Progress</span>
                <span>{progress}%</span>
              </ProgressInfo>
              <ProgressTrail>
                <ProgressPath progress={progress} />
              </ProgressTrail>
            </Progress>
          )}
        </Process>
        <Contact>
          <ContactImg src={contact.img} alt={contact.name} />
          <ContactName>{contact.name}</ContactName>
        </Contact>
      </p>
    </StageBox>
  );
};

export default Stage;
