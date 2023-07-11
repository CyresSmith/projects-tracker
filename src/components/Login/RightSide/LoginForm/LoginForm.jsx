import { Formik } from 'formik';
import * as Yup from 'yup';

import { FormLink, FormBox, SignUpText } from './LoginForm.styled';
import Input from 'components/shared/Input';
import Button from 'components/shared/button/Button';
import theme from 'theme';

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Must be valid email').required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(20, 'Must be max 20 characters')
    .matches(
      passwordRegex,
      'Must be at least one capital letter and one number'
    )
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const handleLogin = async userData => {
    console.log('userData: ', userData);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={({ email, password }, { resetForm }) => {
        const user = {
          email: email.trim(),
          password: password.trim(),
        };
        handleLogin(user);
        resetForm();
      }}
    >
      <FormBox>
        <div>
          <Input type="email" label="Email" placeholder="example@email.com" />
          <Input type="password" label="Password" placeholder="********" />
        </div>

        <div style={{ marginTop: theme.space[3], marginBottom: '32px' }}>
          <FormLink to={'/register'}>Forget password?</FormLink>
        </div>
        <Button type="submit">Login</Button>

        <SignUpText>
          <span>Not registered yet?</span>
          <FormLink to={'/register'}>Sign up</FormLink>
        </SignUpText>
      </FormBox>
    </Formik>
  );
};

export default LoginForm;
