import { ErrorMessage } from 'formik';
import { InputBox, Label, InputField, Error } from './Input.styled';
import { SubLabel } from 'components/Register/FormSection/RegisterForm/Textarea/Textarea.styled';

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
