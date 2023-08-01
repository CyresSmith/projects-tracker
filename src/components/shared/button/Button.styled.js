import styled from '@emotion/styled';
import theme from 'theme';

export const Btn = styled.button`
  padding: ${theme.space[2]} ${theme.space[4]};
  font-size: ${theme.fontSizes.m};
  font-weight: ${p =>
    p.white === true ? theme.fontWeights.bold : theme.fontWeights.regular};
  border-radius: 24px;
  border: none;
  color: ${p => {
    switch (true) {
      case p.white:
        return theme.colors.primary.regular;

      case p.light:
        return theme.colors.primary.regular;

      default:
        return theme.colors.white;
    }
  }};
  background-color: ${p => {
    switch (true) {
      case p.white:
        return theme.colors.white;

      case p.light:
        return theme.colors.primary.light;

      case p.disabled:
        return theme.colors.primary.light;

      default:
        return theme.colors.primary.regular;
    }
  }};
  cursor: pointer;
  transition: ${theme.transition.primary};

  :hover:not(:disabled) {
    color: ${p => {
      switch (true) {
        case p.light:
          return theme.colors.white;

        default:
          return theme.colors.white;
      }
    }};

    background-color: ${p => {
      switch (true) {
        case p.white:
          return theme.colors.primary.light;

        default:
          return theme.colors.primary.hover;
      }
    }};
  }
`;
