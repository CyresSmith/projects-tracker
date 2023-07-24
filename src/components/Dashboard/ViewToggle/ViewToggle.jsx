import theme from 'theme';
import { ViewToggleBox } from './ViewToggle.styled';
import TextButton from 'components/shared/button/TextButton';
import TimeLineIcon from 'components/shared/Icons/TimeLineIcon';

import { RxDashboard } from 'react-icons/rx';

const ViewToggle = ({ viewType, setViewType }) => {
  return (
    <ViewToggleBox>
      <TextButton
        color={
          viewType === 'board'
            ? theme.colors.primary.regular
            : theme.colors.black
        }
        icon={RxDashboard}
        onClick={() => setViewType('board')}
      >
        Board
      </TextButton>
      <TextButton
        color={
          viewType === 'timeline'
            ? theme.colors.primary.regular
            : theme.colors.black
        }
        icon={TimeLineIcon}
        onClick={() => setViewType('timeline')}
      >
        Timeline
      </TextButton>
    </ViewToggleBox>
  );
};

export default ViewToggle;
