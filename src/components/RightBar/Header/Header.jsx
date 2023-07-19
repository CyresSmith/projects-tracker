import IconButton from 'components/shared/button/IconButton';
import { HeaderBox, UserAvatar } from './Header.styled';
import BellIcon from 'components/shared/Icons/BellIcon';

const Header = () => {
  return (
    <HeaderBox>
      <IconButton icon={BellIcon} iconSize={24} />
      <UserAvatar src="https://img.redro.pl/plakaty/photo-portrait-of-young-african-american-student-smiling-wearing-white-t-shirt-isolated-on-bright-yellow-colored-background-400-231778340.jpg" />
    </HeaderBox>
  );
};

export default Header;
