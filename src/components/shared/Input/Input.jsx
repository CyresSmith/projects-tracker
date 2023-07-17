import { ErrorMessage } from 'formik';
import { InputBox, Label, SubLabel, InputField, Error } from './Input.styled';

const Input = ({ type, label, sublabel, placeholder, id, onClick = null }) => {
  return (
    <InputBox>
      {label && <Label htmlFor={id}>{label}</Label>}
      {sublabel && <SubLabel id={id}>{sublabel}</SubLabel>}
      <InputField
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        onClick={onClick}
      />
      <ErrorMessage name={id} component={Error} />
    </InputBox>
  );
};

export default Input;
