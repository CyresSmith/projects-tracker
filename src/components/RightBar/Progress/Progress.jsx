import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Box, Info, Percentage, ProgressBox, Text } from './Progress.styled';
import theme from 'theme';

const percentage = 10;

const Progress = () => {
  return (
    <ProgressBox>
      <Box>
        <CircularProgressbarWithChildren
          value={percentage}
          strokeWidth={12}
          styles={buildStyles({
            pathColor: theme.colors.progress.path,
            trailColor: theme.colors.progress.trail,
          })}
        >
          <Info>
            <Percentage>{percentage}%</Percentage>
            <Text>Ready to launch</Text>
          </Info>
        </CircularProgressbarWithChildren>
      </Box>
    </ProgressBox>
  );
};

export default Progress;
