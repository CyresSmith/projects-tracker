import { useEffect, useState } from 'react';

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Box, Info, Percentage, ProgressBox, Text } from './Progress.styled';
import theme from 'theme';

import stages from 'stages.json';

const Progress = () => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  useEffect(() => {
    if (!stages) return;

    let start = new Date();
    let end = new Date();

    stages.forEach(({ dateStart, deadline }) => {
      const startDate = new Date(dateStart);
      const endDate = new Date(deadline);

      if (startDate <= start) start = startDate;

      if (endDate > end) end = endDate;
    });

    setStart(start);
    setEnd(end);
  }, []);

  const progress = () => {
    const totalTime = end - start;

    const elapsedTime = new Date() - start;

    const progress = Math.round((elapsedTime / totalTime) * 100);

    if (progress >= 100) {
      return 100;
    }

    if (progress <= 0) {
      return 0;
    }

    return progress;
  };

  return (
    <ProgressBox>
      <Box>
        <CircularProgressbarWithChildren
          value={progress()}
          strokeWidth={12}
          styles={buildStyles({
            pathColor: theme.colors.progress.path,
            trailColor: theme.colors.progress.trail,
          })}
        >
          <Info>
            <Percentage>{progress()}%</Percentage>
            <Text>Ready to launch</Text>
          </Info>
        </CircularProgressbarWithChildren>
      </Box>
    </ProgressBox>
  );
};

export default Progress;
