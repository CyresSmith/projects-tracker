import styled from '@emotion/styled';
import theme from 'theme';

export const Box = styled.div`
  margin-top: ${theme.space[4]};
`;

export const ChatBox = styled.div`
  height: 294px;
`;

export const Title = styled.h5`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeights.m};
  margin-bottom: ${theme.space[2]};
`;
