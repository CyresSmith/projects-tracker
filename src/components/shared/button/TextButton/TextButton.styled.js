import styled from '@emotion/styled';
import theme from 'theme';

export const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${p => (p.color ? p.color : theme.colors.primary.regular)};
  transition: ${theme.transition.primary};
  padding: 0;

  svg {
    margin-right: ${theme.space[2]};
    transition: ${theme.transition.primary};
  }

  :disabled {
    pointer-events: none;
  }

  :hover:not(:disabled) {
    svg {
      color: ${theme.colors.primary.hover};
    }

    span {
      color: ${theme.colors.primary.regular};
    }
  }
`;

export const Text = styled.span`
  color: ${p => (p.color ? p.color : theme.colors.black)};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.regular};
  transition: ${theme.transition.primary};

`;
