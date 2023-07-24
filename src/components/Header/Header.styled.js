import styled from '@emotion/styled';
import theme from 'theme';

export const HeaderBox = styled.header`
  width: 100%;
  padding: ${theme.space[4]};
`;

export const Welcome = styled.h1`
  font-size: ${theme.fontSizes.xxxl};
  font-weight: ${theme.fontWeights.regular};
  margin-bottom: ${theme.space[2]};
`;

export const Message = styled.h2`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.light};
  color: ${theme.colors.secondary.dark};
`;
