import styled from '@emotion/styled';
import theme from 'theme';

export const Btn = styled.button`
  height: 48px;
  width: 407px;
  border-radius: 24px;
  background-color: ${theme.colors.primary.light};
  border: none;
  cursor: pointer;
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.m};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.space[2]};
  padding: 0;
  transition: ${theme.transition.primary};

  :hover {
    background-color: ${theme.colors.primary.bg};
  }
`;
