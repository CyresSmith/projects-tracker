import { BsFillPlusCircleFill } from 'react-icons/bs';

import TextButton from 'components/shared/button/TextButton';
import Calendar from './Calendar';
import Header from './Header';
import Events from './Events';
import Progress from './Progress';

import { RightBarBox } from './RightBar.styled';

const RightBar = () => {
  return (
    <RightBarBox>
      <Header />
      <Calendar />
      <TextButton icon={BsFillPlusCircleFill}>Schedule a call</TextButton>
      <Events />
      <Progress />
    </RightBarBox>
  );
};

export default RightBar;
