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
