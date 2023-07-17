import styled from '@emotion/styled';
import theme from 'theme';

export const Btn = styled.button`
  padding: ${theme.space[2]} ${theme.space[4]};
  font-size: ${theme.fontSizes.m};
  font-weight: ${p =>
    p.white === true ? theme.fontWeights.bold : theme.fontWeights.regular};
  border-radius: 24px;
  border: none;
  color: ${p =>
    p.white === true ? theme.colors.primary.regular : theme.colors.white};
  background-color: ${p => {
    switch (true) {
      case p.white:
        return theme.colors.white;

      case p.disabled:
        return theme.colors.primary.light;

      default:
        return theme.colors.primary.regular;
    }
  }};
  cursor: pointer;
  transition: ${theme.transition.primary};

  :hover:not(:disabled) {
    background-color: ${p =>
      p.white === true
        ? theme.colors.primary.light
        : theme.colors.primary.hover};
  }
`;
