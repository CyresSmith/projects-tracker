import styled from '@emotion/styled';
import theme from 'theme';

export const LeftSideBox = styled.div`
  flex: 50%;
  background-color: ${theme.colors.primary.regular};
  padding-top: ${theme.space[4]};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const LeftSideContainer = styled.div`
  width: calc(${theme.mediaBreakpoints.desktop.width} / 2);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 46px;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin-top: 311px;
  display: block;
  width: 584px;
`;
