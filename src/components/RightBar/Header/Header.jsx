import IconButton from 'components/shared/button/IconButton';
import { HeaderBox, UserAvatar } from './Header.styled';
import BellIcon from 'components/shared/Icons/BellIcon';

import user from 'user.json';

const Header = () => {
  return (
    <HeaderBox>
      <IconButton icon={BellIcon} iconSize={24} />
      <UserAvatar src={user.img} />
    </HeaderBox>
  );
};

export default Header;
