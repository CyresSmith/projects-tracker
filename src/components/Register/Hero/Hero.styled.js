import styled from '@emotion/styled';
import theme from 'theme';

export const HeroSection = styled.section`
  width: 100vw;
  height: 607px;
  background-color: ${theme.colors.primary.regular};
  padding: ${theme.space[3]} 0;

  div {
    position: relative;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.white};
  display: block;
  width: 533px;
  text-align: center;
  margin-top: 158px;
  margin-bottom: 36px;
`;
