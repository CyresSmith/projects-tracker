import { useEffect, useState } from 'react';

import { format, differenceInCalendarDays } from 'date-fns';
import { DayPicker, Row } from 'react-day-picker';

import 'react-day-picker/dist/style.css';
import './styles.css';

const DatePicker = ({ field, setFieldValue, togglePicker }) => {
  const [day, setDay] = useState(null);

  const today = new Date();

  const isPastDate = date => {
    return differenceInCalendarDays(date, new Date()) < 0;
  };

  const OnlyFutureRow = props => {
    const isPastRow = props.dates.every(isPastDate);
    if (isPastRow) <></>;
    return <Row {...props} />;
  };

  const selectHandle = value => {
    const date = format(value, 'dd.MM.yy');
    setDay(date);
    setFieldValue(field, date);
    togglePicker();
  };

  return (
    <div id="datePicker">
      <DayPicker
        mode="single"
        selected={day}
        onSelect={selectHandle}
        fromDate={today}
        captionLayout="dropdown"
        fixedWeeks
        showOutsideDays
        hidden={isPastDate}
        components={{ Row: OnlyFutureRow }}
        ISOWeek
      />
    </div>
  );
};

export default DatePicker;
