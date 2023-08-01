import { useState, useEffect } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';
import { CalendarBox } from 'components/RightBar/Calendar/Calendar.styled';

const Calendar = ({ setFieldValue }) => {
  const [Day, setDay] = useState();

  useEffect(() => {
    if (!Day) return;

    setFieldValue('date', format(Day, 'yyyy-MM-dd'));
  }, [Day, setFieldValue]);

  const today = new Date();

  const disabledDays = {
    before: today,
  };

  return (
    <CalendarBox>
      <DayPicker
        mode="single"
        selected={Day}
        onSelect={setDay}
        disabled={disabledDays}
        fromMonth={today}
        fixedWeeks
        showOutsideDays
        ISOWeek
      />
    </CalendarBox>
  );
};

export default Calendar;
