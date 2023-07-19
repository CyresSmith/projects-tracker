import React from 'react';
import { EventBox, EventDate, EventInfo, EventName } from './Event.styled';
import parse from 'date-fns/parse';

const Event = ({ event }) => {
  return (
    <EventBox>
      <EventInfo>
        <EventName>{event.name}</EventName>
        <EventDate>{event.date}</EventDate>
      </EventInfo>
    </EventBox>
  );
};

export default Event;
