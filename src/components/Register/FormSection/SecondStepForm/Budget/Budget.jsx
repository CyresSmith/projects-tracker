import { useEffect, useState } from 'react';
import { ErrorMessage } from 'formik';

import { RangeBox, Range } from './Budget.styled';
import { Error, Label } from 'components/shared/Input/Input.styled';

const Budget = ({ values }) => {
  useEffect(() => {
    for (let e of document.querySelectorAll(
      'input[type="range"].slider-progress'
    )) {
      e.style.setProperty('--value', e.value);
      e.style.setProperty('--min', e.min == '' ? '200' : e.min);
      e.style.setProperty('--max', e.max == '' ? '5000' : e.max);
      e.addEventListener('input', () =>
        e.style.setProperty('--value', e.value)
      );
    }
  }, []);

  return (
    <RangeBox>
      <Label htmlFor="budget">Set up the budget: ${values.budget}</Label>
      <Range
        className="styled-slider slider-progress"
        type="range"
        id="budget"
        name="budget"
        min="200"
        max="5000"
        step="100"
        value={values.budget}
      />

      <ErrorMessage name="budget" component={Error} />
    </RangeBox>
  );
};

export default Budget;
