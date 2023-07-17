import styled from '@emotion/styled';
import theme from 'theme';

export const RightSideBox = styled.div`
  flex: 50%;
`;

export const RightSideContainer = styled.div`
  width: calc(${theme.mediaBreakpoints.desktop.width} / 2);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${theme.colors.black};
  font-size: 32px;
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.m};
  margin-top: 224px;
  margin-bottom: 32px;
  text-align: left;
  display: block;
  width: 407px;
`;
