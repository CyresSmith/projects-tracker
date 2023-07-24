import React from 'react';
import { InputBox, InputField } from './Input.styled';
import IconButton from 'components/shared/button/IconButton';

import { BsFillSendFill } from 'react-icons/bs';

const Input = ({ onChange, value, onClick }) => {
  return (
    <InputBox>
      <form>
        <InputField
          placeholder="Start typing"
          onChange={onChange}
          onSubmit={onClick}
          value={value}
        />
        <IconButton
          icon={BsFillSendFill}
          iconSize={24}
          type="submit"
          onClick={onClick}
          round
        />
      </form>
    </InputBox>
  );
};

export default Input;
