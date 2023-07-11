import { LoginBox } from './Login.styled';

import LeftSide from 'components/Login/LeftSide';
import RightSide from 'components/Login/RightSide';

const Login = () => {
  return (
    <LoginBox>
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </LoginBox>
  );
};

export default Login;
