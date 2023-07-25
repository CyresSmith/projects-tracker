import IconButton from 'components/shared/button/IconButton';
import { HeaderBox, UserAvatar } from './Header.styled';
import BellIcon from 'components/shared/Icons/BellIcon';

import user from 'user.json';
import Profile from './Profile/Profile';
import { useState } from 'react';

const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const handleProfileToggle = () => {
    setProfileOpen(prev => !prev);
  };

  return (
    <HeaderBox>
      <IconButton id="bellButton" icon={BellIcon} iconSize={24} />
      <UserAvatar src={user.img} onClick={handleProfileToggle} />
      {profileOpen && <Profile user={user} />}
    </HeaderBox>
  );
};

export default Header;
