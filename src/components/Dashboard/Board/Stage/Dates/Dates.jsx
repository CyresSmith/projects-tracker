import CalendarIcon from 'components/shared/Icons/CalendarIcon';

import { PiTimerFill } from 'react-icons/pi';

import theme from 'theme';

import { DatesBox } from './Dates.styled';

const Dates = ({ active, dateStart, deadline, duration }) => {
  const localeDate = date => new Date(date).toLocaleDateString();

  return (
    <DatesBox active={active}>
      <span>
        <CalendarIcon
          size={18}
          color={active ? theme.colors.primary.regular : theme.colors.black}
        />
        {localeDate(dateStart)} - {localeDate(deadline)}
      </span>
      <span>
        <PiTimerFill
          size={18}
          color={active ? theme.colors.warning : theme.colors.black}
        />
        {duration} hours
      </span>
    </DatesBox>
  );
};

export default Dates;
