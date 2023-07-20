import styled from '@emotion/styled';
import theme from 'theme';

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
  width: 130px;
  height: 95%;
  padding-bottom: ${theme.space[3]};
  border-left: 1px dashed ${theme.colors.secondary.regular};
  position: relative;

  :last-of-type {
    border-right: 1px dashed ${theme.colors.secondary.regular};
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
