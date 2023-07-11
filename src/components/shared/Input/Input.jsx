import { ErrorMessage } from 'formik';
import { InputBox, Label, InputField, Error } from './Input.styled';

const Input = ({ type, label, placeholder, id }) => {
  return (
    <InputBox>
      <Label htmlFor={id}>{label}</Label>
      <InputField id={id} name={type} type={type} placeholder={placeholder} />
      <ErrorMessage name={type} component={Error} />
    </InputBox>
  );
};

export default Input;
