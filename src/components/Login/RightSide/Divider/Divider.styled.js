import styled from '@emotion/styled';
import theme from 'theme';

export const Or = styled.span`
  color: ${theme.colors.secondary.regular};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.m};
  margin: 32px 0 68px;
  position: relative;

  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 174px;
    top: 14px;
    right: 33px;
    height: 1px;
    background-color: ${theme.colors.secondary.regular};
  }

  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 174px;
    top: 14px;
    left: 33px;
    height: 1px;
    background-color: ${theme.colors.secondary.regular};
  }
`;
