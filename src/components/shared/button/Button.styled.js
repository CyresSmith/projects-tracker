import styled from '@emotion/styled';
import theme from 'theme';

export const Btn = styled.button`
  padding: ${theme.space[2]} ${theme.space[4]};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  border-radius: 24px;
  border: none;
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary.regular};
  cursor: pointer;
  transition: ${theme.transition.primary};

  :hover {
    background-color: ${theme.colors.primary.hover};
  }
`;
