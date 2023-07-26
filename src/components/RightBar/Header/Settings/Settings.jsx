import TextButton from 'components/shared/button/TextButton/TextButton';
import {
  Box,
  FormBox,
  PasswordBox,
  SettingsFormBox,
  UserImg,
  UserImgBox,
} from './Settings.styled';
import Input from 'components/shared/Input/Input';

import { Field, Formik, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { passwordRegExp, phoneRegExp } from 'components/shared/RegExps';
import PasswordInput from 'components/Register/FormSection/FirstStepForm/PasswordInput/PasswordInput';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be max 20 characters'),
  phone: Yup.string().matches(
    phoneRegExp,
    'Must be phone in international format'
  ),
  email: Yup.string().email('Must be valid email'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(16, 'Must be max 16 characters')
    .matches(
      passwordRegExp,
      'Must be at least one capital letter and one number'
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match!'
  ),
});

import user from 'user.json';
import Button from 'components/shared/button/Button';

const initialValues = {
  name: user.name,
  phone: user.phone,
  email: user.email,
  password: '',
  confirmPassword: '',
};

const Settings = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, { resetForm }) => {
        // const { confirmPassword, ...data } = values;

        // handleSubmit(data);
        resetForm();
      }}
    >
      <SettingsFormBox>
        <Box>
          <UserImgBox>
            <UserImg src={user.img} />
            <TextButton>Change photo</TextButton>
          </UserImgBox>
          <FormBox>
            <Input type="name" label="Name" placeholder="name" id="name" />
            <Input
              type="tel"
              id="phone"
              label="Phone"
              placeholder="+3801234567"
            />
            <Input
              type="email"
              id="email"
              label="Email"
              placeholder="example@email.com"
            />

            {/* <PasswordBox> */}
            <PasswordInput
              id="password"
              label="Password"
              placeholder="********"
            />
            <PasswordInput
              id="confirmPassword"
              label="Confirm password"
              placeholder="********"
            />
            {/* </PasswordBox> */}
          </FormBox>
        </Box>
        <Button type="submit">Save Changes</Button>
      </SettingsFormBox>
    </Formik>
  );
};

export default Settings;
