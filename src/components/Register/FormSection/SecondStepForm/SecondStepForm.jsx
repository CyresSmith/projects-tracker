import { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { FormBox } from './SecondStepForm.styled';
import Button from 'components/shared/button';
import Dropzone from './Dropzone';
import Links from './Links';
import Budget from './Budget';
import Dates from './Dates';

const URL = /^(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]*$/i;

const initialValues = {
  files: [],
  links: [''],
  budget: 1000,
  dateStart: '',
  deadline: '',
};

const SecondStepForm = ({ firstStepData }) => {
  const handleSubmit = data => {
    console.log({ ...data, ...firstStepData });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const parseDateString = (value, originalValue) => {
    const [day, month, year] = originalValue.split('.');
    return new Date(`${year}-${month}-${day}`);
  };

  const ValidationSchema = Yup.object().shape({
    files: Yup.array().max(10),
    links: Yup.array()
      .of(Yup.string().matches(URL, 'Enter a valid url'))
      .max(10, 'Max 10 links'),
    budget: Yup.number().min(200).max(5000).required('Required'),
    dateStart: Yup.date()
      .required('Start date is required')
      .min(new Date(), 'Cannot be earlier than today')
      .transform(parseDateString),
    deadline: Yup.date()
      .required('Deadline is required')
      .min(Yup.ref('dateStart'), 'Cannot be earlier than start date')
      .transform(parseDateString),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, { resetForm }) => {
        const links = () => values.links.filter(link => link !== '');

        handleSubmit({ ...values, links: links() });
        resetForm();
      }}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <FormBox>
          <Dropzone setFieldValue={setFieldValue} values={values} />
          <Links setFieldValue={setFieldValue} values={values} />
          <Budget setFieldValue={setFieldValue} values={values} />
          <Dates setFieldValue={setFieldValue} values={values} />
          <Button type="submit">Send</Button>
        </FormBox>
      )}
    </Formik>
  );
};

export default SecondStepForm;
