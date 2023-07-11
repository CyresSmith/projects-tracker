import { Field, Formik, FieldArray } from 'formik';
import * as Yup from 'yup';

import { FormBox } from './RegisterForm.styled';
import Input from 'components/shared/Input';
import Button from 'components/shared/button';
import theme from 'theme';
import Checkbox from './Checkbox/Checkbox';
import { Label } from 'components/shared/Input/Input.styled';

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

const services = [
  'UI/UX Design',
  'Web Design',
  'Mobile App Design',
  'Prototyping',
  'Branding',
  'Custom Web development',
  'Webflow',
  'Elementor',
];

const initialValues = {
  email: '',
  password: '',
  services: [],
};

const RegisterForm = () => {
  const handleLogin = async userData => {
    console.log('userData: ', userData);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log('values: ', values);
      }}
    >
      {({ values }) => (
        <FormBox>
          <div id="email&password">
            <Input
              type="email"
              id="email"
              label="Your email"
              placeholder="example@email.com"
            />
            <Input
              type="password"
              id="password"
              label="Password"
              placeholder="********"
            />
          </div>

          <Label htmlFor="checkboxes">What are you looking for?</Label>
          <FieldArray name="services" id="checkboxes">
            {arrayHelpers => (
              <ul>
                {services.map((service, index) => {
                  return (
                    <Field key={`${service}_${service}`} name={service}>
                      {({ field }) => {
                        return (
                          <Checkbox
                            {...field}
                            id={`${service}_${index}`}
                            name={service}
                            label={service}
                            arrayHelpers={arrayHelpers}
                          />
                        );
                      }}
                    </Field>
                  );
                })}
              </ul>
            )}
          </FieldArray>

          <Input
            type="text"
            label="Describe your company's main activity"
            id="customerCompanyDesc"
            placeholder="Start typing..."
          />

          <Button type="submit">Login</Button>
        </FormBox>
      )}
    </Formik>
  );
};

export default RegisterForm;
