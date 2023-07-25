import React from 'react';
import {
  Notification,
  NotificationsList,
  Text,
  DateField,
} from './Notifications.styled';

import notifications from 'notifications.json';

const Notifications = () => {
  return (
    <NotificationsList>
      {notifications.map(item => (
        <li key={item.id}>
          <Notification>
            <Text status={item.status}>{item.text}</Text>
            <DateField>
              <span>{new Date(item.date).toTimeString().slice(0, 5)}</span>
              <span>{new Date(item.date).toLocaleDateString()}</span>
            </DateField>
          </Notification>
        </li>
      ))}
    </NotificationsList>
  );
};

export default Notifications;
