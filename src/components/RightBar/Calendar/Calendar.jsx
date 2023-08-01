import { useEffect, useState } from 'react';

import { format, differenceInCalendarDays } from 'date-fns';
import { DayPicker, Row } from 'react-day-picker';

import 'react-day-picker/dist/style.css';
import '../../Register/FormSection/SecondStepForm/Dates/DatePicker/styles.css';
import { CalendarBox } from './Calendar.styled';
import './calendarStyles.css';

const Calendar = ({ events = [], setDate = null, afterToday = false }) => {
  const [day, setDay] = useState(null);
  const [eventsDates, setEventsDates] = useState([]);

  useEffect(() => {
    if (!setDate) return;

    setDate(day);
  }, [day, setDate]);

  useEffect(() => {
    if (events.length === 0) return;

    events.map(event =>
      setEventsDates(prev => [...prev, new Date(event.date)])
    );
  }, [events]);

  return (
    <CalendarBox>
      <DayPicker
        mode="multiple"
        selected={eventsDates}
        onSelect={setDay}
        fixedWeeks
        showOutsideDays
        ISOWeek
      />
    </CalendarBox>
  );
};

export default Calendar;
