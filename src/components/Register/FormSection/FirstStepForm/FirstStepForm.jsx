import { Field, Formik, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FormBox } from './FirstStepForm.styled';
import Input from 'components/shared/Input';
import Button from 'components/shared/button';
import Checkbox from './Checkbox';
import Textarea from './Textarea';
import { Label, Error } from 'components/shared/Input/Input.styled';
import PasswordInput from './PasswordInput/PasswordInput';

import { passwordRegExp, phoneRegExp } from 'components/shared/RegExps';

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

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be max 20 characters')
    .required('Required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Must be phone in international format')
    .required('Required'),
  email: Yup.string().email('Must be valid email').required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(16, 'Must be max 16 characters')
    .matches(
      passwordRegExp,
      'Must be at least one capital letter and one number'
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match!')
    .required('Required'),
  services: Yup.array()
    .min(1, 'Must be at least 1 option selected')
    .required('Required'),
  desc: Yup.string()
    .min(30, 'Must be at least 30 characters')
    .max(300, 'Must be max 300 characters')
    .required('Required'),
  mission: Yup.string()
    .min(30, 'Must be at least 30 characters')
    .max(300, 'Must be max 300 characters')
    .required('Required'),
  values: Yup.string()
    .min(30, 'Must be at least 30 characters')
    .max(300, 'Must be max 300 characters')
    .required('Required'),
  goals: Yup.string()
    .min(30, 'Must be at least 30 characters')
    .max(300, 'Must be max 300 characters')
    .required('Required'),
});

const initialValues = {
  name: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
  services: [],
  desc: '',
  mission: '',
  values: '',
  goals: '',
};

const FirstStepForm = ({ setStep, setFirstStepData }) => {
  const handleSubmit = async data => {
    setStep(2);
    setFirstStepData(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, { resetForm }) => {
        const { confirmPassword, ...data } = values;

        handleSubmit(data);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <FormBox>
          <div id="email&password">
            <Input type="text" id="name" label="Name" placeholder="Name" />
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
          </div>

          <fieldset>
            <Label htmlFor="services">What are you looking for?</Label>
            <FieldArray name="services" id="services">
              {arrayHelpers => (
                <ul>
                  {services.map((service, index) => {
                    return (
                      <Field key={index} name={service}>
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
            {errors.services && touched.services && (
              <Error>{errors.services}</Error>
            )}
          </fieldset>

          <Textarea
            type="text"
            label="Describe your company's main activity"
            subLabel="Give us a detailed answer about what your company does."
            id="desc"
            placeholder="Start typing..."
          />

          <Textarea
            type="text"
            label="What is your compay's mission?"
            subLabel='Example: Nike - "Bring inspiration and innovation to every athlete in the world." Walmart - "We&#039;re saving people money, so they can live better lives."'
            id="mission"
            placeholder="Start typing..."
          />

          <Textarea
            type="text"
            label="What are your company's values?"
            subLabel="Example: IKEA values (each IKEA item has a detailed description): Togetherness; Caring for people and planet; Cost-consciousness; Simplicity"
            id="values"
            placeholder="Start typing..."
          />

          <Textarea
            type="text"
            label="What are the main goals of cooperating with us?"
            subLabel="What do you want to achieve by implementing this project?"
            id="goals"
            placeholder="Start typing..."
          />

          <Button id="next" type="submit">
            Next
          </Button>
        </FormBox>
      )}
    </Formik>
  );
};

export default FirstStepForm;
