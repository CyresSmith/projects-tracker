import React from 'react';
import { EventsList } from './Events.styled';
import Event from './Event';

const Events = ({ events = [] }) => {
  return (
    <EventsList>
      {events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </EventsList>
  );
};

export default Events;
