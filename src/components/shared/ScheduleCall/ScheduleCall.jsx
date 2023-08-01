import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import parse from 'date-fns/parse';

import { ScheduleCallBox, FormBox } from './ScheduleCall.styled';

import Calendar from './Calendar';

import Input from 'components/shared/Input';
import Button from 'components/shared/button';
import { Error } from 'components/shared/Input/Input.styled';

const today = new Date();

const ValidationSchema = Yup.object().shape({
  date: Yup.date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'yyyy-MM-dd', new Date());
      return result;
    })
    .typeError('Enter a valid date')
    .required('Required')
    .min(today, 'Date is too early'),
  time: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .max(5, 'Must be max 5 characters')
    .required('Required'),
  duration: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .max(5, 'Must be max 5 characters')
    .required('Required'),
});

const initialValues = {
  date: '',
  time: '',
  duration: '',
};

const ScheduleCall = ({ events, setEventsState }) => {
  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ setFieldValue }) => {
        return (
          <ScheduleCallBox>
            <div>
              <Calendar setFieldValue={setFieldValue} />
              <ErrorMessage name="date" component={Error} />
            </div>

            <FormBox>
              <Input type="text" id="time" label="Time" placeholder="00:00" />
              <Input
                type="text"
                id="duration"
                label="Duration"
                placeholder="00:00"
              />
              <Button type="submit">Schedule</Button>
            </FormBox>
          </ScheduleCallBox>
        );
      }}
    </Formik>
  );
};

export default ScheduleCall;
