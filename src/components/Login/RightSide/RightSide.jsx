import Divider from './Divider/Divider';
import GoogleBtn from './GoogleBtn/GoogleBtn';
import LoginForm from './LoginForm/LoginForm';
import { RightSideBox, RightSideContainer, Title } from './RightSide.styled';

const RightSide = () => {
  return (
    <RightSideBox>
      <RightSideContainer>
        <Title>Cozyboard</Title>
        <GoogleBtn />
        <Divider />
        <LoginForm />
      </RightSideContainer>
    </RightSideBox>
  );
};

export default RightSide;
