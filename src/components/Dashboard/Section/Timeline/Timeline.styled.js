import styled from '@emotion/styled';
import theme from 'theme';

const dayWidth = '130px';

export const TimelineBox = styled.ul`
  width: 1235px;
  height: 630px;
  display: flex;
  flex-shrink: 0;
  padding: ${theme.space[4]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.radii.l};
  overflow-x: scroll;
  cursor: ${p => p.cursor};
`;

export const Day = styled.li`
  flex-shrink: 0;
  width: ${dayWidth};
  height: 490px;
  border-left: 1px dashed ${theme.colors.secondary.regular};
  position: relative;

  :last-of-type {
    width: 1px;
  }
`;

export const DayDate = styled.h4`
  color: ${theme.colors.secondary.regular};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.light};
  line-height: ${theme.lineHeights.m};
  position: absolute;
  bottom: calc(-21px - ${theme.space[3]});
  left: -17px;
`;

export const StageBox = styled.div`
  width: calc(${dayWidth} * ${p => p.duration});
  height: calc(490px / ${p => p.numberOfStages});
  background-color: ${p => {
    switch (true) {
      case p.status === 'completed':
        return theme.colors.progress.trail;

      case p.status === 'active':
        return theme.colors.primary.light;

      default:
        return theme.colors.secondary.bg;
    }
  }};
  position: absolute;
  top: calc((490px / ${p => p.numberOfStages}) * ${p => p.index});
  left: 0;
  border-radius: 0 calc((490px / ${p => p.numberOfStages}) / 2)
    calc((490px / ${p => p.numberOfStages}) / 2) 0;
  border-left: 4px solid
    ${p => {
      switch (true) {
        case p.status === 'completed':
          return theme.colors.progress.path;

        case p.status === 'active':
          return theme.colors.primary.regular;

        default:
          return theme.colors.secondary.dark;
      }
    }};
  z-index: 2;
`;

export const StageInfo = styled.p`
  position: absolute;
  top: calc((490px / ${p => p.numberOfStages}) - 50%);
  left: ${theme.space[2]};
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
`;

export const StageName = styled.span`
  color: ${p => {
    switch (true) {
      case p.status === 'completed':
        return theme.colors.progress.path;

      case p.status === 'active':
        return theme.colors.primary.regular;

      default:
        return theme.colors.secondary.dark;
    }
  }};
  font-weight: ${theme.fontWeights.light};
  margin-right: ${theme.space[3]};
`;

export const StageDates = styled.span`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.light};
  opacity: 0.4;
`;
