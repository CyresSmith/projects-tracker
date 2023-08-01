import { RiSettings4Fill } from 'react-icons/ri';
import { IoLogOut } from 'react-icons/io5';

import {
  ProfileBox,
  UserImg,
  User,
  UserName,
  UserEmail,
  ButtonsBox,
} from './Profile.styled';

import TextButton from 'components/shared/button/TextButton';

import theme from 'theme';

const Profile = ({ user, setShowModal, setPopUpShow }) => {
  const handleSettingsClick = () => {
    setPopUpShow(null);
    setShowModal(true);
  };

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
        <TextButton
          iconSize={20}
          icon={RiSettings4Fill}
          color={theme.colors.black}
          onClick={handleSettingsClick}
        >
          Settings
        </TextButton>

        <TextButton
          iconSize={20}
          icon={IoLogOut}
          color={theme.colors.black}
          id="logout"
        >
          Logout
        </TextButton>
      </ButtonsBox>
    </ProfileBox>
  );
};

export default Profile;
