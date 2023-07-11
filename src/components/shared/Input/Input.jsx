import { ErrorMessage } from 'formik';
import { InputBox, Label, InputField, Error } from './Input.styled';

const Input = ({ type, label, placeholder }) => {
  return (
    <InputBox>
      <Label htmlFor={type}>{label}</Label>
      <InputField id={type} name={type} type={type} placeholder={placeholder} />
      <ErrorMessage name={type} component={Error} />
    </InputBox>
  );
};

export default Input;