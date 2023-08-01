import styled from '@emotion/styled';
import theme from 'theme';

export const ProgressBox = styled.span`
  display: block;
  margin-bottom: ${theme.space[3]};
`;

export const Completed = styled.span`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.thin};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: ${theme.space[2]};
  }
`;

export const Progress = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[1]};
`;

export const ProgressInfo = styled.span`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.thin};
  display: flex;
  justify-content: space-between;
`;

export const ProgressTrail = styled.span`
  display: flex;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background-color: ${theme.colors.progress.trail};
  position: relative;
`;

export const ProgressPath = styled.span`
  position: absolute;
  width: ${p => `${p.progress}%`};
  top: 0;
  left: 0;
  display: block;
  height: 6px;
  border-radius: 3px;
  background-color: ${theme.colors.progress.path};
`;
