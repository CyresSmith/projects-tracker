import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import parse from 'date-fns/parse';

import { FormBox } from './SecondStepForm.styled';
import Button from 'components/shared/button';
import Dropzone from './Dropzone';
import Links from './Links';
import Budget from './Budget';
import Dates from './Dates';

const URL = /^(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]*$/i;

const today = new Date();

const initialValues = {
  files: [],
  links: [''],
  budget: 1000,
  dateStart: '',
  deadline: '',
};

const SecondStepForm = ({ firstStepData }) => {
  const [startDate, setStartDate] = useState(today);

  const handleSubmit = data => {
    console.log({ ...data, ...firstStepData });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const ValidationSchema = Yup.object().shape({
    files: Yup.array().max(10),
    links: Yup.array()
      .of(Yup.string().matches(URL, 'Enter a valid url'))
      .max(10, 'Max 10 links'),
    budget: Yup.number().min(200).max(5000).required('Required'),
    dateStart: Yup.date()
      .transform(function (value, originalValue) {
        if (this.isType(value)) {
          return value;
        }
        const result = parse(originalValue, 'dd.MM.yy', new Date());
        setStartDate(result);
        return result;
      })
      .typeError('Enter a valid date')
      .required('Required')
      .min(today, 'Date is too early'),

    deadline: Yup.date()
      .transform(function (value, originalValue) {
        if (this.isType(value)) {
          return value;
        }
        const result = parse(originalValue, 'dd.MM.yy', new Date());
        return result;
      })
      .typeError('Enter a valid date')
      .required('Required')
      .min(startDate, 'Date is too early'),
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
