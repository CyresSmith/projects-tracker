import Button from 'components/shared/button';
import {
  ProfileBox,
  UserImg,
  User,
  UserName,
  UserEmail,
  ButtonsBox,
} from './Profile.styled';

import { RiSettings4Fill } from 'react-icons/ri';
import { IoLogOut } from 'react-icons/io5';
import TextButton from 'components/shared/button/TextButton/TextButton';
import theme from 'theme';

const textButtons = [
  { text: 'Settings', icon: RiSettings4Fill, id: null },
  { text: 'Logout', icon: IoLogOut, id: 'logout' },
];

const Profile = ({ user }) => {
  return (
    <ProfileBox>
      <User>
        <UserImg src={user.img} alt={user.name} />
        <p>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </p>
      </User>
      <ButtonsBox>
        {textButtons.map(btn => (
          <TextButton
            key={btn.text}
            iconSize={20}
            icon={btn.icon}
            color={theme.colors.black}
            id={btn.id}
          >
            {btn.text}
          </TextButton>
        ))}
      </ButtonsBox>
    </ProfileBox>
  );
};

export default Profile;
