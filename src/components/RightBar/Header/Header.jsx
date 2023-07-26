import { useEffect, useState } from 'react';

import BellIcon from 'components/shared/Icons/BellIcon';
import IconButton from 'components/shared/button/IconButton';
import Modal from 'components/shared/Modal/Modal';
import Badge from 'components/shared/Badge';

import { HeaderBox, NotificationBtnBox, UserAvatar } from './Header.styled';
import Popup from './Popup';
import Profile from './Profile';
import Notifications from './Notifications';
import Settings from './Settings';

import user from 'user.json';
import notifications from 'notifications.json';

const Header = () => {
  const [popUpShow, setPopUpShow] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const handlePopupToggle = type => {
    setPopUpShow(prev => {
      switch (true) {
        case !prev:
          return type;

        case prev && prev !== type:
          return type;

        default:
          return null;
      }
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') setPopUpShow(null);
    });

    return () => {
      window.removeEventListener('keydown', e => {
        if (e.key === 'Escape') setPopUpShow(null);
      });
    };
  }, []);

  return (
    <>
      <HeaderBox>
        <NotificationBtnBox>
          <IconButton
            id="bellButton"
            icon={BellIcon}
            iconSize={24}
            onClick={() => handlePopupToggle('notificationsOpen')}
          />
          {notifications.length > 0 && <Badge number={notifications.length} />}
        </NotificationBtnBox>
        <UserAvatar
          src={user.img}
          onClick={() => handlePopupToggle('profileOpen')}
        />

        <Popup isOpen={popUpShow === 'notificationsOpen'}>
          <Notifications />
        </Popup>

        <Popup isOpen={popUpShow === 'profileOpen'}>
          <Profile
            user={user}
            setShowModal={setShowModal}
            setPopUpShow={setPopUpShow}
          />
        </Popup>
      </HeaderBox>

      <Modal
        toggleModal={() => setShowModal(false)}
        isOpen={showModal}
        title="Settings"
      >
        <Settings />
      </Modal>
    </>
  );
};

export default Header;
