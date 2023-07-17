import { ErrorMessage } from 'formik';
import { TextareaBox, TextareaField } from './Textarea.styled';
import { Label, SubLabel, Error } from 'components/shared/Input/Input.styled';

const Textarea = ({ id, type, label, subLabel, placeholder }) => {
  return (
    <TextareaBox>
      <Label htmlFor={id}>{label}</Label>
      <SubLabel>{subLabel}</SubLabel>
      <TextareaField
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        as="textarea"
        maxLength="340"
      />
      <ErrorMessage name={id} component={Error} />
    </TextareaBox>
  );
};

export default Textarea;
