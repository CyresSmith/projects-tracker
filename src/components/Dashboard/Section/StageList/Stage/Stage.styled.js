import styled from '@emotion/styled';
import theme from 'theme';

export const StageBox = styled.li`
  /* width: calc((100% - ${theme.space[4]}) / 2); */
  width: 322px;
  height: 300px;
  border-radius: ${theme.radii.m};
  background-color: ${theme.colors.white};
  padding: ${theme.space[3]};
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const Active = styled.span`
  display: flex;
  width: 100%;
  height: ${theme.space[3]};
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${theme.space[2]};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary.regular};
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${theme.fontSizes.xs};
`;

export const Name = styled.span`
  display: block;
  font-size: ${theme.fontSizes.l};
  margin-top: ${theme.space[2]};
  margin-bottom: ${theme.space[2]};
`;

export const Desc = styled.span`
  display: block;
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.light};
  line-height: ${theme.lineHeights.m};
  margin-bottom: ${theme.space[3]};
  opacity: 0.6;
`;

export const Time = styled.span`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.light};
  margin-bottom: ${theme.space[3]};
  opacity: 0.4;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: ${theme.space[1]};
  }
`;

export const Completed = styled.span`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.light};
  display: flex;
  align-items: center;

  svg {
    margin-right: ${theme.space[1]};
  }
`;

export const Process = styled.span`
  display: block;
  margin-bottom: ${theme.space[3]};
`;
export const Progress = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[1]};
`;

export const ProgressInfo = styled.span`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.light};
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

export const Contact = styled.span`
  display: flex;
  align-items: center;
`;

export const ContactName = styled.span`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.light};
`;

export const ContactImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: ${theme.radii.round};
  object-fit: cover;
  margin-right: ${theme.space[1]};
`;
