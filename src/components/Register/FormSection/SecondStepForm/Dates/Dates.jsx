import Input from 'components/shared/Input/Input';
import { DatesBox, InputBox } from './Dates.styled';
import { Label } from 'components/shared/Input/Input.styled';
import CalendarIcon from 'components/shared/Icons/CalendarIcon/CalendarIcon';
import DatePicker from './DatePicker/DatePicker';
import { useState } from 'react';

const Dates = ({ setFieldValue, values }) => {
  const [dateStartOpen, setDateStartOpen] = useState(false);
  const [deadlineOpen, setDeadlineOpen] = useState(false);

  return (
    <DatesBox>
      <Label htmlFor="dateStart">Choose the dates of project launch</Label>

      <InputBox>
        <Input
          type="text"
          placeholder="Start"
          id="dateStart"
          value={values.dateStart}
          // onClick={() => setDateStartOpen(prev => !prev)}
        />

        <CalendarIcon
          id="dateStart"
          onClick={() => setDateStartOpen(prev => !prev)}
        />

        {dateStartOpen && (
          <DatePicker
            field="dateStart"
            setFieldValue={setFieldValue}
            togglePicker={() => setDateStartOpen(prev => !prev)}
          />
        )}
      </InputBox>

      <InputBox>
        <Input
          type="text"
          placeholder="Deadline"
          id="deadline"
          value={new Date(values.dateStart).toLocaleDateString()}
          // onClick={() => setDeadlineOpen(prev => !prev)}
        />

        <CalendarIcon
          id="deadline"
          onClick={() => {
            setDeadlineOpen(prev => !prev);
          }}
        />

        {deadlineOpen && (
          <DatePicker
            field="deadline"
            setFieldValue={setFieldValue}
            togglePicker={() => setDeadlineOpen(prev => !prev)}
          />
        )}
      </InputBox>
    </DatesBox>
  );
};

export default Dates;
