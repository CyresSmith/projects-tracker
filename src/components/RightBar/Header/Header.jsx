import { useEffect, useState } from 'react';

import BellIcon from 'components/shared/Icons/BellIcon';

import IconButton from 'components/shared/button/IconButton';

import { HeaderBox, NotificationBtnBox, UserAvatar } from './Header.styled';
import Popup from './Popup';
import Profile from './Profile';
import Notifications from './Notifications';
import Badge from 'components/shared/Badge';

import user from 'user.json';
import notifications from 'notifications.json';

const Header = () => {
  const [popUpOpen, setPopUpOpen] = useState(null);

  const handlePopupToggle = e => {
    setPopUpOpen(prev => {
      switch (true) {
        case !prev:
          return e.currentTarget.id;

        case prev !== null && prev !== e.currentTarget.id:
          return e.currentTarget.id;

        default:
          return null;
      }
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') setPopUpOpen(null);
    });

    return () => {
      window.removeEventListener('keydown', e => {
        if (e.key === 'Escape') setPopUpOpen(null);
      });
    };
  }, []);

  return (
    <HeaderBox>
      <NotificationBtnBox>
        <IconButton
          id="bellButton"
          icon={BellIcon}
          iconSize={24}
          onClick={handlePopupToggle}
        />
        {notifications.length > 0 && <Badge number={notifications.length} />}
      </NotificationBtnBox>
      <UserAvatar id="profileOpen" src={user.img} onClick={handlePopupToggle} />

      <Popup isOpen={popUpOpen === 'bellButton'}>
        <Notifications />
      </Popup>

      <Popup isOpen={popUpOpen === 'profileOpen'}>
        <Profile user={user} />
      </Popup>
    </HeaderBox>
  );
};

export default Header;
