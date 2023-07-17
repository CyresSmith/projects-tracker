import {
  Label,
  InputField,
  Error,
  InputBox,
} from 'components/shared/Input/Input.styled';
import IconButton from 'components/shared/button/IconButton/IconButton';
import { ErrorMessage } from 'formik';
import { PasswordInputBox } from './PasswordInput.styled';
import { useState } from 'react';

import { FiEyeOff, FiEye } from 'react-icons/fi';
import Input from 'components/shared/Input/Input';

const PasswordInput = ({ label, placeholder, id }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <PasswordInputBox>
      <Input
        type={passwordVisible ? 'text' : 'password'}
        id={id}
        label={label}
        placeholder={placeholder}
      />
      <IconButton
        icon={passwordVisible ? FiEye : FiEyeOff}
        iconSize={24}
        onClick={() => setPasswordVisible(prev => !prev)}
        round
      />
    </PasswordInputBox>
  );
};

export default PasswordInput;
