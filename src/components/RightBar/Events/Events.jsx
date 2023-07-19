import React from 'react';
import { EventsList } from './Events.styled';
import Event from './Event';

const events = [{ id: 1, name: 'Call about User Flows', date: '25.07.23' }];

const Events = () => {
  return (
    <EventsList>
      {events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </EventsList>
  );
};

export default Events;
