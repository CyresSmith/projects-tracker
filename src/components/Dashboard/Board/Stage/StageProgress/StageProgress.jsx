import theme from "theme";
import { ProgressBox, Completed, Progress, ProgressInfo, ProgressTrail, ProgressPath } from "./StageProgress.styled"

import { BsCheckCircleFill } from 'react-icons/bs';

const StageProgress = ({ progress = 0 }) => {
  return (
    <ProgressBox>
      {progress === 100 && (
        <Completed>
          <BsCheckCircleFill
            size={24}
            color={theme.colors.progress.path}
          />
          Completed
        </Completed>
      )}
      {progress !== 100 && (
        <Progress>
          <ProgressInfo>
            <span>Progress</span>
            <span>{progress}%</span>
          </ProgressInfo>
          <ProgressTrail>
            <ProgressPath progress={progress} />
          </ProgressTrail>
        </Progress>
      )}
    </ProgressBox>
  )
}

export default StageProgress
